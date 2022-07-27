import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../../SCSS/MobilePages/_mobileProductList.scss";
import gridunselect from "./../../assets/Icon/grid_unselected.svg";
import listunselect from "./../../assets/Icon/grid_unselected.svg";
import BreadCrumbs from "../../Components/BreadCrumbs";
import MobileProductListGrid from './Mobile_Product_List_Grid';
import compareIcon from './../../assets/Icon/compare-white.svg';
import filterIcon from './../../assets/Icon/filter-white.svg';
import sortbyIcon from './../../assets/Icon/sortby-white.svg';

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
                        onClick={() => onClickGridList("list")}
                    >

                        <MobileProductListGrid />
                    </div>
                    <div
                        className={
                            productListView === "list"
                                ? " d-flex col-12"
                                : " d-none"
                        }
                        onClick={() => onClickGridList("grid")}
                    >

                        <strong>List View</strong>
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
                        <button className=" btn btn__primary__orange">
                            <img src={filterIcon} alt="Filter" />
                            Filter
                        </button>
                    </li>
                    <li>
                        <button className=" btn btn__primary__orange">
                            <img src={sortbyIcon} alt="Filter" />
                            Sort By
                        </button>
                    </li>

                </ul>
            </div>
        </>
    );
}

export default Mobile_Product_List_Page;
