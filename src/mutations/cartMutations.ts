/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '../config/axios';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const baseUrl = import.meta.env.VITE_BASE_URL;

export const addToCart = async (data: { itemId: number; quantity: number }) => {
  const config = {
    method: 'POST',
    url: `${baseUrl}/cart`,
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

export const removeFromCart = async (itemId: any) => {
  const config = {
    method: 'POST',
    url: `${baseUrl}/cart?itemId=${itemId}`,
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
export const makePayment = async (data: any) => {
  const config = {
    method: 'POST',
    url: `${baseUrl}/cart/checkout`,
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
export const makeGuestPayment = async (data: any) => {
  const config = {
    method: 'POST',
    url: `${baseUrl}/cart/guest-checkout`,
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
export const verifyPayment = async (reference: string) => {
  const config = {
    method: 'POST',
    url: `${baseUrl}/cart/verify?reference=${reference}`,
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
