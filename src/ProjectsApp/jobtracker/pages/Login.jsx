import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hide, setHide] = useState(false);
    const { loginUser } = useAuthContext();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        if(!email.trim() || !password.trim()) return;
        
        try{
        await loginUser(email, password);
        navigate("/projects/job-tracker/.");
        }catch(err){
            console.log(err.message);
            if(err.response.status === 500){
                setError("Server error");
            }
            if(err.response.status === 401){
                setError(err.response.data.error);
            }
           
        }
    }

    return(
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-11 h-11 bg-gray-900 text-white rounded-lg mb-4">
                        <i className="fa-solid fa-briefcase"></i>
                    </div>

                    <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                        Welcome back
                    </h1>

                    <p className="text-sm text-gray-500 mt-2">
                        Sign in to manage your job applications.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm p-7"
                >
                    <div className="space-y-5">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); setError("") }}
                                placeholder="you@example.com"
                                className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>

                                <button
                                    type="button"
                                    className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <div className="relative">
                                <input
                                    type={hide ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); setError("") }}
                                    placeholder="Enter your password"
                                    className="w-full h-11 border border-gray-300 rounded-lg px-3 pr-10 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                                />

                                <button
                                    type="button"
                                    onClick={() => setHide(!hide)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                                >
                                    {hide ? (
                                        <i className="fa-regular fa-eye-slash"></i>
                                    ) : (
                                        <i className="fa-regular fa-eye"></i>
                                    )}
                                </button>
                            </div>
                        </div>
                            {error && (<p className="text-sm text-red-500">{error}</p>)}
                        <button
                            type="submit"
                            className="w-full h-11 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 active:bg-gray-950 transition-colors"
                        >
                            Sign in
                        </button>

                    </div>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>

                        <div className="relative flex justify-center">
                            <span className="bg-white px-3 text-xs text-gray-400">
                                New to Job Tracker?
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => navigate("/projects/job-tracker/register")}
                        className="w-full h-11 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Create an account
                    </button>
                </form>

                <p className="text-center text-xs text-gray-400 mt-6">
                    Track your applications. Stay organized.
                </p>

            </div>
        </main>
    );
}

export default Login;