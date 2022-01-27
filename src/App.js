import React, { Component } from 'react';
// pages
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
// routing
import { Switch, Route } from 'react-router-dom';
// components
import Header from './components/Header/Header';
// styles
import './App.css';
// firebase auth
import { auth, createUserProfileDocument } from './firebase/firebase.utils'



class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapShot => {
                    const data = snapShot.data();
                    this.setState({ currentUser: { id: snapShot.id, ...data } }, () => console.log(this.state.currentUser))
                })
            } else {
                this.setState({ currentUser: userAuth })
            }
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser} />
                <Switch >
                    <Route path='/' exact component={Homepage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInAndSignUp} />
                </Switch>
            </div>
        )
    }
}


export default App;