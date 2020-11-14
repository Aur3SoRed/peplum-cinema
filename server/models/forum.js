import Forum from '../db/queries/forum.js';

const haveQuery = (object) => {
  return Object.entries(object).length > 0;
};

export const forumGet = async (query) => {
  console.log(haveQuery(query));

  try {
    if (haveQuery) {
      const name = query['peplum'];
      const forumByPeplum = Forum.getByPeplum(name); //////////PUEDE SER QUE EN NUESTRO CASO SEA TITLE POR EL SQL, LO DUDO PERO LO APUNTO
      return forumByPeplum;
    }

    const forum = await Forum.getAll();
    return forum;
  } catch (error) {
    throw new Error(error);
  }
};
