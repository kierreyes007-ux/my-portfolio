import { useState } from "react";
import { Link } from "react-router-dom"
function Ecomnav() {
    const [open, setOpen] = useState(false);
    return  (
        <nav 
        className="w-full flex px-10 py-2 justify-between items-center ">
            <div 
            className="flex justify-between w-full md:hidden"
            >
            <button 
            className="text-2xl font-bold hover:text-blue-500 transition-colors duration-300"
            onClick={() => setOpen(!open)}
            >☰</button>
            <h1 
            className="text-4xl text-center text-bold"
            >e-Commerce</h1>
            <Link to='contact'>
            <button 
            className="hover:text-blue-500 transition-colors duration-300"><i className="fa-solid fa-cart-arrow-down text-2xl"
            ></i></button></Link>
             </div>
                
                {open && (<div className="fixed top-19 left-0 justify-center min-h-screen border-2 px-10 py-6 bg-white md:hidden">
                    <div className="flex flex-col gap-2 items-center justify-between w-30 ">
                    <div>NOTE: You can add to cart and see the product on Cart, also I don't have original products yet. The images are from Google, and the product selection is limited.</div>
                    
                    
                    </div>
                </div>)}

             <div className="flex md:hidden w-full fixed bottom-0 left-0 justify-evenly font-bold text-xl bg-white z-[100]">

                <button 
                className="hover:text-blue-500 transition-colors duration-300">
                     <Link to='/projects/e-commence/home' className="flex flex-col">
                    <i className="fa-solid fa-house"></i>
                   Home</Link>
                </button>

                <button 
                className="hover:text-blue-500 transition-colors duration-300">
                    <Link to='/projects/e-commence/shop' className="flex flex-col">
                    <i className="fa-solid fa-shop"></i>
                    Shop</Link>
                </button>

                <button 
                className="hover:text-blue-500 transition-colors duration-300">
                    <Link to='/projects/e-commence/categories' className="flex flex-col">
                    <i className="fa-solid fa-box"></i>
                    Categories</Link>
                    
                </button>

                <button 
                className="hover:text-blue-500 transition-colors duration-300">
                    <Link to='/projects/e-commence/cart' className="flex flex-col">
                    <i className="fa-solid fa-cart-arrow-down"></i>
                    Cart</Link>
                </button>

                <button 
                className="hover:text-blue-500 transition-colors duration-300">
                    <Link to='/projects/e-commence/contact' className="flex flex-col">
                    <i class="fa-solid fa-phone"></i>
                    <p className="text-base">Contact</p>
                    </Link>
                </button>
             </div>


           <div className="hidden md:flex justify-between items-center w-full mx-10 fixed top-0">

            <div className="flex  gap-30 items-center justify-center">
                <h1 className="text-4xl text-center">e-Commerce</h1>
                <div className="hidden md:flex gap-5 text-lg">
                <Link className="hover:text-blue-500 transition-colors duration-300" 
                to='/projects/e-commence/home'>Home</Link>
                <Link className="hover:text-blue-500 transition-colors duration-300"
                to='/projects/e-commence/shop'>Shop</Link>
                <Link  className="hover:text-blue-500 transition-color duration-300"to='/projects/e-commence/categories'>Categories</Link>
                <Link className="hover:text-blue-500 transition-colors duration-300"
                to='/projects/e-commence/cart'>Cart</Link>
                <Link className="hover:text-blue-500 transition-colors duration-300"
                to='/projects/e-commence/contact'>Contact</Link>  
                </div> 
            </div>

            <div className="flex gap-5 p-2">
                <div>
                <input 
                className="bg-white-500 py-1 px-2 rounded-lg"
                ></input>
                </div>  
                <button> <i className="fa-solid fa-circle-user text-2xl"></i></button>
                <button><i className="fa-solid fa-cart-arrow-down text-2xl"></i></button>
                </div>
                
                </div>
           
        </nav>
    )
}
export default Ecomnav;