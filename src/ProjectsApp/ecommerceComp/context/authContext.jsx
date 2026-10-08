    import { createContext, useContext, useState, useEffect } from "react";
    import { register, login, getCurrentUser, logout, refresher } from "../services/authService";
    const AuthContext = createContext();

    export function AuthProvider({children}){
        const [user, setUser] = useState(null);
        const [authLoading, setAuthLoading] = useState(true);
        const [guest, setGuest] = useState(false);
        useEffect(() => {
            async function getUser(){
                try{
                const data = await getCurrentUser();
                setUser(data);
                }
                catch(err){
                    console.log(err);
                }finally{
                    setAuthLoading(false);
                }
            }
            getUser();
        }, [])
       
        async function loginUser(email, password){
            const response = await login(email, password);
            const data = await getCurrentUser();
            setUser(data);
            return response;
        }
        async function logoutUser(){
            await logout();
            setUser(null);
          
        }
        async function registerUser(name, email, password){
          const response = await register(name, email, password);
          return response;
        }
        
        const value ={user, authLoading, registerUser, loginUser, logoutUser, guest, setGuest};
        return(
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        )
    }

    export function useAuthContext(){
        return useContext(AuthContext)
    }