import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="w-full text-center py-20">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto">
        <img
          src={profile}
          alt="Mauricio Narváez"
          className="w-40 h-40 rounded-full object-cover shadow-md"
        />

        <div>
          <p className="mb-4 text-gray-700">
            I'm a passionate Frontend Developer focused on building modern, responsive, 
            and user-friendly web applications using React and Tailwind CSS. 
            Currently, I'm expanding my skills into backend development with technologies like Node.js, Express, 
            Java, and databases, to transition into Fullstack development. 
            I enjoy creating clean, scalable, and visually appealing applications that provide real value to users.
          </p>

          <div className="flex justify-center gap-6 mt-4 text-xl">
            <a
              href="https://github.com/madandev02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mnarvv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
