const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();
const app = express();


const gemini = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({message: "Chat AI backend is running"});
});

app.post("/chat", async (req, res) => {
    const { message } = req.body;

    if(!message || !message.trim()) {
        return res.status(400).json({error: "Something went wrong"})
    }
    try{
        
    const response = await gemini.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: `You are a helpful general-purpose AI assistant.
        Keep responses concise, natural, and conversational.
        Avoid excessive Markdown, bold text, and unnecessary lists.
        Answer the user's question directly. 
        
        User: ${message}`
    })

    return res.status(200).json({reply: response.candidates[0].content.parts[0].text})
    
    } catch(err){
    console.error(err);
    return res.status(500).send(err.message);
}
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});