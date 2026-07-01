import "./Footer.css";

import Container from "../../components/common/Container";
import social from "../../data/social";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div>
            <strong>Mauricio Narváez</strong>
            <p>Junior Full Stack Developer building practical business software.</p>
          </div>

          <div className="footer-links">
            <a href="#projects">Projects</a>
            <a href="#tech">Tech Stack</a>
            <a href={social[0].href} target="_blank" rel="noreferrer">GitHub</a>
            <a href={social[1].href} target="_blank" rel="noreferrer">CV</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;