FROM node:10

EXPOSE 8000

COPY ./ /usr/src/app

WORKDIR /usr/src/app

# install adonis cli
RUN npm install -g @adonisjs/cli@4

RUN npm install

RUN webpack-prod

CMD make serve-prod
