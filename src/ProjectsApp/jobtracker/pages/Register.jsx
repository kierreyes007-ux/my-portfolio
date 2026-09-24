import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hidePass, setHidePass] = useState(false);
    const [hideConPass, setHideConPass] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { registerUser } = useAuthContext();
    

    async function handleSubmit(e){
        e.preventDefault();

        if(!email.trim() || !password.trim() || !confirmPassword.trim()) return;

        if(password !== confirmPassword){
            setError("Password does not match");
            return;
        }

        try{
            await registerUser(email, password);
            navigate("/login");
        }catch(err){
            console.log(err.message);

            if(err.response.status === 409){
                setError("Email already exists");
            }

            if(err.response.status === 500){
                setError("Server error");
            }

            if(err.response.status === 401){
                setError("Unauthorized access");
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
                        Create an account
                    </h1>

                    <p className="text-sm text-gray-500 mt-2">
                        Create your Job Tracker account.
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
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError("");
                                }}
                                placeholder="you@example.com"
                                className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type={hidePass ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError("");
                                    }}
                                    placeholder="Enter your password"
                                    className="w-full h-11 border border-gray-300 rounded-lg px-3 pr-10 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                                />

                                <button
                                    type="button"
                                    onClick={() => setHidePass(!hidePass)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                                >
                                    {hidePass ? (
                                        <i className="fa-regular fa-eye-slash"></i>
                                    ) : (
                                        <i className="fa-regular fa-eye"></i>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>

                            <div className="relative">
                                <input
                                    type={hideConPass ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        setError("");
                                    }}
                                    placeholder="Confirm your password"
                                    className="w-full h-11 border border-gray-300 rounded-lg px-3 pr-10 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                                />

                                <button
                                    type="button"
                                    onClick={() => setHideConPass(!hideConPass)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                                >
                                    {hideConPass ? (
                                        <i className="fa-regular fa-eye-slash"></i>
                                    ) : (
                                        <i className="fa-regular fa-eye"></i>
                                    )}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <p className="text-sm text-red-500">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="w-full h-11 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 active:bg-gray-950 transition-colors"
                        >
                            Create account
                        </button>

                    </div>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>

                        <div className="relative flex justify-center">
                            <span className="bg-white px-3 text-xs text-gray-400">
                                Already have an account?
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => navigate("/projects/job-tracker/login")}
                        className="w-full h-11 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Go back to log in
                    </button>
                </form>

                <p className="text-center text-xs text-gray-400 mt-6">
                    Track your applications. Stay organized.
                </p>

            </div>
        </main>
    );
}

export default Register;