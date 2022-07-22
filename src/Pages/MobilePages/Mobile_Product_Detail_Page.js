import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarouselTypeTwo from "../../Components/CarouselTypeTwo";
import ProductCarousel from "../../Components/ProductCarousel";
import "./../../SCSS/MobilePages/_mobileProductDetail.scss";

import sony_logo from "./../../assets/Icon/sony_logo.svg";
import Heading3 from "../../Components/Font/Heading3";
import RatingBlock from "../../Components/MostSharedComponent/RatingBlock";
import Price from "../../Components/Font/Price";
import OldPrice from "../../Components/Font/OldPrice";
import Heading7 from "../../Components/Font/Heading7";
import empty_favourite from "./../../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../../assets/Icon/fulfill_favourite.svg";
import share from "./../../assets/Icon/share.svg";
import Text3 from "../../Components/Font/Text3";
import Text4 from "../../Components/Font/Text4";
import Heading5 from "../../Components/Font/Heading5";
import SuperCoin from "../../Components/MostSharedComponent/SuperCoin";
import PriceBlock from "../../Components/MostSharedComponent/PriceBlock";
import Heading1 from "../../Components/Font/Heading1";
import Heading6 from "../../Components/Font/Heading6";


function Mobile_Product_Detail_Page({ product }) {
    const [isFavouriteHover, setIsFavouriteHover] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);
    const handleFavourite = () => {
        setIsFavourite(!isFavourite);
    };
    return (
        <>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb__product__detail__carousel">
                                <ProductCarousel productImageData={product.media.image.screenshots} />
                            </div>
                        </div>
                    </div>
                    <div className="row mb__product__detail__block">
                        <div className="col-12">
                            <img
                                src={sony_logo}
                                alt=""
                                className="pd__product__company__logo mb-2"
                            />
                            <Heading3 text={product.name} />
                            <div className="pd__category__favourite__button__block">
                                <button className="pd__category__button">ALL TV's</button>
                                <button className="pd__favourite__button">
                                    <img
                                        onMouseEnter={() => setIsFavouriteHover(true)}
                                        onClick={handleFavourite}
                                        onMouseLeave={() => setIsFavouriteHover(false)}
                                        className={
                                            !isFavourite
                                                ? "pd__favourite__icon"
                                                : "pd__favourite__icon__disable"
                                        }
                                        src={
                                            isFavouriteHover ? fulfill_favourite : empty_favourite
                                        }
                                        alt=""
                                    />
                                    <img
                                        onClick={handleFavourite}
                                        className={
                                            isFavourite
                                                ? "pd__favourite__icon"
                                                : "pd__favourite__icon__disable"
                                        }
                                        src={fulfill_favourite}
                                        alt=""
                                    />
                                </button>
                                <button className="pd__share__button">
                                            <img src={share}/>
                                </button>
                            </div>
                            {/* <Rating PriceBlock */}
                            <RatingBlock
                                size={22}
                                rating={product.reviewSummary.avg}
                                totalRatings={Object.values(
                                    product.reviewSummary.totals
                                ).reduce((a, b) => a + b)}
                                // totalRatings={0}
                                fillColor="#DC3A1A"
                                emptyColor="#C8C8C8"
                            />

                           
                            <div className="mb__price__block">
                                <div className="mb__save__off">{`SAVE SAR${Math.ceil(
                                    "45" * 0.1
                                )} off`}</div>
                                <div className="d-flex">
                                    <OldPrice
                                        oldPrice="7878"
                                        size="text2"
                                        color="#808080"
                                        marginBottom={0}
                                        lineThrough={true}
                                        currency="SAR"
                                    />
                                    <Price currency="SAR" price="4545" size="heading1" />
                                    <div className="mb__off__text">
                                        <Heading3 text="40% off" />
                                    </div>
                                    
                                </div>
                            </div>
                             {/* Price Block */}
                             <p className="mb__saving__tagline mb-0">Get it for SAR 500 in 6 equal installments<span>SAR79.00/mo.*</span></p>
                             <Link to="#" className="know__more__link">
                                Know more&nbsp;&gt;
                             </Link>
                        </div>
                    </div>
                </div>
                {/* m_pdp banner and detail sections ends here */}
                <hr className="pd__block__bottom__line" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mobile_Product_Detail_Page;