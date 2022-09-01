#!/bin/bash

echo "[Flows]: Publishing new release."

if [ $1 == "all" ]; then
    echo "[Flows]: ... using --force-publish"
    npx lerna version --force-publish
else
    npx lerna version 
fi

npx lerna publish from-git


