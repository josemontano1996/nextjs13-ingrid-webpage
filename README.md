# Local installation steps

To run locally, you will need the database.

```
docker-compose up -d
```

- -d, means **detached**

## .env configuration

Rename **.env.template** file to **.env**

- MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/ingridDB
```

- Fill the rest of .env file with your credentials.

- Rebuild Node modules and start developement server

```
yarn install
yarn dev
```

## Seed the database with prepopulated data

Make an API call to:

```
http://localhost:3000/api/seed
```

### The proyect is ready to be run locally!