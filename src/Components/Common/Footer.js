import React from "react";
import "./../../SCSS/Common/_footer.scss";
import { Link } from "react-router-dom";
import footer_logo from "./../../assets/Footer/footer_logo.svg";
import mestores_footer_logo from "./../../assets/Footer/mestores_footer_logo.png";
import facebook from "./../../assets/Footer/facebook.png";
import instagram from "./../../assets/Footer/instagram.png";
import twitter from "./../../assets/Footer/twitter.png";
import live_chat_button from "./../../assets/Footer/live_chat_button.svg";
import card_01 from "./../../assets/Banner/banner_01.jpg";
// import card_01 from "./../../assets/Footer/card_01.png";
import card_02 from "./../../assets/Footer/card_02.png";
import card_03 from "./../../assets/Footer/card_03.png";
import card_04 from "./../../assets/Footer/card_04.png";
import card_05 from "./../../assets/Footer/card_05.png";
import card_06 from "./../../assets/Footer/card_06.png";
import Text4 from "../Font/Text4";
import Heading7 from "../Font/Heading7";
import { paymentCardConfig, socialConfig } from "../../assetsConfig/footer";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container-fluid footer__container">
        <div className="footer__block">
          <div className="row footer__row">
            <div className="col-12 col-sm-12 col-md-3 logo__social__row">
              <Link className="footer__logo___link" to="/">
                <img src={footer_logo} alt="logo" className="footer__logo" />
              </Link>
              <div className="social__group">
                {socialConfig.map(({ iconPath, action, alt }, socialIndex) => {
                  return (
                    <a key={alt} href={action} target="_" aria-label={alt}>
                      <img
                        key={alt}
                        src={require(`./../../${iconPath}`)}
                        alt={alt}
                        className="social__icon"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="row col-12 col-sm-12 col-md-9 footer__navbar__row">
              <div className="col-6 col-sm-6 col-md-3 footer__link__block">
                <p className="footer__link__title">{t("footer.about")}</p>
                <Link className="footer___link" to="/about">
                  {t("footer.about_us")}
                </Link>
                <Link className="footer___link" to="/terms">
                  {t("footer.terms_and_conditions")}
                </Link>
                <Link className="footer___link" to="/payment">
                  {t("footer.secured_payment")}
                </Link>
                <Link className="footer___link" to="/stores">
                  {t("footer.our_stores")}
                </Link>
                <Link className="footer___link" to="/service">
                  {t("footer.service_centers")}
                </Link>
              </div>
              <div className="col-6 col-sm-6 col-md-3 footer__link__block">
                <p className="footer__link__title">{t("footer.account_info")}</p>
                <Link className="footer___link" to="/account">
                  {t("footer.my_account")}
                </Link>
                <Link className="footer___link" to="/history">
                  {t("footer.order_history")}
                </Link>
                <Link className="footer___link" to="/addressbook">
                  {t("footer.address_book")}
                </Link>
                <Link className="footer___link" to="/password">
                  {t("footer.change_passwords")}
                </Link>
                <Link className="footer___link" to="/contact">
                  {t("footer.contact_us")}
                </Link>
              </div>
              <div className="col-6 col-sm-6 col-md-3 footer__link__block">
                <p className="footer__link__title">{t("footer.quick_links")}</p>
                <Link className="footer___link" to="/support">
                  {t("footer.support")}
                </Link>
                <Link className="footer___link" to="/exchange">
                  {t("footer.exchange_and_return_policy")}
                </Link>
                <Link className="footer___link" to="/warranty">
                  {t("footer.warranty_policy")}
                </Link>
                <Link className="footer___link" to="/installment">
                  {t("footer.installment")}
                </Link>
              </div>
              <div className="col-6 col-sm-6 col-md-3 footer__link__block">
                <p className="footer__email__title">{t("footer.email")}</p>
                <a className="footer__email" href="mailto:hello@sony.com">
                  hello@sony.com
                </a>
                <p className="footer__mobile__title">{t("footer.toll_free_number")}</p>
                <a className="footer__mobile" href="tel:1800123456789">
                  1800 123 456 789
                </a>
              </div>
            </div>
          </div>
          <div className="row card__and__live__row">
            <div className="col-12 col-sm-8 col-md-9 card__and__live__block">
              <div className="card__block">
                {paymentCardConfig.map(({ iconPath, alt }, socialIndex) => {
                  return (
                    <img
                      key={alt}
                      src={require(`./../../${iconPath}`)}
                      alt={alt}
                      className="card"
                    />
                  );
                })}
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="footer__bottom__container">
        <div className="footer__bottom__block">
          <div className="row inner__footer__bottom__block">
            <div className=" col-12 col-sm-9 col-lg-10 copyright__text__block">
              <div className="copyright__text">
                <Text4
                  text={t("footer.all_rights_reserved")}
                  textTransform="uppercase"
                  marginBottom={5}
                />
                <Heading7 text={t("footer.disclaimer_1")} span={true} />
                <Link
                  to="www.sonyworld.com.sa"
                  className="footer__bottom__link"
                >
                  <Heading7
                    text="www.sonyworld.com.sa "
                    span={true}
                    marginLeft={10}
                  />
                </Link>
                <Heading7
                  text={t("footer.disclaimer_2")}
                  span={true}
                  marginLeft={5}
                />
              </div>
              <div>
                <Text4
                  text={t("footer.terms_conditions")}
                  textTransform="uppercase"
                  span={true}
                />
                <Text4
                  text={t("footer.privacy_policy")}
                  textTransform="uppercase"
                  span={true}
                  marginLeft={70}
                />
              </div>
            </div>
            <img
              src={mestores_footer_logo}
              alt="mestore logo"
              className="col-6 col-sm-3 col-lg-2 mestores__footer__logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
