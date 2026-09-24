import { useEcommerce } from "./ecommerceContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";

function Cart() {
    const { cart, addQty, decQty, removeToCart } = useEcommerce();
    const [isMinimized, setIsMinimized] = useState(true);
    const navigate = useNavigate();

    const total = cart.reduce(
        (sum, prod) => sum + (prod.price * prod.quantity),
        0
    );

    const shippingFee = total * 0.04;
    const finalTotal = total + shippingFee;

    return (
        <section className="w-full min-h-screen bg-[#f7f7f5] px-4 pb-24 pt-8 text-neutral-950 sm:px-6 lg:px-10">

            <div className="mx-auto max-w-7xl">

                <div className="mb-8 border-b border-neutral-200 pb-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Your Items
                    </p>

                    <div className="mt-2 flex items-end justify-between gap-4">
                        <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                            Shopping Cart
                        </h1>

                        <p className="text-sm text-neutral-500">
                            {cart.length} {cart.length === 1 ? "item" : "items"}
                        </p>
                    </div>
                </div>

                {cart.length === 0 && (
                    <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-neutral-200 bg-white">
                        <div className="text-center">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                                Cart
                            </p>

                            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                                Your cart is empty
                            </h2>

                            <p className="mt-2 text-sm text-neutral-500">
                                Add some products to get started.
                            </p>
                        </div>
                    </div>
                )}

                <div className="grid gap-4">
                    {cart?.map((item) => (
                        <div
                            className="relative grid gap-5 rounded-2xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 md:grid-cols-[1fr_auto_auto] md:items-center"
                            key={item.id}
                        >

                            <div className="flex items-center gap-4">
                                <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-neutral-50 p-3 sm:h-28 sm:w-28">
                                    <img
                                        className="h-full w-full object-contain"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>

                                <div className="min-w-0">
                                    <p className="line-clamp-3 text-sm font-semibold leading-relaxed text-neutral-900 sm:text-base">
                                        {item.title}
                                    </p>

                                    {item.size && (
                                        <p className="mt-2 text-xs text-neutral-500">
                                            Size: {item.size}
                                        </p>
                                    )}

                                    {item.color && (
                                        <p className="mt-1 text-xs text-neutral-500">
                                            Color: {item.color}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                                    onClick={() => decQty(item)}
                                    aria-label="Decrease quantity"
                                >
                                    <Minus className="h-4 w-4" />
                                </button>

                                <p className="w-6 text-center text-sm font-semibold">
                                    {item.quantity}
                                </p>

                                <button
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                                    onClick={() => addQty(item)}
                                    aria-label="Increase quantity"
                                >
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between gap-6 md:justify-end">
                                <p className="text-lg font-bold tracking-tight">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>

                                <button
                                    className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 transition-all duration-300 hover:bg-red-50 hover:text-red-500"
                                    onClick={() => removeToCart(item)}
                                    aria-label="Remove item"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {cart.length > 0 && (
                <div className="fixed bottom-16 left-4 right-4 z-50 sm:left-auto sm:right-5 sm:w-80 md:bottom-5">

                    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-2xl">

                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold uppercase tracking-[0.08em]">
                                Order Summary
                            </span>

                            <button
                                onClick={() =>
                                    setIsMinimized(prev => !prev)
                                }
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                                aria-label={
                                    isMinimized
                                        ? "Expand order summary"
                                        : "Minimize order summary"
                                }
                            >
                                {isMinimized ? (
                                    <ChevronUp className="h-4 w-4" />
                                ) : (
                                    <ChevronDown className="h-4 w-4" />
                                )}
                            </button>
                        </div>

                        {!isMinimized && (
                            <div className="mt-5">

                                <div className="flex justify-between text-sm text-neutral-500">
                                    <span>
                                        Subtotal
                                    </span>

                                    <span className="font-medium text-neutral-900">
                                        ${total.toFixed(2)}
                                    </span>
                                </div>

                                <div className="mt-3 flex justify-between text-sm text-neutral-500">
                                    <span>
                                        Shipping (4%)
                                    </span>

                                    <span className="font-medium text-neutral-900">
                                        ${shippingFee.toFixed(2)}
                                    </span>
                                </div>

                                <div className="my-5 border-t border-neutral-200" />

                                <div className="flex justify-between">
                                    <span className="text-base font-bold">
                                        Total
                                    </span>

                                    <span className="text-xl font-bold tracking-tight">
                                        ${finalTotal.toFixed(2)}
                                    </span>
                                </div>

                                <button
                                    onClick={() => navigate("/projects/e-commerce/login")}
                                    className="mt-5 w-full rounded-full bg-neutral-950 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
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