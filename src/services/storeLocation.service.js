import axios from "axios";

export const getCitiesLocationData = async() => {
    const citiesLocationData = await axios.get(
        `${process.env.REACT_APP_PROJECT_API_URL}/V1/directory/cities`
    );
    // console.log("hello");
    console.log(citiesLocationData, "citiesLocationData in identifier")
    return citiesLocationData;
};

export const getCountriesLocationData = async() => {
    const countriesLocationData = await axios.get(
        `${process.env.REACT_APP_PROJECT_API_URL}/V1/directory/countries`
    );
    // console.log("first")
    console.log(countriesLocationData, "countriesLocationData in identifier")
    return countriesLocationData;
};