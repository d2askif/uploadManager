import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UploadFiles from './components/upload';
import Scroll from './components/Scroll';
import Dnd from './components/dnd';
import Diagram from './Diagram';
import CustomNode from './CustomNode';
import AddNode from './demo-custom-node1';
import Anima from './three';

function App() {
  return <Anima />;
}

export default App;
