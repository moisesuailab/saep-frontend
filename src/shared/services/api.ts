import axios from 'axios';
import { getUserLocalStorage } from '../utils/auth';

export const Api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API,
});

Api.interceptors.request.use(
    (config)=>{
        const user = getUserLocalStorage();

        config.headers.Authorization = user?.token;

        return config;
    }, 
    (error)=>{
        return Promise.reject(error);
    }
    )