import { Link } from "react-router-dom";
function Navbar() {
    return(
        <nav className="flex w-full bg-gray-100">

            <div className="desktop-nav hidden md:flex justify-between w-full px-10 py-2">
                <Link to='.'>
                <h1 className="text-4xl font-bold">E-commerce</h1>
                </Link>
                <div className="flex gap-10 text-xl">
                <Link className="hover:text-blue-500 transition-colors duration-300 flex"
                to='/projects/e-commerce/shop'>Shop</Link>
                <Link 
                className="hover:text-blue-500 transition-colors duration-300 flex "
                to="/projects/e-commerce/categories">Categories</Link>
                <Link 
                className="hover:text-blue-500 transition-colors duration-300 flex mr-30"
                to="/projects/e-commerce/contact">Contact</Link>
                
                <Link className="hover:text-blue-500 transition-all duration-300 text-2xl hover:text-3xl"
                to="/projects/e-commerce/cart">
                <i className="fa-solid fa-cart-arrow-down"></i>
                </Link>

                <Link className="hover:text-blue-500 transition-all duration-300 text-2xl hover:text-3xl"
                to="/projects/e-commerce/login">
                <i className="fa-solid fa-circle-user"></i>
                </Link>
                
                </div>
            </div>

            <div className="mobile-nav w-full md:hidden ">
                <div className="w-full flex justify-between items-center px-5 py-2">
                    <Link to='/projects/e-commerce/login'>
                <button className="text-2xl">
                    <i className="fa-solid fa-circle-user"></i>
                </button></Link>
                <Link to='/projects/e-commerce/home'><h1 className="text-3xl font-bold">E-commerce</h1></Link>
                <Link to='/projects/e-commerce/cart'>
                <button className="text-2xl">
                    <i className="fa-solid fa-cart-arrow-down"></i>
                </button></Link>
                </div>

                <div className="small-screen-bottom-nav
               w-full position fixed bottom-0 right-0 bg-gray-100 grid grid-cols-5 place-items-center text-2xl pt-2 md:hidden z-50">
            <Link to='.' className="hover:text-blue-500 transition-colors duration-300 flex flex-col justify-center items-center">
            <i className="fa-solid fa-house"></i>
            <p className="text-base">Home</p>
            </Link>

            <Link to='/projects/e-commerce/shop' className="hover:text-blue-500 transition-colors duration-300 flex flex-col justify-center items-center">
            <i className="fa-solid fa-shop"></i>
            <p className="text-base">Shop</p>
            </Link>

            <Link to='/projects/e-commerce/categories' className="hover:text-blue-500 transition-colors duration-300 flex flex-col justify-center items-center">
            <i className="fa-solid fa-box"></i>
            <p className="text-base text-center">Categories</p>
            </Link>


            <Link to='/projects/e-commerce/cart' className="hover:text-blue-500 transition-colors duration-300 flex flex-col justify-center items-center">
            <i className="fa-solid fa-cart-arrow-down"></i>
            <p className="text-base">Cart</p>
            </Link> 

            <Link to='/projects/e-commerce/contact' className="hover:text-blue-500 transition-colors duration-300 flex flex-col justify-center items-center">
            <i class="fa-solid fa-phone"></i>
            <p className="text-base">Contact</p></Link>

        </div>
            </div>
        </nav>
    )
}

export default Navbar;