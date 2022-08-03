import React from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import Heading3 from "../Components/Font/Heading4";
import Heading6 from "../Components/Font/Heading6";
import Heading7 from "../Components/Font/Heading7";
import Price from "../Components/Font/Price";
import Text3 from "../Components/Font/Text3";
import Text4 from "../Components/Font/Text4";
import sony_logo from "./../assets/Icon/sony_logo.svg";
import card_05 from "./../assets/Footer/card_05.png";
import product_01 from "./../assets/Product/product_01.png";
import "./../SCSS/_orderDetails.scss";
import Heading5 from "../Components/Font/Heading5";
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
function Order_Details() {
  // const { id } = useParams();
  // console.log(id);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // dispatch(loadProductDetailData(id.replace(/[/]/g, "%2F")));
  // }, []);
  // const orderIdData = useSelector(state=>state.appData.orderIdData)
  return (
    <>
      <BreadCrumbs />
      <div className="container-fluid orderDetails__container">
        <div className="orderDetails__block">
          <div className="orderDetails__inner__block">
            <div className="row od__product__block">
              <div className="col-12 col-sm-2 od__product__left__block">
                <div className="od__product__image__block">
                  <img src={product_01} alt="" className="od__product__image" />
                </div>
              </div>
              <div className="col-12 col-sm-7 od__product__middle__block">
                <Heading3 text={product.name} marginBottom={10} />
                <div className="row od__order__details__row">
                  <div className="col-4 col-sm-4 col-md-2">
                    <Heading7 text="SKU" color="#727272" span={true} />
                  </div>
                  <div className="col-8 col-sm-8 col-md-4">
                    <Text3 text={product.sku} span={true} />
                  </div>
                  <div className="col-4 col-sm-4 col-md-2">
                    <Heading7
                      text="ORDER PLACED:"
                      color="#727272"
                      span={true}
                    />
                  </div>
                  <div className="col-8 col-sm-8 col-md-4">
                    <Text3 text={product.orderPlaced} span={true} />
                  </div>
                </div>
                <div className="row od__order__details__row">
                  <div className="col-4 col-sm-4 col-md-2">
                    <Heading7 text="ORDER #:" color="#727272" span={true} />
                  </div>
                  <div className="col-8 col-sm-8 col-md-4">
                    <Text3 text={product.orderId} span={true} />
                  </div>
                  <div className="col-4 col-sm-4 col-md-2">
                    <Heading7
                      text="TOTAL AMOUNT:"
                      color="#727272"
                      span={true}
                    />
                  </div>
                  <div className="col-8 col-sm-8 col-md-4">
                    <Price
                      price={product.totalAmount}
                      span={true}
                      size="heading7"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3 od__product__right__block">
                <div className="od__edit__cancel__button__block">
                  <button className="od__edit__cancel__button">Edit</button>
                  <button className="od__edit__cancel__button">Cancel</button>
                </div>
                <Text3
                  text="Write review of this product"
                  color="#07A41B"
                  span={true}
                />
                <div className="od__buy__invoice__button__block">
                  <button className="od__buy__invoice__button">
                    Buy Again
                  </button>
                  <button className="od__download__black__button">
                    DOWNLOAD INVOICE
                  </button>
                </div>
              </div>
            </div>
            <hr className="od__page__horizontal__line"></hr>
            <div className="row od__shippingAddress__payment__orderSummary___block">
              <div className="col-12 col-sm-12 col-md-4 od__shippingAddress__block">
                <Heading6 text="SHIPPING ADDRESS" marginBottom={20} />
                <Heading7 text="John Doe" marginBottom={5} />
                <p className="full__address">
                  <Text4
                    text="21 West 52nd Street New York, New York, 10021 United States"
                    marginBottom={20}
                  />
                </p>
                <Heading7 text="Phone Number:" color="#808080" span={true} />{" "}
                <Text4 text="+966 50 655 2835" marginLeft={10} span={true} />
              </div>
              <div className="col-12 col-sm-12 col-md-4 od__payment__block">
                <Heading6 text="PAYMENT METHOD" marginBottom={20} />
                <img src={card_05} alt="credit card" className="od__card" />
                <Text4 color="#808080" text="**** **** **** 1234" />
              </div>
              <div className="col-12 col-sm-12 col-md-4 od__orderSummary__block">
                <Heading6 text="ORDER SUMMARY" marginBottom={20} />
                <div className="checkout__os__detail__block">
                  <div className="checkout__os__detail__inner__block">
                    <Text3 text="Shipping" color="#000000" />
                    <Price price={20} size="heading7" />
                  </div>
                  <div className="checkout__os__detail__inner__block">
                    <Text3 text="Sub Total" color="#000000" />
                    <Price price={195} size="heading7" />
                  </div>
                  <div className="checkout__os__detail__inner__block">
                    <Text3 text="Discount" color="#000000" />
                    <Price price={30} size="heading7" />
                  </div>
                  <div className="checkout__os__detail__inner__block">
                    <Text3 text="Tax" color="#000000" />
                    <Price price={10} size="heading7" />
                  </div>
                  <div className="checkout__os__detail__total__order__block">
                    <Heading5 text="Order Total" color="#000000" />
                    <Price price={3275} size="heading5" />
                  </div>
                </div>
              </div>
            </div>
            <hr className="od__page__horizontal__line"></hr>
            <div className="od__order__track__map__block">
              <div className="od__order__track__title__block">
                <div className="od__order__track__title__text">
                  <Heading7
                    text="Your item has bee on the way Expected Arriving Date is"
                    textAlign="center"
                    span={true}
                    color="#ffffff"
                  />
                  <Heading3
                    text="Sunday, 19th March"
                    textAlign="center"
                    span={true}
                    color="#ffffff"
                    marginLeft={10}
                  />
                </div>
                <div className="od__order__track__title__text">
                  <Heading7
                    text="Your Delivery Person Name is Shadab Khan & Contact Details is"
                    textAlign="center"
                    span={true}
                    color="#ffffff"
                  />
                  <Heading3
                    text="+966 50 655 2835"
                    textAlign="center"
                    span={true}
                    color="#ffffff"
                    marginLeft={10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <NewsLetter /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Order_Details;
