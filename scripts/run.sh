#!/bin/sh
actualFile=$(readlink -f "$0")
node "$actualFile/../../src/shahroodwifi.js" "$@"
