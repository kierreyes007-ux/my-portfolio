import { useState } from "react";
import { useEcommerce } from "./ecommerceContext";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
    const { product, addToCart, toast } = useEcommerce();

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    const selectedProduct = product.find(
        (item) => item.id === Number(id)
    );

    if (!selectedProduct) {
        return <div>Product not found...</div>;
    }

    const handleAddToCart = () => {
        addToCart(
            {
                ...selectedProduct,
                size: selectedSize,
                color: selectedColor
            },
            quantity
        );
    };

    return (
        <div className="w-full min-h-screen bg-gray-100 flex justify-center px-4 py-6 mb-10">

            <div className="w-full md:w-2xl lg:w-4xl bg-white rounded-3xl mx-auto p-4 md:p-6 shadow-sm relative">

                {/* Close Button */}
                <div className="absolute right-5 top-5">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 shadow-sm transition hover:bg-red-500 hover:text-white hover:scale-105 active:scale-95"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                    {/* Product Image */}
                    <div className="flex items-center justify-center bg-gray-50 rounded-2xl p-6">
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.title}
                            className="w-full max-w-sm aspect-square object-contain"
                        />
                    </div>

                    {/* Product Information */}
                    <div className="flex flex-col px-2 py-2 gap-4">

                        <p className="text-sm text-gray-500 capitalize">
                            {selectedProduct.category}
                        </p>

                        <p className="text-xl md:text-2xl font-bold leading-tight">
                            {selectedProduct.title}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1 text-yellow-400">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <i
                                        key={star}
                                        className={
                                            star <= Math.round(selectedProduct.rating.rate)
                                                ? "fa-solid fa-star"
                                                : "fa-regular fa-star"
                                        }
                                    ></i>
                                ))}
                            </div>

                            <span className="text-sm text-gray-500">
                                {selectedProduct.rating.rate} ({selectedProduct.rating.count})
                            </span>
                        </div>

                        {/* Price */}
                        <p className="text-2xl font-bold">
                            ${selectedProduct.price}
                        </p>

                        <div className="h-px bg-gray-200"></div>

                        {/* Description */}
                        <div>
                            <p className="font-semibold mb-1">
                                Description
                            </p>

                            <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 hover:line-clamp-none cursor-pointer">
                                {selectedProduct.description}
                            </p>
                        </div>

                        {/* Size */}
                        <div>
                            <p className="font-semibold mb-2">
                                Size:
                            </p>

                            <div className="flex gap-2">
                                {["S", "M", "L", "XL"].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded-lg border transition ${
                                            selectedSize === size
                                                ? "bg-orange-500 text-white border-orange-500"
                                                : "bg-white text-gray-700 hover:bg-gray-100"
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color */}
                        <div>
                            <p className="font-semibold mb-2">
                                Color:
                            </p>

                            <div className="flex gap-2">
                                {["Black", "White", "Red"].map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`px-4 py-2 rounded-lg border transition ${
                                            selectedColor === color
                                                ? "bg-orange-500 text-white border-orange-500"
                                                : "bg-white text-gray-700 hover:bg-gray-100"
                                        }`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center gap-5 pt-2">
                            <p className="font-semibold">
                                Quantity:
                            </p>

                            <div className="flex items-center border rounded-lg overflow-hidden">

                                <button
                                    onClick={() =>
                                        setQuantity(q => Math.max(1, q - 1))
                                    }
                                    className="px-3 py-2 hover:bg-gray-100 active:bg-gray-200 transition"
                                >
                                    <i className="fa-solid fa-minus text-sm"></i>
                                </button>

                                <p className="px-5 py-2 border-x font-medium">
                                    {quantity}
                                </p>

                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="px-3 py-2 hover:bg-gray-100 active:bg-gray-200 transition"
                                >
                                    <i className="fa-solid fa-plus text-sm"></i>
                                </button>

                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 pt-3">

                            <button
                                onClick={handleAddToCart}
                                className="flex-1 flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 rounded-xl py-3 font-semibold hover:bg-orange-500 hover:text-white transition"
                            >
                                <i className="fa-solid fa-cart-arrow-down"></i>

                                <span className="hidden sm:block">
                                    Add to Cart
                                </span>
                            </button>

                            <button
                                onClick={() =>
                                    navigate("/projects/e-commerce/login")
                                }
                                className="flex-1 bg-orange-500 text-white rounded-xl py-3 font-semibold hover:bg-orange-600 active:scale-[0.98] transition"
                            >
                                Buy Now
                            </button>

                        </div>

                    </div>
                </div>
            </div>

            {/* Toast */}
            {toast && (
                <div className="fixed md:bottom-5 bottom-10 left-5 z-50 animate-slide-up rounded-lg bg-black text-white px-5 py-3 shadow-lg flex items-center gap-2">
                    <span>{toast}</span>
                </div>
            )}

        </div>
    );
}

export default ProductDetail;   