import React from "react";
import { Rating } from "react-simple-star-rating";
import "./../SCSS/_topRatedProducts.scss";

function TopRatedProducts({ productData }) {
  return (
    <div className="container-fluid topRatedProducts__container">
      <div className="container  topRatedproduct__block">
        <p className="section__title">Top Rated Products</p>
        <div className="row topRatedproduct__firstRow">
          {productData.slice(0, 4).map((product, productIndex) => {
            return (
              <div className="col-3 topRatedproduct__first__block">
                <div className="topRatedproduct__image__block">
                  <img src={product.image} alt="" className="topRatedproduct__image" />
                </div>
                <p className="topRatedproduct__name">{product.productName}</p>
                <div className="rating__block">
                  <Rating
                    // onClick={handleRating}
                    size={20}
                    fillColor="#FCC153"
                    emptyColor="#C8C8C8"
                    readonly={true}
                    ratingValue={
                      (product.rating * 100) / 5
                    } /* Available Props */
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="row topRatedproduct__secondRow">
          {productData.slice(4, 8).map((product, productIndex) => {
            return (
              <div className="col-3 topRatedproduct__second__block">
                <div className="topRatedproduct__image__block">
                  <img src={product.image} alt="" className="topRatedproduct__image" />
                </div>
                <p className="topRatedproduct__name">{product.productName}</p>
                <div className="rating__block">
                  <Rating
                    // onClick={handleRating}
                    size={20}
                    fillColor="#FCC153"
                    emptyColor="#C8C8C8"
                    readonly={true}
                    ratingValue={
                      (product.rating * 100) / 5
                    } /* Available Props */
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopRatedProducts;
