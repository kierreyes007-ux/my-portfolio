
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Calculator from "../ProjectsApp/calculator";
import Expense from "../ProjectsApp/expense";
import Weather from "../ProjectsApp/weatherapp";
import Events from "../ProjectsApp/events";
import Movie from "../ProjectsApp/movie";
import Prac from "../ProjectsApp/todolist";
import Ecommerce from "../ProjectsApp/ecommerce";
import AIChat from "../ProjectsApp/chatai";
import JobTracker from "../ProjectsApp/jobtracker";

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectMap = {
    "e-commerce": Ecommerce,
    "job-tracker": JobTracker,
    "AI-assistance": AIChat,
    calculator: Calculator,
    "expense-tracker": Expense,
    "weather-app": Weather,
    "events-management": Events,
    "movie-app": Movie,
    "todo-list": Prac,
  };

  const projectInfo = {
    "e-commerce": {
      title: "E-commerce App",
      category: "Full-Stack Web Application",
      description:
        "A full-stack e-commerce application built with React, Node.js, Express, and PostgreSQL.",
      tech: "React • Tailwind CSS • Node.js • Express • PostgreSQL",
    },
    "AI-assistance": {
      title: "AI-Assistance App",
      category: "AI Web Application",
      description:
        "An AI chat assistant with real-time conversations, speech-to-text, text-to-speech, and a Gemini-powered backend.",
      tech: "React • Tailwind CSS • Node.js • Express • Gemini API",
    },
    "expense-tracker": {
      title: "Expense Tracker",
      category: "Frontend Application",
      description:
        "A responsive expense tracking application for managing daily income and expenses.",
      tech: "React • JavaScript • Tailwind CSS",
    },
    "weather-app": {
      title: "Weather App",
      category: "API Integration",
      description:
        "A weather application that retrieves and displays live weather information through an external API.",
      tech: "React • Tailwind CSS • API",
    },
    "todo-list": {
      title: "Todo List",
      category: "Frontend Application",
      description:
        "A task management application with functionality for adding, editing, and deleting tasks.",
      tech: "React • Tailwind CSS",
    },
    "movie-app": {
      title: "Movie App",
      category: "Frontend Application",
      description:
        "A movie listing application where users can browse and rate movies.",
      tech: "React • Tailwind CSS",
    },
    "events-management": {
      title: "Events Management",
      category: "Web Application",
      description:
        "A web application designed for organizing and managing events.",
      tech: "React • Tailwind CSS",
    },
    calculator: {
      title: "Calculator",
      category: "Frontend Application",
      description:
        "A calculator application capable of performing basic arithmetic operations.",
      tech: "HTML • CSS • JavaScript • React",
    },
  };

  const SelectedProject = projectMap[slug];
  const currentProject = projectInfo[slug];

  if (!SelectedProject || !currentProject) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f5f3] px-6 text-neutral-950 dark:bg-[#0a0a0a] dark:text-white">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            404
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            Project not found
          </h1>

          <button
            onClick={() => navigate("/")}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600 dark:bg-white dark:text-neutral-950 dark:hover:bg-blue-500 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f5f3] text-neutral-950 transition-colors duration-500 dark:bg-[#0a0a0a] dark:text-white">
      <section className="px-6 pb-16 pt-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <button
            onClick={() => navigate("/#projects")}
            className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors duration-300 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to projects
          </button>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.35fr] lg:gap-20">
            <div>
              <p
                data-aos="fade-up"
                data-aos-duration="700"
                className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600"
              >
                {currentProject.category}
              </p>

              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
                className="mt-5 max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl"
              >
                {currentProject.title}
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
                className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl"
              >
                {currentProject.description}
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="900"
              className="flex items-end lg:justify-end"
            >
              <div className="border-l border-black/10 pl-6 dark:border-white/10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                  Built with
                </p>

                <p className="mt-4 max-w-xs text-sm font-medium leading-relaxed">
                  {currentProject.tech}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-10 dark:border-white/10 dark:bg-neutral-950 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
            Project Showcase
          </p>

          <button
            onClick={() => navigate("/#projects")}
            className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            All projects
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>
      </section>

      <section className="w-full border-y border-black/10 bg-white text-neutral-950">
  <div className="light">
    <SelectedProject />
  </div>
</section>
    </main>
  );
}

export default ProjectDetail;

