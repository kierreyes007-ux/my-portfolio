import { createContext, useContext, useState, useEffect } from "react";
import { login, getUser } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState(null);

    async function loginUser(email, password){
        const response = await login(email, password)
        const theUser = await getUser();
        setUser(theUser) 
        return response;
    }
    function logoutUser(){
      
        setUser(null);
        
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

    const value = {user, setUser, loginUser, logoutUser}
    return(
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    )
}
export function useAuthContext(){
    return useContext(AuthContext)
}