import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as services from "./../../services/services";
import Heading3 from "../Font/Heading4";
import Heading5 from "../Font/Heading5";
import Heading7 from "../Font/Heading7";
import Price from "../Font/Price";
import Text3 from "../Font/Text3";
import AvailableOffers from "./AvailableOffers";
import ProtectionPlan from "./ProtectionPlan";
import SmallWarrantyBlock from "./SmallWarrantyBlock";
import plus from "./../../assets/Icon/plus.svg";
import minus from "./../../assets/Icon/minus.svg";
import product_01 from "./../../assets/Product/product_01.png";
import "./../../SCSS/MostSharedComponents/_shoppingCartProduct.scss";

import empty_favourite from "./../../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../../assets/Icon/fulfill_favourite.svg";
import delete_icon from "./../../assets/Icon/delete.svg";

import { loadCartData } from "../../redux/appAction";
import { addToCart, deleteFromCart } from "../../services/cart.service";
function ShoppipngCartProduct({ product }) {
  // console.log(product);
  const dispatch = useDispatch();
  // console.log(product.product.media.image.featured.image);
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [count, setCount] = useState(product.qty);
  const [plusMinusClickOn,setPlusMinusClickOn] = useState(true)
  const [availableOffer, setAvailableOffer] = useState([
    {
      id: 1,
      offerType: "",
      offerText: "Save $50-$300 on a sound bar with TV",
      termsAndConditions: "",
    },
    {
      id: 2,
      offerType: "Bank Offer",
      offerText: "5% Unlimited Cashback on Axis Bank Credit Card",
      termsAndConditions: "T&C",
    },
    {
      id: 3,
      offerType: "Credit Card Offer",
      offerText: "5% Unlimited Cashback on Sony Credit Card",
      termsAndConditions: "T&C",
    },
  ]);
  const [protection, setProtection] = useState([
    {
      id: 1,
      protectionText: "2-Year Standard Geek Squad Protection",
      price: 79,
      month: 12,
    },
    {
      id: 2,
      protectionText: "1-Year Standard Geek Squad Protection",
      price: 89,
      month: 12,
    },
  ]);
  const decreaseCount = (sku) => {
    if (count === 0) {
      setCount(0);
    } else {
      deleteProductFromCart(product.item_id)
      setCount(count - 1);
      setPlusMinusClickOn(false)
      AddProductToCart(sku,count-1)
    }
  };
  const increaseCount = (sku) => {
    deleteProductFromCart(product.item_id)
    setPlusMinusClickOn(false)
    setCount(count + 1);
    AddProductToCart(sku,count+1)
  };

  const AddProductToCart = (sku, count,id) => {
    const data = {
      items: [
        {
          sku: sku,
          qty: count,
        },
      ],
    };
    addToCart(data)
      .then((res) => {
        setCount(res.data.filter((pro) => pro.sku === product.sku)[0].qty);
        dispatch(loadCartData());
        setPlusMinusClickOn(true)
      })
      .catch((err) => {
        console.log(err.response.data.message, "error >>>>");
        dispatch(services.notifyError({ message: err.response.data.message }));
      });
  };
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };
  const handleSubmit = (code) => {
    console.log(code);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const remove = (id) => {
    console.log(id);
  };
  const deleteProductFromCart = async (id) => {
    console.log("id ", id);

    const data = {
      // items: [id],
      items: [id],
    };
    console.log("data ", data);

    await deleteFromCart(data)
      .then((res) => {
        console.log(res, "res>>>");
        dispatch(loadCartData());
        
      })
      .catch((err) => {
        console.log(err.response.data.message, "error >>>>");
        // dispatch(services.notifyError({ message: err.response.data.message }));
      });
  };
  
  return (
    <div className="row sc__product__block">
      <div className="col-12 col-sm-2 sc__product__left__block">
        <div className="sc__product__image__block">
          <img
            src={product && product?.product?.baseImage}
            alt=""
            className="sc__product__image"
          />
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
          protection={protection}
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
          <AvailableOffers availableOffer={availableOffer} />
        </div>
        <hr className="sc__page__horizontal__line"></hr>
        <div className="sc__counter__block d-flex mt-3 mb-3  align-items-center">
          <div className="row sc__counter__box">
            <div
              onClick={() => decreaseCount(product.sku)}
              className="col-4 counter__decrease__block"
            >
              <img src={minus} alt="minus" />
            </div>
            <div className="col-4 counter">{count}</div>
            <div
              onClick={() => increaseCount(product.sku)}
              className="col-4 counter__increase__block"
            >
              <img src={plus} alt="plus" />
            </div>
          </div>

          {/* counter end  */}
          <div className="sc__fav__sec me-3 pt-1">
            <button className="common__favourite__button">
              <img
                onMouseEnter={() => setIsFavouriteHover(true)}
                onClick={handleFavourite}
                onMouseLeave={() => setIsFavouriteHover(false)}
                className={
                  !isFavourite
                    ? "pd__favourite__icon"
                    : "pd__favourite__icon__disable"
                }
                src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                alt=""
              />
              <img
                onClick={handleFavourite}
                className={
                  isFavourite
                    ? "pd__favourite__icon"
                    : "pd__favourite__icon__disable"
                }
                src={fulfill_favourite}
                alt=""
              />
            </button>
          </div>
          <div
            className="delete__icon__button__block"
            onClick={() => deleteProductFromCart(product.item_id)}
          >
            <img src={delete_icon} alt="delete" />
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-3 sc__product__right__block">
        <Price price={product.price} size="heading3" currency="SAR" />
        <Text3 text="You Save - SAR4.50 (9%)" color="#07A41B" />
      </div>
    </div>
  );
}

export default ShoppipngCartProduct;
