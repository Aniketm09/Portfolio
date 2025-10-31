import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function About() {
  const [activeTab, setActiveTab] = useState("Languages");

  const skills = {
    Languages: ["Java", "Python", "JavaScript/TypeScript", "C/C++", "Rust"],
    Frameworks: ["React", "Node.js", "Express", "Tailwind CSS", "Spring Boot"],
    Domains: ["Full Stack Development", "AI/ML", "Web Apps", "APIs", "Database Systems"],
    Tools: ["Git & GitHub", "Docker", "VS Code", "Postman", "Figma"],
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 
                 dark:from-gray-900 dark:via-black dark:to-gray-900 
                 text-gray-900 dark:text-white px-6 py-16 transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Get to know me, my skills, and my journey in the world of technology 🚀
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left: Who I Am */}
        <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-colors duration-500">
          <h3 className="text-2xl font-bold mb-3">Who I Am</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-6 leading-relaxed">
            I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Aniket</span>, a
            passionate Full Stack Developer with a love for creating intelligent
            and user-friendly systems. My journey in tech has taken me from
            classroom theory to hands-on projects in modern web applications,
            scalable systems, and cutting-edge technology.
          </p>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
            Beyond coding, I'm a problem-solver who loves learning new
            technologies and building solutions that are not only technically
            sound but also impactful for users.
          </p>

          {/* Social & Resume Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/Aniketm09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aniket-mali-a912m/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/u/1/#inbox?compose=new"
              className="p-3 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
            <a
              href="/resume.pdf"
              download
              className="p-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition"
            >
              <FaDownload />
            </a>
          </div>
        </div>

        {/* Right: Skills & Expertise */}
        <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-colors duration-500">
          <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-6">What I bring to the table 💡</p>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-gray-400 dark:border-gray-700">
            {Object.keys(skills).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-3 font-medium transition-colors duration-300 ${
                  activeTab === tab
                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 dark:border-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Skills List */}
          <ul className="space-y-3">
            {skills[activeTab].map((item) => (
              <li
                key={item}
                className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <span>{item}</span>
                <span className="text-xs bg-gray-300 dark:bg-gray-900 px-2 py-1 rounded">
                  {activeTab.slice(0, -1)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
