const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Initialize client
const gemini = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});
const PORT = process.env.PORT || 4000;

// Helper function for the retry mechanism
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.get("/", (req, res) => {
    res.json({ message: "Chat AI backend is running" });
});

app.post("/chat", async (req, res) => {
    const { message } = req.body;

    if (!message || !message.trim()) {
        return res.status(400).json({
            error: "Please enter a message before sending."
        });
    }

    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
        try {
            const response = await gemini.models.generateContent({
                model: "gemini-3.5-flash-lite",
                contents: `You are a helpful general-purpose AI assistant.
                Keep responses concise, natural, and conversational.
                Avoid excessive Markdown, bold text, and unnecessary lists.
                Answer the user's question directly. 
                
                User: ${message}`
            });

            // FIXED: Using the official shortcut property .text to avoid breaking array syntax
            return res.status(200).json({ reply: response.text });

        } catch (err) {
            attempt++;
            
            // Safe logging that won't break if the error object is circular
            const errorMessage = err.message || "";
            console.error(`[Attempt ${attempt}/${maxRetries} Failed]:`, errorMessage);

            // Extract status securely from SDK configurations
            const statusCode = err.status || err.statusCode || (err.response && err.response.status);
            const errorStr = (String(errorMessage) + " " + String(statusCode)).toLowerCase();
            
            const isRateLimit = statusCode === 429 || errorStr.includes("429") || errorStr.includes("quota");
            const isOverloaded = statusCode === 503 || errorStr.includes("503") || errorStr.includes("unavailable") || errorStr.includes("overloaded");

            // If Gemini is busy and we have retries remaining, wait and try again
            if ((isOverloaded || isRateLimit) && attempt < maxRetries) {
                const delay = attempt * 1500; 
                console.log(`Gemini server high demand. Retrying in ${delay}ms...`);
                await sleep(delay);
                continue; 
            }

            // Exited retries or met an unrecoverable state, parse the outcome cleanly for React
            if (isOverloaded) {
                return res.status(503).json({
                    error: "The AI service is temporarily unavailable due to high demand. Please try again in a moment."
                });
            }

            if (isRateLimit) {
                return res.status(429).json({
                    error: "The AI service is currently busy. Please try again in a moment."
                });
            }

            if (statusCode === 401 || statusCode === 403 || errorStr.includes("401") || errorStr.includes("403")) {
                return res.status(500).json({
                    error: "The AI service could not be authenticated. Please contact support."
                });
            }

            // Absolute catcher preventing standard Node system crashes
            return res.status(500).json({
                error: "Something went wrong while generating the response. Please try again."
            });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
