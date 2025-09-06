import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // success | error | null
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("LZLck44kERPGZdzDi"); // PUBLIC KEY
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_kdgi16u",     // SERVICE ID
        "template_bdvrecl",    // TEMPLATE ID
        formRef.current,
        "LZLck44kERPGZdzDi"    // PUBLIC KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => setStatus("error")
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="w-full py-20 text-center max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          rows={5}
          className="border border-gray-300 rounded-xl px-6 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 mt-4">Message sent successfully! I will reply soon.</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-4">Oops! Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
