import pg from 'pg';
import logger from '../lib/logger.js';

const { Pool } = pg;

// TODO: Cambiar este role por el de Jose Aurelio
const databaseRole = 'pataruco';

const pool = new Pool({
  connectionString: `posgresql://${databaseRole}:619@127.0.0.1:5432/peplum`,
});

export const query = async ({ tag = '', queryString, params }) => {
  try {
    const start = Date.now();
    const { rows } = await pool.query(queryString, params);
    const duration = Date.now() - start; /////OJO A ESTA LÍNEA QUE ESE GUIÓN NO ME GUSTA UN PELO
    logger.info({ database: { tag, duration, rows: rows.length } });
    return rows;
  } catch (error) {
    const { message } = error;
    logger.error({ database: { error: { message } } });
    throw new Error(error);
  }
};

export const findOne = async ({ tag = '', queryString, params }) => {
  const [one] = await query({ tag, queryString, params });
  return one;
};
