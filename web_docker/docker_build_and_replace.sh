#!/usr/bin/env bash
echo "DOCKERHOST=$(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1)" > .env
docker-compose up --build -d --remove-orphans --force-recreate