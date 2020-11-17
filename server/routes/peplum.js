import express from 'express';
import { peplumList } from '../controllers/peplum.js';

const peplumRouter = express.Router();

peplumRouter.get('/peplum', peplumList);
peplumRouter.put('/peplum/:id', peplumList);
peplumRouter.post('/peplum/:id/', peplumList);
peplumRouter.delete('/peplum/:id/', peplumList);

export default peplumRouter;
