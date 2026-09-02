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
            const res = await fetch('http://localhost:3000/products');
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
    
    async function fetchCart(){
        try{
            const res = await fetch("http://localhost:3000/cart");
            
            
            if(!res.ok){
                throw new Error("Unable to fetch the cart");
            }
            const data = await res.json();
            setCart(data);
        }catch(err){
            console.error(err.message)
        }
    }

    async function addToCart(product, quantity = 1, size = "", color = ""){
        try{
             const response = await fetch("http://localhost:3000/cart", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({product_id: product.id, quantity: quantity, size: size, color: color})
        });
            if(!response.ok){
                throw new Error("Error cannot post");
            }
            
        await fetchCart();
            setToast("Added to cart!");

        setTimeout(() => {
            setToast("");
        }, 2000);

       }catch(err){
        console.error(err.message)
       }
    }
    
    async function addQty(product){
        try{
       const response = await fetch(`http://localhost:3000/cart/${product.id}`,{
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({quantity: 1})
       })
       if(!response.ok){
        throw new Error("Error: Unable to add quantity")
       }
       await fetchCart();
        }catch(err){
            console.error(err.message)
        }
    }

    async function decQty(product){
        try{
        if(product.quantity > 1){
         const response = await fetch(`http://localhost:3000/cart/${product.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({quantity: -1})
         })
            if(!response.ok){
                throw new Error("Error Unable to decrease the quantity")
            }
            await fetchCart();
        }else{
             
            return removeToCart(product)
        }
        }catch(err){
            console.error(err.message)  
        }
       
    }

    async function removeToCart(product){
       try{
        const response = await fetch(`http://localhost:3000/cart/${product.id}`,{
            method: "DELETE"

        })
            if(!response.ok){
                throw new Error("Error unable to delete");  
            }
        await fetchCart();
       }catch(err){
        console.error(err.message)
       }
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
        fetchCart();
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