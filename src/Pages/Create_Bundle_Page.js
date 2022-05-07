import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs'
import TopNavbar from '../Components/TopNavbar'

function Create_Bundle_Page() {
  return (
    <>
    <TopNavbar />
    <BreadCrumbs/>
    <div className="container-fluid create__bundle__page__container">
      <div className="row create__bundle__page__block">
        <div className="col-md-12 col-xl-9 row create__bundle__left__block">
          <div className="row cb__product__block">
            <div className="col-12 col-sm-3 cb__product__left__block"></div>
            <div className="col-12 col-sm-9 cb__product__right__block"></div>
          </div>
        </div>
        <div className="col-md-12 col-xl-9  create__bundle__right__block"></div>
      </div>
    </div>
    </>
  )
}

export default Create_Bundle_Page