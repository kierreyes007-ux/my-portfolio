const pool = require("../config/db");

async function getCarts(req, res) { 
    try{
    const result = await pool.query("SELECT cart.id, cart.product_id, cart.quantity, cart.size, cart.color, products.title, products.price, products.image FROM cart JOIN products ON cart.product_id = products.id WHERE cart.user_id = $1 ORDER BY cart.updated_at DESC;", [req.userId]);
    return res.status(200).json(result.rows)
    }catch(err){
        console.log(err.message);
        return res.status(500).json({error: "Internal server error"});
    }

}; 

async function addItem(req, res){
    const { product_id, quantity, size, color } = req.body;

    try{
        const result = await pool.query("INSERT INTO cart (user_id,product_id, quantity, size, color) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (user_id, product_id, size, color) DO UPDATE SET quantity = cart.quantity + EXCLUDED.quantity, updated_at = CURRENT_TIMESTAMP RETURNING *", [req.userId, product_id, quantity, size, color])
        
        return res.status(200).json(result.rows[0]);      
    }catch(err){
        console.log(err.message);
        return res.status(500).json({error: "Internal server error"});
    }
};

async function updateItem(req, res){
    const id = req.params.id;
    const { quantity } = req.body;
    try{
        const result = await pool.query("UPDATE cart SET quantity = cart.quantity + $1, updated_at = CURRENT_TIMESTAMP WHERE ID = $2 AND user_id = $3 RETURNING *", [quantity, id, req.userId]);
        if(result.rows.length === 0){
            return res.status(404).json({error: "no row detected"});
           
        }
         return res.status(200).json(result.rows[0]);
    }catch(err){
        console.log(err.message);
        return res.status(500).json({error: "Internal server error"});
    }

};
async function deleteItem (req, res){
    const id = req.params.id;
    try{
        const result = await pool.query("DELETE FROM cart WHERE id = $1 AND user_id = $2 RETURNING *", [id, req.userId]);
        if(result.rows.length === 0){
            return res.status(404).json({error: "Error no id detected"});
        }
        return res.status(200).json(result.rows[0]);
    }catch(err){
        console.log(err.message);
        return res.status(500).json({error: "Internal server error"});
    }
}


module.exports = { getCarts, addItem, updateItem, deleteItem};