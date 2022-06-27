import React, { useState } from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import Heading4 from "../Components/Font/Heading4";
import Heading3 from "../Components/Font/Heading3";
import Heading5 from "../Components/Font/Heading5";
import Heading6 from "../Components/Font/Heading6";
import Price from "../Components/Font/Price";
import Text3 from "../Components/Font/Text3";
import SuperCoin from "../Components/MostSharedComponent/SuperCoin";
import "./../SCSS/_checkoutPage.scss";
import signin_initial from "./../assets/Icon/signin_initial.svg";
import signin_inprogress from "./../assets/Icon/signin_inprogress.svg";
import signin_done from "./../assets/Icon/signin_done.svg";
import delivery_initial from "./../assets/Icon/delivery_initial.svg";
import delivery_inprogress from "./../assets/Icon/delivery_inprogress.svg";
import delivery_done from "./../assets/Icon/delivery_done.svg";
import payment_initial from "./../assets/Icon/payment_initial.svg";
import payment_inprogress from "./../assets/Icon/payment_inprogress.svg";
import payment_done from "./../assets/Icon/payment_done.svg";
import done from "./../assets/Icon/done.svg";
import check from "./../assets/Icon/check.svg";
import shipping from "./../assets/Icon/shipping.svg";
import sony_logo from "./../assets/Icon/sony_logo.svg";
import black_location from "./../assets/Icon/black_location.svg";


