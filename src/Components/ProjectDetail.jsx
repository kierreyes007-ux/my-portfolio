import { useParams, useNavigate } from "react-router-dom";

import Calculator from "../ProjectsApp/calculator";
import Expense from "../ProjectsApp/expense";
import Weather from "../ProjectsApp/weatherapp";
import Events from "../ProjectsApp/events";
import Movie from "../ProjectsApp/movie";
import Prac from "../ProjectsApp/todolist";

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // STEP 2: connect URL → component
  const projectMap = {
    "calculator": Calculator,
    "expense-tracker": Expense,
    "weather-app": Weather,
    "events-management": Events,
    "movie-app": Movie,
    "todo-list": Prac,
  };

  const SelectedProject = projectMap[slug];

 if (!SelectedProject) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Go Home
        </button>
      </div>
    );
  }


return (
    <div className="min-h-screen bg-gray-100 p-6">

      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-black text-white rounded"
      >
        ← Back
      </button>

      <SelectedProject />
    </div>
  );
}

export default ProjectDetail;