import axios from "axios";
const base_url = "http://localhost:3001/api/products";

export const addProducts = async (productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    `${base_url}/add-product`,
    productData,
    config
  );

  return response.data;
};

export const getProducts = async () => {
  let response = await axios.get(`${base_url}/get-products`);
  return response.data;
};

export const addToCart = async (product_id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let responce = await axios.post(
    `${base_url}/add-to-cart/${product_id}`,
    {},
    config
  );
  return responce.data;
};
export const removeFromCart = async (product_id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let responce = await axios.post(
    `${base_url}/remove-from-cart/${product_id}`,
    {},
    config
  );
  return responce.data;
};
export const getMyCart = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let responce = await axios.get(`${base_url}/get-my-cart`, config);
  return responce.data;
};
