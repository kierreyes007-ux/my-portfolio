import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center p-4 flex-wrap">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold">Shopify</h1>

      {/* Hamburger */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}>☰</button>

      {/* Links */}
      <div
        className={`w-full md:w-auto md:flex gap-6 ${ open ? "flex" : "hidden" } md:block`}>
        <Link to="/">Home</Link> 
        <Link to="/shop">Shop</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Right side */}
      <div className="hidden md:flex gap-3 items-center">
        <input className="bg-gray-100 px-2 py-1" placeholder="Search" />
        <button>Pro</button>
        <button>Cart</button>
      </div>
    </nav>
  );
}

export default Navbar;