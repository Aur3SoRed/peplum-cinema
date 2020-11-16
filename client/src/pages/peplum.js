import React from 'react';
import { getData } from '../lib/getData.js';

class Peplum extends React.Component {
  state = { peplum: [] };
  async componentDidMount() {
    try {
      const resp = await getData();
      console.log('prueba');
      this.setState({ peplum: resp });
      console.log('hola');
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return <h2>Aquí las películas</h2>;
  }
}

export default Peplum;
