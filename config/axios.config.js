import axios from 'axios';

export default axios.create({
  baseURL: "https://gidar-server.onrender.com/api/gestion_interna/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  },
  withCredentials: true,
  credentials: "include",
});