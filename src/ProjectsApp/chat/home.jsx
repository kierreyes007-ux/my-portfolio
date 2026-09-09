
import { Link } from "react-router-dom";

function Hero() {
    return (
        <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-950 text-white px-6">
            <div className="max-w-3xl text-center">
                <p className="text-sm text-gray-400 mb-4">
                    AI Assistant
                </p>

                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                    Your intelligent assistant, whenever you need it.
                </h1>

                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                    Ask questions, get helpful answers, and explore ideas
                    through a simple AI-powered conversation.
                </p>

                <Link
                    to="/ai/chat"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
                >
                    Start Chat
                </Link>
            </div>
        </main>
    );
}

export default Hero;

