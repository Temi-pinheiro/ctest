/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '../config/axios';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getProducts = async () => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/product`,
    headers,
  };
  try {
    const response = await axios(config);
    return response.data.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    throw err.response;
  }
};
export const getProduct = async (id: any) => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/product/${id}`,
    headers,
  };
  try {
    const response = await axios(config);
    return response.data.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    throw err.response;
  }
};
export const getProductReviews = async (id: any) => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/product/${id}/reviews`,
    headers,
  };
  try {
    const response = await axios(config);
    return response.data.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    throw err.response;
  }
};
export const getWishlist = async () => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/wishlist`,
    headers,
  };
  try {
    const response = await axios(config);
    return response.data.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    throw err.response;
  }
};
