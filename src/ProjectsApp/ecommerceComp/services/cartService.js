import axios from "axios";
const API_URL = import.meta.env.VITE_ECOMMERCE_API_URL;

async function fetchCarts(){
    try{
        const response = await axios.get(`${API_URL}/cart`, {withCredentials: true});
        return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}
async function addCart(product, quantity = 1, size = "", color = ""){
    try{
        const response = await axios.post(`${API_URL}/cart`, {product_id: product.id, quantity: quantity, size: size, color: color}, {withCredentials: true})
        return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}
async function addQuantity(product){
    try{
        const response = await axios.patch(`${API_URL}/cart/${product.id}`, {quantity: 1}, {withCredentials: true});
        return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}
async function decQuantity(product){
    try{
        const response = await axios.patch(`${API_URL}/cart/${product.id}`, {quantity: -1}, {withCredentials: true});
        return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}
async function deleteCart(product){
    try{
        const response = await axios.delete(`${API_URL}/cart/${product.id}`, {withCredentials: true});
        return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}
export { fetchCarts, addCart, addQuantity, decQuantity, deleteCart };

