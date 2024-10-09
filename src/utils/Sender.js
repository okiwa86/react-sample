import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.aram-in.com'
});

api.interceptors.request.use(async (request) => {
    const token = localStorage.getItem('token');
    if (token !== null && typeof token !== 'undefined') {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
});

export default api;