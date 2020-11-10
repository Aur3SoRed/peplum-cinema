import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 5000;

//const server = require('express');
const server = express();
const { env } = process;

console.log({ env });

server.use(bodyParser.json());

//server.use(express.static(__dirname + '/client/'));

server.listen(PORT, () => console.log(`Server listening port ${PORT}`));
