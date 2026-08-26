
import { useEcommerce } from "./ecommerceContext";
import { useParams, useNavigate, Link } from "react-router-dom";


function ProductDetail() {
    const { product, addToCart } = useEcommerce();
    const { id } = useParams();
    const navigate = useNavigate();

    const selectedProduct = product.find(
        (item) => item.id === Number(id)
    );

    if (!selectedProduct) {
        return <div>Product not found...</div>;
    }

    return (
        <div className="w-full min-h-screen bg-gray-100 flex justify-center px-4 py-6 ">
           
            <div className="w-full md:w-2xl lg:w-4xl bg-white rounded-3xl mx-auto p-4 md:p-6 shadow-sm relative">
                <div className="absolute right-5 top-5">
                <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 shadow-sm transition hover:bg-red-500 hover:text-white hover:scale-105 active:scale-95">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                    
                    <div className="flex items-center justify-center bg-gray-50 rounded-2xl p-6">
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.title}
                            className="w-full max-w-sm aspect-square object-contain"
                        />
                    </div>

                    
                    <div className="flex flex-col px-2 py-2 gap-4">

                        
                        <p className="text-sm text-gray-500 capitalize">
                            {selectedProduct.category}
                        </p>

                      
                        <p className="text-xl md:text-2xl font-bold leading-tight">
                            {selectedProduct.title}
                        </p>

                    
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

                       
                        <p className="text-2xl font-bold">
                            ${selectedProduct.price}
                        </p>

                        <div className="h-px bg-gray-200"></div>

                        
                        <div>
                            <p className="font-semibold mb-1">
                                Description
                            </p>

                            <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 hover:line-clamp-none cursor-pointer">
                                {selectedProduct.description}
                            </p>
                        </div>

                       
                        <div className="flex items-center gap-5 pt-2">
                            <p className="font-semibold">
                                Quantity:
                            </p>

                            <div className="flex items-center border rounded-lg overflow-hidden">

                                <button
                                    className="
                                        px-3 py-2
                                        hover:bg-gray-100
                                        active:bg-gray-200
                                        transition
                                    "
                                >
                                    <i className="fa-solid fa-minus text-sm"></i>
                                </button>

                                <p className="px-5 py-2 border-x font-medium">
                                    1
                                </p>

                                <button
                                    className="
                                        px-3 py-2
                                        hover:bg-gray-100
                                        active:bg-gray-200
                                        transition
                                    "
                                >
                                    <i className="fa-solid fa-plus text-sm"></i>
                                </button>

                            </div>
                        </div>

                     
                        <div className="flex gap-3 pt-3">

                            <button onClick={() => addToCart()}
                                className="
                                    flex-1
                                    flex items-center justify-center gap-2
                                    border-2 border-orange-500
                                    text-orange-500
                                    rounded-xl
                                    py-3
                                    font-semibold
                                    hover:bg-orange-500
                                    hover:text-white
                                    transition
                                "
                            >
                                <i className="fa-solid fa-cart-arrow-down"></i>

                                <span className="hidden sm:block">
                                    Add to Cart
                                </span>
                            </button>

                            <button onClick={() => navigate("/projects/e-commerce/login")}
                                className="
                                    flex-1
                                    bg-orange-500
                                    text-white
                                    rounded-xl
                                    py-3
                                    font-semibold
                                    hover:bg-orange-600
                                    active:scale-[0.98]
                                    transition
                                "
                            >
                                Buy Now
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

