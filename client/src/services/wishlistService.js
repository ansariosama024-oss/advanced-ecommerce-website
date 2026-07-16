import axios from "axios";

const API = "http://localhost:5000/api/wishlist";

export const addToWishlist = async (productId) => {
  const res = await axios.post(API, {
    productId,
  });

  return res.data;
};

export const getWishlist = async () => {
  const res = await axios.get(API);

  return res.data;
};