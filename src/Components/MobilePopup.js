import React,{useState} from 'react'
import "./../SCSS/_mobilePopup.scss"
import product_01 from "./../Assets/Product/product_01.jpg";
import NavbarAdBanner_01 from "./../Assets/NavbarAdBanner/NavbarAdBanner_01.jpg";
const categoryData = [
    {
      id: 1,
      productName: "Play Station",
      category: [
        "Gaming PlayStation 4K",
        "Gaming PlayStation 8K",
        "2021 PlayStation's",
        "Smart 4K PlayStation",
        "Smart 4K PlayStation",
        "Smart 8K PlayStation",
        "Smart OLED PlayStation",
      ],
      productList: [
        {
          id: 0,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
          image: product_01,
        },
        {
          id: 1,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
          image: product_01,
        },
        {
          id: 2,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
          image: product_01,
        },
        {
          id: 3,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
          image: product_01,
        },
        {
          id: 4,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
          image: product_01,
        },
        {
          id: 5,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
          image: product_01,
        },
        {
          id: 6,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
          image: product_01,
        },
        {
          id: 7,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
          image: product_01,
        },
        {
          id: 8,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
          image: product_01,
        },
      ],
      adBanner: [
        {
          id: 0,
          image: NavbarAdBanner_01,
        },
        {
          id: 1,
          image: NavbarAdBanner_01,
        },
        {
          id: 2,
          image: NavbarAdBanner_01,
        },
      ],
    },
    {
      id: 2,
      productName: "Television",
      category: [
        "Gaming TV 4K",
        "Gaming TV 8K",
        "2021 TV's",
        "Smart 4K TV",
        "Smart 4K TV",
        "Smart 8K TV",
        "Smart OLED TV",
      ],
      productList: [
        {
          id: 0,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
          image: product_01,
        },
        {
          id: 1,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
          image: product_01,
        },
        {
          id: 2,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
          image: product_01,
        },
        {
          id: 3,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
          image: product_01,
        },
        {
          id: 4,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
          image: product_01,
        },
        {
          id: 5,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
          image: product_01,
        },
        {
          id: 6,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
          image: product_01,
        },
        {
          id: 7,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
          image: product_01,
        },
        {
          id: 8,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
          image: product_01,
        },
      ],
      adBanner: [
        {
          id: 0,
          image: NavbarAdBanner_01,
        },
        {
          id: 1,
          image: NavbarAdBanner_01,
        },
        {
          id: 2,
          image: NavbarAdBanner_01,
        },
      ],
    },
    {
      id: 3,
      productName: "Camera",
      category: [
        "Gaming Camera 4K",
        "Gaming Camera 8K",
        "2021 Camera's",
        "Smart 4K Camera",
        "Smart 4K Camera",
        "Smart 8K Camera",
        "Smart OLED Camera",
      ],
      productList: [
        {
          id: 0,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
          image: product_01,
        },
        {
          id: 1,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
          image: product_01,
        },
        {
          id: 2,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
          image: product_01,
        },
        {
          id: 3,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
          image: product_01,
        },
        {
          id: 4,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
          image: product_01,
        },
        {
          id: 5,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
          image: product_01,
        },
        {
          id: 6,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
          image: product_01,
        },
        {
          id: 7,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
          image: product_01,
        },
        {
          id: 8,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Camera',
          image: product_01,
        },
      ],
      adBanner: [
        {
          id: 0,
          image: NavbarAdBanner_01,
        },
        {
          id: 1,
          image: NavbarAdBanner_01,
        },
        {
          id: 2,
          image: NavbarAdBanner_01,
        },
      ],
    },
    {
      id: 4,
      productName: "Audio",
      category: [
        "Gaming Audio 4K",
        "Gaming Audio 8K",
        "2021 Audio's",
        "Smart 4K Audio",
        "Smart 4K Audio",
        "Smart 8K Audio",
        "Smart OLED Audio",
      ],
      productList: [
        {
          id: 0,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
          image: product_01,
        },
        {
          id: 1,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
          image: product_01,
        },
        {
          id: 2,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
          image: product_01,
        },
        {
          id: 3,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
          image: product_01,
        },
        {
          id: 4,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
          image: product_01,
        },
        {
          id: 5,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
          image: product_01,
        },
        {
          id: 6,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
          image: product_01,
        },
        {
          id: 7,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
          image: product_01,
        },
        {
          id: 8,
          title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
          image: product_01,
        },
      ],
      adBanner: [
        {
          id: 0,
          image: NavbarAdBanner_01,
        },
        {
          id: 1,
          image: NavbarAdBanner_01,
        },
        {
          id: 2,
          image: NavbarAdBanner_01,
        },
      ],
    },
  ];
function MobilePopup({menuIndex}) {
    const [mobileShowPopup, setMobileShowPopup] = useState(true);
  
  return (
    <div className={
        mobileShowPopup ? "mobile__product__popup__container" : "mobile__product__popup__container__disable"
      }>
        <div className="mobile__product__popup__block">
        {categoryData.map((mainProduct, mainProductIndex) => {
              return (
                <div
                  key={mainProduct.id}
                  className={
                    menuIndex === mainProduct.id
                      ? "row mobile__inner__product__popup__block"
                      : "row mobile__inner__product__popup__block__disable"
                  }
                >
                  <div className="row col-12 mobile__category__block">
                    {mainProduct.category.map((category, categoryIndex) => {
                      return (
                        <p className="col-12 col-sm-6 mobile__category__title" key={categoryIndex}>
                          {category}
                        </p>
                      );
                    })}
                  </div>
                  <div className="row col-12 mobile__productList__block">
                    {mainProduct.productList.map((product, productIndex) => {
                      return (
                        <div key={product.id} className="col-6 col-sm-4 mobile__product__block">
                          <img
                            src={product_01}
                            alt=""
                            className="mobile__product__image"
                          />
                          {/* <img
                              src={product.image}
                              alt=""
                              className="product__image"
                            /> */}
                          <p className="mobile__product__title">{product.title}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="row col-12 mobile__adsBanner__block">
                    {mainProduct.adBanner.map((adBanner, adBannerIndex) => {
                      return (
                          <div className="col-12 col-sm-4 mobile__adBanner__images__block">

                        <img
                          key={adBanner.id}
                          src={NavbarAdBanner_01}
                          alt=""
                          className="mobile__adBanner__image"
                          />
                          </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
  )
}

export default MobilePopup