import axios from "axios";

export const getWishlistData = async() => {
    const wishlistData = await axios.get(
        `${process.env.REACT_APP_PROJECT_API_URL}/V1/wishlist`
    );
    // console.log(wishlistData,"wishlistData in identifier")
    return wishlistData;
};


export const addToWishlist = async(data) => {
    const wishlistData = await axios.post(
        `${process.env.REACT_APP_PROJECT_API_URL}/V1/wishlist`,
        data
    );
    // console.log(wishlistData,"addToWishlist")
    return wishlistData;
};

export const deleteFromWishlist = async(data) => {
    console.log(data);
    const wishlistData = await axios.delete(
        `${process.env.REACT_APP_PROJECT_API_URL}/V1/wishlist`,
        data
    );
    console.log(wishlistData,"addToWishlist")
    return wishlistData;
};

export const checkForWishlist = async(sku) => {
    const wishlistData = await axios.get(
        `${process.env.REACT_APP_PROJECT_API_URL}/V1/product/${sku}/in-wishlist`
    );
    // console.log(wishlistData, "addToWishlist")
    return wishlistData.data.isInWishlist;
};