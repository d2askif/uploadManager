import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UploadFiles from './components/upload';
import Scroll from './components/Scroll';
import Dnd from './components/dnd';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/upload'>
          <UploadFiles></UploadFiles>
        </Route>
        <Route path='/scroll'>
          <Scroll></Scroll>
        </Route>
        <Route path='/dnd'>
          <Dnd knightPosition={[0, 0]}></Dnd>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
