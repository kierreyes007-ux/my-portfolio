import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hide, setHide] = useState(false);
    const { loginUser } = useAuthContext();
    const navigate = useNavigate();
    async function handleSubmit(e){
        e.preventDefault();

       await loginUser(email, password);
       navigate("/")
    }
    return(
        <div className="w-full flex items-center justify-center">
            
            <form onSubmit={handleSubmit} className="grid gap-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-500"
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

               <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>

                    <input
                        type={hide ? "text" : "password"}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 text-sm outline-none focus:border-gray-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="button"
                        className="absolute right-3 bottom-2.5 text-gray-500 hover:text-gray-700"
                        onClick={() => setHide(!hide)}
                    >
                        {hide ? (
                            <i className="fa-regular fa-eye-slash"></i>
                        ) : (
                            <i className="fa-regular fa-eye"></i>
                        )}
                    </button>
                </div>

                <button type="submit" className="border-2 p-1 px-2 rounded-lg">Login</button>
            </form>
            
        </div>
    )
}
export default Login;
