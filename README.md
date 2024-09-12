School project for my graduation.

If you decide to clone this project, remember to run npm install in order to install the necessary dependencies.

For do work this project, you need to have the secret (inside a .env) who conatins jwt key and database informations. You can craete your own, the back folders contain a copy of the deploiement script for the database and the post deploiement script (using this, you don't have images for the products, as a base x64 longchar contain, i can't and won't include them inside the post deploiement script)


This project include the creation of a pipeline using Docker and Jankins, here are the instructions (maybe more for a personnal use, as a reminder of the actions to craete that, if you already now this, please ignore the rest of the Readme)

--- For Docker ---

Create a Dockerfile : 

{
FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "server.js" ]
}

and a secon for the database : 

{
FROM mysql:5.7
COPY ./cafe_club_dump.sql /docker-entrypoint-initdb.d/
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=cafe_club
}

docker build -t cafe_club . 
docker build -f Dockerfile.mysql -t cafe_club_database .

docker run -p 8080:3000 -d cafe_club
