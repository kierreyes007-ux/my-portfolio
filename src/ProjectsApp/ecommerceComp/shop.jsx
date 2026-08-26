import { useEcommerce } from "./ecommerceContext";
import { Link, useParams } from "react-router-dom";
function Shop(){
    const {product, showConfirm, cancelRequest, confirmRequest, requestAddToCart, toast} = useEcommerce();

    const { category } = useParams();
    

    const filteredProducts = category
        ? product.filter(prod => prod.category === category)
        : product;
    
  return(
    <section className="w-full min-h-screen bg-gray-100 mb-15">
       <div className="w-full grid grid-cols-2 md:grid-cols-4 px-5 py-3 gap-7">
        {filteredProducts.map((prod) => (
            <div className="bg-white rounded-2xl shadow-xl grid transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" 
            key={prod.id}>
                <Link to={`/projects/e-commerce/product/${prod.id}`}>
                <img className="aspect-square object-contain py-3"
                src={prod.image}></img>

                    <p className="px-4 pt-2 line-clamp-2 hover:line-clamp-none">{prod.title}</p>
                    <p className="text-xl font-semi-bold px-4 pt-2">${prod.price}</p>
                    </Link>
                    <div className="w-full flex items-center justify-end px-3">
                    <button className="bg-gray-200 rounded-full hover:bg-black hover:text-white text-lg font-semi-bold transition-all duration-300 px-3 mb-4 py-1" onClick={()=> requestAddToCart(prod)}>Add to Cart</button>
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