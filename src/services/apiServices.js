import axios from "../ultils/customAxios";

const getApiNewAudio = () => {
  return axios.get("audios/new");
};

const getApiTheLoai = () => {
  return axios.get("categories/show");
};
const getApiListTL = (slug) => {
  return axios.get(`categories/${slug}`);
};
export { getApiNewAudio, getApiTheLoai, getApiListTL };
