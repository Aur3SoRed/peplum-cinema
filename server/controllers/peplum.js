import { peplumGetList } from '../models/peplum.js';

export const peplumList = async (request, response) => {
  const peplum = await getListPeplums();

  return response.send({
    message: 'Ave Cesar',
  });
};
