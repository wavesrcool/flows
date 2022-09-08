#!/bin/bash

echo "[Flows]: Publishing new release [PATCH]."

ARG1="$1"

yarn build
git add .
git commit -m '[flows] Update working tree.'
git push -u origin main

if [ ARG1 == "all" ]; then
    echo "[Flows]: ... using --force-publish"
    npx lerna version patch --force-publish
else
    npx lerna version patch
fi

git add .
git commit -m "[flows] Publish."
gp

npx lerna publish from-git


