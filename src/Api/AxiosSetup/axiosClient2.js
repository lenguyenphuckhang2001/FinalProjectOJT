import axios from 'axios';

const BASE_URL = 'https://638acf1a7220b45d2282cd8c.mockapi.io';

const axiosClient2 = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: {},
});

axiosClient2.interceptors.request.use((config) => {
  return config;
});

axiosClient2.interceptors.response.use(
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
export default axiosClient2;
