const express = require("express");
const cookie = require("cookie-parser");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const authRoutes = require("./routes/authRoutes");
const {authenticateToken} = require("./middleware/authMiddleware");
const PORT = process.env.PORT || 3000;


const app = express();

app.use(express.json());
app.use(cors({origin: "https://kierreyes.vercel.app",
credentials: true}));    
app.use(cookie());
app.use("/products", productRoutes);
app.use("/cart", authenticateToken, cartRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});