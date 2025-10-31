import React, { useState, useEffect, useRef } from "react";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaComments,
  FaTimes,
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaFileAlt,
  FaCertificate,
  FaStream,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeLink, setActiveLink] = useState("home");
  const [chatOpen, setChatOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chatStatus, setChatStatus] = useState(null);
  const chatForm = useRef();

  // ✅ Links with new sections (Timeline + Certificates)
  const links = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaTools /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Timeline", href: "#timeline", icon: <FaStream /> },
    { name: "Certifications", href: "#certificate", icon: <FaCertificate /> },
    { name: "Resume", href: "\\AniketMali Resume java.pdf", icon: <FaFileAlt />, isResume: true },
  ];

  // ✅ Dark Mode Toggle (fixed + persistent)
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Active link highlight on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      links.forEach((link) => {
        if (!link.isResume) {
          const section = document.querySelector(link.href);
          if (section) {
            if (
              scrollPos >= section.offsetTop &&
              scrollPos < section.offsetTop + section.offsetHeight
            ) {
              setActiveLink(link.name.toLowerCase());
            }
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  // Send chat message via EmailJS
  const sendChat = (e) => {
    e.preventDefault();
    setLoading(true);
    setChatStatus(null);
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        chatForm.current,
        "your_user_id"
      )
      .then(
        () => {
          setChatStatus("✅ Message Sent Successfully!");
          setLoading(false);
          chatForm.current.reset();
        },
        (error) => {
          setChatStatus("❌ Failed to send message!");
          setLoading(false);
          console.error(error.text);
        }
      );
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="w-full flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <a
            href="#home"
            className="ml-2 text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400"
          >
            Aniket
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center text-lg">
            {links.map((link) => (
              <li key={link.name} className="relative group flex items-center gap-1">
                {link.isResume ? (
                  <a
                    href={link.href}
                    target="_blank"
                    className="px-5 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full text-black font-bold shadow-xl hover:scale-105 transition transform flex items-center gap-2"
                  >
                    {link.icon} {link.name}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    className={`px-2 py-1 font-medium transition-all flex items-center gap-1 ${
                      activeLink === link.name.toLowerCase()
                        ? "text-blue-400"
                        : "text-gray-800 dark:text-gray-300"
                    }`}
                  >
                    {link.icon} {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Dark Mode + Social Icons + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition text-lg md:text-xl"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Social Icons Desktop */}
            <div className="hidden md:flex gap-4 text-xl">
              <motion.a
                href="https://github.com/Aniketm09"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  textShadow: "0px 0px 12px rgba(59,130,246,0.9)",
                }}
                className="text-gray-800 dark:text-gray-300 hover:text-blue-400 transition"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/aniket-mali-a912m/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  textShadow: "0px 0px 12px rgba(59,130,246,0.9)",
                }}
                className="text-gray-800 dark:text-gray-300 hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="https://twitter.com/aniket"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  textShadow: "0px 0px 12px rgba(59,130,246,0.9)",
                }}
                className="text-gray-800 dark:text-gray-300 hover:text-blue-400 transition"
              >
                <FaTwitter />
              </motion.a>

              <motion.a
                href="https://wa.me/918799860186"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  textShadow: "0px 0px 12px rgba(59,130,246,0.9)",
                }}
                className="text-gray-800 dark:text-gray-300 hover:text-blue-400 transition"
              >
                <FaWhatsapp />
              </motion.a>

              <motion.a
                href="https://mail.google.com/mail/u/1/#inbox?compose=new"
                whileHover={{
                  scale: 1.3,
                  textShadow: "0px 0px 12px rgba(59,130,246,0.9)",
                }}
                className="text-gray-800 dark:text-gray-300 hover:text-blue-400 transition"
              >
                <FaEnvelope />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-3xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-6 z-50 text-2xl"
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 transition ${
                    activeLink === link.name.toLowerCase()
                      ? "text-blue-400"
                      : "text-gray-800 dark:text-gray-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                  target={link.isResume ? "_blank" : "_self"}
                >
                  {link.icon} {link.name}
                </a>
              ))}

              {/* Social Icons in Mobile Menu */}
              <div className="flex gap-6 mt-6 text-3xl">
                <motion.a
                  href="https://github.com/Aniketm09"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3 }}
                  className="text-gray-800 dark:text-gray-300 hover:text-blue-400 transition"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/aniket-mali-a912m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3 }}
                  className="text-gray-800 dark:text-gray-300 hover:text-blue-400 transition"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://twitter.com/aniket"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3 }}
                  className="text-gray-800 dark:text-gray-300 hover:text-blue-400 transition"
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  href="https://wa.me/918799860186"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3 }}
                  className="text-gray-800 dark:text-gray-300 hover:text-blue-400 transition"
                >
                  <FaWhatsapp />
                </motion.a>
                <motion.a
                  href="https://mail.google.com/mail/u/1/#inbox?compose=new"
                  whileHover={{ scale: 1.3 }}
                  className="text-gray-800 dark:text-gray-300 hover:text-blue-400 transition"
                >
                  <FaEnvelope />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="p-5 bg-blue-500 text-white rounded-full shadow-2xl hover:scale-110 transition transform text-2xl"
          onClick={() => setChatOpen(!chatOpen)}
        >
          {chatOpen ? <FaTimes /> : <FaComments />}
        </button>

        {/* Chat Box */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="absolute bottom-20 right-0 w-96 md:w-96 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                Chat with me
              </h3>
              <form ref={chatForm} onSubmit={sendChat} className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`mt-2 py-3 rounded-xl font-semibold text-white transition ${
                    loading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-500 to-pink-500 hover:scale-105"
                  }`}
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
              {chatStatus && (
                <p
                  className={`mt-3 text-sm ${
                    chatStatus.includes("✅")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {chatStatus}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
