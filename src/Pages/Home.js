import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import "./../SCSS/_home.scss";

import deals_01 from "./../assets/Deals/deals_01.png";
import deals_02 from "./../assets/Deals/deals_02.png";

import banner_01 from "./../assets/Banner/banner_01.png";

import threeProducts_01 from "./../assets/ThreeProducts/threeProducts_01.png";
import threeProducts_02 from "./../assets/ThreeProducts/threeProducts_02.png";
import threeProducts_03 from "./../assets/ThreeProducts/threeProducts_03.png";

import blog_01 from "./../assets/Blog/blog_01.png";
import blog_02 from "./../assets/Blog/blog_02.png";
import blog_03 from "./../assets/Blog/blog_03.png";

import rv_product_01 from "./../assets/FeatureProduct/feature_product_01.png";
import rv_product_02 from "./../assets/FeatureProduct/feature_product_02.png";
import rv_product_03 from "./../assets/FeatureProduct/feature_product_03.png";
import rv_product_04 from "./../assets/FeatureProduct/feature_product_04.png";
import rv_product_05 from "./../assets/FeatureProduct/feature_product_05.png";
import rv_product_06 from "./../assets/FeatureProduct/feature_product_01.png";

import shipping from "./../assets/Services/shipping.svg";
import secure_payments from "./../assets/Services/secure_payments.svg";
import exclusive_offers from "./../assets/Services/exclusive_offers.svg";
import installation from "./../assets/Services/installation.svg";

import live_chat_button from "./../assets/Footer/live_chat_button.svg";

import ProductContainer from "../Components/ProductContainer";
import DealsOfTheWeek from "../Components/DealsOfTheWeek";
import TopRatedProducts from "../Components/TopRatedProducts";
import FeatureProducts from "../Components/FeatureProducts";
import HomePageCategoryBlock from "../Components/HomePageCategoryBlock";
import RecentlyViewedProducts from "../Components/RecentlyViewedProducts";
import LiveChatPopup from "../Components/Popup/LiveChatPopup";
import { loadHomePageData } from "../redux/appAction";

import MobileHomePage from "./MobilePages/Mobile_Home_Page";

function Home({  }) {
  // const [homepageData, setHomepageData] = useState();
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
  useEffect(()=>{
    dispatch(loadHomePageData())
    //  const data = await getAllCategory().then((res) => res);
    // setCategoryData(data);
  },[])
  const {homepageData} = useSelector((state) => state.appData);
  // console.log(homepageData);
  // useEffect(()=>{
  //   if(homePageData){

  //     setHomepageData(homePageData)
  //     setLoading(false)
  //   }
  // },[homePageData])
  useEffect(() => {
    if (Object.values(homepageData).length !== 0) {
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
      window.scrollTo(0,0)
    }
  }, [homepageData]);
  const closeLiveChatPopup = () => {
    setLiveChatPopup(false);
  };

  // const contentData = JSON.parse(JSON.stringify(data)).content;

  if (loading) {
    return <h1>Home Loading...</h1>;
  }
  return (
    <>
      <div className="mobile__home__page d-block d-lg-none">
        <MobileHomePage
          homePageBottomSingleBanner={homePageBottomSingleBanner}
          dealsOfTheWeekData={dealsOfTheWeekData}
          topRatedData={topRatedData}
          topTrendingData={topTrendingData}
          bannerData={bannerData}
          featureProductsData={featureProductsData}
          recentlyViewedProductsData={recentlyViewedProductsData}
          recentlyViewedProductsBanner={recentlyViewedProductsBanner}
          newArrivalData={newArrivalData}
        />
      </div>
      <div className="homePage d-none d-lg-block">
        <Banner bannerData={bannerData} />

        <div className="d-none d-lg-block">
          <HomePageCategoryBlock />
        </div>

        <FeatureProducts featureProductsData={featureProductsData} />

        <RecentlyViewedProducts
          recentlyViewedProductsData={recentlyViewedProductsData}
          recentlyViewedProductsBanner={recentlyViewedProductsBanner}
        />

        <ProductContainer
          sectionTitle="New Arrivals"
          carouselData={newArrivalData}
          containerClassName="new__arrival__pc__block"
        />
        <ProductContainer
          sectionTitle="Top Trending"
          carouselData={topTrendingData}
          containerClassName="top__trending__pc__block"
        />
        <DealsOfTheWeek dealsOfTheWeekData={dealsOfTheWeekData} />
        <ProductContainer
          sectionTitle="Top Rated Products"
          carouselData={topRatedData}
          containerClassName="top__rated__pc__block"
        />
        {/* <TopRatedProducts productData={topRatedProductsData} /> */}
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
    </>
  );
}

//injecting redux data to props
const mapStateToProps = (state) => {
  return {
    token: state?.auth?.token,
    userData: state?.auth?.userData,
    userLoggedIn: state?.auth?.userData?.userLoggedIn,
  };
};

export default connect(mapStateToProps, {})(Home);
