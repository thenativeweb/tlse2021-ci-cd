FROM node:16.6.2-alpine
WORKDIR /app

ADD package.json package.json
ADD package-lock.json package-lock.json

RUN npm install

ADD . .

RUN npm run build

CMD ["npm", "run", "serve"]

