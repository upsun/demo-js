#!/usr/bin/env bash

upsun tunnel:open -A nodejs_app -e pr-2
export PLATFORM_RELATIONSHIPS="$(upsun tunnel:info -A nodejs_app -e pr-2 --encode)"
export DATABASE_HOST=$(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r '.database[0].host')
export DATABASE_PORT=$(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r '.database[0].port')
export DATABASE_USERNAME=$(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r '.database[0].username')
export DATABASE_PASSWORD=$(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r '.database[0].password')
export DATABASE_PATH=$(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r '.database[0].path')
