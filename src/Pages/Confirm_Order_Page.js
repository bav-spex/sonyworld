import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import * as services from "../services/services";
import moment from "moment";
import BreadCrumbs from "../Components/BreadCrumbs";
import Heading2 from "../Components/Font/Heading2";
import Heading4 from "../Components/Font/Heading4";
import Heading6 from "../Components/Font/Heading6";
import Text2 from "../Components/Font/Text2";
import Text3 from "../Components/Font/Text3";
import success_check from "./../assets/Icon/success_check.svg";
import "./../SCSS/_confirmOrderPage.scss";
function Confirm_Order_Page() {
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
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
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
  console.log(customerOrderDetails);
  return (
    <>
      <BreadCrumbs title="My Order" />
      <div className="container-fluid confirm__order__page__container">
        <div className="confirm__order__page__block">
          <div className="inner__confirm__order__block">
            <img className="success_check_icon" src={success_check} alt="" />
            <Heading4 text={`Hey ${orderDetails.shippingAddressFLName}`} textAlign="center" />
            
            <Heading2
              text="Your Order is Confirmed!"
              color="#DC3A1A"
              marginBottom={20}
              textAlign="center"
            />
            <Text3 text={`Order number is : ${order_id}`} marginBottom={20} textAlign="center" />
            <p className="order__success__text">
              <Text2
                text="Your item has been on the way Expected Arriving Date is"
                span={true}
                //   textAlign="center"
              />
              <Heading6
                text="Sunday, 19th May 2022"
                span={true}
                //   textAlign="center"
                marginLeft={10}
              />

              <Text2
                text="& Shiiping Address Is"
                span={true}
                //   textAlign="center"
                marginLeft={10}
              />
              <Heading6
                text={orderDetails.shippingAddress}
                span={true}
                //   textAlign="center"
                marginLeft={10}
              />
            </p>
            <p className="order__success__email__text">
              <Text2
                text={`Your will receive an email confirmation shortly at ${customerOrderDetails.customer_email}`}
                span={true}
                textAlign="center"
              />
            </p>
            <Link className="continue__shopping__button" to="/">
            Continue Shopping
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Confirm_Order_Page;
