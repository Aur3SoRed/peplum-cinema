import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import logger from './lib/logger.js';
import cors from 'cors';

dotenv.config();

/// middlewares
import loggerMiddleware from './middlewares/logger-middleware.js';
import jsonResponse from './middlewares/json-response-middleware.js';

// routers
import healthRouter from './routes/health.js';
import peplumRouter from './routes/peplum.js';

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 5000;

//const server = require('express');
const server = express();
const { env } = process;

console.log({ env });

server.use(bodyParser.json());
server.use(loggerMiddleware);
server.use(jsonResponse);
server.use(cors());
server.use(peplumRouter);

//routes
server.use(healthRouter);

//server.use(express.static(__dirname + '/client/'));

server.listen(PORT, () => logger.info(`Server listening port ${PORT}`));
