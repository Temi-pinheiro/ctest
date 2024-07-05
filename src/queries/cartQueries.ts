/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '../config/axios';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getCart = async () => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/cart`,
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
export const getSummary = async () => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/cart/order-summary`,
    headers,
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    throw err.response;
  }
};
export const getGuestSummary = async ({
  amount,
  quantity,
}: {
  amount: any;
  quantity: any;
}) => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/cart/guest-summary?amount=${amount}&quantity=${quantity}`,
    headers,
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    throw err.response;
  }
};
