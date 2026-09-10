import kier from "../assets/Photos/kier.jpg";
function About() {
    return (
        
          <section id="about"  className="w-full py-20 px-6 bg-gray-100 flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
             <div className="flex-shrink-0">
                <img  
                className="w-40 sm:w-52 md:w-64 lg:w-72 h-auto rounded-full object-cover" 
                src={kier} 
                alt="KIER"
                data-aos="fade-right"
                data-aos-duration="900"
                ></img>

            </div>
           <div 
           className="max-w-2xl"
           data-aos="fade-left"
           data-aos-delay="200"
           data-aos-duration="900"
           >
      <h2 className="text-3xl md:text-5xl font-bold">
        About Me
      </h2>

       <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed px-2">
      <span className="font-bold"> Computer Engineering Graduate | Web Developer | React & Node.js </span> <br/>

      Computer Engineering graduate passionate about web development and
      technology. I build responsive and functional web applications using
      React and Tailwind CSS, with experience integrating REST APIs, Node.js,
      Express, and PostgreSQL. I’m a detail-oriented and curious developer who
      enjoys solving problems, learning new technologies, and continuously
      improving my skills.
      </p>
      </div>
    </section>
 
    )
}
export default About;
