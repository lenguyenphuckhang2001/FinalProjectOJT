import axiosClient1 from './axiosClient1';
import axiosClient2 from './axiosClient2';

const exampleApi = {
  example: () => {
    const url = '/entries';
    return axiosClient1.get(url);
  },

  example2: () => {
    const url = '/entries';
    return axiosClient2.get(url);
  },
};

export default exampleApi;
