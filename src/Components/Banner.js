import React, { useEffect, useState } from "react";
import "./../SCSS/_banner.scss";
// import white_banner_pin  from "./../assets/Icon/white_banner_pin.svg";
// import banner_01 from "/Banner/banner_01.jpg";
import banner_02 from "./../assets/Banner/banner_01.jpg";
import left_arrow from "./../assets/Icon/left_arrow.svg";
import right_arrow from "./../assets/Icon/right_arrow.svg";

const bannerDataJSON = [
  {
    id: 1,
    title: "The Furniture That Defines You",
    image: banner_02,
  },
  {
    id: 2,
    title: "The Furniture That Defines You",
    image: banner_02,
  },
  {
    id: 3,
    title: "The Furniture That Defines You",
    image: banner_02,
  },
  {
    id: 4,
    title: "The Furniture That Defines You",
    image: banner_02,
  },
];

function Banner({bannerData}) {
  const [index, setIndex] = useState(0);
  const [banner, setBanner] = useState(bannerDataJSON);

  useEffect(() => {
    if (index > banner.length - 1) {
      let newIndex = 0;
      setIndex(newIndex);
    }
    if (index < 0) {
      let newIndex = banner.length - 1;
      setIndex(newIndex);
    }
  }, [index, banner]);

  //   useEffect(() => {
  //     let slider = setInterval(() => {
  //       setIndex(index + 1);
  //     }, 3000);
  //     return () => clearInterval(slider);
  //   });

  //Getting current width of window
  const [windowWidth, setWindowWidth] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  // updating block height similar to banner_image
  useEffect(() => {
    if (
      document.getElementsByClassName("banner__image")[0].offsetHeight !== 0
    ) {
      document.getElementById("banner__block").style.height = `${
        document.getElementsByClassName("banner__image")[0].offsetHeight
      }px`;
    }
  }, [windowWidth]);

  return (
    <>
      <div className="container-fluid banner__container">
        <div className=" banner__block" id="banner__block">
          {banner.map((ban, banIndex) => {
            let position = "banner nextBanner";
            if (banIndex === index) {
              position = "banner activeBanner";
            }
            if (
              banIndex === index - 1 ||
              (index === 0 && banIndex === banner.length - 1)
            ) {
              position = "banner prevBanner";
            }
            return (
              <div className={position} key={ban.id}>
                <img className="banner__image" src={ban.image} alt="" />
                {/* <p className="banner__title">{ban.title}</p> */}
              </div>
            );
          })}
          <div className="banner__arrow__block">
            <div className="icon__block " onClick={() => setIndex(index - 1)}>
              <img src={left_arrow} alt="" className="" />
            </div>
            <div className="icon__block " onClick={() => setIndex(index + 1)}>
              <img src={right_arrow} alt="" className="" />
            </div>
          </div>
        </div>

        {/* <img className="banner__pin__block" src={white_banner_pin}/> */}
      </div>
    </>
  );
}

export default Banner;
