FROM node:20 

ENV DOCKERIZE_VERSION v0.6.1 

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
 && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
 && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz 

WORKDIR /app 

COPY package*.json . 

RUN npm install 

COPY . . 

COPY .env .env 

EXPOSE 8080 

RUN npx tsc

CMD dockerize -wait tcp://db:3306 -timeout 20s node dist/express.js