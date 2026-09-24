const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(req, res){
    const { email, password} = req.body;
    try{

    if(!email || !password) {

        return res.status(400).json({error: "Email and password are required"})
    }
    const findUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if(findUser.rows.length > 0){
        return res.status(409).json({error: "Email is already registered"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *", [email, hashedPassword]);

    
    console.log(result.rows[0]);    
    return res.status(201).json({message: "Account successfully created."})
    }catch(err){
        console.log(err.message);
        return res.status(500).json({error: "Internal server error"})
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    try{
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email])
        if(result.rows.length === 0) {
            return res.status(401).json({error: "Invalid email"});
        }
        const user = result.rows[0];

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(401).json({error: "Invalid password"})
        }
        const userId = user.id;
        const token = jwt.sign(
           { userId },
           process.env.JWT_SECRET,
           {
            expiresIn: "1h"
           }
           
        );
     
        
        res.cookie("token", token, {httpOnly: true} )
        return res.status(200).json({message: "Login successful"});

    }catch(err){
        console.log(err.message);
        return res.status(500).json({error: "Internal server error"})
    }

}

async function getUser(req, res){
    try{
       const result = await pool.query("SELECT id, email FROM users WHERE id = $1", [req.userId]);
       if(result.rows.length > 0){
        return res.status(200).json({id: result.rows[0].id, email: result.rows[0].email})
       }
       return res.status(404).json({error: "Invalid token"})

    }catch(err){
        console.log(err.message)
    }
}

function logout(req, res){
   res.clearCookie("token");
   return res.status(200).json({message: "Logout Successfully"});
}

module.exports = { register, login, getUser, logout };