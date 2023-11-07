import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from '../components/Topnav';
import './Cart.css';
import '../components/Cards.css'
import Card from '../components/Cards';

function Cart() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to remove an item from the cart
  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <>
      <Topnav />
      <button className="backbtn" onClick={goBack}>
        {/* ... */}
      </button>

      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div>
                <p>{item.title}</p>
                <p>{item.text}</p>
              </div>
              <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <div className="product-cards">
        {/* Render multiple instances of the Card component */}
        <Card
          id={1}
          header="Card Header"
          src="card-image.jpg"
          title="Card Title"
          buttonLabel="Add to Cart"
          text="Card Description"
          cartItems={cartItems} // Pass cart state to Card
          setCartItems={setCartItems} // Pass the function to update cart state
        />
        {/* Add more Card components for other products */}
      </div>
    </>
  );
}

export default Cart;

