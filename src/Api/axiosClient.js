import axios from 'axios';
import queryString from 'query-string';

//test API: https://api.publicapis.org/entries
const BASE_URL = 'https://api.publicapis.org';

//set ip default config http requests
const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: {},
  // (params) => queryString.stringify(params),
});

//handle token here
axiosClient.interceptors.request.use((config) => {
  return config;
});

//handle data
axiosClient.interceptors.response.use(
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
export default axiosClient;
