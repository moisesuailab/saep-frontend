import axios from 'axios';

export const Api = axios.create({
    baseURL: import.meta.env.BASE_URL,
});