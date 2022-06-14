import React from "react";
import Banner from "../Components/Banner";
import BreadCrumbs from "../Components/BreadCrumbs";
import TopNavbar from "../Components/TopNavbar";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import "./../SCSS/_dashboardPage.scss";
import dashboard_icon_01 from "./../Assets/Icon/dashboard_icon_01.svg";
import Heading6 from "../Components/Font/Heading6";
const dashboardData = [
  {
    id: 0,
    name: "My Orders",
    icon: dashboard_icon_01,
  },
  {
    id: 1,
    name: "MY PROFILE",
    icon: dashboard_icon_01,
  },
  {
    id: 2,
    name: "MY PAYMENTS",
    icon: dashboard_icon_01,
  },
  {
    id: 3,
    name: "MY WISHLISTS",
    icon: dashboard_icon_01,
  },
  {
    id: 4,
    name: "MY WALLET",
    icon: dashboard_icon_01,
  },
  {
    id: 5,
    name: "MY TICKETS",
    icon: dashboard_icon_01,
  },
  {
    id: 6,
    name: "MY RETURNS",
    icon: dashboard_icon_01,
  },
  {
    id: 7,
    name: "GIFT CARD",
    icon: dashboard_icon_01,
  },
  {
    id: 8,
    name: "MY SUBSCRIPTIONS",
    icon: dashboard_icon_01,
  },
  {
    id: 9,
    name: "MY REWARD POINTS",
    icon: dashboard_icon_01,
  },
  {
    id: 10,
    name: "EXTENDED WARRANTIES",
    icon: dashboard_icon_01,
  },
  {
    id: 11,
    name: "FREE INSTALLATIONS",
    icon: dashboard_icon_01,
  },
];
function Dashboard() {
  return (
    <>
      {/* <TopNavbar /> */}
      <BreadCrumbs />
      <div className="container-fluid dashboard__page__container">
        <div className="dashboard__page__block">
          <div className="row  dashboard__page__inner__block">
            {dashboardData.map((dash, dashIndex) => {
              return (
                <div className="col-4 col-sm-4 col-md-4 col-lg-3  dash__block">
                  <div className="dash__inner__block">
                    <img src={dash.icon} alt="" className="dash__icon" />
                    <Heading6 text={dash.name} textAlign="center" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <NewsLetter/> */}
      {/* <Footer/> */}
    </>
  );
}

export default Dashboard;
