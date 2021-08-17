FROM node:16.6.2-alpine
WORKDIR /app

ADD package.json package.json
ADD package-lock.json package-lock.json

RUN npm install

ADD lib lib
ADD logo.png logo.png
ADD tsconfig.json tsconfig.json

RUN npm run build

CMD ["npm", "run", "start"]


