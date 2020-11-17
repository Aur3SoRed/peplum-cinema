import express from 'express';
import { forumList, forumCaught } from '../controllers/forum.js';

const forumRouter = express.Router();

//forumRouter.get('/forum', forumList);
forumRouter.put('/forum/:id', forumList);
forumRouter.post('/forum/:id/', forumList);
forumRouter.delete('/forum/:id/', forumList);

forumRouter.get('/forum', forumCaught, forumList);

export default forumRouter;
