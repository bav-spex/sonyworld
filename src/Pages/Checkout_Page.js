import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as services from "./../services/services";
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
import cancel_grey from "./../assets/Icon/cancel_grey.svg";
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
import AddressPopup from "../Components/Popup/AddressPopup";
import { loadCountriesLocationData } from "../redux/appAction";
import { loadCitiesLocationData } from "../redux/appAction";
import {
  getAvailablePaymentMethods,
  getCartData,
  getEstimateShippingMethods,
  updateShippingInformation
} from "../services/cart.service";
import { Link } from "react-router-dom";
import { getCustomerLoginDetails } from "../Components/helpers/utils/getCustomerLoginDetails";

const errMsgStyle = {
  color: 'red',
  margin: '5px 0px 0px'
}
// const addressData = [
//   {
//     id: 0,
//     isDefault: true,
//     addressType: "Home",
//     userName: "John Doe",
//     adddress: "21 West 52nd Street New York, New York, 10021 United States",
//     contact: "+1123456789",
//   },
//   {
//     id: 1,
//     isDefault: false,
//     addressType: "Office",
//     userName: "Martin Smith",
//     adddress: "21 West 52nd Street New York, New York, 10021 United States",
//     contact: "+1123456789",
//   },
// ];

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
// const deliveryType = [
//   {
//     id: 1,
//     type: "Standard",
//     protectionText: "delivery by Mon, Apr 4",
//     price: 0,
//   },
//   {
//     id: 2,
//     type: "Express",
//     protectionText: "Same Day Delivery",
//     price: 10,
//   },
//   {
//     id: 3,
//     type: "Lightening",
//     protectionText: "Shipping",
//     price: 15,
//   },
// ];

