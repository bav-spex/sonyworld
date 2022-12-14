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
import {
  loadCartData,
  loadCountriesLocationData,
  loadPayfortInformation,
} from "../redux/appAction";
import { loadCitiesLocationData } from "../redux/appAction";
import {
  getAvailablePaymentMethods,
  getCartData,
  getEstimateShippingMethods,
  getPayfortInformation,
  updateShippingInformation,
} from "../services/cart.service";
import { Link, useNavigate } from "react-router-dom";
import { getCustomerLoginDetails } from "../Components/helpers/utils/getCustomerLoginDetails";
import valid from "card-validator";
import Mobile_Checkout_Page from "./MobilePages/Mobile_Checkout_page";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from './../Components/helpers/utils/cardValidator';
import { updateShippingInformationSuccess } from "../services/cart.service";

const errMsgStyle = {
  color: "red",
  margin: "5px 0px 0px",
};
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
          "Available today at Riyadh Act Fast ??? Only 3 left at your store!>",
      },
      {
        id: 2,
        pickupText:
          "Available today at Riyadh Act Fast ??? Only 3 left at your store!>",
      },
      {
        id: 3,
        pickupText:
          "Available today at Riyadh Act Fast ??? Only 3 left at your store!>",
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
  const navigate = useNavigate();
  const { customerDetails } = useSelector((state) => state.customerReducer);
  // console.log(customerDetails);
  const { customerAddressList, customerAddUpdateManage } = useSelector(
    (state) => state.customerAddressReducer
  );

  const deliveryShippingInfo = useSelector(
    (state) => state.appData.deliveryShippingInfo
  );
  // console.log("deliveryShippingInfo ", deliveryShippingInfo);

  const [selectedAddressId, setSelectedAddressID] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [addressPopup, setAddressPopup] = useState(false);
  const [addressData, setAddressData] = useState([]);
  const [editAddressData, setEditAddressData] = useState("");
  const [addressPopupType, setAddressPopupType] = useState("add");
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [userPaymentMethod, setUserPaymentMethod] = useState();
  const [cartDetail, setCartDetail] = useState();
  const [cartTotalData, setCartTotalData] = useState();
  const [loading, setLoading] = useState(true);
  const [shippingMethods, setShippingMethods] = useState();
  const [deliveryType, setDeliveryType] = useState([]);
  const [paymentMethodForPayfort, setPaymentMethodForPayfort] = useState({
    method: "",
    email: "",
    referer_url: "",
  });
  const [deliveryPreferencesType, setDeliveryPreferencesType] = useState("");
  const [viewMoreAddressBtn, setViewMoreAddressBtn] = useState(false);

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
    monthYear: "",
    month: "",
    year: "",
    cvv: "",
  });

  const [cardErrMsg, setCardErrMsg] = useState({
    cardNumber: "",
    cardHolder: "",
    monthYear: "",
    month: "",
    year: "",
    cvv: "",
  });

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

    // dispatch(services.getCustomerAddressList());
    // dispatch(loadCountriesLocationData());
    // dispatch(loadCitiesLocationData());
  }, []);
  const cartData = useSelector((state) => state.appData.cartData);
  // console.log("cartData ", cartData);

  useEffect(() => {
    if (Object.values(cartData).length !== 0) {
      setCartTotalData(cartData.totals_data);
      setLoading(false);
      window.scrollTo(0, 0);
    }
  }, [cartData]);
  useEffect(() => {
    if (deliveryShippingInfo !== "") {
      setIconType({ ...iconType, delivery: "done", payment: "inprogress" });
      setCheckoutClassName("payment");
      // console.log(deliveryShippingInfo.payment_methods);
      setPaymentMethods(deliveryShippingInfo.payment_methods);
      setUserPaymentMethod(deliveryShippingInfo.payment_methods[0].code);
      dispatch(updateShippingInformationSuccess(''))
    }
  }, [deliveryShippingInfo]);
  // console.log("paymentMethods", paymentMethods);

  // console.log(273, cartTotalData && cartTotalData);
  // Delivery Preferences
  useEffect(async () => {
    const data = await getEstimateShippingMethods();
    // console.log(data);
    if (data) {
      let shippingMethods = data["shipping-methods"];
      const propertyNames = Object.keys(shippingMethods);
      let deliveryData = [];
      propertyNames &&
        propertyNames.map((val, i) => {
          let deliveryInfo = {
            id: shippingMethods[val].shipping_method_code,
            type: shippingMethods[val].title,
            protectionText: "",
            price: shippingMethods[val].shipping_cost,
          };
          if (shippingMethods[val].is_available === true) {
            deliveryData.push(deliveryInfo);
          }
        });
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
            adddress: `${val.street[0]} ${val.street[1]} ${val.city} ${val.postcode !== undefined ? val.postcode : ""} ${val.country_id}`,
            contact: val.telephone,
            details: val,
          };
          updateAddressData.push(addreDetails);
          if (val.primary === true) {
            setSelectedAddressID(i);
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
    if (className === "payment" && deliveryShippingInfo !== "") {
      setCheckoutClassName(className);
    } else if (deliveryShippingInfo === "") {
      dispatch(
        services.notifyError({
          message: "please select delivery info",
        })
      );
    } else {
      dispatch(
        services.notifyError({ message: "select shipping information" })
      );
    }
    // setIconType({ ...iconType, payment: "inprogress" });
  };

  const continueFromDelivery = (newIconType, className) => {
    let newErrObj = {
      deliveryPreferencesType: "",
      deliveryAddressList: "",
    };

    if (deliveryPreferencesType !== "") {
      newErrObj = { ...newErrObj, deliveryPreferencesType: "" };
    } else {
      newErrObj = {
        ...newErrObj,
        deliveryPreferencesType: "Please Select Delivery Preference",
      };
    }
    if (selectedAddressId !== "") {
      newErrObj = { ...newErrObj, deliveryAddressList: "" };
    } else {
      newErrObj = {
        ...newErrObj,
        deliveryAddressList: "Please Select Delivery Address",
      };
    }
    setErrMsg(newErrObj);

    let customerLoginDetails = getCustomerLoginDetails();
    if (
      deliveryPreferencesType !== "" &&
      selectedAddressId !== "" &&
      customerLoginDetails.email !== ""
    ) {
      let getDeliveryInfo = addressData?.[selectedAddressId];
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
      };
      dispatch(updateShippingInformation(params));
    }

    // setIconType(newIconType);
    // setCheckoutClassName(className);
    window.scrollTo(0, 0);
  };

  const openLoginWrapperFromAnywhere = () => {
    // console.log(document.querySelector(".login__popup__container__disable"));
    // reloadingHeader()

    if (customerDetails === "") {
      const element = document.querySelector(
        ".login__popup__container__disable"
      );
      if (element !== null) {
        element.classList.remove("login__popup__container__disable");
        element.classList.add("login__popup__container");
      }
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
      if (element !== null) {
        element.classList.remove("address__popup__container");
        element.classList.add("address__popup__container__disable");
      }
    }
    setAddressPopup(false);
  };

  const openNewAddressPopup = (popupType, addIndex, addId, add) => {
    setAddressPopup(true);
    setAddressPopupType(popupType);
    if (popupType === "update") {
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
    // console.log(e.target.value);
    setUserPaymentMethod(e.target.value);
    setPaymentMethodForPayfort({
      method: e.target.value,
      email: customerDetails.email,
      referer_url: "https://alpha-api.mestores.com",
    });
  };
  // console.log(paymentMethodForPayfort);

  const validateForm = (event, newErrObj, name, value) => {
    //A function to validate each input values
    switch (name) {
      case "cardNumber":
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: "Card Number is missing" };
        } else {
          let numberValidation = valid.number(value);
          if (
            numberValidation.isPotentiallyValid === true &&
            numberValidation.isValid === true
          ) {
            newErrObj = { ...newErrObj, [name]: "" };
          } else {
            newErrObj = { ...newErrObj, [name]: "invalid" };
          }
        }
        break;
      case "cardHolder":
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: "Card Holder is missing" };
        } else {
          let holderValidation = valid.cardholderName(value);
          if (
            holderValidation.isPotentiallyValid === true &&
            holderValidation.isValid === true
          ) {
            newErrObj = { ...newErrObj, [name]: "" };
          } else {
            newErrObj = { ...newErrObj, [name]: "invalid" };
          }
        }
        break;
      case "monthYear":
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: "Date is missing" };
        } else {
          let monthValidation = valid.expirationDate(value);
          if (
            monthValidation.isPotentiallyValid === true &&
            monthValidation.isValid === true
          ) {
            newErrObj = {
              ...newErrObj,
              [name]: "",
              month: monthValidation.month,
              year: monthValidation.year,
            };
          }
        }
        break;
      // case "year":
      //   if (value === "") {
      //     newErrObj = { ...newErrObj, [name]: "Year is missing" };
      //   } else {
      //     let yearValidation = valid.expirationYear(value);
      //     if (
      //       yearValidation.isPotentiallyValid === true &&
      //       yearValidation.isValid === true
      //     ) {
      //       newErrObj = { ...newErrObj, [name]: "" };
      //     } else {
      //       newErrObj = { ...newErrObj, [name]: "invalid" };
      //     }
      //   }
      //   break;
      case "cvv":
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: "CVV is missing" };
        } else {
          let cvvValidation = valid.cvv(value);
          if (
            cvvValidation.isPotentiallyValid === true &&
            cvvValidation.isValid === true
          ) {
            newErrObj = { ...newErrObj, [name]: "" };
          } else {
            newErrObj = { ...newErrObj, [name]: "invalid" };
          }
        }
        break;
      default:
        break;
    }
    return newErrObj;
  };

  const handleChangeCard = async (event) => {
    let value = event.target.value;
    let name = event.target.name;
    if (name === "cardNumber") {
      value = formatCreditCardNumber(value);
    } else if (name === "monthYear") {
      value = formatExpirationDate(value);
    } else if (name === "cvc") {
      value = formatCVC(value);
    }

    let manageErrMsg = validateForm(event, cardErrMsg, name, value);
    setCardErrMsg(manageErrMsg);
    setCard({ ...card, [name]: value });
  };

  const allFeildValidate = (validateFeild, allErrMsg) => {
    let checkValueStatus = [];
    let checkErrStatus = [];

    validateFeild &&
      validateFeild.map((val, i) => {
        let keyVal = card[val];
        let errVal = cardErrMsg[val];

        allErrMsg = validateForm("", allErrMsg, val, keyVal);
        if (keyVal !== "") {
          checkValueStatus.push("suc");
        }
        if (errVal === "") {
          checkErrStatus.push("err");
        }
      });

    let checkCardStatus = false;
    if (
      checkValueStatus.length === validateFeild.length &&
      checkErrStatus.length === validateFeild.length
    ) {
      checkCardStatus = true;
    }

    let returnData = {
      allErrMsg: allErrMsg,
      checkCardStatus: checkCardStatus,
    };

    return returnData;
  };
  const [sendPayfortInformation, setSendPayfortInformation] = useState({
    card_number: "",
    card_holder_name: "",
    card_security_code: "",
    expiry_date: "",
    merchant_identifier: "",
    access_code: "",
    merchant_reference: "",
    language: "en",
    service_command: "",
    return_url: "https://sonyfrontend.sigmasolve.com/user/orders/",
    signature: "",
  });
  const makePayment = async () => {
    // console.log("card====>", card);
    let validateFeild = ["cardNumber", "cardHolder", "monthYear", "cvv"];

    let formStatus = allFeildValidate(validateFeild, cardErrMsg);
    setCardErrMsg(formStatus.allErrMsg);
    if (paymentMethodForPayfort === "payfort_fort_cc") {
      if (formStatus.checkCardStatus === true) {
        const newPaymentMethodForPayfort = {
          paymentMethod: paymentMethodForPayfort,
        };
        // console.log(newPaymentMethodForPayfort);
        const data = dispatch(
          loadPayfortInformation(newPaymentMethodForPayfort)
        ).then((res) => {
          dispatch(loadCartData());
          setCheckoutClassName("delivery");
          // console.log("payfort Information", res.data);
          // console.log("Entity", res?.data?.entity_id);

          let newSendPayfortInformation = {
            card_number: card.cardNumber,
            card_holder_name: card.cardHolder,
            card_security_code: card.cvv,
            expiry_date: `${card.expiry_date}${card.year}`,
            merchant_identifier: res.data.params.merchant_identifier,
            access_code: res.data.params.access_code,
            merchant_reference: res.data.params.merchant_reference,
            language: "en",
            service_command: res.data.params.service_command,
            return_url: `https://sonyfrontend.sigmasolve.com/user/orders/${res.data.entity_id}`,
            signature: res.data.params.signature,
          };
          // console.log(
          //   "newSendPayfortInformation payfort_fort_cc",
          //   newSendPayfortInformation
          // );
          // debugger
          //  sendPayfortInformation(newSendPayfortInformation);

          // const response =  fetch("https://sbcheckout.payfort.com/FortAPI/paymentPage", {
          // method: 'POST',
          // headers: {
          //   'Accept': 'application/json',
          //   'Content-Type': 'application/json'
          // },
          // body: newSendPayfortInformation,
          // });

          // response.json().then(data=>{
          //   console.log("responseData",data);
          // })
          setCheckoutClassName("delivery");
          navigate(`/user/orders/${res.data.entity_id}`);
        });
      }
    } else {
      const newPaymentMethodForPayfort = {
        paymentMethod: paymentMethodForPayfort,
      };
      // console.log(newPaymentMethodForPayfort);
      const data = dispatch(
        loadPayfortInformation(newPaymentMethodForPayfort)
      ).then((res) => {
        dispatch(loadCartData());
        setCheckoutClassName("delivery");
        // console.log("payfort Information", res.data);
        // console.log("Entity", res?.data?.entity_id);

        let newSendPayfortInformation = {
          card_number: card.cardNumber,
          card_holder_name: card.cardHolder,
          card_security_code: card.cvv,
          expiry_date: `${card.expiry_date}${card.year}`,
          merchant_identifier: res.data.params.merchant_identifier,
          access_code: res.data.params.access_code,
          merchant_reference: res.data.params.merchant_reference,
          language: "en",
          service_command: res.data.params.service_command,
          return_url: `https://sonyfrontend.sigmasolve.com/user/orders/${res.data.entity_id}`,
          signature: res.data.params.signature,
        };
        // console.log("newSendPayfortInformation ", newSendPayfortInformation);
        // debugger
        // sendPayfortInformation(newSendPayfortInformation);
        setCheckoutClassName("delivery");
        // const response =  fetch("https://sbcheckout.payfort.com/FortAPI/paymentPage", {
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: newSendPayfortInformation,
        //   });

        //   response.json().then(data=>{
        //     console.log("responseData",data);
        //   })
        navigate(`/user/orders/${res.data.entity_id}/confirm`);
      });
    }

    //  history.push("/user/order")
  };
  if (loading) {
    return <h1>Product Loading...</h1>;
  }
  return (
    <>
      <div className="d-lg-block d-none">
        <BreadCrumbs title="Checkout" />
      </div>
      <div className="d-block d-lg-none">
        <Mobile_Checkout_Page />
      </div>
      <div className="container-fluid checkout__page__container d-lg-block d-none">
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
                        addressData
                          .filter((val, i) =>
                            viewMoreAddressBtn === false
                              ? i < 3
                              : addressData.length
                          )
                          .map((add, addIndex) => {
                            return (
                              <div
                                key={add.id}
                                className="col-12 col-sm-4 address__block"
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
                                      SELECT THIS ADDRESS FOR DELIVERY
                                    </button>
                                    <div className="inner__address__button__block">
                                      <button
                                        onClick={() =>
                                          openNewAddressPopup(
                                            "update",
                                            addIndex,
                                            add.id,
                                            add
                                          )
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
                      {errMsg.deliveryAddressList && (
                        <p className="invalid__message" style={errMsgStyle}>
                          {errMsg.deliveryAddressList}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                {customerDetails !== "" && (
                  <>
                    {/* <hr className="checkout__page__horizontal__line"></hr> */}
                    {addressData && addressData.length > 3 && (
                      <div className=" add__new__address__block">
                        <button
                          onClick={() =>
                            setViewMoreAddressBtn(!viewMoreAddressBtn)
                          }
                          className="view__more__address__button"
                        >
                          <Heading5
                            text={
                              viewMoreAddressBtn
                                ? "View Less"
                                : "View More Address"
                            }
                            marginBottom={0}
                            color="#FF4F04"
                          />
                        </button>
                      </div>
                    )}
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
                          {deliveryType &&
                            deliveryType.map((delivery, deliveryIndex) => {
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
                                      onChange={(e) =>
                                        handleChangeDeliveryPref(e)
                                      }
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
                                          currency={"SAR"}
                                        />
                                      )}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          {errMsg.deliveryPreferencesType && (
                            <p className="invalid__message" style={errMsgStyle}>
                              {errMsg.deliveryPreferencesType}
                            </p>
                          )}
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
                          onClick={
                            () => continueFromDelivery()
                            // { ...iconType, delivery: "done", payment: "inprogress" },
                            // "payment"
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
                        <>
                          {payment.code === "payfort_fort_cc" ? (
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
                                  onClick={handleChangePaymentMethod}
                                />
                                <p className="payment__selection__text">
                                  <Heading4 text={payment.title} />
                                </p>
                              </div>
                              {userPaymentMethod === payment.code ? (
                                <div className="payment__detail__form__block">
                                  {userPaymentMethod === "payfort_fort_cc" ? (
                                    <div className="address__content__block">
                                      <div className="payment__card__block">
                                        <div className="row payment__form__field__row">
                                          <div className="col-sm-12 col-md-3 main__form__field__block">
                                            {/* <p className="form__label">First Name</p> */}
                                            <Heading7
                                              text="Credit Card Number"
                                              marginBottom={10}
                                            />
                                            <div className="field__block">
                                              <input
                                                type="text"
                                                placeholder="xxxx-xxxx-xxxx-xxxx"
                                                className="form__field"
                                                id="name"
                                                name="cardNumber"
                                                value={card.cardNumber}
                                                onChange={(e) =>
                                                  handleChangeCard(e)
                                                }
                                              />
                                            </div>
                                            {cardErrMsg.cardNumber && (
                                              <p className="invalid__message">
                                                {cardErrMsg.cardNumber}
                                              </p>
                                            )}
                                          </div>
                                          <div className="col-sm-12 col-md-3 main__form__field__block">
                                            {/* <p className="form__label">Mobile Number</p> */}
                                            <Heading7
                                              text="Card Holder Name"
                                              marginBottom={10}
                                            />
                                            <div className="field__block">
                                              <input
                                                type="text"
                                                placeholder="Card  Holder Name"
                                                className="form__field card__holder__field"
                                                id="cardHolder"
                                                name="cardHolder"
                                                value={card.cardHolder}
                                                onChange={(e) =>
                                                  handleChangeCard(e)
                                                }
                                              />
                                            </div>
                                            {cardErrMsg.cardHolder && (
                                              <p className="invalid__message">
                                                {cardErrMsg.cardHolder}
                                              </p>
                                            )}
                                          </div>

                                          <div className="col-sm-12 col-md-3 main__form__field__block ">
                                            {/* <p className="form__label">First Name</p> */}
                                            <Heading7
                                              text="Month/Year"
                                              marginBottom={10}
                                            />
                                            <div className="field__block">
                                              <input
                                                type="text"
                                                placeholder="MM/YY"
                                                className="form__field"
                                                id="monthYear"
                                                name="monthYear"
                                                value={card.monthYear}
                                                onChange={(e) =>
                                                  handleChangeCard(e)
                                                }
                                              />
                                            </div>
                                            {cardErrMsg.monthYear && (
                                              <p className="invalid__message">
                                                {cardErrMsg.monthYear}
                                              </p>
                                            )}
                                          </div>
                                          {/* <div className="col-sm-12 col-md-4 ">
                                              <Heading7
                                                text="Year"
                                                marginBottom={10}
                                              />
                                              <div className="field__block">
                                                <input
                                                  type="text"
                                                  placeholder="YY"
                                                  className="form__field"
                                                  id="year"
                                                  name="year"
                                                  value={card.year}
                                                  onChange={(e) =>
                                                    handleChangeCard(e)
                                                  }
                                                />
                                              </div>
                                              {cardErrMsg.year && (
                                                <p className="invalid__message">
                                                  {cardErrMsg.year}
                                                </p>
                                              )}
                                            </div> */}

                                          <div className="col-sm-12 col-md-3 main__form__field__block">
                                            {/* <p className="form__label">First Name</p> */}
                                            <Heading7
                                              text="CVV"
                                              marginBottom={10}
                                            />
                                            <div className="field__block">
                                              <input
                                                type="text"
                                                placeholder="CVV"
                                                className="form__field"
                                                id="cvv"
                                                name="cvv"
                                                value={card.cvv}
                                                onChange={(e) =>
                                                  handleChangeCard(e)
                                                }
                                              />
                                            </div>
                                            {cardErrMsg.cvv && (
                                              <p className="invalid__message">
                                                {cardErrMsg.cvv}
                                              </p>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row payment__form__field__row"></div>
                                      </div>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  <div className="continue__button__block">
                    <div></div>
                    <Link className="continue___button__link" to="/checkout">
                      <button
                        onClick={() => makePayment()}
                        className="continue___button"
                      >
                        Continue
                      </button>
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
                  {/* {cartTotalData?.total_segments
                    // .slice(1, 5)
                    .map((segment, segmentIndex) => {
                      return (
                        <div
                          key={segment.code}
                          className="checkout__os__detail__inner__block"
                        >
                          {segment.code === "grand_total" ? (
                            <Heading6 text={segment.title} color="#000000" />
                          ) : (
                            <Text3 text={segment.title} color="#000000" />
                          )}
                          <Price
                            price={segment.value === null ? 0 : segment.value}
                            size="heading7"
                            currency={cartTotalData.base_currency_code}
                          />
                        </div>
                      );
                    })} */}

                  <div className="checkout__os__detail__inner__block">
                    <Text3 text="Sub Total" color="#000000" />
                    <Price
                      price={
                        cartTotalData && cartTotalData.items_qty !== 0
                          ? cartTotalData?.base_subtotal
                          : 0
                      }
                      size="heading7"
                      currency={
                        cartTotalData && cartTotalData.base_currency_code
                      }
                    />
                  </div>
                  <div className="checkout__os__detail__inner__block">
                    <Text3 text="Shipping & Handling" color="#000000" />
                    <Price
                      price={
                        cartTotalData && cartTotalData.items_qty !== 0
                          ? cartTotalData?.base_shipping_amount
                          : 0
                      }
                      size="heading7"
                      currency={
                        cartTotalData && cartTotalData?.base_currency_code
                      }
                    />
                  </div>
                  <div className="checkout__os__detail__inner__block">
                    <Text3 text="Discount" color="#000000" />
                    <Price
                      price={
                        cartTotalData && cartTotalData.items_qty !== 0
                          ? cartTotalData?.discount_amount
                          : 0
                      }
                      size="heading7"
                      currency={
                        cartTotalData && cartTotalData?.base_currency_code
                      }
                    />
                  </div>
                  <div className="checkout__os__detail__inner__block">
                    <Heading6 text="Grand Total" color="#000000" />
                    <Price
                      price={
                        cartTotalData === undefined
                          ? 0
                          : cartTotalData?.grand_total
                      }
                      size="heading7"
                      currency={
                        cartTotalData && cartTotalData?.base_currency_code
                      }
                    />
                  </div>
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
        {addressPopup === true && (
          <AddressPopup
            closeLoginPopup={closeLoginPopup}
            editAddressData={editAddressData}
            popupType={addressPopupType}
          />
        )}
      </div>
    </>
  );
}

export default Checkout_Page;
