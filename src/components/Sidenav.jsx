import { useState,useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Card from "./Cards";
import './Sidenav.css';
import {Carousel} from 'react-bootstrap';
import {BsLaptop,BsPhone,BsCamera,BsHeadphones,BsSpeaker} from 'react-icons/bs'
import {BiJoystick} from 'react-icons/bi'



const Sidenav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);



  return (
    <div className="sidenav">
      <div className="menu-img">
        <div className="menu-container">
          <Sidebar className="sidebar">
            <Menu>
              <MenuItem>Womans Fashion</MenuItem>
              <MenuItem>Mens Fashion</MenuItem>
              <MenuItem>Electronics</MenuItem>
              <MenuItem>Home & Lifestyle</MenuItem>
              <MenuItem>Medicine</MenuItem>
              <MenuItem>Sports & Outdoor</MenuItem>
              <MenuItem>Baby's & Toys</MenuItem>
              <MenuItem>Groceries & Pets</MenuItem>
              <MenuItem>Health & Beauty</MenuItem>
            </Menu>
          </Sidebar>
        </div>
        <Carousel className="carousel">
      <Carousel.Item interval={2500}>
        <img src="https://tesx.store/wp-content/uploads/2023/08/Group-515-5.png" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img src="https://tesx.store/wp-content/uploads/2023/09/Group_564.jpg" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src="https://tesx.store/wp-content/uploads/2023/09/Group_565.jpg" />
      </Carousel.Item>
    </Carousel>
      </div>
      <div className="heading-1">
        <div className="mark">_</div>
        <h5>Today's</h5>
      </div>
        <h2 className="heading-2">Flash Sales</h2>

      <div className="card-container">
        <Card
          id={1}
          header="-9%"
          src={'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1638&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          buttonLabel="Add To Cart"
          title="Canon"
          text="45"
        />
        <Card
          id={2}
          header="-10%"
          src={'	https://tesx.store/wp-content/uploads/2023/08/Group-578.png'}
          buttonLabel="Add To Cart"
          title="PlayStation"
          text="45"
        />
        <Card
          id={3}
          header="-15%"
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTpmNeJbOqevNXBts9LHPOLIs2qZ8waqXiJQ&usqp=CAU'} 
          buttonLabel="Add To Cart" 
          title="Speaker"
          text="45" 
        />
       <Card
         id={4}
          header="-20%"
          src={'https://images.unsplash.com/photo-1600262606148-dbe6a3f5dc91?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcGxlJTIwaXBob25lfGVufDB8fDB8fHww'} 
          buttonLabel="Add To Cart" 
          title="Iphone"
          text="45"  
        />
        <Card
          id={5}
          header="-40%"
          src={'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
          buttonLabel="Add To Cart" 
          title="Laptop"
          text="45"  
        />
        <Card
          id={6}
          header="-40%"
          src={'https://images.unsplash.com/photo-1585298723682-7115561c51b7?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
          buttonLabel="Add To Cart" 
          title="Boat"
          text="45"  
        />
        <Card
          id={7}
          header="-40%"
          src={'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D'} 
          buttonLabel="Add To Cart" 
          title="Keyboard"
          text="45"  
        />
       </div>
       
       <div className="view-all-container">
       <button className="view-all-button">View All Products</button>
      </div>
      <div className="heading-1">
        <div className="mark">_</div>
        <h5 className="">Categories</h5>
      </div>
      <h2 className="heading-2">Browse By Category</h2>
      <div className="product">
        <div className="laptop border border-dark"><h2><BsLaptop/></h2>Laptops</div>
        <div className="phone border border-dark"><h2><BsPhone/></h2>Phones</div>
        <div className="camera border border-dark"><h2><BsCamera/></h2>Camera</div>
        <div className="headphone border border-dark"><h2><BsHeadphones/></h2>Headphones</div>
        <div className="speaker border border-dark"><h2><BsSpeaker/></h2>Speakers</div>
        <div className="game border border-dark"><h2><BiJoystick/></h2>Gaming</div>
        </div>
    </div>
  );
}


export default Sidenav