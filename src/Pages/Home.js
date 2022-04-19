import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import TopNavbar from "../Components/TopNavbar";
import "./../SCSS/_home.scss";

import feature_product_01 from "./../Assets/FeatureProduct/feature_product_01.png";
import feature_product_02 from "./../Assets/FeatureProduct/feature_product_02.png";
import feature_product_03 from "./../Assets/FeatureProduct/feature_product_03.png";
import feature_product_04 from "./../Assets/FeatureProduct/feature_product_04.png";
import feature_product_05 from "./../Assets/FeatureProduct/feature_product_05.png";

import newArrivals_01 from "./../Assets/NewArrivals/newArrivals_01.png";
import newArrivals_02 from "./../Assets/NewArrivals/newArrivals_02.png";
import newArrivals_03 from "./../Assets/NewArrivals/newArrivals_03.png";
import newArrivals_04 from "./../Assets/NewArrivals/newArrivals_04.png";
import newArrivals_05 from "./../Assets/NewArrivals/newArrivals_05.png";

import topTrending_01 from "./../Assets/TopTrending/topTrending_01.png";
import topTrending_02 from "./../Assets/TopTrending/topTrending_02.png";
import topTrending_03 from "./../Assets/TopTrending/topTrending_03.png";
import topTrending_04 from "./../Assets/TopTrending/topTrending_04.png";
import topTrending_05 from "./../Assets/TopTrending/topTrending_05.png";

import deals_01 from "./../Assets/Deals/deals_01.png";
import deals_02 from "./../Assets/Deals/deals_02.png";

import topRated_01 from "./../Assets/TopRated/topRated_01.png";
import topRated_02 from "./../Assets/TopRated/topRated_02.png";
import topRated_03 from "./../Assets/TopRated/topRated_03.png";
import topRated_04 from "./../Assets/TopRated/topRated_04.png";
import topRated_05 from "./../Assets/TopRated/topRated_05.png";
import topRated_06 from "./../Assets/TopRated/topRated_06.png";
import topRated_07 from "./../Assets/TopRated/topRated_07.png";
import topRated_08 from "./../Assets/TopRated/topRated_08.png";

import banner_01 from "./../Assets/Banner/banner_01.png";

import threeProducts_01 from "./../Assets/ThreeProducts/threeProducts_01.png"
import threeProducts_02 from "./../Assets/ThreeProducts/threeProducts_02.png"
import threeProducts_03 from "./../Assets/ThreeProducts/threeProducts_03.png"


import NewArrival from "../Components/NewArrival";
import TopTrending from "../Components/TopTrending";
import DealsOfTheWeek from "../Components/DealsOfTheWeek";
import TopRatedProducts from "../Components/TopRatedProducts";

const newArrivalData = [
  {
    id: 0,
    image: newArrivals_01,
    productName: "Camera",
    rating: 4.5,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 1,
    image: newArrivals_02,
    productName: "Silver Porto Headset",
    rating: 3,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 3,
    image: newArrivals_03,
    productName: "Car Audio Speaker KM100",
    rating: 3.5,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 4,
    image: newArrivals_04,
    productName: "Sony Viao Laptop",
    rating: 2.5,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 5,
    image: newArrivals_05,
    productName: "Network Camera",
    rating: 5,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 6,
    image: newArrivals_01,
    productName: "Camera",
    rating: 3.2,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 7,
    image: newArrivals_02,
    productName: "Silver Porto Headset",
    rating: 4.8,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 8,
    image: newArrivals_03,
    productName: "Car Audio Speaker KM100",
    rating: 2,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 9,
    image: newArrivals_04,
    productName: "Sony Viao Laptop",
    rating: 1,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 10,
    image: newArrivals_05,
    productName: "Network Camera",
    rating: 3,
    oldPrize: 1999,
    prize: 1699,
  },
];
const topTrendingData = [
  {
    id: 0,
    image: topTrending_01,
    productName: "SONY, ILCE-7M3",
    rating: 4.5,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 1,
    image: topTrending_02,
    productName: "Smart TV (Android TV)",
    rating: 3,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 3,
    image: topTrending_03,
    productName: "Portable Wireless Speaker",
    rating: 3.5,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 4,
    image: topTrending_04,
    productName: "DualSense Wireless Controller",
    rating: 2.5,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 5,
    image: topTrending_05,
    productName: "Charger Cable",
    rating: 5,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 6,
    image: topTrending_01,
    productName: "SONY, ILCE-7M3",
    rating: 3.2,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 7,
    image: topTrending_02,
    productName: "Smart TV (Android TV)",
    rating: 4.8,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 8,
    image: topTrending_03,
    productName: "Portable Wireless Speaker",
    rating: 2,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 9,
    image: topTrending_04,
    productName: "DualSense Wireless Controller",
    rating: 1,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 10,
    image: topTrending_05,
    productName: "Charger Cable",
    rating: 3,
    oldPrize: 1999,
    prize: 1699,
  },
];

