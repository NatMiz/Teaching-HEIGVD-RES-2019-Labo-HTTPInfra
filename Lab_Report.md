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
L'image Docker est basée sur la version 12.4 de Node.js. Nous indiquons que le serveur écoute sur le port 3000 avec l'instruction `EXPOSE 3000`.

Pour construire et déployer le conteneur, il suffit de lancer le script `launchDocker.sh` dans le dossier `express-image`.
Le code de l'application est copié dans le répertoire `/opt/app/` du conteneur lors de sa création. L'application est ensuite lancée au démarrage du conteneur.


## Step 3: Reverse proxy with apache (static configuration)
La configuration statique est fragile car on code en dur les adresses ip des conteneurs. Étant donné que celles-ci sont attribuées dynamiquement, la configuration pourrait ne plus être valable au prochain redémarrage.

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
* <https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/>

- <https://docs.docker.com/engine/reference/commandline/inspect/>
- <https://chancejs.com/index.html>
- <https://expressjs.com/>
- <https://docs.traefik.io/>