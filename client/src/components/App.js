import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { getData } from '../lib/getData.js';

//pages
import Home from '../pages/home.js';
import Peplum from '../pages/peplum.js';
import Error from '../pages/error.js';

function App() {
  const handleSubmit = async (event) => {
    event.preventDefaut();
    const getPeplumData = await getData;
    console.log({ getPeplumData });
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/peplum" component={Peplum} />
          <Route path="/*" component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