const dealsoftheweekData = [
  {
    id: 0,
    image: deals_01,
  },
  {
    id: 1,
    image: deals_02,
  },
];
const topRatedProductsData = [
  {
    id: 0,
    image: topRated_01,
    productName: "DualSense Wireless Controller",
    rating: 4.5,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 1,
    image: topRated_02,
    productName: "HD Camera for PlayStation 5",
    rating: 3,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 2,
    image: topRated_03,
    productName: "Playstation Media Controller",
    rating: 3.5,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 3,
    image: topRated_04,
    productName: "Playstation Wireless Headset",
    rating: 2.5,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 4,
    image: topRated_05,
    productName: "ODS-D380U",
    rating: 5,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 5,
    image: topRated_06,
    productName: "Network Camera System",
    rating: 3.2,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 6,
    image: topRated_07,
    productName: "Bravia TV HD",
    rating: 4.8,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 7,
    image: topRated_08,
    productName: "Portable Wireless Speaker",
    rating: 2,
    oldPrize: 1999,
    prize: 1699,
  },
  
];
const threeProductsData = [
  {
    id: 0,
    image: threeProducts_01,
    productName: "Video Cameras",
    rating: 4.5,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 1,
    image: threeProducts_02,
    productName: "Car Audio",
    rating: 3,
    oldPrize: 1999,
    prize: 1699,
  },
  {
    id: 2,
    image: threeProducts_03,
    productName: "Storage & Cables",
    rating: 3.5,
    oldPrize: 1999,
    prize: 1699,
  },
  
];

function Home() {
  return (
    <>
      <TopNavbar />
      {/* <Navbar/> */}
      <Banner />
      <div className="container-fluid feature__category__container">
        <div className="container feature__category__block">
          <div className="row inner__feature__category__block">
            <div className="first__feature__category__block">
              <div className="first__feature__category">
                <p className="first__feature__category__title">Playstations</p>
                <p className="first__feature__category__subtitle">
                  Find out Why This Is the Go-To Lens for So many Photographers
                </p>

                <img
                  src={feature_product_01}
                  alt=""
                  className="first__feature__category__image"
                />
              </div>
            </div>
            <div className=" second__feature__category__block">
              <div className="feature__category first__in__column">
                <div className="second__feature__category__image__block">
                  <img
                    src={feature_product_02}
                    alt=""
                    className="second__feature__category__image"
                  />
                </div>
                <p className="second__feature__category__title">Cameras</p>
                <p className="second__feature__category__subtitle">
                  Find out Why This Is the Go-To Lens for So many Photographers
                </p>
              </div>
              <div className="feature__category">
                <div className="second__feature__category__image__block">
                  <img
                    src={feature_product_03}
                    alt=""
                    className="second__feature__category__image"
                  />
                </div>
                <p className="second__feature__category__title">Headphones</p>
                <p className="second__feature__category__subtitle">
                  Find out Why This Is the Go-To Lens for So many Photographers
                </p>
              </div>
            </div>
            <div className=" second__feature__category__block">
              <div className="feature__category first__in__column">
                <div className="second__feature__category__image__block">
                  <img
                    src={feature_product_04}
                    alt=""
                    className="second__feature__category__image"
                  />
                </div>
                <p className="second__feature__category__title">Television</p>
                <p className="second__feature__category__subtitle">
                  Find out Why This Is the Go-To Lens for So many Photographers
                </p>
              </div>
              <div className="feature__category">
                <div className="second__feature__category__image__block">
                  <img
                    src={feature_product_05}
                    alt=""
                    className="second__feature__category__image"
                  />
                </div>
                <p className="second__feature__category__title">Laptops</p>
                <p className="second__feature__category__subtitle">
                  Find out Why This Is the Go-To Lens for So many Photographers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewArrival sectionTitle="New Arriaval" carouselData={newArrivalData} />
      <TopTrending sectionTitle="Top Trending" carouselData={topTrendingData} />
      <DealsOfTheWeek dealsoftheweekData={dealsoftheweekData} />
      <TopRatedProducts productData={topRatedProductsData} />
      <div className="container-fluid adImage__container">
        <div className="container adImage">
          <div className="adImage__block">
            <img src={banner_01} alt="" className="adImage__image" />
          </div>
        </div>
      </div>
      <div className="container-fluid three__products__container">
        <div className="container three__products__block">
          <div className="row three__products__row">
            {threeProductsData.slice(0, 3).map((product, productIndex) => {
              return (
                <div className="col-4 three__product__block">
                  <div className="ineer__three__product__block">
                    <div className="three__product__image__block">
                      <img
                        src={product.image}
                        alt=""
                        className="three__product__image"
                      />
                    </div>
                    <p className="three__product__name">
                      {product.productName}
                    </p>
                    <p className="three__product__description">
                      Find out Why This Is the Go-To Lens for So many
                      Photographers
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container-fluid feed__container">
        <div className="container feed__block">
          <div className="row feed__row">
            <div className="col-12 col-sm-4 feed">
              <p className="feed__title">Latest News</p>
            </div>
            <div className="col-12 col-sm-4 feed">
              <p className="feed__title">Facebook Feeds</p>
            </div>
            <div className="col-12 col-sm-4 feed">
              <p className="feed__title">Instagram Feeds</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid ourBlogs__container">
        <div className="container ourBlogs__block">
          <div className="row ourBlogs__row">
            <div className="col-4 feed">
              <h1 className="feed__title">Latest News</h1>
            </div>
            <div className="col-4 feed">
              <h1 className="feed__title">Facebook Feeds</h1>
            </div>
            <div className="col-4 feed">
              <h1 className="feed__title">Instagram Feeds</h1>
            </div>
          </div>
        </div>
      </div> */}
      
      <Banner />
    </>
  );
}

export default Home;
