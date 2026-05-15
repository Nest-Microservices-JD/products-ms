FROM node:24-alpine3.23

WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3001





