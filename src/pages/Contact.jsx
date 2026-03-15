import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaUser,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("LZLck44kERPGZdzDi");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formRef.current.honeypot.value) {
      setStatus("error");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_kdgi16u",
        "template_bdvrecl",
        formRef.current,
        "LZLck44kERPGZdzDi"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => setStatus("error")
      )
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 px-6 text-[#e6edf3] overflow-hidden"
    >

      {/* background glow */}

      <div className="absolute left-[25%] top-20 w-[500px] h-[500px] bg-[#00c9ff]/8 blur-[160px] rounded-full -z-10"/>
      <div className="absolute right-[25%] bottom-0 w-[500px] h-[500px] bg-[#92fe9d]/6 blur-[160px] rounded-full -z-10"/>

      <div className="max-w-2xl mx-auto text-center relative z-10">

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let’s Work Together
        </motion.h2>

        <p className="text-[#9ba6b4] mb-10">
          Interested in working together or discussing a project?
          Feel free to reach out 👋
        </p>

        {/* SOCIAL LINKS */}

        <div className="flex justify-center gap-6 mb-12">

          <motion.a
            whileHover={{ y: -4 }}
            href="https://github.com/madandev02"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#161b22]/60 backdrop-blur-xl border border-[#30363d] px-6 py-3 rounded-full hover:border-[#00c9ff]/50 hover:shadow-[0_10px_30px_rgba(0,201,255,0.2)] transition"
          >
            <FaGithub />
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href="https://www.linkedin.com/in/mnarvv/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#161b22]/60 backdrop-blur-xl border border-[#30363d] px-6 py-3 rounded-full hover:border-[#00c9ff]/50 hover:shadow-[0_10px_30px_rgba(0,201,255,0.2)] transition"
          >
            <FaLinkedin />
            LinkedIn
          </motion.a>

        </div>

        {/* FORM */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#161b22]/60 backdrop-blur-xl border border-[#30363d]/80 rounded-3xl p-10 hover:border-[#00c9ff]/30 transition"
        >

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >

            <input
              type="text"
              name="honeypot"
              style={{ display: "none" }}
            />

            {/* name */}

            <div className="relative">

              <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-[#00c9ff]" />

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full border border-[#30363d] rounded-full pl-12 pr-4 py-3 bg-[#0d1117] transition focus:outline-none focus:border-[#00c9ff]/60 focus:ring-2 focus:ring-[#00c9ff]/40"
              />

            </div>

            {/* email */}

            <div className="relative">

              <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-[#00c9ff]" />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full border border-[#30363d] rounded-full pl-12 pr-4 py-3 bg-[#0d1117] transition focus:outline-none focus:border-[#00c9ff]/60 focus:ring-2 focus:ring-[#00c9ff]/40"
              />

            </div>

            {/* message */}

            <textarea
              name="message"
              placeholder="Write your message..."
              rows={5}
              required
              className="border border-[#30363d] rounded-2xl px-4 py-3 bg-[#0d1117] transition focus:outline-none focus:border-[#00c9ff]/60 focus:ring-2 focus:ring-[#00c9ff]/40"
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-2 text-lg font-semibold bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] text-[#0a0f16] px-8 py-3 rounded-full shadow-lg"
            >

              {loading ? "Sending..." : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}

            </motion.button>

          </form>

          {/* status */}

          <AnimatePresence>

            {status && (

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mt-6 flex justify-center items-center gap-2 text-sm ${
                  status === "success"
                    ? "text-[#92fe9d]"
                    : "text-[#ff6b6b]"
                }`}
              >

                {status === "success" ? (
                  <>
                    <FaCheckCircle />
                    Message sent successfully
                  </>
                ) : (
                  <>
                    <FaExclamationCircle />
                    Something went wrong
                  </>
                )}

              </motion.div>

            )}

          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;