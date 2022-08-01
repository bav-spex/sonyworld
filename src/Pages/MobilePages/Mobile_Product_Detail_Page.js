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
import checked from "./../../assets/Icon/checked.svg";
import empty_check from "./../../assets/Icon/empty_check.svg";
import PickupStore from "../../Components/MostSharedComponent/PickupStore";

import returnicon from "./../../assets/MobilePages/MobilePdp/return-box.svg";
import warrantyicon from "./../../assets/MobilePages/MobilePdp/Warranty.svg";
import codicon from "./../../assets/MobilePages/MobilePdp/cash-on-delivery.svg";
import rightaerow from "./../../assets/Icon/right_Arrow_3_.svg";
import Protecttion from "../../Components/MostSharedComponent/Protection";
import BreadCrumbs from "../../Components/BreadCrumbs";
import ExpertProducts from "../../Components/ProductType/ExpertProducts";
import shopping_cart from "./../../assets/Icon/shopping_cart.svg";
import SimilarProducts from "../../Components/SimilarProducts";

function Mobile_Product_Detail_Page({ product }) {
  const [productProtection, setProtection] = useState([
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
  ]);
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };
  const [productDelivery, setProductDelivery] = useState({
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
  });
  const [isCheckBoxHover, setIsCheckBoxHover] = useState(false);
  const [isCheckBox, setIsCheckBox] = useState(false);
  const [productWarrentyBlock, setProductWarrentyBlock] = useState({
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
  });
  const [sizeButtonIndex, setSizeButtonIndex] = useState(0);
  const sizeButtonClick = (sizeIndex, cm, inch) => {
    console.log(sizeIndex, cm, inch);
    setSizeButtonIndex(sizeIndex);
  };
  return (
    <>
      <div className="bg-white pt-5">
        <BreadCrumbs title="Z8H | Full Array LED | 8K | High Dynamic Range" />
      </div>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="mb__product__detail__carousel">
                <ProductCarousel
                  productImageData={product.media.image.screenshots}
                />
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
                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
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
                  <img src={share} />
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
              <p className="mb__saving__tagline mb-0">
                Get it for SAR 500 in 6 equal installments
                <span>&nbsp;SAR79.00/mo.*</span>
              </p>
              <Link to="#" className="know__more__link">
                Know more&nbsp;&gt;
              </Link>
            </div>
          </div>
        </div>
        {/* m_pdp banner and detail sections ends here */}
        <hr className="mb__block__bottom__line" />

        {/* size section start */}
        <div className="container-fluid mb__pdp__size__sec">
          <div className="row mb__pd__size__block">
            <p className="col-12 mb__pd__size__title">All Sizes</p>
            <div className="col-12 mb__pd__size__button__block">
              {productWarrentyBlock.size.map((size, sizeIndex) => {
                return (
                  <button
                    key={size.id}
                    onClick={() =>
                      sizeButtonClick(sizeIndex, size.cm, size.inch)
                    }
                    className={
                      sizeButtonIndex === sizeIndex
                        ? "mb__pd__size__button__active"
                        : "mb__pd__size__button"
                    }
                  >{`${size.cm} cm (${size.inch})`}</button>
                );
              })}
            </div>
          </div>
          <div className="row mb__pd__size__block">
            <p className="col-12 mb__pd__size__title">Resolution</p>
            <div className="col-12 mb__pd__size__button__block">
              {productWarrentyBlock.size.map((size, sizeIndex) => {
                return (
                  <button
                    key={size.id}
                    onClick={() =>
                      sizeButtonClick(sizeIndex, size.cm, size.inch)
                    }
                    className={
                      sizeButtonIndex === sizeIndex
                        ? "mb__pd__size__button__active"
                        : "mb__pd__size__button"
                    }
                  >{`${size.cm} cm (${size.inch})`}</button>
                );
              })}
            </div>
          </div>
          <div className="row mb__pd__size__block">
            <p className="col-12 mb__pd__size__title">Resolution</p>
            <div className="col-12 mb__pd__size__button__block">
              {productWarrentyBlock.size.map((size, sizeIndex) => {
                return (
                  <button
                    key={size.id}
                    onClick={() =>
                      sizeButtonClick(sizeIndex, size.cm, size.inch)
                    }
                    className={
                      sizeButtonIndex === sizeIndex
                        ? "mb__pd__size__button__active"
                        : "mb__pd__size__button"
                    }
                  >{`${size.cm} cm (${size.inch})`}</button>
                );
              })}
            </div>
          </div>
        </div>
        {/* size section end */}
        <hr className="mb__block__bottom__line" />

        <div className="container-fluid">
          <div className="row align-items-center">
            <p className="col-12 mb__pd__size__title">Delivery Address</p>

            <div className="col-8">
              <p className="col-12 mb__pd__size__title">John Doe</p>
              <address>
                21 West 52nd Street New York, New York, 10021 United States
              </address>
            </div>
            <div className="col-4">
              <button
                className="btn btn-outline-secondary shadow-none"
                data-bs-toggle="modal"
                data-bs-target="#changeAddressModal"
              >
                CHANGE
              </button>
            </div>
          </div>
        </div>
        {/* =============================== */}

        {/* change address popup start */}
        {/* <!-- Modal --> */}
        <div
          className="modal mb__bottom_popup"
          id="changeAddressModal"
          tabindex="-1"
          aria-labelledby="changeAddressModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog mb__dialog__end modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <Heading5 text="Select Delivery Address" />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="custom__checkbox mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    checked
                  />
                  <label for="exampleCheck1" className="custom__checkmark p-3">
                    <p className="p-1 d-inline-block mb__adress__tag">
                      Default
                    </p>
                    <Heading7 text="John Doe" />
                    <address className="mb-3 text-wrap">
                      21 West 52nd Street New York, New York, 10021 United
                      States
                    </address>
                    <p>+1123456789</p>
                  </label>
                </div>
                <div className="custom__checkbox">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck2"
                  />
                  <label for="exampleCheck2" className="custom__checkmark p-3">
                    <Heading7 text="John Doe" />
                    <address className="mb-3 text-wrap">
                      21 West 52nd Street New York, New York, 10021 United
                      States
                    </address>
                    <p>+1123456789</p>
                  </label>
                </div>
              </div>
              <div className="modal-footer border-top-0">
                <button
                  type="button"
                  className="btn btn-border btn__border__black w-100 d-block mb-2"
                  data-bs-target="#addAddressModal"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  ADD NEW ADDRESS
                </button>
                <button
                  type="button"
                  className="btn__primary__orange btn btn-primary w-100 d-block mb-3"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal end--> */}
        {/* change address popup end */}

        {/* add new address popup  start*/}
        {/* <!-- Modal --> */}
        <div
          className="modal mb__bottom_popup"
          id="addAddressModal"
          tabindex="-1"
          aria-labelledby="addAddressModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog mb__dialog__end modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <Heading5 text="Add New Delivery Address" />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label for="Name" className="form-label">
                    <strong>Name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    placeholder="John"
                  />
                </div>
                <div className="mb-3">
                  <label for="Mobile" className="form-label">
                    <strong>Mobile Number</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Mobile"
                    placeholder="+966 50 655 2835"
                  />
                </div>
                <div className="mb-3">
                  <label for="Mobile" className="form-label">
                    <strong>Address Line 1</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Mobile"
                    placeholder="21 West 52nd Street New York"
                  />
                </div>
                <div className="mb-3">
                  <label for="Mobile" className="form-label">
                    <strong>Address Line 2</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Mobile"
                    placeholder="21 West 52nd Street New York"
                  />
                </div>
                <div className="mb-3">
                  <label for="Mobile" className="form-label">
                    <strong>City/Town</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Mobile"
                    placeholder="Hamilton"
                  />
                </div>
                <div className="mb-3">
                  <label for="Mobile" className="form-label">
                    <strong>State</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Mobile"
                    placeholder="Newyork"
                  />
                </div>
                <div className="mb-3">
                  <label for="Mobile" className="form-label">
                    <strong>Landmark</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Mobile"
                    placeholder="Newyork"
                  />
                </div>
              </div>
              <div className="modal-footer border-top-0 justify-content-center">
                <button
                  type="button"
                  className="btn__primary__orange btn btn-primary w-25 "
                >
                  SAVE
                </button>
                <button
                  type="button"
                  className="btn btn-border btn__border__black  w-25" data-bs-toggle="modal" data-bs-dismiss="modal"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal end--> */}
        {/* add new address popup  end*/}
        {/* =============================== */}

        {/* Delivery Address ends here */}
        <hr className="mb__block__bottom__line" />

        <div className="container-fluid mb__delivery__sec">
          <div className="row">
            <p className="col-12 mb__pd__size__title">Deliver By</p>
            <p className="text-grey">
              Tomorrow, Thursday |{" "}
              <span className="text-orange">
                <strong>Free</strong>
              </span>{" "}
              <s>SAR30</s>
            </p>
            <div className="col-12 d-flex align-items-start">
              <div className="exp__rd__select__block me-2">
                <img
                  onMouseEnter={() => setIsCheckBoxHover(true)}
                  onClick={handleFavourite}
                  onMouseLeave={() => setIsCheckBoxHover(false)}
                  className={
                    !isCheckBox
                      ? "exp__rd__check__icon"
                      : "exp__rd__check__icon__disable"
                  }
                  src={isCheckBoxHover ? checked : empty_check}
                  alt=""
                />
                <img
                  onClick={handleFavourite}
                  className={
                    isCheckBox
                      ? "exp__rd__check__icon"
                      : "exp__rd__check__icon__disable"
                  }
                  src={checked}
                  alt=""
                />
              </div>
              <div>
                <p className="mb__pd__size__title mt-0">
                  Installation & Demo In{" "}
                </p>
                <p className="mb-0 text-grey">
                  2 Days, Saturday |{" "}
                  <span className="text-orange">
                    <strong>Free</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Deliver By  end*/}
          <div className="row">
            <div className="col-12">
              <PickupStore
                delivery={productDelivery}
                title="Pick Up From Store"
              />
            </div>
          </div>
        </div>

        <hr className="mb__block__bottom__line" />
        {/* 15days return sec start */}
        <div className="container-fluid">
          <div className="row">
            <ul className="mb__return_policy d-flex list-unstyled align-items-center justify-content-evenly">
              <li className="text-center">
                <span>
                  <img src={returnicon} />
                </span>
                <p className="mb__pd__size__title">15-DAYS RETURN PERIOD</p>
              </li>
              <li className="text-center">
                <span>
                  <img src={warrantyicon} />
                </span>
                <p className="mb__pd__size__title">1 Year Warranty</p>
              </li>
              <li className="text-center">
                <span>
                  <img src={codicon} />
                </span>
                <p className="mb__pd__size__title">
                  Cash On Delivery Available
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* 15days return sec end */}

        {/* mb__available__offers__Sec Start */}
        <hr className="mb__block__bottom__line " />
        <div className="container-fluid mb__available__offers__Sec">
          <div className="row">
            <div className="col-12">
              <Link
                className="d-flex justify-content-between text-black text-decoration-none"
                to=""
              >
                <Heading6 text="All Available Offers" />
                <img src={rightaerow} alt="right aerrow" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="mb__block__bottom__line" />
        {/* mb__available__offers__Sec end */}

        <div className="container-fluid mb__protect__pc__sec">
          <div className="row">
            <div className="col-12">
              <Protecttion
                title="Protect Your TV"
                tagline="Most popular protection plan for your product"
                rating={product.reviewSummary.avg}
                totalRatings={Object.values(
                  product.reviewSummary.totals
                ).reduce((a, b) => a + b)}
                protection={productProtection}
              />
            </div>
          </div>
        </div>
        {/* Pretection Block ends here*/}
        <hr className="mb__block__bottom__line" />

        <div className="container-fluid mb__create__bundle__Sec">
          <div className="row">
            <div className="col-12">
              <Link
                className="d-flex justify-content-between text-black text-decoration-none"
                to=""
              >
                <Heading6 text="Create Bundle" />
                <img src={rightaerow} alt="right aerrow" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="mb__block__bottom__line" />

        {/* mb Super Coin Block */}
        <div className="container-fluid mb__supercoin__Sec">
          <div className="row">
            <div className="col-12">
              <SuperCoin />
            </div>
          </div>
        </div>
        {/* mb Super Coin Block ends here*/}
        <hr className="mb__block__bottom__line" />

        {/* highlight section start*/}
        <div className="container-fluid mb__highlight__sec">
          <div className="row">
            <div className="col-12">
              <p className="mb__pd__size__title mb-3">Highlights</p>
              <ul className="mb__highlight__list">
                <li>Netflix|Prime Video|Disney+Hotstar|Youtube</li>
                <li>Multi-position stand for versatile TV placement</li>
                <li>Netflix|Prime Video|Disney+Hotstar|Youtube</li>
                <li>Multi-position stand for versatile TV placement</li>
                <li>Netflix|Prime Video|Disney+Hotstar|Youtube</li>
                <li>Multi-position stand for versatile TV placement</li>
              </ul>
            </div>
          </div>
        </div>
        {/* highlight section end*/}
        <hr className="mb__block__bottom__line" />

        {/* overview section start */}
        <div className="accordion accordion-flush" id="mb__overview__accordian">
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      OverView
                    </button>
                  </h2>
                </div>
              </div>
              <div className="col-4">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Specifications
                    </button>
                  </h2>
                </div>
              </div>
              <div className="col-4">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Reviews
                    </button>
                  </h2>
                </div>
              </div>
              <div className="col-12">
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#mb__overview__accordian"
                >
                  <div className="accordion-body">
                    <Heading7 text="Description" />
                    <p>
                      Improve your viewing experience with this 55-inch Samsung
                      smart TV. The variety of applications offer easy access to
                      content on popular streaming services, and the intuitive
                      interface makes finding your favorite shows simple.
                      Boasting native 4K resolution and advanced HDR technology,
                      this Samsung smart TV enriches your movie nights with
                      stunningly detailed visuals and lifelike colors.
                    </p>
                    <Heading7 text="Features" />
                    <div>
                      <strong>
                        <Text4 text="Crystal Processor 4K" />
                      </strong>
                    </div>
                    <p>
                      The ultrafast processor transforms everything you watch
                      into stunning 4K.
                    </p>
                    <div>
                      <strong>
                        <Text4 text="Crystal display" />
                      </strong>
                    </div>
                    <p>
                      Experience crystal-clear colors that are fine-tuned to
                      deliver a naturally crisp and vivid picture.
                    </p>
                    <div>
                      <strong>
                        <Text4 text="Universal guide" />
                      </strong>
                    </div>
                    <p>
                      Powerful AI technology recommends streaming and live TV
                      content all in one simple onscreen guide.
                    </p>
                    <div>
                      <strong>
                        <Text4 text="Crystal Processor 4K" />
                      </strong>
                    </div>
                    <p>
                      The ultrafast processor transforms everything you watch
                      into stunning 4K.
                    </p>
                  </div>
                </div>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#mb__overview__accordian"
                >
                  <div className="accordion-body">
                    <Heading7 text="Specifications" />
                    <br />
                    <Heading7 text="Key Specs" />
                    <div>
                      <strong>
                        <Text4 text="Model" />
                      </strong>
                    </div>
                    <p>UN55TU7000FXZASKU</p>
                    <div>
                      <strong>
                        <Text4 text="SKU" />
                      </strong>
                    </div>
                    <p>UN55TU7000FXZASKU</p>
                    <div>
                      <strong>
                        <Text4 text="Resolution" />
                      </strong>
                    </div>
                    <p>4K (2160p)</p>
                  </div>
                </div>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#mb__overview__accordian"
                >
                  <div className="accordion-body">
                    <Heading7 text="Reviews" />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* overview section end */}

        <hr className="mb__block__bottom__line" />

        {/* expert recmndation start */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mb__exp__rd__block">
              <Heading1 text="Our experts Recommendation" />
              <div className="row mb__exp__rd__main__block">
                <div className="col-12 col-lg-12 col-xl-9 row mb__exp__rd__left__block">
                  {product.relatedProducts[0].products
                    .slice(0, 4)
                    .map((product, productIndex) => {
                      return (
                        <div
                          key={product.id}
                          className="col-6 col-sm-6 col-xxl-3"
                        >
                          <ExpertProducts product={product} />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* expert recmndation end */}

        <hr className="mb__block__bottom__line" />

        <div className="mb__people__bought__sec mb-5 container-fluid">
          <CarouselTypeTwo
            productDetailPage={true}
            sectionTitle="People Who Bought Also Bought"
            carouselData={product.relatedProducts[0].products}
            productType="productOne"
            containerClassName="carouselTypeTwo__inner__block"
          />
        </div>

        <hr className="mb__block__bottom__line" />

        <div className="mb__people__bought__sec mb-5 container-fluid">
          <SimilarProducts
            productType="productTwo"
            productDetailPage={true}
            sectionTitle={product.relatedProducts[0].title}
            containerClassName="pd__similar__products__block"
            carouselData={product.relatedProducts[0].products}
          />
        </div>
      </div>
      <div className="mb__pdp__sticky__add__to__cart__container">
        <div className="mb__pdp__sticky__add__to__cart__block">
          <button className="addToCart__button">
            <img src={shopping_cart} alt="" className="addToCart__icon" />
            Add To Cart
          </button>
          <button className="buynow___button">BUY NOW</button>
        </div>
      </div>
    </>
  );
}

export default Mobile_Product_Detail_Page;
