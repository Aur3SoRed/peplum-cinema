const peplumGet = async () => {
  try {
    const response = fetch('127.0.0.1/peplum');
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
