/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '../config/axios';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAddress = async () => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/profile/get-address`,
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

export const getCountries = async () => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/countries`,
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
export const getStates = async (country: string) => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/states?country=${country}`,
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
export const getCities = async (country: string, state: string) => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/cities?country=${country}&state=${state}`,
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
