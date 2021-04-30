import React from 'react'
import './Login.css'

import { Link , useHistory } from "react-router-dom";


function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png" alt=""

                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"/>

                    <h5>Password</h5>
                    <input type="password"/>

                    <button className="login__signInButton">Sign In</button>

                    <p>
                        By-signing in you agree to Amazon's Conditions of Use 
                        and Sale. Please see our Privacy Notive,our Cookies Notice and our Internet-Based Ads Notice.
                    </p>

                </form>
                <button className="login__createAccount">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
