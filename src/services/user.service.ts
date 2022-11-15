import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:1337";

export const getPublicContent = () => {
  return axios.get(API_URL + "/api/payed-articles");
};

export const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

export const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
