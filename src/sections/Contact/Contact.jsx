import "./Contact.css";

import Container from "../../components/common/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import social from "../../data/social";
import { FiArrowRight, FiGithub } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <Container>
        <SectionTitle
          subtitle="Contact"
          title="Actively looking for a full-time software developer opportunity"
        />

        <div className="contact-grid">
          <div className="contact-copy">
            <p>
              If your team is looking for a junior developer who cares about code
              quality, business context and reliable execution, I would like to hear from you.
            </p>

            <p>
              I am especially interested in stable full-time roles where I can keep
              learning, collaborate with a team and grow while building useful software.
            </p>

            <a href={social[0].href} target="_blank" rel="noreferrer" className="contact-link">
              <FiGithub /> View GitHub profile <FiArrowRight />
            </a>
          </div>

          <div className="contact-card">
            <span className="contact-card__label">Available materials</span>

            <a href={social[1].href} target="_blank" rel="noreferrer" className="contact-card__item">
              <strong>Resume</strong>
              <span>Download the current CV</span>
            </a>

            <div className="contact-card__note">
              <strong>Best next step</strong>
              <p>Review the projects first. They show how I think about real problems.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;