  import Navbar from "./ecommerceComp/navbar";
  import Cart from "./ecommerceComp/cart";
  import Home from "./ecommerceComp/home";
  import Shop from "./ecommerceComp/shop";
  import Login from "./ecommerceComp/login";
  import Contact from "./ecommerceComp/contact";
  import Register from "./ecommerceComp/register";
  import ProductDetail from "./ecommerceComp/productDetail";
  import Categories from "./ecommerceComp/categories";
  import Loader from "./ecommerceComp/loader";
  import ErrorScreen from "./ecommerceComp/errorScreen";
  import { useEcommerce } from "./ecommerceComp/ecommerceContext";
  import { Routes, Route } from "react-router-dom";
  function Ecommerce(){
     const { loading, error } = useEcommerce();

     if(loading){
      return <Loader />
     }
     if(error) {
      return <ErrorScreen error={error}/>
     }
    return(
     
      <div>
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

      </div>
    )
  }
  export default Ecommerce;