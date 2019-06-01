#! /bin/zsh

# Build docker image
docker build -t my-php-app .

# Run a container named apache-php
docker run -d --name apache-php my-php-app 