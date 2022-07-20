import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";

import "./App.css";

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
  useEffect(() => {
    getAppStarted();
  }, []);

  const getInitialData = async () => {
    await getHandshake();
  };
  const getAppStarted = async () => {
    await getHandshake();
    await homeDispatch(loadHomePageData());
    await categoryDispatch(loadAllCategoryData());
    setLoading(false);
  };
  const data = useSelector((state) => state.appData.homepageData);
  const allCategoryData = useSelector((state) => state.appData.categoryData);
  // console.log(data);
  // console.log(allCategoryData);
  useEffect(() => {
    if (
      Object.keys(data).length !== 0 &&
      Object.keys(allCategoryData).length !== 0
    ) {
      setHomepageData(data);
      setCategoryData(allCategoryData);
      setLoading(false);
    }
  }, [data, allCategoryData]);
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
