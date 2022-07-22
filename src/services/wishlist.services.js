import axios from "axios";

<<<<<<< HEAD
export const getWishlistData = async() => {
    const wishlistData = await axios.get(
        `${process.env.REACT_APP_PROJECT_API_URL}/V1/wishlist`
    );
    console.log(wishlistData, "wishlistData in identifier")
    return wishlistData;
};


export const addToWishlist = async(data) => {
    const wishlistData = await axios.post(
        `${process.env.REACT_APP_PROJECT_API_URL}/V1/wishlist`,
        data
    );
    console.log(wishlistData, "addToWishlist")
    return wishlistData;
=======
export const getWishlistData =  async() => {
  const wishlistData =  await axios.get(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/wishlist`
  );
  // console.log(wishlistData,"wishlistData in identifier")
  return wishlistData;
};


export const addToWishlist =  async(data) => {
  const wishlistData =  await axios.post(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/wishlist`,
    data
  );
  // console.log(wishlistData,"addToWishlist")
  return wishlistData;
};

export const deleteFromWishlist =  async(data) => {
  const wishlistData =  await axios.delete(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/wishlist`,
    data
  );
  // console.log(wishlistData,"addToWishlist")
  return wishlistData;
>>>>>>> 1dae517c735daae5a9df1e234702050e8ba6b74f
};

export const deleteFromWishlist = async(data) => {
    const wishlistData = await axios.delete(
        `${process.env.REACT_APP_PROJECT_API_URL}/V1/wishlist`,
        data
    );
    console.log(wishlistData, "addToWishlist")
    return wishlistData;
};