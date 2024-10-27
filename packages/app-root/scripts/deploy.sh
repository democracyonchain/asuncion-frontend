#!/usr/bin/env bash

# Log Each command
set -x

# Bail on first error
set -e


BRANCH_NAME=$(git branch --show-current)
npx --no-install gh-pages -b static_${BRANCH_NAME} --add \
  --dist dist \
  --dest .