import axiosInstance from "./axiosInstance";

const backendUri = "https://album-tracker-api.vercel.app/user";

export const registerUser = (userData) => {
  return axiosInstance.post(`${backendUri}/`, userData);
};

export const userLogin = (loginData) => {
  return axiosInstance.post(`${backendUri}/login`, loginData);
};

export const getUserDetails = () => {
  return axiosInstance.get(`${backendUri}/details`);
};
