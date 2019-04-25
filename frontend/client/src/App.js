import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import Users from './components/Users/Users'
import TVShows from './components/Shows/TVShows'
import Genres from './components/Genres'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path='/users' component={Users} />
      <Route path='/tvshows' component={TVShows} />
      <Route path='/genres' component={Genres} />
      </div>
    </Router>
  );
}

export default App;
