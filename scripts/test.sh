#!/bin/bash

yarn contr:dev

source neardev/dev-account.env
ID=$CONTRACT_NAME

# near call $ID add_candidate '{"candidate": "abc"}' --accountId $ID
near view $ID get_candidates