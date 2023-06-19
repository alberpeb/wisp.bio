## Local environment

Consider using a mariadb container. The following command is for downloading the lastest mariadb version from Docker Hub, creating a database called "mariadb", with root password "Password123!" and run over ip 127.0.0.1 port 3306 exposed over the port 3306 used by the container on your machine

```bash
docker run -p 127.0.0.1:3306:3306  --name mariadb -e MARIADB_ROOT_PASSWORD=Password123! -d mariadb:latest
```

Then always run

```bash
docker start [CONTAINER_ID]
```

(use "docker ps -a" to list all your local containers)
