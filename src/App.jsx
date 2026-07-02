import { Routes, Route } from "react-router-dom";
import Home from "./Components/hero";
import Shop from "./Components/projects";
import Contact from "./Components/contact";  
import Navbar from "./Components/navbar";

import About from "./Components/about";
function App(){
    return (
      <div className="w-screen h-screen flex flex-col">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
      
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
       <BrowserRouter>
  <App />
  </BrowserRouter>
      </div>
    )
 
}
export default App;