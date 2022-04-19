import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import down_arrow from "./../Assets/Icon/down_arrow.svg";
// import "./../SCSS/_navbar.scss";
import { useLocation } from "react-router";
function Navbar() {
  const { pathname } = useLocation();

  const [menuIndex, setMenuIndex] = useState("");

  const [className, setClassName] = useState({
    home: "navbar__link active__navbar__link",
    playstation: "navbar__link",
    television: "navbar__link",
    camera: "navbar__link",
    audio: "navbar__link",
    services: "navbar__link",
    support: "navbar__link",
  });

  useEffect(() => {
    let path = {
      home: "navbar__link ",
      playstation: "navbar__link",
      television: "navbar__link",
      camera: "navbar__link",
      audio: "navbar__link",
      services: "navbar__link",
      support: "navbar__link",
    };

    if (pathname.includes("/playstation")) {
      path.playstation = "navbar__link active__navbar__link";
    } else if (pathname.includes("/television")) {
      path.television = "navbar__link active__navbar__link";
    } else if (pathname.includes("/camera")) {
      path.camera = "navbar__link active__navbar__link";
    } else if (pathname.includes("/audio")) {
      path.audio = "navbar__link active__navbar__link";
    } else if (pathname.includes("/services")) {
      path.services = "navbar__link active__navbar__link";
    } else if (pathname.includes("/support")) {
      path.support = "navbar__link active__navbar__link";
    } else {
      path.home = "active__navbar__link navbar__link";
    }
    setClassName(path);
  });

  return (
    <div className="container-fluid navbar__container">
      <div className="container navbar">
        <div className="navbar__link_block">
          <Link
            // onClick={() => setShowPopup(true)}
            onMouseEnter={() => setMenuIndex("")}
            className={className.home}
            to="/"
          >
            Home
          </Link>
          <div
            // onClick={() => setShowPopup(true)}
            onMouseEnter={() => setMenuIndex("playstation")}
            className={
              menuIndex === "playstation"
                ? "active__navbar__link navbar__link"
                : className.playstation
            }
            // to="/playstation"
          >
            PlayStation
            <img src={down_arrow} alt="" className="down__arrow__icon" />
          </div>
          <div
            // onClick={() => setShowPopup(true)}
            onMouseEnter={() => setMenuIndex("television")}
            className={
              menuIndex === "television"
                ? "active__navbar__link navbar__link"
                : className.television
            }
            // to="/television"
          >
            Television
            <img src={down_arrow} alt="" className="down__arrow__icon" />
          </div>
          <div
            // onClick={() => setShowPopup(true)}
            onMouseEnter={() => setMenuIndex("camera")}
            className={
              menuIndex === "camera"
                ? "active__navbar__link navbar__link"
                : className.camera
            }
            // to="/camera"
          >
            Camera
            <img src={down_arrow} alt="" className="down__arrow__icon" />
          </div>
          <div
            // onClick={() => setShowPopup(true)}
            onMouseEnter={() => setMenuIndex("audio")}
            className={
              menuIndex === "audio"
                ? "active__navbar__link navbar__link"
                : className.audio
            }
            // to="/audio"
          >
            Audio
            <img src={down_arrow} alt="" className="down__arrow__icon" />
          </div>
          <Link
            onMouseEnter={() => setMenuIndex("")}
            className={className.services}
            to="/services"
          >
            Services
          </Link>
          <Link
            onMouseEnter={() => setMenuIndex("")}
            className={className.support}
            to="/support"
          >
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
