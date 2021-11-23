import React from 'react';
import axios from 'axios';
import './App.css';
import Feedback from '../Feedback/Feedback';
import {Route, Routes} from 'react-router-dom'
import Thanks from '../Thanks/Thanks';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
      </header>
      <Routes>
      <Route path="/" exact  element={<Feedback/>} />
      <Route path="/5"   element={<Thanks />}/>
      </Routes>
      
    </div>
  );
}

export default App;
