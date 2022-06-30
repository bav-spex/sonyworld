import React from "react";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import BreadCrumbs from "../Components/BreadCrumbs";
import "./../SCSS/_dashboardPage.scss";
import my_orders from "./../assets/Icon/my_orders.svg";
import my_profile from "./../assets/Icon/my_profile.svg";
import my_payments from "./../assets/Icon/my_payments.svg";
import my_wishlist from "./../assets/Icon/my_wishlist.svg";
import my_wallet from "./../assets/Icon/my_wallet.svg";
import my_tickets from "./../assets/Icon/my_tickets.svg";
import my_returns from "./../assets/Icon/my_returns.svg";
import gift_card from "./../assets/Icon/gift_card.svg";
import my_subscriptions from "./../assets/Icon/my_subscriptions.svg";
import my_reward_points from "./../assets/Icon/my_reward_points.svg";
import extended_warrenty from "./../assets/Icon/extended_warrenty.svg";
import free_installations from "./../assets/Icon/free_installations.svg";
import Heading6 from "../Components/Font/Heading6";
const dashboardData = [
  {
    id: 0,
    name: "My Orders",
    icon: my_orders,
    link: "/user/orders",
  },
  {
    id: 1,
    name: "MY PROFILE",
    icon: my_profile,
    link: "/user/profile",
  },
  {
    id: 2,
    name: "MY PAYMENTS",
    icon: my_payments,
    link: "",
  },
  {
    id: 3,
    name: "MY WISHLISTS",
    icon: my_wishlist,
    link: "/user/wishlist",
  },
  {
    id: 4,
    name: "MY WALLET",
    icon: my_wallet,
    link: "",
  },
  {
    id: 5,
    name: "MY TICKETS",
    icon: my_tickets,
    link: "",
  },
  {
    id: 6,
    name: "MY RETURNS",
    icon: my_returns,
    link: "",
  },
  {
    id: 7,
    name: "GIFT CARD",
    icon: gift_card,
    link: "",
  },
  {
    id: 8,
    name: "MY SUBSCRIPTIONS",
    icon: my_subscriptions,
    link: "",
  },
  {
    id: 9,
    name: "MY REWARD POINTS",
    icon: my_reward_points,
    link: "",
  },
  {
    id: 10,
    name: "EXTENDED WARRANTIES",
    icon: extended_warrenty,
    link: "",
  },
  {
    id: 11,
    name: "FREE INSTALLATIONS",
    icon: free_installations,
    link: "",
  },
];
function Dashboard() {
  return (
    <>
      <BreadCrumbs title="My Account" />
      <div className="container-fluid dashboard__page__container">
        <div className="dashboard__page__block">
          <div className="row  dashboard__page__inner__block">
            {dashboardData.map((dash, dashIndex) => {
              return (
                <div className="col-4 col-sm-4 col-md-4 col-lg-3  dash__block">
                  <div className="dash__inner__block">
                    <Link to={dash.link}>
                      <img src={dash.icon} alt="" className="dash__icon" />
                    </Link>
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
