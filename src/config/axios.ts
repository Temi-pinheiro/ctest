/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { toast } from 'react-hot-toast';

// const { clearAuth } = useAuth();
axios.interceptors.request.use(async (request: any): Promise<any> => {
  const token = JSON.parse(localStorage.getItem('cowas_token') || 'null');
  if (
    !token &&
    !request?.url?.includes('/auth') &&
    !request?.url?.includes('/products')
  ) {
    // window.location.href = '/';
    console.log('hold on');
    return request;
  }

  if (!request.headers?.Authorization && token) {
    request!.headers!.Authorization = `Bearer ${token}`;
  }
  request.timeout = 100000;

  return request;
});
// Function to handle response errors
const handleResponseError = (error: any) => {
  if (error.response) {
    const { status, data } = error.response;
    if (status === 403) {
      error.message = 'Forbidden';
      toast.error(data?.message);
    } else if (status === 401) {
      error.message = 'Unauthorized access';
      toast.error('Session timed out, please log back in');
    } else if (data?.message) {
      error.response.message = data.message;
    } else {
      error.message = 'An error occurred';
    }
  } else {
    error.message = 'Network Error';
  }
  console.error(error);
  return Promise.reject(error);
};
// Intercept all responses
axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => handleResponseError(error)
);

export default axios;
