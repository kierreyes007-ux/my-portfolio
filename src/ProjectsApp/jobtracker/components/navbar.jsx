
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function Navbar() {
    const linkStyle = ({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
        }`;
        const { user, logoutUser } = useAuthContext();
    return (
        <nav className="w-full border-b border-gray-200 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
                
                <NavLink
                    to="/"
                    className="text-lg sm:text-xl font-semibold text-gray-900"
                >
                    Job Tracker
                </NavLink>

                <div className="flex items-center gap-1 sm:gap-2">
                    <NavLink to="/" className={linkStyle}>
                        Home
                    </NavLink>

                    <NavLink to="/jobs" className={linkStyle}>
                        Jobs
                    </NavLink>
                    { user ? (<button type="button" onClick={() =>logoutUser()}>Logout</button>) : (
                    <NavLink to="/login" className={linkStyle}>
                        Login
                    </NavLink>)}
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
