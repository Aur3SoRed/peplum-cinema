import { forumGet, forumGetByName } from '../models/forum.js';

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

export const forumCaught = async (request, response) => {
  const { query } = request;

  try {
    const forum = await forumGetByName(query);
    return response.status(200).send(forum);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message,
    });
  }
};
