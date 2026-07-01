import Navbar from "../components/layout/Navbar";

import Hero from "../sections/Hero";
import FeaturedProjects from "../sections/FeaturedProjects";
import TechStack from "../sections/TechStack";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />

        <FeaturedProjects />

        <TechStack />

        <Experience />

        <Education />

        <About />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;