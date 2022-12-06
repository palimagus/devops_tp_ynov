# TP Docker 1

## Getting the image from HUB

```bash
docker search nginx
docker pull nginx
```

## Verify the presence of nginx:latest image

```bash
docker images
```

|REPOSITORY|TAG     |IMAGE ID    |CREATED    |SIZE |
|----------|--------|------------|-----------|-----|
|nginx     |`latest`|ac8efec875ce|5 hours ago|142MB|

## Servir la nouvelle page

```bash
docker run --name myNginx -v C:\Users\palim\.ynov\devops\tp_docker_1\html:/usr/share/nginx/html -p 80:80 -d nginx
```

`ccbb8eb9978bfe76a98410caf95d8f57ef72375adb884db1bb8357d9d6f1a9a1`

## Supprimer le container

```bash
docker container stop cc
docker container rm cc
```

## Copier les fichiers avec `cp`

```bash
docker volume create nginx-html
docker run --name myNginx -v nginx-html:/usr/share/nginx/html -p 80:80 -d nginx
docker cp .\html\index.html myNginx:/usr/share/nginx/html
```
