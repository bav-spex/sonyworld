import React from "react";
import * as types from "./../redux/actionType"
import "./../SCSS/_homePageCategoryBlock.scss";
import { Link } from "react-router-dom";

import feature_product_01 from "./../assets/FeatureProduct/feature_product_01.png";
import feature_product_02 from "./../assets/FeatureProduct/feature_product_02.png";
import feature_product_03 from "./../assets/FeatureProduct/feature_product_03.png";
import feature_product_04 from "./../assets/FeatureProduct/feature_product_04.png";
import feature_product_05 from "./../assets/FeatureProduct/feature_product_05.png";
import feature_product_06 from "./../assets/FeatureProduct/feature_product_01.png";
import Heading6 from "./Font/Heading6";
import { useDispatch, useSelector } from "react-redux";

function HomePageCategoryBlock() {
  const dispatch = useDispatch()
  const feature_product_001 = feature_product_01;
  const feature_product_002 = feature_product_02;
  const feature_product_003 = feature_product_03;
  const feature_product_004 = feature_product_04;
  const feature_product_005 = feature_product_05;
  const feature_product_006 = feature_product_06;
  const feature_product_007 = feature_product_06;
  const feature_product_008 = feature_product_06;
  const feature_product_009 = feature_product_06;
  const feature_product_0010 = feature_product_06;
  const feature_product_0011 = feature_product_06;
  const feature_product_0012 = feature_product_06;
  const categoryData =useSelector(state=>state.appData.categoryData)
  const changeReducerSelectedCategory = (catObj) => {
    dispatch({
      type: types.SET__SELECTED__CATEGORY,
      payload: catObj,
    });
  };
  // console.log(categoryData);
  return (
    <div className="home__page__category__block">
      <div className="row home__page__category__inner__block">
        {categoryData?.children_data.map((cat, catIndex) => {
          return (
            <div key={cat.id} className="col-4 col-md-2 category__block">
              <Link to={`${cat.name
                      .toLowerCase()
                      .trim()
                      .replace(/ /g, "-")}-c-${cat.id}`}
                      onClick={() => changeReducerSelectedCategory(cat)}>
                <img
                  src={eval(`feature_product_00${catIndex+1}`)}
                  alt="category-image"
                  className="category__image"
                />
              </Link>

              <Heading6 text={cat.name}></Heading6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePageCategoryBlock;
