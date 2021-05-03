FROM node:alpine

WORKDIR /usr/app/

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 9000

CMD [ "yarn", "server" ]