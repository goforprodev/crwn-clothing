import React,{useState,useEffect} from 'react';
// pages
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
// routing
import {Switch,Route } from 'react-router-dom';
// components
import Header from './components/Header/Header';
// styles
import './App.css';
// firebase auth
import {auth} from './firebase/firebase.utils'


const App = () => {
  const [currentUser,setCurrentUser] = useState({})
  

  
  useEffect(() => {
    let unsubscribeFromAuth = null
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      console.log(currentUser)
    })

    return() => {unsubscribeFromAuth()} 
  },[currentUser])


  return (
    <div className="App">
    <Header currentUser={currentUser} />
    <Switch>
    <Route path='/'exact component={Homepage} />
    <Route path="/shop" component={ShopPage}/> 
    <Route path="/signin" component={SignInAndSignUp} />
    </Switch>
    </div>
  );
}

export default App ;