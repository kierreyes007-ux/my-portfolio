
import reyes from "../assets/Photos/REYES.jpg";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#f5f5f3] px-6 pb-16 pt-28 text-neutral-950 transition-colors duration-500 dark:bg-[#0a0a0a] dark:text-white sm:px-10 lg:px-16"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-black/5 dark:bg-white/5" />

        <div className="absolute left-1/2 top-0 h-full w-px bg-black/5 dark:bg-white/5" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

        {/* Content */}
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              Frontend Developer
            </span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="max-w-4xl text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.82] tracking-[-0.07em]"
          >
            Kier
            <br />
            <span className="text-blue-600">Reyes</span>
          </h1>

          <div className="mt-9 max-w-2xl">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl"
            >
              I build responsive web applications with React, connect
              interfaces to REST APIs and backend services, and work with
              Node.js, Express, and PostgreSQL.
            </p>
          </div>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600 dark:bg-white dark:text-neutral-950 dark:hover:bg-blue-500 dark:hover:text-white"
            >
              View my work

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black/15 px-6 py-3.5 text-sm font-medium text-neutral-800 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 dark:border-white/15 dark:text-neutral-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              Let's connect
            </a>
          </div>

          {/* Tech stack */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
            className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.14em] text-neutral-400 dark:text-neutral-500"
          >
            <span>React</span>

            <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />

            <span>JavaScript</span>

            <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />

            <span>Node.js</span>

            <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />

            <span>PostgreSQL</span>
          </div>
        </div>

        {/* Portrait */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-neutral-200 dark:bg-neutral-900">
            <img
              src={reyes}
              alt="Kier Reyes"
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Photo information */}
            <div className="absolute bottom-5 left-5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                Based in
              </p>

              <p className="mt-1 text-sm font-medium text-white">
                Manila, Philippines
              </p>
            </div>
          </div>

          {/* Decorative frame */}
          <div className="absolute -bottom-4 -right-4 -z-0 h-full w-full rounded-[2rem] border border-blue-600/20 dark:border-blue-500/20" />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-7 left-6 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-blue-600 dark:text-neutral-600 dark:hover:text-blue-400 sm:flex lg:left-16"
      >
        <span className="h-8 w-px bg-current" />
        Scroll to explore
      </a>
    </section>
  );
}

export default Hero;

