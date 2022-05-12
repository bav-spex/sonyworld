import React,{useState} from "react";
import Heading3 from "../Font/Heading4";
import Heading5 from "../Font/Heading5";
import Heading7 from "../Font/Heading7";
import Price from "../Font/Price";
import Text3 from "../Font/Text3";
import AvailableOffers from "./AvailableOffers";
import ProtectionPlan from "./ProtectionPlan";
import SmallWarrantyBlock from "./SmallWarrantyBlock";

import product_01 from "./../../Assets/Product/product_01.png";
import "./../../SCSS/MostSharedComponents/_shoppingCartProduct.scss"
function ShoppipngCartProduct({ product }) {
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
    <div className="row sc__product__block">
      <div className="col-12 col-sm-2 sc__product__left__block">
        <div className="sc__product__image__block">
          <img src={product_01} alt="" className="sc__product__image" />
        </div>
      </div>
      <div className="col-12 col-sm-7 sc__product__middle__block">
        <Heading3 text={product.name} marginBottom={10} />
        <Text3 text="Order in 22 hrs 0 mins" marginBottom={10} />

        <Heading7
          text="Free delivery"
          marginBottom={10}
          color="#727272"
          span={true}
        />
        <Text3 text="by" marginLeft={5} marginBottom={10} span={true} />
        <Heading7
          text="Mon, Apr 4"
          marginLeft={5}
          marginBottom={10}
          color="#727272"
          span={true}
        />
        <SmallWarrantyBlock warranty={2} />
        <ProtectionPlan
          title="Protection Plan"
          protection={product.protection}
          remove={remove}
        />
        <hr className="sc__page__horizontal__line"></hr>
        <div className="sc__offers__discounts__block">
          <Heading5 text="Offers & Discounts" marginBottom={20} />
          <div className="sc__form__block">
            <div className="sc__form__field">
              <input
                type="text"
                className="sc__input__field"
                placeholder="Coupon Code or Gift Card"
                name="pincode"
                value={couponCode}
                onChange={handleChange}
              />
            </div>
            <div className="sc__form__field">
              <button
                type="submit"
                className="sc__input__button"
                onClick={handleSubmit}
              >
                APPLY
              </button>
            </div>
          </div>
          <AvailableOffers availableOffer={product.availableOffer} />
        </div>
        <hr className="sc__page__horizontal__line"></hr>
      </div>
      <div className="col-12 col-sm-3 sc__product__right__block">
        <Price price={product.price} size="heading3" />
        <Text3 text="You Save - SAR4.50 (9%)" color="#07A41B" />
      </div>
    </div>
  );
}

export default ShoppipngCartProduct;
