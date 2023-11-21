import { useState,useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import  Card  from "./Cards";
import './Sidenav.css';
import {Carousel} from 'react-bootstrap';
import {BsLaptop,BsPhone,BsCamera,BsHeadphones,BsSpeaker} from 'react-icons/bs'
import {BiJoystick} from 'react-icons/bi'
import all_products from "../Assets/All_prooducts";
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from "./CounterSlice";

const Sidenav = () => {
  const dispatch = useDispatch()

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
      {all_products.map((item,index) => {
           return (
            <>
            <Card
              key={index}
              id={item.id}
              src={item.src}
              header={item.header}
              buttonLabel={item.buttonLabel}
              title={item.title}
              text={item.text}
              data={item}
              />

              </>
            
            );
            
        })}
          
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
        <div className="laptop"><h2><BsLaptop/></h2>Laptops</div>
        <div className="phone"><h2><BsPhone/></h2>Phones</div>
        <div className="camera"><h2><BsCamera/></h2>Camera</div>
        <div className="headphone"><h2><BsHeadphones/></h2>Headphones</div>
        <div className="speaker"><h2><BsSpeaker/></h2>Speakers</div>
        <div className="game"><h2><BiJoystick/></h2>Gaming</div>
        </div>
        <div className="heading-1">
        <div className="mark">_</div>
        <h5 className="">Featured</h5>
      </div>
      <h2 className="heading-2">New Arrivals</h2>
      <div className="main-container">
        <div className="container1">
          <div className="flip-card">
            <div className="flip-front"><img src="https://images.unsplash.com/photo-1605296830714-7c02e14957ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww" alt="" /></div>
            <div className="flip-back"><img src="https://images.unsplash.com/photo-1605296830714-7c02e14957ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww" alt="" /></div>
         </div>
       </div>
       <div className="">
        <div className="container2">
          <div className="flip-card">
           <div className="flip-front"><img src="https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
           <div className="flip-back"><img src="https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
         </div>
        </div>
        <div className="d-flex">
        <div className="container3">
          <div className="flip-card">
            <div className="flip-front"><img src="https://images.unsplash.com/photo-1608488458196-61cd3a720de8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGpibCUyMHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D" alt="" /></div>
            <div className="flip-back"><img src="https://images.unsplash.com/photo-1608488458196-61cd3a720de8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGpibCUyMHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D" alt="" /></div>
          </div>
       </div>
       <div className="container3">
          <div className="flip-card">
            <div className="flip-front"><img src="https://images.unsplash.com/photo-1616341316676-fb436b96f99a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnRyb2xsZXJ8ZW58MHx8MHx8fDA%3D" alt="" /></div>
            <div className="flip-back"><img src="https://images.unsplash.com/photo-1616341316676-fb436b96f99a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnRyb2xsZXJ8ZW58MHx8MHx8fDA%3D" alt="" /></div>
          </div>
       </div>

      </div>
    </div>
    </div>
    </div>
  );
}


export default Sidenav