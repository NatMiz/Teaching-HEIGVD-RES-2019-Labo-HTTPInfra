# RES - Labo HTTP-Infra - Report

<center>Nathanaël Mizutani, Nikolaos Garanis</center>

## Step 1: Static HTTP server with apache httpd
 Le conteneur Apache statique, se base sur l'image `php:apache 7.2` de Docker.
 L'instruction `EXPOSE 80` est là pour informer que le conteneur se sert de ce port-ci.

 Nous avons utilisé un template du site `bootstrapmade.com` pour la page web du serveur. Celle-ci a été épurée et personnalisée pour correspondre à nos besoins.
 Le code source de la page web est copié dans le répertoire `/var/www/html/` du conteneur lors de sa création.

 Pour créer et lancer un conteneur apache statique, il suffit de lancer le script `launchDocker.sh` avec `zsh`. Le script renvoi aussi l'adresse IP du conteneur.
 Pour accéder à la page web il faut copier cette adresse ip dans un navigateur web, en pensant à autoriser les scripts. Sinon la page ne s'affichera pas correctement.

## Step 2: Dynamic HTTP server with express.js


## Step 3: Reverse proxy with apache (static configuration)

## Step 4: AJAX requests with JQuery

## Step 5: Dynamic reverse proxy configuration

## Additional steps to get extra points on top of the "base" grade

### Load balancing: multiple server nodes

### Load balancing: round-robin vs sticky sessions

### Dynamic cluster management

### Management UI

## Source
* <https://hub.docker.com/_/php/>
* <https://www.digitalocean.com/community/tutorials/how-to-configure-the-apache-web-server-on-an-ubuntu-or-debian-vps>
* <https://help.ubuntu.com/lts/serverguide/httpd.html>
* <https://httpd.apache.org/>
* <https://startbootstrap.com/>
* <https://bootstrapmade.com>

- <https://docs.docker.com/engine/reference/commandline/inspect/>