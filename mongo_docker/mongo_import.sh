#!/usr/bin/env bash
mongoimport --db test2 --collection users --file ./init.json --jsonArray --port 29017