import shoeswhite from "../assets/imgecom/shoeswhite.png";
import { useState } from "react";

function Cart({ cart, setCart }) {
    const [quantities, setQuantities] = useState({});

    const cartTotal = cart.reduce((total, prod) => {
        return total + prod.price * (quantities[prod.id] || 1);
    }, 0);

    const increase = (id) => {
        setQuantities(prev => ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }));
    };

    const decrease = (id) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max((prev[id] || 1) - 1, 1)
        }));
    };

    const deleteProd = (cartId) => {
        setCart(prev => prev.filter(prod => prod.cartId !== cartId));
    };

    return (
        <section className="w-full min-h-screen py-15 px-5">
            <div className="w-full">
                <h2 className="text-2xl py-2 font-bold">Your Cart</h2>

                {/* Header */}
                <div className="hidden md:grid w-full grid-cols-4 text-lg p-5">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>


                <div className="grid gap-5">
                    {cart?.map((prod) => (

                        <div 
                        key={prod.cartId} 
                        className="
                        w-full 
                        md:grid md:grid-cols-4 
                        flex flex-col gap-4
                        md:items-center 
                        px-5 py-4 
                        bg-white rounded-xl shadow-xl relative
                        "
                        >

                            {/* Product */}
                            <div className="flex items-center gap-3">

                                <img 
                                className="
                                w-20 h-20 
                                md:w-28 md:h-28 
                                object-cover 
                                bg-gray-200 rounded-lg
                                "
                                src={prod.image}
                                />

                                <div className="flex flex-col gap-1 text-sm">
                                    <p className="font-medium">
                                        {prod.name}
                                    </p>

                                    <p>
                                        Size: 
                                        <span className="text-base ml-1">
                                            {prod.size}
                                        </span>

                                        <span className="ml-3">
                                            Color: {prod.color}
                                        </span>
                                    </p>
                                </div>

                            </div>


                            {/* Price */}
                            <p className="text-lg">
                                ₱{prod.price}
                            </p>


                            {/* Quantity */}
                            <div className="flex gap-3 items-center">

                                <button 
                                onClick={() => decrease(prod.id)}
                                className="font-bold px-2 py-1 border rounded">
                                    <i className="fa-solid fa-minus text-base"></i>
                                </button>

                                <p>
                                    {quantities[prod.id] || 1}
                                </p>

                                <button 
                                onClick={() => increase(prod.id)}
                                className="font-bold px-2 py-1 border rounded">
                                    <i className="fa-solid fa-plus text-base"></i>
                                </button>

                            </div>


                            {/* Total */}
                            <p className="text-lg">
                                ₱{prod.price * (quantities[prod.id] || 1)}
                            </p>


                            {/* Delete */}
                            <button 
                            onClick={() => deleteProd(prod.cartId)}
                            className="
                            absolute 
                            top-28 md:top-15 right-8 
                            text-black hover:text-red-500 transition
                            "
                            >
                                <i className="fa-solid fa-trash text-3xl"></i>
                            </button>

                        </div>

                    ))}
                </div>

            </div>
        </section>
    );
}

export default Cart;