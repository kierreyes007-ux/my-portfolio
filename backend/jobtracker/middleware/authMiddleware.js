const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next){
    const token = req.cookies.token;
    
    
    if(!token){
        return res.status(401).json("No access token")
    }
    try{
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.userId = decoded.userId;
    next();
    }catch(err){
        console.log(err.message);
        return res.status(401).json({error: "Invalid token"})
    }
}
module.exports = {authenticateToken};