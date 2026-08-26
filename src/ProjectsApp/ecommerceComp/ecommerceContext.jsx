    import { useState, useEffect, createContext, useContext} from "react";
    import { createPortal } from "react-dom"

const EcommerceContext = createContext();

export function EcommerceProvider({children}){
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    const [showConfirm, setShowConfirm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    async function fetchProducts(){
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
        }
    }
    
    function addToCart(product){
        const existing = cart.find(item => item.id === product.id);

        if(existing){
            return setCart(prev => prev.map((item) => item.id === existing.id ? {...item, quantity: item.quantity + 1} : item));
        }

        return setCart(prev => [...prev, {...product, quantity: 1}]);
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
        requestAddToCart
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