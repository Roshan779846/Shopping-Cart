import React, { useState, createContext } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Search from "./components/Search";
import productsData from "./products.json";

export const CartContext = createContext();

const App = () => {
  const [products] = useState(productsData);

  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * Adds a product to the cart.
   *
   * @param {Object} product - The product object to add.
   */
  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  /**
   * Removes a product from the cart.
   *
   * @param {Object} product - The product object to remove.
   */
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  /**
   * Updates the quantity of a product in the cart.
   *
   * @param {Object} product - The product object to update.
   * @param {number} quantity - The new quantity.
   */
  const updateQuantity = (product, quantity) => {
    if (quantity <= 0) {
      removeFromCart(product);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity } : item
        )
      );
    }
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // <CartContext.Provider
    //   value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    // >
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">React Shopping App</h1>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <div className=" grid grid-cols-2  md:grid-cols-1 gap-4">
        <ProductList products={filteredProducts} addToCart={addToCart} />
      </div>
    </div>
    // </CartContext.Provider>
  );
};

export default App;
