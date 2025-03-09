import React from "react";
import "./App.css";
import { CartProvider } from "./Contexts/CartContext";
import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <h1>Shopping Cart Example</h1>
        <div className="main-content">
          <div className="product-list-container">
            <ProductList />
          </div>
          <div className="shopping-cart-container">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
