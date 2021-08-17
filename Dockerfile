FROM node:16.6.2-alpine
WORKDIR /app

ADD . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "serve"]

