FROM node:14.15.3

WORKDIR /var/www/client

ENV PATH /var/www/client/node_modules/.bin:$PATH

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"] 