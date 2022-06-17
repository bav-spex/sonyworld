import React from "react";
import "./../../SCSS/Product/_productBackdrop.scss";

function ProductCardBackDrop({ title, image }) {
  return (
    <div className="productBackdrop__container">
      <p className="title__font"> {title}</p>
      <img src={image} alt={title} />
    </div>
  );
}

export default ProductCardBackDrop;