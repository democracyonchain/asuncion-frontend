#!/usr/bin/env bash

# Log Each command
set -x

# Bail on first error
set -e

BASE_DIR=$(dirname $0)
SUBPACKAGE_DIR="$(dirname $( cd "$BASE_DIR" ; pwd -P ))"
CURR_VERSION=$(node -p "require('${SUBPACKAGE_DIR}/package.json').version")
BRANCH_NAME=$(git branch --show-current)

npx --no-install gh-pages -b static_${BRANCH_NAME} --add \
  --dist $SUBPACKAGE_DIR/dist \
  --src "**/!(*.html)" \
  --dest @bsc/procesos/${CURR_VERSION}
