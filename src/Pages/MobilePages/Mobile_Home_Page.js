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
import FeatureProducts from "../../Components/FeatureProducts";
import HomePageCategoryBlock from "../../Components/HomePageCategoryBlock";
import RecentlyViewedProducts from "../../Components/RecentlyViewedProducts";
import LiveChatPopup from "../../Components/Popup/LiveChatPopup";
import { loadHomePageData } from "../../redux/appAction";
import categoryImg from './../../assets/MobilePages/MobileHome/categoryhome.png';
import feature_product_03 from "./../../assets/FeatureProduct/feature_product_03.png";
import feature_product_04 from "./../../assets/FeatureProduct/feature_product_04.png";
import Heading7 from "./../../Components/Font/Heading7";
import RatingBlock from "./../../Components/MostSharedComponent/RatingBlock";
import PriceBlock from "./../../Components/MostSharedComponent/PriceBlock";
import OldPrice from "./../../Components/Font/OldPrice";
// import Price from "./../../Font/Price";
import Price from "./../../Components/Font/Price";

function Mobile_Home_Page({ bannerData, featureProductsData, recentlyViewedProductsData, recentlyViewedProductsBanner, newArrivalData, topTrendingData, topRatedData, dealsOfTheWeekData, homePageBottomSingleBanner }) {


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

                <div className="mobile_home_television_cat my-3 py-2 container-fluid">
                    <span className="mobile_home_cat_banner">
                        <img src={categoryImg} alt="category image" width="100%" />
                    </span>
                    <div className="container-fluid feature__category__container">
                        <div className=" feature__category__block">
                            <div className="row inner__feature__category__block">
                                <div className=" second__feature__category__block">
                                    <div className="feature__category first__in__column">
                                        <div className="second__feature__category__image__block">
                                            <img
                                                src={feature_product_03}
                                                alt=""
                                                className="second__feature__category__image"
                                            />
                                        </div>
                                        <Heading7
                                            marginBottom={10}
                                            text={featureProductsData[1]?.name}
                                        />
                                        <div className="featureProduct__rating__block">
                                            <RatingBlock rating={4.5} totalRatings={2143} />
                                        </div>
                                        <OldPrice
                                            oldPrice="200"
                                            size="text3"
                                            color="#c8c8c8"
                                            marginBottom={10}
                                            lineThrough={true}
                                            span={true}
                                            currency={featureProductsData[1]?.currency}
                                        />
                                        <Price
                                            price={1699}
                                            marginLeft={5}
                                            marginBottom={10}
                                            size="heading6"
                                            span={true}
                                            currency={featureProductsData[1]?.currency}
                                        />
                                    </div>
                                    <div className="feature__category">
                                        <div className="second__feature__category__image__block">
                                            <img
                                                src={feature_product_03 }
                                                alt=""
                                                className="second__feature__category__image"
                                            />
                                        </div>
                                        <Heading7
                                            marginBottom={10}
                                            text={featureProductsData[2]?.name}
                                        />
                                        <div className="featureProduct__rating__block">
                                            <RatingBlock rating={4.5} totalRatings={2143} />
                                        </div>
                                        <OldPrice
                                            oldPrice={featureProductsData[2]?.price_rounded + 200}
                                            size="text3"
                                            color="#c8c8c8"
                                            marginBottom={10}
                                            lineThrough={true}
                                            span={true}
                                            currency={featureProductsData[2]?.currency}
                                        />
                                        <Price
                                            price={1699}
                                            marginLeft={5}
                                            marginBottom={10}
                                            size="heading6"
                                            span={true}
                                            currency={featureProductsData[2]?.currency}
                                        />
                                    </div>
                                </div>
                                <div className=" second__feature__category__block">
                                    <div className="feature__category first__in__column">
                                        <div className="second__feature__category__image__block">
                                            <img
                                                src={feature_product_03}
                                                alt=""
                                                className="second__feature__category__image"
                                            />
                                        </div>
                                        <Heading7
                                            marginBottom={10}
                                            text={featureProductsData[1]?.name}
                                        />
                                        <div className="featureProduct__rating__block">
                                            <RatingBlock rating={4.5} totalRatings={2143} />
                                        </div>
                                        <OldPrice
                                            oldPrice="200"
                                            size="text3"
                                            color="#c8c8c8"
                                            marginBottom={10}
                                            lineThrough={true}
                                            span={true}
                                            currency={featureProductsData[1]?.currency}
                                        />
                                        <Price
                                            price={1699}
                                            marginLeft={5}
                                            marginBottom={10}
                                            size="heading6"
                                            span={true}
                                            currency={featureProductsData[1]?.currency}
                                        />
                                    </div>
                                    <div className="feature__category">
                                        <div className="second__feature__category__image__block">
                                            <img
                                                src={feature_product_03 }
                                                alt=""
                                                className="second__feature__category__image"
                                            />
                                        </div>
                                        <Heading7
                                            marginBottom={10}
                                            text={featureProductsData[2]?.name}
                                        />
                                        <div className="featureProduct__rating__block">
                                            <RatingBlock rating={4.5} totalRatings={2143} />
                                        </div>
                                        <OldPrice
                                            oldPrice={featureProductsData[2]?.price_rounded + 200}
                                            size="text3"
                                            color="#c8c8c8"
                                            marginBottom={10}
                                            lineThrough={true}
                                            span={true}
                                            currency={featureProductsData[2]?.currency}
                                        />
                                        <Price
                                            price={1699}
                                            marginLeft={5}
                                            marginBottom={10}
                                            size="heading6"
                                            span={true}
                                            currency={featureProductsData[2]?.currency}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid adImage__container">
                    <div className=" adImage">
                        <Link to="/products">
                            <div className="adImage__block">
                                <img
                                    src={homePageBottomSingleBanner[0].imageUrl}
                                    alt="" width="100%"
                                    className="adImage__image"
                                />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Mobile_Home_Page;