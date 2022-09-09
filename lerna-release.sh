#!/bin/bash

echo "[flows]: Publishing new release."

if [ $1 == "all" ]; then
    echo "[flows]: ... using --force-publish"
    npx lerna version --force-publish
else
    npx lerna version 
fi

npx lerna publish from-git


