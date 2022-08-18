import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./../SCSS/_productDetailsPage.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import { Rating } from "react-simple-star-rating";
import * as services from './../services/services'

import BreadCrumbs from "../Components/BreadCrumbs";
import CarouselTypeTwo from "../Components/CarouselTypeTwo";
import ProductCarousel from "../Components/ProductCarousel";
import ProductContainer from "../Components/ProductContainer";
// import product_01 from "./../assets/NewArrivals/newArrivals_01.png";

import sony_logo from "./../assets/Icon/sony_logo.svg";
import black_favorite from "./../assets/Icon/black_favorite.svg";
import empty_favourite from "./../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../assets/Icon/fulfill_favourite.svg";
import black_down_arrow from "./../assets/Icon/black_down_arrow.svg";
import unlock from "./../assets/Icon/unlock.svg";
import grey_right_arrow from "./../assets/Icon/grey_right_arrow.svg";
import return_period from "./../assets/Icon/return_period.svg";
import pickup_store from "./../assets/Icon/pickup_store.svg";
import add_to_cart from "./../assets/Icon/add_to_cart.svg";
import plus from "./../assets/Icon/plus.svg";
import minus from "./../assets/Icon/minus.svg";

import shopping_cart from "./../assets/Icon/shopping_cart.svg";
import add_cart_black from "./../assets/Icon/add_cart_black.svg";

import facebook from "./../assets/Icon/facebook.png";
import twitter from "./../assets/Icon/twitter.png";
import messanger from "./../assets/Icon/messanger.png";
import whatsapp from "./../assets/Icon/whatsapp.png";
import pinterest from "./../assets/Icon/pinterest.png";

import product_01 from "./../assets/Product/product_01.png";
import product_02 from "./../assets/Product/product_02.png";
import product_03 from "./../assets/Product/product_03.png";
import product_04 from "./../assets/Product/product_04.png";
import product_05 from "./../assets/Product/product_05.png";

import newArrivals_01 from "./../assets/NewArrivals/newArrivals_01.png";
import newArrivals_02 from "./../assets/NewArrivals/newArrivals_02.png";
import newArrivals_03 from "./../assets/NewArrivals/newArrivals_03.png";
import newArrivals_04 from "./../assets/NewArrivals/newArrivals_04.png";
import newArrivals_05 from "./../assets/NewArrivals/newArrivals_05.png";
import { Link } from "react-router-dom";
import { renderIntoDocument } from "react-dom/test-utils";
import ExpertProducts from "../Components/ProductType/ExpertProducts";
import Accordian from "../Components/Accordian";
import SimilarProducts from "../Components/SimilarProducts";
import Protecttion from "../Components/MostSharedComponent/Protection";
import Heading3 from "../Components/Font/Heading3";
import RatingBlock from "../Components/MostSharedComponent/RatingBlock";
import Price from "../Components/Font/Price";
import OldPrice from "../Components/Font/OldPrice";
import Heading7 from "../Components/Font/Heading7";
import Text3 from "../Components/Font/Text3";
import Text4 from "../Components/Font/Text4";
import AvailableOffers from "../Components/MostSharedComponent/AvailableOffers";
import PickupStore from "../Components/MostSharedComponent/PickupStore";
import Heading5 from "../Components/Font/Heading5";
import SuperCoin from "../Components/MostSharedComponent/SuperCoin";
import PriceBlock from "../Components/MostSharedComponent/PriceBlock";
import Heading1 from "../Components/Font/Heading1";
import Heading6 from "../Components/Font/Heading6";
import { getProductDetail } from "../services/pdp.service";
import { addToCart, deleteFromCart } from "../services/cart.service";
import { loadAddToWishlist, loadCartData, loadDeleteFromWishlist, loadProductDetailData, loadWishlistData } from "../redux/appAction";
import MobileProductDetailPage from "./MobilePages/Mobile_Product_Detail_Page";
import {
  addToWishlist,
  checkForWishlist,
  deleteFromWishlist,
} from "../services/wishlist.services";
import dynamic from 'next/dynamic';
import ReviewTestFreaks from "./ReviewTestFreaks";


