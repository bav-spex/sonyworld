import React from "react";
import "./../SCSS/_footer.scss";
import { Link } from "react-router-dom";
import footer_logo from "./../Assets/Footer/footer_logo.svg";
import facebook from "./../Assets/Footer/facebook.svg";
import instagram from "./../Assets/Footer/instagram.svg";
import twitter from "./../Assets/Footer/twitter.svg";
import card_01 from "./../Assets/Banner/banner_01.jpg";
// import card_01 from "./../Assets/Footer/card_01.png";
import card_02 from "./../Assets/Footer/card_02.png";
import card_03 from "./../Assets/Footer/card_03.png";
import card_04 from "./../Assets/Footer/card_04.png";
import card_05 from "./../Assets/Footer/card_05.png";
import card_06 from "./../Assets/Footer/card_06.png";
function Footer() {
  return (
    <div className="container-fluid footer__container">
      <div className="footer__block">
        <div className="row footer__row">
          <div className="col-12 col-sm-12 col-md-3 logo__social__row">
            <Link className="footer__logo___link" to="/">
              <img src={footer_logo} alt="logo" className="footer__logo" />
            </Link>
            <div className="social__group">
              <img src={facebook} alt="" className="social__icon" />
              <img src={instagram} alt="" className="social__icon" />
              <img src={twitter} alt="" className="social__icon" />
            </div>
          </div>
          <div className="row col-12 col-sm-12 col-md-9 footer__navbar__row">
            <div className="col-6 col-sm-6 col-md-3 footer__link__block">
              <p className="footer__link__title">About</p>
              <Link className="footer___link" to="/about">
                About Us
              </Link>
              <Link className="footer___link" to="/terms">
                Terms and Conditions
              </Link>
              <Link className="footer___link" to="/payment">
                Secured Payment
              </Link>
              <Link className="footer___link" to="/stores">
                OurStores
              </Link>
              <Link className="footer___link" to="/service">
                Service Centers
              </Link>
            </div>
            <div className="col-6 col-sm-6 col-md-3 footer__link__block">
              <p className="footer__link__title">Account Info</p>
              <Link className="footer___link" to="/account">
                My Account
              </Link>
              <Link className="footer___link" to="/history">
                Order History
              </Link>
              <Link className="footer___link" to="/addressbook">
                Address Book
              </Link>
              <Link className="footer___link" to="/password">
                Change Passwords
              </Link>
              <Link className="footer___link" to="/contact">
                Contact Us
              </Link>
            </div>
            <div className="col-6 col-sm-6 col-md-3 footer__link__block">
              <p className="footer__link__title">Quick Links</p>
              <Link className="footer___link" to="/support">
                Support
              </Link>
              <Link className="footer___link" to="/exchange">
                Exchange & Return Policy
              </Link>
              <Link className="footer___link" to="/warranty">
                Warranty Policy
              </Link>
              <Link className="footer___link" to="/installment">
                Installment
              </Link>
            </div>
            <div className="col-6 col-sm-6 col-md-3 footer__link__block">
              <p className="footer__email__title">Email</p>
              <a className="footer__email" href="mailto:hello@sony.com">
                hello@sony.com
              </a>
              <p className="footer__mobile__title">Toll Free Number</p>
              <a className="footer__mobile" href="tel:1800123456789">
                1800 123 456 789
              </a>
            </div>
          </div>
        </div>
        <div className="row copyright__row">
          <div className="col-12 col-sm-8 col-md-9 copyright__block">
              <div className="copyright__text__block">

            <p className="copyright__text">
              Copyright 2022 Sony Group Corporation{" "}
            </p>
            <p className="copyright__small__text">
              Terms & Conditions | Privacy Policy
            </p>
              </div>

            <div className="card__block">
              <img src={card_01} alt="" className="card" />
              <img src={card_02} alt="" className="card" />
              <img src={card_03} alt="" className="card" />
              <img src={card_04} alt="" className="card" />
              <img src={card_05} alt="" className="card" />
              <img src={card_06} alt="" className="card" />
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 sony__expert__block">
            <button
              type="button"
              className="expert__button"
              // onClick={handleSubmit}
            >
              SONY EXPERT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;