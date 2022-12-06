import axiosClient2 from './AxiosSetup/axiosClient2';

const DigitalApi = {
  getDigital: () => {
    const url = '/Digital';
    return axiosClient2.get(url);
  },
};

export default DigitalApi;
