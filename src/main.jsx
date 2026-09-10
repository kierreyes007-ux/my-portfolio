
import { createRoot } from 'react-dom/client';
import App from "./App";
import './index.css';
import Portfolio from "./portfolio";
import Chat from "./ProjectsApp/chatai";
import { BrowserRouter } from 'react-router-dom';
import { EcommerceProvider } from "./ProjectsApp/ecommerceComp/ecommerceContext";








createRoot(document.getElementById('root')).render(
  
<Portfolio />


 
)
