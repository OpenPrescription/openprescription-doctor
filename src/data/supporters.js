import axios from "axios";

export const getSupporters = () => {
  return axios.get("/api/proxy/supporters").then((res) => res.data);
};
