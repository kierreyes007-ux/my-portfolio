import ProductCard from "./productcard";

function Product( {product} ) {
    return(
      <div className="w-full flex flex-col px-5 ">
                <p className="text-xl font-bold pl-5 py-4">Featured Products</p>
                <ProductCard product={product}/>
             </div>
    )
}

export default Product;