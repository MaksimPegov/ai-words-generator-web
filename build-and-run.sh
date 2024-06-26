#!/bin/bash

# Stop the existing Docker container
docker stop words-generator-web

# Remove the existing Docker container
docker rm words-generator-web

# Rebuild the Docker image
docker build -t words-generator-web:latest .

# Run a new Docker container
docker run -d -p 1000:1000 --name words-generator-web words-generator-web:latest

