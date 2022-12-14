import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as services from "../services/services";
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
import Heading4 from "../Components/Font/Heading4";
import {
  useParams
} from "react-router-dom";
import moment from "moment";
import MyOrderProductV2 from "../Components/MostSharedComponent/MyOrderProductV2";

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
          "Available today at Riyadh Act Fast ??? Only 3 left at your store!>",
      },
      {
        id: 2,
        pickupText:
          "Available today at Riyadh Act Fast ??? Only 3 left at your store!>",
      },
      {
        id: 3,
        pickupText:
          "Available today at Riyadh Act Fast ??? Only 3 left at your store!>",
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
function Order_Details(props) {

  const { order_id } = useParams();

  const dispatch = useDispatch();

  const { customerOrderDetails } = useSelector((state) => state.customerOrdersReducer);

  const [orderDetails, setOrderDetails] = useState('');

  useEffect(() => {
    let params = {
      id: order_id
    }
    dispatch(services.getCustomerOrderDetails(params))
  }, [order_id]);

  useEffect(() => {
    if (customerOrderDetails) {
      let orderInfo = {
        orderId: customerOrderDetails.entity_id,
        totalAmount: customerOrderDetails.grand_total,
        orderPlaced: moment(customerOrderDetails.created_at).format('DD MMMM YYYY'),
        currency: customerOrderDetails.order_currency_code,
        items: customerOrderDetails.items,
        allDetails: customerOrderDetails,
        shippingAddressFLName: `${customerOrderDetails.billing_address.firstname} ${customerOrderDetails.billing_address.lastname}`,
        shippingAddress: `${customerOrderDetails.billing_address.street[0]} ${customerOrderDetails.billing_address.city} ${customerOrderDetails.billing_address.postcode} ${customerOrderDetails.billing_address.country_id}`,
        phoneNumber: `${customerOrderDetails.billing_address.telephone}`,
        cardMethod: `${customerOrderDetails.payment.additional_information.message}`,
        shippingAmount: `${customerOrderDetails.shipping_amount}`,
        shippingSubTotal: `${customerOrderDetails.subtotal}`,
        discountAmount: `${customerOrderDetails.discount_amount}`,
        taxAmount: `${customerOrderDetails.tax_amount}`,
        orderTotal: `${customerOrderDetails.grand_total}`
      }
      setOrderDetails(orderInfo);
    }
  }, [customerOrderDetails]);

  return (
    <>
      <BreadCrumbs />
      {orderDetails !== "" &&
        <div className="container-fluid orderDetails__container">
          <div className="orderDetails__block">
            <div className="orderDetails__inner__block">
              <MyOrderProductV2 product={orderDetails} pageType="order-details" />
              {/* <div className="row od__product__block">
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
            </div> */}
              <hr className="od__page__horizontal__line"></hr>
              <div className="row od__shippingAddress__payment__orderSummary___block">
                <div className="col-12 col-sm-12 col-md-4 od__shippingAddress__block">
                  <Heading6 text="SHIPPING ADDRESS" marginBottom={20} />
                  <Heading7 text={orderDetails.shippingAddressFLName} marginBottom={5} />
                  <p className="full__address">
                    <Text4
                      text={orderDetails.shippingAddress}
                      marginBottom={20}
                    />
                  </p>
                  <Heading7 text="Phone Number:" color="#808080" span={true} />{" "}
                  <Text4 text={orderDetails.phoneNumber} marginLeft={10} span={true} />
                </div>
                <div className="col-12 col-sm-12 col-md-4 od__payment__block">
                  <Heading6 text="PAYMENT METHOD" marginBottom={20} />
                  {/* <img src={card_05} alt="credit card" className="od__card" /> */}
                  <Text4 color="#808080" text={orderDetails.cardMethod} />
                </div>
                <div className="col-12 col-sm-12 col-md-4 od__orderSummary__block">
                  <Heading6 text="ORDER SUMMARY" marginBottom={20} />
                  <div className="checkout__os__detail__block">
                    <div className="checkout__os__detail__inner__block">
                      <Text3 text="Shipping" color="#000000" />
                      {orderDetails.shippingAmount == 0 ?
                        <Heading4 text="FREE" color="#FF4F04" />
                        :
                        <Price price={orderDetails.shippingAmount} currency={orderDetails.currency} size="heading7" />
                      }
                    </div>
                    <div className="checkout__os__detail__inner__block">
                      <Text3 text="Sub Total" color="#000000" />
                      <Price price={orderDetails.shippingSubTotal} currency={orderDetails.currency} size="heading7" />
                    </div>
                    <div className="checkout__os__detail__inner__block">
                      <Text3 text="Discount" color="#000000" />
                      <Price price={orderDetails.discountAmount} currency={orderDetails.currency} size="heading7" />
                    </div>
                    <div className="checkout__os__detail__inner__block">
                      <Text3 text="Tax" color="#000000" />
                      <Price price={orderDetails.taxAmount} currency={orderDetails.currency} size="heading7" />
                    </div>
                    <div className="checkout__os__detail__total__order__block">
                      <Heading5 text="Order Total" color="#000000" />
                      <Price price={orderDetails.orderTotal} currency={orderDetails.currency} size="heading5" />
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
      }
      {/* <NewsLetter /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Order_Details;
