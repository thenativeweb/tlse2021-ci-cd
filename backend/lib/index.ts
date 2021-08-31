#!/usr/bin/env node
import cors from 'cors';
import express from 'express';
import { flaschenpost } from 'flaschenpost';
import http from 'http';
import path from 'path';
import { processenv } from 'processenv';

const logger = flaschenpost.getLogger();
const app = express();

app.use(cors());
app.get('/logo', (req, res): void => {
  res.sendFile(path.join(__dirname, '..', 'logo.png'));
});
app.get('/logo_description', (req, res): void => {
  const response = processenv('LOGO_DESCRIPTION', 'thenativeweb');

  res.send(response);
});
const server = http.createServer(app);

server.listen(8_000, (): void => logger.info('Server started'));

