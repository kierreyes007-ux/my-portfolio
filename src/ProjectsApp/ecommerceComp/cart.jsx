import { useEcommerce } from "./ecommerceContext";
function Cart(){
  const { cart, addQty, decQty, removeToCart } = useEcommerce();
  
  return(
    <section className="w-full min-h-screen bg-gray-100 mb-15">
       <div className="grid gap-5 px-5 py-4">
        {cart.length === 0 && (<div className="absolute text-3xl left-30 md:left-130 top-40 font-bold"><p>No item on cart yet.</p></div>)}
        {cart?.map((item) => (
          <div className="grid md:grid-cols-3 items-center justify-between gap-3 relative rounded-lg p-3 bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
          key={item.id}>
            <div className="flex h-full py-4 px-5 items-center">
            <img className="h-20 md:h-30 object-contain aspect-square bg-gray-100 mr-4"
            src={item.image}></img>
            <div className="flex flex-col w-50 justify-center h-full">
                <p>{item.title}</p>
            </div>
            </div>

            <div className="flex gap-2 px-10 text-xl">
              <button
              className="font-bold px-2 py-1 border rounded"
              onClick={()=> decQty(item)}>
                 <i className="fa-solid fa-minus text-base"></i></button>
              <p className="mt-1">{item.quantity}</p>
              <button
              className="font-bold px-2 py-1 border rounded"
              onClick={()=> addQty(item)}>
                 <i className="fa-solid fa-plus text-base"></i></button>
            </div>

            <p className="px-10 text-xl">${(item.price * item.quantity).toFixed(2)}</p>

            <button 
            className="absolute right-10 text-black hover:text-red-500 transition"
            onClick={()=> removeToCart(item)}>
              <i className="fa-solid fa-trash text-3xl"></i>
            </button>
          </div>
        ))}
       </div>
       
    </section>
  )
}
export default Cart;