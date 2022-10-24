import axiosInstance from "./axiosInstance";

const backendUri = "https://album-tracker-api.vercel.app/section";

export const getAllSections = () => {
  return axiosInstance.get(`${backendUri}/`);
};

export const addCollectedSticker = (sectionKey, stickerName) => {
  return axiosInstance.post(`${backendUri}/${sectionKey}/sticker/${stickerName}`);
};

export const removeCollectedSticker = (sectionKey, stickerName) => {
  return axiosInstance.delete(`${backendUri}/${sectionKey}/sticker/${stickerName}`);
};

export const addDuplicateSticker = (sectionKey, stickerName) => {
  return axiosInstance.post(`${backendUri}/${sectionKey}/duplicate/${stickerName}`);
};

export const removeDuplicateSticker = (sectionKey, stickerName) => {
  return axiosInstance.delete(`${backendUri}/${sectionKey}/duplicate/${stickerName}`);
};
