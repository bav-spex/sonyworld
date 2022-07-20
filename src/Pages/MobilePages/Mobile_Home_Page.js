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
import categoryImg from './../../assets/MobilePages/MobileHome/categoryhome.png';
import HOMEcategoryImg from './../../assets/MobilePages/MobileHome/homecategory.png';
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

function Mobile_Home_Page({ bannerData, featureProductsData, recentlyViewedProductsData, recentlyViewedProductsBanner, newArrivalData, topTrendingData, topRatedData, dealsOfTheWeekData, homePageBottomSingleBanner }) {

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
                <FeatureProducts featureProductsData={featureProductsData} />

                <div className="mobile_home_television_cat my-3 py-2 container-fluid">
                    <span className="mobile_home_cat_banner mb-4">
                        <img src={categoryImg} alt="category image" width="100%" />
                    </span>
                    <div className="container-fluid feature__category__container">
                        <div className=" feature__category__block">
                            <div className="row inner__feature__category__block">
                                <div className=" second__feature__category__block">
                                    <div className="feature__category first__in__column">
                                        <span className="fav_icon">
                                            <img
                                                onMouseEnter={() => setIsFavouriteHover(true)}
                                                onClick={handleFavourite}
                                                onMouseLeave={() => setIsFavouriteHover(false)}
                                                className={
                                                    !isFavourite
                                                        ? "productOne__favourite__icon"
                                                        : "productOne__favourite__icon__disable"
                                                }
                                                src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                                alt=""
                                            />
                                            <img
                                                onClick={handleFavourite}
                                                className={
                                                    isFavourite
                                                        ? "productOne__favourite__icon"
                                                        : "productOne__favourite__icon__disable"
                                                }
                                                src={fulfill_favourite}
                                                alt=""
                                            />
                                        </span>
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
                                        <div className="text-end cart_end_icon">
                                            <Link to="#" className="d-inline-block"><img src={shopping_cart} alt="cart" /></Link>
                                        </div>
                                    </div>
                                    <div className="feature__category">
                                        <span className="fav_icon">
                                            <img
                                                onMouseEnter={() => setIsFavouriteHover(true)}
                                                onClick={handleFavourite}
                                                onMouseLeave={() => setIsFavouriteHover(false)}
                                                className={
                                                    !isFavourite
                                                        ? "productOne__favourite__icon"
                                                        : "productOne__favourite__icon__disable"
                                                }
                                                src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                                alt=""
                                            />
                                            <img
                                                onClick={handleFavourite}
                                                className={
                                                    isFavourite
                                                        ? "productOne__favourite__icon"
                                                        : "productOne__favourite__icon__disable"
                                                }
                                                src={fulfill_favourite}
                                                alt=""
                                            />
                                        </span>
                                        <div className="second__feature__category__image__block">
                                            <img
                                                src={feature_product_03}
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
                                        <div className="text-end cart_end_icon">
                                            <Link to="#" className="d-inline-block"><img src={shopping_cart} alt="cart" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className=" second__feature__category__block">
                                    <div className="feature__category first__in__column">
                                        <div className="second__feature__category__image__block">
                                            <span className="fav_icon">
                                                <img
                                                    onMouseEnter={() => setIsFavouriteHover(true)}
                                                    onClick={handleFavourite}
                                                    onMouseLeave={() => setIsFavouriteHover(false)}
                                                    className={
                                                        !isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                                    alt=""
                                                />
                                                <img
                                                    onClick={handleFavourite}
                                                    className={
                                                        isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={fulfill_favourite}
                                                    alt=""
                                                />
                                            </span>
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
                                        <div className="text-end cart_end_icon">
                                            <Link to="#" className="d-inline-block"><img src={shopping_cart} alt="cart" /></Link>
                                        </div>
                                    </div>
                                    <div className="feature__category">
                                        <div className="second__feature__category__image__block">
                                            <span className="fav_icon">
                                                <img
                                                    onMouseEnter={() => setIsFavouriteHover(true)}
                                                    onClick={handleFavourite}
                                                    onMouseLeave={() => setIsFavouriteHover(false)}
                                                    className={
                                                        !isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                                    alt=""
                                                />
                                                <img
                                                    onClick={handleFavourite}
                                                    className={
                                                        isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={fulfill_favourite}
                                                    alt=""
                                                />
                                            </span>
                                            <img
                                                src={feature_product_03}
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
                                        <div className="text-end cart_end_icon">
                                            <Link to="#" className="d-inline-block"><img src={shopping_cart} alt="cart" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* category end           */}
                <div className="top_rated_sec">
                    <div className="container-fluid feature__category__container">
                        <div className=" feature__category__block">
                            <p className="section__title d-block d-lg-none py-3">
                                Top Rated Products
                            </p>
                            <div className="row inner__feature__category__block">
                                <Link className="first__feature__category__block" to={`products/${featureProductsData[0].sku}`}>

                                    {/* <div className="deal__of__the__day">
                                                <p className="inner__text">DEALS OF THE DAY</p>
                                            </div> */}

                                    <div className="first__feature__category">
                                        {/* <div className="deal__of__the__day">
                                                        <p className="inner__text">DEALS OF THE DAY</p>
                                                    </div> */}
                                        {/* <div></div> */}


                                        <div className="first__feature__category__image__block">
                                            <span className="fav_icon d-block d-lg-none">
                                                <img
                                                    onMouseEnter={() => setIsFavouriteHover(true)}
                                                    onClick={handleFavourite}
                                                    onMouseLeave={() => setIsFavouriteHover(false)}
                                                    className={
                                                        !isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                                    alt=""
                                                />
                                                <img
                                                    onClick={handleFavourite}
                                                    className={
                                                        isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={fulfill_favourite}
                                                    alt=""
                                                />
                                            </span>
                                            <img
                                                src={featureProductsData[0]?.baseImage}
                                                alt=""
                                                className="first__feature__category__image"
                                            />
                                        </div>
                                        <div className="heading__inner__text">
                                            <Heading7
                                                marginBottom={10}
                                                text={featureProductsData[0]?.name}
                                            />
                                            <RatingBlock rating={4.5} totalRatings={2143} />
                                            <OldPrice
                                                oldPrice={featureProductsData[0]?.price_rounded + 200}
                                                size="text3"
                                                color="#c8c8c8"
                                                marginBottom={10}
                                                lineThrough={true}
                                                span={true}
                                                currency={featureProductsData[0]?.currency}
                                            />
                                            <Price
                                                price={featureProductsData[0]?.price_rounded}
                                                marginLeft={5}
                                                marginBottom={10}
                                                size="heading6"
                                                span={true}
                                                currency={featureProductsData[0]?.currency}
                                            />
                                        </div>
                                        <div className="text-end cart_end_icon">
                                            <Link to="#" className="d-inline-block"><img src={shopping_cart} alt="cart" /></Link>
                                        </div>
                                    </div>

                                </Link>
                                <div className=" second__feature__category__block">
                                    <div className="feature__category first__in__column">
                                        <span className="fav_icon">
                                            <img
                                                onMouseEnter={() => setIsFavouriteHover(true)}
                                                onClick={handleFavourite}
                                                onMouseLeave={() => setIsFavouriteHover(false)}
                                                className={
                                                    !isFavourite
                                                        ? "productOne__favourite__icon"
                                                        : "productOne__favourite__icon__disable"
                                                }
                                                src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                                alt=""
                                            />
                                            <img
                                                onClick={handleFavourite}
                                                className={
                                                    isFavourite
                                                        ? "productOne__favourite__icon"
                                                        : "productOne__favourite__icon__disable"
                                                }
                                                src={fulfill_favourite}
                                                alt=""
                                            />
                                        </span>
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
                                        <div className="text-end cart_end_icon">
                                            <Link to="#" className="d-inline-block"><img src={shopping_cart} alt="cart" /></Link>
                                        </div>
                                    </div>

                                </div>
                                <div className=" second__feature__category__block">
                                    <div className="feature__category first__in__column">
                                        <div className="second__feature__category__image__block">
                                            <span className="fav_icon">
                                                <img
                                                    onMouseEnter={() => setIsFavouriteHover(true)}
                                                    onClick={handleFavourite}
                                                    onMouseLeave={() => setIsFavouriteHover(false)}
                                                    className={
                                                        !isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                                    alt=""
                                                />
                                                <img
                                                    onClick={handleFavourite}
                                                    className={
                                                        isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={fulfill_favourite}
                                                    alt=""
                                                />
                                            </span>
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
                                        <div className="text-end cart_end_icon">
                                            <Link to="#" className="d-inline-block"><img src={shopping_cart} alt="cart" /></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* top rated end */}
                <div className="container-fluid adImage__container p-0  ">
                    <div className=" adImage">
                        <Link to="/products">
                            <div className="adImage__block">
                                <img
                                    src={homePageBottomSingleBanner[0].imageUrl}
                                    alt="" width="100%" height="100%"
                                    className="adImage__image"
                                />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* advertise */}

                <div className="mobile_home_television_cat container-fluid my-3">
                    <span className="mobile_home_cat_banner mb-4">
                        <img src={HOMEcategoryImg} alt="category image" width="100%" />
                    </span>
                    <div className="container-fluid feature__category__container">
                        <div className=" feature__category__block">
                            <div className="row inner__feature__category__block">
                                <div className=" second__feature__category__block">
                                    <div className="feature__category first__in__column">
                                        <span className="fav_icon">
                                            <img
                                                onMouseEnter={() => setIsFavouriteHover(true)}
                                                onClick={handleFavourite}
                                                onMouseLeave={() => setIsFavouriteHover(false)}
                                                className={
                                                    !isFavourite
                                                        ? "productOne__favourite__icon"
                                                        : "productOne__favourite__icon__disable"
                                                }
                                                src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                                alt=""
                                            />
                                            <img
                                                onClick={handleFavourite}
                                                className={
                                                    isFavourite
                                                        ? "productOne__favourite__icon"
                                                        : "productOne__favourite__icon__disable"
                                                }
                                                src={fulfill_favourite}
                                                alt=""
                                            />
                                        </span>
                                        <div className="second__feature__category__image__block">
                                            <img
                                                src={feature_product_04}
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
                                        <div className="text-end cart_end_icon">
                                            <Link to="#" className="d-inline-block"><img src={shopping_cart} alt="cart" /></Link>
                                        </div>
                                    </div>
                                    <div className="feature__category">
                                        <span className="fav_icon">
                                            <img
                                                onMouseEnter={() => setIsFavouriteHover(true)}
                                                onClick={handleFavourite}
                                                onMouseLeave={() => setIsFavouriteHover(false)}
                                                className={
                                                    !isFavourite
                                                        ? "productOne__favourite__icon"
                                                        : "productOne__favourite__icon__disable"
                                                }
                                                src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                                alt=""
                                            />
                                            <img
                                                onClick={handleFavourite}
                                                className={
                                                    isFavourite
                                                        ? "productOne__favourite__icon"
                                                        : "productOne__favourite__icon__disable"
                                                }
                                                src={fulfill_favourite}
                                                alt=""
                                            />
                                        </span>
                                        <div className="second__feature__category__image__block">
                                            <img
                                                src={feature_product_04}
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
                                        <div className="text-end cart_end_icon">
                                            <Link to="#" className="d-inline-block"><img src={shopping_cart} alt="cart" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className=" second__feature__category__block">
                                    <div className="feature__category first__in__column">
                                        <div className="second__feature__category__image__block">
                                            <span className="fav_icon">
                                                <img
                                                    onMouseEnter={() => setIsFavouriteHover(true)}
                                                    onClick={handleFavourite}
                                                    onMouseLeave={() => setIsFavouriteHover(false)}
                                                    className={
                                                        !isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                                    alt=""
                                                />
                                                <img
                                                    onClick={handleFavourite}
                                                    className={
                                                        isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={fulfill_favourite}
                                                    alt=""
                                                />
                                            </span>
                                            <img
                                                src={feature_product_04}
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
                                        <div className="text-end cart_end_icon">
                                            <Link to="#" className="d-inline-block"><img src={shopping_cart} alt="cart" /></Link>
                                        </div>
                                    </div>
                                    <div className="feature__category">
                                        <div className="second__feature__category__image__block">
                                            <span className="fav_icon">
                                                <img
                                                    onMouseEnter={() => setIsFavouriteHover(true)}
                                                    onClick={handleFavourite}
                                                    onMouseLeave={() => setIsFavouriteHover(false)}
                                                    className={
                                                        !isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                                    alt=""
                                                />
                                                <img
                                                    onClick={handleFavourite}
                                                    className={
                                                        isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={fulfill_favourite}
                                                    alt=""
                                                />
                                            </span>
                                            <img
                                                src={feature_product_04}
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
                                        <div className="text-end cart_end_icon">
                                            <Link to="#" className="d-inline-block"><img src={shopping_cart} alt="cart" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* category end           */}
                <div className="sale_sec">
                    <div className="container-fluid feature__category__container">
                        <div className=" feature__category__block">
                            <p className="section__title d-block d-lg-none py-3">
                                Sale Upto 35% Off
                            </p>
                            <div className="row inner__feature__category__block">
                                <Link className="first__feature__category__block" to={`products/${featureProductsData[0].sku}`}>

                                    {/* <div className="deal__of__the__day">
                                                <p className="inner__text">DEALS OF THE DAY</p>
                                            </div> */}

                                    <div className="first__feature__category">
                                        {/* <div className="deal__of__the__day">
                                                        <p className="inner__text">DEALS OF THE DAY</p>
                                                    </div> */}
                                        {/* <div></div> */}


                                        <div className="first__feature__category__image__block">
                                            <span className="fav_icon d-block d-lg-none">
                                                <img
                                                    onMouseEnter={() => setIsFavouriteHover(true)}
                                                    onClick={handleFavourite}
                                                    onMouseLeave={() => setIsFavouriteHover(false)}
                                                    className={
                                                        !isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                                    alt=""
                                                />
                                                <img
                                                    onClick={handleFavourite}
                                                    className={
                                                        isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={fulfill_favourite}
                                                    alt=""
                                                />
                                            </span>
                                            <img
                                                src={featureProductsData[0]?.baseImage}
                                                alt=""
                                                className="first__feature__category__image"
                                            />
                                        </div>
                                        <div className="heading__inner__text">
                                            <Heading7
                                                marginBottom={10}
                                                text={featureProductsData[0]?.name}
                                            />
                                            <RatingBlock rating={4.5} totalRatings={2143} />
                                            <OldPrice
                                                oldPrice={featureProductsData[0]?.price_rounded + 200}
                                                size="text3"
                                                color="#c8c8c8"
                                                marginBottom={10}
                                                lineThrough={true}
                                                span={true}
                                                currency={featureProductsData[0]?.currency}
                                            />
                                            <Price
                                                price={featureProductsData[0]?.price_rounded}
                                                marginLeft={5}
                                                marginBottom={10}
                                                size="heading6"
                                                span={true}
                                                currency={featureProductsData[0]?.currency}
                                            />
                                        </div>
                                        <div className="text-end cart_end_icon">
                                            <Link to="#" className="d-inline-block"><img src={shopping_cart} alt="cart" /></Link>
                                        </div>
                                    </div>

                                </Link>
                                <div className=" second__feature__category__block">
                                    <div className="feature__category first__in__column">
                                        <span className="fav_icon">
                                            <img
                                                onMouseEnter={() => setIsFavouriteHover(true)}
                                                onClick={handleFavourite}
                                                onMouseLeave={() => setIsFavouriteHover(false)}
                                                className={
                                                    !isFavourite
                                                        ? "productOne__favourite__icon"
                                                        : "productOne__favourite__icon__disable"
                                                }
                                                src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                                alt=""
                                            />
                                            <img
                                                onClick={handleFavourite}
                                                className={
                                                    isFavourite
                                                        ? "productOne__favourite__icon"
                                                        : "productOne__favourite__icon__disable"
                                                }
                                                src={fulfill_favourite}
                                                alt=""
                                            />
                                        </span>
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
                                        <div className="text-end cart_end_icon">
                                            <Link to="#" className="d-inline-block"><img src={shopping_cart} alt="cart" /></Link>
                                        </div>
                                    </div>

                                </div>
                                <div className=" second__feature__category__block">
                                    <div className="feature__category first__in__column">
                                        <div className="second__feature__category__image__block">
                                            <span className="fav_icon">
                                                <img
                                                    onMouseEnter={() => setIsFavouriteHover(true)}
                                                    onClick={handleFavourite}
                                                    onMouseLeave={() => setIsFavouriteHover(false)}
                                                    className={
                                                        !isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                                    alt=""
                                                />
                                                <img
                                                    onClick={handleFavourite}
                                                    className={
                                                        isFavourite
                                                            ? "productOne__favourite__icon"
                                                            : "productOne__favourite__icon__disable"
                                                    }
                                                    src={fulfill_favourite}
                                                    alt=""
                                                />
                                            </span>
                                            <img
                                                src={feature_product_04}
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
                                        <div className="text-end cart_end_icon">
                                            <Link to="#" className="d-inline-block"><img src={shopping_cart} alt="cart" /></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* top rated end */}
                <div className="container-fluid adImage__container p-0  ">
                    <div className=" adImage">
                        <Link to="/products">
                            <div className="adImage__block">
                                <img
                                    src={banner2}
                                    alt="" width="100%" height="100%"
                                    className="adImage__image"
                                />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* advertise */}
                <div className="mobile_Feature_cat_sec">
                    <div className="container-fluid">
                        <p className="section__title d-block d-lg-none py-3">
                            Featured Categories
                        </p>
                        <div className="row">
                            <div className="col-6 mb-3">
                                <div className="mobile_feature_cat_card">
                                    <span className="mb-3 d-block">
                                        <img
                                            src={banner2}
                                            alt=""
                                        />
                                    </span>
                                    <Heading5
                                        marginBottom={10}
                                        text="Video Cameras"
                                    />
                                    <p>Find Out Why This Is the Go-To Lens for So Many Photographers</p>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="mobile_feature_cat_card">
                                    <span className="mb-3 d-block">
                                        <img
                                            src={banner2}
                                            alt=""
                                        />
                                    </span>
                                    <Heading5
                                        marginBottom={10}
                                        text="Video Cameras"
                                    />
                                    <p>Find Out Why This Is the Go-To Lens for So Many Photographers</p>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="mobile_feature_cat_card">
                                    <span className="mb-3 d-block">
                                        <img
                                            src={banner2}
                                            alt=""
                                        />
                                    </span>
                                    <Heading5
                                        marginBottom={10}
                                        text="Video Cameras"
                                    />
                                    <p>Find Out Why This Is the Go-To Lens for So Many Photographers</p>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="mobile_feature_cat_card">
                                    <span className="mb-3 d-block">
                                        <img
                                            src={banner2}
                                            alt=""
                                        />
                                    </span>
                                    <Heading5
                                        marginBottom={10}
                                        text="Video Cameras"
                                    />
                                    <p>Find Out Why This Is the Go-To Lens for So Many Photographers</p>
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