import React from 'react';
import { getData } from '../lib/getData.js';

class Peplum extends React.Component {
  state = {
    peplum: [],
  };
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
    return (
      <>
        <header>PEPLUM CINÉMA</header>
        <div>
          <div>
            {this.state.peplum.map((film) => (
              <div key={film.peplum_id}>
                <h2>{film.title}</h2>
                <h2>{film.release}</h2>
                <h3>{film.countrycode}</h3>
                <img src={film.poster} width="550px" height="600px"></img>
                <h3>{film.director}</h3>
                <h4>{film.actor}</h4>
                <h4>{film.actress}</h4>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Peplum;
