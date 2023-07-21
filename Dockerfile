FROM node:18-alpine as build

WORKDIR /app

COPY package* ./

RUN npm ci

COPY . .

RUN npm run build

CMD npm run start:dev



