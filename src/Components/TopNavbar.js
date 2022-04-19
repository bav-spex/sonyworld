import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navbar_logo from "./../Assets/Logo/navbar_logo.svg";
import down_arrow from "./../Assets/Icon/down_arrow.svg";
import "./../SCSS/_topNavbar.scss";
import { useLocation } from "react-router";
// import "./../SCSS/_variables.scss"

import search from "./../Assets/Icon/search.svg";
import customer_support from "./../Assets/Icon/customer_support.svg";
import favourite from "./../Assets/Icon/favourite.svg";
import location from "./../Assets/Icon/location.svg";
import shopping_cart from "./../Assets/Icon/shopping_cart.svg";
import user from "./../Assets/Icon/user.svg";

import menu from "./../Assets/Icon/menu.svg";

import product_01 from "./../Assets/Product/product_01.jpg";
import NavbarAdBanner_01 from "./../Assets/NavbarAdBanner/NavbarAdBanner_01.jpg";
import MobilePopup from "./MobilePopup";
const categoryData = [
  {
    id: 1,
    productName: "Play Station",
    category: [
      "Gaming PlayStation 4K",
      "Gaming PlayStation 8K",
      "2021 PlayStation's",
      "Smart 4K PlayStation",
      "Smart 4K PlayStation",
      "Smart 8K PlayStation",
      "Smart OLED PlayStation",
    ],
    productList: [
      {
        id: 0,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
        image: product_01,
      },
      {
        id: 1,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
        image: product_01,
      },
      {
        id: 2,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
        image: product_01,
      },
      {
        id: 3,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
        image: product_01,
      },
      {
        id: 4,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
        image: product_01,
      },
      {
        id: 5,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
        image: product_01,
      },
      {
        id: 6,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
        image: product_01,
      },
      {
        id: 7,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
        image: product_01,
      },
      {
        id: 8,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
        image: product_01,
      },
    ],
    adBanner: [
      {
        id: 0,
        image: NavbarAdBanner_01,
      },
      {
        id: 1,
        image: NavbarAdBanner_01,
      },
      {
        id: 2,
        image: NavbarAdBanner_01,
      },
    ],
  },
  {
    id: 2,
    productName: "Television",
    category: [
      "Gaming TV 4K",
      "Gaming TV 8K",
      "2021 TV's",
      "Smart 4K TV",
      "Smart 4K TV",
      "Smart 8K TV",
      "Smart OLED TV",
    ],
    productList: [
      {
        id: 0,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
        image: product_01,
      },
      {
        id: 1,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
        image: product_01,
      },
      {
        id: 2,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
        image: product_01,
      },
      {
        id: 3,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
        image: product_01,
      },
      {
        id: 4,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
        image: product_01,
      },
      {
        id: 5,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
        image: product_01,
      },
      {
        id: 6,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
        image: product_01,
      },
      {
        id: 7,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
        image: product_01,
      },
      {
        id: 8,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
        image: product_01,
      },
    ],
    adBanner: [
      {
        id: 0,
        image: NavbarAdBanner_01,
      },
      {
        id: 1,
        image: NavbarAdBanner_01,
      },
      {
        id: 2,
        image: NavbarAdBanner_01,
      },
    ],
  },
  {
    id: 3,
    productName: "Camera",
    category: [
      "Gaming Camera 4K",
      "Gaming Camera 8K",
      "2021 Camera's",
      "Smart 4K Camera",
      "Smart 4K Camera",
      "Smart 8K Camera",
      "Smart OLED Camera",
    ],
    productList: [
      {
        id: 0,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
        image: product_01,
      },
      {
        id: 1,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
        image: product_01,
      },
      {
        id: 2,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
        image: product_01,
      },
      {
        id: 3,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
        image: product_01,
      },
      {
        id: 4,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
        image: product_01,
      },
      {
        id: 5,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
        image: product_01,
      },
      {
        id: 6,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
        image: product_01,
      },
      {
        id: 7,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
        image: product_01,
      },
      {
        id: 8,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
        image: product_01,
      },
    ],
    adBanner: [
      {
        id: 0,
        image: NavbarAdBanner_01,
      },
      {
        id: 1,
        image: NavbarAdBanner_01,
      },
      {
        id: 2,
        image: NavbarAdBanner_01,
      },
    ],
  },
  {
    id: 4,
    productName: "Audio",
    category: [
      "Gaming Audio 4K",
      "Gaming Audio 8K",
      "2021 Audio's",
      "Smart 4K Audio",
      "Smart 4K Audio",
      "Smart 8K Audio",
      "Smart OLED Audio",
    ],
    productList: [
      {
        id: 0,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
        image: product_01,
      },
      {
        id: 1,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
        image: product_01,
      },
      {
        id: 2,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
        image: product_01,
      },
      {
        id: 3,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
        image: product_01,
      },
      {
        id: 4,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
        image: product_01,
      },
      {
        id: 5,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
        image: product_01,
      },
      {
        id: 6,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
        image: product_01,
      },
      {
        id: 7,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
        image: product_01,
      },
      {
        id: 8,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
        image: product_01,
      },
    ],
    adBanner: [
      {
        id: 0,
        image: NavbarAdBanner_01,
      },
      {
        id: 1,
        image: NavbarAdBanner_01,
      },
      {
        id: 2,
        image: NavbarAdBanner_01,
      },
    ],
  },
];

