/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from '../config/axios';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const baseUrl = import.meta.env.VITE_BASE_URL;

export const postLogin = async (data: any) => {
  const config = {
    method: 'POST',
    url: `${baseUrl}/auth/signin`,
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
export const postSignup = async (data: any) => {
  const config = {
    method: 'POST',
    url: `${baseUrl}/auth/signup`,
    headers,
    data,
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
