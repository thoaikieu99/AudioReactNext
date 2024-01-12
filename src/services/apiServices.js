import axios from "axios";

const getApiNewAudio = () => {
  return axios.get("http://localhost:4000/api/v1/audios/new");
};

const getApiTheLoai = () => {
  return axios.get("http://localhost:4000/api/v1/categories/show");
};
export { getApiNewAudio, getApiTheLoai };
