
function Shop( {products, addToCart} ) {

    return(
        <div className="w-full min-h-screen py-15 px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 px-4 gap-10 pb-15">
            {products.map((prod) => (
        <div key={prod.id} className="bg-white rounded-2xl py-5">
            <img className="py-2"src={prod.image}></img>
            <div 
            className="flex justify-between px-4 shadow-sm py-2">
                <div>
            <p>{prod.name}</p>
            <p>₱: {prod.price}</p>
            </div>

            <button className="border-2 border-black rounded-full p-2 px-4 hover:bg-black hover:text-white hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => addToCart(prod)}>Add to cart</button>
            
            </div>
            </div>
            ))}
        </div>
        </div>
    )
}
export default Shop;