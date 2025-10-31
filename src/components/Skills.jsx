import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { SiPython } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" />, level: 85 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" />, level: 80 },
    { name: "React", icon: <FaReact className="text-blue-400 text-5xl" />, level: 85 },
    { name: "Node.js", icon: <FaNode className="text-green-500 text-5xl" />, level: 75 },
    { name: "Database", icon: <FaDatabase className="text-purple-500 text-5xl" />, level: 70 },
    { name: "Java", icon: <FaJava className="text-red-500 text-5xl" />, level: 75 },
    { name: "Python", icon: <SiPython className="text-yellow-300 text-5xl" />, level: 80 },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 
                 dark:from-gray-900 dark:via-black dark:to-gray-900 
                 text-gray-900 dark:text-white flex flex-col items-center justify-center 
                 px-6 py-16 transition-colors duration-500"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12"
      >
        ⚡ My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="flex flex-col items-center gap-4 group"
          >
            {/* Icon Circle */}
            <div className="p-6 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>

            {/* Name */}
            <p className="text-lg font-semibold">{skill.name}</p>

            {/* Progress Bar */}
            <div className="w-40 bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-blue-500 rounded-full"
              />
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