function Product_Details_Page({handleChangeCartPopup}) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [productAvailableOffer, setProductAvailableOffer] = useState([
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
  ]);
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
  // const dataLocation = useLocation()
  // console.log(dataLocation);
  // const dataNavigate = useNavigate()
  // console.log(dataNavigate);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductDetailData(id.replace(/[/]/g, "%2F")));
  }, [id]);
  const productData = useSelector((state) => state.appData.productData);
  // console.log("before",productData);
  // console.log(Object.values(productData).length);
  useEffect(() => {
    if (Object.values(productData).length !== 0) {
      setProduct(productData);
      setLoading(false);
      window.scrollTo(0,0)
      // console.log(product.reviewSummary.totals);
    }
  }, [productData]);

  // console.log("useEffect",productData);
  // console.log(product.reviewSummary.totals);

  const [pincode, setPincode] = useState("");
  const [count, setCount] = useState(1);

  const deleteProductFromCart = async (id) => {
    console.log("id ", id);

    const data = {
      // items: [id],
      items: [id],
    };
    console.log("data ", data);

    await deleteFromCart(data)
      .then((res) => {
        console.log(res, "res>>>");
        dispatch(loadCartData());
      })
      .catch((err) => {
        console.log(err.response.data.message, "error >>>>");
        // dispatch(services.notifyError({ message: err.response.data.message }));
      });
  };
  const decreaseCount = (sku) => {
    if (count === 0) {
      setCount(0);
    } else {
      // deleteProductFromCart(product.id)
      setCount(count - 1);
      // AddProductToCart(sku,count-1)
    }
  };
  const increaseCount = (sku) => {
    // deleteProductFromCart(product.id)
    setCount(count + 1);
    // AddProductToCart(sku,count+1)
  };
    
  const AddProductToCart = (sku,id) => {
    // deleteProductFromCart(id)
    const data = {
      items: [
        {
          sku: sku,
          qty: count,
        },
      ],
    };
    addToCart(data)
      .then((res) => {
        setCount(res.data.filter((pro) => pro.sku === product.sku)[0].qty);
        dispatch(loadCartData());
        handleChangeCartPopup(true)
      })
      .catch((err) => {
        console.log(err.response.data.message, "error >>>>");
        dispatch(services.notifyError({ message: err.response.data.message }));
      });
  };
  const handleChange = (e) => {
    setPincode(e.target.value);
  };
  const handleSubmit = () => {
    console.log(pincode);
  };
  const [sizeButtonIndex, setSizeButtonIndex] = useState(0);
  const sizeButtonClick = (sizeIndex, cm, inch) => {
    console.log(sizeIndex, cm, inch);
    setSizeButtonIndex(sizeIndex);
  };

  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [wislistCount, setWislistCount] = useState(0);

  useEffect(async () => {
    const isFavouriteData = await checkForWishlist(
      product?.sku?.replace(/[/]/g, "%2F")
    );
    console.log(product.sku);
    console.log(isFavouriteData);
    setIsFavourite(isFavouriteData);
  }, [product]);
  const handleFavourite = () => {
    if (isFavourite) {
      setIsFavourite(false);
      setWislistCount(wislistCount + 1);
    } else {
      setIsFavourite(true);
      setWislistCount(wislistCount + 1);
    }
  };
  useEffect(() => {
    const data = {
      items: [product.sku],
    };
    if (isFavourite) {
      if (wislistCount > 0) {
        const addToWishlistData = dispatch(loadAddToWishlist(data)).then(
          (res) => {
            console.log(res);
            dispatch(loadWishlistData());
          }
        );
      }
    } else {
      if (wislistCount > 0) {
        if (!isFavourite) {
          removeFromWL(product.sku);
        }
      }
    }
  }, [isFavourite]);

  const removeFromWL = (sku) => {
    const data = {
      items: [sku],
    };
    const deleteFromWishlistData = dispatch(loadDeleteFromWishlist(data)).then(
      (res) => {
        console.log(res);
        dispatch(loadWishlistData());
      }
    );
  };
  
  
  if (loading) {
    return <h1>Product Loading...</h1>;
  }
  return (
    <>
      {/* <TopNavbar /> */}

      <div className="bg-white d-none d-lg-block">
        <BreadCrumbs title="Z8H | Full Array LED | 8K | High Dynamic Range" />
      </div>
      {/* mobile pdp page */}
      <div className="mobile__product__detail__page d-block d-lg-none">
        <MobileProductDetailPage product={product} />
      </div>
      {/* mobile pdp page end */}

      <div className="container-fluid product__details__page__container d-none d-lg-block">
        <div className="row product__details__page__block">
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 row product__details__left__block">
            <div className="row products__details__inner__block">
              <div className="col-12 col-sm-12 col-md-6 product__carousel__main__block">
                <div className="product__carousel__block">
                  <ProductCarousel
                    productImageData={product.media.image.screenshots}
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 product__details__block">
                <img
                  src={sony_logo}
                  alt=""
                  className="pd__product__company__logo"
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
                </div>
                <Text3
                  // text={product.categoryTagline}
                  text="Experience the brilliance of big-screen Sony 8K HDR"
                  color="#808080"
                  marginBottom={10}
                />
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
                {/* <div className="row pdp__sticky__counter__block">
                  <div
                    onClick={() => decreaseCount()}
                    className="col-4 counter__decrease__block"
                  >
                    <img src={minus} alt="minus" />
                  </div>
                  <div className="col-4 counter">{count}</div>
                  <div
                    onClick={() => increaseCount()}
                    className="col-4 counter__increase__block"
                  >
                    <img src={plus} alt="plus" />
                  </div>
                </div> */}
                <hr className="pd__block__bottom__line" />

                {/* Price Block */}
                <PriceBlock
                  oldPrice={product.price_rounded + 200}
                  price={product.price_rounded}
                  currency={product.currency}
                  monthlySavingTagline="get it for SAR 500 in 6 equal installments"
                />

                {/* Unlock MemberShip Block */}
                <div className="pd__unlock__membership__block">
                  <div className="pd__unlock__membership">
                    <div className="pd__icon__block">
                      <img src={unlock} alt="" className="pd__unlock__icon" />
                    </div>

                    <p className="pd__unlock__membership__text">
                      Unlock up to 24 months of Best Buy Protection with our
                      Sony Membership
                    </p>
                  </div>
                  <img
                    src={grey_right_arrow}
                    alt=""
                    className="pd__gret__right__arrow__icon"
                  />
                </div>

                {/* Return Policy Block  */}
                <div className="pd__return__block ">
                  <div className="pd__icon__block">
                    <img
                      src={return_period}
                      alt=""
                      className="pd__return_period_icon"
                    />
                  </div>
                  <div className="pd__return__text__block">
                    <Heading7 text={`15-Days Return Policy`} />
                    <Text3
                      text="If received today, the last day to return this item would be Apr 15."
                      marginBottom={0}
                    />
                    <Link to="/learnmore" className="pd__learn__more__link">
                      {"Learn more >"}
                    </Link>
                  </div>
                </div>

                <hr className="pd__block__bottom__line" />

                {/* Available Offer */}
                <AvailableOffers
                  availableOffer={productAvailableOffer}
                  title="Available Offers"
                />

                <hr className="pd__block__bottom__line" />

                {/* Warranty Block */}
                <div className="pd__warranty__size__block pd__common__main__block">
                  <div className="row pd__warranty__block">
                    <p className="col-3 pd__warranty__title">Warranty :</p>
                    <p className="col-9 pd__warranty__text">
                      {productWarrentyBlock.warrantyText}
                    </p>
                  </div>
                  <div className="row pd__size__block">
                    <p className="col-3 col-sm-3 col-md-12 col-lg-3 pd__size__title">
                      Size :
                    </p>
                    <div className="col-9 col-sm-9 col-md-12 col-lg-9 pd__size__button__block">
                      {productWarrentyBlock.size.map((size, sizeIndex) => {
                        return (
                          <button
                            key={size.id}
                            onClick={() =>
                              sizeButtonClick(sizeIndex, size.cm, size.inch)
                            }
                            className={
                              sizeButtonIndex === sizeIndex
                                ? "pd__size__button__active"
                                : "pd__size__button"
                            }
                          >{`${size.cm} cm (${size.inch})`}</button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <hr className="pd__block__bottom__line" />

                {/* Delivery Block % Pickup Store */}
                <div className="pd__delivery__block pd__common__main__block">
                  <Heading5 text="Delivery" marginBottom={20} />
                  <div className="pd__form__block">
                    <div className="pd__form__field">
                      <input
                        type="number"
                        inputMode="numeric"
                        className="pd__input__field"
                        placeholder="Enter Delivery Code"
                        name="pincode"
                        value={pincode}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="pd__form__field">
                      <button
                        type="submit"
                        className="pd__input__button"
                        onClick={handleSubmit}
                      >
                        CHECK
                      </button>
                    </div>
                  </div>
                  <Heading7
                    text={productDelivery.deliveryText}
                    marginBottom={0}
                  />
                  <Text3
                    text=" Enter pincode for exact delivery dates/charges"
                    color="#808080"
                    marginBottom={0}
                  />
                  <PickupStore
                    delivery={productDelivery}
                    title="Pick Up From Store"
                  />
                </div>

                <hr className="pd__block__bottom__line" />

                {/* Pretection Block */}
                <Protecttion
                  title="Protect Your TV"
                  tagline="Most popular protection plan for your product"
                  rating={product.reviewSummary.avg}
                  totalRatings={Object.values(
                    product.reviewSummary.totals
                  ).reduce((a, b) => a + b)}
                  protection={productProtection}
                />

                <hr className="pd__block__bottom__line" />

                {/* Super Coin Block */}
                <SuperCoin />

                <hr className="pd__block__bottom__line" />

                {/* Button Block */}
                <div className="row pd__bundle__cart__button__block pd__common__main__block">
                  <div className="col-xl-6 mb-1  pe-0 pe-xl-1 pd__bundle__button__block">
                    <div className="pd__bundle__button">Build A Bundle</div>
                  </div>
                  <div className="col-xl-6 mb-1 ps-0 ps-xl-1 pd__addToCart__button__block">
                    <div
                      className="pd__addToCart__button"
                      onClick={() => AddProductToCart(product.sku,product.id)}
                    >
                      <img
                        src={shopping_cart}
                        alt=""
                        className="pd__addToCart__icon"
                      />
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 exp__rd__block">
              <Heading1 text="Our experts Recommendation" />
              <div className="row exp__rd__main__block">
                <div className="col-12 col-lg-12 col-xl-9 row exp__rd__left__block">
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
                <div className="col-12 col-lg-12 col-xl-3 exp__rd__package__block">
                  <div className="exp__rd__package__inner__block">
                    <div className="exp__rd__package__saving__block">
                      <p className="package__saving__text">
                        {" "}
                        <Text3 text="Package Savings" marginBottom={0} />
                      </p>
                      <p className="package__saving__price">
                        <Price
                          currency={product.currency}
                          price={99}
                          size="heading5"
                        />
                      </p>
                    </div>
                    <div className="exp__rd__package__total__block">
                      <p className="package__total__text">
                        {" "}
                        <Heading6 text="Package Total" marginBottom={0} />
                      </p>
                      <p className="package__total__price">
                        {" "}
                        <Price
                          currency={product.currency}
                          price={1999}
                          size="heading5"
                        />
                      </p>
                    </div>

                    <div className="exp__rd__addToCart__button">
                      <img
                        src={shopping_cart}
                        alt=""
                        className="exp__rd__addToCart__icon"
                      />
                      ADD 4 ITEMS TO CART
                    </div>

                    <p className="exp__rd__package__link__text">
                      <Link to="/products/1" className="exp__rd__package__link">
                        {`Build your own package>`}{" "}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            <ReviewTestFreaks/>
            </div>
            {/* <Accordian data={productOverviewData} isDescription={true} /> */}
            {/* <Accordian data={productSpecificationData} isDescription={false} /> */}
            <div className="pd__newArrival__block">
              <CarouselTypeTwo
              handleChangeCartPopup={handleChangeCartPopup}
                productDetailPage={true}
                sectionTitle={product.relatedProducts[0].title}
                carouselData={product.relatedProducts[0].products}
                productType="productOne"
                containerClassName="carouselTypeTwo__inner__block"
              />
            </div>
            <div className="pd__similarProducts__block">
              <SimilarProducts
              handleChangeCartPopup={handleChangeCartPopup}
                productType="productTwo"
                productDetailPage={true}
                sectionTitle={product.relatedProducts[0].title}
                containerClassName="pd__similar__products__block"
                carouselData={product.relatedProducts[0].products}
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12  col-lg-3 product__details__right__block">
            <Heading3 price="People Ultimately Bought" />
            <p className="pd__mb__block__title">People Ultimately Bought</p>
            {product.relatedProducts[0].products.map(
              (product, productIndex) => {
                return (
                  <div  key={product.id} className="row pd__mb__product__block">
                    <Link to={`/products/${product.sku.replace(/[/]/g, "%2F")}`} className="col-xxl-4 pd__mb__product__image__block">
                      <img
                        src={product.baseImage}
                        alt=""
                        className="pd__mb__product__image"
                      />
                    </Link>
                    <div className="col-xxl-8 pd__mb__product__detail__block">
                      <Link className="pd__mb__product__name" to={`/products/${product.sku.replace(/[/]/g, "%2F")}`}>
                      <Heading7 text={product.name} />
                      </Link>
                      <RatingBlock
                        size={15}
                        rating={4.5}
                        totalRatings={4199}
                        fillColor="#DC3A1A"
                        emptyColor="#C8C8C8"
                      />
                      <Price
                        price={product.price_rounded}
                        currency={product?.currency}
                        size="heading6"
                        span={true}
                      />

                      <OldPrice
                        oldPrice={product.price_rounded + 200}
                        size="text3"
                        color="#808080"
                        marginLeft={5}
                        marginBottom={0}
                        lineThrough={true}
                        span={true}
                        currency={product?.currency}
                      />

                      <div className="pd__compare__block">
                        <input
                          type="checkbox"
                          className="pd__compare__input__check"
                          name="compare"
                          // onChange={handleChange}
                        />
                        <p className="pd__compare__text">Compare</p>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className="pdp__sticky__add__to__cart__container d-lg-flex d-none">
        <div className="pdp__sticky__add__to__cart__block">
          <div className="row pdp__sticky__counter__block">
            <div
              onClick={() => decreaseCount(product.sku)}
              className="col-4 counter__decrease__block"
            >
              <img src={minus} alt="minus" />
            </div>
            <div className="col-4 counter">{count}</div>
            <div
              onClick={() => increaseCount(product.sku)}
              className="col-4 counter__increase__block"
            >
              <img src={plus} alt="plus" />
            </div>
          </div>
          <Price
            currency={product?.currency}
            price={product?.price_rounded * count}
            size="heading3"
          />
          <Link to={`/checkout`} className="buynow___button">
            Buy Now
          </Link>
          <button className="build__bundle___button">BUILD BUNDLE</button>
          <button
            className="addToCart__button"
            onClick={() =>  AddProductToCart(product.sku,product.id)}
          >
            <img src={shopping_cart} alt="" className="addToCart__icon" />
            Add To Cart
          </button>
        </div>
      </div>
      {/* <NewsLetter /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Product_Details_Page;
