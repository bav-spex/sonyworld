import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Banner from "../../Components/Banner";
import "./../../SCSS/_home.scss";
import "./../../SCSS/MobilePages/_mobileHome.scss";
import live_chat_button from "./../../assets/Footer/live_chat_button.svg";
import ProductContainer from "../../Components/ProductContainer";
import DealsOfTheWeek from "../../Components/DealsOfTheWeek";
import TopRatedProducts from "../../Components/TopRatedProducts";
import HomePageCategoryBlock from "../../Components/HomePageCategoryBlock";
import RecentlyViewedProducts from "../../Components/RecentlyViewedProducts";
import categoryImg from "./../../assets/MobilePages/MobileHome/categoryhome.png";
import HOMEcategoryImg from "./../../assets/MobilePages/MobileHome/homecategory.png";
import feature_product_03 from "./../../assets/FeatureProduct/feature_product_03.png";
import feature_product_04 from "./../../assets/FeatureProduct/feature_product_04.png";
import banner2 from "./../../assets/Banner/banner_01.png";
import Heading7 from "./../../Components/Font/Heading7";
import Heading5 from "./../../Components/Font/Heading5";
import RatingBlock from "./../../Components/MostSharedComponent/RatingBlock";
import PriceBlock from "./../../Components/MostSharedComponent/PriceBlock";
import OldPrice from "./../../Components/Font/OldPrice";
import Price from "./../../Components/Font/Price";

import empty_favourite from "./../../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../../assets/Icon/fulfill_favourite.svg";
import shopping_cart from "./../../assets/Icon/shopping-cart-red.svg";
import MobileDealsOfTheDay from "../../Components/MobileView/MobileMainFeatureProductsBlock";
import MobileHomeTelevisionBlock from "../../Components/MobileView/MobileHomeCategoryBannerProductsBlock";
import MobileHomeCategoryBannerProductsBlock from "../../Components/MobileView/MobileHomeCategoryBannerProductsBlock";
import MobileMainFeatureProductsBlock from "../../Components/MobileView/MobileMainFeatureProductsBlock";

function Mobile_Home_Page({
  bannerData,
  featureProductsData,
  recentlyViewedProductsData,
  recentlyViewedProductsBanner,
  newArrivalData,
  topTrendingData,
  topRatedData,
  dealsOfTheWeekData,
  homePageBottomSingleBanner,
}) {
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
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

        
        <MobileMainFeatureProductsBlock sectionTitle="Deals of The Day" featureProductsData={featureProductsData} />


        <MobileHomeCategoryBannerProductsBlock featureProductsData={featureProductsData} />
             {/* category end           */}


        <MobileMainFeatureProductsBlock sectionTitle="Top Rated Products" featureProductsData={featureProductsData} />
        {/* top rated end */}


        <div className="container-fluid adImage__container p-0  ">
          <div className=" adImage">
            <Link to="/products">
              <div className="adImage__block">
                <img
                  src={homePageBottomSingleBanner[0].imageUrl}
                  alt=""
                  width="100%"
                  height="100%"
                  className="adImage__image"
                />
              </div>
            </Link>
          </div>
        </div>
        {/* advertise */}



        <MobileHomeCategoryBannerProductsBlock featureProductsData={featureProductsData} />
        {/* category end           */}


        <MobileMainFeatureProductsBlock sectionTitle="Sale Upto 35% Off" featureProductsData={featureProductsData} />
        {/* top rated end */}


        <div className="container-fluid adImage__container p-0  ">
          <div className=" adImage">
            <Link to="/products">
              <div className="adImage__block">
                <img
                  src={banner2}
                  alt=""
                  width="100%"
                  height="100%"
                  className="adImage__image"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* advertise */}
        <div className="mobile__home__feature__categories__container">
          <div className="container-fluid">
            <p className="section__title d-block d-lg-none py-3">
              Featured Categories
            </p>
            <div className="row">
              <div className="col-6 mb-3">
                <div className="mobile__home__feature__categories__card">
                  <span className="mb-3 d-block">
                    <img src={banner2} alt="" />
                  </span>
                  <Heading5 marginBottom={10} text="Video Cameras" />
                  <p>
                    Find Out Why This Is the Go-To Lens for So Many
                    Photographers
                  </p>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="mobile__home__feature__categories__card">
                  <span className="mb-3 d-block">
                    <img src={banner2} alt="" />
                  </span>
                  <Heading5 marginBottom={10} text="Video Cameras" />
                  <p>
                    Find Out Why This Is the Go-To Lens for So Many
                    Photographers
                  </p>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="mobile__home__feature__categories__card">
                  <span className="mb-3 d-block">
                    <img src={banner2} alt="" />
                  </span>
                  <Heading5 marginBottom={10} text="Video Cameras" />
                  <p>
                    Find Out Why This Is the Go-To Lens for So Many
                    Photographers
                  </p>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="mobile__home__feature__categories__card">
                  <span className="mb-3 d-block">
                    <img src={banner2} alt="" />
                  </span>
                  <Heading5 marginBottom={10} text="Video Cameras" />
                  <p>
                    Find Out Why This Is the Go-To Lens for So Many
                    Photographers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile_Home_Page;
