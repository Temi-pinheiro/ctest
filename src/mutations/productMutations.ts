/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '../config/axios';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const baseUrl = import.meta.env.VITE_BASE_URL;

export const postReview = async (
  data: {
    ratings: number;
    reviews: string | undefined;
  },
  id: any
) => {
  const config = {
    method: 'POST',
    url: `${baseUrl}/product/${id}/review`,
    headers,
    data,
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
export const addToWishlist = async (data: { product_id: number }) => {
  const config = {
    method: 'POST',
    url: `${baseUrl}/wishlist`,
    headers,
    data,
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
export const removeFromWishlist = async (id: any) => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/wishlist/remove/${id}`,
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
export const removeAllFromWishlist = async () => {
  const config = {
    method: 'POST',
    url: `${baseUrl}/wishlist/remove/all`,
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
export const addWishlistItemToBag = async (id: any) => {
  const config = {
    method: 'POST',
    url: `${baseUrl}/wishlist/add-to-bag/${id}`,
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
export const addAllWishlistItemsToBag = async () => {
  const config = {
    method: 'POST',
    url: `${baseUrl}/wishlist/add/all`,
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
