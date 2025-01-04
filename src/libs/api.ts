import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const apiV1 = axios.create({
  baseURL: `${baseURL}/api/v1`,
});
