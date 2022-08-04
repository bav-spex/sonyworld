import React from "react";
import Heading2 from "../Font/Heading2";
import Heading3 from "../Font/Heading3";
import Heading6 from "../Font/Heading6";
import Heading7 from "../Font/Heading7";
import OldPrice from "../Font/OldPrice";
import Price from "../Font/Price";
import Text4 from "../Font/Text4";
import RatingBlock from "../MostSharedComponent/RatingBlock";
import "./../../SCSS/ProductType/_recommandProducts.scss";
function RecommandProducts({ product }) {
  return (
    <div key={product.id} className="row recommand__product__block">
      <div className="col-4 recommand__product__image__block">
        <img src={product.image} alt="" className="recommand__product__image" />
      </div>
      <div className="col-8 recommand__product__detail__block">
        <Heading7 text={product.productName} />
        <RatingBlock
          size={15}
          rating={product.rating}
          totalRatings={product.totalRatings}
          fillColor="#DC3A1A"
          emptyColor="#C8C8C8"
        />
        <Heading6 text="1 Offer From" span={true} />
        <Price currency={"SAR"} price={product.price} span={true} size="text3" color="#DC3A1A" />
        <button className="see__all__buying__option__button">See all buying Options</button>
      </div>
    </div>
  );
}

export default RecommandProducts;
