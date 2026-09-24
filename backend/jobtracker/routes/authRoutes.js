const express = require("express");

const { register, login, getUser, logout } = require("../controllers/authController");
const { authenticateToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/me", authenticateToken, getUser)

module.exports = router;