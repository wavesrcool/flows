#!/bin/bash

echo "[Flows]: Publishing new release."

yarn build
npx lerna version 
npx lerna publish from-git


