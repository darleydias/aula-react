import axios from "axios";
import AuthService from './AuthService'


const instance = axios.create({
    baseURL: 'http://localhost:3001',
    // baseURL: 'https://catenampmg.herokuapp.com',
    headers: {
        "Content-Type": "application/json"
    }
})

instance.interceptors.request.use((config) => {
    let token = AuthService.getLoggedUser();
    console.log(JSON.stringify(token))
    if (token) {
        config.headers["auth"] = token;
    }
    return config;
}, (error) => {
    return Promise.reject(error)
})


export default instance;
