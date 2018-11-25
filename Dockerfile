FROM node:10

EXPOSE 8000

COPY ./ /usr/src/app

WORKDIR /usr/src/app

RUN npm install

CMD npx adonis serve
