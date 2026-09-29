import { useState, useEffect, createContext, useContext} from "react";
import { fetchProducts } from "../services/productService";
import { fetchCarts, addCart, addQuantity, decQuantity, deleteCart } from "../services/cartService";
import { useAuthContext } from "./authContext";

const EcommerceContext = createContext();

export function EcommerceProvider({children}){
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [toast, setToast] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [productLoading, setProductLoading] = useState(false);
    const [productError, setProductError] = useState("");
    const { user, authLoading } = useAuthContext();
    const [loginModal, setLoginModal] = useState(false);

    useEffect(()=>{
        getProducts();
    }, [])

    useEffect(() => {
        if (!authLoading && user) {
            getCarts();
        }
        if (!authLoading && !user) {
        setCart([]);
    }
    }, [user, authLoading])

        async function getProducts(){
            setProductLoading(true);
            setProductError("");
            try{
                const data = await fetchProducts(); 
                setProduct(data);  
            } catch(err){
            console.error(err);
            setProductError(err.response.data.error);
            } finally{
                setProductLoading(false);  
            }
        }
    
    async function getCarts(){
        setLoading(true);
        setError("");
        try{
            const data = await fetchCarts();
            setCart(data);
        }catch(err){
            console.error(err);
            setError(err.response.data.error);
        }finally{
            setLoading(false);
        }
    }

    async function addToCart(product, quantity, size, color){
         
        try{
           
            await addCart(product, quantity, size, color)
            await getCarts();
            setToast("Added to cart!");

        setTimeout(() => {
            setToast("");
        }, 2000);

       }catch(err){
        console.error(err);
        setError(err.response.data.error);
       }
    }
    
    async function addQty(product){
        try{
            await addQuantity(product);
            await getCarts();
        }catch(err){
            console.error(err);
            setError(err.response.data.error);
        }
    }

    async function decQty(product){
        try{
        if(product.quantity > 1){
            await decQuantity(product);
            await getCarts();
        }else{
             
            return removeToCart(product)
        }
        }catch(err){
            console.error(err);  
            setError(err.response.data.error);
        }
       
    }

    async function removeToCart(product){
       try{
        await deleteCart(product);
        await getCarts();   
       }catch(err){
        console.error(err);  
            setError(err.response.data.error);
       }
    }

    function requestAddToCart(product){
        if(!user){
                setLoginModal(true);
                return; 
            }
        setSelectedProduct(product);
        setShowConfirm(true);
    }

    function cancelRequest(){ 
        setSelectedProduct(null); 
        setShowConfirm(false) 
    }

    function confirmRequest(){
        addToCart(selectedProduct);
        setShowConfirm(false);
        setSelectedProduct(null);
    }
   

    const value = {
        product,
        addToCart,
        cart,
        addQty,
        decQty,
        removeToCart,
        showConfirm,
        cancelRequest,
        confirmRequest,
        requestAddToCart,
        toast,  
        loading,
        error,
        productError,
        productLoading,
        loginModal,
        setLoginModal
    };
    return(
       <EcommerceContext.Provider value={value}>
        {children}
       </EcommerceContext.Provider>
    )
}

export function useEcommerce(){
    return useContext(EcommerceContext);
}