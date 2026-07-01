import "./ProjectCard.css";

import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";

function ProjectCard({
  title,
  subtitle,
  description,
  technologies,
  features,
  githubUrl,
  // demoUrl,
}) {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3>{title}</h3>
        <p className="project-card__subtitle">{subtitle}</p>
      </div>

      <p className="project-card__description">{description}</p>

      <div className="project-card__section">
        <span className="project-card__section-label">Main features</span>
        <ul className="project-card__features">
          {features.slice(0, 6).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="project-card__section">
        <span className="project-card__section-label">Technology stack</span>
        <div className="project-card__chips">
          {technologies.map((tech) => (
            <span key={tech} className="project-card__chip">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card__footer">
        <a href={githubUrl} target="_blank" rel="noreferrer" className="project-card__link">
          <FiGithub /> GitHub <FiArrowUpRight />
        </a>

        {/*<a href={demoUrl || "#contact"} className="project-card__link project-card__link--accent">
          <FiExternalLink /> Live Demo <FiArrowUpRight />
        </a>*/}
      </div>
    </article>
  );
}

export default ProjectCard;