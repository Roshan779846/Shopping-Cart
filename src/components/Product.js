import React from "react";

/**
 * Displays an individual product.
 *
 * @param {Object} product - The product object.
 * @param {Function} addToCart - Function to add the product to the cart.
 */
const Product = ({ product, addToCart }) => (
  <div className=" border p-4 rounded-lg shadow-md flex flex-col h-full ">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
    <p className="text-lg font-medium mb-4">Rs {product.price}</p>
    <button
      onClick={() => addToCart(product)}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
    >
      Add to Cart
    </button>
  </div>
);

export default Product;
