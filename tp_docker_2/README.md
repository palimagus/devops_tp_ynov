# TP Docker 2

## Partie 1

Récupération du code source pour le TP

## Partie 2

Création d'un conteneur MariaDB

`docker run --name tp-2-mariadb -p 3001:3306 -e MYSQL_ROOT_PASSWORD=1234 -d mariadb`

Modification du fichier de configuration source pour utiliser la nouvelle base de données

Création d'une image Docker pour le code source de l'API précédemment récupérée et lancement d'un conteneur basé sur celle-ci

`docker build -t api-quentin .`  
`docker run --name tp-api --link tp-2-mariadb -p 3000:3000 api-quentin`  
`docker exec -it tp-2-mariadb mysql -u root -p`

Pour faire fonctionner les deux conteneurs ensemble il m'a fallu récupérer l'adresse IP générée pour le conteneur MariaDB et renseigner cette information dans le code source.

Grâce à Docker Compose et aux variables d'environnement ce processus sera simplifié.
