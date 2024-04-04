import axios from "axios";

const instanceAxios = axios.create({
  headers: { "Content-type": "application/json", Accept: "application/json" },
  baseURL: "https://api.escuelajs.co/api/v1/",
  // withCredentials: true,
});

export default instanceAxios;
