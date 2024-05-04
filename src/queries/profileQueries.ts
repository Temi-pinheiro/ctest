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
