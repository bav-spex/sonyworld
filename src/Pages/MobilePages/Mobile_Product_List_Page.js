import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../../SCSS/MobilePages/_mobileFilterModal.scss";
import "./../../SCSS/MobilePages/_mobileProductList.scss";
import gridunselect from "./../../assets/Icon/grid_unselected.svg";
import listunselect from "./../../assets/Icon/grid_unselected.svg";
import BreadCrumbs from "../../Components/BreadCrumbs";
import MobileProductListGrid from './Mobile_Product_List_Grid';
import MobileProductListListDetail from './Mobile_Product_List_ListDetail';
import compareIcon from './../../assets/Icon/compare-white.svg';
import filterIcon from './../../assets/Icon/filter-white.svg';
import sortbyIcon from './../../assets/Icon/sortby-white.svg';
import Heading7 from "../../Components/Font/Heading7";
import Heading5 from "../../Components/Font/Heading5";
import Heading6 from "../../Components/Font/Heading5";
import star from "./../../assets/Icon/orange-review.svg";

function Mobile_Product_List_Page({ product }) {

    const [productListView, setProductListView] = useState("grid");

    const onClickGridList = (type) => {
        if (type === "grid") {
            setProductListView("grid");
        }
        if (type === "list") {
            setProductListView("list");
        }
    };
    //   console.log();

    return (
        <>
            <div className="container-fluid mb__filter__list">
                <div className="row">
                    <div className="col-4">
                        <div className="dropdown w-100">
                            <button
                                className="btn dropdown-toggle w-100"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Inches
                            </button>
                            <ul
                                className="dropdown-menu p-2"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <li className="mb-2">
                                    <input type="checkbox" id="box-1" />
                                    <label className="ms-2" for="box-1">
                                        Upto 32"
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="box-2" />
                                    <label className="ms-2" for="box-2">
                                        Upto 32"
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="box-3" />
                                    <label className="ms-2" for="box-3">
                                        Upto 32"
                                    </label>
                                </li>
                            </ul>
                        </div>
                        {/* dropdown end */}
                    </div>
                    {/* col end */}
                    <div className="col-4">
                        <div className="dropdown w-100">
                            <button
                                className="btn dropdown-toggle w-100"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Resolution
                            </button>
                            <ul
                                className="dropdown-menu p-2"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <li className="mb-2">
                                    <input type="checkbox" id="box-4" />
                                    <label className="ms-2" for="box-4">
                                        Upto 32"
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="box-5" />
                                    <label className="ms-2" for="box-5">
                                        Upto 32"
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="box-6" />
                                    <label className="ms-2" for="box-6">
                                        Upto 32"
                                    </label>
                                </li>
                            </ul>
                        </div>
                        {/* dropdown end */}
                    </div>
                    {/* col end */}
                    <div className="col-4 text-center">
                        <div
                            className={
                                productListView === "grid"
                                    ? "grid__button mb__grid__active d-flex align-items-center justify-content-center h-100"
                                    : " grid__button"
                            }
                            onClick={() => onClickGridList("list")}
                        >
                            <img src={gridunselect} alt="grid" className="me-2" />
                            <strong>Grid View</strong>
                        </div>
                        <div
                            className={
                                productListView === "list"
                                    ? "grid__button mb__grid__active d-flex align-items-center justify-content-center h-100"
                                    : "grid__button  "
                            }
                            onClick={() => onClickGridList("grid")}
                        >
                            <img src={listunselect} alt="grid" className="me-2" />
                            <strong>List View</strong>
                        </div>
                    </div>
                    {/* col end */}

                </div>
                {/* row end */}
            </div>
            {/*  top filter ends here */}
            {/* mb__product__list__breadcrumb start */}
            <div className="mb__product__list__breadcrumb">
                <BreadCrumbs title="Television" />
            </div>

            {/* list detail start */}
            <div className="container-fluid mb__product__list__detail__sec">
                <div className="row">
                    <div
                        className={
                            productListView === "grid"
                                ? " d-flex col-12"
                                : " d-none"
                        }

                    >

                        <MobileProductListGrid />
                    </div>
                    <div
                        className={
                            productListView === "list"
                                ? " col-12"
                                : " d-none"
                        }

                    >

                        <MobileProductListListDetail />
                    </div>
                </div>
            </div>
            {/* list detail end */}
            <div className="mb__product__list__bottom__filter">
                <ul className="ps-0">
                    <li className="">
                        <button className=" btn btn__primary__black ">
                            <img src={compareIcon} alt="compare" />
                            Compare
                        </button>
                    </li>
                    <li>
                        <button className=" btn btn__primary__orange" data-bs-toggle="modal" data-bs-target="#filterByModal">
                            <img src={filterIcon} alt="Filter" />
                            Filter
                        </button>
                    </li>
                    <li>
                        <button className=" btn btn__primary__orange" data-bs-toggle="modal" data-bs-target="#SortByModal">
                            <img src={sortbyIcon} alt="Filter" />
                            Sort By
                        </button>
                    </li>

                </ul>
            </div>
            {/* filter modal start */}
            {/* <!-- Modal --> */}
            <div
                className="modal mb__bottom_popup mb__filter__related__popup"
                id="filterByModal"
                tabindex="-1"
                aria-labelledby="filterByModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog mb__dialog__end modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <Heading5 text="Filter By" />
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <Heading6 text="Sort By" />
                            <ul className="d-flex list-unstyled">
                                <li className="mb-2">
                                    <input type="checkbox" id="plh" />
                                    <label className="ms-2" for="plh">
                                        Price -- Low to High
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="n" />
                                    <label className="ms-2" for="n">
                                        Newest First
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="c" />
                                    <label className="ms-2" for="c">
                                        Price -- High to Low
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="e" />
                                    <label className="ms-2" for="e">
                                        Popularity
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="a" />
                                    <label className="ms-2" for="a">
                                        Via Customer Reviews
                                    </label>
                                </li>
                            </ul>
                            <hr />
                            <Heading6 text="Deals" />
                            <ul className="d-flex list-unstyled">
                                <li className="mb-2">
                                    <input type="checkbox" id="Today" />
                                    <label className="ms-2" for="Today">
                                        Today's Deal
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="Offers" />
                                    <label className="ms-2" for="Offers">
                                        Via Offers
                                    </label>
                                </li>
                            </ul>
                            <hr />
                            <Heading6 text="Delivery Day" />
                            <ul className="d-flex list-unstyled">
                                <li className="mb-2">
                                    <input type="checkbox" id="Tomorrow" />
                                    <label className="ms-2" for="Tomorrow">
                                        Get It by Tomorrow
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="Days" />
                                    <label className="ms-2" for="Days">
                                        Get It in 2 Days
                                    </label>
                                </li>
                            </ul>
                            <hr />
                            <Heading6 text="Customer Review" />
                            <ul className="mb__start__rating__block d-flex">
                                <li>
                                    <input type="checkbox" id="rate1" />
                                    <label className="ms-2" for="rate1">
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <span className="mb__rating__text">4.3</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="rate1" />
                                    <label className="ms-2" for="rate1">
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <span className="mb__rating__text">3.0</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="rate1" />
                                    <label className="ms-2" for="rate1">
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <span className="mb__rating__text">3.5</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="rate1" />
                                    <label className="ms-2" for="rate1">
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <span className="mb__rating__text">4.3</span>
                                    </label>
                                </li>
                            </ul>

                            <hr />
                            <Heading6 text="Price" />
                            <ul className="d-flex list-unstyled">
                                <li className="mb-2">
                                    <input type="checkbox" id="SAR1" />
                                    <label className="ms-2" for="SAR1">
                                        SAR1,000 - SAR2,000
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="Under" />
                                    <label className="ms-2" for="Under">
                                        Under SAR1,000
                                    </label>
                                </li>
                            </ul>
                            <hr />
                            <Heading6 text="Color" />
                            <ul className="d-flex list-unstyled">
                                <li className="mb-2">
                                    <input type="checkbox" id="black" />
                                    <label className="ms-2" for="black">
                                        black
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="red" />
                                    <label className="ms-2" for="red">
                                        red
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="blue" />
                                    <label className="ms-2" for="blue">
                                        blue
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="pink" />
                                    <label className="ms-2" for="pink">
                                        pink
                                    </label>
                                </li>
                            </ul>
                            <hr />
                            <Heading6 text="Feature" />
                            <ul className="d-flex list-unstyled">
                                <li className="mb-2">
                                    <input type="checkbox" id="Ambient" />
                                    <label className="ms-2" for="Ambient">
                                    Ambient Mode
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="Quantum" />
                                    <label className="ms-2" for="Quantum">
                                    Quantum Technology
                                    </label>
                                </li>
                            </ul>
                            <hr />
                            <Heading6 text="TV Model Year" />
                            <ul className="d-flex list-unstyled">
                                <li className="mb-2">
                                    <input type="checkbox" id="2022" />
                                    <label className="ms-2" for="2022">
                                    2022
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="2021" />
                                    <label className="ms-2" for="2021">
                                    2021 
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="2022" />
                                    <label className="ms-2" for="2022">
                                    2022 
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer mb__static__btn__group border-top-0">
                            <button
                                type="button"
                                className="btn btn__grey__solid mb-2"
                                data-bs-target="#addAddressModal"
                                data-bs-toggle="modal"
                                data-bs-dismiss="modal"
                            >
                                cancel
                            </button>
                            <button
                                type="button"
                                className="btn__primary__orange btn btn-primary mb-3"
                            >
                                apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal end--> */}

            {/* sort by modal start */}
             {/* <!-- Modal --> */}
             <div
                className="modal mb__bottom_popup mb__filter__related__popup"
                id="SortByModal"
                tabindex="-1"
                aria-labelledby="SortByModalModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog mb__dialog__end modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <Heading5 text="Sort By" />
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">                            
                            <ul className="d-flex list-unstyled">
                                <li className="mb-2">
                                    <input type="checkbox" id="plh" />
                                    <label className="ms-2" for="plh">
                                        Price -- Low to High
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="n" />
                                    <label className="ms-2" for="n">
                                        Newest First
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="c" />
                                    <label className="ms-2" for="c">
                                        Price -- High to Low
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="e" />
                                    <label className="ms-2" for="e">
                                        Popularity
                                    </label>
                                </li>
                                <li className="mb-2">
                                    <input type="checkbox" id="a" />
                                    <label className="ms-2" for="a">
                                        Via Customer Reviews
                                    </label>
                                </li>
                            </ul>
                                                    
                           
                           
                        </div>
                        <div className="modal-footer mb__static__btn__group border-top-0">
                            <button
                                type="button"
                                className="btn btn__grey__solid mb-2"
                                data-bs-target="#addAddressModal"
                                data-bs-toggle="modal"
                                data-bs-dismiss="modal"
                            >
                                cancel
                            </button>
                            <button
                                type="button"
                                className="btn__primary__orange btn btn-primary mb-3"
                            >
                                apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal end--> */}
        </>
    );
}

export default Mobile_Product_List_Page;
