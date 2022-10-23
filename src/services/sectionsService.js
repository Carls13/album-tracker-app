import axiosInstance from "./axiosInstance";

const devUri = "http://192.168.0.106:3000/section";

export const getAllSections = () => {
  return axiosInstance.get(`${devUri}/`);
};

export const addCollectedSticker = (sectionKey, stickerName) => {
  return axiosInstance.post(`${devUri}/${sectionKey}/sticker/${stickerName}`);
};

export const removeCollectedSticker = (sectionKey, stickerName) => {
  return axiosInstance.delete(`${devUri}/${sectionKey}/sticker/${stickerName}`);
};
