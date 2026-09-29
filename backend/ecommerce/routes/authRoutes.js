const express = require("express");
const router = express.Router();
const { register, login, getCurrentUser, logoutUser, refresh } = require("../controllers/authController");
const {authenticateToken} = require("../middleware/authMiddleware");

router.post("/register", register)
router.post("/login", login)
router.get("/me", authenticateToken, getCurrentUser)
router.post("/logout", logoutUser)
router.post("/refresh", refresh)

module.exports = router;