import axiosClient1 from './AxiosSetup/axiosClient1';

const CourseApi = {
  getProject: () => {
    const url = '/Course';
    return axiosClient1.get(url);
  },
};

export default CourseApi;
