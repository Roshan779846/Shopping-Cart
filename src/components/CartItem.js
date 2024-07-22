import React from "react";

/**
 * Displays an individual item in the cart.
 *
 * @param {Object} item - The cart item object.
 * @param {Function} removeFromCart - Function to remove the item from the cart.
 * @param {Function} updateQuantity - Function to update the quantity of the item.
 */
const CartItem = ({ item, removeFromCart, updateQuantity }) => (
  <div className="flex justify-between items-center border-b py-2">
    <h4 className="text-lg font-medium">{item.name}</h4>
    <div className="flex items-center">
      <button
        onClick={() => updateQuantity(item, item.quantity - 1)}
        className="bg-gray-300 py-1 px-2 rounded-l-lg"
      >
        -
      </button>
      <span className="px-2">{item.quantity}</span>
      <button
        onClick={() => updateQuantity(item, item.quantity + 1)}
        className="bg-gray-300 py-1 px-2 rounded-r-lg"
      >
        +
      </button>
    </div>
    <p className="text-lg font-medium">Rs {item.price}</p>
    <button
      onClick={() => removeFromCart(item)}
      className="bg-red-500 text-white py-1 px-2 rounded-lg ml-2"
    >
      Remove
    </button>
  </div>
);

export default CartItem;
