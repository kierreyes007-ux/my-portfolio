import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { useState } from "react";
import ModalRegistration from "../components/modal";    
function Register() {
    const { registerUser } = useAuthContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [showConPass, setShowConPass] = useState(false);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();



    async function handleSubmit(e){
        e.preventDefault();
        if(!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) return;
        if(password !== confirmPassword){
            setError("Password does not match")
            return;
        }
        try{
            await registerUser(name, email, password);
            setShowModal(true);
        }catch(err){
            console.log(err.message)
            if(err.response.status === 409){
                setError("Email already exists");
            }
            if(err.response.status === 500){
                setError("Internal server errror");
            }
            if(err.response.status === 401){
                setError("Unauthorized access")
            }
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
                        Create Account
                    </h1>

                    <p className="mt-3 text-sm text-neutral-500">
                        Sign up to get started.
                    </p>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                                value={name} onChange={(e)=> setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                                value={email} onChange={(e)=> setEmail(e.target.value)}

                            />
                        </div>

                        <div className="relative">
                            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                                Password
                            </label>

                            <input
                                type={showPass ? "text" : "password"}
                                placeholder="Create a password"
                                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                                value={password} onChange={(e)=> {setPassword(e.target.value); setError("") }}
                            />

                            <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-3 bottom-0 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                                >
                                    {showPass ? (
                                        <i className="fa-regular fa-eye-slash"></i>
                                    ) : (
                                        <i className="fa-regular fa-eye"></i>
                                    )}
                                </button>
                        </div>

                        <div className="relative">
                            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                                Confirm Password
                            </label>

                            <input
                                type={showConPass ? "text" : "password"}
                                placeholder="Confirm your password"
                                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                                value={confirmPassword} onChange={(e)=> {setConfirmPassword(e.target.value); setError("") }}
                            />
                            <button
                                    type="button"
                                    onClick={() => setShowConPass(!showConPass)}
                                    className="absolute right-3 bottom-0 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                                >
                                    {showConPass ? (
                                        <i className="fa-regular fa-eye-slash"></i>
                                    ) : (
                                        <i className="fa-regular fa-eye"></i>
                                    )}
                                </button>
                        </div>
                                 <p className="text-red-500 text-sm">{error}</p>       
                        <button
                            type="submit"
                            className="w-full rounded-full bg-neutral-950 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
                        >
                            Create Account
                        </button>

                        <div className="border-t border-neutral-200 pt-5 text-center">
                            <p className="text-sm text-neutral-500">
                                Already have an account?{" "}
                                <Link
                                    to="/projects/e-commerce/login"
                                    className="font-semibold text-neutral-950 transition-colors duration-300 hover:text-blue-600"
                                >
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            {showModal && <ModalRegistration showModal={showModal} setShowModal={setShowModal}/>}
        </section>
    );
}

export default Register;