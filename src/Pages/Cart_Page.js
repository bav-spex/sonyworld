import React, { useState } from "react";
import "./../SCSS/_cartPage.scss";
import BreadCrumbs from "../Components/BreadCrumbs";

import product_01 from "./../assets/Product/product_01.png";
import sony_logo from "./../assets/Icon/sony_logo.svg";
import checkout_white_right_arrow from "./../assets/Icon/checkout_white_right_arrow.svg";

import Heading3 from "../Components/Font/Heading3";
import Text3 from "../Components/Font/Text3";
import Protection from "../Components/MostSharedComponent/Protection";
import Price from "../Components/Font/Price";
import Heading6 from "../Components/Font/Heading6";
import Text1 from "../Components/Font/Text1";
import Heading7 from "../Components/Font/Heading7";
import SmallWarrantyBlock from "../Components/MostSharedComponent/SmallWarrantyBlock";
import ProtectionPlan from "../Components/MostSharedComponent/ProtectionPlan";
import Heading5 from "../Components/Font/Heading5";
import AvailableOffers from "../Components/MostSharedComponent/AvailableOffers";
import ProductContainer from "../Components/ProductContainer";

import newArrivals_01 from "./../assets/NewArrivals/newArrivals_01.png";
import newArrivals_02 from "./../assets/NewArrivals/newArrivals_02.png";
import newArrivals_03 from "./../assets/NewArrivals/newArrivals_03.png";
import newArrivals_04 from "./../assets/NewArrivals/newArrivals_04.png";
import newArrivals_05 from "./../assets/NewArrivals/newArrivals_05.png";
import ShoppipngCartProduct from "../Components/MostSharedComponent/ShoppipngCartProduct";
const product = {
  id: 1,
  logo: sony_logo,
  name: "Z8H | Full Array LED | 8K | High Dynamic Range (HDR) | Smart TV (Android TV)",
  categoryTagline: "Experience the brilliance of big-screen Sony 8K HDR",
  rating: 4.6,
  totalRatings: 6183,
  price: 799,
  oldPrice: 1050,
  saving: 10,
  monthlySavingTagline: "get it for SAR 500 in 6 equal installments",
  returnPeriod: 15,
  availableOffer: [
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
  ],
  warrantyText: "1 Year Warranty on Product",
  size: [
    {
      id: 1,
      cm: 139,
      inch: 55,
    },
    {
      id: 2,
      cm: 164,
      inch: 65,
    },
    {
      id: 3,
      cm: 195,
      inch: 77,
    },
  ],
  delivery: {
    deliveryText: "Buy in next 2 hours and receive the TV by Tomorrow",
    pickupStore: [
      {
        id: 1,
        pickupText:
          "Available today at Riyadh Act Fast – Only 3 left at your store!>",
      },
      {
        id: 2,
        pickupText:
          "Available today at Riyadh Act Fast – Only 3 left at your store!>",
      },
      {
        id: 3,
        pickupText:
          "Available today at Riyadh Act Fast – Only 3 left at your store!>",
      },
    ],
  },
  protection: [
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
  ],
};
const productCategory = [
  "ExperPicks",
  "ExpertPicks",
  "Surge Protectors",
  "Soundbars",
  "Universal Remotes",
  "Expert Picks",
  "Expert Picks",
  "Surge Protectors",
  "Soundbars",
  "Universal Remotes",
  "Expert Picks",
  "Expert Picks",
  "Surge Protectors",
  "Soundbars",
  "Universal Remotes",
];
const newArrivalData = [
  {
    id: 0,
    image: newArrivals_01,
    productName: "Camera",
    rating: 4.5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 1,
    image: newArrivals_02,
    productName: "Silver Porto Headset",
    rating: 3,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 3,
    image: newArrivals_03,
    productName: "Car Audio Speaker KM100",
    rating: 3.5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 4,
    image: newArrivals_04,
    productName: "Sony Viao Laptop",
    rating: 2.5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 5,
    image: newArrivals_05,
    productName: "Network Camera",
    rating: 5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 6,
    image: newArrivals_01,
    productName: "Camera",
    rating: 3.2,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 7,
    image: newArrivals_02,
    productName: "Silver Porto Headset",
    rating: 4.8,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 8,
    image: newArrivals_03,
    productName: "Car Audio Speaker KM100",
    rating: 2,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 9,
    image: newArrivals_04,
    productName: "Sony Viao Laptop",
    rating: 1,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 10,
    image: newArrivals_05,
    productName: "Network Camera",
    rating: 3,
    oldPrice: 1999,
    price: 1699,
  },
];
function Cart_Page() {
  const [disableLeftArrow, setDisableLeftArrow] = useState(true);
  const [disableRightArrow, setDisableRightArrow] = useState(false);
  const [arrowState, setArrowState] = useState(true);
  const [selectCategoryIndex, setSelectCategoryIndex] = useState(0);

  const productCategorySelect = (categoryIndex, category) => {
    console.log(categoryIndex, category);
    setSelectCategoryIndex(categoryIndex);
  };

  const leftSide = (e) => {
    setArrowState(!arrowState);
    setDisableRightArrow(false);
    e.preventDefault();
    document.querySelector(".sc__page__button__block").scrollLeft =
      document.querySelector(".sc__page__button__block").scrollLeft -
      document.querySelector(".sc__page__button__block").clientWidth -
      800;
    let scroll = document.querySelector(".sc__page__button__block").scrollLeft;
  };
  const rightSide = (e) => {
    console.log("hello");
    setArrowState(!arrowState);
    setDisableLeftArrow(false);
    e.preventDefault();

    document.querySelector(".sc__page__button__block").scrollLeft =
      document.querySelector(".sc__page__button__block").scrollLeft +
      document.querySelector(".sc__page__button__block").clientWidth -
      800;
  };
  return (
    <>
      <BreadCrumbs />
      <div className="container-fluid shopping__cart__page__container">
        <div className="shopping__cart__page__block">
          <p className="sc__page__title">
            {" "}
            <Heading3 text="Shopping Cart" span={true} />{" "}
            <Text1 text="(2 Items)" color="#FF4F04" span={true} />
          </p>

          <div className="row shopping__cart__page__inner__block">
            <div className="col-md-12 col-xl-9 row shopping__cart__left__block">
              <ShoppipngCartProduct product={product} />
              <hr className="sc__page__horizontal__line"></hr>
              <ShoppipngCartProduct product={product} />
              <div className="sc__newArrival__block">
                <ProductContainer
                  productDetailPage={true}
                  sectionTitle="People Who Bought Also Bought"
                  carouselData={newArrivalData}
                />
              </div>
            </div>
            {/* package Summary */}
            <div className="col-md-12 col-xl-3  shopping__cart__right__block">
              <div className="sc__package__summary__block">
                <p className="sc__ps__title">
                  {" "}
                  <Heading3 text="Order Summary" />
                </p>
                <div className="sc__ps__detail__block">
                  <div className="sc__ps__detail__inner__block">
                    <Text3 text="Shipping" color="#000000" />
                    <Price price={20} size="heading7" />
                  </div>
                  <div className="sc__ps__detail__inner__block">
                    <Text3 text="Sub Total" color="#000000" />
                    <Price price={195} size="heading7" />
                  </div>
                  <div className="sc__ps__detail__inner__block">
                    <Text3 text="Discount" color="#000000" />
                    <Price price={30} size="heading7" />
                  </div>
                  <div className="sc__ps__detail__inner__block">
                    <Text3 text="Tax" color="#000000" />
                    <Price price={10} size="heading7" />
                  </div>
                  <div className="sc__ps__detail__total__order__block">
                    <Heading6 text="Order Total" color="#000000" />
                    <Price price={3275} size="heading7" />
                  </div>
                </div>
              </div>
              <div className="col-6 sc__addToCart__button__block">
                <div className="sc__addToCart__button">
                  Proceed to Checkout
                  <img
                    src={checkout_white_right_arrow}
                    alt=""
                    className="sc__addToCart__icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <NewsLetter /> */}
       {/* <Footer /> */}
    </>
  );
}

export default Cart_Page;
