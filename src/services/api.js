import axios from "axios";

const API = axios.create({
  baseURL: "https://dhruwraj-backend.vercel.app/api"
});

export default API;
