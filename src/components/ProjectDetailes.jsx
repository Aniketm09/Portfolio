// src/components/ProjectDetailes.jsx
import React, { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaExclamationCircle, FaStar } from "react-icons/fa";
import projects from "../data/Project";

export default function ProjectDetailes() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const techRef = useRef(null);
  const featuresRef = useRef(null);
  const challengesRef = useRef(null);
  const [techScroll, setTechScroll] = useState(0);
  const [featScroll, setFeatScroll] = useState(0);
  const [chalScroll, setChalScroll] = useState(0);

  if (!project) return <p className="p-8 text-white">Project not found</p>;

  const handleScroll = (ref, setScroll) => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      setScroll((scrollLeft / (scrollWidth - clientWidth)) * 100);
    }
  };

  const Card = ({ title, children }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-3xl p-8 mb-12 shadow-lg border border-gray-700"
    >
      <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
      {children}
    </motion.div>
  );

  const FlipCard = ({ front, back }) => (
    <div className="perspective w-52 h-36 cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold">
          {front}
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-semibold p-4 text-center">
          {back}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Hero */}
      <div className="relative w-full bg-gradient-to-r from-blue-700 via-blue-800 to-purple-700 rounded-b-3xl p-16 md:p-24 text-center md:text-left">
        <Link
          to="/"
          className="absolute top-6 left-6 px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg shadow hover:bg-gray-100 transition z-50"
        >
          ← Back
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 text-white"
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-200 max-w-3xl text-lg md:text-xl mb-6"
        >
          {project.desc}
        </motion.p>

        <div className="flex gap-4 flex-wrap justify-center md:justify-start mb-6">
          <span className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md shadow font-semibold">{project.role}</span>
          <span className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md shadow font-semibold">{project.category}</span>
          <span className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md shadow font-semibold">{project.duration}</span>
        </div>

        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 flex items-center gap-2 font-semibold shadow"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 flex items-center gap-2 font-semibold shadow"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-24 py-16 space-y-12">
        <Card title="About Project">{project.about}</Card>

        {/* Horizontal Technology Section */}
        {project.tech && (
          <Card title="Technology & Tools">
            <div
              ref={techRef}
              onScroll={() => handleScroll(techRef, setTechScroll)}
              className="flex gap-4 overflow-x-auto py-4 scrollbar-hide snap-x snap-mandatory"
            >
              {project.tech.map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="min-w-[160px] p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow text-white font-semibold text-center cursor-pointer"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
            <div className="h-1 bg-gray-700 rounded-full overflow-hidden mt-2">
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: `${techScroll}%` }} />
            </div>
          </Card>
        )}

        {/* Vertical Sections */}
        {project.problem && <Card title="Problem Statement">{project.problem}</Card>}
        {project.architecture && <Card title="System Architecture">{project.architecture}</Card>}

        {/* Horizontal Features Section */}
        {project.features && (
          <Card title="Key Features">
            <div
              ref={featuresRef}
              onScroll={() => handleScroll(featuresRef, setFeatScroll)}
              className="flex gap-4 overflow-x-auto py-4 scrollbar-hide snap-x snap-mandatory"
            >
              {project.features.map((f, idx) => (
                <FlipCard key={idx} front={<FaStar />} back={f} />
              ))}
            </div>
          </Card>
        )}

        {/* Horizontal Challenges Section */}
        {project.challenges && (
          <Card title="Key Challenges">
            <div
              ref={challengesRef}
              onScroll={() => handleScroll(challengesRef, setChalScroll)}
              className="flex gap-4 overflow-x-auto py-4 scrollbar-hide snap-x snap-mandatory"
            >
              {project.challenges.map((c, idx) => (
                <FlipCard key={idx} front={<FaExclamationCircle />} back={c} />
              ))}
            </div>
          </Card>
        )}

        {project.technical && (
          <Card title="Technical Implementation">
            <ul className="list-disc list-inside space-y-2">{project.technical.map((t, idx) => <li key={idx}>{t}</li>)}</ul>
          </Card>
        )}

        {project.timeline && <Card title="Project Timeline">{project.timeline}</Card>}
      </div>
    </div>
  );
}
