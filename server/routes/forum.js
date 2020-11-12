import express from 'express';
import { forumList } from '../controllers/forum.js';

const forumRouter = express.Router();

forumRouter.get('/forum', forumList);

export default forumRouter;
