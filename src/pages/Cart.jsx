import React from 'react';
import Topnav from '../components/Topnav';
import CartItem from '../components/CartItem';
import all_products from '../Assets/All_prooducts';

const Cart = () => {
  return (
    <div>
      <Topnav />
        <CartItem all_products={all_products} />
    </div>
  );
};

export default Cart;
