import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Banner from "../../Components/Banner";
import "./../../SCSS/_home.scss";

import live_chat_button from "./../../assets/Footer/live_chat_button.svg";
import ProductContainer from "../../Components/ProductContainer";
import DealsOfTheWeek from "../../Components/DealsOfTheWeek";
import TopRatedProducts from "../../Components/TopRatedProducts";
import FeatureProducts from "../../Components/FeatureProducts";
import HomePageCategoryBlock from "../../Components/HomePageCategoryBlock";
import RecentlyViewedProducts from "../../Components/RecentlyViewedProducts";
import LiveChatPopup from "../../Components/Popup/LiveChatPopup";
import { loadHomePageData } from "../../redux/appAction";

function Mobile_Home_Page({homepageData}) {

    const [loading, setLoading] = useState(true);
  const [liveChatPopup, setLiveChatPopup] = useState(false);
  const [bannerData, setBannerData] = useState();
  const [featureProductsData, setFeatureProductsData] = useState();
  const [recentlyViewedProductsData, setRecentlyViewedProductsData] =
    useState();
  const [recentlyViewedProductsBanner, setRecentlyViewedProductsBanner] =
    useState();
  const [newArrivalData, setNewArrivalData] = useState();
  const [topTrendingData, setTopTrendingData] = useState();
  const [topRatedData, setTopRatedData] = useState();
  const [dealsOfTheWeekData, setDealsOfTheWeekData] = useState();
  const [homePageBottomSingleBanner, setHomePageBottomSingleBanner] =
    useState();
  const dispatch = useDispatch();
      
  useEffect(() => {
    if (homepageData) {
      setBannerData(() => {
        return homepageData.content.find((data) => {
          return (
            data.type === "multiple_banner" &&
            data.title === "Main Banner Sliders"
          );
        }).items;
      });
      setFeatureProductsData(() => {
        return homepageData.content.find((data) => {
          return data.type === "slider" && data.title === "Televisions";
        }).products;
      });
      setRecentlyViewedProductsData(() => {
        return homepageData.content.find((data) => {
          return (
            data.type === "slider" && data.title === "Recently Viewed Products"
          );
        }).products;
      });
      setRecentlyViewedProductsBanner(() => {
        return homepageData.content.find((data) => {
          return (
            data.type === "single_banner" &&
            data.title === "Recently Viewed Products Single Banner"
          );
        }).items;
      });

      setNewArrivalData(() => {
        return homepageData.content.find((data) => {
          return data.type === "slider" && data.title === "New Arrivals";
        }).products;
      });
      setTopTrendingData(() => {
        return homepageData.content.find((data) => {
          return data.type === "slider" && data.title === "Top Trending";
        }).products;
      });
      setDealsOfTheWeekData(() => {
        return homepageData.content.find((data) => {
          return (
            data.type === "multiple_banner" &&
            data.title === "Deals of the Week"
          );
        }).items;
      });
      setTopRatedData(() => {
        return homepageData.content.find((data) => {
          return data.type === "slider" && data.title === "Top Rated Products";
        }).products;
      });
      setHomePageBottomSingleBanner(() => {
        return homepageData.content.find((data) => {
          return data.type === "single_banner" && data.title === "";
        }).items;
      });
      setLoading(false);
    }
  }, [homepageData]);
  const closeLiveChatPopup = () => {
    setLiveChatPopup(false);
  };
    
      
    //   if (loading) {
    //     return <h1>Home Loading...</h1>;
    //   }
    return (
      <>
        <div>

        
          <HomePageCategoryBlock />
          <Banner bannerData={bannerData} />
          <RecentlyViewedProducts
            recentlyViewedProductsData={recentlyViewedProductsData}
            recentlyViewedProductsBanner={recentlyViewedProductsBanner}
          />
            <FeatureProducts featureProductsData={featureProductsData} />
        
            <div className="container-fluid adImage__container">
          <div className=" adImage">
            <Link to="/products">
              <div className="adImage__block">
                <img
                  src={homePageBottomSingleBanner[0].imageUrl}
                  alt=""
                  className="adImage__image"
                />
              </div>
            </Link>
          </div>
        </div>
        <div
          onClick={() => setLiveChatPopup(true)}
          className=" sony__expert__block"
        >
          <button
            type="button"
            className="expert__button"
            // onClick={handleSubmit}
          >
            <img src={live_chat_button} alt="" />
          </button>
        </div>

        <div
        className={
          liveChatPopup
            ? "container-fluid live__chat__popup__container"
            : "container-fluid live__chat__popup__container__disable"
        }
      >
        <LiveChatPopup closeLiveChatPopup={closeLiveChatPopup} />
      </div>
      </div>
      </>
    );
  }
  
  export default Mobile_Home_Page;