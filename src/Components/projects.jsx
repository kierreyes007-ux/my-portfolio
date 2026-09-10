import ProjectCard from "./Projectscard";
import events from "../assets/Photos/Events.png";
import expense from "../assets/Photos/Expense.png";
import movie from "../assets/Photos/Movies.png";
import todolist from "../assets/Photos/Todolist.png";
import weatherapp from "../assets/Photos/WeatherApp.png";
import calculator from "../assets/Photos/Calculator.png";
import ecommerce from "../assets/Photos/Ecommence.png";
import assistance from "../assets/Photos/Assistance.png";

function Projects() {
  const projects = [
    {
      image: ecommerce,
      title: "E-commerce App",
      slug: "e-commerce",
      description:
        "Full-stack e-commerce website built with React featuring product browsing, categories, shopping cart functionality, and a responsive user interface, with a Node.js and Express backend connected to PostgreSQL.",
      tech: "React.js • Tailwind CSS • Node.js • Express • PostgreSQL",
      
    },

    {
      image: assistance,
      title: "AI-Assistance App",
      slug: "AI-assistance",
      description:
        "AI chat assistant built with React and Tailwind CSS, featuring real-time conversations, speech-to-text, text-to-speech, and a Gemini-powered Node.js backend.",
      tech: "React.js • Tailwind CSS • Node.js • Express • Gemini API"
      
    },
  
    {
      image: weatherapp,
      title: "Weather App",
      slug: "weather-app",
      description:
        "Weather application built with React that fetches live weather data.",
      tech: "React • Tailwind CSS • API",
      
    },

    {
      image: todolist,
      title: "Todo List",
      slug: "todo-list",
      description:
        "Task management application with add, edit, and delete features.",
      tech: "React • Tailwind CSS"
     
    },

    {
      image: movie,
      title: "Movie App",
      slug: "movie-app",
      description:
        "A simple movie listing app where users can list and rate movies",
      tech: "React • Tailwind CSS"
    
    },

    {
      image: events,
      title: "Events Management",
      slug: "events-management",
      description:
        "Website for organizing and managing events.",
      tech: "React • Tailwind CSS"
     
    },

    {
      image: expense,
      title: "Expense Tracker",
      slug: "expense-tracker",
      description:
        "Track your daily income and expenses.",
      tech: "React • JavaScript • Tailwind CSS"
      
    },

    {
      image: calculator,
      title: "Calculator",
      slug: "calculator",
      description:
        "Calculator capable of performing basic arithmetic operations.",
      tech: "HTML • CSS • JavaScript • React"
      
    },
  ];

  return (
      <section id="projects" className="w-full min-h-screen bg-gray-100 px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          My Projects
        </h2>

        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6">
          
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
        <p className="text-center text-gray-500 mb-10">
          ← Swipe or scroll to view more projects →
        </p>
          
      </div>
    </section>
  );
}

export default Projects;