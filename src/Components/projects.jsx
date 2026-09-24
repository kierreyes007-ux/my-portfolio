import { useEffect, useRef, useState } from "react";
import ProjectCard from "./Projectscard";
import events from "../assets/Photos/Events.png";
import expense from "../assets/Photos/Expense.png";
import movie from "../assets/Photos/Movies.png";
import todolist from "../assets/Photos/Todolist.png";
import weatherapp from "../assets/Photos/WeatherApp.png";
import calculator from "../assets/Photos/Calculator.png";
import ecommerce from "../assets/Photos/Ecommence.png";
import jobtracker from "../assets/Photos/jobtracker.png";
import assistance from "../assets/Photos/Assistance.png";
import { ArrowLeft, ArrowRight } from "lucide-react";


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
      image: jobtracker,
      title: "Job Tracker",
      slug: "job-tracker",
      description:
        "Full-stack job application tracker built with React featuring application management, status tracking, dashboard statistics, and user authentication, with a Node.js and Express backend connected to PostgreSQL",
      tech: "React.js • Tailwind CSS • Node.js • Express • PostgreSQL",
    },

    {
      image: assistance,
      title: "AI-Assistance App",
      slug: "AI-assistance",
      description:
        "AI chat assistant built with React and Tailwind CSS, featuring real-time conversations, speech-to-text, text-to-speech, and a Gemini-powered Node.js backend.",
      tech: "React.js • Tailwind CSS • Node.js • Express • Gemini API",
    },
    {
      image: expense,
      title: "Expense Tracker",
      slug: "expense-tracker",
      description:
        "Expense tracking application built with React that allows users to manage and monitor their daily income and expenses.",
      tech: "React • JavaScript • Tailwind CSS",
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
      tech: "React • Tailwind CSS",
    },
    {
      image: movie,
      title: "Movie App",
      slug: "movie-app",
      description:
        "A simple movie listing app where users can list and rate movies.",
      tech: "React • Tailwind CSS",
    },
    {
      image: events,
      title: "Events Management",
      slug: "events-management",
      description:
        "Website for organizing and managing events.",
      tech: "React • Tailwind CSS",
    },
    {
      image: calculator,
      title: "Calculator",
      slug: "calculator",
      description:
        "Calculator capable of performing basic arithmetic operations.",
      tech: "HTML • CSS • JavaScript • React",
    },
  ];

  const extendedProjects = [
    ...projects,
    ...projects,
    ...projects,
    ...projects,
    ...projects,
  ];

  const carouselRef = useRef(null);


  const [currentIndex, setCurrentIndex] = useState(projects.length * 2);
  const [slideWidth, setSlideWidth] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [paused, setPaused] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);

  useEffect(() => {
    const updateCarousel = () => {
      if (!carouselRef.current) {
        return;
      }

      const width = carouselRef.current.clientWidth;

      let visibleSlides = 1;

      if (window.innerWidth >= 1024) {
        visibleSlides = 3;
      } else if (window.innerWidth >= 640) {
        visibleSlides = 2;
      }

      setSlideWidth(width / visibleSlides);
    };

    updateCarousel();

    const resizeObserver = new ResizeObserver(updateCarousel);

    if (carouselRef.current) {
      resizeObserver.observe(carouselRef.current);
    }

    window.addEventListener("resize", updateCarousel);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateCarousel);
    };
  }, []);

  const nextProject = () => {
    setPaused(true);
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const previousProject = () => {
    setPaused(true);
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev - 1);
  };


  const handleTransitionEnd = () => {
    const middleStart = projects.length;
    const middleEnd = projects.length * 3;

    if (currentIndex >= middleEnd) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - projects.length);
    }

    if (currentIndex < middleStart) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex + projects.length);
    }
  };

  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  }, [transitionEnabled]);

  const handlePointerDown = (event) => {
    setPaused(true);
    setDragStart(event.clientX);
    setDragOffset(0);
  };

  const handlePointerMove = (event) => {
    if (dragStart === null) {
      return;
    }

    setDragOffset(event.clientX - dragStart);
  };

  const handlePointerUp = () => {
    if (dragStart === null) {
      return;
    }

    if (dragOffset > 60) {
      setTransitionEnabled(true);
      setCurrentIndex((prev) => prev - 1);
    } else if (dragOffset < -60) {
      setTransitionEnabled(true);
      setCurrentIndex((prev) => prev + 1);
    } else {
      setTransitionEnabled(true);
    }

    setDragStart(null);
    setDragOffset(0);
  };

  const handlePointerCancel = () => {
    setTransitionEnabled(true);
    setDragStart(null);
    setDragOffset(0);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-6 py-28 text-neutral-950 transition-colors duration-500 dark:bg-[#0a0a0a] dark:text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="mb-14 flex items-center gap-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
            02 — Selected Work
          </span>

          <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="mb-12 max-w-3xl"
        >
          <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Things I've built.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
            A collection of projects I've built while developing my skills
            across frontend and full-stack web development.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            if (dragStart === null) {
              setPaused(false);
            }
          }}
        >
          <button
            type="button"
            onClick={previousProject}
            onFocus={() => setPaused(true)}
            aria-label="Previous project"
            className="absolute left-2 top-[35%] z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-blue-600 sm:left-4"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div
            ref={carouselRef}
            className="relative z-10 overflow-hidden"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            style={{ touchAction: "pan-y", cursor: dragStart !== null ? "grabbing" : "grab"  }}
          >
            <div
              className={`flex ${
                transitionEnabled
                  ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : ""
              }`}
              style={{
                transform: `translate3d(${
                  -(currentIndex * slideWidth) + dragOffset
                }px, 0, 0)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedProjects.map((project, index) => (
                <div
                  key={`${project.slug}-${index}`}
                  className="shrink-0 px-2"
                  style={{
                    width: `${slideWidth}px`,
                  }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={nextProject}
            onFocus={() => setPaused(true)}
            aria-label="Next project"
            className="absolute right-2 top-[35%] z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-blue-600 sm:right-4"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-black/10 pt-5 dark:border-white/10">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
            {projects.length} Projects
          </p>

          <p className="text-xs uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
            Drag · Swipe · Explore
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;