function Checkout_Page({ reloadingHeader }) {
  const dispatch = useDispatch();

  const { customerDetails } = useSelector((state) => state.customerReducer);

  const { customerAddressList, customerAddUpdateManage } = useSelector(
    (state) => state.customerAddressReducer
  );

  const deliveryShippingInfo = useSelector(
    (state) => state.appData.deliveryShippingInfo
  );

  const [selectedAddressId, setSelectedAddressID] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [addressPopup, setAddressPopup] = useState(false);
  const [addressData, setAddressData] = useState(false);
  const [editAddressData, setEditAddressData] = useState("");
  const [addressPopupType, setAddressPopupType] = useState("add");
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [userPaymentMethod, setUserPaymentMethod] = useState();
  const [cartDetail, setCartDetail] = useState();
  const [cartTotalData, setCartTotalData] = useState();
  const [shippingMethods, setShippingMethods] = useState();
  const [deliveryType, setDeliveryType] = useState([]);
  const [deliveryPreferencesType, setDeliveryPreferencesType] = useState('');

  const [errMsg, setErrMsg] = useState({
    deliveryAddressList: "",
    deliveryPreferencesType: "",
  });

  useEffect(() => {
    if (deliveryShippingInfo !== "") {
      setIconType({ ...iconType, delivery: "done", payment: "inprogress" });
      setCheckoutClassName('payment');
    }
  }, [deliveryShippingInfo]);

  useEffect(async () => {
    const data = await getAvailablePaymentMethods();
    if (data) {
      setPaymentMethods(data.paymentMethods);
      setUserPaymentMethod(data.paymentMethods[0].code);
    }
    const cartData = await getCartData();
    if (data) {
      setCartTotalData(cartData.data.totals_data);
    }
    // dispatch(services.getCustomerAddressList());
    // dispatch(loadCountriesLocationData());
    // dispatch(loadCitiesLocationData());
  }, []);

  // Delivery Preferences
  useEffect(async () => {
    const data = await getEstimateShippingMethods();
    if (data) {
      let shippingMethods = data['shipping-methods']
      const propertyNames = Object.keys(shippingMethods);
      let deliveryData = [];
      propertyNames && propertyNames.map((val, i) => {
        let deliveryInfo = {
          id: shippingMethods[val].shipping_method_code,
          type: shippingMethods[val].title,
          protectionText: "",
          price: shippingMethods[val].shipping_cost,
        }
        if (shippingMethods[val].is_available === true) {
          deliveryData.push(deliveryInfo);
        }
      })
      setDeliveryType(deliveryData);
    }
  }, []);

  // console.log("cartTotalData", cartTotalData);
  useEffect(() => {
    // getAvailablePaymentMethods();
    dispatch(services.getCustomerAddressList());
    dispatch(loadCountriesLocationData());
    dispatch(loadCitiesLocationData());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (customerAddressList) {
      let updateAddressData = [];
      customerAddressList &&
        customerAddressList.map((val, i) => {
          let addreDetails = {
            id: val.id,
            isDefault: val.primary,
            userName: `${val.firstname} ${val.lastname}`,
            adddress: `${val.street[0]} ${val.street[1]} ${val.city} ${val.postcode} ${val.country_id}`,
            contact: val.telephone,
            details: val,
          };
          updateAddressData.push(addreDetails);
          if (val.primary === true) {
            setSelectedAddressID(i)
          }
        });
      setAddressData(updateAddressData);
    }
  }, [customerAddressList]);

  const handleSubmit = (code) => {
    // console.log(code);
  };
  const selectAddress = (addIndex, addId, add) => {
    setSelectedAddressID(addIndex);
    setEditAddressData(add);
  };
  const handleChange = (e) => {
    // console.log("e.target.value ", e.target.value);
    setUserPaymentMethod(e.target.value);
  };
  const handleChangeDeliveryPref = (e) => {
    setDeliveryPreferencesType(e.target.value);
  };

  const remove = (id) => {
    // console.log(id);
  };
  const [iconType, setIconType] = useState({
    signin: "done",
    delivery: "inprogress",
    payment: "initial",
  });

  useEffect(() => {
    if (customerDetails === "") {
      openLoginWrapperFromAnywhere();
      setIconType({ ...iconType, signin: "inprogress" });
    } else {
      dispatch(services.getCustomerAddressList());
      setIconType({ ...iconType, signin: "done" });
    }
  }, [customerDetails]);

  const [checkoutClassName, setCheckoutClassName] = useState("delivery");
  const handleChangeClassName = (className) => {
    setCheckoutClassName(className);
  };
  
  const continueFromDelivery = (newIconType, className) => {

    let newErrObj = {
      deliveryPreferencesType: "",
      deliveryAddressList: ""
    }

    if (deliveryPreferencesType !== "") {
      newErrObj = { ...newErrObj, deliveryPreferencesType: "" }
    } else {
      newErrObj = { ...newErrObj, deliveryPreferencesType: "Please Select Delivery Preference" }
    }
    if (selectedAddressId !== "") {
      newErrObj = { ...newErrObj, deliveryAddressList: "" }
    } else {
      newErrObj = { ...newErrObj, deliveryAddressList: "Please Select Delivery Address" }
    }
    setErrMsg(newErrObj);

    let customerLoginDetails = getCustomerLoginDetails();
    if (deliveryPreferencesType !== "" && selectedAddressId !== "" && customerLoginDetails.email !== "") {
      let getDeliveryInfo = addressData?.[selectedAddressId]
      let params = {
        useAsBilling: true,
        firstName: getDeliveryInfo.details.firstname,
        lastName: getDeliveryInfo.details.lastname,
        email: customerLoginDetails.email,
        telephone: getDeliveryInfo.details.telephone,
        city: getDeliveryInfo.details.city,
        postCode: getDeliveryInfo.details.postcode,
        countryId: getDeliveryInfo.details.country_id,
        street: `${getDeliveryInfo.details.street[0]} ${getDeliveryInfo.details.street[1]}`,
        shippingCarrierCode: deliveryPreferencesType,
        // pickup_store: '',
        // region_id: "0"
      }
      dispatch(updateShippingInformation(params));
    }

    // setIconType(newIconType);
    // setCheckoutClassName(className);
  };

  const openLoginWrapperFromAnywhere = () => {
    // console.log(document.querySelector(".login__popup__container__disable"));
    // reloadingHeader()

    if (customerDetails === "") {
      const element = document.querySelector(
        ".login__popup__container__disable"
      );
      element.classList.remove("login__popup__container__disable");
      element.classList.add("login__popup__container");
      localStorage.setItem("loginWrapper", JSON.stringify(true));
      localStorage.setItem("loginMode", JSON.stringify("signin"));
      localStorage.setItem("loginPopup", JSON.stringify(true));
      window.scrollTo(500, 0);
    }
  };
  const closeLoginPopup = () => {
    if (document.querySelector(".address__popup__container")) {
      // reloadingHeader()
      const element = document.querySelector(".address__popup__container");
      element.classList.remove("address__popup__container");
      element.classList.add("address__popup__container__disable");
    }
    setAddressPopup(false);
  };

  const openNewAddressPopup = (popupType) => {
    setAddressPopup(true);
    setAddressPopupType(popupType);
  };

  const deleteAddress = (deleteId) => {
    let params = {
      addressId: deleteId,
    };
    dispatch(services.deleteCustomerAddress(params));
  };

  return (
    <>
      <BreadCrumbs title="Checkout" />
      <div className="container-fluid checkout__page__container">
        <div className="checkout__page__block">
          <div className="row checkout__page__inner__block">
            <div className="col-md-12 col-xl-9  checkout__left__block">
              <div className="row checkout__login__main__block">
                <div
                  onClick={() => openLoginWrapperFromAnywhere()}
                  className="col-2 checkout__signin__button"
                >
                  <img
                    src={
                      iconType.signin === "inprogress"
                        ? signin_inprogress
                        : iconType.signin === "done"
                          ? signin_done
                          : signin_initial
                    }
                    alt=""
                  />
                  <Heading5
                    text="SIGN IN"
                    marginLeft={10}
                    color={
                      iconType.signin === "inprogress"
                        ? "#DC3A1A"
                        : iconType.signin === "done"
                          ? "#585858"
                          : "#C8C8C8"
                    }
                    span={true}
                  />
                  {iconType.signin === "done" ? (
                    <img className="done__icon" src={done} alt="done" />
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-3 checkout__middle__line__block"></div>
                <div
                  onClick={() => handleChangeClassName("delivery")}
                  className="col-2 checkout__delivery__button"
                >
                  <img
                    src={
                      iconType.delivery === "inprogress"
                        ? delivery_inprogress
                        : iconType.delivery === "done"
                          ? delivery_done
                          : delivery_initial
                    }
                    alt=""
                  />
                  <Heading5
                    text="DELIVERY"
                    marginLeft={10}
                    color={
                      iconType.delivery === "inprogress"
                        ? "#DC3A1A"
                        : iconType.delivery === "done"
                          ? "#585858"
                          : "#C8C8C8"
                    }
                    span={true}
                  />
                  {iconType.delivery === "done" ? (
                    <img className="done__icon" src={done} alt="done" />
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-3 checkout__middle__line__block"></div>
                <div
                  onClick={() => handleChangeClassName("payment")}
                  className="col-2 checkout__payment__button"
                >
                  <img
                    src={
                      iconType.payment === "inprogress"
                        ? payment_inprogress
                        : iconType.payment === "done"
                          ? payment_done
                          : payment_initial
                    }
                    alt=""
                  />
                  <Heading5
                    text="PAYMENT"
                    marginLeft={10}
                    color={
                      iconType.payment === "inprogress"
                        ? "#DC3A1A"
                        : iconType.payment === "done"
                          ? "#585858"
                          : "#C8C8C8"
                    }
                    span={true}
                  />
                  {iconType.payment === "done" ? (
                    <img className="done__icon" src={done} alt="done" />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div
                className={
                  checkoutClassName === "delivery"
                    ? "user__delivery__address__block"
                    : "user__delivery__address__block__disable"
                }
              >
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
                  {customerDetails !== "" && (
                    <div className="row address__select__block">
                      {addressData &&
                        addressData.map((add, addIndex) => {
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
                                onClick={() =>
                                  selectAddress(addIndex, add.id, add)
                                }
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
                                  <Text4
                                    text={add.adddress}
                                    marginBottom={20}
                                  />
                                </p>
                                <Heading7
                                  text="Phone Number:"
                                  color="#808080"
                                  span={true}
                                />{" "}
                                <Text4
                                  text={add.contact}
                                  marginLeft={10}
                                  span={true}
                                />
                                <div className="address__button__block">
                                  <button className="delivery__button">
                                    DELIVER TO THIS ADDRESS
                                  </button>
                                  <div className="inner__address__button__block">
                                    <button
                                      onClick={() =>
                                        openNewAddressPopup("update")
                                      }
                                      className="edit__button"
                                    >
                                      EDIT
                                    </button>
                                    <button
                                      className="delete__button"
                                      onClick={() => deleteAddress(add.id)}
                                    >
                                      DELETE
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      {errMsg.deliveryAddressList && <p className="invalid__message" style={errMsgStyle}>{errMsg.deliveryAddressList}</p>}
                    </div>
                  )}
                </div>
                {customerDetails !== "" && (
                  <>
                    <hr className="checkout__page__horizontal__line"></hr>
                    <div className=" add__new__address__block">
                      <button
                        onClick={() => openNewAddressPopup("add")}
                        className="location__button"
                      >
                        <img
                          src={black_location}
                          alt=""
                          className="location__icon"
                        />
                        <Heading5
                          text="Add New Address"
                          marginBottom={0}
                          color="#000000"
                        />
                      </button>
                    </div>
                    <hr className="checkout__page__horizontal__line"></hr>

                    <div className="row delivery__selcetion__pickup__store">
                      <div className="col-12 col-sm-12 col-md-7 delivery__preferences__block">
                        <div className="delivery__preferences__title__block">
                          <Heading6 text="Delivery Preferences" />
                        </div>
                        <div className="delivery__selection__block">
                          {deliveryType && deliveryType.map((delivery, deliveryIndex) => {
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
                                    value={delivery.id}
                                    onChange={(e) => handleChangeDeliveryPref(e)}
                                  // checked={delivery.id !== "" ? 'checked' : 'unchecked'}
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
                          {errMsg.deliveryPreferencesType && <p className="invalid__message" style={errMsgStyle}>{errMsg.deliveryPreferencesType}</p>}
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-5  delivery__pickup__store">
                        <PickupStore
                          delivery={product.delivery}
                          title="Pick Up From Store"
                        />
                      </div>
                      <div className="continue__button__block">
                        <div></div>
                        <button
                          onClick={() =>
                            continueFromDelivery(
                              // { ...iconType, delivery: "done", payment: "inprogress" },
                              // "payment"
                            )
                          }
                          className="continue___button"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div
                className={
                  checkoutClassName === "payment"
                    ? "user__payment__block"
                    : "user__payment__block__disable"
                }
              >
                <div className="payment__block">
                  <div className="payment__title__block">
                    <img src={payment_done} alt="" className="user__icon" />
                    <Heading5
                      text="PAYMENT OPTIONS"
                      color="#808080"
                      marginLeft={10}
                      marginBottom={0}
                    />
                  </div>
                  {paymentMethods &&
                    paymentMethods?.map((payment, paymentIndex) => {
                      return (
                        <div className="payment__form__main__block">
                          <div
                            key={payment.code}
                            className="payment__form__block"
                          >
                            <input
                              type="radio"
                              className="payment__input__check"
                              name="paymentType"
                              value={payment.code}
                              onChange={handleChange}
                            />
                            <p className="payment__selection__text">
                              <Heading4 text={payment.english_name} />
                            </p>
                          </div>
                          {userPaymentMethod === payment.code ? (
                            <div className="payment__detail__form__block">
                              {userPaymentMethod === "payfort_fort_cc" ? (
                                <div className="payment__card__block"></div>
                              ) : (
                                ""
                              )}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                  <div className="continue__button__block">
                    <div></div>
                    <Link className="continue___button__link" to="/user/orders/1/confirm">
                      <button className="continue___button">Continue</button>
                    </Link>
                  </div>
                </div>
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
                  {/* <div className="checkout__os__detail__inner__block">
                    <Text3 text="Shipping" color="#000000" />
                    <Price price={20} size="heading7" />
                  </div> */}
                  {cartTotalData?.total_segments
                    .slice(1, 5)
                    .map((segment, segmentIndex) => {
                      return (
                        <div className="checkout__os__detail__inner__block">
                          {segment.code === "grand_total" ? (
                            <Heading6 text={segment.title} color="#000000" />
                          ) : (
                            <Text3 text={segment.title} color="#000000" />
                          )}
                          <Price
                            price={segment.value}
                            size="heading7"
                            currency={cartTotalData.base_currency_code}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
              <SuperCoin />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          addressPopup
            ? "container-fluid address__popup__container"
            : "container-fluid address__popup__container__disable"
        }
      >
        <AddressPopup
          closeLoginPopup={closeLoginPopup}
          editAddressData={editAddressData}
          popupType={addressPopupType}
        />
      </div>
    </>
  );
}

export default Checkout_Page;
