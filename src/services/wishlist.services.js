import axios from "axios";

export const getWishlistData =  async() => {
  const wishlistData =  await axios.get(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/wishlist`
  );
  console.log(wishlistData,"wishlistData in identifier")
  return wishlistData;
};
