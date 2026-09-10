const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const PORT = process.env.PORT || 3000;



const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});