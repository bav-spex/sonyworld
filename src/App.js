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
import { getIdentifier, getAllCategory, apiHomePageData } from "./services/homepage";
import Heading1 from "./Components/Font/Heading1";
import { loadHomePageData } from "./redux/appAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App({ stars }) {
  const location = useLocation();
  const history = useNavigate();
  const dispatch = useDispatch()
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
  const getAppStarted =  async() => {
    await getHandshake();
    dispatch(loadHomePageData())
    // console.log(data);
    const data = await getAllCategory().then((res) => res);
    setCategoryData(data);
    setLoading(false);
  };
   const data = useSelector((state) => state.appData.homepageData);
   console.log(data);
   useEffect(() => {
    // debugger
    console.log("bhavik");
    if (Object.keys(data).length !== 0) {
      setHomepageData(data);
      setLoading(false);
    }
  }, [data]);
  console.log(homepageData,"app");
  // console.log(categoryData);
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
