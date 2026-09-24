
function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      description: "Building responsive and interactive user interfaces.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Responsive Design",
        "React Hooks",
        "Context API",
        "React Router",
        "State Management",
      ],
    },
    {
      number: "02",
      title: "Backend",
      description: "Connecting applications to APIs and backend services.",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "API Integration",
        "CRUD Operations",
      ],
    },
    {
      number: "03",
      title: "Database",
      description: "Working with relational databases and application data.",
      skills: [
        "PostgreSQL",
        "SQL",
        "Supabase",
        "MySQL",
        "Database Integration",
      ],
    },
    {
      number: "04",
      title: "Tools & Other",
      description: "Tools and technologies used throughout development.",
      skills: [
        "Git",
        "GitHub",
        "Deployment (Vercel, Render)",
        "Gemini API",
        "XAMPP",
        "Microsoft Excel",
        "C++ (Basic)",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#f5f5f3] px-6 py-28 text-neutral-950 transition-colors duration-500 dark:bg-[#0a0a0a] dark:text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="mb-14 flex items-center gap-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
            03 — Stack
          </span>

          <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Tools I work with.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
            Technologies and tools I've been using to build frontend and
            full-stack web applications.
          </p>
        </div>

        <div className="border-t border-black/10 dark:border-white/10">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              className="grid gap-8 border-b border-black/10 py-10 dark:border-white/10 lg:grid-cols-[0.25fr_0.55fr_1.2fr] lg:items-start"
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-blue-600">
                {group.number}
              </span>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {group.title}
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 dark:border-white/10 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
