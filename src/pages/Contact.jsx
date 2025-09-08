import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("LZLck44kERPGZdzDi"); // PUBLIC KEY
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🚨 Honeypot: si el bot rellena este campo oculto, bloqueamos el envío
    if (formRef.current.honeypot.value) {
      setStatus("error");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_kdgi16u", // SERVICE ID
        "template_bdvrecl", // TEMPLATE ID
        formRef.current,
        "LZLck44kERPGZdzDi" // PUBLIC KEY
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
      className="w-full min-h-screen py-20 px-4 scroll-mt-36"
    >
      <div className="max-w-lg mx-auto text-center relative z-10">
        {/* Section title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        {/* Contact form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-gray-200"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            {/* 🚨 Honeypot hidden field (anti-bots) */}
            <input
              type="text"
              name="honeypot"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Name field */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded-full pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Email field */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full border border-gray-300 rounded-full pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Message field */}
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={5}
              maxLength={500} // 🔒 límite de caracteres
              className="border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-md ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Status messages */}
          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-6 p-4 rounded-lg flex items-center gap-3 text-sm ${
                  status === "success"
                    ? "bg-green-100 text-green-800 border border-green-300"
                    : "bg-red-100 text-red-800 border border-red-300"
                }`}
              >
                {status === "success" ? (
                  <>
                    <FaCheckCircle className="text-green-600 text-lg" />
                    <span>
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </>
                ) : (
                  <>
                    <FaExclamationCircle className="text-red-600 text-lg" />
                    <span>
                      Oops! Something went wrong or spam detected. Please try
                      again.
                    </span>
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
