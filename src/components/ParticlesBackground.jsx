import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/Project";
import ParticlesBackground from "./ParticlesBackground"; // optional particles background
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">
        <p>Project not found</p>
      </div>
    );

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Optional Particles Background */}
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto py-16 px-6">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-block mb-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition"
        >
          ← Back to Projects
        </Link>

        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
          {project.title}
        </h1>

        {/* Hero Image */}
        <img
          src={project.img}
          alt={project.title}
          className="w-full rounded-2xl shadow-xl mb-6 border border-gray-700"
        />

        {/* Short Description */}
        <p className="text-gray-300 text-lg mb-6">{project.desc}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full text-sm shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Sections */}
        <div className="grid gap-8">
          {/* Problem Statement */}
          {project.problem && (
            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                Problem Statement
              </h2>
              <p className="text-gray-300">{project.problem}</p>
            </section>
          )}

          {/* System Architecture */}
          {project.architecture && (
            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                System Architecture
              </h2>
              <p className="text-gray-300">{project.architecture}</p>
            </section>
          )}

          {/* Key Challenges */}
          {project.challenges && (
            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                Key Challenges
              </h2>
              <ul className="list-disc list-inside text-gray-300">
                {project.challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Features */}
          {project.features && (
            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                Key Features
              </h2>
              <ul className="list-disc list-inside text-gray-300">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Technical Implementation */}
          {project.implementation && (
            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                Technical Implementation
              </h2>
              <p className="text-gray-300">{project.implementation}</p>
            </section>
          )}

          {/* Timeline */}
          {project.timeline && (
            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                Project Timeline
              </h2>
              <p className="text-gray-300">{project.timeline}</p>
            </section>
          )}

          {/* Project Info */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              Project Info
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
              <p>
                <span className="font-semibold">Duration:</span> {project.duration}
              </p>
              <p>
                <span className="font-semibold">Role:</span> {project.role}
              </p>
              <p>
                <span className="font-semibold">Category:</span> {project.category}
              </p>
            </div>
          </section>

          {/* Action Buttons */}
          <section className="flex flex-wrap gap-4 mt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center gap-2 transition"
            >
              <FaGithub /> Source Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg flex items-center gap-2 transition"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
