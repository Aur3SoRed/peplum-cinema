import { forumGet } from '../models/forum.js';

export const forumList = async (request, response) => {
  try {
    const forum = await forumGet();
    return response.status(200).send(forum);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message,
    });
  }
};
