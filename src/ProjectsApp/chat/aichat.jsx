import { useState, useEffect, useRef } from "react";
import {
    Mic,
    Volume2,
    VolumeX,
    Sun,
    Moon
} from "lucide-react";

function AIChat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [listening, setListening] = useState(false);
    const [speakingIndex, setSpeakingIndex] = useState(null);
    const [darkMode, setDarkMode] = useState(true);

    const chatEndRef = useRef(null);
    const speechIdRef = useRef(0);

    const sendMessage = async (e) => {
        e.preventDefault();

        if (!message.trim()) return;

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: message
            }
        ]);

        setMessage("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:4000/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message })
            });

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: data.reply
                }
            ]);
        } catch (err) {
            console.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const startListening = () => {
        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.error("Speech recognition is not supported.");
            return;
        }

        const recognition = new SpeechRecognition();

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            setMessage(text);
        };

        recognition.onend = () => {
            setListening(false);
        };

        recognition.onerror = () => {
            setListening(false);
        };

        setListening(true);
        recognition.start();
    };

    const speakMessage = (text, index) => {
        window.speechSynthesis.cancel();

        const speechId = ++speechIdRef.current;

        const utterance = new SpeechSynthesisUtterance(text);

        setSpeakingIndex(index);

        utterance.onend = () => {
            if (speechIdRef.current === speechId) {
                setSpeakingIndex(null);
            }
        };

        utterance.onerror = () => {
            if (speechIdRef.current === speechId) {
                setSpeakingIndex(null);
            }
        };

        window.speechSynthesis.speak(utterance);
    };

    const stopSpeaking = () => {
        window.speechSynthesis.cancel();

        speechIdRef.current++;

        setSpeakingIndex(null);
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [messages, loading]);

    return (
        <main
            className={`w-full min-w-0 h-[calc(100dvh-4rem)] flex flex-col overflow-hidden transition-colors duration-200 ${
                darkMode
                    ? "bg-gray-950 text-white"
                    : "bg-white text-gray-900"
            }`}
        >
            {/* CHAT HEADER */}
            <div
                className={`w-full shrink-0 border-b px-3 sm:px-6 py-3 ${
                    darkMode
                        ? "border-gray-800"
                        : "border-gray-200"
                }`}
            >
                <div className="max-w-3xl mx-auto flex justify-end">
                    <button
                        type="button"
                        onClick={() => setDarkMode((prev) => !prev)}
                        className={`p-2 rounded-lg transition ${
                            darkMode
                                ? "hover:bg-gray-800 text-gray-300"
                                : "hover:bg-gray-100 text-gray-700"
                        }`}
                    >
                        {darkMode ? (
                            <Sun size={22} />
                        ) : (
                            <Moon size={22} />
                        )}
                    </button>
                </div>
            </div>

            {/* CHAT AREA */}
            <div
                className={`flex-1 min-h-0 min-w-0 overflow-y-auto overflow-x-hidden px-3 sm:px-6 py-6 sm:py-8 ${
                    darkMode
                        ? "bg-gray-950"
                        : "bg-white"
                }`}
            >
                <div className="w-full max-w-3xl mx-auto space-y-4">

                    {messages.length === 0 ? (
                        <div className="h-full flex items-center justify-center text-center px-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                                    How can I help you?
                                </h1>

                                <p
                                    className={
                                        darkMode
                                            ? "text-gray-400"
                                            : "text-gray-500"
                                    }
                                >
                                    Start a conversation with your AI assistant.
                                </p>
                            </div>
                        </div>
                    ) : (
                        messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex w-full ${
                                    msg.role === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >
                                {msg.role === "user" ? (
                                    /* USER MESSAGE */
                                    <div
                                        className={`max-w-[75%] break-words whitespace-pre-wrap px-4 py-3 rounded-2xl ${
                                            darkMode
                                                ? "bg-gray-800 text-white"
                                                : "bg-gray-200 text-gray-900"
                                        }`}
                                    >
                                        {msg.content}
                                    </div>
                                ) : (
                                    /* ASSISTANT MESSAGE */
                                    <div className="flex min-w-0 max-w-[85%] items-center gap-2">
                                        <div
                                            className={`min-w-0 break-words whitespace-pre-wrap px-4 py-3 rounded-2xl ${
                                                darkMode
                                                    ? "bg-gray-800 text-white"
                                                    : "bg-gray-200 text-gray-900"
                                            }`}
                                        >
                                            {msg.content}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                speakingIndex === index
                                                    ? stopSpeaking()
                                                    : speakMessage(
                                                          msg.content,
                                                          index
                                                      )
                                            }
                                            className={`shrink-0 transition ${
                                                darkMode
                                                    ? "text-gray-400 hover:text-white"
                                                    : "text-gray-500 hover:text-gray-900"
                                            }`}
                                        >
                                            {speakingIndex === index ? (
                                                <VolumeX size={20} />
                                            ) : (
                                                <Volume2 size={20} />
                                            )}
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))
                    )}

                    {/* TYPING INDICATOR */}
                    {loading && (
                        <div className="flex justify-start">
                            <div
                                className={`px-4 py-3 rounded-2xl flex gap-1 ${
                                    darkMode
                                        ? "bg-gray-800"
                                        : "bg-gray-200"
                                }`}
                            >
                                <span
                                    className={`w-2 h-2 rounded-full animate-bounce ${
                                        darkMode
                                            ? "bg-gray-400"
                                            : "bg-gray-500"
                                    }`}
                                ></span>

                                <span
                                    className={`w-2 h-2 rounded-full animate-bounce [animation-delay:150ms] ${
                                        darkMode
                                            ? "bg-gray-400"
                                            : "bg-gray-500"
                                    }`}
                                ></span>

                                <span
                                    className={`w-2 h-2 rounded-full animate-bounce [animation-delay:300ms] ${
                                        darkMode
                                            ? "bg-gray-400"
                                            : "bg-gray-500"
                                    }`}
                                ></span>
                            </div>
                        </div>
                    )}

                    <div ref={chatEndRef}></div>
                </div>
            </div>

            {/* INPUT AREA */}
            <form
                onSubmit={sendMessage}
                className={`w-full shrink-0 border-t p-3 sm:p-4 ${
                    darkMode
                        ? "border-gray-800 bg-gray-950"
                        : "border-gray-200 bg-white"
                }`}
            >
                <div className="w-full max-w-3xl mx-auto flex min-w-0 items-center gap-2 sm:gap-3">

                    {/* INPUT */}
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ask something..."
                        className={`min-w-0 flex-1 px-3 sm:px-4 py-3 rounded-xl border outline-none transition ${
                            darkMode
                                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-gray-500"
                                : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500"
                        }`}
                    />

                    {/* MICROPHONE */}
                    <button
                        type="button"
                        onClick={startListening}
                        className={`shrink-0 transition ${
                            listening
                                ? "text-red-500"
                                : darkMode
                                ? "text-white hover:text-gray-300"
                                : "text-gray-900 hover:text-gray-500"
                        }`}
                    >
                        <Mic size={22} />
                    </button>

                    {/* SEND */}
                    <button
                        type="submit"
                        className={`shrink-0 px-4 sm:px-6 py-3 rounded-xl font-semibold transition ${
                            darkMode
                                ? "bg-white text-black hover:bg-gray-200"
                                : "bg-gray-900 text-white hover:bg-gray-700"
                        }`}
                    >
                        Send
                    </button>
                </div>
            </form>
        </main>
    );
}

export default AIChat;