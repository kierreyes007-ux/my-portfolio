const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})