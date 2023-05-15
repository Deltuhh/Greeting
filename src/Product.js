import React from "react";
import Button from "./Button";

function Product(props) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "50%", padding: "10px" }}>
        <img
          src={props.image1}
          alt="Product 1"
          style={{ width: "100%", height: "auto" }}
        />
        <Button product="Scissors" buttonType="Add to Cart"></Button>
        <Button product="Scissors" buttonType="Add to Favorites"></Button>
      </div>
      <div style={{ flex: "50%", padding: "10px" }}>
        <img
          src={props.image2}
          alt="Product 2"
          style={{ width: "100%", height: "auto" }}
        />
        <Button product="Trimmer" buttonType="Add to Cart"></Button>
        <Button product="Trimmer" buttonType="Add to Favorites"></Button>
      </div>
    </div>
  );
}

export default Product;
