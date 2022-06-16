import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navbar_logo from "./../../Assets/Logo/navbar_logo.svg";
import white_side_menu_icon from "./../../Assets/Icon/white_side_menu_icon.svg";
import navbar_white_down_arrow from "./../../Assets/Icon/navbar_white_down_arrow.svg";
import white_down_arrow from "./../../Assets/Icon/white_down_arrow.svg";
import "./../../SCSS/Common/_topNavbar.scss";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
// import "./../../SCSS/_variables.scss"

import search from "./../../Assets/Icon/search.svg";
import white_search from "./../../Assets/Icon/white_search.svg";
import language from "./../../Assets/Icon/language.svg";
import customer_support from "./../../Assets/Icon/customer_support.svg";
import favourite from "./../../Assets/Icon/favourite.svg";
import location from "./../../Assets/Icon/location.svg";
import shopping_cart from "./../../Assets/Icon/shopping_cart.svg";
import user from "./../../Assets/Icon/user.svg";

import menu from "./../../Assets/Icon/menu.svg";

import product_01 from "./../../Assets/Product/product_01.jpg";
import NavbarAdBanner_01 from "./../../Assets/NavbarAdBanner/NavbarAdBanner_01.jpg";
import MobilePopup from "../MobilePopup";
import Text5 from "../Font/Text5";
import { withTheme } from "styled-components";
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
    productName: "Home AV",
    category: [
      "Gaming Home AV 4K",
      "Gaming Home AV 8K",
      "2021 Home AV's",
      "Smart 4K Home AV",
      "Smart 4K Home AV",
      "Smart 8K Home AV",
      "Smart OLED Home AV",
    ],
    productList: [
      {
        id: 0,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
        image: product_01,
      },
      {
        id: 1,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
        image: product_01,
      },
      {
        id: 2,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
        image: product_01,
      },
      {
        id: 3,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
        image: product_01,
      },
      {
        id: 4,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
        image: product_01,
      },
      {
        id: 5,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
        image: product_01,
      },
      {
        id: 6,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
        image: product_01,
      },
      {
        id: 7,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
        image: product_01,
      },
      {
        id: 8,
        title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
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
  // language changing in project //
  const [lang, setLang] = useState("en");
  const languages = [
    {
      code: "fr",
      name: "Français",
      country_code: "fr",
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "ar",
      name: "العربية",
      dir: "rtl",
      country_code: "sa",
    },
  ];

  // Find Current language from {language} object
  const currentLanguageCode = cookies.get("i18next") || "en";
  const [currentLanguage, setCurentLanguage] = useState(
    languages.find((l) => l.code === currentLanguageCode)
  );

  const { t } = useTranslation();

  // changing layout from right to left for arabic language"
  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  // language dropdown open and close

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const handleLanguageChange = (lang) => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
    setCurentLanguage(lang);

    i18next.changeLanguage(lang.code);
  };

  const [height, setHeight] = useState(0);

  const { pathname } = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  const [navIndex, setNavIndex] = useState("");
  const [menuIndex, setMenuIndex] = useState(0);
  const [className, setClassName] = useState({
    allCategories: "navbar__link active__navbar__link",
    topDeals: "navbar__link",
    dealsOfTheDay: "navbar__link",
    digitalCards: "navbar__link",
    topSellers: "navbar__link",
    others: "navbar__link",
    services: "navbar__link",
  });
  const [mobileClassName, setMobileClassName] = useState({
    home: "mobile__navbar__link active__mobile__navbar__link",
    playstation: "mobile__navbar__link",
    television: "mobile__navbar__link",
    camera: "mobile__navbar__link",
    audio: "mobile__navbar__link",
    services: "mobile__navbar__link",
  });
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
      allCategories: "navbar__link",
      topDeals: "navbar__link",
      dealsOfTheDay: "navbar__link",
      digitalCards: "navbar__link",
      topSellers: "navbar__link",
      others: "navbar__link",
      services: "navbar__link",
    };
    let mobilepath = {
      home: "mobile__navbar__link ",
      playstation: "mobile__navbar__link",
      television: "mobile__navbar__link",
      camera: "mobile__navbar__link",
      audio: "mobile__navbar__link",
      services: "mobile__navbar__link",
    };
    if (pathname.includes("/playstation")) {
      // path.playstation = "navbar__link active__navbar__link";
      mobilepath.playstation =
        "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/television")) {
      // path.television = "navbar__link active__navbar__link";
      mobilepath.television =
        "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/camera")) {
      // path.camera = "navbar__link active__navbar__link";
      mobilepath.camera = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/audio")) {
      // path.audio = "navbar__link active__navbar__link";
      mobilepath.audio = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/top-deals")) {
      path.topDeals = "navbar__link active__navbar__link";
      // mobilepath.topDeals = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/deals-of-the-day")) {
      path.dealsOfTheDay = "navbar__link active__navbar__link";
      // mobilepath.dealsOfTheDay = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/digital-cards")) {
      path.digitalCards = "navbar__link active__navbar__link";
      // mobilepath.digitalCards = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/top-sellers")) {
      path.topSellers = "navbar__link active__navbar__link";
      // mobilepath.topSellers = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/others")) {
      path.others = "navbar__link active__navbar__link";
      // mobilepath.others = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/services")) {
      path.services = "navbar__link active__navbar__link";
      mobilepath.services = "mobile__navbar__link active__mobile__navbar__link";
    } else {
      path = {
        allCategories: "navbar__link",
        topDeals: "navbar__link",
        dealsOfTheDay: "navbar__link",
        digitalCards: "navbar__link",
        topSellers: "navbar__link",
        others: "navbar__link",
        services: "navbar__link",
      };
      mobilepath = {
        allCategories: "mobile__navbar__link",
        topDeals: "mobile__navbar__link",
        dealsOfTheDay: "mobile__navbar__link",
        digitalCards: "mobile__navbar__link",
        topSellers: "mobile__navbar__link",
        others: "mobile__navbar__link",
        services: "mobile__navbar__link",
      };
    }
    setClassName(path);
    setMobileClassName(mobilepath);
  }, [pathname]);

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
          <div className="  topnavbar">
            <div className="row topnavbar__row">
              <Link
                className="col-4  col-sm-6 col-lg-3  col-xl-2  topnavbar__link"
                to="/"
              >
                <img
                  src={white_side_menu_icon}
                  alt="topnavbar__sidemenu__icon"
                  className="topnavbar__sidemenu__icon"
                  onClick={() => setMobileNavbar(!mobileNavbar)}
                />
                <img src={navbar_logo} alt="logo" className="topnavbar__logo" />
              </Link>
              <div className="col-0  col-sm-0  col-lg-5 col-xl-7  search__box__block">
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
              <div className="col-8 col-sm-6 col-lg-4  col-xl-3  ">
                <div className="topnavbar__icon__block">
                  <div></div>
                  <div className="topnavbar__icon__inner__block">
                    <img
                      src={white_search}
                      alt=""
                      className="topnavbar__search__icon topnavbar__icon"
                    />
                    <div className="main__language__selection">
                      <img
                        src={language}
                        alt=""
                        className="topnavbar__language__icon topnavbar__icon"
                        onClick={() =>
                          setIsLanguageMenuOpen(!isLanguageMenuOpen)
                        }
                      />
                      <div
                        className="language__selction"
                        onClick={() =>
                          setIsLanguageMenuOpen(!isLanguageMenuOpen)
                        }
                      >
                        <p className="language">{currentLanguage.name} </p>
                        <img
                          src={white_down_arrow}
                          alt=""
                          className="down__arrow__icon"
                        />
                      </div>
                      <div
                        className={
                          isLanguageMenuOpen
                            ? "language__option__dropdown"
                            : "language__option__dropdown__disable"
                        }
                      >
                        {languages.map((lang, langIndex) => {
                          return (
                            <p
                              onClick={() => handleLanguageChange(lang)}
                              className="language__option"
                              key={lang.country_code}
                              value={lang.code}
                            >
                              {lang.name}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                    <img
                      src={location}
                      alt=""
                      className="location topnavbar__icon"
                    />
                    <img
                      src={favourite}
                      alt=""
                      className="favourite topnavbar__icon"
                    />
                    <img src={user} alt="" className="user topnavbar__icon" />
                    <div className="cart__icon__block">
                      <img
                        src={shopping_cart}
                        alt=""
                        className="shopping_cart topnavbar__icon"
                      />
                      <p className="cart__item__count">{99}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" navbar__container">
          <div className="row navbar__row">
            <div className="col-4  col-sm-6 col-lg-0  col-xl-2"></div>
            <div className="col-8  col-sm-6 col-lg-12  col-xl-10 navbar">
              <div className="navbar__link__block">
                <div
                  onClick={() => setShowPopup(true)}
                  className="navbar__allCategories"
                >
                  <img src={menu} alt="" className="navbar__menu__icon" />
                  All Categories
                </div>
                <Link className={className.topDeals} to="/top-deals">
                  Top Deals
                </Link>
                <Link
                  className={className.dealsOfTheDay}
                  to="/deals-of-the-day"
                >
                  Deals of the Day
                </Link>
                <Link className={className.digitalCards} to="/digital-cards">
                  Digital Cards
                </Link>
                <Link className={className.topSellers} to="/top-sellers">
                  Top Sellers
                </Link>
                <Link className={className.others} to="/others">
                  Others
                </Link>
                <Link className={className.services} to="/services">
                  Services
                  <img
                  src={navbar_white_down_arrow}
                  alt=""
                  className="down__arrow__icon"
                />

                </Link>
              </div>
              <div className="icon__block">
                <img src={menu} alt="" className="menu__icon" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            mobileNavbar ? "mobile__navbar" : "mobile__navbar__disable"
          }
        >
          <div className="mobile__navbar__link__block">
            <Link className={mobileClassName.home} to="/">
              Home
            </Link>
            <div
              onClick={() =>
                mobileNavbarTab__mouseTab(!mobileShowPopup, "television", 2)
              }
              className={
                navIndex === "television"
                  ? "active__mobile__navbar__link mobile__navbar__link"
                  : mobileClassName.television
              }
            >
              Television
              <img
                src={navbar_white_down_arrow}
                alt=""
                className="down__arrow__icon"
              />
            </div>
            <div
              onClick={() =>
                mobileNavbarTab__mouseTab(!mobileShowPopup, "playstation", 1)
              }
              className={
                navIndex === "playstation"
                  ? "active__mobile__navbar__link mobile__navbar__link"
                  : mobileClassName.playstation
              }
            >
              PlayStation
              <img
                src={navbar_white_down_arrow}
                alt=""
                className="down__arrow__icon"
              />
            </div>
            {navIndex === "playstation" &&
            menuIndex === 1 &&
            mobileShowPopup ? (
              <MobilePopup menuIndex={menuIndex} />
            ) : (
              ""
            )}

            {navIndex === "television" && menuIndex === 2 && mobileShowPopup ? (
              <MobilePopup menuIndex={menuIndex} />
            ) : (
              ""
            )}
            <div
              onClick={() =>
                mobileNavbarTab__mouseTab(!mobileShowPopup, "homeAV", 3)
              }
              className={
                navIndex === "homeAV"
                  ? "active__mobile__navbar__link mobile__navbar__link"
                  : mobileClassName.homeAV
              }
            >
              Home AV
              <img
                src={navbar_white_down_arrow}
                alt=""
                className="down__arrow__icon"
              />
            </div>
            {navIndex === "homeAV" && menuIndex === 3 && mobileShowPopup ? (
              <MobilePopup menuIndex={menuIndex} />
            ) : (
              ""
            )}
            <div
              onClick={() =>
                mobileNavbarTab__mouseTab(!mobileShowPopup, "audio", 3)
              }
              className={
                navIndex === "audio"
                  ? "active__mobile__navbar__link mobile__navbar__link"
                  : mobileClassName.audio
              }
            >
              Audio
              <img
                src={navbar_white_down_arrow}
                alt=""
                className="down__arrow__icon"
              />
            </div>
            {navIndex === "audio" && menuIndex === 3 && mobileShowPopup ? (
              <MobilePopup menuIndex={menuIndex} />
            ) : (
              ""
            )}

            <Link className={mobileClassName.services} to="/services">
              Services
            </Link>
            <Link className={mobileClassName.support} to="/support">
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
          <div className="product__popup__block">
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
                  <div className="col-sm-8 col-md-7  col-lg-7 productList__block">
                    {mainProduct.productList.map((product, productIndex) => {
                      return (
                        <div key={product.id} className="popup__product__block">
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
                  <div className="col-sm-12 col-md-3 col-lg-3 adsBanner__block">
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
