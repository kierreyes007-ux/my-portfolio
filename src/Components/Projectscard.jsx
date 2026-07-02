import { Link } from "react-router-dom";  
function ProjectCard({ image, title, description, tech, slug }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
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
          className="inline-block mt-4 bg-black text-white px-4 py-2 rounded"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;