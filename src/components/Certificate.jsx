import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaDownload,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const certificates = [
  {
    title: "Java Full Stack Developer",
    issuer: "Capgemini",
    year: "2024",
    description: "Comprehensive training on Java, Spring Boot, and full-stack development.",
    category: "Web Development",
    link: "/certificates/java-fullstack.pdf",
  },
  {
    title: "Python Programming",
    issuer: "Online Certification",
    year: "2024",
    description: "Proficient in Python programming for data processing and automation.",
    category: "Programming",
    link: "/certificates/python.pdf",
  },
  {
    title: "Computer Networking",
    issuer: "Online Certification",
    year: "2024",
    description: "Understanding of computer networks, protocols, and communication systems.",
    category: "Networking",
    link: "/certificates/networking.pdf",
  },
  {
    title: "C & C++ Programming",
    issuer: "Online Certification",
    year: "2024",
    description: "Strong foundation in structured and object-oriented programming.",
    category: "Programming",
    link: "/certificates/c-cpp.pdf",
  },
  {
    title: "HTML & CSS",
    issuer: "Online Certification",
    year: "2024",
    description: "Mastered front-end web development fundamentals and responsive design.",
    category: "Web Development",
    link: "/certificates/html-css.pdf",
  },
  {
    title: "JavaScript",
    issuer: "Online Certification",
    year: "2024",
    description: "Deep understanding of JavaScript for interactive web interfaces.",
    category: "Web Development",
    link: "/certificates/javascript.pdf",
  },
  {
    title: "React.js",
    issuer: "Online Certification",
    year: "2024",
    description: "Advanced React concepts including hooks, routing, and component design.",
    category: "Web Development",
    link: "/certificates/react.pdf",
  },
  {
    title: "Cloud Computing",
    issuer: "Online Certification",
    year: "2024",
    description: "Knowledge of cloud infrastructure and deployment models.",
    category: "Cloud",
    link: "/certificates/cloud.pdf",
  },
  {
    title: "Machine Learning",
    issuer: "Online Certification",
    year: "2024",
    description: "Hands-on experience with ML algorithms using Python and TensorFlow.",
    category: "AI/ML",
    link: "/certificates/machine-learning.pdf",
  },
  {
    title: "Generative AI",
    issuer: "Online Certification",
    year: "2024",
    description: "Explored AI tools and models such as ChatGPT, DALL·E, and prompt engineering.",
    category: "AI/ML",
    link: "/certificates/generative-ai.pdf",
  },
];

export default function Certificates() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="certificates"
      className="relative py-20 
                 bg-gradient-to-b from-gray-100 via-white to-gray-100 
                 dark:from-gray-900 dark:via-black dark:to-gray-900 
                 text-gray-900 dark:text-white 
                 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-pink-600 dark:text-pink-400 mb-12 flex items-center justify-center gap-3">
          <FaCertificate /> Certificates
        </h2>

        {/* Scroll Arrows */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 
                       bg-gray-300/60 dark:bg-gray-700/50 
                       hover:bg-gray-400 dark:hover:bg-gray-700 
                       text-gray-800 dark:text-white 
                       p-3 rounded-full shadow-lg transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 
                       bg-gray-300/60 dark:bg-gray-700/50 
                       hover:bg-gray-400 dark:hover:bg-gray-700 
                       text-gray-800 dark:text-white 
                       p-3 rounded-full shadow-lg transition"
          >
            <FaChevronRight />
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto py-6 
                       scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700 
                       scrollbar-track-gray-200 dark:scrollbar-track-gray-900 
                       snap-x snap-mandatory"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="min-w-[300px] md:min-w-[350px] 
                           bg-white dark:bg-gray-800 
                           p-6 rounded-3xl shadow-2xl 
                           border border-gray-300 dark:border-gray-700 
                           hover:scale-105 transition transform 
                           snap-center flex-shrink-0 relative"
              >
                {/* Category Badge */}
                <span className="absolute top-3 right-3 text-xs bg-blue-500 px-2 py-1 rounded-full text-white">
                  {cert.category}
                </span>

                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-300 mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  {cert.issuer} • {cert.year}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 
                               bg-gradient-to-r from-blue-500 to-blue-600 
                               text-white px-4 py-2 rounded-lg font-semibold 
                               shadow-md hover:scale-105 transition transform"
                  >
                    <FaExternalLinkAlt /> View
                  </a>
                  <a
                    href={cert.link}
                    download
                    className="flex items-center gap-2 
                               bg-gradient-to-r from-green-500 to-green-600 
                               text-white px-4 py-2 rounded-lg font-semibold 
                               shadow-md hover:scale-105 transition transform"
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
