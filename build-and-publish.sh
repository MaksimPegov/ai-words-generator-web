#!/bin/bash

# docker login -u maksimpegov

docker build --platform linux/amd64  -t words-generator-web:latest .

docker tag words-generator-web:latest maksimpegov/words-generator-web

docker push maksimpegov/words-generator-web