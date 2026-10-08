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
    const [loginModal, setLoginModal] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const { user, authLoading, guest, setGuest } = useAuthContext();
    

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
                console.log(data);
            } catch(err){
            console.error(err);
            setProductError(err.response?.data?.error || "Something went wrong");
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
            setError(err.response?.data?.error || "Something went wrong");
        }finally{
            setLoading(false);
        }
    }

    async function addToCart(product, quantity = 1, size = null, color = null){
        if(!user){
            const existing = cart.find(item => item.id === product.id && item.size === size && item.color === color);

            if(existing){
                setCart( prev => prev.map(item => item.id === existing.id ? {...item, quantity: item.quantity + quantity} : item));
                setToast("Added to cart!");

                setTimeout(() => {
                    setToast("");
                }, 2000);

            }else{
                setCart(prev => [...prev, {...product, quantity, size, color}]);
                setToast("Added to cart!");

                setTimeout(() => {
                    setToast("");
                }, 2000);
            }
        }else{
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
    }
    
    async function addQty(product){
        if(!user){
            setCart(prev => prev.map(item => item.id === product.id && item.size === product.size && item.color === product.color ? {...item, quantity: item.quantity + 1} : item))
        }else{
            try{
                await addQuantity(product);
                await getCarts();
            }catch(err){
                console.error(err);
                setError(err.response.data.error);
            }
        }
    }

    async function decQty(product){
        if(!user){
           if(product.quantity > 1){
                 setCart(prev => prev.map(item => item.id === product.id && item.size === product.size && item.color === product.color ? {...item, quantity: item.quantity - 1} : item));
           }
           else{
            return removeToCart(product);
           }
        }else{
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
    }

    async function removeToCart(product){
        if(!user){
            setCart(prev => prev.filter(item => item.id !== product.id || item.size !== product.size || item.color !== product.color))
        }else{
            try{
                await deleteCart(product);
                await getCarts();   
            }catch(err){
                console.error(err);  
                    setError(err.response.data.error);
            }
       }
    }

    function requestAddToCart(product){
        if(!user && !guest){
                setLoginModal(true);
                return; 
            }else
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