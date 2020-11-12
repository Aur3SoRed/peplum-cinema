import Peplum from '../db/queries/peplum.js';

export const peplumGetList = async () => {
  try {
    const peplum = await Peplum.getAll();
    return peplum;
  } catch (error) {
    throw new Error(error);
  }
};
