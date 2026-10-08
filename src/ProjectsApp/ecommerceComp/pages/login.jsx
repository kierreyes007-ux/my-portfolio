import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../context/authContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginUser, guest, setGuest } = useAuthContext();
    const [error, setError] = useState("");
    const [toast, setToast] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        if(!email.trim() || !password.trim()) return;
        setLoading(true);
        try{
            await loginUser(email, password);   
            navigate("/projects/e-commerce/.");
        }catch(err){
            console.log(err.message);
            if(err.response.status === 500){
                setError(err.response.data.error);
            }
            if(err.response.status === 401){
                setError(err.response.data.error);
            }
            
        }finally{
            setLoading(false);
        }




    }
    return (
        <section className="flex min-h-screen w-full items-center justify-center bg-[#f7f7f5] px-4 py-10 text-neutral-950 sm:px-6">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Account
                    </p>

                    <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                        Welcome Back
                    </h1>

                    <p className="mt-3 text-sm text-neutral-500">
                        Sign in to your account to continue.
                    </p>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                                value={email} onChange={(e)=> {setEmail(e.target.value); setError("")}}
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                                value={password} onChange={(e)=> { setPassword(e.target.value); setError("")}}
                            />
                        </div>

                        <div className="flex justify-between">
                            <p className="text-sm text-red-500">{error}</p>
                            <button
                                type="button"
                                className="text-sm font-medium text-neutral-500 transition-colors duration-300 hover:text-blue-600"
                            >
                                Forgot password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-full bg-neutral-950 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
                        >
                            Log In
                        </button>

                        <button className="w-full rounded-full border-neutral-100 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-neutral-200 hover:shadow-lg" type="button" onClick={() => {setGuest(true); setToast("Continuing as a guest...");
                        setTimeout(() => {
                             navigate("/projects/e-commerce/.");
                        }, 2000);}}
                        >Continue as a Guest
                        </button>
                        
                        <div className="border-t border-neutral-200 pt-5 text-center">
                            <p className="text-sm text-neutral-500">
                                Don't have an account?{" "}
                                <Link
                                    to="/projects/e-commerce/register"
                                    className="font-semibold text-neutral-950 transition-colors duration-300 hover:text-blue-600"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            {loading && ( <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80"> <div className="h-8 w-8 animate-spin rounded-full border-4 border-neutral-200 border-t-neutral-950" /> <p className="mt-3 text-sm text-neutral-600">Logging in...</p> </div> )}
            {toast && ( <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white shadow-lg"> <div className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-600 border-t-white" /> {toast} </div> )}
        </section>
    );
}

export default Login;