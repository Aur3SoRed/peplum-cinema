import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

//components
import Header from '../lib/header.js';
import Footer from '../lib/footer.js';

//pages
import Home from '../pages/home.js';
import Peplum from '../pages/peplum.js';
import Forum from '../pages/forum.js';
import Error from '../pages/error.js';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/peplum" component={Peplum} />
          <Route path="/forum" component={Forum} />
          <Route path="/*" component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
