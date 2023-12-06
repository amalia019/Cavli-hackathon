import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
const api2 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/formdata",
  },
});

export const uploadFile = (data) => api2.post("/upload", data);
export const getFiles = () => api.get("/files");
export const getFile = (id) => api.get(`/${id}`);
