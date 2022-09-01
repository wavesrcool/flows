#!/bin/bash

echo "[Flows]: Publishing new release."

FORCE_ALL="$1"

if [ $1 == "all" ]; then
    npx lerna version --force-publish
else
    npx lerna version 
fi

npx lerna publish from-git


