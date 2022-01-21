import React from 'react';
// pages
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
// routing
import {Switch,Route } from 'react-router-dom';
// components
import Header from './components/Header/Header';
// styles
import './App.css';

const App = () => {
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route path='/'exact component={Homepage} />
    <Route path="/shop" component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App ;