import { Link } from "react-router-dom";
function Register() {

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 mb-10">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
                <h1 className="text-3xl font-bold text-center text-gray-900">
                    Create Account
                </h1>

                <p className="text-center text-gray-500 mt-2 mb-8">
                    Sign up to get started
                </p>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-black transition"
                    >
                        Create Account
                    </button>

                    <p className="text-center text-gray-500 text-sm">
                        Already have an account?{" "}
                        <Link to='/login'>
                        <button
                            type="button"
                            className="font-semibold text-gray-900 hover:underline"
                        >
                            Log In
                        </button></Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;