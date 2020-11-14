import { query } from '../index.js';

const getAll = async () => {
  const forum = await query({
    tag: 'forum.get-all',
    queryString: `SELECT * FROM forum`,
  });

  return forum;
};

const getByPeplum = async (name) => {
  const forum = await query({
    tag: 'forum.get-by-peplum',
    queryString: `SELECT * FROM forum WHERE forum.peplum_id = (SELECT peplum.peplum_id FROM peplum WHERE LOWER (peplum."title") LIKE '%${name.toLowerCase()}%')`,
  });
  return forum;
};

export default { getAll, getByPeplum };
