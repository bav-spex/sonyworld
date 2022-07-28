import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import empty_favourite from "./../../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../../assets/Icon/fulfill_favourite.svg";
import shopping_cart from "./../../assets/Icon/shopping-cart-red.svg";
import quick_view from "./../../assets/Icon/quick_view.svg";
import compare from "./../../assets/Icon/compare.svg";
import productTwo_quality_icon from "./../../assets/Product/productTwo_quality_icon.png";
import Heading7 from "./../../Components/Font/Heading7";
import Text4 from "./../../Components/Font/Text4";
import OldPrice from "./../../Components/Font/OldPrice";
import Price from "./../../Components/Font/Price";
import Heading6 from "./../../Components/Font/Heading6";
import RatingBlock from "./../../Components/MostSharedComponent/RatingBlock";
import AwesomeSlider from "react-awesome-slider";
import product_01 from "./../../assets/Product/product_01.jpg";
import product_02 from "./../../assets/Product/product_02.jpg";
import product_03 from "./../../assets/Product/product_03.jpg";
import product_04 from "./../../assets/Product/product_04.jpg";
import sony_logo from "./../../assets/Icon/sony_logo.svg";
import './../../SCSS/MobilePages/_mobileProductGridSec.scss';

const product = {
    id: 1,
    logo: sony_logo,
    image: product_01,
    productName:
        "Z8H | Full Array LED | 8K | High Dynamic Range (HDR) | Smart TV (Android TV)",
    categoryTagline: "Experience the brilliance of big-screen Sony 8K HDR",
    rating: 4.6,
    totalRatings: 6183,
    price: 799,
    oldPrice: 1050,
    saving: 10,
    monthlySavingTagline: "get it for SAR 500 in 6 equal installments",
    returnPeriod: 15,
    availableOffer: [
        {
            id: 1,
            offerType: "",
            offerText: "Save $50-$300 on a sound bar with TV",
            termsAndConditions: "",
        },
        {
            id: 2,
            offerType: "Bank Offer",
            offerText: "5% Unlimited Cashback on Axis Bank Credit Card",
            termsAndConditions: "T&C",
        },
        {
            id: 3,
            offerType: "Credit Card Offer",
            offerText: "5% Unlimited Cashback on Sony Credit Card",
            termsAndConditions: "T&C",
        },
    ],
    warrantyText: "1 Year Warranty on Product",
    size: [
        {
            id: 1,
            cm: 139,
            inch: 55,
        },
        {
            id: 2,
            cm: 164,
            inch: 65,
        },
        {
            id: 3,
            cm: 195,
            inch: 77,
        },
    ],
    delivery: {
        deliveryText: "Buy in next 2 hours and receive the TV by Tomorrow",
        pickupStore: [
            {
                id: 1,
                pickupText:
                    "Available today at Riyadh Act Fast – Only 3 left at your store!>",
            },
            {
                id: 2,
                pickupText:
                    "Available today at Riyadh Act Fast – Only 3 left at your store!>",
            },
            {
                id: 3,
                pickupText:
                    "Available today at Riyadh Act Fast – Only 3 left at your store!>",
            },
        ],
    },
    protection: [
        {
            id: 1,
            protectionText: "2-Year Standard Geek Squad Protection",
            price: 79,
            month: 12,
        },
        {
            id: 2,
            protectionText: "1-Year Standard Geek Squad Protection",
            price: 89,
            month: 12,
        },
    ],
    productFeatures: [
        {
            id: 1,
            text: "Netflix|Prime Video|Disney+Hotstar|Youtube",
        },
        {
            id: 1,
            text: "Multi-position stand for versatile TV placement",
        },
        {
            id: 1,
            text: "HD Smart 2048 x 1366 Pixels",
        },
    ],
}

