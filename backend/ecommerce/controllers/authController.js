const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(req, res){
    const { name, email, password } = req.body;
    if(!name || !email || !password){
        return res.status(401).json({error: "required inputs"})
    }
    try{
        const findUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if(findUser.rows.length > 0){
            return res.status(409).json({error: "Email already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [name, email, hashedPassword]);
        return res.status(201).json({message: "Account created successfully"});

    }catch(err){
        console.log(err.message);
        return res.status(500).json({error: "Internal server error"})
    }

}
async function login(req, res){
    const {email, password} = req.body;
    try{
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if(result.rows.length === 0){
            return res.status(401).json({error: "Invalid email"});
        }
        const user = result.rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({error: "Invalid password"});
        }
        const userId = user.id;

        const accessToken = jwt.sign(
            {userId},
            process.env.JWT_SECRET,
            {expiresIn: "15m"}
        );

        const refreshToken = jwt.sign(
            {userId},
            process.env.JWT_REFRESH,
            {expiresIn: "7d"}
        );
        res.cookie("token", accessToken, {httpOnly: true, secure: true, sameSite: "none"});
        res.cookie("refreshToken", refreshToken, {httpOnly: true, secure: true, sameSite: "none"});
        return res.status(200).json({message: "Login Successfully"})

    }catch(err){
        console.log(err.message);
        return res.status(500).json({error: "Internal server error"});
    }
}
async function getCurrentUser(req, res){
    try{
        const result = await pool.query("SELECT id, name, email FROM users WHERE id = $1", [req.userId]);
        if(result.rows.length === 0){
            return res.status(404).json({error: "User not found"});
        }
        return res.status(200).json(result.rows[0])
    }catch(err){
        console.log(err.message);
        return res.status(500).json({error: "Internal server error"});

    }
}
function logoutUser(req, res){
    res.clearCookie("token", {httpOnly: true, secure: true, sameSite: "none"});
    res.clearCookie("refreshToken", {httpOnly: true, secure: true, sameSite: "none"});
    return res.status(200).json({message: "logout successful"});
}
async function refresh(req, res){
    const refreshToken = req.cookies.refreshToken;
    try{
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH);
        const accessToken = jwt.sign(
            {userId: decoded.userId},
            process.env.JWT_SECRET,
            {expiresIn: "10s"}
        );
        res.cookie("token", accessToken, {httpOnly: true, secure: true, sameSite: "none"});
        return res.status(200).json({message: "Access token refreshed"});
    }catch(err){
        console.log(err.message);
        return res.status(401).json({error: "Invalid or expired refresh token"});
    }
}
module.exports = {register, login, getCurrentUser, logoutUser, refresh};