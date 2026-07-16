import axios from "axios";

const API_URL = "http://localhost:5000/api/cart";

export const addToCart = async (productId, quantity = 1) => {
  const { data } = await axios.post(API_URL, {
    productId,
    quantity,
  });

  return data;
};

export const getCart = async () => {
  const { data } = await axios.get(API_URL);

  return data;
};