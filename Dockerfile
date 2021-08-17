FROM node:16.6.2-alpine as builder
WORKDIR /app

ADD package.json package.json
ADD package-lock.json package-lock.json

RUN npm install

ADD lib lib
ADD scripts scripts
ADD tsconfig.json tsconfig.json

RUN npm run build


FROM httpd:2.4.48-alpine

COPY --from=builder /app/build/ /usr/local/apache2/htdocs
