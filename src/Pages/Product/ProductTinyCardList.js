import React from "react";
import "./../../SCSS/Product/_productTinyCard.scss";

function ProductTinyCardList({ data = [] }) {
  console.log(data);
  return (
    <div className="productTinyCard__container">
      {data.map(({ image, title, active }, index) => (
        <div key={title + index} className={`card ${active ? "active_background" : "inActive_background"}`}>
          <img src={image} alt={title} />
          <p> {title}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductTinyCardList;