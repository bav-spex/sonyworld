import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as services from "./../../services/services";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Heading4 from "../../Components/Font/Heading4";
import Heading3 from "../../Components/Font/Heading3";
import Heading5 from "../../Components/Font/Heading5";
import Heading6 from "../../Components/Font/Heading6";
import Price from "../../Components/Font/Price";
import Text3 from "../../Components/Font/Text3";
import SuperCoin from "../../Components/MostSharedComponent/SuperCoin";

import Text5 from "../../Components/Font/Text5";
import Heading7 from "../../Components/Font/Heading7";
import Text4 from "../../Components/Font/Text4";
import signin_initial from "./../../assets/Icon/signin_initial.svg";
import signin_inprogress from "./../../assets/Icon/signin_inprogress.svg";
import signin_done from "./../../assets/Icon/signin_done.svg";
import delivery_initial from "./../../assets/Icon/delivery_initial.svg";
import delivery_inprogress from "./../../assets/Icon/delivery_inprogress.svg";
import delivery_done from "./../../assets/Icon/delivery_done.svg";
import payment_initial from "./../../assets/Icon/payment_initial.svg";
import payment_inprogress from "./../../assets/Icon/payment_inprogress.svg";
import payment_done from "./../../assets/Icon/payment_done.svg";
import done from "./../../assets/Icon/done.svg";
import check from "./../../assets/Icon/check.svg";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import shipping from "./../../assets/Icon/shipping.svg";
import sony_logo from "./../../assets/Icon/sony_logo.svg";
import black_location from "./../../assets/Icon/black_location.svg";

import PickupStore from "../../Components/MostSharedComponent/PickupStore";
import AvailableOffers from "../../Components/MostSharedComponent/AvailableOffers";
import ShoppipngCartProduct from "../../Components/MostSharedComponent/ShoppipngCartProduct";
import Heading2 from "../../Components/Font/Heading2";
import ProductThree from "../../Components/ProductType/ProductThree";
import AddressPopup from "../../Components/Popup/AddressPopup";
import { loadCountriesLocationData } from "../../redux/appAction";
import { loadCitiesLocationData } from "../../redux/appAction";
import {
  getAvailablePaymentMethods,
  getCartData,
  getEstimateShippingMethods,
  getPayfortInformation,
  updateShippingInformation
} from "./../../services/cart.service";
import { Link } from "react-router-dom";
import { getCustomerLoginDetails } from "../../Components/helpers/utils/getCustomerLoginDetails";
import valid from "card-validator";




import './../../SCSS/MobilePages/_mobileCheckoutPage.scss';


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

function Mobile_Checkout_Page({  }) {
    const dispatch = useDispatch();

  const { customerDetails } = useSelector((state) => state.customerReducer);
  // console.log(customerDetails);
  const { customerAddressList, customerAddUpdateManage } = useSelector(
    (state) => state.customerAddressReducer
  );

  const deliveryShippingInfo = useSelector(
    (state) => state.appData.deliveryShippingInfo
  );
  console.log("deliveryShippingInfo ", deliveryShippingInfo);
  
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
  const [paymentMethodForPayfort, setPaymentMethodForPayfort] = useState({
    method: "",
    email: "",
    referer_url: ""
  })
  const [deliveryPreferencesType, setDeliveryPreferencesType] = useState('');

  const [errMsg, setErrMsg] = useState({
    deliveryAddressList: "",
    deliveryPreferencesType: "",
  });
  // useEffect(() => {
  //   if (deliveryShippingInfo !== "") {
     
  //   }
  // }, [deliveryShippingInfo]);
  
     

  const [card, setCard] = useState({
    cardNumber: "",
    cardHolder: "",
    month: "",
    year: "",
    cvv: ""
  })

  const [cardErrMsg, setCardErrMsg] = useState({
    cardNumber: "",
    cardHolder: "",
    month: "",
    year: "",
    cvv: ""
  });

  useEffect(() => {
    if (deliveryShippingInfo !== "") {
      setIconType({ ...iconType, delivery: "done", payment: "inprogress" });
      setCheckoutClassName('payment');
      setPaymentMethods(deliveryShippingInfo.payment_methods);
      setUserPaymentMethod(deliveryShippingInfo.payment_methods[0].code);
    }
  }, [deliveryShippingInfo]);
console.log("paymentMethods",paymentMethods);
  useEffect(async () => {
    const data = await getAvailablePaymentMethods();
    if (data) {
      // setPaymentMethods(data.paymentMethods);
      // setUserPaymentMethod(data.paymentMethods[0].code);
      setPaymentMethodForPayfort({
        method: "",
        email: customerDetails.email,
        referer_url: "https://alpha-api.mestores.com",
      });
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
    // console.log(data);
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
    if(className === "payment" && deliveryShippingInfo !== ""){
      setCheckoutClassName(className);
    }
    else if(deliveryShippingInfo === ""){
      dispatch(services.notifyError({message:"please add proucts in cart, Empty cart is not can proceed further"}))
    }else{
      dispatch(services.notifyError({message:"select shipping information"}))

    }
    // setIconType({ ...iconType, payment: "inprogress" });
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

  const openNewAddressPopup = (popupType, addIndex, addId, add) => {
    setAddressPopup(true);
    setAddressPopupType(popupType);
    if (popupType === 'update') {
      setSelectedAddressID(addIndex);
      setEditAddressData(add);
    }
  };

  const deleteAddress = (deleteId) => {
    let params = {
      addressId: deleteId,
    };
    dispatch(services.deleteCustomerAddress(params));
  };


  const handleChangePaymentMethod = (e) => {
    console.log(e.target.value);
    setUserPaymentMethod(e.target.value);
    setPaymentMethodForPayfort({
      method: e.target.value,
      email: customerDetails.email,
      referer_url: "https://alpha-api.mestores.com",
    });
  };
  console.log(paymentMethodForPayfort);
  const makePayment = async () => {

    let validateFeild = [
      "cardNumber",
      "cardHolder",
      "month",
      "year",
      "cvv",
    ];

    let formStatus = allFeildValidate(validateFeild, cardErrMsg);
    setCardErrMsg(formStatus.allErrMsg);

    if (formStatus.checkCardStatus === true) {

      const newPaymentMethodForPayfort = { paymentMethod: paymentMethodForPayfort }
      console.log(newPaymentMethodForPayfort);
      const data = await getPayfortInformation(newPaymentMethodForPayfort)
      console.log(data);

    }

  }


  const validateForm = (event, newErrObj, name, value) => {

    //A function to validate each input values
    switch (name) {
      case 'cardNumber':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: 'Card Number is missing' }
        } else {
          let numberValidation = valid.number(value);
          if (numberValidation.isPotentiallyValid === true && numberValidation.isValid === true) {
            newErrObj = { ...newErrObj, [name]: '' }
          } else {
            newErrObj = { ...newErrObj, [name]: 'invalid' }
          }
        }
        break;
      case 'cardHolder':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: 'Card Holder is missing' }
        } else {
          let holderValidation = valid.cardholderName(value);
          if (holderValidation.isPotentiallyValid === true && holderValidation.isValid === true) {
            newErrObj = { ...newErrObj, [name]: '' }
          } else {
            newErrObj = { ...newErrObj, [name]: 'invalid' }
          }
        }
        break;
      case 'month':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: 'Month is missing' }
        } else {
          let monthValidation = valid.expirationMonth(value);
          if (monthValidation.isPotentiallyValid === true && monthValidation.isValid === true) {
            newErrObj = { ...newErrObj, [name]: '' }
          } else {
            newErrObj = { ...newErrObj, [name]: 'invalid' }
          }
        }
        break;
      case 'year':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: 'Year is missing' }
        } else {
          let yearValidation = valid.expirationYear(value);
          if (yearValidation.isPotentiallyValid === true && yearValidation.isValid === true) {
            newErrObj = { ...newErrObj, [name]: '' }
          } else {
            newErrObj = { ...newErrObj, [name]: 'invalid' }
          }
        }
        break;
      case 'cvv':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: 'CVV is missing' }
        } else {
          let cvvValidation = valid.cvv(value);
          if (cvvValidation.isPotentiallyValid === true && cvvValidation.isValid === true) {
            newErrObj = { ...newErrObj, [name]: '' }
          } else {
            newErrObj = { ...newErrObj, [name]: 'invalid' }
          }
        }
        break;
      default:
        break;
    }
    return newErrObj;
  }

  const handleChangeCard = async (event) => {
    let value = event.target.value;
    let name = event.target.name;
    let manageErrMsg = validateForm(event, cardErrMsg, name, value);
    setCardErrMsg(manageErrMsg);
    setCard({ ...card, [name]: value });
  };

  const allFeildValidate = (validateFeild, allErrMsg) => {

    let checkValueStatus = [];
    let checkErrStatus = [];

    validateFeild && validateFeild.map((val, i) => {
      let keyVal = card[val];
      let errVal = cardErrMsg[val];

      allErrMsg = validateForm('', allErrMsg, val, keyVal);
      if (keyVal !== "") {
        checkValueStatus.push('suc')
      }
      if (errVal === "") {
        checkErrStatus.push('err')
      }

    })

    let checkCardStatus = false;
    if (checkValueStatus.length === validateFeild.length && checkErrStatus.length === validateFeild.length) {
      checkCardStatus = true;
    }

    let returnData = {
      allErrMsg: allErrMsg,
      checkCardStatus: checkCardStatus
    }

    return returnData;
  };
    return (
        <>
            <div className="mb__checkout__page container-fluid ">
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
          
                 Mobile_Checkout_Page
            </div>
        </>
    );
}
export default Mobile_Checkout_Page;