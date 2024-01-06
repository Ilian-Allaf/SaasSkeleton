#!/bin/bash

docker-compose down -v

docker-compose up -d

while true; do
    npx hasura metadata reload > /dev/null 2>&1

    if [ $? -eq 0 ]; then
        break
    else
        sleep 2
    fi
done

npx hasura deploy --log-level DEBUG

npx hasura metadata reload
