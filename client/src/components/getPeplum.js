import React from 'react';
import { peplumGetList } from '../../../server/models/peplum.js';
import Peplum from '../../../server/db/queries/peplum.js';
import { peplumList } from '../../../server/controllers/peplum.js';

class PeplumById extends React.Component {
  state = {
    title: '',
    release: '',
    poster: '',
    director: '',
    actor: '',
    actress: '',
    countrycode: '',
  };
  state = {
    review: '',
  };

  async componentDidMount() {
    const PeplumInfo = await { Peplum, peplumList, peplumGetList };
    return PeplumInfo;
  }
  render() {
    return (
      <div className="">
        //////////AQUI TENEMOS QUE LLAMAR A COMO CONSTUYAMOS LO QUE NOS TRAE LA
        DB
        <h2>{this.state.title}</h2>
        <h2>{this.state.release}</h2>
        <img src={this.state.poster} />
        <h4>{this.state.director}</h4>
        <h4>{this.state.actor}</h4>
        <h4>{this.state.actress}</h4>
        <h3>{this.state.countrycode}</h3>
        <p>{this.state.review}</p>
      </div>
    );
  }
}

export default PeplumById;
