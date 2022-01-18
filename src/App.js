import React from 'react';
// components
import Homepage from './pages/Homepage/Homepage';
// routing
import {Routes,Route } from 'react-router-dom';
// styles
import './App.css';
const Hats = () => {
  return(
    <div>Hats page</div> 
  )
}
const App = () => {
  return (
    <div className="App">

    <Routes>
    <Route exact path='/' element={<Homepage/>} />
    <Route path="/hats" element={<Hats/>}/>
    </Routes>
    </div>
  );
}

export default App;
