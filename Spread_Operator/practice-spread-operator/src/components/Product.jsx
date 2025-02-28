import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="product">
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <p>Price: ${props.price}</p>
      <p>Description: {props.description}</p>
      <p>Category: {props.category}</p>
      <p>
        Rating: {props.rating.rate} ({props.rating.count} reviews)
      </p>
    </div>
  );
}

export default Product;
