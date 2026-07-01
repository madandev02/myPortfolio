import "./TechStack.css";

import Container from "../../components/common/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import skills from "../../data/skills";

function TechStack() {
  return (
    <section id="tech" className="section tech-stack">
      <Container>
        <SectionTitle
          subtitle="Tech stack"
          title="A focused stack for practical software"
        />

        <p className="tech-stack__intro">
          I keep the stack intentionally focused. The goal is not to collect tools,
          but to use the right ones with enough depth to build maintainable products.
        </p>

        <div className="tech-stack__grid">
          {skills.map((group) => (
            <article key={group.category} className="tech-card">
              <h3>{group.category}</h3>
              <div className="tech-card__chips">
                {group.items.map((item) => (
                  <span key={item} className="tech-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TechStack;