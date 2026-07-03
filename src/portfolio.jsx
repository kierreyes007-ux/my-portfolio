import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./Components/skill";
import Navbar from "./Components/navbar";
import Projects from "./Components/projects";
import Contact from "./Components/contact";
import Hero from "./Components/hero";
import About from "./Components/about";
import Footer from "./Components/footer";

import ProjectDetail from "./Components/ProjectDetail";

function Portfolio() {
  return (
    <BrowserRouter>
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


        <Route path="/projects/:slug" element={<ProjectDetail />} />

      </Routes>
    </BrowserRouter>
  );
}
export default Portfolio;