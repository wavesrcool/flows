#!/bin/bash

echo "[Flows]: Publishing new release [PATCH]."

npx lerna version patch
npx lerna publish from-git


