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

       <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
      <span className="font-bold"> CPET Graduate | Web Developer | Data Entry | SQL & Excel </span> <br/>

      Computer Engineering graduate with a strong foundation in programming, web development, and database management. Passionate about technology and eager to apply skills in an IT role. Detail-oriented and motivated IT enthusiast with experience in coding, Microsoft Excel, SQL, and web development. Quick learner with a strong commitment to problem-solving, teamwork, and continuous growth.
      </p>
      </div>
    </section>
 
    )
}
export default About;
