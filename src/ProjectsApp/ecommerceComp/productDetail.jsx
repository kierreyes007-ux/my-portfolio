import { useState } from "react";
import { useEcommerce } from "./ecommerceContext";
import { useParams, useNavigate } from "react-router-dom";
import {
    X,
    Minus,
    Plus,
    ShoppingCart,
    ArrowRight,
} from "lucide-react";

function ProductDetail() {
    const { product, addToCart, toast } = useEcommerce();

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    const selectedProduct = product.find(
        (item) => Number(item.id) === Number(id)
    );

    if (!selectedProduct) {
        return (
            <section className="flex min-h-screen items-center justify-center bg-[#f7f7f5] px-4 text-neutral-950">
                <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Product
                    </p>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight">
                        Product not found
                    </h1>
                </div>
            </section>
        );
    }

    const handleAddToCart = () => {
        addToCart(
            {
                ...selectedProduct
            },
            quantity,
            selectedSize,
            selectedColor
        );
    };

    return (
        <section className="min-h-screen w-full bg-[#f7f7f5] px-4 pb-20 pt-6 text-neutral-950 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-5">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                            Product Details
                        </p>

                        <p className="mt-1 text-sm text-neutral-500">
                            View product information and options
                        </p>
                    </div>

                    <button
                        onClick={() => navigate(-1)}
                        aria-label="Close product"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-950"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
                    <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-neutral-200 bg-white p-8 sm:p-12 lg:min-h-[620px]">
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.title}
                            className="h-full max-h-[520px] w-full max-w-lg object-contain transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>

                    <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 lg:p-10">
                        <div className="flex flex-col">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                                {selectedProduct.category}
                            </p>

                            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
                                {selectedProduct.title}
                            </h1>

                            <div className="mt-5 flex items-center gap-3">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star}>
                                            {star <= Math.round(selectedProduct.rating_rate)
                                                ? "★"
                                                : "☆"}
                                        </span>
                                    ))}
                                </div>

                                <span className="text-xs text-neutral-500">
                                    {selectedProduct.rating_rate} (
                                    {selectedProduct.rating_count})
                                </span>
                            </div>

                            <p className="mt-6 text-3xl font-bold tracking-tight">
                                ${selectedProduct.price}
                            </p>

                            <div className="my-7 border-t border-neutral-200" />

                            <div>
                                <p className="text-sm font-semibold">
                                    Description
                                </p>

                                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                                    {selectedProduct.description}
                                </p>
                            </div>

                            <div className="mt-7">
                                <p className="text-sm font-semibold">
                                    Size
                                </p>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {["S", "M", "L", "XL"].map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`flex h-10 min-w-11 items-center justify-center rounded-lg border px-4 text-sm font-medium transition-all duration-300 ${
                                                selectedSize === size
                                                    ? "border-neutral-950 bg-neutral-950 text-white"
                                                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-sm font-semibold">
                                    Color
                                </p>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {["Black", "White", "Red"].map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                                                selectedColor === color
                                                    ? "border-neutral-950 bg-neutral-950 text-white"
                                                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                                            }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-sm font-semibold">
                                    Quantity
                                </p>

                                <div className="mt-3 flex w-fit items-center overflow-hidden rounded-lg border border-neutral-200 bg-white">
                                    <button
                                        onClick={() =>
                                            setQuantity((q) => Math.max(1, q - 1))
                                        }
                                        aria-label="Decrease quantity"
                                        className="flex h-10 w-10 items-center justify-center text-neutral-600 transition-colors duration-300 hover:bg-neutral-100 hover:text-neutral-950"
                                    >
                                        <Minus className="h-4 w-4" />
                                    </button>

                                    <p className="flex h-10 w-12 items-center justify-center border-x border-neutral-200 text-sm font-semibold">
                                        {quantity}
                                    </p>

                                    <button
                                        onClick={() => setQuantity((q) => q + 1)}
                                        aria-label="Increase quantity"
                                        className="flex h-10 w-10 items-center justify-center text-neutral-600 transition-colors duration-300 hover:bg-neutral-100 hover:text-neutral-950"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg"
                                >
                                    <ShoppingCart className="h-4 w-4" />
                                    Add to Cart
                                </button>

                                <button
                                    onClick={() =>
                                        navigate("/projects/e-commerce/login")
                                    }
                                    className="group flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
                                >
                                    Buy Now
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {toast && (
                <div className="fixed bottom-20 left-4 z-50 rounded-xl bg-neutral-950 px-5 py-3 text-sm font-medium text-white shadow-xl sm:bottom-5 sm:left-5">
                    {toast}
                </div>
            )}
        </section>
    );
}

export default ProductDetail;