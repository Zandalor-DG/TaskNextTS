import axios from 'axios';

export const baseURL = 'http://localhost:4000';

const instance = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json', 'x-access-token': '' },
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return config;
    }
    config.headers['x-access-token'] = token;
    return config;
});

export default instance;
