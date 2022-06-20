import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./../../SCSS/Product/_productCard.scss";
import { ReactComponent as LikeIcon } from "./../../assets/Icon/like.svg";
import { ReactComponent as StarIcon } from "./../../assets/Icon/single_star.svg";
import { ReactComponent as AddToCart } from "./../../assets/Icon/shopping_cart.svg";
import productTwo_quality_icon from "./../../assets/Product/productTwo_quality_icon.png";
import product_01 from "./../../assets/Product/product_01.png";
import product_02 from "./../../assets/Product/product_02.png";
import product_03 from "./../../assets/Product/product_03.png";
import product_04 from "./../../assets/Product/product_04.png";

function ProductCard({ isNew, resolution, isLiked }) {
  return (
    <div className="_product__container_main">
      {/* Card Top bar with like and tags */}
      <div className="_product__container_topbar">
        <div className="_product__container_topbar_rightTag">
          {/* {isNew && "New"} */}
          New
        </div>
        <div className="_product__container_topbar_leftTag">
          <div className="_product__container_topbar_resTag">
            {/* {resolution && <img src="resolution_eightK" alt="no res" />} */}
            <img src={productTwo_quality_icon} alt={productTwo_quality_icon} />
          </div>
          <div className="_product__container_topbar_like">
            <LikeIcon
              height={"1.2rem"}
              // width={"1rem"}
              fill={isLiked ? "#ed1b24" : "white"}
              stroke={isLiked ? "#ed1b24" : "black"}
              strokeWidth="5px"
            />
          </div>
        </div>
      </div>

      {/* card image */}

      <div className="_product__container_image_container">
        <AwesomeSlider>
          {[product_01, product_02, product_03, product_04].map(
            (images, index) => (
              <div className="_product__container_image">
                <img src={images} alt={images + index} />
              </div>
            )
          )}
        </AwesomeSlider>
      </div>

      {/* Card title */}
      <div className="_product__container_body">
        <div className="_product__container_title_container">
          <p class="_product__container_title">
            Sony - 65"Class BRAVIA XR A80J Series OLED 4k UHD Smart Google TV
          </p>
          <div className="_product__container_price_container">
            <span class="scratched-text">SAR1,999.00</span>
            <span class="product-price">SAR1,699.00</span>
          </div>
        </div>
        <div className="_product__container_rating_container">
          <div>
            <StarIcon />
          </div>
          <div className="_product__container_rating">
            <span>
              <strong>4.2/5</strong>
            </span>
            <span>2183 Ratings</span>
          </div>
        </div>
      </div>
      <div class="_product__container_buttonContainer">
        <button className={`${"active"}`}>43 Inches</button>
        <button>50 Inches</button>
        <button>55 Inches</button>
        <button>65 Inches</button>
      </div>
      <div className="_product__container_options_container">
        <div>
          {[
            { category: "43 Inches", isActive: false },
            { category: "50 Inches", isActive: true },
            { category: "55 Inches", isActive: false },
            { category: "65 Inches", isActive: false },
          ].map(({ active }) => (
            <div
              className={`_product__container_options ${active && "active"}`}
            ></div>
          ))}
        </div>
        <div className="_product__container_description_container">
          <ul>
            <li>Netflix|Prime Video|Disney+Hotstar|Youtube</li>
            <li>Multi-position stand for versatile TV placement</li>
            <li>HD Smart 2048 x 1366 Pixels</li>
          </ul>
        </div>
        <div className="_product__container_delivary_date_container">
          <p>
            {" "}
            Free delivery by <strong>Tomorrow May,</strong>
          </p>

          <strong>May, 7:00 am - 9:00 pm</strong>
        </div>
        <div className="_product__container_buy_container">
          <button>
            <AddToCart />
            Buy
          </button>
        </div>
        <div className="_product__container_footer_container">
          <div className="_product__container_footer_right"> Quick View </div>
          <div className="_product__container_footer_left"> Compare</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;