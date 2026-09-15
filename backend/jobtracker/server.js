const express = require("express");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

app.use(express.json());
app.use(cors());    

app.use("/jobs", jobRoutes)

app.listen(5000, () => {
    console.log("server is running on port 5000")
})