import React from "react";
import './SignInAndSignUp.scss'

// components
import SignIn from '../../components/SignIn/SignIn'
import { SignUp } from "../../components/SignUp/SignUp";

const SignInAndSignUp = () =>{
    return(
            <div className="sign-in-and-sign-up">
                <SignIn />
                <SignUp />
            </div>
    )
}

export default SignInAndSignUp