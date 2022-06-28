import React from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import Heading2 from "../Components/Font/Heading2";
import Heading4 from "../Components/Font/Heading4";
import Heading6 from "../Components/Font/Heading6";
import Text2 from "../Components/Font/Text2";
import Text3 from "../Components/Font/Text3";
import success_check from "./../assets/Icon/success_check.svg";
import "./../SCSS/_confirmOrderPage.scss";
function Confirm_Order_Page() {
  return (
    <>
      <BreadCrumbs title="My Order" />
      <div className="container-fluid confirm__order__page__container">
        <div className="confirm__order__page__block">
          <div className="inner__confirm__order__block">
            <img className="success_check_icon" src={success_check} alt="" />
            <Heading4 text="Hey John Doe" textAlign="center" />
            
            <Heading2
              text="Your Order is Confirmed!"
              color="#DC3A1A"
              marginBottom={20}
              textAlign="center"
            />
            <Text3 text="Order number is : 308152033" marginBottom={20} textAlign="center" />
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
                text="21 West 52nd Street New York, New York, 10021 United States"
                span={true}
                //   textAlign="center"
                marginLeft={10}
              />
            </p>
            <p className="order__success__email__text">
              <Text2
                text="Your will receive an email confirmation shortly at johndoe@gmail.com"
                span={true}
                textAlign="center"
              />
            </p>
            <button className="continue__shopping__button">
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Confirm_Order_Page;
