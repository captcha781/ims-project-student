// import packages
import axios from 'axios';

// import lib
import config from './index';
import { getAuthToken, removeAuthToken } from '../lib/localStorage'
import isLogin from '../lib/isLogin';

axios.defaults.baseURL = config.API_URL;
axios.defaults.headers.common['Authorization'] = getAuthToken();

export const setAuthorization = (token) => {
    axios.defaults.headers.common['Authorization'] = token;
}

export const removeAuthorization = () => {
    delete axios.defaults.headers.common["Authorization"];
}

export const handleResp = (respData, type = 'success') => {
    try {

        if (isLogin() && type === 'error' && respData && respData.response && respData.response.status === 401) {
            removeAuthToken()
            removeAuthorization()
            window.location.href = '/login'
            return true
        }
    } catch (err) {
        return false
    }
}

export default axios;