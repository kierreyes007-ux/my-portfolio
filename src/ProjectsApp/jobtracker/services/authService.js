import axios from "axios";
async function login(email, password){
    try{
        const response = await axios.post("http://localhost:5000/auth/login", {email, password});
        return response.data;
    }catch(err){
        console.log(err.message)
        throw err;
    }
}

async function getUser(){
    try{
        const response = await axios.post("http://localhost:5000/auth/me", {},
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

export { login, getUser };