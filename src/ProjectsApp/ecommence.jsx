import Ecomnav from "../ecom/ecomnav";
import Hero from "../ecom/hero";
import Product from "../ecom/product";
import Shop from "../ecom/shop";
import Categories from "../ecom/categories";
import Contact from "../ecom/contact";
import Cart from "../ecom/cart";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import hoodiebrown from "../assets/imgecom/hoodiebrown.png";
import hoodiepink from "../assets/imgecom/hoodiepink.png";
import hoodiegray from "../assets/imgecom/hoodiegray.png";
import shirtblack from "../assets/imgecom/shirtblack.png";
import shirtblue from "../assets/imgecom/shirtblue.png";
import watch from "../assets/imgecom/watch.png";
import watchbrown from "../assets/imgecom/watchbrown.jpg";
import backpack from "../assets/imgecom/backpack.png";
import shoeswhite from "../assets/imgecom/shoeswhite.png";


function Ecommence() {
     const products = [
            {
                id: 1,
                image: shoeswhite,
                name: "White Shoe",
                price: 2999,
                category: "Shoes",
                size: "8",
                color: "White"
            },
            {
                id: 2,
                image: shirtblack,
                name: "Black T-shirt",
                price: 699,
                category: "T-shirt",
                size: "L",
                color: "Black"
            },
            {
                id: 3,
                image: hoodiegray,
                name: "Gray Hoodie",
                price: 1299,
                category: "Hoodie",
                size: "XL", 
                color: "Gray"
            },
            {
                id: 4,
                image: shirtblue,
                name: "Blue Polo",
                price: 899,
                category: "T-shirt",
                size: "M",
                color: "Blue"
            }
        ]
        const [cart, setCart] = useState([]);
function addToCart(product) {
    setCart(prev => [...prev, {
            ...product,
            cartId: Date.now()
        }]);
}

    return (
        <div className="bg-gray-100">   
         <Ecomnav />
             <Routes>
                <Route index element={<div>
                    
                        <Hero />
                    <Product product={products} />
                </div>}/>
                <Route path='home' element={<div>
                    
                        <Hero />
                    <Product product={products} />
                </div>}/>
                <Route path='shop' element={<Shop products={products} addToCart={addToCart}/>}/>
                <Route path='categories' element={<Categories products={products}/>}/>
                <Route path='cart' element={<Cart cart={cart} setCart={setCart} />}/>
                <Route path='contact' element={<Contact />} />
            </Routes>
           
           
        </div>
    )
}

export default Ecommence;