function TopNavbar() {
  const { pathname } = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [height, setHeight] = useState(0);
  const [navIndex, setNavIndex] = useState("");
  const [menuIndex, setMenuIndex] = useState(0);
  const [className, setClassName] = useState({
    home: "navbar__link active__navbar__link",
    playstation: "navbar__link",
    television: "navbar__link",
    camera: "navbar__link",
    audio: "navbar__link",
    services: "navbar__link",
    support: "navbar__link",
  });
  const [mobileClassName, setMobileClassName] = useState({
    home: "mobile__navbar__link active__mobile__navbar__link",
    playstation: "mobile__navbar__link",
    television: "mobile__navbar__link",
    camera: "mobile__navbar__link",
    audio: "mobile__navbar__link",
    services: "mobile__navbar__link",
    support: "mobile__navbar__link",
  });
  // const [mobileClassName, setMobileClassName] = useState({
  //   home: "mobile__navbar__link active__mobile__navbar__link",
  //   playstation: "mobile__navbar__link",
  //   television: "mobile__navbar__link",
  //   camera: "mobile__navbar__link",
  //   audio: "mobile__navbar__link",
  //   services: "mobile__navbar__link",
  //   support: "mobile__navbar__link",
  // });

  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileShowPopup, setMobileShowPopup] = useState(false);

  useEffect(() => {
    const onScroll = () => setHeight(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [window.pageYOffset]);

  useEffect(() => {
    if (height > 112) {
      document.querySelector(".main__navbar__container").style.position =
        "fixed";
    } else if (height < 112) {
      document.querySelector(".main__navbar__container").style.position =
        "absolute";
    }
  }, [height]);
  useEffect(() => {
    let path = {
      home: "navbar__link ",
      playstation: "navbar__link",
      television: "navbar__link",
      camera: "navbar__link",
      audio: "navbar__link",
      services: "navbar__link",
      support: "navbar__link",
    };
    let mobilepath = {
      home: "mobile__navbar__link ",
      playstation: "mobile__navbar__link",
      television: "mobile__navbar__link",
      camera: "mobile__navbar__link",
      audio: "mobile__navbar__link",
      services: "mobile__navbar__link",
      support: "mobile__navbar__link",
    };

    if (pathname.includes("/playstation")) {
      path.playstation = "navbar__link active__navbar__link";
      mobilepath.playstation =
        "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/television")) {
      path.television = "navbar__link active__navbar__link";
      mobilepath.television =
        "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/camera")) {
      path.camera = "navbar__link active__navbar__link";
      mobilepath.camera = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/audio")) {
      path.audio = "navbar__link active__navbar__link";
      mobilepath.audio = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/services")) {
      path.services = "navbar__link active__navbar__link";
      mobilepath.services = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/support")) {
      path.support = "navbar__link active__navbar__link";
      mobilepath.support = "mobile__navbar__link active__mobile__navbar__link";
    } else {
      path.home = "active__navbar__link navbar__link";
      mobilepath.home = "mobile__navbar__link active__mobile__navbar__link";
    }
    setClassName(path);
    setMobileClassName(mobilepath);
  }, []);

  const navbarTab__mouseTab = (popupValue, navIndex, menuIndex) => {
    setShowPopup(popupValue);
    setNavIndex(navIndex);
    setMenuIndex(menuIndex);
  };
  const mobileNavbarTab__mouseTab = (popupValue, navIndex, menuIndex) => {
    setMobileShowPopup(popupValue);
    setNavIndex(navIndex);
    setMenuIndex(menuIndex);
  };
  return (
    <>
      <div className="container-fluid main__navbar__container">
        <div
          className="topnavbar__container"
          onMouseEnter={() => navbarTab__mouseTab(false, "")}
        >
          <div className="container  topnavbar">
            <div className="row topnavbar__row">
              <Link
                className="col-5  col-sm-4 col-xl-2  topnavbar__link"
                to="/"
              >
                <img src={navbar_logo} alt="logo" className="topnavbar__logo" />
              </Link>
              <div className="col-5  col-sm-4  col-xl-7 search__box__block">
                <div className="search__box">
                  <input
                    type="text"
                    name="search"
                    className="search__input"
                    placeholder="Type Your Search..."
                  />
                  <img src={search} alt="" className="topnavbar__icon" />
                </div>
              </div>
              <div className="col-2 col-sm-4  col-xl-3  topnavbar__icon__block">
                <img
                  src={location}
                  alt=""
                  className="location topnavbar__icon"
                />
                <img
                  src={customer_support}
                  alt=""
                  className=" customer_support topnavbar__icon"
                />
                <img
                  src={favourite}
                  alt=""
                  className="favourite topnavbar__icon"
                />
                <img src={user} alt="" className="user topnavbar__icon" />
                <img
                  src={shopping_cart}
                  alt=""
                  className="shopping_cart topnavbar__icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="navbar__container">
          <div className="container navbar">
            <div className="navbar__link_block">
              <Link
                // onClick={() => setShowPopup(true)}
                onMouseEnter={() => navbarTab__mouseTab(false, "")}
                className={className.home}
                to="/"
              >
                Home
              </Link>
              <div
                onClick={() => setShowPopup(true)}
                onMouseEnter={() => navbarTab__mouseTab(true, "playstation", 1)}
                // onMouseEnter={() => setNavIndex("playstation")}
                className={
                  navIndex === "playstation"
                    ? "active__navbar__link navbar__link"
                    : className.playstation
                }
                // to="/playstation"
              >
                PlayStation
                <img src={down_arrow} alt="" className="down__arrow__icon" />
              </div>
              <div
                onClick={() => setShowPopup(true)}
                onMouseEnter={() => navbarTab__mouseTab(true, "television", 2)}
                // onMouseEnter={() => setNavIndex("television")}
                className={
                  navIndex === "television"
                    ? "active__navbar__link navbar__link"
                    : className.television
                }
                // to="/television"
              >
                Television
                <img src={down_arrow} alt="" className="down__arrow__icon" />
              </div>
              <div
                onClick={() => setShowPopup(true)}
                onMouseEnter={() => navbarTab__mouseTab(true, "camera", 3)}
                // onMouseEnter={() => setNavIndex("camera")}
                className={
                  navIndex === "camera"
                    ? "active__navbar__link navbar__link"
                    : className.camera
                }
                // to="/camera"
              >
                Camera
                <img src={down_arrow} alt="" className="down__arrow__icon" />
              </div>
              <div
                onClick={() => setShowPopup(true)}
                onMouseEnter={() => navbarTab__mouseTab(true, "audio", 4)}
                // onMouseEnter={() => setNavIndex("audio")}
                className={
                  navIndex === "audio"
                    ? "active__navbar__link navbar__link"
                    : className.audio
                }
                // to="/audio"
              >
                Audio
                <img src={down_arrow} alt="" className="down__arrow__icon" />
              </div>
              <Link
                onMouseEnter={() => navbarTab__mouseTab(false, "")}
                className={className.services}
                to="/services"
              >
                Services
              </Link>
              <Link
                onMouseEnter={() => navbarTab__mouseTab(false, "")}
                className={className.support}
                to="/support"
              >
                Support
              </Link>
            </div>
            <div
              className="icon__block"
              onClick={() => setMobileNavbar(!mobileNavbar)}
            >
              <img src={menu} alt="" className="menu__icon" />
            </div>
          </div>
        </div>

        <div
          className={
            mobileNavbar ? "mobile__navbar" : "mobile__navbar__disable"
          }
        >
          <div className="mobile__navbar__link_block">
            <Link
              // onClick={() => setShowPopup(true)}
              // onMouseEnter={() => navbarTab__mouseTab(false, "")}
              className={mobileClassName.home}
              to="/"
            >
              Home
            </Link>
            <div
              onClick={() =>
                mobileNavbarTab__mouseTab(!mobileShowPopup, "playstation", 1)
              }
              // onMouseEnter={() => navbarTab__mouseTab(true, "playstation", 1)}
              // onMouseEnter={() => setNavIndex("playstation")}
              className={
                navIndex === "playstation"
                  ? "active__mobile__navbar__link mobile__navbar__link"
                  : mobileClassName.playstation
              }
              // to="/playstation"
            >
              PlayStation
              <img src={down_arrow} alt="" className="down__arrow__icon" />
            </div>
            {navIndex === "playstation" &&
            menuIndex === 1 &&
            mobileShowPopup ? (
              <MobilePopup menuIndex={menuIndex} />
            ) : (
              ""
            )}
            <div
              onClick={() =>
                mobileNavbarTab__mouseTab(!mobileShowPopup, "television", 2)
              }
              // onMouseEnter={() => navbarTab__mouseTab(true, "television", 2)}
              // onMouseEnter={() => setNavIndex("television")}
              className={
                navIndex === "television"
                  ? "active__mobile__navbar__link mobile__navbar__link"
                  : mobileClassName.television
              }
              // to="/television"
            >
              Television
              <img src={down_arrow} alt="" className="down__arrow__icon" />
            </div>
            {navIndex === "television" && menuIndex === 2 && mobileShowPopup ? (
              <MobilePopup menuIndex={menuIndex} />
            ) : (
              ""
            )}
            <div
              onClick={() =>
                mobileNavbarTab__mouseTab(!mobileShowPopup, "camera", 3)
              }
              // onMouseEnter={() => navbarTab__mouseTab(true, "camera", 3)}
              // onMouseEnter={() => setNavIndex("camera")}
              className={
                navIndex === "camera"
                  ? "active__mobile__navbar__link mobile__navbar__link"
                  : mobileClassName.camera
              }
              // to="/camera"
            >
              Camera
              <img src={down_arrow} alt="" className="down__arrow__icon" />
            </div>
            {navIndex === "camera" && menuIndex === 3 && mobileShowPopup ? (
              <MobilePopup menuIndex={menuIndex} />
            ) : (
              ""
            )}
            <div
              onClick={() =>
                mobileNavbarTab__mouseTab(!mobileShowPopup, "audio", 3)
              }
              // onMouseEnter={() => navbarTab__mouseTab(true, "audio", 3)}
              // onMouseEnter={() => setNavIndex("audio")}
              className={
                navIndex === "audio"
                  ? "active__mobile__navbar__link mobile__navbar__link"
                  : mobileClassName.audio
              }
              // to="/audio"
            >
              Audio
              <img src={down_arrow} alt="" className="down__arrow__icon" />
            </div>
            {navIndex === "audio" && menuIndex === 3 && mobileShowPopup ? (
              <MobilePopup menuIndex={menuIndex} />
            ) : (
              ""
            )}

            <Link
              // onMouseEnter={() => navbarTab__mouseTab(false, "")}
              className={mobileClassName.services}
              to="/services"
            >
              Services
            </Link>
            <Link
              // onMouseEnter={() => navbarTab__mouseTab(false, "")}
              className={mobileClassName.support}
              to="/support"
            >
              Support
            </Link>
          </div>
        </div>

        <div
          className={
            showPopup
              ? "container-fluid product__popup__container"
              : "container-fluid product__popup__container__disable"
          }
          onMouseLeave={() => navbarTab__mouseTab(false, "")}
        >
          <div className="container product__popup__block">
            {categoryData.map((mainProduct, mainProductIndex) => {
              return (
                <div
                  key={mainProduct.id}
                  className={
                    menuIndex === mainProduct.id
                      ? "row inner__product__popup__block"
                      : "row inner__product__popup__block__disable"
                  }
                >
                  <div className="col-sm-4 col-md-2 col-lg-2 category__block">
                    {mainProduct.category.map((category, categoryIndex) => {
                      return (
                        <p className="category__title" key={categoryIndex}>
                          {category}
                        </p>
                      );
                    })}
                  </div>
                  <div className="col-sm-8 col-md-7  col-lg-6 productList__block">
                    {mainProduct.productList.map((product, productIndex) => {
                      return (
                        <div key={product.id} className="product__block">
                          <img
                            src={product_01}
                            alt=""
                            className="product__image"
                          />
                          {/* <img
                              src={product.image}
                              alt=""
                              className="product__image"
                            /> */}
                          <p className="product__title">{product.title}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="col-sm-12 col-md-3 col-lg-4 adsBanner__block">
                    {mainProduct.adBanner.map((adBanner, adBannerIndex) => {
                      return (
                        <img
                          key={adBanner.id}
                          src={NavbarAdBanner_01}
                          alt=""
                          className="adBanner__image"
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNavbar;
