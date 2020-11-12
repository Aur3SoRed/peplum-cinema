import Forum from '../db/queries/forum.js';

export const forumGet = async () => {
  try {
    const forum = await Forum.getAll();
    return forum;
  } catch (error) {
    throw new Error(error);
  }
};
