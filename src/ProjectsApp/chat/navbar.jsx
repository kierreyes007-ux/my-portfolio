
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="w-full h-16 px-6 flex items-center justify-between border-b border-gray-800 bg-gray-950 text-white">
            <Link to="/projects/AI-assistance/." className="text-xl font-bold">
                AI Assistant
            </Link>

            <div className="flex items-center gap-6">
                <Link
                    to="/projects/AI-assistance/."
                    className="text-gray-400 hover:text-white transition"
                >
                    Home
                </Link>

                <Link
                    to="/projects/AI-assistance/ai/chat"
                    className="text-gray-400 hover:text-white transition"
                >
                    Chat
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;

