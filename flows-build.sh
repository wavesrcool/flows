#!/bin/bash

echo "[flows]: Enter the PostgreSQL url..."
read $DBURL

FLOWS_GLOBAL
yarn build0