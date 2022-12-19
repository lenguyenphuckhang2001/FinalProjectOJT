import axios from 'axios';

const BASE_URL = 'https://contact-devplus.herokuapp.com/api/v1';

const axiosClient3 = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

axiosClient3.interceptors.request.use((config) => {
  return config;
});

axiosClient3.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error.response.data;
  },
);
export default axiosClient3;
