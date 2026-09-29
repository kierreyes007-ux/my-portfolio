const pool = require("../config/db");

async function getProducts(req, res) {

    try{
        const result = await pool.query("SELECT * FROM products");
        return res.status(200).json(result.rows);
    }catch(err){
        console.log(err.message)
        return res.status(500).json({error: "Internal server error"});
    }
}

module.exports = { getProducts };