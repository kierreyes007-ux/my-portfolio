import { createContext, useContext, useState, useEffect } from "react";
import { login, getUser, register, logout } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState(null);

    async function loginUser(email, password){
        const response = await login(email, password)
        const theUser = await getUser();
        setUser(theUser) 
        return response;
    }
    async function logoutUser(){
        await logout();
        setUser(null);
        
    }
    async function registerUser(email, password){
        const response = await register(email, password);
        return response.data
    }

    useEffect(() => {
       async function restoreUser(){

        try{
            const theUser = await getUser();
            setUser(theUser);
        }catch(err){
            console.log(err.message);;
           
        }
       }
       restoreUser();
        
    }, [])

    const value = {user, setUser, loginUser, logoutUser, registerUser}
    return(
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    )
}
export function useAuthContext(){
    return useContext(AuthContext)
}