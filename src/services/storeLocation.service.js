import axios from "axios";

export const getCitiesLocationData =  async() => {
  const citiesLocationData =  await axios.get(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/directory/cities`
  );
  console.log(citiesLocationData,"citiesLocationData in identifier")
  return citiesLocationData;
};
