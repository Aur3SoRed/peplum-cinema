export const peplumList = async (request, response) => {
  const peplum = async () => getListPeplums();

  return response.send({
    message: 'Ave Cesar',
  });
};
