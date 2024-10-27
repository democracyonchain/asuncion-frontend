#!/usr/bin/env bash

# Log Each command
set -x

# Bail on first error
set -e

BASE_DIR=$(dirname $0)
SUBPACKAGE_DIR="$(dirname $( cd "$BASE_DIR" ; pwd -P ))"
BRANCH_NAME=$(git branch --show-current)

npx --no-install gh-pages -b static_${BRANCH_NAME} --add \
  --dist $SUBPACKAGE_DIR \
  --src "importmap.*.json" \
  --dest .
