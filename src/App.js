import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
// import {} from 'react-redux'
import { Helmet } from "react-helmet-async";
import Header from "./Components/Common/Header";
import AllRoutes from "./routes";
import Footer from "./Components/Common/Footer";
import NewsLetter from "./Components/Common/NewsLetter";
// import { getHandshake } from "./services/auth";
import { getHandshakeData } from "./redux/actions/authAction";
// import { getIdentifier } from "./services/homepage";

function App(props) {
  // const count = useSelector()
  const dispatch = useDispatch();

  const location = useLocation();
  const history = useNavigate();
  localStorage.setItem("loginMode", JSON.stringify(""));
  localStorage.setItem("loginWrapper", JSON.stringify(false));
  localStorage.setItem("loginPopup", JSON.stringify(false));
  const getCurrentPageUrl = window.location.href;
  const [reloadHeader, setReloadHeader] = useState(true);
  const reloadingHandle = () => {
    setReloadHeader(!reloadHeader);
  };

  useEffect(() => {
    dispatch(getHandshakeData());
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href={getCurrentPageUrl} />
      </Helmet>
      <div className="main_header">
        <Header reloadingHandle={reloadingHandle} reloadHeader={reloadHeader} />
      </div>
      <div className="main_wrapper">
        <AllRoutes
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
