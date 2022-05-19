FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "publish", "18" ]

# docker run -d --name [apprabbit/rabbitmq] --network traefik markhoffmansaw/rabbitmq (my app) or rabbitmq (service, def: 5672)