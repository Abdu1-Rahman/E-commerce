import React from 'react'
import Topnav from '../components/Topnav'
import './LoginSignup.css';
import { FcGoogle } from "react-icons/fc";

const LoginSignup = () => {
  return (
    <>
    <Topnav/>
    <div className='main-class'>
    <h2>Create an account</h2>
    <div className='form'>
    <h6>Enter your details below</h6>
    <input type="text" placeholder='Name'/>
    <input type="email" placeholder='Email or Phone Number' required/>
    <input type="password" placeholder='Password' required/>
    <button className='create-btn'>Create Account</button>
    <button className='signup-btn'><h5><FcGoogle /></h5>Sign up with Google</button>
    </div>
    <h6>Already have an account?<a>Log in</a></h6>
    </div>
    </>
  );
}

export default LoginSignup;