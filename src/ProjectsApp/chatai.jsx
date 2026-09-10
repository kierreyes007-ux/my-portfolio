import Navbar from "./chat/navbar";
import Home from "./chat/home";
import AIChat from "./chat/aichat";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Chat() {
    return (
        <div className="w-full">
           
                <Navbar />

                <Routes>
                    <Route index element={<Home />} />
                    <Route path="ai/chat" element={<AIChat />} />
                </Routes>
      
        </div>
    );
}

export default Chat;