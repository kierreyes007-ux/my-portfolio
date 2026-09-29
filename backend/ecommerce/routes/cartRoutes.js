const express = require("express");
const router = express.Router();
const { getCarts, addItem, updateItem, deleteItem } = require("../controllers/cartController");


router.get("/", getCarts); 
router.post("/", addItem);
router.patch("/:id", updateItem);
router.delete("/:id", deleteItem);


module.exports = router;