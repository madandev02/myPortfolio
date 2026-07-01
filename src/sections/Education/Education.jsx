import "./Education.css";

import Container from "../../components/common/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import education from "../../data/education";

function Education() {
  return (
    <section className="section education" id="education">
      <Container>
        <SectionTitle
          subtitle="Education"
          title="Formal education combined with continuous learning"
        />

        <p className="education__intro">
          I combine academic studies with structured self-learning so my profile
          reflects both a formal foundation and a consistent habit of growth.
        </p>

        <h3 className="education__group-title">Formal education</h3>

        <div className="education-grid">
          {education.formal.map((item) => (
            <article key={item.title} className="education-card">
              <span className="education-card__label">{item.status}</span>
              <h3>{item.title}</h3>
              <p>{item.school}</p>
            </article>
          ))}
        </div>

        <div className="education-learning">
          <h3 className="education__group-title">Continuous learning</h3>

          <div className="education-learning__grid">
            {education.continuousLearning.map((item) => (
              <div key={item} className="education-learning__item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Education;