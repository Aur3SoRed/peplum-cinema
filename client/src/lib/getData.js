export const getData = async () => {
  try {
    const response = await fetch(`/127.0.0.1:5000/peplum`);
    const { peplumData } = await response.json();
    return peplumData;
  } catch (error) {
    console.error(error);
  }
};
