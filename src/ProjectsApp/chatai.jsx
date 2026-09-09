import Navbar from "./chat/navbar";
import Home from "./chat/home";
import AIChat from "./chat/aichat";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Chat() {
    return (
        <div className="w-full">
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ai/chat" element={<AIChat />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Chat;