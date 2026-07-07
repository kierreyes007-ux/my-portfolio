import reyes from "../assets/Photos/REYES.jpg";
import About from "./about"

function Hero() {
  return (
    
   <section id="home" className="w-full min-h-screen bg-gray-100 flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4 gap-12"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-easing="ease-out-cubic">
      <div >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-blue-600">Kier</span>
        </h1>

        <p className="mt-4 max-w-xl text-lg md:text-2xl text-gray-600">
         Frontend Developer focused on building responsive and user-friendly web applications using React and Tailwind CSS. I enjoy turning ideas into clean and modern interfaces.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

          <a href="#projects">
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            View Projects
          </button>
          </a>

            <a href="#contact">
          <button className="border border-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition">
            Contact Me
          </button>
            </a>

            <a href="/resume.pdf"
            download="resume.pdf"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Download Resume
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