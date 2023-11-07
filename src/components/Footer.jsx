import React from 'react';
import './Footer.css';


function Footer(){
  
  return (
    <div>
        <footer className="bg-dark text-center p-2">
          <div className="footer-div">
          <div>
           <h1>Exclusive</h1> 
           <h4>Subscribe</h4>
           <h6>Get 10% off on your first order</h6>
           <input type='email' placeholder='Enter your email' className='email'></input>
          </div> 
          <div>
            <h4>Support</h4>
            <h6>111 rgrlkm etlkrgnj kflvkk gl rl v</h6>
            <h6>exclisive@gmail.com</h6>
            <h6>+234567345</h6>
          </div>
          <div>
            <h4>Account</h4>
            <h6>My Account</h6>
            <h6>Login/Register</h6>
            <h6>Cart</h6>
            <h6>Wishlist</h6>
            <h6>Shop</h6>
          </div>
          <div>
            <h4>Quik Link</h4>
            <h6>Privacy Policy</h6>
            <h6>Terms of Use</h6>
            <h6>FAQ</h6>
            <h6>Contact</h6>
            </div>
            <div>
              <h6>Download App</h6>
              <h6>Save $3 with App New User Only</h6>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer;