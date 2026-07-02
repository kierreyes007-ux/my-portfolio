import ProjectCard from "./Projectscard";
import events from "../assets/Photos/Events.png";
import expense from "../assets/Photos/Expense.png";
import movie from "../assets/Photos/Movies.png";
import todolist from "../assets/Photos/TodoList.png";
import weatherapp from "../assets/Photos/WeatherApp.png";
import calculator from "../assets/Photos/Calculator.png";

function Projects() {
  const projects = [
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
        "Search for movies and browse details using an external API.",
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
      tech: "HTML • CSS • JavaScript"
      
    },
  ];

  return (
      <section id="projects" className="w-full min-h-screen bg-gray-100 px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;