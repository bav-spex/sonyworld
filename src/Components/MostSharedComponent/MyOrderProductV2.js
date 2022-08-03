import React, { useState } from "react";
import Heading3 from "../Font/Heading4";
import Heading5 from "../Font/Heading5";
import Heading7 from "../Font/Heading7";
import Price from "../Font/Price";
import Text3 from "../Font/Text3";
import AvailableOffers from "./AvailableOffers";
import ProtectionPlan from "./ProtectionPlan";
import SmallWarrantyBlock from "./SmallWarrantyBlock";
import rating_star from "./../../assets/Icon/rating_star.svg";

import product_01 from "./../../assets/Product/product_01.png";
import "./../../SCSS/MostSharedComponents/_myOrderProductNew.scss";
import Protection from "./Protection";
import { Link, useNavigate } from "react-router-dom";

function MyOrderProduct(props) {
  const { product } = props;
  const navigate = useNavigate();
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

  const redirectOrderDetailPage = (orderId) => {
    navigate(`/user/orders/${orderId}`);
  }

  return (
    <div className="mo__product__block__new">
      <div className="row ">
        <div className="col-12">
          <div className="row mo__order__details__row mb-5 px-4 ">
            <div className="col-lg-8 ">
              <ul className="align-align-items-lg-start list-unstyled order__detail__list d-flex">
                <li>
                  <Heading7 text="ORDER #:" color="#727272" span={true} />
                  <Text3 text={"408-2450567-3112347"} span={true} />
                </li>
                <li>
                  <Heading7 text="Order Placed:" color="#727272" span={true} />
                  <Text3 text={"28/8/2020"} span={true} />
                </li>
                <li>
                  <Heading7 text="TOTAL AMOUNT:" color="#727272" span={true} />
                  <Price price={"1699"} currency={"SAR"} span={true} size="text3" />
                </li>
              </ul>

            </div>
            <div className="col-lg-4 mo__product__right__block">
              <button onClick={() => redirectOrderDetailPage('1')} className="mo__order__detail__button">ORDER DETAIL</button>
              <div>
                <img src={rating_star} alt="" />
                <Link className="write_Review__link" to="#">
                  Write review of this product
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row px-4">
            <div className="col-12 mb-3 pb-3 border-bottom">
              <div className="row">
                <div className="col-12 col-sm-2 mo__product__left__block">
                  <div className="mo__product__image__block">
                    <img src={product_01} alt="" className="mo__product__image" />
                  </div>
                </div>
                <div className="col-12 col-sm-10 mo__product__middle__block">
                  <Heading3 text={"Z8H | Full Array LED | 8K | High Dynamic Range (HDR) | Smart TV (Android TV)"} marginBottom={10} />
                  <ul className="align-align-items-lg-start list-unstyled order__detail__list d-flex">
                    <li>
                      <Heading7 text="SKU :" color="#727272" span={true} />
                      <Text3 text={"KD-85Z8H IN5"} span={true} />
                    </li>
                  </ul>

                </div>

              </div>
            </div>
            <div className="col-12 mb-3 pb-3">
              <div className="row">
                <div className="col-12 col-sm-2 mo__product__left__block">
                  <div className="mo__product__image__block">
                    <img src={product_01} alt="" className="mo__product__image" />
                  </div>
                </div>
                <div className="col-12 col-sm-10 mo__product__middle__block">
                  <Heading3 text={"Z8H | Full Array LED | 8K | High Dynamic Range (HDR) | Smart TV (Android TV)"} marginBottom={10} />
                  <ul className="align-align-items-lg-start list-unstyled order__detail__list d-flex">
                    <li>
                      <Heading7 text="SKU :" color="#727272" span={true} />
                      <Text3 text={"KD-85Z8H IN5"} span={true} />
                    </li>
                  </ul>

                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default MyOrderProduct;
