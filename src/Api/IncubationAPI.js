import axiosClient2 from './AxiosSetup/axiosClient2';

const IncubationApi = {
  getIncubation: () => {
    const url = '/Incubation';
    return axiosClient2.get(url);
  },
};

export default IncubationApi;
