import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import TopNavbar from "../Components/TopNavbar";
import "./../SCSS/_home.scss";



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

import threeProducts_01 from "./../Assets/ThreeProducts/threeProducts_01.png";
import threeProducts_02 from "./../Assets/ThreeProducts/threeProducts_02.png";
import threeProducts_03 from "./../Assets/ThreeProducts/threeProducts_03.png";

import blog_01 from "./../Assets/Blog/blog_01.png";
import blog_02 from "./../Assets/Blog/blog_02.png";
import blog_03 from "./../Assets/Blog/blog_03.png";



import shipping from "./../Assets/Services/shipping.svg"
import secure_payments from "./../Assets/Services/secure_payments.svg"
import exclusive_offers from "./../Assets/Services/exclusive_offers.svg"
import installation from "./../Assets/Services/installation.svg"

import NewArrival from "../Components/NewArrival";
import TopTrending from "../Components/TopTrending";
import DealsOfTheWeek from "../Components/DealsOfTheWeek";
import TopRatedProducts from "../Components/TopRatedProducts";
import FeatureProducts from "../Components/FeatureProducts";
import ThreeProducts from "../Components/ThreeProducts";
import Feeds from "../Components/Feeds";
import OurBlogs from "../Components/OurBlogs";
import VideoLogs from "../Components/VideoLogs";
import Services from "../Components/Services";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

const newArrivalData = [
  {
    id: 0,
    image: newArrivals_01,
    productName: "Camera",
    rating: 4.5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 1,
    image: newArrivals_02,
    productName: "Silver Porto Headset",
    rating: 3,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 3,
    image: newArrivals_03,
    productName: "Car Audio Speaker KM100",
    rating: 3.5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 4,
    image: newArrivals_04,
    productName: "Sony Viao Laptop",
    rating: 2.5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 5,
    image: newArrivals_05,
    productName: "Network Camera",
    rating: 5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 6,
    image: newArrivals_01,
    productName: "Camera",
    rating: 3.2,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 7,
    image: newArrivals_02,
    productName: "Silver Porto Headset",
    rating: 4.8,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 8,
    image: newArrivals_03,
    productName: "Car Audio Speaker KM100",
    rating: 2,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 9,
    image: newArrivals_04,
    productName: "Sony Viao Laptop",
    rating: 1,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 10,
    image: newArrivals_05,
    productName: "Network Camera",
    rating: 3,
    oldPrice: 1999,
    price: 1699,
  },
];
const topTrendingData = [
  {
    id: 0,
    image: topTrending_01,
    productName: "SONY, ILCE-7M3",
    rating: 4.5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 1,
    image: topTrending_02,
    productName: "Smart TV (Android TV)",
    rating: 3,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 3,
    image: topTrending_03,
    productName: "Portable Wireless Speaker",
    rating: 3.5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 4,
    image: topTrending_04,
    productName: "DualSense Wireless Controller",
    rating: 2.5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 5,
    image: topTrending_05,
    productName: "Charger Cable",
    rating: 5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 6,
    image: topTrending_01,
    productName: "SONY, ILCE-7M3",
    rating: 3.2,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 7,
    image: topTrending_02,
    productName: "Smart TV (Android TV)",
    rating: 4.8,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 8,
    image: topTrending_03,
    productName: "Portable Wireless Speaker",
    rating: 2,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 9,
    image: topTrending_04,
    productName: "DualSense Wireless Controller",
    rating: 1,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 10,
    image: topTrending_05,
    productName: "Charger Cable",
    rating: 3,
    oldPrice: 1999,
    price: 1699,
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
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 1,
    image: topRated_02,
    productName: "HD Camera for PlayStation 5",
    rating: 3,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 2,
    image: topRated_03,
    productName: "Playstation Media Controller",
    rating: 3.5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 3,
    image: topRated_04,
    productName: "Playstation Wireless Headset",
    rating: 2.5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 4,
    image: topRated_05,
    productName: "ODS-D380U",
    rating: 5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 5,
    image: topRated_06,
    productName: "Network Camera System",
    rating: 3.2,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 6,
    image: topRated_07,
    productName: "Bravia TV HD",
    rating: 4.8,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 7,
    image: topRated_08,
    productName: "Portable Wireless Speaker",
    rating: 2,
    oldPrice: 1999,
    price: 1699,
  },


];
const threeProductsData = [
  {
    id: 0,
    image: threeProducts_01,
    productName: "Video Cameras",
    rating: 4.5,
    oldPrice: 1999,
    prize: 1699,
  },
  {
    id: 1,
    image: threeProducts_02,
    productName: "Car Audio",
    rating: 3,
    oldPrice: 1999,
    prize: 1699,
  },
  {
    id: 2,
    image: threeProducts_03,
    productName: "Storage & Cables",
    rating: 3.5,
    oldPrice: 1999,
    prize: 1699,
  },
];

