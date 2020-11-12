import { query } from '../index.js';

const getAll = async () => {
  const forum = await query({
    tag: 'forum.get-all',
    queryString: `SELECT * FROM forum`,
  });

  return forum;
};

export default { getAll };
