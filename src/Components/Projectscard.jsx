import { Link } from "react-router-dom";  
function ProjectCard({ image, title, description, tech, slug }) {
  return (
    <div data-aos="fade-up"
    data-aos-duration="800"
    data-aos-delay="200"
    className="min-w-[320px] md:min-w-[380px] snap-center"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="text-gray-600 mt-2">
          {description}
        </p>

        <p className="text-sm text-blue-600 mt-3">
          {tech}
        </p>

       <Link
          to={`/projects/${slug}`}
          className="inline-block mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 hover:scale-105 transition duration-300"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;