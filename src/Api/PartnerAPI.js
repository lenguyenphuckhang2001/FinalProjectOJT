import axiosClient2 from './AxiosSetup/axiosClient2';

const PartnerApi = {
  getPartner: () => {
    const url = '/Partner';
    return axiosClient2.get(url);
  },
};

export default PartnerApi;
