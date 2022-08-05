import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";

import "./App.css";
// import {} from 'react-redux'
import { Helmet } from "react-helmet-async";
import Header from "./Components/Common/Header";
import AllRoutes from "./routes";
import Footer from "./Components/Common/Footer";
import NewsLetter from "./Components/Common/NewsLetter";
import { getHandshake } from "./services/auth";

import Heading1 from "./Components/Font/Heading1";
import { loadAllCategoryData, loadCartData, loadHomePageData, loadWishlistData } from "./redux/appAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setHeader } from "./services/config";
import { customerDetailsSuccess } from "./services/customer/customer";
import { getCustomerLoginDetails } from "./Components/helpers/utils/getCustomerLoginDetails";
import CartPopup from "./Components/Popup/CartPopup";

function App({ stars }) {
  const customerData = getCustomerLoginDetails();
  const dispatch = useDispatch();

  const { customerDetails } = useSelector((state) => state.customerReducer);

  useEffect(() => {
    if (customerData !== "" && customerDetails === "") {
      dispatch(customerDetailsSuccess(customerData));
    }
  }, [customerData]);

  const location = useLocation();
  const history = useNavigate();
  const homeDispatch = useDispatch();
  const categoryDispatch = useDispatch();
  localStorage.setItem("loginMode", JSON.stringify(""));
  localStorage.setItem("loginWrapper", JSON.stringify(false));
  localStorage.setItem("loginPopup", JSON.stringify(false));
  const [homepageData, setHomepageData] = useState();
  const [categoryData, setCategoryData] = useState();
  const [loading, setLoading] = useState(true);
  const getCurrentPageUrl = window.location.href;
  const [reloadHeader, setReloadHeader] = useState(true);
  const [cartIconTotal, setCartIconTotal] = useState(0);
  const handleChangeCartIconTotal = (total) => {
    setCartIconTotal(total);
  };
  const reloadingHandle = () => {
    setReloadHeader(!reloadHeader);
  };
  const [token, setToken] = useState();
  useEffect(() => {
    // debugger
    const localStorageHandshakeToken = localStorage.getItem("handShakeToken");
    if (localStorageHandshakeToken === null || undefined) {
      getHandshake().then((res) => setToken(res.data.token));
    } else {
      setToken(localStorageHandshakeToken);
      // setHeader("X-Access-Token", localStorageHandshakeToken);
     
    }
  }, []);
  // useEffect(() => {
  //   // debugger
  //     getHandshake().then((res) => setToken(res.data.token));
  // }, []);

  useEffect(() => {
    if (token) {
      setHeader("X-Access-Token", token);
      localStorage.setItem("handShakeToken", token);
      const data = categoryDispatch(loadAllCategoryData());
      data
        .then((res) => dispatch(loadWishlistData()))
        .catch((err) => {
          console.log(err);
          if (err.message === "Request failed with status code 401") {
            console.log("catch");
            setHeader("X-Access-Token", "");
            getHandshake().then((res) => {
              console.log(res.data.token);
              setToken(res.data.token);
              dispatch(loadWishlistData())
            });
          }
        });
    }
  }, [token]);

  // const getAppStarted = async () => {
  //   await getHandshake();
  //   await homeDispatch(loadHomePageData());
  //   await categoryDispatch(loadAllCategoryData());
  //   setLoading(false);
  // };
  // const data = useSelector((state) => state.appData.homepageData);
  const allCategoryData = useSelector((state) => state.appData.categoryData);
  // console.log(allCategoryData);
  useEffect(() => {
    if (Object.keys(allCategoryData).length !== 0) {
      // setHomepageData(data);
      setCategoryData(allCategoryData);
      setLoading(false);
    }
  }, [allCategoryData]);
  useEffect(()=>{
    // wishlistDispatch(loadWishlistData())
  })
  const [cartPopup, setCartPopup] = useState(false);
  const closeCartPopup = () => {
    setCartPopup(false);
  };
  const handleChangeCartPopup = (value) => {
    setCartPopup(value);
    // setPopupProduct(product);
  };
  if (loading) {
    return <h1>App Loading...</h1>;
  }
  return (
    <>
      <Helmet>
        <link rel="canonical" href={getCurrentPageUrl} />
      </Helmet>
      <div className="main_header">
        <Header
          cartIconTotal={cartIconTotal}
          handleChangeCartPopup={handleChangeCartPopup}
          reloadingHandle={reloadingHandle}
          categoryData={categoryData}
          reloadHeader={reloadHeader}
        />
      </div>
      <div className="main_wrapper">
        <AllRoutes
          handleChangeCartPopup={handleChangeCartPopup}
          homepageData={homepageData}
          categoryData={categoryData}
          reloadingHandle={reloadingHandle}
          reloadHeader={reloadHeader}
        />
      </div>
      <NewsLetter />

      <Footer />
      <div
        className={
          cartPopup
            ? "container-fluid cart__popup__container"
            : "container-fluid cart__popup__container__disable"
        }
      >
        <CartPopup
          handleChangeCartIconTotal={handleChangeCartIconTotal}
          // cartData={cartData}
          closeCartPopup={closeCartPopup}
          handleChangeCartPopup={handleChangeCartPopup}
        />
      </div>
    </>
  );
}

export default App;
