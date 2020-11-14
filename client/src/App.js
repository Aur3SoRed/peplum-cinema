import React from 'react';

class App extends React.Component {
  state = {
    peplumTotal: [], //////collectedPokemon
  };

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
