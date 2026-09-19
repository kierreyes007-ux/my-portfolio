const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
   
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error: "Access token required"})
    }
    try{
    
  
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
    }catch(err){
        console.log(err.message);
        return res.status(401).json({error: "Invalid token"})
    }

  
}   
module.exports = { authenticateToken };