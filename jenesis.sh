#!/usr/bin/env bash

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
(
cd "$script_dir"
java build/jenesis/Make.java "$@"
)
