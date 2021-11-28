#!/bin/bash
ID=vladkens.testnet
CN=challenge-7.$ID

yarn contr:test
[ $? -eq 0 ] || exit 1

yarn contr:build
[ $? -eq 0 ] || exit 1

near deploy $CN --wasmFile out/main.wasm
near state $CN