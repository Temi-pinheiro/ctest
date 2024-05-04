/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from '../config/axios';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const baseUrl = import.meta.env.VITE_BASE_URL;
export const postSubscribe = async (data: any) => {
  const config = {
    method: 'POST',
    url: `${baseUrl}/user/newsletter`,
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
export const updateProfile = async (data: any) => {
  const config = {
    method: 'PATCH',
    url: `${baseUrl}/profile/update-profile`,
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
export const updatePassword = async (data: any) => {
  const config = {
    method: 'PATCH',
    url: `${baseUrl}/profile/change-password`,
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
export const updateAddress = async (data: any) => {
  const config = {
    method: 'PATCH',
    url: `${baseUrl}/profile/update-address`,
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
