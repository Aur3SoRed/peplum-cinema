export const getData = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/peplum`);
    const data = await response.json();
    console.log({ data });
    // console.log(peplumData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
