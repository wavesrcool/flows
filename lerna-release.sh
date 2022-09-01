#!/bin/bash

echo "[Flows]: Publishing new release."

npx lerna version 
npx lerna publish from-git


