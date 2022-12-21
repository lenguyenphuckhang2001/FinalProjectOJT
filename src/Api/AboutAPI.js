import axiosClient1 from './AxiosSetup/axiosClient1';

const AboutApi = {
  getAbout: () => {
    const url = '/About';
    return axiosClient1.get(url);
  },
};

export default AboutApi;
