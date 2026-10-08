import { useState, useEffect, createContext, useContext } from "react";

const OrderContext = createContext();

export function OrderProvider({children}){

    const [order, setOrder] = useState([]);

    const value = {
            order,
            setOrder
};
    return(
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    )
}
export function useOrderContext(){
    return useContext(OrderContext);
}