#!/bin/bash

echo "[Flows]: Publishing new release [PATCH]."

ARG1="$1"

yarn build
git add .
git commit -m '[flows] Publish.'
git push -u origin main

if [ ARG1 == "all" ]; then
    echo "[Flows]: ... using --force-publish"
    npx lerna version patch --force-publish
else
    npx lerna version patch
fi

npx lerna publish from-git


