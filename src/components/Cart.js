import React from "react";
import CartItem from "./CartItem";

/**
 * Displays the shopping cart with selected items.
 *
 * @param {Array} cartItems - The array of items in the cart.
 * @param {Function} removeFromCart - Function to remove an item from the cart.
 * @param {Function} updateQuantity - Function to update the quantity of an item.
 */
const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="border p-4 rounded-lg shadow-md">
      {cartItems.length === 0 ? (
        <p className="text-lg font-medium">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))}
          <div className="text-xl font-semibold mt-4">
            Total: Rs {totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
