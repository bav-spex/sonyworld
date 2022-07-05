import axios from "axios";

export const getIdentifier = async () => {
  const homepageData = await axios.get(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/cms/sony-web-home-en-9696`
  );
  console.log(homepageData, "homepageData in identifier");
  return homepageData;
};
