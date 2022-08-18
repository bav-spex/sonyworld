import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as types from "./../redux/actionType";
// import "./../SCSS/ProductListPage/_productListPageFilterProductBlock.scss";
// import "./../SCSS/ProductListPage/_productListBannerSection.scss";
// import "./../SCSS/ProductListPage/_productListCategorySection.scss";
// import "./../SCSS/ProductListPage/_productListFilter.scss";

import "./../SCSS/_productListPage.scss";
import PLPBannerAndCategorySection from "../Components/ProductListPageComponent/PLPBannerAndCategorySection";
import PLPFilterProductBlock from "../Components/ProductListPageComponent/PLPFilterProductBlock";
import PLPBannerTwo from "../Components/ProductListPageComponent/PLPBannerTwo";
import PLPSimilarProduct from "../Components/ProductListPageComponent/PLPSimilarProduct";

import feature_product_04 from "./../assets/FeatureProduct/feature_product_04.png";
import white_tv from "./../assets/Icon/white_tv.svg";
import red_tv from "./../assets/Icon/red_tv.svg";
import white_accessories from "./../assets/Icon/white_accessories.svg";
import red_accessories from "./../assets/Icon/red_accessories.svg";
import bannerImg1 from "./../assets/Product/plp_banner_two.png";

import sony_logo from "./../assets/Icon/sony_logo.svg";
import product_01 from "./../assets/Product/product_01.png";
import product_02 from "./../assets/Product/product_02.png";
import product_03 from "./../assets/Product/product_03.png";
import product_04 from "./../assets/Product/product_04.png";
import product_05 from "./../assets/Product/product_05.png";
import PLPProductPopup from "../Components/Popup/PLPProductPopup";
import PLPComparePopup from "../Components/Popup/PLPComparePopup";
import CarouselTypeTwo from "../Components/CarouselTypeTwo";

