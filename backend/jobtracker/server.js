const express = require("express");
const cors = require("cors");
const cookie = require("cookie-parser");
const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");
const demoJobRoutes = require("./routes/demoJobRoutes");
const { authenticateToken } = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());
app.use(cors({origin: "https://kierreyes.vercel.app",
credentials: true}));    
app.use(cookie());
const PORT = process.env.PORT || 5000;

app.use("/demo-jobs", demoJobRoutes)
app.use("/jobs", authenticateToken, jobRoutes)
app.use("/auth", authRoutes)


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})