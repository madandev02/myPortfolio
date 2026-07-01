import "./Navbar.css";

import Container from "../../common/Container";
import social from "../../../data/social";

function Navbar() {
  return (
    <header className="navbar">

      <Container>

        <nav className="navbar-content">

          <a href="#top" className="logo" aria-label="Mauricio Narvaez home">
            Mauricio Narvaez
          </a>

          <ul className="nav-links">

            <li><a href="#projects">Projects</a></li>

            <li><a href="#tech">Tech Stack</a></li>

            <li><a href="#experience">Experience</a></li>

            <li><a href="#education">Education</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

          <a
            href={social[1].href}
            className="navbar-button"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>

        </nav>

      </Container>

    </header>
  );
}

export default Navbar;