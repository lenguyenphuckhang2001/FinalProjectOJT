import axiosClient from './axiosClient';

const exampleApi = {
  example: () => {
    const url = '/entries';
    return axiosClient.get(url);
  },
};

export default exampleApi;
