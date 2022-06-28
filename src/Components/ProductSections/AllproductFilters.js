import React from "react";
import star from "./../../assets/Icon/orange-review.svg";

const starArray = [1, 2, 3, 4, 5];

const filterData = [
  {
    id: 1,
    filterTitle: "Deals",
    filterItems: [
      {
        title: "Today's Deals",
        id: 11,
      },
    ],
  },
  {
    id: 2,
    filterTitle: "Delivery Day",
    filterItems: [
      {
        title: "Get It by Tomorrow",
        id: 21,
      },
      {
        title: "Get It in 2 Days",
        id: 22,
      },
    ],
  },
  {
    id: 3,
    filterTitle: "Customer Review",
    filterItems: [
      {
        starRating: 5,
        id: 31,
      },
      {
        starRating: 4,
        id: 32,
      },
      {
        starRating: 3,
        id: 33,
      },
      {
        starRating: 2,
        id: 34,
      },
    ],
  },
  {
    id: 4,
    filterTitle: "Price",
    filterItems: [
      {
        title: "Under SAR1,000",
        id: 41,
      },
      {
        title: "SAR1,000 - SAR2,000",
        id: 42,
      },
      {
        title: "SAR2,000 - SAR3,000",
        id: 43,
      },
    ],
  },
  {
    id: 5,
    filterTitle: "Display Size",
    filterItems: [
      {
        title: `Over 80"`,
        id: 51,
      },
      {
        title: `60" - 79"`,
        id: 52,
      },
      {
        title: `60" - 69"`,
        id: 53,
      },
      {
        title: `50" - 59"`,
        id: 54,
      },
      {
        title: `40" - 49"`,
        id: 55,
      },
      {
        title: `30" - 39"`,
        id: 56,
      },
      {
        title: `Below 30"`,
        id: 57,
      },
    ],
  },
  {
    id: 6,
    filterTitle: "Display Size",
    filterItems: [
      {
        title: "8K",
        id: 61,
      },
      {
        title: "4K",
        id: 62,
      },
      {
        title: "Full HD/HD",
        id: 63,
      },
      {
        title: "Crystal UHD HD",
        id: 64,
      },
    ],
  },
  {
    id: 7,
    filterTitle: "Display Size",
    filterItems: [
      {
        title: "Artificial Intelligence (Upscaling)",
        id: 71,
      },
      {
        title: "Ambient Mode",
        id: 72,
      },
      {
        title: "Full Array",
        id: 73,
      },
      {
        title: "Quantum Technology",
        id: 74,
      },
    ],
  },
  {
    id: 8,
    filterTitle: "Display Size",
    filterItems: [
      {
        title: "2022",
        id: 81,
      },
      {
        title: "2021",
        id: 82,
      },
      {
        title: "2020",
        id: 83,
      },
    ],
  },
];

const AllProductFilter = (props) => {
  return (
    filterData && (
      <div className="product__filter__container">
        {filterData.map((item, index) => {
          console.log(index, "index");
          console.log(filterData.length, "index");

          return (
            <div>
              <div className="filter__block">
                <p className="product__filter__title">{item.filterTitle}</p>
                {item.filterItems.map((data) => {
                  return (
                    <div
                      className={`product__filter__section__block ${
                        item.filterTitle === "Customer Review" ? "reviews" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="filter__checkbox"
                        name={data.title}
                        // onChange={handleChange}
                      />
                      {item.filterTitle === "Customer Review" ? (
                        <div className="star__rating__block">
                          {starArray.map((item) => (
                            <img className="star__count" src={star} alt="" />
                          ))}
                          <p className="star__rating">{`${data.starRating}.0`}</p>
                        </div>
                      ) : (
                        // <p className="filter__title">{data.title}</p>
                        <p className="filter__title">{data.title}</p>
                      )}
                    </div>
                  );
                })}
              </div>
              {filterData.length - 1 !== index && (
                <div className="filter__devider"></div>
              )}
            </div>
          );
        })}
      </div>
    )
  );
};

export default AllProductFilter;
