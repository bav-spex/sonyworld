import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Home from "./Pages/Home";
import Play_Station_Page from "./Pages/Play_Station_Page";
import TeleVision_Page from "./Pages/TeleVision_Page";
import Camera_Page from "./Pages/Camera_Page";
import Audio_Page from "./Pages/Audio_Page";
import Services from "./Pages/Services";
import Support from "./Pages/Support";
import Product_Details_Page from "./Pages/Product_Details_Page";
import Create_Bundle_Page from "./Pages/Create_Bundle_Page";
import Cart_Page from "./Pages/Cart_Page";
import Checkout_Page from "./Pages/Checkout_Page";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/playstation" element={<Play_Station_Page/>}></Route>
      <Route exact path="/television" element={<TeleVision_Page/>}></Route>
      <Route exact path="/camera" element={<Camera_Page/>}></Route>
      <Route exact path="/audio" element={<Audio_Page/>}></Route>
      <Route exact path="/services" element={<Services/>}></Route>
      <Route exact path="/support" element={<Support/>}></Route>
      <Route exact path="/products/:id" element={<Product_Details_Page />}></Route>
      <Route exact path="/create_bundle" element={<Create_Bundle_Page />}></Route>
      <Route exact path="/cart_page" element={<Cart_Page />}></Route>
      <Route exact path="/checkout" element={<Checkout_Page />}></Route>
      {/* <Route exact path="/contact" element={<Contact />}></Route> */}
    </Routes>
  </>
  );
}

export default App;
