export const getData = async () => {
  try {
    const response = await fetch('127.0.0.1:5001/peplum');
    const { peplumData } = await response.json();
    console.log(peplumData);
    return peplumData;
  } catch (error) {
    console.log(error);
  }
};
