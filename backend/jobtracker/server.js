const express = require("express");
const cors = require("cors");
const cookie = require("cookie-parser");
const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");
const demoJobRoutes = require("./routes/demoJobRoutes");
const { authenticateToken } = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());
app.use(cors({origin: "http://localhost:5173",
credentials: true}));    
app.use(cookie());

app.use("/demo-jobs", demoJobRoutes)
app.use("/jobs", authenticateToken, jobRoutes)
app.use("/auth", authRoutes)


app.listen(5000, () => {
    console.log("server is running on port 5000")
})