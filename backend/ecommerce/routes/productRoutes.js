const express = require("express");
const router = express.Router();
const pool = require("../config/db");
router.get("/", async (req, res) => {
    try{
        const result = await pool.query("SELECT * FROM products");
        
        return res.status(200).json(result.rows);

    } catch(err){
        return res.status(500).json({error: err.message});
    }
})

module.exports = router;