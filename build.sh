#!/usr/bin/env bash
#
# Builds the composite. Replaces the root Gradle tasks `uplift`, `taninim` and `ping`.
#
# Two phases, and the order is not a preference. Maven resolves build plugins during model
# building, before any module is compiled, so uplift-maven-plugin has to exist in a
# repository before taninim's build can start. Gradle's includeBuild had no such
# restriction. See MAVEN-MIGRATION.md section 3.
#
#   build.sh              build and install both, then the example
#   build.sh uplift       just uplift
#   build.sh taninim      just taninim, assuming uplift is installed
#   build.sh example      just the hello-web example
#   build.sh ping         report the deployed stack
#   build.sh deploy       deploy taninim to AWS. Asks first.

set -euo pipefail

readonly ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

phase() {
    printf '\n==> %s\n' "$1"
}

buildUplift() {
    phase "uplift"
    mvn -B -f "$ROOT/uplift/pom.xml" install "$@"
}

buildTaninim() {
    phase "taninim"
    mvn -B -f "$ROOT/taninim/pom.xml" install "$@"
}

buildExample() {
    phase "examples/hello-web"
    mvn -B -f "$ROOT/uplift/examples/hello-web/pom.xml" install "$@"
}

case "${1:-all}" in
all)
    shift || true
    buildUplift "$@"
    buildTaninim "$@"
    buildExample "$@"
    ;;
uplift)
    shift
    buildUplift "$@"
    ;;
taninim)
    shift
    buildTaninim "$@"
    ;;
example)
    shift
    buildExample "$@"
    ;;
ping)
    mvn -B -f "$ROOT/taninim/pom.xml" -pl ascension uplift:ping
    ;;
synth)
    # The whole CDK path, without touching AWS.
    mvn -B -f "$ROOT/taninim/pom.xml" -pl ascension uplift:init uplift:synth
    ;;
deploy)
    read -r -p "Deploy taninim to AWS? [y/N] " reply
    [[ "$reply" == "y" || "$reply" == "Y" ]] || { echo "Nothing done."; exit 1; }
    buildUplift
    buildTaninim
    # The whole chain, as Gradle ran it: uplift dependsOn uplift-bootstrap dependsOn
    # uplift-init. Maven has no task dependencies for directly invoked goals, so the chain
    # is spelled out here.
    mvn -B -f "$ROOT/taninim/pom.xml" -pl ascension uplift:init uplift:bootstrap uplift:deploy
    ;;
*)
    echo "usage: $(basename "$0") {all|uplift|taninim|example|ping|synth|deploy}" >&2
    exit 2
    ;;
esac
