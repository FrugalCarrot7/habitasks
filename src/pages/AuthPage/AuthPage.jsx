import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react'
import './AuthPage.css'

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false)
    return (
        <main>
            <h1>Welcome to Habitasks</h1>
            <button className='auth-button'onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
            { showSignUp ?
                <SignUpForm setUser={setUser} />
                :
                <LoginForm setUser={setUser} />
            }
        </main>
    )
}