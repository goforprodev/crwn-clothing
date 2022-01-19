import React from 'react';
// pages
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
// routing
import {Switch,Route } from 'react-router-dom';
// styles
import './App.css';

const App = () => {
  return (
    <div className="App">

    <Switch>
    <Route path='/'exact component={Homepage} />
    <Route path="/shop" component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App ;