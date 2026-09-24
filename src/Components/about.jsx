
import kier from "../assets/Photos/kier.jpg";
import { ArrowUpRight } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-28 text-neutral-950 transition-colors duration-500 dark:bg-[#0a0a0a] dark:text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="mb-16 flex items-center gap-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
            01 — About
          </span>

          <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* Image */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-neutral-100 dark:bg-neutral-900">
              <img
                src={kier}
                alt="Kier Reyes"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-4 -left-4 -z-0 h-full w-full rounded-[2rem] border border-blue-600/20 dark:border-blue-500/20" />
          </div>

          {/* Content */}
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className="mb-6 text-sm font-medium uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500"
            >
              Computer Engineering Graduate
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl"
            >
              I enjoy turning ideas into{" "}
              <span className="text-blue-600">functional web experiences.</span>
            </h2>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg"
            >
              <p>
                I'm a web developer focused on building responsive and
                user-friendly applications with React and modern frontend
                technologies.
              </p>

              <p>
                Alongside frontend development, I've been building full-stack
                projects and learning how frontend applications communicate
                with REST APIs, backend services, and databases.
              </p>

              <p>
                I enjoy solving problems, exploring new technologies, and
                improving the way I build software through hands-on projects.
              </p>
            </div>

            {/* Quick information */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              className="mt-10 grid max-w-2xl grid-cols-2 gap-y-8 border-y border-black/10 py-7 dark:border-white/10 sm:grid-cols-3"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
                  Focus
                </p>
                <p className="mt-2 text-sm font-medium">
                  Frontend Development
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
                  Stack
                </p>
                <p className="mt-2 text-sm font-medium">
                  React + Node.js
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
                  Location
                </p>
                <p className="mt-2 text-sm font-medium">
                  Manila, PH
                </p>
              </div>
            </div>

            {/* Link */}
            <a
              href="#skills"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              Explore my stack

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

