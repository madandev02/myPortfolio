import "./Hero.css";

import Container from "../../components/common/Container";
import { FiArrowRight, FiGithub, FiMail } from "react-icons/fi";
import social from "../../data/social";

function Hero() {
  return (
    <section className="hero" id="top">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="hero-badge">Junior Full Stack Developer</span>

            <h1>
              Building software for real business operations.
              <span>Looking for a stable full-time role.</span>
            </h1>

            <p className="hero-description">
              Mauricio Narvaez. I build practical web applications for logistics,
              maintenance and clinic workflows with a product mindset and clean
              engineering habits.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View featured work <FiArrowRight />
              </a>

              <a href={social[0].href} target="_blank" rel="noreferrer" className="button button-secondary">
                GitHub <FiGithub />
              </a>
            </div>

            <div className="hero-meta" aria-label="Key portfolio highlights">
              <div className="hero-meta-card">
                <strong>Junior profile</strong>
                <span>Seeking a first stable full-time software developer position.</span>
              </div>

              <div className="hero-meta-card">
                <strong>Business software</strong>
                <span>Projects shaped around operational workflows and useful outcomes.</span>
              </div>

              <div className="hero-meta-card">
                <strong>Team player</strong>
                <span>Comfortable learning, collaborating and improving with a team.</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel__top">
              <span className="hero-panel__eyebrow">Portfolio profile</span>
              <span className="hero-status">Actively looking for full-time opportunities</span>
            </div>

            <div className="hero-panel__content">
              <div className="hero-profile">
                <span className="hero-profile__label">Role</span>
                <h2>Junior Full Stack Developer</h2>
                <p>
                  Focused on React, TypeScript, Node.js, Laravel and PostgreSQL,
                  with an emphasis on useful software instead of shallow demos.
                </p>
              </div>

              <div className="hero-chip-grid">
                <div className="hero-chip-card">
                  <span>Frontend</span>
                  <p>React · Vite · Tailwind CSS</p>
                </div>

                <div className="hero-chip-card">
                  <span>Backend</span>
                  <p>Node.js · Express · Laravel</p>
                </div>

                <div className="hero-chip-card">
                  <span>Infrastructure</span>
                  <p>PostgreSQL · Docker · GitHub</p>
                </div>

                <div className="hero-chip-card hero-chip-card--accent">
                  <span>Current goal</span>
                  <p>Join a team in a stable full-time software development role.</p>
                </div>
              </div>

              <a href={social[1].href} target="_blank" rel="noreferrer" className="hero-resume-link">
                <FiMail /> Download CV
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;