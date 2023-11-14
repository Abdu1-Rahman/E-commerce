import React from 'react'
import Topnav from '../components/Topnav'
import './LoginSignup.css';
import { FcGoogle } from "react-icons/fc";
import Footer from '../components/footer'

const LoginSignup = () => {
  return (
    <>
    <Topnav/>
    <div className='main-class'>
    <h2>Create an account</h2>
    <div className='form'>
    <h6>Enter your details below</h6>
    
    <input type="text" placeholder='Name'/>
    <input type="text" placeholder='Email or Phone Number'/>
    <input type="text" placeholder='Password'/>
    <button className='create-btn'>Create Account</button>
    <button className='signup-btn'><h5><FcGoogle /></h5>Sign up with Google</button>
    </div>
    <h6>Already have an account?<a>Log in</a></h6>
    </div>
    <Footer/>
    </>
  );
};

export default LoginSignup;