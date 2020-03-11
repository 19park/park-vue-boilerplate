import axios from 'axios';

export const SETTINGS = {
    DOMAIN: '/api',
    UNAUTHORIZED: 401
};

// 기본 타임아웃
axios.defaults.timeout = 1000000;
axios.defaults.withCredentials = true;

export default {
    request (settings) {
        const GET_URL = settings.url;
        if (!GET_URL.match('http')) {
            settings.url = SETTINGS.DOMAIN + GET_URL;
        }

        return axios(settings)
            .then(result => result)
            .catch(err => {
                throw err;
            });
    }
};
