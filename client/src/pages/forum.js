import React from 'react';
import { getDataForum, getFilterForum } from '../lib/getDataForum.js';

class Forum extends React.Component {
  state = {
    forum: [],
    peplum: '',
  };

  async componentDidMount() {
    try {
      const ret = await getDataForum();
      this.setState({ forum: ret });
      console.log(ret);
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (event) => {
    const peplum = { [event.target.name]: event.target.value };
    this.setState({ peplum });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(this.state.peplum);
      const dataF = this.state.peplum;
      const forumData = await getFilterForum(dataF.peplum);
      console.log(dataF.peplum);
      console.log({ forumData });
      this.setState({ forum: forumData });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <header>PEPLUM CINÉMA</header>
        <form onSubmit={this.handleSubmit}>
          <label>films</label>
          <input
            name="peplum"
            onChange={this.handleChange}
            type="search"
          ></input>
        </form>
        <div>
          {this.state.forum.map((foro) => (
            <div key={foro.forum_id}>
              <p>{foro.review}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Forum;
