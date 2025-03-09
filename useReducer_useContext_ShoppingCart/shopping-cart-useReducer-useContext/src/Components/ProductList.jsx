import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => addItem(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
