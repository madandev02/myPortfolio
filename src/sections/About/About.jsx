import "./About.css";

import Container from "../../components/common/Container";
import SectionTitle from "../../components/ui/SectionTitle";

const principles = [
  {
    title: "Curiosity with structure",
    text: "I like understanding how systems work before I start building them. That keeps implementation decisions grounded in the problem.",
  },
  {
    title: "Maintainability over noise",
    text: "I prefer clean component boundaries, readable code and reliable data flow to crowded interfaces or superficial complexity.",
  },
  {
    title: "Business first thinking",
    text: "Every project is treated like a product that should help a real team do useful work, not just demonstrate a library.",
  },
];

function About() {
  return (
    <section id="about" className="section about">
      <Container>
        <SectionTitle
          subtitle="About"
          title="I build software for real business operations"
        />

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I am Mauricio Narváez, a Junior Full Stack Developer who enjoys
              understanding workflows before writing code.
            </p>

            <p>
              I prefer solving business problems over creating tutorial projects.
              My goal is to build useful software that feels realistic, maintainable
              and useful to a real team.
            </p>
          </div>

          <div className="about-principles">
            {principles.map((principle) => (
              <article key={principle.title} className="about-card">
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;