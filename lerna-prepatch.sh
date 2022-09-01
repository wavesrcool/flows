#!/bin/bash

echo "[Flows]: Publishing new release [PREPATCH]."

npx lerna version prepatch
npx lerna publish from-git


