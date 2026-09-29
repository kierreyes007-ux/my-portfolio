import axios from "axios";
const API_URL = import.meta.env.VITE_ECOMMERCE_API_URL;
async function fetchProducts(){
    try{
       const response = await axios.get(`${API_URL}/products`);
       return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}
export { fetchProducts };