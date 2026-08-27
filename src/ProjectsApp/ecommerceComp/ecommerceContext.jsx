    import { useState, useEffect, createContext, useContext} from "react";
    import { createPortal } from "react-dom"

const EcommerceContext = createContext();

export function EcommerceProvider({children}){
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [toast, setToast] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cartLoading, setCartLoading] = useState(false);
    const [error, setError] = useState("");
    const [cartError, setCartError] = useState("");

    async function fetchProducts(){
        setLoading(true);
        setError("");
        try{
            const res = await fetch("https://fakestoreapi.com/products");
            if(!res.ok){
                throw new Error("Unable to fetch the products")
            }
            const data = await res.json();
            setProduct(data);
            console.log(data);
        } catch(err){
           console.error(err);
            setError(err.message);
        } finally{
            setLoading(false);  
        }
    }
    
    function addToCart(product, quantity = 1){
        const existing = cart.find(item =>
            item.id === product.id &&
            item.size === product.size &&
            item.color === product.color
             
            );
        setToast("✓ Added to cart!");
         setTimeout(() => {
            setToast("");
        }, 3000);

        if(existing){
            return setCart(prev => prev.map((item) => item.id === existing.id &&
                item.size === existing.size &&
                item.color === existing.color ? {...item, quantity: item.quantity + quantity} : item));
        }

        return setCart(prev => [...prev, {...product, quantity}]);
    }
    
    function addQty(product){
        setCart(prev => prev.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1 } : item))
    }

    function decQty(product){
        if(product.quantity <= 1){
            return removeToCart(product);
        }
        setCart(prev => prev.map(item => item.id === product.id ? {...item, quantity: item.quantity -1} : item  ))
    }

    function removeToCart(product){
        setCart(prev => prev.filter(item => item.id !== product.id))
    }

    function requestAddToCart(product){
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
    useEffect(()=>{
        fetchProducts();
    }, [])

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
        cartLoading,
        error,
        cartError
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