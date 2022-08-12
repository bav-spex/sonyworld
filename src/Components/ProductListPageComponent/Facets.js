import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAppliedFilters } from "../helpers/utils/getAppliedFilters";
import BrandFacet from "./Facets/BrandFacet";
import CategoryFacet from "./Facets/CategoryFacet";
import ColorFacet from "./Facets/ColorFacet";
import GenreFacet from "./Facets/GenreFacet";
import PriceFacet from "./Facets/PriceFacet";
import PriceRange from "./Facets/PriceRange";

function Facets({
  searchResult,
  category,
  facetData,
  onFilterChange,
  keyword,
  categoryInfo,
}) {
  const [allFilters, setAllFilters] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState({});
  const [appliedFilterCount, setAppliedFilterCount] = useState(0);
  const [applied, setApplied] = useState([]);
  const [route, setRoute] = useState("");
  const categoryRoute = useParams();
  useEffect(() => {
    if (categoryRoute.category !== "") {
      setRoute(categoryRoute.category);
    }
  }, [categoryRoute]);

  useEffect(() => {
    let all = [];
    Object.values(facetData)
      .filter((item) => item.collection)
      .map((item) => item.collection)
      .forEach((item) => {
        item.forEach((x) => {
          all = [
            ...all,
            {
              id: x.id ?? x.key ?? `${x.from}-${x.to}`,
              name:
                x.name ?? x.label ?? `${x.from}${x.isMax ? "+" : ` - ${x.to}`}`,
              query_filter_param: x.query_filter_param,
              count: x.count,
              from: x.from,
              to: x.to,
            },
          ];
          if (x.sub_categories?.length > 0) {
            x.sub_categories.forEach((y) => {
              all = [
                ...all,
                {
                  id: y.id ?? y.key,
                  name: y.name ?? y.label,
                  query_filter_param: y.query_filter_param,
                  count: y.count,
                },
              ];
            });
          }
        });
      });
    console.log(all);
    setAllFilters(all);
    setAppliedFilters(getAppliedFilters());
  }, [categoryRoute]);

  useEffect(() => {
    if (appliedFilters?.filterObj) {
      const count = Object.values(appliedFilters.filterObj).reduce((sum, arr) => sum + arr.length, 0);
      console.log(count);
      setAppliedFilterCount(count);
      setApplied([]);
      Object.keys(appliedFilters.filterObj).forEach((item) => {
        appliedFilters.filterObj[item].forEach((cat) => {
          let found = null;
          if (['category', 'color', 'brand', 'genre'].includes(item)) {
            found = allFilters.find((x) => x.query_filter_param === item && x.id.toString() === cat);
            console.log(found);
          } else if (item === 'display_price') {
            found = {
              id: cat,
              name: cat,
              query_filter_param: 'display_price',
            };
            // found = allFilters.find((x) => x.query_filter_param === 'display_price' && cat === `${x.from}-${x.to}`);
          }
          if (found) setApplied((prev) => [...prev, found]);
        });
      });
    }
  }, [appliedFilters, facetData]);

  const toggleFilter = (key, id, multiSelect) => {
    const { search, filterObj } = getAppliedFilters();
    // eslint-disable-next-line
    const found = filterObj?.[key]?.filter((filtered) => filtered == id);

    let newFilter;
    if (multiSelect && filterObj[key]) {
      newFilter = [...filterObj[key], id];
    } else {
      newFilter = [id];
    }

    search[key] = newFilter;
    const newObj = {};
    if (newFilter?.length) {
      newObj[key] = newFilter;
    }

    const result = { ...filterObj, ...newObj };

    if (found && found.length) {
      // eslint-disable-next-line
      result[key] = result[key].filter((filtered) => filtered != id);
    }

    const filters = {};

    Object.keys(result).forEach((key) => {
      if (result[key].length) {
        filters[key] = result[key];
      }
    });

    onFilterChange({ query: result, search });
  };

  return (
    <div>
      {searchResult?.total_count > 1 && facetData && Object.keys(facetData).map((key, index) => (
        <div key={`facet_group_${key}${index}`}>
          {!keyword && key === 'category' && (
            <CategoryFacet
              category={category}
              facetData={{
                [key]: {
                  collection: category !== '2' ? facetData.category.collection.find((item) => item.id.toString() === category.toString())?.sub_categories : facetData.category.collection,
                  multiple_selectable: true,
                },
              }}
              dataKey={key}
              appliedFilters={appliedFilters}
              toggleFilter={toggleFilter}
            />
          )}
          {key === 'brand' && <BrandFacet  facetData={facetData} dataKey={key} appliedFilters={appliedFilters} toggleFilter={toggleFilter} />}
          {key === 'price' && <PriceFacet  facetData={facetData} dataKey={key} appliedFilters={appliedFilters} toggleFilter={toggleFilter} />}
          {key === 'priceRange' && <PriceRange  facetData={facetData} appliedFilters={appliedFilters} toggleFilter={toggleFilter} />}
          {key === 'color' && <ColorFacet  facetData={facetData} dataKey={key} appliedFilters={appliedFilters} toggleFilter={toggleFilter} />}
          {key === 'genre' && <GenreFacet  facetData={facetData} dataKey={key} appliedFilters={appliedFilters} toggleFilter={toggleFilter} />}
        </div>
      ))}
    </div>
  )
}

export default Facets;
