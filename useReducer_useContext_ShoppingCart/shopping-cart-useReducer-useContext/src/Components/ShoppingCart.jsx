import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import "./ShoppingCart.css";

function ShoppingCart() {
  const { items, total, removeItem } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <span>
              {item.title} : ${item.price}
            </span>
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="cart-total">Total: ${(total || 0).toFixed(2)}</div>
    </div>
  );
}

export default ShoppingCart;
