
import { Link } from "react-router-dom";

function ProjectCard({ image, title, description, tech, slug }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="200"
      className="flex h-[520px] min-w-[320px] flex-col overflow-hidden rounded-2xl border border-black/10 bg-neutral-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-neutral-900 md:min-w-[380px]"
    >
      <div className="h-52 shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            {title}
          </h3>

          <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {description}
          </p>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600">
            {tech}
          </p>
        </div>

        <Link
          to={`/projects/${slug}`}
          className="mt-auto inline-flex w-fit items-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 dark:bg-white dark:text-neutral-950 dark:hover:bg-blue-500 dark:hover:text-white"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;

