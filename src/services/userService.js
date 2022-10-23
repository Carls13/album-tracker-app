import axiosInstance from "./axiosInstance";

const devUri = "http://192.168.0.106:3000/user";

export const registerUser = (userData) => {
  return axiosInstance.post(devUri, userData);
};

export const userLogin = (loginData) => {
  return axiosInstance.post(`${devUri}/login`, loginData);
};

export const getUserDetails = () => {
  return axiosInstance.get(`${devUri}/details`);
};
