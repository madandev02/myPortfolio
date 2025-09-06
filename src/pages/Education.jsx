const Education = () => {
  return (
    <section id="education" className="w-full py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Education</h2>

      <div className="max-w-xl mx-auto text-gray-700 space-y-8">

        {/* Current Degree */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold mb-1">
            Technical Degree in Computer Science
          </h3>
          <p className="text-sm text-gray-500 mb-2">Universidad Mayor, Chile</p>
          <p>
            Technical training focused on programming, networks, and systems.  
            More info at:{" "}
            <a
              href="https://tec.umayor.cl/tecnico-en-informatica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              tec.umayor.cl
            </a>
          </p>
        </div>

        {/* Future Degree */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold mb-1">
            Bachelor of Computer Engineering
          </h3>
          <p className="text-sm text-gray-500 mb-2">Universidad Andrés Bello, Chile</p>
          <p>
            Next step in my professional development to deepen software engineering and systems knowledge.  
            More info at:{" "}
            <a
              href="https://advance.unab.cl/carreras/ingenieria-en-computacion-e-informatica-online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              advance.unab.cl
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;
