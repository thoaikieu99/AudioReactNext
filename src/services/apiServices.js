import axios from "../ultils/customAxios";

const getApiNewAudio = (page) => {
  return axios.get(`audios/new?page=${+page}`);
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
const getApiNgheNhieu = (page) => {
  return axios.get(`countviews/nghe-nhieu?page=${+page}`);
};

const getApiListTL = (slug, page) => {
  return axios.get(`categories/${slug}?page=${+page}`);
};

const getOneAudio = (slug) => {
  return axios.get(`audios/${slug}`);
};

export {
  getApiNewAudio,
  getApiTheLoai,
  getApiNgheNhieu,
  getApiListTL,
  getApiTopNgay,
  getApiTopThang,
  getApiTopNam,
  getOneAudio,
};
