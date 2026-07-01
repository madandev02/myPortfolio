import "./Experience.css";

import Container from "../../components/common/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import experience from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="section experience">
      <Container>
        <SectionTitle
          subtitle="Experience"
          title="Experience shaped by real operational work"
        />

        <p className="experience__intro">
          My background combines hands-on technical support in a dental clinic with
          independent software development focused on practical business workflows.
        </p>

        <div className="experience-grid">
          {experience.map((entry) => (
            <article key={entry.title} className="experience-card">
              <span className="experience-card__period">{entry.period}</span>
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>

              <ul>
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
