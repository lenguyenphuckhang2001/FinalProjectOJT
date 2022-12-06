import axios from 'axios';

const BASE_URL = 'https://api.publicapis.org';

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
