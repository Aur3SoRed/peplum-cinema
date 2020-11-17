export const getDataForum = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/forum`);
    const data = await response.json();
    console.log({ data });
    // console.log(peplumData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFilterForum = async (query) => {
  console.log(query);
  console.log('hola');
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/forum?peplum=${query}`,
    );
    const data = await response.json();
    console.log({ data });
    // console.log(peplumData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
