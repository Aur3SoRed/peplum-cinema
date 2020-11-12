import { query } from '../index.js';

const getAll = async () => {
  const peplum = await query({
    tag: 'peplum.get-all',
    queryString: `SELECT * FROM peplum`,
  });

  return peplum;
};

export default { getAll };
