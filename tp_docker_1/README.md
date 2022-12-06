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

Create volume:
docker volume create nginx-html
