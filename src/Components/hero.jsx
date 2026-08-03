import reyes from "../assets/Photos/REYES.jpg";
import About from "./about"

function Hero() {
  return (
    
   <section id="home" className="w-full min-h-screen bg-gray-100 flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4 gap-12"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-easing="ease-out-cubic">
      <div >
        <h1 className="text-4xl md:text-6xl font-bold px-5 pt-7 md:pt-1">
          Hi, I'm <span className="text-blue-600">Kier</span>
        </h1>

        <p className="mt-4 max-w-xl px-5 text-lg md:text-2xl text-gray-600">
          Frontend Developer skilled in building responsive web applications with React and Tailwind CSS. I enjoy creating clean interfaces and integrating APIs, backend services, and databases to deliver functional user experiences.
        </p>

        <div className="mt-6 flex flex-col items-center sm:flex-row gap-4 justify-center md:justify-start px-5">

        <a 
          href="#projects"
          className="bg-black text-white px-12 md:px-6 py-3 rounded-md hover:bg-gray-800 transition"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          download="resume.pdf"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition"
        >
          Download Resume
        </a>

        <a
          href="#contact"
          className="border border-gray-400 px-12 md:px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
          Contact Me
        </a>

      </div>
      </div>

      <div>
        <img
          className="w-40 sm:w-56 md:w-72 lg:w-96 h-auto rounded-lg"
          src={reyes}
          alt="REYES"
        />
      </div>
     

    </section>
   
     
  );
}

export default Hero;