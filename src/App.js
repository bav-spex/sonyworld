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
import { loadAllCategoryData, loadHomePageData } from "./redux/appAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setHeader } from "./services/config";

function App({ stars }) {
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
  const reloadingHandle = () => {
    setReloadHeader(!reloadHeader);
  };
  const [token, setToken] = useState();
  // useEffect(() => {
  //   // debugger
  //   const localStorageHandshakeToken = localStorage.getItem("handShakeToken");
  //   console.log(localStorageHandshakeToken);
  //   if (localStorageHandshakeToken === null || undefined) {
  //     getHandshake().then((res) => setToken(res.data.token));
  //   } else {
  //     setToken(localStorageHandshakeToken);
  //   }
  // }, []);
  useEffect(() => {
    // debugger
    
      getHandshake().then((res) => setToken(res.data.token));
  
    
  }, []);
  useEffect(() => {
    if (token) {
      setHeader("X-Access-Token", token);
      localStorage.setItem("handShakeToken", token);
      categoryDispatch(loadAllCategoryData());
      
    }
    console.log(token);
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
  }, [ allCategoryData]);
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
          reloadingHandle={reloadingHandle}
          categoryData={categoryData}
          reloadHeader={reloadHeader}
        />
      </div>
      <div className="main_wrapper">
        <AllRoutes
          homepageData={homepageData}
          categoryData={categoryData}
          reloadingHandle={reloadingHandle}
          reloadHeader={reloadHeader}
        />
      </div>
      <NewsLetter />

      <Footer />
    </>
  );
}

export default App;

