import React from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
// hooks
import { useState } from 'react'
// firebase utils
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './SignUp.scss'
export const SignUp = () => {
    const [userInput, setUserInput] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    // UTILITY FUNCTION
    const handleChange = (e) => {
        const { name, value } = e.target

        setUserInput({ ...userInput, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = userInput

        if (password !== confirmPassword) {
            alert("Your passwords dont match")
            return;
        }
        try {
            const { user } = auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, (displayName))
            setUserInput({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.log("there is an err", error.message)
        }
        console.log({ userInput })
    }
    const { displayName, email, password, confirmPassword } = userInput
    return (
        <div className='sign-up-container'>
            <h2 className='title'>I don not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-out-form' onSubmit={handleSubmit}>
                {/* for display name */}
                <FormInput
                    name="displayName"
                    type="text"
                    label="Username"
                    value={displayName}
                    handleChange={handleChange}

                />
                {/* for email */}
                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    handleChange={handleChange}

                />
                {/* for password */}
                <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    handleChange={handleChange}

                />
                {/* for confirm password */}
                <FormInput
                    name="confirmPassword"
                    type="text"
                    label="Confirm Password"
                    value={confirmPassword}
                    handleChange={handleChange}

                />

                <CustomButton type="submit" onSubmit={handleSubmit}>SIGN UP</CustomButton>
            </form>

        </div>
    )
}