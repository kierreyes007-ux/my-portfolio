import { useState } from "react";


function Navbar() {
  const [open, setOpen] = useState(false);
 return (
 <nav className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 sticky top-0 z-50">
  <a href='#home'>
  <h1 className="text-3xl font-bold flex items-center hover:text-blue-600 transition">Kier P. Reyes</h1> </a>
  <div className="hidden md:flex gap-10 text-xl">
    <a 
    className="hover:text-blue-600 transition duration-300"href='#home'>Home</a>
    <a 
    className="hover:text-blue-600 transition duration-300"href="#about">About</a>
    <a 
    className="hover:text-blue-600 transition duration-300"href="#projects">Projects</a>
    <a 
    className="hover:text-blue-600 transition duration-300"href="#skills">Skill</a>
    <a 
    className="hover:text-blue-600 transition duration-300"
    href="#contact">Contact</a>
  </div>
  <button className={`md:hidden text-3xl`} onClick={()=> setOpen(!open)}>☰</button>
    { open && (
      <div className="absolute md:hidden top-16 right-4 bg-white shadow-lg flex flex-col gap-4 px-6 py-2  ">
           <a 
           className="hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded transition"onClick={() => setOpen(false)} href="#home">Home</a>
          <a 
          className="hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded transition"onClick={() => setOpen(false)} href="#about">About</a>
          <a 
          className="hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded transition"onClick={() => setOpen(false)} href="#projects">Projects</a>
          <a 
          className="hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded transition"onClick={() => setOpen(false)} href="#skills">Skill</a>
          <a 
          className="hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded transition"onClick={() => setOpen(false)} href="#contact">Contact</a>
          
      </div>
    )}
  </nav>
 )
}

export default Navbar;