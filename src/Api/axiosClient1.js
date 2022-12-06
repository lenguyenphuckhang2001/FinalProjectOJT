import axios from 'axios';

const BASE_URL = 'https://api.publicapis.org';

const axiosClient1 = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: {},
});

axiosClient1.interceptors.request.use((config) => {
  return config;
});

axiosClient1.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    console.log(error);
    throw error;
  },
);
export default axiosClient1;
