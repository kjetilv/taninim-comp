#!/usr/bin/env bash
#
# Compare uplift plugin build outputs against a captured baseline.
#
# See MAVEN-MIGRATION.md section 8. The native binary is not byte-reproducible, so this
# compares the deterministic artifacts only: the rendered Dockerfiles, the staged
# classpath listings, the zip structure, the generated CDK pom and app, and the CDK
# template with asset hashes normalised.
#
# Usage:
#   compare-baseline.sh capture <dir>    collect current outputs into <dir>
#   compare-baseline.sh verify  <dir>    collect current outputs and diff against <dir>

set -uo pipefail

readonly ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly TANINIM="$ROOT/taninim"
readonly LAMBDAS=(kudu yellin)

# Gradle writes to build/, Maven to target/. Both exist at once during the migration,
# because the Gradle files stay in place until the last step. Pick whichever holds the
# more recently written Dockerfile, so this never silently compares stale output.
buildDir() {
    local module="$1"
    local newest="" newestTime=0 candidate marker time
    for candidate in "$TANINIM/$module/build" "$TANINIM/$module/target"; do
        [[ -d "$candidate" ]] || continue
        marker="$candidate/uplift/Dockerfile"
        [[ -f "$marker" ]] || marker="$candidate"
        time=$(stat -f %m "$marker" 2>/dev/null || echo 0)
        if [[ "$time" -ge "$newestTime" ]]; then
            newestTime="$time"
            newest="$candidate"
        fi
    done
    [[ -n "$newest" ]] || return 1
    echo "$newest"
}

# Two sources of variance in the CDK template, neither of them meaningful:
#
#  1. The two 64-hex asset hashes are SHA-256 sums of the lambda zips, and the zips are
#     not reproducible. Replaced with a placeholder.
#  2. Key order. LambdaStacker builds lambda environments with Map.of, whose iteration
#     order is randomised per JVM by a salt in ImmutableCollections, so the same inputs
#     produce different key order between synth runs. Verified by running one synth three
#     times. CloudFormation templates are order insensitive, so all keys are sorted.
normalizeTemplate() {
    sed -E -e 's/[0-9a-f]{64}/<ASSET-HASH>/g' "$1" \
        | python3 -c 'import json,sys; json.dump(json.load(sys.stdin), sys.stdout, sort_keys=True, indent=1)'
}

collect() {
    local out="$1"
    mkdir -p "$out"

    local module dir
    for module in "${LAMBDAS[@]}"; do
        dir="$(buildDir "$module")" || { echo "MISSING: no build/target dir for $module" >&2; continue; }

        [[ -f "$dir/uplift/Dockerfile" ]] \
            && cp "$dir/uplift/Dockerfile" "$out/$module.Dockerfile"

        [[ -d "$dir/uplift/classpath" ]] \
            && (cd "$dir/uplift/classpath" && ls -1 | sort) > "$out/$module.classpath.txt"

        # Entry names and sizes only. Timestamps and the compressed bytes vary per run.
        [[ -f "$dir/uplift/$module.zip" ]] \
            && unzip -l "$dir/uplift/$module.zip" | awk 'NR>3 && NF>=4 {print $1, $4}' \
                > "$out/$module.zip.txt"
    done

    local cdk
    cdk="$(buildDir ascension)" || { echo "MISSING: no build/target dir for ascension" >&2; return; }
    cdk="$cdk/cdk-app"

    [[ -f "$cdk/pom.xml" ]] && cp "$cdk/pom.xml" "$out/cdk-app.pom.xml"

    [[ -f "$cdk/src/main/java/lambda/uplift/app/CloudApp.java" ]] \
        && cp "$cdk/src/main/java/lambda/uplift/app/CloudApp.java" "$out/CloudApp.java"

    [[ -f "$cdk/cdk.out/taninim.template.json" ]] \
        && normalizeTemplate "$cdk/cdk.out/taninim.template.json" > "$out/taninim.template.json"
}

case "${1:-}" in
capture)
    [[ $# -eq 2 ]] || { echo "usage: $0 capture <dir>" >&2; exit 2; }
    collect "$2"
    echo "Captured to $2:"
    ls -1 "$2"
    ;;
verify)
    [[ $# -eq 2 ]] || { echo "usage: $0 verify <dir>" >&2; exit 2; }
    baseline="$2"
    [[ -d "$baseline" ]] || { echo "No such baseline: $baseline" >&2; exit 2; }
    current="$(mktemp -d)"
    trap 'rm -rf "$current"' EXIT
    collect "$current"
    if diff -ru "$baseline" "$current"; then
        echo "MATCH: all deterministic artifacts identical to $baseline"
    else
        echo "DIFFER: see the diff above" >&2
        exit 1
    fi
    ;;
*)
    echo "usage: $0 {capture|verify} <dir>" >&2
    exit 2
    ;;
esac
