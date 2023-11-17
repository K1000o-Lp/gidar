import axios from 'axios';
import { envs } from './envs';

export const httpService = axios.create({
  baseURL: `${envs.DEV}/api/gestion_interna/`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  },
  withCredentials: true,
  credentials: "include",
});