function Mobile_Product_List_ListDetail() {
    const [isFavouriteHover, setIsFavouriteHover] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);
    const [rating, setRating] = useState(0);
    const [sizeButtonIndex, setSizeButtonIndex] = useState(0);
    const handleFavourite = () => {
        setIsFavourite(!isFavourite);
    };

    const handleRating = (score) => {
        setRating(score);
    };

    const sizeButtonClick = (sizeIndex, cm, inch) => {
        console.log(sizeIndex, cm, inch);
        setSizeButtonIndex(sizeIndex);
    };

    return (
        <>
            <div className="row">
                <div className="col-6 mb-4">
                    <div key={product.id} className="mb__product__list__block">
                        <div className="productNine__header mb__product__header">
                            <div className="productNine__new__sticker__block">
                                <p className="productNine__new__sticker__text">New</p>
                            </div>
                            <div className="quality__favourite__block">

                                <img
                                    onMouseEnter={() => setIsFavouriteHover(true)}
                                    onClick={handleFavourite}
                                    onMouseLeave={() => setIsFavouriteHover(false)}
                                    className={
                                        !isFavourite ? "favourite__icon" : "favourite__icon__disable"
                                    }
                                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                    alt=""
                                />
                                <img
                                    onClick={handleFavourite}
                                    className={
                                        isFavourite ? "favourite__icon" : "favourite__icon__disable"
                                    }
                                    src={fulfill_favourite}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="productNine__content">
                            <img src={productTwo_quality_icon} alt="" className="quality__icon" />
                            <div className="productNine__image__slider">
                                <AwesomeSlider transitionDelay={0.2}>
                                    {[product_01, product_02, product_03, product_04].map(
                                        (images, index) => (
                                            <div key={index} className="_product__container_image">

                                                <img src={images} alt={images + index} />
                                            </div>
                                        )
                                    )}
                                </AwesomeSlider>
                            </div>

                            <Heading6 text={product.productName} marginBottom={10} marginTop={10} />

                            <OldPrice
                                oldPrice={product.oldPrice}
                                size="text4"
                                color="#c8c8c8"
                                marginBottom={10}
                                lineThrough={true}
                                span={true}
                                currency="SAR"
                            />
                            <Price
                                price={product.price}
                                marginLeft={5}
                                marginBottom={10}
                                size="heading6"
                                span={true}
                                currency="SAR"
                            />

                            <RatingBlock
                                rating={product.rating}
                                totalRatings={product.totalRatings}
                            />

                            <div className="productNine__feature__block">
                                {product.productFeatures && (
                                    <>
                                        {product.productFeatures.map((feature, featureIndex) => {
                                            return (
                                                <div key={featureIndex} className="feature__text__block">
                                                    <div className="feature__bullet"></div>
                                                    <Text4 text={feature.text} />
                                                </div>
                                            );
                                        })}
                                    </>
                                )}
                            </div>
                            <div className="mb__delivery__text">
                                <Text4 text="Free delivery by" span={true} />
                                <Heading7 text="Tomorrow," span={true} />
                                <Heading7 text="May, 7:00 am - 9:00 pm" marginBottom={10} />
                            </div>



                            <div className="addToCart__button">
                                <img src={shopping_cart} alt="" className="addToCart__icon" />
                                {/* Buy */}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-6 mb-4">
                    <div key={product.id} className="mb__product__grid__block">
                        <div className="productNine__header mb__product__header">
                            <div className="productNine__new__sticker__block new__sticker__block__green">
                                <p className="productNine__new__sticker__text">bestseller</p>
                            </div>
                            <div className="quality__favourite__block">

                                <img
                                    onMouseEnter={() => setIsFavouriteHover(true)}
                                    onClick={handleFavourite}
                                    onMouseLeave={() => setIsFavouriteHover(false)}
                                    className={
                                        !isFavourite ? "favourite__icon" : "favourite__icon__disable"
                                    }
                                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                    alt=""
                                />
                                <img
                                    onClick={handleFavourite}
                                    className={
                                        isFavourite ? "favourite__icon" : "favourite__icon__disable"
                                    }
                                    src={fulfill_favourite}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="productNine__content">
                            <img src={productTwo_quality_icon} alt="" className="quality__icon" />
                            <div className="productNine__image__slider">
                                <AwesomeSlider transitionDelay={0.2}>
                                    {[product_01, product_02, product_03, product_04].map(
                                        (images, index) => (
                                            <div key={index} className="_product__container_image">

                                                <img src={images} alt={images + index} />
                                            </div>
                                        )
                                    )}
                                </AwesomeSlider>
                            </div>

                            <Heading6 text={product.productName} marginBottom={10} marginTop={10} />

                            <OldPrice
                                oldPrice={product.oldPrice}
                                size="text4"
                                color="#c8c8c8"
                                marginBottom={10}
                                lineThrough={true}
                                span={true}
                                currency="SAR"
                            />
                            <Price
                                price={product.price}
                                marginLeft={5}
                                marginBottom={10}
                                size="heading6"
                                span={true}
                                currency="SAR"
                            />

                            <RatingBlock
                                rating={product.rating}
                                totalRatings={product.totalRatings}
                            />

                            <div className="productNine__feature__block">
                                {product.productFeatures && (
                                    <>
                                        {product.productFeatures.map((feature, featureIndex) => {
                                            return (
                                                <div key={featureIndex} className="feature__text__block">
                                                    <div className="feature__bullet"></div>
                                                    <Text4 text={feature.text} />
                                                </div>
                                            );
                                        })}
                                    </>
                                )}
                            </div>
                            <div className="mb__delivery__text">
                                <Text4 text="Free delivery by" span={true} />
                                <Heading7 text="Tomorrow," span={true} />
                                <Heading7 text="May, 7:00 am - 9:00 pm" marginBottom={10} />
                            </div>


                            <div className="addToCart__button">
                                <img src={shopping_cart} alt="" className="addToCart__icon" />
                                {/* Buy */}
                            </div>
                          
                        </div>
                    </div>
                </div>
                <div className="col-6 mb-4">
                    <div key={product.id} className="mb__product__grid__block">
                        <div className="productNine__header mb__product__header">
                            <div className="productNine__new__sticker__block">
                                <p className="productNine__new__sticker__text">New</p>
                            </div>
                            <div className="quality__favourite__block">

                                <img
                                    onMouseEnter={() => setIsFavouriteHover(true)}
                                    onClick={handleFavourite}
                                    onMouseLeave={() => setIsFavouriteHover(false)}
                                    className={
                                        !isFavourite ? "favourite__icon" : "favourite__icon__disable"
                                    }
                                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                    alt=""
                                />
                                <img
                                    onClick={handleFavourite}
                                    className={
                                        isFavourite ? "favourite__icon" : "favourite__icon__disable"
                                    }
                                    src={fulfill_favourite}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="productNine__content">
                            <img src={productTwo_quality_icon} alt="" className="quality__icon" />
                            <div className="productNine__image__slider">
                                <AwesomeSlider transitionDelay={0.2}>
                                    {[product_01, product_02, product_03, product_04].map(
                                        (images, index) => (
                                            <div key={index} className="_product__container_image">

                                                <img src={images} alt={images + index} />
                                            </div>
                                        )
                                    )}
                                </AwesomeSlider>
                            </div>

                            <Heading6 text={product.productName} marginBottom={10} marginTop={10} />

                            <OldPrice
                                oldPrice={product.oldPrice}
                                size="text4"
                                color="#c8c8c8"
                                marginBottom={10}
                                lineThrough={true}
                                span={true}
                                currency="SAR"
                            />
                            <Price
                                price={product.price}
                                marginLeft={5}
                                marginBottom={10}
                                size="heading6"
                                span={true}
                                currency="SAR"
                            />

                            <RatingBlock
                                rating={product.rating}
                                totalRatings={product.totalRatings}
                            />

                            <div className="productNine__feature__block">
                                {product.productFeatures && (
                                    <>
                                        {product.productFeatures.map((feature, featureIndex) => {
                                            return (
                                                <div key={featureIndex} className="feature__text__block">
                                                    <div className="feature__bullet"></div>
                                                    <Text4 text={feature.text} />
                                                </div>
                                            );
                                        })}
                                    </>
                                )}
                            </div>
                            <div className="mb__delivery__text">
                                <Text4 text="Free delivery by" span={true} />
                                <Heading7 text="Tomorrow," span={true} />
                                <Heading7 text="May, 7:00 am - 9:00 pm" marginBottom={10} />
                            </div>



                            <div className="addToCart__button">
                                <img src={shopping_cart} alt="" className="addToCart__icon" />
                                {/* Buy */}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-6 mb-4">
                    <div key={product.id} className="mb__product__grid__block">
                        <div className="productNine__header mb__product__header">
                            <div className="productNine__new__sticker__block new__sticker__block__green">
                                <p className="productNine__new__sticker__text">bestseller</p>
                            </div>
                            <div className="quality__favourite__block">

                                <img
                                    onMouseEnter={() => setIsFavouriteHover(true)}
                                    onClick={handleFavourite}
                                    onMouseLeave={() => setIsFavouriteHover(false)}
                                    className={
                                        !isFavourite ? "favourite__icon" : "favourite__icon__disable"
                                    }
                                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                                    alt=""
                                />
                                <img
                                    onClick={handleFavourite}
                                    className={
                                        isFavourite ? "favourite__icon" : "favourite__icon__disable"
                                    }
                                    src={fulfill_favourite}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="productNine__content">
                            <img src={productTwo_quality_icon} alt="" className="quality__icon" />
                            <div className="productNine__image__slider">
                                <AwesomeSlider transitionDelay={0.2}>
                                    {[product_01, product_02, product_03, product_04].map(
                                        (images, index) => (
                                            <div key={index} className="_product__container_image">

                                                <img src={images} alt={images + index} />
                                            </div>
                                        )
                                    )}
                                </AwesomeSlider>
                            </div>

                            <Heading6 text={product.productName} marginBottom={10} marginTop={10} />

                            <OldPrice
                                oldPrice={product.oldPrice}
                                size="text4"
                                color="#c8c8c8"
                                marginBottom={10}
                                lineThrough={true}
                                span={true}
                                currency="SAR"
                            />
                            <Price
                                price={product.price}
                                marginLeft={5}
                                marginBottom={10}
                                size="heading6"
                                span={true}
                                currency="SAR"
                            />

                            <RatingBlock
                                rating={product.rating}
                                totalRatings={product.totalRatings}
                            />

                            <div className="productNine__feature__block">
                                {product.productFeatures && (
                                    <>
                                        {product.productFeatures.map((feature, featureIndex) => {
                                            return (
                                                <div key={featureIndex} className="feature__text__block">
                                                    <div className="feature__bullet"></div>
                                                    <Text4 text={feature.text} />
                                                </div>
                                            );
                                        })}
                                    </>
                                )}
                            </div>
                            <div className="mb__delivery__text">
                                <Text4 text="Free delivery by" span={true} />
                                <Heading7 text="Tomorrow," span={true} />
                                <Heading7 text="May, 7:00 am - 9:00 pm" marginBottom={10} />
                            </div>


                            <div className="addToCart__button">
                                <img src={shopping_cart} alt="" className="addToCart__icon" />
                                {/* Buy */}
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Mobile_Product_List_ListDetail;