//import http from http;
import express from 'express';
import bodyParser from 'body-parser';

const HOST = '127.0.0.1';
const PORT = 4000;

//const server = require('express');
const app = express();

app.use(bodyParser.json());

//app.use(express.static(__dirname + '/client/'));

app.listen('4000', function () {
  console.log(`Server listening ${PORT}`);
});
