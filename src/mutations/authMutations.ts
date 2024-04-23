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
export const patchVerifyOtp = async (data: any) => {
  const config = {
    method: 'PATCH',
    url: `${baseUrl}/onboard/otp/verify`,
    headers: { 'Authorization': `Bearer ${data.token}` },
    data: { otp: data.otp },
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
export const patchCompleteProfile = async (data: any) => {
  const config = {
    method: 'PATCH',
    url: `${baseUrl}/onboard/profile`,
    headers: { 'Authorization': `Bearer ${data.token}` },
    data: { ...data.formData },
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
export const patchCreatePassword = async (data: any) => {
  const config = {
    method: 'PATCH',
    url: `${baseUrl}/onboard/password`,
    headers: { 'Authorization': `Bearer ${data.token}` },
    data: { ...data.formData },
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
export const postLogout = async () => {
  const config = {
    method: 'POST',
    url: `${baseUrl}/logout`,
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
