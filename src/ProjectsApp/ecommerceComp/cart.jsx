import { useEcommerce } from "./ecommerceContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cart, addQty, decQty, removeToCart } = useEcommerce();
    const [isMinimized, setIsMinimized] = useState(false);
    const navigate = useNavigate();

    const total = cart.reduce(
        (sum, prod) => sum + (prod.price * prod.quantity),
        0
    );

    const shippingFee = total * 0.04;
    const finalTotal = total + shippingFee;

    return (
        <section className="w-full min-h-screen bg-gray-100 mb-20">

            <div className="grid gap-5 px-5 py-4">

                {cart.length === 0 && (
                    <div className="absolute text-3xl left-30 md:left-130 top-40 font-bold">
                        <p>No item on cart yet.</p>
                    </div>
                )}

                {cart?.map((item) => (
                    <div
                        className="grid md:grid-cols-3 items-center justify-between gap-3 relative rounded-lg p-3 bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
                        key={item.id}
                    >

                        {/* Product */}
                        <div className="flex h-full py-4 px-5 items-center">

                            <img
                                className="h-20 md:h-30 object-contain aspect-square bg-gray-100 mr-4"
                                src={item.image}
                                alt={item.title}
                            />

                            <div className="flex flex-col w-50 justify-center h-full">

                                <p>{item.title}</p>

                                {item.size && (
                                    <p className="text-sm text-gray-500">
                                        Size: {item.size}
                                    </p>
                                )}

                                {item.color && (
                                    <p className="text-sm text-gray-500">
                                        Color: {item.color}
                                    </p>
                                )}

                            </div>
                        </div>


                        {/* Quantity */}
                        <div className="flex gap-2 px-10 text-xl">

                            <button
                                className="font-bold px-2 py-1 border rounded"
                                onClick={() => decQty(item)}
                            >
                                <i className="fa-solid fa-minus text-base"></i>
                            </button>

                            <p className="mt-1">
                                {item.quantity}
                            </p>

                            <button
                                className="font-bold px-2 py-1 border rounded"
                                onClick={() => addQty(item)}
                            >
                                <i className="fa-solid fa-plus text-base"></i>
                            </button>

                        </div>


                        {/* Price */}
                        <p className="px-10 text-xl">
                            ${(item.price * item.quantity).toFixed(2)}
                        </p>


                        {/* Delete */}
                        <button
                            className="absolute right-10 text-black hover:text-red-500 transition"
                            onClick={() => removeToCart(item)}
                        >
                            <i className="fa-solid fa-trash text-3xl"></i>
                        </button>

                    </div>
                ))}

            </div>


            {/* CHECKOUT */}
            {cart.length > 0 && (
                <div className="fixed bottom-15 md:bottom-5 right-5 z-50 w-80">

                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5">

                        {/* Header */}
                        <div className="flex justify-between items-center">

                            <span className="text-lg font-bold">
                                Order Summary
                            </span>

                            <button
                                onClick={() =>
                                    setIsMinimized(prev => !prev)
                                }
                                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100"
                            >
                                <i
                                    className={`fa-solid ${
                                        isMinimized
                                            ? "fa-chevron-up"
                                            : "fa-chevron-down"
                                    }`}
                                ></i>
                            </button>

                        </div>


                        {/* Details */} 
                        {!isMinimized && (
                            <div className="mt-4">

                                <div className="flex justify-between mb-2">
                                    <span>
                                        Subtotal:
                                    </span>

                                    <span>
                                        ${total.toFixed(2)}
                                    </span>
                                </div>


                                <div className="flex justify-between mb-2">
                                    <span>
                                        Shipping (4%):
                                    </span>

                                    <span>
                                        ${shippingFee.toFixed(2)}
                                    </span>
                                </div>


                                <hr className="my-3" />


                                <div className="flex justify-between text-xl font-bold mb-4">

                                    <span>
                                        Total:
                                    </span>

                                    <span>
                                        ${finalTotal.toFixed(2)}
                                    </span>

                                </div>


                                <button
                                    onClick={() => navigate("/projects/e-commerce/login")}
                                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                                >
                                    Checkout
                                </button>

                            </div>
                        )}

                    </div>

                </div>
            )}

        </section>
    );
}

export default Cart;