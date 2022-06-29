import React from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import "./../SCSS/_sonyStorePage.scss"
function Sony_Store_Page() {
  return (
    <>
      <BreadCrumbs title="Sony Authorized stores" />
      <div className="container-fluid checkout__page__container">
        <div className="checkout__page__block"></div>
      </div>
    </>
  );
}

export default Sony_Store_Page;
