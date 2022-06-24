import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./../Pages/Home";
import Play_Station_Page from "./../Pages/Play_Station_Page";
import TeleVision_Page from "./../Pages/TeleVision_Page";
import Camera_Page from "./../Pages/Camera_Page";
import Audio_Page from "./../Pages/Audio_Page";
import Services from "./../Pages/Services";
import Support from "./../Pages/Support";
import Product_Details_Page from "./../Pages/Product_Details_Page";
import Create_Bundle_Page from "./../Pages/Create_Bundle_Page";
import Cart_Page from "./../Pages/Cart_Page";
import Checkout_Page from "./../Pages/Checkout_Page";
import Dashboard from "./../Pages/Dashboard";
import My_Orders from "./../Pages/My_Orders"; 
import Order_Details from "./../Pages/Order_Details";
import Category_Page from "./../Pages/Category_Page";
import All_Category_Page from "./../Pages/All_Category_Page";
import AllProducts from "./../Pages/All_Products";

function AllRoutes({reloadingHandle,log}) {
  return (
    <Routes>
      <Route exact path="/" element={<Home log="log" />}></Route>
      <Route exact path="/products" element={<AllProducts />} ></Route>
      <Route exact path="/allcategories" element={<Category_Page />} ></Route>
      <Route exact path="/category" element={<All_Category_Page />} ></Route>
      <Route exact path="/playstation" element={<Play_Station_Page />}></Route>
      <Route exact path="/television" element={<TeleVision_Page />}></Route>
      <Route exact path="/camera" element={<Camera_Page />}></Route>
      <Route exact path="/audio" element={<Audio_Page />}></Route>
      <Route exact path="/services" element={<Services />}></Route>
      <Route exact path="/support" element={<Support />}></Route>
      <Route
        exact
        path="/products/:id"
        element={<Product_Details_Page />}
      ></Route>
      <Route
        exact
        path="/create_bundle"
        element={<Create_Bundle_Page />}
      ></Route>
      <Route exact path="/cart_page" element={<Cart_Page />}></Route>
      <Route exact path="/checkout" element={<Checkout_Page reloadingHandle={reloadingHandle} />}></Route>
      <Route exact path="/dashboard" element={<Dashboard />}></Route>
      <Route exact path="/user/orders" element={<My_Orders />}></Route>
      <Route exact path="/user/orders/1" element={<Order_Details />}></Route>
      {/* <Route exact path="/contact" element={<Contact />}></Route> */}
    </Routes>
  );
}

export default AllRoutes;
