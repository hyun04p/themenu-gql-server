FROM node:14-alpine
WORKDIR /usr/src/app
RUN npm i -g pm2
COPY ./dist .
EXPOSE 4000
CMD [ "pm2-runtime", "bundle.js" ]