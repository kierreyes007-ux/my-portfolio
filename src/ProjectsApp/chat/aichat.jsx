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
    const textareaRef = useRef(null);
    useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
        html.style.overflow = previousHtmlOverflow;
        body.style.overflow = previousBodyOverflow;
    };
}, []);

    const sendMessage = async (e) => {
        e.preventDefault();

        if (!message.trim() || loading) return;

        const currentMessage = message.trim();

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: currentMessage
            }
        ]);

        setMessage("");
        setLoading(true);

        try {
            const response = await fetch(
                "https://chatai-backend-zx1k.onrender.com/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        message: currentMessage
                    })
                }
            );

            if (!response.ok) {
                const errorData = await response.json();

                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content: errorData.error
                    }
                ]);

                return;
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

    const handleMessageChange = (e) => {
        const textarea = e.target;

        setMessage(textarea.value);

        textarea.style.height = "auto";

        if (textarea.scrollHeight > 128) {
            textarea.style.height = "128px";
            textarea.style.overflowY = "auto";
        } else {
            textarea.style.height = `${textarea.scrollHeight}px`;
            textarea.style.overflowY = "hidden";
        }
    };

    useEffect(() => {
        if (!textareaRef.current) return;

        const textarea = textareaRef.current;

        textarea.style.height = "auto";

        if (textarea.scrollHeight > 128) {
            textarea.style.height = "128px";
            textarea.style.overflowY = "auto";
        } else {
            textarea.style.height = `${textarea.scrollHeight}px`;
            textarea.style.overflowY = "hidden";
        }
    }, [message]);

    const startListening = () => {
        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.error("Speech recognition is not supported.");
            return;
        }

        if (listening) return;

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

        utterance.onstart = () => {
            if (speechIdRef.current === speechId) {
                setSpeakingIndex(index);
            }
        };

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

        setSpeakingIndex(index);
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
                                ? "text-gray-300 hover:bg-gray-800"
                                : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        {darkMode ? (
                            <Sun size={21} />
                        ) : (
                            <Moon size={21} />
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`flex-1 min-h-0 min-w-0 overflow-y-auto overflow-x-hidden px-3 sm:px-6 py-6 sm:py-8 ${
                    darkMode
                        ? "bg-gray-950"
                        : "bg-white"
                }`}
            >
                <div className="w-full max-w-3xl mx-auto space-y-4">
                    {messages.length === 0 ? (
                        <div className="min-h-full flex items-center justify-center text-center px-4">
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
                                    <div
                                        className={`max-w-[85%] sm:max-w-[75%] min-w-0 break-words whitespace-pre-wrap px-4 py-3 rounded-2xl ${
                                            darkMode
                                                ? "bg-gray-800 text-white"
                                                : "bg-gray-200 text-gray-900"
                                        }`}
                                    >
                                        {msg.content}
                                    </div>
                                ) : (
                                    <div className="flex min-w-0 max-w-[90%] items-end gap-2">
                                        <div
                                            className={`min-w-0 break-words whitespace-pre-wrap px-4 py-3 rounded-2xl ${
                                                darkMode
                                                    ? "bg-gray-800 text-white"
                                                    : "bg-gray-200 text-gray-900"
                                            }`}
                                        >
                                            {msg.content}
                                        </div>

                                        {speakingIndex === index && (
                                            <div className="flex h-6 shrink-0 items-center gap-[2px] px-1">
                                                <span
                                                    className={`h-2 w-[3px] rounded-full animate-[speak_0.6s_ease-in-out_infinite] ${
                                                        darkMode
                                                            ? "bg-gray-400"
                                                            : "bg-gray-500"
                                                    }`}
                                                />

                                                <span
                                                    className={`h-4 w-[3px] rounded-full animate-[speak_0.5s_ease-in-out_infinite_0.1s] ${
                                                        darkMode
                                                            ? "bg-gray-300"
                                                            : "bg-gray-600"
                                                    }`}
                                                />

                                                <span
                                                    className={`h-3 w-[3px] rounded-full animate-[speak_0.7s_ease-in-out_infinite_0.2s] ${
                                                        darkMode
                                                            ? "bg-gray-400"
                                                            : "bg-gray-500"
                                                    }`}
                                                />

                                                <span
                                                    className={`h-5 w-[3px] rounded-full animate-[speak_0.55s_ease-in-out_infinite_0.15s] ${
                                                        darkMode
                                                            ? "bg-gray-300"
                                                            : "bg-gray-600"
                                                    }`}
                                                />
                                            </div>
                                        )}

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
                                            className={`shrink-0 p-1 rounded-md transition ${
                                                speakingIndex === index
                                                    ? darkMode
                                                        ? "text-white bg-gray-800"
                                                        : "text-gray-900 bg-gray-200"
                                                    : darkMode
                                                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                                            }`}
                                        >
                                            {speakingIndex === index ? (
                                                <VolumeX
                                                    size={18}
                                                    className="animate-pulse"
                                                />
                                            ) : (
                                                <Volume2 size={18} />
                                            )}
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))
                    )}

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
                                />

                                <span
                                    className={`w-2 h-2 rounded-full animate-bounce [animation-delay:150ms] ${
                                        darkMode
                                            ? "bg-gray-400"
                                            : "bg-gray-500"
                                    }`}
                                />

                                <span
                                    className={`w-2 h-2 rounded-full animate-bounce [animation-delay:300ms] ${
                                        darkMode
                                            ? "bg-gray-400"
                                            : "bg-gray-500"
                                    }`}
                                />
                            </div>
                        </div>
                    )}

                    <div ref={chatEndRef} />
                </div>
            </div>

            <form
                onSubmit={sendMessage}
                className={`w-full shrink-0 border-t px-3 py-3 sm:px-6 sm:py-4 ${
                    darkMode
                        ? "border-gray-800 bg-gray-950"
                        : "border-gray-200 bg-white"
                }`}
            >
                <div className="w-full max-w-3xl mx-auto flex min-w-0 items-end gap-2">
                    <div
                        className={`relative min-w-0 flex-1 rounded-xl border transition focus-within:border-gray-500 ${
                            darkMode
                                ? "bg-gray-800 border-gray-700"
                                : "bg-gray-100 border-gray-300"
                        }`}
                    >
                        <textarea
                            ref={textareaRef}
                            value={message}
                            onChange={handleMessageChange}
                            onKeyDown={(e) => {
                                if (
                                    e.key === "Enter" &&
                                    !e.shiftKey
                                ) {
                                    e.preventDefault();
                                    sendMessage(e);
                                }
                            }}
                            placeholder="Ask something..."
                            rows={1}
                            className={`chat-textarea block w-full min-w-0 resize-none overflow-y-hidden max-h-32 bg-transparent outline-none pl-3 sm:pl-4 pr-12 py-3 ${
                                darkMode
                                    ? "text-white placeholder-gray-500"
                                    : "text-gray-900 placeholder-gray-500"
                            }`}
                        />

                        <button
                            type="button"
                            onClick={startListening}
                            disabled={loading}
                            aria-label={
                                listening
                                    ? "Listening"
                                    : "Use microphone"
                            }
                            className={`absolute right-2 bottom-2 p-2 rounded-lg transition ${
                                listening
                                    ? "text-red-500 bg-red-500/10"
                                    : darkMode
                                        ? "text-gray-400 hover:text-white hover:bg-gray-700"
                                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-200"
                            } ${
                                loading
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                            }`}
                        >
                            <Mic
                                size={20}
                                className={
                                    listening
                                        ? "animate-pulse"
                                        : ""
                                }
                            />
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading || !message.trim()}
                        className={`shrink-0 px-4 sm:px-6 py-3 rounded-xl font-semibold transition ${
                            loading || !message.trim()
                                ? darkMode
                                    ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : darkMode
                                    ? "bg-white text-black hover:bg-gray-200"
                                    : "bg-gray-900 text-white hover:bg-gray-700"
                        }`}
                    >
                        Send
                    </button>
                </div>
            </form>

            <style>{`
                .chat-textarea::-webkit-scrollbar {
                    width: 6px;
                }

                .chat-textarea::-webkit-scrollbar-track {
                    background: transparent;
                }

                .chat-textarea::-webkit-scrollbar-thumb {
                    background: ${darkMode ? "#4b5563" : "#d1d5db"};
                    border-radius: 9999px;
                }

                .chat-textarea::-webkit-scrollbar-thumb:hover {
                    background: ${darkMode ? "#6b7280" : "#9ca3af"};
                }

                .chat-textarea {
                    scrollbar-width: thin;
                    scrollbar-color: ${
                        darkMode
                            ? "#4b5563 transparent"
                            : "#d1d5db transparent"
                    };
                }

                @keyframes speak {
                    0%,
                    100% {
                        transform: scaleY(0.5);
                    }

                    50% {
                        transform: scaleY(1);
                    }
                }
            `}</style>
        </main>
    );
}

export default AIChat;  