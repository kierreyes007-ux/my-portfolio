const express = require("express");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");
const { authenticateToken } = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());
app.use(cors());    

app.use("/jobs", authenticateToken, jobRoutes)
app.use("/auth", authRoutes)


app.listen(5000, () => {
    console.log("server is running on port 5000")
})