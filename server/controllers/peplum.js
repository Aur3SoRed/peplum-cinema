import { peplumGetList } from '../models/peplum.js';

export const peplumList = async (request, response) => {
  try {
    const peplum = await peplumGetList();
    return response.status(200).send(peplum);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};
