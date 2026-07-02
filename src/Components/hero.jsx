import reyes from "../assets/Photos/REYES.jpg";
import About from "./about"

function Hero() {
  return (
    
   <section id="home" className="w-full min-h-screen bg-gray-100 flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4 gap-12">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-blue-600">Kier</span>
        </h1>

        <p className="mt-4 max-w-xl text-lg md:text-2xl text-gray-600">
         Frontend Developer focused on building responsive and user-friendly web applications using React and Tailwind CSS. I enjoy turning ideas into clean and modern interfaces.
        </p>

        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <button className="bg-black text-white px-6 py-3 rounded-md">
            View Projects
          </button>

          <button className="border border-black px-6 py-3 rounded-md">
            Contact Me
          </button>
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