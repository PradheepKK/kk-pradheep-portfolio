import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "../styles/projects.css";

const ALL = "All";

function Projects() {
  const [activeFilter, setActiveFilter] = useState(ALL);

  // Build the filter list from the technologies used in the projects.
  const filters = useMemo(() => {
    const techs = new Set(projects.items.flatMap((item) => item.technologies));
    return [ALL, ...techs];
  }, []);

  const visibleProjects =
    activeFilter === ALL
      ? projects.items
      : projects.items.filter((item) => item.technologies.includes(activeFilter));

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <span className="section-label">{projects.label}</span>
        <h2 id="projects-title" className="section-title">
          {projects.title}
        </h2>
        <p className="text-muted projects__intro">{projects.intro}</p>

        {projects.items.length > 0 ? (
          <>
            <div className="projects__filters" role="group" aria-label="Filter projects by technology">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`projects__filter ${activeFilter === filter ? "is-active" : ""}`}
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="projects__grid">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-muted">No projects yet. New projects will be added soon.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;