const ourBlogsData = [
  {
    id: 1,
    image: blog_01,
    title: "Exciting Offer For You!!!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vero facere iste quas! Odio itaque fugit dicta doloremque suscipit laudantium corporis culpa assumenda eveniet. Tempore!",
    date: "16-04-2022",
  },
  {
    id: 2,
    image: blog_02,
    title: "Covid-19 Service Support Update",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vero facere iste quas! Odio itaque fugit dicta doloremque suscipit laudantium corporis culpa assumenda eveniet. Tempore!",
    date: "14-04-2022",
  },
  {
    id: 3,
    image: blog_03,
    title: "Register Product avail 3 years warrenty",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vero facere iste quas! Odio itaque fugit dicta doloremque suscipit laudantium corporis culpa assumenda eveniet. Tempore!",
    date: "12-04-2022",
  },
];
const videoLogsData = [
  {
    id: 1,
    image: blog_01,
    title: "Sony Smartphone Division Revenue",
  },
  {
    id: 2,
    image: blog_02,
    title: "Sony looks to electric cars for next big hit",
  },
  {
    id: 3,
    image: blog_03,
    title: "Sony hat den DualSense Controller",
  },
  {
    id: 4,
    image: blog_03,
    title: "Sony and Honda to built Sell EVs by 2025",
  },
  {
    id: 5,
    image: blog_03,
    title: "Sony a7 IV reviews",
  },
  {
    id: 6,
    image: blog_03,
    title: "Sony unveils the experiance pro-1",
  },
];
const servicesData = [
  {
    id: 1,
    image: shipping,
    title: "Free Shipping",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo temporibus repellat similique autem quisquam. Expedita ipsam iure alias error sint laborum nemo eius repudiandae",
  },
  {
    id: 2,
    image: secure_payments,
    title: "Secure Payments",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo temporibus repellat similique autem quisquam. Expedita ipsam iure alias error sint laborum nemo eius repudiandae",
  },
  {
    id: 3,
    image: exclusive_offers,
    title: "Exclusive Offers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo temporibus repellat similique autem quisquam. Expedita ipsam iure alias error sint laborum nemo eius repudiandae",
  },
  {
    id: 4,
    image: installation,
    title: "Hassle Free Installation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo temporibus repellat similique autem quisquam. Expedita ipsam iure alias error sint laborum nemo eius repudiandae",
  },

  
];

function Home() {
  return (
    <>
      <TopNavbar />
      {/* <Navbar/> */}
      <Banner />

      <FeatureProducts />

      <NewArrival sectionTitle="New Arriaval" carouselData={newArrivalData} />
      <TopTrending sectionTitle="Top Trending" carouselData={topTrendingData} />
      <DealsOfTheWeek dealsoftheweekData={dealsoftheweekData} />
      <TopRatedProducts productData={topRatedProductsData} />
      <div className="container-fluid adImage__container">
        <div className=" adImage">
          <div className="adImage__block">
            <img src={banner_01} alt="" className="adImage__image" />
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
      

      <ThreeProducts threeProductsData={threeProductsData} />
      <Feeds />
      <OurBlogs ourBlogsData={ourBlogsData} />
      <VideoLogs videoLogsData={videoLogsData} />
      <Services servicesData={servicesData} />
      <NewsLetter/>
      <Footer/>

      {/* <Banner /> */}
    </>
  );
}

export default Home;
