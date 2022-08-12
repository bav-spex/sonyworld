import URI from 'urijs';

export const getAppliedFilters = () => {
  if (typeof window === 'undefined') return {};
  const parsedUrl = new URI(window.location.href);
  // console.log(parsedUrl);
  const search = parsedUrl.search(true);
//  console.log("search ", search);

  let filterBy = search?.filterBy || [];

  if (!Array.isArray(filterBy)) {
    filterBy = [filterBy];
  }

  const filterObj = {};
  filterBy.forEach((filterItem) => {
    const [filterKey, filterVal] = filterItem.split(':');
    if (filterVal) {
      filterObj[filterKey] = filterVal.split(',');
    }
  });

  return { filterObj, search };
};
