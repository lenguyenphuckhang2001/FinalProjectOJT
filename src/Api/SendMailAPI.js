import axiosClient3 from './AxiosSetup/axiosClient3';

const SendMailAPI = {
  sendMail: (...rest) => {
    const url = '/contact';
    return axiosClient3.post(url, {
      name: rest[0],
      email: rest[1],
      phone: rest[2],
      subject: rest[3],
      message: rest[4],
    });
  },
};

export default SendMailAPI;
