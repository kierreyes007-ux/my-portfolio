const express = require("express");
const router = express.Router();

const pool = require("../config/db");

router.get("/", async (req, res) => {
    try{
    const result = await pool.query("SELECT cart.id, cart.product_id, cart.quantity, cart.size, cart.color, products.title, products.price, products.image FROM cart JOIN products ON cart.product_id = products.id ORDER BY cart.updated_at DESC;");
    return res.status(200).json(result.rows)
    }catch(err){
        return res.status(500).json({error: err.message})
    }

}); 

router.post("/", async (req, res) => {
    const { product_id, quantity, size, color } = req.body;

    try{
        const result = await pool.query("INSERT INTO cart (product_id, quantity, size, color) VALUES ($1, $2, $3, $4) ON CONFLICT (product_id, size, color) DO UPDATE SET quantity = cart.quantity + EXCLUDED.quantity, updated_at = CURRENT_TIMESTAMP RETURNING *", [product_id, quantity, size, color])
         console.log(result.rows);
        return res.status(200).json(result.rows[0])        
    }catch(err){
        return res.status(500).json({error: err.message});
    }
});

router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const { quantity } = req.body;
    try{
        const result = await pool.query("UPDATE cart SET quantity = cart.quantity + ($1), updated_at = CURRENT_TIMESTAMP WHERE ID = ($2) RETURNING *", [quantity, id]);
        if(result.rows.length === 0){
            return res.status(404).json({error: "no row detected"});
           
        }
         return res.status(200).json(result.rows[0])
    }catch(err){
        return res.status(500).json({error: err.message})
    }

});
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try{
        const result = await pool.query("DELETE FROM cart WHERE id = ($1) RETURNING *", [id]);
        if(result.rows.length === 0){
            return res.status(404).json({error: "Error no id detected"});
        }
        return res.status(200).json(result.rows[0]);
    }catch(err){
        return res.status(500).json({error: err.message})
    }
})


module.exports = router;