export const getDataForum = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5001/forum');
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
    const response = await fetch(`http://127.0.0.1:5001/forum?peplum=${query}`);
    const data = await response.json();
    console.log({ data });
    // console.log(peplumData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
