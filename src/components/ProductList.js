import React from "react";
import Product from "./Product";

/**
 * Displays a list of products.
 *
 * @param {Array} products - The array of product objects.
 * @param {Function} addToCart - Function to add a product to the cart.
 */
const ProductList = ({ products, addToCart }) => (
  <div className="flex flex-col items-center mt-5">
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  </div>
);

export default ProductList;
