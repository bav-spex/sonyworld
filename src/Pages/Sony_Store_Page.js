import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../Components/BreadCrumbs";
import Heading6 from "./../Components/Font/Heading6";
import Text3 from "./../Components/Font/Text3";
import left_location from "./../assets/Icon/left_location.svg";
import right_location_pin from "./../assets/Icon/right_location_pin.svg";
import "./../SCSS/_sonyStorePage.scss";
import find_store_banner from "./../assets/SonyStore/find_store_banner.jpg";
import map_image from "./../assets/SonyStore/map_image.jpg";
import { loadCitiesLocationData } from "../redux/appAction";
const locationData = [
  {
    id: 1,
    shopname: "Sony Showroom / Modern Electronics",
    address: "Akariya Mall, Olaya Street, Riyadh Riyadh",
  },
  {
    id: 2,
    shopname: "Modern Electronics Co. Ltd.-Head Office",
    address:
      "Riyadh HO - Business Gate, Building #8 Eastern Ring Road, Qurtubah Area, Riyadh",
  },
  {
    id: 3,
    shopname: "Sony Showroom / Modern Electronics",
    address: "Al Batha District, Al Amal, Batha Street Taher Ibn Ahmed, Riyadh",
  },
  {
    id: 4,
    shopname: "Sony Showroom / Modern Electronics",
    address: "Akariya Mall, Olaya Street, Riyadh Riyadh",
  },
];
function Sony_Store_Page() {
  const [location, setLocation] = useState({
    province: "",
    city: "",
    area: "",
  });
  const [latestStateList, setLatestStateList] = useState([]);
  const [storeCitiesLocationData, setStoreCitiesLocationData] = useState();
  const [loading, setLoading] = useState(true);
  const handleChange = (e) => {
    // console.log(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCitiesLocationData());
  }, []);

  const cityLocationData = useSelector((state) => state.appData.cityLocationData);
  console.log(cityLocationData);
  useEffect(() => {
    if (cityLocationData) {
      setStoreCitiesLocationData(cityLocationData);
      setLoading(false);
      window.scrollTo(0, 0);
    }
  }, [cityLocationData]);
  if (loading) {
    return (
      <>
        <h1>Store Loading...</h1>
        <h1>Store Loading...</h1>
        <h1>Store Loading...</h1>
        <h1>Store Loading...</h1>
        <h1>Store Loading...</h1>
      </>
    );
  }

  return (
    <>
      <BreadCrumbs title="Sony Authorized stores" />
      <div className="container-fluid sony__store__page__container">
        <div className="sony__store__page__block">
          <div className="sony__store__page__banner__block">
            <img
              className="sony__store__page__image"
              src={find_store_banner}
              alt=""
            />
          </div>
          <div className="row location__search__block">
            <div className="col-3 select__field__block">
              <Heading6 text="Select Province" marginBottom={10} />
              <select
                placeholder=""
                id="state"
                name="state"
                onChange={(e) => handleChange(e)}
                value={location.province}
                className="select__field"
                //   className={errors.includes("province") ? "is-invalid" : ""}
              >
                <option value="">Select</option>
                <option value="usa">USA</option>
                <option value="saudi">Saudi</option>
              </select>
            </div>
            <div className="col-3 select__field__block">
              <Heading6 text="Select City" marginBottom={10} />
              <select
                placeholder=""
                id="state"
                name="state"
                onChange={(e) => handleChange(e)}
                value={location.city}
                className="select__field"
                //   className={errors.includes("province") ? "is-invalid" : ""}
              >
                <option value="">Select</option>
                <option value="nyc">New York</option>
                <option value="dubai">Dubai</option>
              </select>
            </div>
            <div className="col-3 select__field__block">
              <Heading6 text="Select Area" marginBottom={10} />
              <select
                placeholder=""
                id="state"
                name="state"
                onChange={(e) => handleChange(e)}
                value={location.area}
                className="select__field"
                //   className={errors.includes("province") ? "is-invalid" : ""}
              >
                <option value="">Select</option>
                <option value="usa">USA</option>
                <option value="saudi">Saudi</option>
              </select>
            </div>
            <button className=" col-3 search__button">Search</button>
          </div>
          <div className="sony__store__page__map__block">
            <div className="inner__sony__store__page__map__block">
              <div className="map__location__list__block">
                {locationData.map((location, locationIndex) => {
                  return (
                    <div className="location__block">
                      <img src={left_location} alt="" />
                      <div className="location__info__block">
                        <div className="location__info__text">
                          <Heading6 text={location.shopname} color="#DC3A1A" />
                          <Text3 text={location.address} />
                        </div>
                        <img src={right_location_pin} alt="" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sony_Store_Page;
