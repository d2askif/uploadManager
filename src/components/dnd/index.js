import React from 'react';
import Board from './Board';
import { observe } from './Game';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

export default observe((knightPosition) =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, root)
);
