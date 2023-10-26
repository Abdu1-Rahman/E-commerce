// import React, { useEffect } from "react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import Card from "./Cards";
import './Sidenav.css';

const Sidenav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // const [products ,setProducts] =useState(null)

  // const getProducts = async () =>{
  //   try {
  //     let response= await fetch("https://dummyjson.com/products");
  //   let data =await response.json()
  //   setProducts(data.products)
      
  //   } catch (error) {
  //     setProducts([])
  //   }
   

  // useEffect(()=>{
  //   getProducts();
    
  // },[])

  return (
    <div>
     <div className="menu-img">
       <div className="menu-container">
        <Sidebar>
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
        <img
          decoding="async"
          className="ha-slick-img"
          src="https://tesx.store/wp-content/uploads/2023/08/Group-515-5.png"
          alt="Group 515 5"
        />
      </div> 

      <div className="card-container">
       <Card
          header="-40%"
          src={'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D'} 
          buttonLabel="Add To Cart" 
          title="Card title" 
          text="45" 
        />
        <Card
          header="-40%"
          src={'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D'} 
          buttonLabel="Add To Cart" 
          title="Card title"
          text="45"  
        />
        <Card
          header="-40%"
          src={'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D'} 
          buttonLabel="Add To Cart" 
          title="Card title"
          text="45" 
        />
       <Card
          header="-40%"
          src={'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D'} 
          buttonLabel="Add To Cart" 
          title="Card title"
          text="45"  
        />
        <Card
          header="-40%"
          src={'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D'} 
          buttonLabel="Add To Cart" 
          title="Card title"
          text="45"  
        />
        <Card
          header="-40%"
          src={'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D'} 
          buttonLabel="Add To Cart" 
          title="Card title"
          text="45"  
        />
        <Card
          header="-40%"
          src={'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D'} 
          buttonLabel="Add To Cart" 
          title="Card title"
          text="45"  
        />
      
       </div>
       <div className="view-all-container">
       <button className="view-all-button">View All Products</button>
      </div>
    </div>
  );
}


export default Sidenav