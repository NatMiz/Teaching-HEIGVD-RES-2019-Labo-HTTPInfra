#!/bin/zsh
APP_NAME="php-app"
IMAGE_NAME="my-php-app"

docker stop $APP_NAME

docker rm $APP_NAME

docker build -t $IMAGE_NAME .

docker run -d --name $APP_NAME -t $IMAGE_NAME

docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $APP_NAME
