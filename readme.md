# Steps to run the project

1. update the env , take reference from .env.example


2. `${Optional}` To create and initiate the db use docker-compose.yml
command to run docker-compose.yml
```
docker-compose -f .docker/docker-compose.yml --env-file .env up -d 
```

3. to install all the packages run the following command
```
yarn
```

4. to run the migrations run the following command
```
node ace migration:run 
```

5. to sync the coins run the following command
```
node ace sync:coins
```

This project is been created by using the free API as the API key version required the paid subscription