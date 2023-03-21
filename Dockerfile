FROM node:16-alpine
RUN apk add g++ make py3-pip
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
ENV HOST=0.0.0.0
