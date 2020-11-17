import React from 'react';
import { getDataForum } from '../lib/getDataForum.js';

class Forum extends React.Component {
  state = {
    forum: [],
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
  render() {
    return (
      <>
        <header>PEPLUM CINÉMA</header>
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
