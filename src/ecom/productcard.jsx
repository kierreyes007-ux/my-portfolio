

function ProductCard( {product} ) {
    
    return(
       
        <div className="grid grid-cols-2 md:grid-cols-4 px-4 gap-10 pb-15">
            {product.map((prod) => (
        <div key={prod.id} className="bg-white rounded-2xl py-5">
            <img className="py-2"src={prod.image}></img>
            <div 
            className="flex justify-between px-4 shadow-sm py-2">
                <div>
            <p>{prod.name}</p>
            <p>₱: {prod.price}</p>
            </div>

           
            
            </div>
            </div>
            ))}
        </div>
       
    )
}
export default ProductCard;