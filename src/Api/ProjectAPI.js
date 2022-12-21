import axiosClient1 from './AxiosSetup/axiosClient1';

const ProjectApi = {
  getProject: () => {
    const url = '/Project';
    return axiosClient1.get(url);
  },
};

export default ProjectApi;
