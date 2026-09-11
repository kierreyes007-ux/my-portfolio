import { useEcommerce } from "./ecommerceContext";
import { Link, useParams } from "react-router-dom";
function Shop(){
    const {product, showConfirm, cancelRequest, confirmRequest, requestAddToCart, toast} = useEcommerce();

    const { category } = useParams();
    

    const filteredProducts = category
        ? product.filter(prod => prod.category === category)
        : product;
    
  return(
    <section className="w-screen min-h-screen bg-gray-100 mb-15">
       <div className="w-full grid grid-cols-2 md:grid-cols-4 px-5 py-3 gap-4">
        {filteredProducts.map((prod) => (
            <div className="bg-white rounded-2xl shadow-xl grid transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 px-2" 
            key={prod.id}>
                <Link to={`/projects/e-commerce/product/${prod.id}`}>
                <img className="w-full aspect-square object-contain py-3"
                src={prod.image}></img>

                    <p className="pt-2 line-clamp-3 hover:line-clamp-none">{prod.title}</p>
                    <p className="text-xl font-semi-bold pl-1 pt-2">${prod.price}</p>
                    <div className="flex items-center gap-2 pl-1 py-2 relative ">
                            <div className="flex gap-1 text-yellow-400">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <i
                                        key={star}
                                        className={
                                            star <= Math.round(prod.rating_rate)
                                                ? "fa-solid fa-star"
                                                : "fa-regular fa-star"
                                        }
                                    ></i>
                                ))}
                            </div>

                            <span className="text-sm text-gray-500 absolute left-1.5 top-7">
                                {prod.rating_rate} ({prod.rating_count})
                            </span>
                        </div>
                    </Link>
                    <div className="w-full flex items-center justify-end pr-2 md:py-2 pt-6 pb-2 ml-1">
                    <button className="bg-gray-200 rounded-full hover:bg-black hover:text-white text-lg font-semi-bold transition-all duration-300 md:px-3 px-3 mb-4 md:py-1 py-2" onClick={()=> requestAddToCart(prod)}>Add to Cart</button>
                    </div>
                
            </div>
        ))}
       </div> 
       {toast && (
        <div 
            className="fixed bottom-5 left-5 z-50 animate-slide-up rounded-lg transition-all-300
              bg-black text-white px-5 py-3 text-white shadow-lg flex items-center gap-2">
                <span>{toast}</span>
        </div>
      )}

       {showConfirm && (
        <div onClick={()=>cancelRequest()}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div 
          className="bg-white w-80 rounded-lg shadow-lg p-6">
              <h2 
              className="text-xl font-bold mb-3"
              >Add to Cart?</h2>
              <p 
              className="text-sm text-gray-600 mb-5"
              >Are you sure you want to add this item to your cart?</p>
              <div
              className="flex justify-end gap-3">
                <button 
                className="px-4 py-2 border rounded-lg 
                    hover:bg-gray-100 hover:border-gray-400 
                    transition duration-200"
                    onClick={()=>cancelRequest()}>Cancel</button>
                <button 
                className="px-4 py-2 bg-black text-white rounded-lg
                    hover:bg-gray-800 hover:scale-105
                    transition duration-200"
                    onClick={()=>confirmRequest()}>Add</button>
              </div>
          </div>
       </div>
      )}

    </section>
  )
}
export default Shop;