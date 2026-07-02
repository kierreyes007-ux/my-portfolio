import { useState } from "react";


function Navbar() {
  const [open, setOpen] = useState(false);
 return (
 <nav className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 sticky top-0">
  <a href='#home'>
  <h1 className="text-3xl font-bold flex items-center">Portfolio</h1> </a>
  <div className="hidden md:flex gap-10 text-xl">
    <a href='#home'>Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skill</a>
    <a href="#contact">Contact</a>
  </div>
  <button className={`md:hidden text-3xl`} onClick={()=> setOpen(!open)}>☰</button>
    { open && (
      <div className="absolute top-16 right-4 bg-white shadow-lg flex flex-col gap-4 p-4">
           <a onClick={() => setOpen(false)} href="#home">Home</a>
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#projects">Projects</a>
          <a onClick={() => setOpen(false)} href="#skills">Skill</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>
      </div>
    )}
  </nav>
 )
}

export default Navbar;