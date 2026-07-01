import "./FeaturedProjects.css";

import Container from "../../components/common/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ProjectCard from "../../components/cards/ProjectCard";
import projects from "../../data/projects";

function FeaturedProjects() {
  return (
    <section className="featured-projects section" id="projects">
      <Container>
        <SectionTitle
          subtitle="Featured projects"
          title="Projects built for real business workflows"
        />

        <p className="featured-projects__intro">
          These projects are built to show how I think about real business needs:
          clear problem framing, maintainable structure and software that could fit
          into the daily work of a small or medium-sized team.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProjects;