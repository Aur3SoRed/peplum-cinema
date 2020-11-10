import express from 'express';

import { peplumList } from '../controllers/peplum.js';

const peplumRouter = express.Router();

peplumRouter.get('/peplum', peplumList);

export default peplumRouter;
