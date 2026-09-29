import axios from "axios";
const API_URL = import.meta.env.VITE_JOBTRACKER_API_URL;
async function login(email, password){
    try{
        const response = await axios.post(`${API_URL}/auth/login`, {email, password}, {withCredentials: true});
        return response.data;
    }catch(err){
        console.log(err.message)
        throw err;
    }
}

async function getUser(){
    try{
        const response = await axios.post(`${API_URL}/auth/me`, {},
            {
                withCredentials: true
            }
        );
        return response.data;
    }catch(err){
        console.log(err.message);
        throw err;

    }
}

async function register(email, password){
    try{
        const response = await axios.post(`${API_URL}/auth/register`, {email, password});
        return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}
async function logout(){
    try{
       const response = await axios.post(`${API_URL}/auth/logout`, {}, {
        withCredentials: true
       })
       return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

export { login, getUser, register, logout };