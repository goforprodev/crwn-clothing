import React from 'react';
// components
import Homepage from './pages/Homepage/Homepage';
// routing
import {Switch,Route } from 'react-router-dom';
// styles
import './App.css';
const Hats = (props) => {
  console.log(props)
  return(
    <div>Hats page</div> 
  )
}
const App = () => {
  return (
    <div className="App">

    <Switch>
    <Route path='/'exact component={Homepage} />
    <Route path="/hats" component={Hats}/>
    </Switch>
    </div>
  );
}

export default App ;