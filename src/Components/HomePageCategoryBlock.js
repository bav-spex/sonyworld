import React from "react";
import "./../SCSS/_homePageCategoryBlock.scss";
import { Link } from "react-router-dom";

import feature_product_01 from "./../assets/FeatureProduct/feature_product_01.png";
import feature_product_02 from "./../assets/FeatureProduct/feature_product_02.png";
import feature_product_03 from "./../assets/FeatureProduct/feature_product_03.png";
import feature_product_04 from "./../assets/FeatureProduct/feature_product_04.png";
import feature_product_05 from "./../assets/FeatureProduct/feature_product_05.png";
import feature_product_06 from "./../assets/FeatureProduct/feature_product_01.png";
import Heading6 from "./Font/Heading6";

function HomePageCategoryBlock() {
  const feature_product_001 = feature_product_01;
  const feature_product_002 = feature_product_02;
  const feature_product_003 = feature_product_03;
  const feature_product_004 = feature_product_04;
  const feature_product_005 = feature_product_05;
  const feature_product_006 = feature_product_06;
  return (
    <div className="home__page__category__block">
      <div className="row home__page__category__inner__block">
        {[1, 2, 3, 4, 5, 6].map((cat, catIndex) => {
          return (
            <div key={catIndex} className="col-4 col-md-2 category__block">
              <Link to="/products">
                <img
                  src={eval(`feature_product_00${cat}`)}
                  alt="category-image"
                  className="category__image"
                />
              </Link>

              <Heading6 text="category"></Heading6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePageCategoryBlock;
