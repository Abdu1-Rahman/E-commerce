import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Topnav.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



function Topnav() {
  const navigate = useNavigate();
  const [menu,setMenu] = useState("home")


  return (
  <>
  <h6 className='header'>
  <span className='header-text'>
    Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%! <a href='' className='shop-now-link'>Shop Now</a>
  </span>
</h6>

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Exclusive</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link onClick={()=>{setMenu("home")}} href="/">Home{menu==="home"?<hr/>:<></>}</Nav.Link>
                  <Nav.Link onClick={()=>{setMenu("contact")}} href="contact">Contact{menu==="contact"?<hr/>:<></>}</Nav.Link>
                  <Nav.Link onClick={()=>{setMenu("about")}} href="about">About{menu==="about"?<hr/>:<></>}</Nav.Link>
                  <Nav.Link onClick={()=>{setMenu("login")}} href="login">Sign Up{menu==="login"?<hr/>:<></>}</Nav.Link>
                 
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="What are you looking?"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                 
                <Button style={{width: "3rem", height:"3rem" }} variant="outline-none" className="like-icon">
                     <svg className="bi bi-heart w-4 h-4 b" xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                     </svg>
                </Button>

                {/* cart button */}
               
                <Button  onClick={() => navigate("/cart")} style={{width: "3rem", height:"3rem" }} variant="outline-none" className="cart-icon">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                </Button>
                <div className='cart-count'>0</div>
               
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>);
  
}

export default Topnav;