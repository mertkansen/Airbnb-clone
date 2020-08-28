import React from 'react';

import './App.css';

import {
  Switch, Route
} from 'react-router-dom'

import {
  Header, Home, Footer, SearchPage
} from './Components/indexer'

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/search'>
          <SearchPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
