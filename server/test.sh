#!/bin/bash
tag=$( git describe --abbrev=0 )

echo $DOCKER_PASSWORD | docker login --username bingneef --password-stdin
docker build -t bingneef/docker-nextjs:$tag .
docker push bingneef/docker-nextjs:$tag