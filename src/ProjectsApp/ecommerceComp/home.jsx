import strahob from "../../assets/imgecom/straho-banner.jpg";
import straho from "../../assets/imgecom/straho.jpg";
import {useEcommerce} from "./ecommerceContext";
import { Link } from "react-router-dom";
function Home(){
  const { product } = useEcommerce();
  return(
    <section className="w-full min-h-screen bg-gray-100 px-3 py-1">
      <div className="banner">
        <img className="hidden md:block rounded-xl"
        src={strahob}></img>
        <img className="block md:hidden rounded-xl"
        src={straho}></img>
      </div>

      <div className="Categories grid gap-3">
        <h2 className="font-bold text-2xl px-5 py-5">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[product[16], product[6], product[12], product[2]].filter(Boolean).map((prod) => (
             <Link to ='/projects/e-commerce/categories' key={prod.id}>
            <div 
            className="flex flex-col gap-3 items-center py-2">
             
              <img src={prod.image}
              className="h-40 object-contain"></img>
              <p className="text-lg font-bold">{(prod.category).toUpperCase()}</p>
            
            </div>
              </Link>))}
        </div>
      </div>

      <div className="Featured-Products grid py-5 grid">
                <h2 className="text-2xl font-bold pl-5 py-3">Featured Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center py-4 gap-10 px-5">
                  {product.slice(0,8)?.map((prod) => (
                    <Link to='/projects/e-commerce/shop' key={prod.id}>
                    <div className="card grid rounded-xl bg-white relative px-3 py-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl justify-items-center">
                        
                        <img src={prod.image} className="h-full w-full object-contain aspect-square"></img>
                    
                        <div className="flex items-center py-4 justify-self-start">
                        <div>
                        <p className="">{prod.title}</p>
                        <p className="text-xl pt-2">$    {prod.price}</p>
                        </div>
                        
                      </div>
                    
                    </div>
                    </Link>
                  ))}

                </div>

            </div>
    </section>
  )
}
export default Home;