import { useState } from "react";
import "../styles/projects.css";

const FALLBACK_IMAGE = "/images/projects/project-placeholder.svg";

// Reusable card for one project.
function ProjectCard({
  name,
  description,
  technologies,
  thumbnail,
  github,
  demo,
  isSample,
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageSrc =
    !thumbnail || imageFailed ? FALLBACK_IMAGE : `/images/projects/${thumbnail}`;

  return (
    <article className="card project-card">
      <div className="project-card__media">
        <img
          src={imageSrc}
          alt={`${name} thumbnail`}
          width="1836"
          height="856"
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
        />
        {isSample && <span className="project-card__badge">Sample Placeholder</span>}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{name}</h3>
        <p className="text-muted project-card__text">{description}</p>

        <ul className="project-card__tags" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech}>
              <span className="tag">{tech}</span>
            </li>
          ))}
        </ul>

        {(github || demo) && (
          <div className="project-card__links">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;