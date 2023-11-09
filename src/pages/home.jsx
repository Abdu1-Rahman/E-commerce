import React from 'react';
import Topnav from '../components/Topnav';
import Footer from '../components/footer';
import Sidenav from '../components/sidenav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

const Home = () => {
  return (
    <>
       <Topnav/> 
       <Sidenav/>
       <Footer/>
    </>
    
  )
}

export default Home;