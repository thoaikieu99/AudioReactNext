import axios from "../ultils/customAxios";

const getApiNewAudio = () => {
  return axios.get("audios/new");
};

const getApiTheLoai = () => {
  return axios.get("categories/show");
};
const getApiTopNgay = () => {
  return axios.get("countviews/top-day");
};
const getApiTopThang = () => {
  return axios.get("countviews/top-month");
};
const getApiTopNam = () => {
  return axios.get("countviews/top-year");
};
const getApiNgheNhieu = () => {
  return axios.get("countviews/nghe-nhieu");
};

const getApiListTL = (slug) => {
  return axios.get(`categories/${slug}`);
};
export {
  getApiNewAudio,
  getApiTheLoai,
  getApiNgheNhieu,
  getApiListTL,
  getApiTopNgay,
  getApiTopThang,
  getApiTopNam,
};