import newArrivals_01 from "./../assets/NewArrivals/newArrivals_01.png";
import newArrivals_02 from "./../assets/NewArrivals/newArrivals_02.png";
import newArrivals_03 from "./../assets/NewArrivals/newArrivals_03.png";
import newArrivals_04 from "./../assets/NewArrivals/newArrivals_04.png";
import newArrivals_05 from "./../assets/NewArrivals/newArrivals_05.png";
import MobileProductListPage from "./MobilePages/Mobile_Product_List_Page";
import { useParams } from "react-router";
import {
  loadApplyFilterData,
  loadApplyFilterProductsData,
  loadCategoryFilterData,
  loadFilterData,
  loadSingleCategoryData,
} from "../redux/appAction";
import { getFilterData, getProductsOfCategory } from "../services/plp.service";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const Product_List_Page = ({ handleChangeCartPopup }) => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [filteredProductsData, setFilteredProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subCategoryId, setSubCategoryId] = useState(
    category.split("-").slice(-1)[0]
  );
  const [filterColor, setFilterColor] = useState([]);
  const [filterBrand, setFilterBrand] = useState([]);
  const [filterPrice, setFilterPrice] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const [filterOptionData, setFilterOptionData] = useState([]);

  const [finalFilter, setFinalFilter] = useState({
    filterDetails: { category: [category.split("-").slice(-3)[0]] },
  });
  const selectedCategory = useSelector(
    (state) => state.appData.selectedCategory
  );
  const categoryData = useSelector((state) => state.appData.categoryData);
  // const filterOptionData = useSelector(
  //   (state) => state.appData.filterOptionData
  // );
  // console.log(filterOptionData);
  const applyFilterProductsData = useSelector(
    (state) => state.appData.applyFilterProductsData
  );

  useEffect(async () => {
    const urlCategoryId = category.split("-").slice(-3)[0];
    const urlSelectedCategoryId = category.split("-").slice(-3)[2];
    setSelectedCategoryId(urlCategoryId);
    let mainSelectedCategory = categoryData?.children_data.filter(
      (mainCat) => mainCat.id == urlSelectedCategoryId
    );
    dispatch({
      type: types.SET__SELECTED__CATEGORY,
      payload: mainSelectedCategory[0],
    });
    const categoryIdArray = [];
    categoryIdArray.push(urlCategoryId);
    setFilterCategory(categoryIdArray);
    setFinalFilter({
    
      filterDetails: {  keyword:"", category: categoryIdArray },
      sortBy: {
        price: "asc",
      },
      limit: 10,
      offset: 0,
    });
    setFilterBlock(finalFilter);
  }, [category]);

  useEffect(() => {
    const urlCategoryId = category.split("-").slice(-3)[0];
    setSelectedCategoryId(urlCategoryId);
  }, [selectedCategory, category]);

  useEffect(() => {
    dispatch(loadApplyFilterProductsData(finalFilter));
    setFilterBlock(finalFilter);
  }, [finalFilter, category]);
  useEffect(() => {
    getFilterData(finalFilter)
      .then((res) => {
        console.log("res", res);
        setFilterOptionData(res);
        // handleChangeCartPopup(true)
      })
      .catch((err) => {
        console.log(err.response.data.message, "error >>>>");
        // dispatch(services.notifyError({ message: err.response.data.message }));
      });
  }, [category]);

  useEffect(() => {
    if (Object.values(applyFilterProductsData).length !== 0) {
      setFilteredProductsData(applyFilterProductsData);
      setLoading(false);
    }
  }, [applyFilterProductsData]);

  // useEffect(() => {
  //   if (Object.values(applyFilterProductsData).length !== 0) {
  //     setFilteredProductsData(applyFilterProductsData);
  //     setLoading(false);
  //   }
  // }, [filterOptionData]);
  // useLayoutEffect(()=>{
  //     document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
  //   },[filterCategory])
  const updateSelectedSubCategoryId = (subCategory) => {
    // console.log(subCategory);

    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
    setFilterBrand([]);
    setFilterColor([]);
    setFilterPrice([]);
    setSelectedCategoryId(subCategory.id);
    const categoryIdArray = [];
    categoryIdArray.push(subCategory.id);
    setFilterCategory(categoryIdArray);
    setFinalFilter({
      
      filterDetails: {keyword:"", category: categoryIdArray },
      sortBy: {
        price: "asc",
      },
      limit: 10,
      offset: 0,
    });
    navigate(
      `/${subCategory.name.toLowerCase().trim().replace(/ /g, "-")}-c-${
        subCategory.id
      }-mc-${subCategory.parent_id}`
    );
  };

  const [filterBlock, setFilterBlock] = useState();

  // console.log(filterBlock);
  const onFilter = (attkey, id, selection) => {
    // navigate(`?filterBy=${key}:${data}`)
    // debugger
    console.log("onFilter===>", attkey, id, selection);
    if (attkey === "order") {
      const newFilter = {
        ...filterBlock,
        sortBy: { price: id },
      };
      setFilterBlock(newFilter);
    }
    if (attkey === "color") {
      if (filterColor.includes(id)) {
        let newFilterColor = filterColor.filter((filtered) => filtered != id);
        setFilterColor(newFilterColor);
      } else {
        let newFilterColor = [...filterColor, id];
        setFilterColor(newFilterColor);
      }
    }
    if (attkey === "brand") {
      if (filterBrand.includes(id)) {
        let newFilterBrand = filterBrand.filter((filtered) => filtered != id);
        setFilterBrand(newFilterBrand);
      } else {
        let newFilterBrand = [...filterBrand, id];
        setFilterBrand(newFilterBrand);
      }
    }
    if (attkey === "price") {
      if (id.includes("-")) {
        //  debugger
        if (
          filterPrice.find(
            (obj) =>
              obj.min === id.split("-")[0] && obj.max === id.split("-")[1]
          )
        ) {
          let newFilterPrice = filterPrice.filter(
            (filtered) => filtered.min != id.split("-")[0]
          );
          setFilterPrice(newFilterPrice);
        } else {
          let newFilterPrice = [
            ...filterPrice,
            { min: id.split("-")[0], max: id.split("-")[1] },
          ];
          setFilterPrice(newFilterPrice);
        }
      }
    }
    // debugger
    // const found = filterBlock?.[attkey]?.filter((filtered) => filtered == id);
    // console.log(found);

    // console.log(newFilter);
  };
  // console.log(filterPrice);
  useEffect(() => {
    // debugger
    if (filterColor.length > 0) {
      let newFilter = {
        ...filterBlock,
        filterDetails: {
          ...filterBlock?.filterDetails,
          category: filterCategory,
          color: filterColor,
        },
      };
      setFilterBlock(newFilter);
    } else if (filterColor.length <= 0) {
      let newFilter = {
        ...filterBlock,
      };
      delete newFilter?.filterDetails?.color;
      // console.log(newFilter);
      setFilterBlock(newFilter);
    }
  }, [filterColor]);
  // console.log(filterColor);
  useEffect(() => {
    if (filterBrand.length > 0) {
      const newFilter = {
        ...filterBlock,
        filterDetails: {
          ...filterBlock?.filterDetails,
          category: filterCategory,
          brand: filterBrand,
        },
      };
      setFilterBlock(newFilter);
    } else if (filterBrand.length <= 0) {
      let newFilter = {
        ...filterBlock,
      };
      delete newFilter?.filterDetails?.brand;
      // console.log(newFilter);
      setFilterBlock(newFilter);
    }
  }, [filterBrand]);

  useEffect(() => {
    if (filterPrice.length > 0) {
      const newFilter = {
        ...filterBlock,
        filterDetails: {
          ...filterBlock?.filterDetails,
          category: filterCategory,
          display_price: filterPrice,
        },
      };
      setFilterBlock(newFilter);
    } else if (filterPrice.length <= 0) {
      let newFilter = {
        ...filterBlock,
      };
      delete newFilter?.filterDetails?.display_price;
      // console.log(newFilter);
      setFilterBlock(newFilter);
    }
  }, [filterPrice]);

  // useEffect(() => {
  //   if (filterColor.length > 0) {
  //     if (filterPrice.length > 0) {
  //       if (filterBrand.length > 0) {
  //         const newFilter = {
  //           ...filterBlock,
  //           filterDetails: {
  //             category: filterCategory,
  //             display_price: filterPrice,
  //             color: filterColor,
  //             brand: filterBrand,
  //           },
  //         };
  //         setFilterBlock(newFilter);
  //         // console.log("color,price,brand");
  //       } else {
  //         const newFilter = {
  //           ...filterBlock,
  //           filterDetails: {
  //             category: filterCategory,
  //             display_price: filterPrice,
  //             color: filterColor,
  //           },
  //         };
  //         setFilterBlock(newFilter);
  //         // console.log("color,price");
  //       }
  //     } else {
  //       if (filterBrand.length > 0) {
  //         const newFilter = {
  //           ...filterBlock,
  //           filterDetails: {
  //             category: filterCategory,
  //             color: filterColor,
  //             brand: filterBrand,
  //           },
  //         };
  //         setFilterBlock(newFilter);
  //         // console.log("color,brand");
  //       } else {
  //         const newFilter = {
  //           ...filterBlock,
  //           filterDetails: {
  //             category: filterCategory,
  //             color: filterColor,
  //           },
  //         };
  //         setFilterBlock(newFilter);
  //         // console.log("color");
  //       }
  //     }
  //   } else {
  //     if (filterPrice.length > 0) {
  //       if (filterBrand.length > 0) {
  //         const newFilter = {
  //           ...filterBlock,
  //           filterDetails: {
  //             category: filterCategory,
  //             display_price: filterPrice,
  //             brand: filterBrand,
  //           },
  //         };
  //         setFilterBlock(newFilter);
  //         // console.log("price,brand");
  //       } else {
  //         const newFilter = {
  //           ...filterBlock,
  //           filterDetails: {
  //             category: filterCategory,
  //             display_price: filterPrice,
  //           },
  //         };
  //         setFilterBlock(newFilter);
  //         // console.log("price");
  //       }
  //     } else {
  //       if (filterBrand.length > 0) {
  //         const newFilter = {
  //           ...filterBlock,
  //           filterDetails: {
  //             category: filterCategory,
  //             brand: filterBrand,
  //           },
  //         };
  //         setFilterBlock(newFilter);
  //         // console.log("brand");
  //       } else {
  //         const newFilter = {
  //           ...filterBlock,
  //           filterDetails: {
  //             category: filterCategory,
  //           },
  //         };
  //         setFilterBlock(newFilter);
  //         // console.log("nothing");
  //       }
  //     }
  //   }
  // }, [filterBrand, filterColor, filterPrice]);
  // console.log(filterPrice);
  useEffect(() => {
    dispatch(loadApplyFilterProductsData(filterBlock));
    // dispatch(loadFilterData(finalFilter));
  }, [filterBlock]);
  // console.log(finalFilter);
  //for updating id from filter section
  // useEffect(() => {
  //   let categoryIdArray = []
  //   const urlCategoryId = category.split("-").slice(-1)[0]
  //   categoryIdArray.push(urlCategoryId)
  //   dispatch(loadCategoryFilterData(category.split("-").slice(-1)[0]));
  // }, []);
  const [plpProductPopup, setPlpProductPopup] = useState(false);
  const [plpComparePopup, setPlpComparePopup] = useState(false);
  const [compareProductsData, setCompareProductData] = useState([]);
  const [popupProduct, setPopupProduct] = useState({
    id: 1,
    logo: sony_logo,
    image: product_01,
    productName:
      "Z8H | Full Array LED | 8K | High Dynamic Range (HDR) | Smart TV (Android TV)",
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
    productFeatures: [
      {
        id: 1,
        text: "Netflix|Prime Video|Disney+Hotstar|Youtube",
      },
      {
        id: 1,
        text: "Multi-position stand for versatile TV placement",
      },
      {
        id: 1,
        text: "HD Smart 2048 x 1366 Pixels",
      },
    ],
  });
  const closeProductPopup = () => {
    setPlpProductPopup(false);
  };
  const handleChangeProductPopup = (value, product) => {
    setPlpProductPopup(value);
    setPopupProduct(product);
  };
  const closeComparePopup = () => {
    setPlpComparePopup(false);
  };
  const handleChangeComparePopup = (value, product) => {
    setPlpComparePopup(value);
    console.log(product);
    const arrayOfProduct = [...compareProductsData, product];
    if (compareProductsData.length < 4) {
      var dataArr = arrayOfProduct.map((item) => {
        return [JSON.stringify(item), item];
      }); // creates array of array
      var uniqueCompareProductData = new Map(dataArr); // create key value pair from array of array
      setCompareProductData([...uniqueCompareProductData.values()]);
    }
    // setPopupProduct(product);
    console.log(compareProductsData);
  };

  const removeProductFromCompareData = (id) => {
    console.log(id);
  };
  // console.table(filteredProductsData.items);
  if (loading) {
    return <h1>Product Loading...</h1>;
  }
  return (
    <>
      <div className="mb__product__list__container d-block d-lg-none pt-5">
        <MobileProductListPage />
      </div>
      <div className="container-fluid product__list__page__container d-none d-lg-block">
        <div className="product__list__page__block">
          <PLPBannerAndCategorySection
            selectedCategoryId={selectedCategoryId}
            updateSelectedSubCategoryId={updateSelectedSubCategoryId}
            selectedMainCategory={selectedCategory}
          />
          <PLPFilterProductBlock
            onFilter={onFilter}
            filteredProductsData={filteredProductsData}
            filterOptionData={filterOptionData}
            handleChangeProductPopup={handleChangeProductPopup}
            handleChangeComparePopup={handleChangeComparePopup}
          />
          <PLPBannerTwo bannerImage={bannerImg1} />
          <div className="plp__newArrival__block">
            {/* <CarouselTypeTwo
                productDetailPage={true}
                sectionTitle="You Can Also Purchase"
                carouselData={newArrivalData}
                productType="productOne"
                containerClassName="plp__youCanAlsoPurchase__block"
              /> */}
          </div>
        </div>
      </div>
      <div
        className={
          plpProductPopup
            ? "container-fluid plp__product__popup__container"
            : "container-fluid plp__product__popup__container__disable"
        }
      >
        <PLPProductPopup
          handleChangeCartPopup={handleChangeCartPopup}
          product={popupProduct}
          closeProductPopup={closeProductPopup}
        />
      </div>
      <div
        className={
          plpComparePopup
            ? "container-fluid plp__compare__popup__container"
            : "container-fluid plp__compare__popup__container__disable"
        }
      >
        <PLPComparePopup
          compareProductsData={compareProductsData}
          closeComparePopup={closeComparePopup}
          handleChangeComparePopup={handleChangeComparePopup}
          removeProductFromCompareData={removeProductFromCompareData}
        />
      </div>
    </>
  );
};

export default Product_List_Page;
