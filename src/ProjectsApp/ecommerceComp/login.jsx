import { Link } from "react-router-dom";

function Login() {
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
                    <form className="space-y-5">
                        <div>
                            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
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
                            />
                        </div>

                        <div className="flex justify-end">
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
        </section>
    );
}

export default Login;