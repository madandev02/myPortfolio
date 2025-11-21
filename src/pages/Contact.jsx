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
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("LZLck44kERPGZdzDi"); // PUBLIC KEY
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Anti-bot validation
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
      className="relative w-full py-24 px-6 text-[#e6edf3] overflow-hidden"
    >
      {/* 🌌 Soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1117]/60 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,201,255,0.07)_0%,transparent_70%)] blur-3xl"></div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,201,255,0.4)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ¡Entremos en contacto!
        </motion.h2>

        {/* 🧊 Form container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#161b22]/40 backdrop-blur-sm border border-[#1f2a36]/70 rounded-3xl p-10 shadow-md hover:shadow-[#00c9ff]/30 transition-all duration-300"
        >
          <p className="text-[#9ba6b4] mb-8">
            ¿Tienes una pregunta, proyecto u oportunidad? ¡Me encantará leerte! 👋
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Hidden honeypot */}
            <input
              type="text"
              name="honeypot"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#00c9ff] text-lg" />
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                required
                className="w-full border border-[#30363d]/80 rounded-full pl-12 pr-4 py-3 bg-[#0d1117]/70 text-[#e6edf3] placeholder-[#9ba6b4] focus:outline-none focus:ring-2 focus:ring-[#00c9ff]/60 transition"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#00c9ff] text-lg" />
              <input
                type="email"
                name="email"
                placeholder="Tu correo"
                required
                className="w-full border border-[#30363d]/80 rounded-full pl-12 pr-4 py-3 bg-[#0d1117]/70 text-[#e6edf3] placeholder-[#9ba6b4] focus:outline-none focus:ring-2 focus:ring-[#00c9ff]/60 transition"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Escribe tu mensaje..."
              required
              rows={5}
              maxLength={600}
              className="border border-[#30363d]/80 rounded-2xl px-4 py-3 bg-[#0d1117]/70 text-[#e6edf3] placeholder-[#9ba6b4] resize-none focus:outline-none focus:ring-2 focus:ring-[#00c9ff]/60 transition"
            ></textarea>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center justify-center gap-2 text-lg font-semibold bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] text-[#0a0f16] px-8 py-3 rounded-full shadow-md hover:shadow-[#00c9ff]/40 transition-all ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <span className="animate-pulse">Enviando...</span>
              ) : (
                <>
                  <FaPaperPlane />
                  Enviar mensaje
                </>
              )}
            </motion.button>
          </form>

          {/* Status feedback */}
          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-8 p-4 rounded-xl flex items-center justify-center gap-3 text-sm font-medium ${
                  status === "success"
                    ? "bg-[#00c9ff]/10 text-[#92fe9d] border border-[#00c9ff]/30"
                    : "bg-[#ff4d4d]/10 text-[#ff6b6b] border border-[#ff6b6b]/30"
                }`}
              >
                {status === "success" ? (
                  <>
                    <FaCheckCircle className="text-[#92fe9d] text-lg" />
                    <span>¡Mensaje enviado con éxito! 🚀</span>
                  </>
                ) : (
                  <>
                    <FaExclamationCircle className="text-[#ff6b6b] text-lg" />
                    <span>Algo salió mal. Inténtalo nuevamente.</span>
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
