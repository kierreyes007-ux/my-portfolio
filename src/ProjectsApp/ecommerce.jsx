  import Navbar from "./ecommerceComp/components/navbar";
  import Cart from "./ecommerceComp/pages/cart";
  import Home from "./ecommerceComp/pages/home";
  import Shop from "./ecommerceComp/pages/shop";
  import Login from "./ecommerceComp/pages/login";
  import Contact from "./ecommerceComp/pages/contact";
  import Register from "./ecommerceComp/pages/register";
  import ProductDetail from "./ecommerceComp/components/productDetail";
  import Categories from "./ecommerceComp/pages/categories";
  import { Routes, Route } from "react-router-dom";
  import { AuthProvider } from "./ecommerceComp/context/authContext";
  import { EcommerceProvider } from "./ecommerceComp/context/ecommerceContext";
  function Ecommerce(){
     
    return(
     
      <div>
        <AuthProvider>
          <EcommerceProvider>
          <Navbar />
          
          <Routes>
              <Route index element={<Home />}/>
              <Route path='shop' element={<Shop />}/>
              <Route path='cart' element={<Cart />}/>
              <Route path='login' element={<Login />}/>
              <Route path='contact' element={<Contact />}/>
              <Route path='register' element={<Register />}/>
              <Route path='shop/:category' element={<Shop />}/>
              <Route path="categories" element={<Categories />} />
              <Route path="product/:id" element={<ProductDetail />} />
          </Routes>
          </EcommerceProvider>
          </AuthProvider>
      </div>
    )
  }
  export default Ecommerce;