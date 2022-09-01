#!/bin/bash

echo "[Flows]: Publishing new release [PREPATCH]."

ARG1="$1"

if [ ARG1 == "all" ]; then
    echo "[Flows]: ... using --force-publish"
    npx lerna version prepatch --force-publish
else
    npx lerna version prepatch
fi

npx lerna publish from-git


