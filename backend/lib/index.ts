#!/usr/bin/env node
import express from 'express';
import { flaschenpost } from 'flaschenpost';
import http from 'http';
import path from 'path';

const logger = flaschenpost.getLogger();
const app = express();

app.get('/logo', (req, res): void => {
  res.sendFile(path.join(__dirname, '..', 'logo.svg'));
});
const server = http.createServer(app);

server.listen(8_000, (): void => logger.info('Server started'));

