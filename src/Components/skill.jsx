function Skills() {
  const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Responsive Design",
  "API Integration",
  "Database Integration",
  "State Management",
  "React Hooks",
  "Context API",
  "React Router",
  "Node.js",
  "Express.js",
  "REST APIs",
  "PostgreSQL",
  "SQL",
  "CRUD Operations",
  "Git",
  "GitHub",
  "Deployment (Vercel, Render)",
  "Supabase",
  "Gemini API",
  "MySQL",
  "XAMPP",
  "Microsoft Excel",
  "C++ (Basic)"
];

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gray-100 px-6 py-20 flex flex-col justify-center"
    >
      <div className="max-w-5xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-4">
          Skills
        </h2>

        <p className="text-gray-600 mb-12">
          These are the technologies and tools I work with.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
            data-aos="fade-down" 
            data-aos-duration="600" 
            data-aos-delay={index * 80}
              key={skill}
              className="bg-white px-5 py-2 rounded-full shadow-sm text-gray-800 hover:bg-black hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;