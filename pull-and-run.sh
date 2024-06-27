#!/bin/bash

# Stop the existing Docker container
docker stop words-generator-web

# Remove the existing Docker container
docker rm words-generator-web

# Pull the Docker image
docker pull maksimpegov/words-generator-web

# Run a new Docker container
docker run --name words-generator-web -d -p 1000:1000 maksimpegov/words-generator