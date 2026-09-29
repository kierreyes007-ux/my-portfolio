import axios from "axios";
const API_URL = import.meta.env.VITE_ECOMMERCE_API_URL;
async function register(name, email, password){
    try{
        const response = await axios.post(`${API_URL}/auth/register`, {name, email, password});
        return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}
async function login(email, password){
    try{
        const response = await axios.post(`${API_URL}/auth/login`, {email, password}, {withCredentials: true});
        return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}
async function getCurrentUser(){
    try{
        const response = await axios.get(`${API_URL}/auth/me`, {withCredentials: true})
        return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}
async function logout(){
    const response = await axios.post(`${API_URL}/auth/logout`, {}, {withCredentials: true});
    return response.data;
}
async function refresher(){
    const response = await axios.post(`${API_URL}/auth/refresh`, {}, {withCredentials: true})
    return response.data;
}
axios.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        if(
            error.response?.status === 401 &&
            !originalRequest._retry &&
            !originalRequest.url?.includes("/auth/refresh") &&
            !originalRequest.url?.includes("/auth/login") &&
            !originalRequest.url?.includes("/auth/register") &&
            !originalRequest.url?.includes("/auth/logout")
        ){
            originalRequest._retry = true;

            try{
                await refresher();

                return axios(originalRequest);
            }catch(refreshError){
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);
export { register, login, getCurrentUser, logout, refresher };