import Text5 from "../Components/Font/Text5";
import Heading7 from "../Components/Font/Heading7";
import Text4 from "../Components/Font/Text4";
import PickupStore from "./../Components/MostSharedComponent/PickupStore";
import AvailableOffers from "../Components/MostSharedComponent/AvailableOffers";
import ShoppipngCartProduct from "../Components/MostSharedComponent/ShoppipngCartProduct";
import Heading2 from "../Components/Font/Heading2";
import ProductThree from "../Components/ProductType/ProductThree";
const addressData = [
  {
    id: 0,
    isDefault: true,
    addressType: "Home",
    userName: "John Doe",
    adddress: "21 West 52nd Street New York, New York, 10021 United States",
    contact: "+1123456789",
  },
  {
    id: 1,
    isDefault: false,
    addressType: "Office",
    userName: "Martin Smith",
    adddress: "21 West 52nd Street New York, New York, 10021 United States",
    contact: "+1123456789",
  },
];

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
const deliveryType = [
  {
    id: 1,
    type: "Standard",
    protectionText: "delivery by Mon, Apr 4",
    price: 0,
  },
  {
    id: 2,
    type: "Express",
    protectionText: "Same Day Delivery",
    price: 10,
  },
  {
    id: 3,
    type: "Lightening",
    protectionText: "Shipping",
    price: 15,
  },
];
function Checkout_Page({reloadingHeader}) {
  const [selectedAddressId, setSelectedAddressID] = useState(0);
  const [couponCode, setCouponCode] = useState("");

  const handleSubmit = (code) => {
    console.log(code);
  };
  const selectAddress = (addIndex, addId, add) => {
    setSelectedAddressID(addIndex);
    console.log(addId, add);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const remove = (id) => {
    console.log(id);
  };
  const [iconType,setIconType]=useState({
    signin:"done",
    delivery:"inprogress",
    payment:"initial"
  })
const [checkoutClassName, setCheckoutClassName]= useState("delivery")
const handleChangeClassName = (className)=>{
  setCheckoutClassName(className)
}
  const openLoginWrapperFromAnywhere =()=>{
    // console.log(document.querySelector(".login__popup__container__disable"));
    // reloadingHeader()
    const element = document.querySelector(".login__popup__container__disable")
    element.classList.remove("login__popup__container__disable")
    element.classList.add("login__popup__container")
    localStorage.setItem("loginWrapper",JSON.stringify(true))
    localStorage.setItem("loginMode",JSON.stringify("signin"))
  localStorage.setItem("loginPopup",JSON.stringify(true))
    window.scrollTo(500, 0);
    
  }
  return (
    <>
      <BreadCrumbs title="Checkout" />
      <div className="container-fluid checkout__page__container">
        <div className="checkout__page__block">
          <div className="row checkout__page__inner__block">
            <div className="col-md-12 col-xl-9  checkout__left__block">
              <div className="row checkout__login__main__block">
               <div onClick={()=>openLoginWrapperFromAnywhere()} className="col-2 checkout__signin__button">
                <img src={iconType.signin === "inprogress"? signin_inprogress :iconType.signin === "done"? signin_done:signin_initial} alt="" />
                <Heading5 text="SIGN IN" marginLeft={10} color={iconType.signin === "inprogress"?"#DC3A1A":iconType.signin === "done"?"#585858":"#C8C8C8"} span={true}/>
                {iconType.signin === "done"?<img className="done__icon" src={done} alt="done"/> :""}

                </div>
               <div className="col-3 checkout__middle__line__block">
               </div>
               <div onClick={()=> handleChangeClassName("delivery")}  className="col-2 checkout__delivery__button">
                   <img src={iconType.delivery === "inprogress"? delivery_inprogress :iconType.delivery === "done"? delivery_done:delivery_initial} alt="" />
                <Heading5 text="DELIVERY" marginLeft={10} color={iconType.delivery === "inprogress"?"#DC3A1A":iconType.delivery === "done"?"#585858":"#C8C8C8"} span={true}/>
                {iconType.delivery === "done"?<img className="done__icon" src={done} alt="done"/> :""}
               </div>
               <div className="col-3 checkout__middle__line__block"></div>
               <div onClick={()=> handleChangeClassName("payment")} className="col-2 checkout__payment__button">
               <img src={iconType.payment === "inprogress"? payment_inprogress :iconType.payment === "done"? payment_done:payment_initial} alt="" />
                <Heading5 text="PAYMENT" marginLeft={10} color={iconType.payment === "inprogress"?"#DC3A1A":iconType.payment === "done"?"#585858":"#C8C8C8"} span={true}/>
                {iconType.payment === "done"?<img className="done__icon" src={done} alt="done"/> :""}
               </div>
              </div>
              <div  className={checkoutClassName === "delivery"? "user__delivery__address__block":"user__delivery__address__block__disable"}>
                <div className="delivery__address__block">
                  <div className="delivery__address__title__block">
                    <img src={shipping} alt="" className="user__icon" />
                    <Heading5
                      text="DELIVERY ADDRESS"
                      color="#808080"
                      marginLeft={10}
                      marginBottom={0}
                    />
                  </div>
                  <div className="row address__select__block">
                    {addressData.map((add, addIndex) => {
                      return (
                        <div
                          key={add.id}
                          className="col-12 col-sm-6 address__block"
                        >
                          <div
                            className={
                              selectedAddressId === addIndex
                                ? "selected__address__inner__block"
                                : "address__inner__block"
                            }
                            onClick={() => selectAddress(addIndex, add.id, add)}
                          >
                            {add.isDefault ? (
                              <div className="address__tag">
                                <Heading7 text="DEFAULT" span={true} />
                              </div>
                            ) : (
                              <div className="white__address__tag">
                                <Text5
                                  text="NONE"
                                  span={true}
                                  color="#ffffff"
                                />
                              </div>
                            )}
                            <Heading7 text={add.userName} />
                            <p className="full__address">
                              <Text4 text={add.adddress} marginBottom={20} />
                            </p>
                            <Heading7 text="Phone Number:" color="#808080" span={true} />  <Text4 text={add.contact} marginLeft={10} span={true}/>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <hr className="checkout__page__horizontal__line"></hr>
                <div className=" add__new__address__block">
                  <div className="add__new__address__title__block">
                    <Heading5
                      text="Add New Address"
                      marginBottom={0}
                      color="#000000"
                    />
                    <button className="location__button">
                      <img
                        src={black_location}
                        alt=""
                        className="location__icon"
                      />
                      Locate me
                    </button>
                  </div>
                </div>
                <hr className="checkout__page__horizontal__line"></hr>

                <div className="row delivery__selcetion__pickup__store">
                  <div className="col-12 col-sm-12 col-md-7 delivery__preferences__block">
                    <div className="delivery__preferences__title__block">
                      <Heading6 text="Delivery Preferences" />
                    </div>
                    <div className="delivery__selection__block">
                      {deliveryType.map((delivery, deliveryIndex) => {
                        return (
                          <div
                            key={delivery.id}
                            className="delivery__selection"
                          >
                            <div className="delivery__selection__form__block">
                              <input
                                type="radio"
                                className="delivery__input__check"
                                name="deliveryType"
                                value={delivery.type}
                                onChange={handleChange}
                              />
                              <p className="delivery__selection__text">
                                <Heading4 text={delivery.type} />
                                <Text3
                                  text={delivery.protectionText}
                                  color="#3b3b3b"
                                  marginBottom={0}
                                />
                              </p>
                            </div>
                            <div className="delivery__price__block">
                              <p className="delivery__price">
                                {delivery.price <= 0 ? (
                                  <Heading4 text="FREE" color="#FF4F04" />
                                ) : (
                                  <Price
                                    price={delivery.price}
                                    size="heading6"
                                  />
                                )}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-5  delivery__pickup__store">
                    <PickupStore
                      delivery={product.delivery}
                      title="Pick Up From Store"
                    />
                  </div>
                </div>
              </div>
              <div className={checkoutClassName === "payment"?  "user__payment__block" :"user__payment__block__disable" }>
                <h1>Payment</h1>
              </div>
              {/* <div className="order__summary__block">
              <div className="order__summary__title__block">
                    <img src={shipping} alt="" className="user__icon" />
                    <Heading5
                      text="ORDER SUMMARY"
                      color="#808080"
                      marginLeft={10}
                      marginBottom={0}
                    />
                  </div>
                <ShoppipngCartProduct product={product} />
                <hr className="checkout__page__horizontal__line"></hr>
                <p className="checkout__page__block__title">
                <Heading2
                  text="Our experts recommend the following products:"
                  marginBottom={0}
                  marginLeft={16}
                />
              </p>
              <ProductThree product={product} />
              <hr className="checkout__page__horizontal__line"></hr>
              </div> */}
            </div>
            {/* package Summary */}
            <div className="col-md-12 col-xl-3  checkout__right__block">
              <div className="checkout__package__summary__block">
                <p className="checkout__os__title">
                  {" "}
                  <Heading3 text="Price Details" />
                </p>
                <div className="checkout__os__detail__block">
                  <div className="checkout__os__detail__inner__block">
                    <Text3 text="Shipping" color="#000000" />
                    <Price price={20} size="heading7" />
                  </div>
                  <div className="checkout__os__detail__inner__block">
                    <Text3 text="Sub Total" color="#000000" />
                    <Price price={195} size="heading7" />
                  </div>
                  <div className="checkout__os__detail__inner__block">
                    <Text3 text="Discount" color="#000000" />
                    <Price price={30} size="heading7" />
                  </div>
                  <div className="checkout__os__detail__inner__block">
                    <Text3 text="Tax" color="#000000" />
                    <Price price={10} size="heading7" />
                  </div>
                  <div className="checkout__os__detail__total__order__block">
                    <Heading6 text="Order Total" color="#000000" />
                    <Price price={3275} size="heading7" />
                  </div>
                </div>
              </div>
              <SuperCoin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout_Page;
