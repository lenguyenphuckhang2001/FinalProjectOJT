import axiosClient1 from './AxiosSetup/axiosClient1';

const TeamApi = {
  getTeam: () => {
    const url = '/Team';
    return axiosClient1.get(url);
  },
};

export default TeamApi;
