#!/usr/bin/env bash
find . -not -path '*/\.*' -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' &&  /bin/bash ./docker_build_and_replace.sh" \;