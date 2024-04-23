/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.interceptors.request.use(async (request: any): Promise<any> => {
  const token = JSON.parse(localStorage.getItem('cowas_token') || '');
  if (
    !token &&
    !request?.url?.includes('/auth') &&
    !request?.url?.includes('/onboard')
  ) {
    // window.location.href = '/';
    console.log('hold on');
    return;
  }

  if (!request.headers?.Authorization && token) {
    request!.headers!.Authorization = `Bearer ${token}`;
  }
  request.timeout = 100000;

  return request;
});

// Intercept all responses
axios.interceptors.response.use(
  async (response) => {
    if (response.config.url?.includes('/settings/web')) {
      return response;
    }

    return response;
  },
  (error) => {
    if ([403].includes(error?.response?.status)) {
      error.message = 'Forbidden';
      toast.error(error?.response?.data?.message);
    } else if ([401].includes(error?.response?.status)) {
      error.message = 'Unauthorized access';

      // toast.error('Session timed out, please log back in');
    } else if (error?.response?.data) {
      if (error.response.data.message) {
        error.message = error.response.data.message;
      } else {
        error.response.data.message = error.response.data;
      }

      console.error(error);
    }
    return Promise.reject(error);
  }
);

export default axios;
