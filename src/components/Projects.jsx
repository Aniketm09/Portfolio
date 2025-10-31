import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import projects from "../data/Project"; // Import the project data

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const categories = ["All", "Frontend", "Fullstack"];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setScrollProgress((scrollLeft / (scrollWidth - clientWidth)) * 100);
    }
  };

  return (
    <section
      id="projects"
      className="relative py-16 px-6 
                 bg-gradient-to-r from-gray-100 via-white to-gray-100 
                 dark:from-gray-900 dark:via-black dark:to-gray-900 
                 text-gray-900 dark:text-white transition-colors duration-500"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400"
      >
        🚀 My Projects
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full font-medium text-sm transition ${
              filter === cat
                ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Scroll Arrows */}
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 
                     bg-gray-200/60 dark:bg-gray-800/60 hover:bg-gray-300 dark:hover:bg-gray-700 
                     text-gray-800 dark:text-white p-2 rounded-full shadow-md transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 
                     bg-gray-200/60 dark:bg-gray-800/60 hover:bg-gray-300 dark:hover:bg-gray-700 
                     text-gray-800 dark:text-white p-2 rounded-full shadow-md transition"
        >
          <FaChevronRight />
        </button>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            style={{ width: `${scrollProgress}%` }}
            className="h-1 bg-gradient-to-r from-blue-500 to-pink-500"
          />
        </div>

        {/* Projects Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 px-2"
        >
          {projects
            .filter((p) => filter === "All" || p.category === filter)
            .map((p) => (
              <Tilt
                key={p.id}
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.03}
                transitionSpeed={400}
                className="relative min-w-[280px] md:min-w-[350px] 
                           bg-gray-100 dark:bg-gray-900 rounded-3xl shadow-xl 
                           border border-gray-300 dark:border-gray-700 
                           hover:border-blue-400 hover:shadow-[0_0_40px_rgb(59,130,246)] 
                           transition-all p-5 flex flex-col snap-center overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-blue-500/10 dark:bg-blue-700 text-blue-700 dark:text-white rounded-full shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <Link
                    to={`/projects/${p.id}`}
                    className="flex-1 text-center px-3 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition text-sm flex items-center justify-center gap-1"
                  >
                    View Details
                  </Link>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm flex items-center justify-center gap-1"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition text-sm flex items-center justify-center gap-1"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </Tilt>
            ))}
        </div>
      </div>
    </section>
  );
}
