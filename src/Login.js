import React from 'react';
import './Login.css';
import { loginURL } from './spotify';
import {ReactComponent as Logo} from './assets/Logo.svg';

function Login(){
    return (
        <div className="login">
            {/* spotify logo */}
            {/*  login with spotify button*/}

            
             <Logo className="logo-image" />
            
            <a href={loginURL}>
                Login With Spotify
            </a>
        </div>
    )
}

export default Login;