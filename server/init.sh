#!/bin/sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
apt-cache policy docker-ce
sudo apt-get install -y docker-ce
sudo systemctl status docker

# Start docker
docker pull bingneef/docker-snowflake:latest
docker stop $(docker ps -aq)
docker run -d -p 80:3000 --restart=always bingneef/docker-snowflake:latest