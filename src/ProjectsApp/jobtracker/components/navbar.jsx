import LogoutModal from "./logoutModal";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";

function Navbar() {
    const linkStyle = ({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
        }`;
        const { user, logoutUser } = useAuthContext();
        const [showLogoutModal, setShowLogoutModal] = useState(false);
    return (
        <nav className="w-full border-b border-gray-200 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
                
                <NavLink
                    to="/projects/job-tracker/."
                    className="text-lg sm:text-xl font-semibold text-gray-900"
                >
                    Job Tracker
                </NavLink>

                <div className="flex items-center gap-1 sm:gap-2">
                    <NavLink to="/projects/job-tracker/." className={linkStyle}>
                        Home
                    </NavLink>

                    <NavLink to="/projects/job-tracker/jobs" className={linkStyle}>
                        Jobs
                    </NavLink>
                    { user ? (<button className="flex items-center gap-1 sm:gap-2" type="button" onClick={() => setShowLogoutModal(!showLogoutModal)}>Logout</button>) : (
                    <NavLink to="/projects/job-tracker/login" className={linkStyle}>
                        Login
                    </NavLink>)}
                </div>

            </div>
            {showLogoutModal && <LogoutModal setShowLogoutModal={setShowLogoutModal}/>}
        </nav>
    );
}

export default Navbar;
