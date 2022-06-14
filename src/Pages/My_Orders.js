import React,{useState} from "react";
import ShoppipngCartProduct from "../Components/MostSharedComponent/ShoppipngCartProduct";
import "./../SCSS/_myOrders.scss";
import sony_logo from "./../Assets/Icon/sony_logo.svg";
import search from "./../Assets/Icon/search.svg";
import TopNavbar from "../Components/TopNavbar";
import BreadCrumbs from "../Components/BreadCrumbs";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import MyOrderProduct from "../Components/MostSharedComponent/MyOrderProduct";
import Heading3 from "../Components/Font/Heading4";
import Heading7 from "../Components/Font/Heading7";
import Text3 from "../Components/Font/Text3";
const product = {
  id: 1,
  logo: sony_logo,
  name: "Z8H | Full Array LED | 8K | High Dynamic Range (HDR) | Smart TV (Android TV)",
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
  sku: "KD-85Z8H IN5",
  orderPlaced: "19 March 2022",
  orderId: "408-2450567-3112347",
  totalAmount: 1699,
};
const orderCategory = [
 "Recent Orders",
 "Past Orders",
 "Cancelled Orders",
 "Buy Again"

]
function My_Orders() {
  const [selectCategoryIndex, setSelectCategoryIndex] = useState(0);
  const orderCategorySelect = (categoryIndex, category) => {
    console.log(categoryIndex, category);
    setSelectCategoryIndex(categoryIndex);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      {/* <TopNavbar /> */}
      <BreadCrumbs />
      <div className="container-fluid myOrders__container">
        <div className="myOrders__block">
          <div className=" myOrders__inner__block">
            <div className="myOrders__title__block">
              <div className="myOrders__title">
                <Heading3 text="My Orders" />
              </div>
              <div className="myOrders__right__part">
                <Heading7 text="0" span={true} />
                <Text3 text="Order placed in" span={true} marginLeft={5} />
                <select
                  onChange={handleChange}
                  className="mo__select__block"
                  name="timeDuration"
                  id="timeDuration"
                >
                  <option value="Last 3 months">Last 3 months</option>
                  <option value="Last 6 months">Last 6 months</option>
                  <option value="Last 9 months">Last 9 months</option>
                  <option value="1 Year">1 Year</option>
                </select>
                <div className="mo__search__box__block">
                  <div className="mo__search__box">
                    <input
                      type="text"
                      name="search"
                      className="mo__search__input"
                      placeholder="Search"
                      onChange={handleChange}
                    />
                    <img src={search} alt="" className="topnavbar__icon" />
                  </div>
                </div>
              </div>
            </div>
            <hr className="mo__page__horizontal__line"></hr>

            <div className="mo__page__category__button__block">
                <div className="mo__page__button__main__block">
                  <div className="mo__page__button__block">
                    {orderCategory.map((category, categoryIndex) => {
                      return (
                        <button
                          key={categoryIndex}
                          onClick={() =>
                            orderCategorySelect(categoryIndex, category)
                          }
                          className={
                            selectCategoryIndex === categoryIndex
                              ? "mo__page__button__active"
                              : "mo__page__button"
                          }
                        >
                          {category}
                        </button>
                      );
                    })}
                  </div>
                  
                </div>
              </div>

            <MyOrderProduct product={product} />
          </div>
        </div>
      </div>
      {/* <NewsLetter /> */}
      {/* <Footer /> */}
    </>
  );
}

export default My_Orders;
