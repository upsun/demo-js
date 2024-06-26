#!/usr/bin/env bash

ROOT=$(pwd)

npm install --workspace=main --workspace=nodejs

cd $ROOT/apps/bun && bun install
cd $ROOT/apps/deno && deno cache package.json && deno compile --allow-env --allow-net --allow-read main.ts

cd $ROOT && npm run build
