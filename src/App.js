import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './components/Player';

import UploadFiles from './components/upload';

function App() {
  return (
    <div className='App'>
      <UploadFiles></UploadFiles>
    </div>
  );
}

export default App;
