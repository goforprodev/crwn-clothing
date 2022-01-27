import React from 'react'
import { useState } from 'react'
// components
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
// styles
import './SignIn.scss'
// firebase authentication utilities
import { signInWithGoogle } from '../../firebase/firebase.utils'
// importing auth
import { auth } from '../../firebase/firebase.utils'

const SignIn = () => {
    const [details, setDetails] = useState({ email: '', password: '' })


    const handleSubmit = async (e) => {
        // first prevent the default form behaviour
        e.preventDefault()

        // using the auth method signInWitEmailAndPassword 
        const { email, password } = details
        try {
            await auth.signInWithEmailAndPassword(email, password)
            setDetails({ email: '', password: '' })
            // next set the value of the inputs back to null
        } catch (error) {
            console.log(new Error(error.message))
        }




    }

    const handleChange = (e) => {
        //  set your state to the values submitted from the form

        const { name, value } = e.target
        setDetails({ ...details, [name]: value })
    }
    return (
        <div className='sign-in-container'>
            <form onSubmit={handleSubmit} >
                <h2 className='title'>I already have an account</h2>
                <p>Sign in with your email and password</p>

                <FormInput
                    handleChange={handleChange}
                    // handleChange={(e) => setDetails({...details,email:e.target.value})}
                    name='email'
                    type="email"
                    value={details.email}
                    required
                    label="email"
                />

                <FormInput
                    handleChange={handleChange}
                    // handleChange={(e) => setDetails({...details,password:e.target.value})}
                    name="password"
                    type="password"
                    value={details.password}
                    required
                    label="password"
                />
            </form>
            <div className='buttons'>
                <CustomButton type="submit" onClick={handleSubmit}>sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn> sign in wih google</CustomButton>
            </div>
        </div>
    )
}

export default SignIn