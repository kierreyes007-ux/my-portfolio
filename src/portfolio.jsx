import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Skills from "./Components/skill";
import Navbar from "./Components/navbar";
import Projects from "./Components/projects";
import Contact from "./Components/contact";
import Hero from "./Components/hero";
import About from "./Components/about";
import Footer from "./Components/footer";
import { useEffect } from "react";
import Ecommence from "./ProjectsApp/ecommence";
import AOS from "aos";
import "aos/dist/aos.css";


import ProjectDetail from "./Components/ProjectDetail";

function Portfolio() {
    useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  function AOSRefresh() {
  const location = useLocation();

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return null;
}
  return (
    <div className="w-full overflow-x-clip">
    <BrowserRouter>
     <AOSRefresh />

      <Routes>

        <Route
          path="/"
          element={
            <div className="w-full min-h-screen">
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </div>
          }
        />

        
        <Route path="/projects/:slug/*" element={<ProjectDetail />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default Portfolio;