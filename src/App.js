import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";

import "./App.css";

import { Helmet } from "react-helmet-async";
import TopNavbar from "./Components/Common/TopNavbar";
import AllRoutes from "./routes";
import Footer from "./Components/Common/Footer";

function App() {
  const location = useLocation();
  const history = useNavigate();

  const getCurrentPageUrl = window.location.href;
  return (
    <>
      <Helmet>
        <link rel="canonical" href={getCurrentPageUrl} />
      </Helmet>
      <div className="main_header">
        <TopNavbar />
      </div>
      
      <div className="main_wrapper">
        <AllRoutes/>
      
      
      </div>
      <Footer/>
    
    </>
  );
}

export default App;
