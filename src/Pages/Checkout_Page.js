import React, { useState } from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import Heading4 from "../Components/Font/Heading4";
import Heading3 from "../Components/Font/Heading3";
import Heading5 from "../Components/Font/Heading5";
import Heading6 from "../Components/Font/Heading6";
import Price from "../Components/Font/Price";
import Text3 from "../Components/Font/Text3";
import SuperCoin from "../Components/MostSharedComponent/SuperCoin";
import TopNavbar from "../Components/TopNavbar";
import "./../SCSS/_checkoutPage.scss";
import user_black_fill from "./../Assets/Icon/user_black_fill.svg";
import check from "./../Assets/Icon/check.svg";
import shipping from "./../Assets/Icon/shipping.svg";
import Text5 from "../Components/Font/Text5";
import Heading7 from "../Components/Font/Heading7";
import Text4 from "../Components/Font/Text4";
const addressData = [
  {
    id: 0,
    isDefault: true,
    addressType: "Home",
    userName: "John Doe",
    adddress: "21 West 52nd Street New York, New York, 10021 United States",
    contact: "+1123456789",
  },
  {
    id: 1,
    isDefault: false,
    addressType: "Office",
    userName: "Martin Smith",
    adddress: "21 West 52nd Street New York, New York, 10021 United States",
    contact: "+1123456789",
  },
];
function Checkout_Page() {
  const [selectedAddressId, setSelectedAddressID] = useState(0);
  const selectAddress = (addIndex, addId, add) => {
    setSelectedAddressID(addIndex);
    console.log(addId, add);
  };
  return (
    <>
      <TopNavbar />
      <BreadCrumbs />
      <div className="container-fluid checkout__page__container">
        <div className="checkout__page__block">
          <div className="row checkout__page__inner__block">
            <div className="col-md-12 col-xl-9  checkout__left__block">
              <div className="checkout__login__main__block">
                <img src={user_black_fill} alt="" className="user__icon" />
                <div className="row checkout__login__block">
                  <div className="col-12 col-sm-10 login__details">
                    <div className="login__text__icon__block">
                      <Heading5 text="LOGIN" color="#808080" marginBottom={0} />
                      <img src={check} alt="" className="check__icon" />
                    </div>
                    <Heading5 text="John Doe" span={true} marginBottom={10} />
                    <Heading5
                      text="johndoe@gmail.com"
                      color="#808080"
                      span={true}
                      marginLeft={10}
                      marginBottom={10}
                    />
                  </div>
                  <div className="col-12 col-sm-2 change__button__block">
                    <button className="change__button">Change</button>
                  </div>
                </div>
              </div>
              <div className="delivery__address__block">
                <div className="delivery__address__title__block">
                  <img src={shipping} alt="" className="user__icon" />
                  <Heading5
                    text="DELIVERY ADDRESS"
                    color="#808080"
                    marginLeft={10}
                    marginBottom={0}
                  />
                </div>
                <div className="row address__select__block">
                  {addressData.map((add, addIndex) => {
                    return (
                      <div key={add.id} className="col-12 col-sm-6 address__block">
                        <div
                          className={selectedAddressId===addIndex ? "selected__address__inner__block" : "address__inner__block"}
                          onClick={() => selectAddress(addIndex, add.id, add)}
                        >
                          {add.isDefault ? (
                            <div className="address__tag">
                              <Heading7 text="DEFAULT" span={true} />
                            </div>
                          ) : (
                            <div className="white__address__tag">
                              <Text5 text="NONE" span={true} color="#ffffff" />
                            </div>
                          )}
                          <Heading7 text={add.userName} />
                          <p className="full__address">
                            <Text4 text={add.adddress} marginBottom={20} />
                          </p>
                          <Text4 text={add.contact} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <hr className="checkout__page__horizontal__line"></hr>
            </div>
            {/* package Summary */}
            <div className="col-md-12 col-xl-3  checkout__right__block">
              <div className="checkout__package__summary__block">
                <p className="checkout__os__title">
                  {" "}
                  <Heading3 text="Price Details" />
                </p>
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
                    <Heading6 text="Order Total" color="#000000" />
                    <Price price={3275} size="heading7" />
                  </div>
                </div>
              </div>
              <SuperCoin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout_Page;
