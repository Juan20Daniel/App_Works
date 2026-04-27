import { API_CONFIG } from "./config";
import axios from 'axios';

export const axiosInstance = axios.create(API_CONFIG);