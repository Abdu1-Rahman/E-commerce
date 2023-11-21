import React from 'react';
import './CartItem.css';
import { useDispatch, useSelector } from 'react-redux'
import all_products from '../Assets/All_prooducts';
import Card from './Cards';
// import { IoTrashBinSharp } from "react-icons/io5";


const CartItem = () => {

  const initialState = {
    data:[]
  }

  let card=useSelector((state=>state.counter.data))

  return (
    <div className='CartItem'>
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <p>{card.src}</p>
      <p>{card.header}</p>
      <p>{card.likeBtnClass}</p>
      <p>{card.title}</p>
      <p>{card.text}</p>

     
          
      <hr />
      
    </div>
  );
}

export default CartItem;
