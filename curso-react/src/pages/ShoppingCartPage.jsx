import React from 'react';
import ShoppingCart from '../components/ShoppingCart';

const ShoppingCartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ShoppingCartPage;

