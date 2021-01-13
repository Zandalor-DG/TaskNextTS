import axios from "axios";

export const baseURL = "http://localhost:4000";

const instance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json", "x-access-token": "" },
});

export default instance;
