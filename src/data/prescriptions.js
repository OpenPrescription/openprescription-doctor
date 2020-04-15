import axios from "axios";

export const createPrescription = (data) => {
  return axios.post("/api/proxy/prescriptions", {
    ...data,
    lang: localStorage.getItem("i18nextLng"),
  });
};
