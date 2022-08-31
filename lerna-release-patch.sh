#!/bin/bash

echo "[Flows]: Publishing new release [PATCH]."

yarn build
npx lerna version patch
npx lerna publish from-git


