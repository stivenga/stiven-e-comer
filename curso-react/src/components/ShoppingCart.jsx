import React from 'react';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  if (!cartItems) {
    return <div>No items in the cart</div>;
  }

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;

