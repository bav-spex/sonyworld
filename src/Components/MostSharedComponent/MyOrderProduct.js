import React, { useState } from "react";
import Heading3 from "../Font/Heading4";
import Heading5 from "../Font/Heading5";
import Heading7 from "../Font/Heading7";
import Price from "../Font/Price";
import Text3 from "../Font/Text3";
import AvailableOffers from "./AvailableOffers";
import ProtectionPlan from "./ProtectionPlan";
import SmallWarrantyBlock from "./SmallWarrantyBlock";

import product_01 from "./../../assets/Product/product_01.png";
import "./../../SCSS/MostSharedComponents/_myOrderProduct.scss";
import Protection from "./Protection";
function MyOrderProduct({ product }) {
  const [couponCode, setCouponCode] = useState("");
  
  const handleSubmit = (code) => {
    console.log(code);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const remove = (id) => {
    console.log(id);
  };
  return (
    <div className="row mo__product__block">
      <div className="col-12 col-sm-2 mo__product__left__block">
        <div className="mo__product__image__block">
          <img src={product_01} alt="" className="mo__product__image" />
        </div>
      </div>
      <div className="col-12 col-sm-7 mo__product__middle__block">
        <Heading3 text={product.name} marginBottom={10} />
        <div className="row mo__order__details__row">
          <div className="col-4 col-sm-4 col-md-2">
            <Heading7 text="SKU" color="#727272" span={true} />
          </div>
          <div className="col-8 col-sm-8 col-md-4">
            <Text3
              text={product.sku}
              span={true}
            />
          </div>
          <div className="col-4 col-sm-4 col-md-2">
            <Heading7 text="ORDER PLACED:" color="#727272" span={true} />
          </div>
          <div className="col-8 col-sm-8 col-md-4">
            <Text3
              text={product.orderPlaced}
              span={true}
            />
          </div>
        </div>                                                                                                             
        <div className="row mo__order__details__row">
          <div className="col-4 col-sm-4 col-md-2">
            <Heading7 text="ORDER #:" color="#727272" span={true} />
          </div>
          <div className="col-8 col-sm-8 col-md-4">
            <Text3
              text={product.orderId}
              span={true}
            />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
          </div>
          <div className="col-4 col-sm-4 col-md-2">
            <Heading7 text="TOTAL AMOUNT:" color="#727272" span={true} />
          </div>
          <div className="col-8 col-sm-8 col-md-4">
            <Price
            price={product.totalAmount}
              span={true}
              size="heading7"
            />
          </div>
        </div>
       

        <Protection
          title="Protection Plan"
          tagline="Most popular protection plan for your product"
          rating={product.rating}
          totalRatings={product.totalRatings}
          protection={product.protection}
        />
      </div>
      <div className="col-12 col-sm-3 mo__product__right__block">
          <button className="mo__order__detail__button">ORDER DETAIL</button>
          
        <Text3 text="Write review of this product" color="#07A41B" span={true}  />
      </div>
    </div>
  );
}

export default MyOrderProduct;
