import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaSchool,
  FaLaptopCode,
} from "react-icons/fa";

const timelineData = [
  {
    year: "2019",
    title: "10th Grade Completed",
    description: "Secured 83.20% marks in Science stream.",
    category: "School",
    icon: <FaSchool />,
    color: "bg-blue-500",
  },
  {
    year: "2021",
    title: "12th Grade Completed",
    description: "Completed Science stream with 68.83% marks.",
    category: "School",
    icon: <FaSchool />,
    color: "bg-green-500",
  },
  {
    year: "2021-2024",
    title: "BCA - Bachelor of Computer Applications",
    description:
      "Graduated with a CGPA of 7.30, learning programming, database management, and web development.",
    category: "College",
    icon: <FaGraduationCap />,
    color: "bg-purple-500",
  },
  {
    year: "2024-2026",
    title: "MCA - Master of Computer Applications",
    description:
      "Currently 1st year completed with CGPA 7.42, focusing on Software Development, Cloud Computing, and Advanced Web Technologies.",
    category: "College",
    icon: <FaGraduationCap />,
    color: "bg-pink-500",
  },
  {
    year: "2025",
    title: "Fresher - Full Stack Developer",
    description:
      "Worked on MERN stack projects, building responsive and scalable web applications.",
    category: "Work",
    icon: <FaLaptopCode />,
    color: "bg-yellow-500",
  },
  {
    year: "2026",
    title: "Certifications",
    description:
      "Planned certifications in AWS Solutions Architect & Advanced React.",
    category: "Certificate",
    icon: <FaAward />,
    color: "bg-orange-500",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-20 
                 bg-gradient-to-b from-gray-100 via-white to-gray-100 
                 dark:from-gray-900 dark:via-black dark:to-gray-900 
                 text-gray-900 dark:text-white 
                 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-12">
          My Journey
        </h2>

        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300 dark:border-gray-700"></div>

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`mb-12 w-full md:w-1/2 relative ${
                  isLeft ? "md:left-0 md:pr-8" : "md:left-1/2 md:pl-8"
                }`}
              >
                {/* Connector dot */}
                <div
                  className={`absolute top-0 md:top-2 ${
                    isLeft ? "right-[-18px]" : "left-[-18px]"
                  } w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg ${item.color} transition-transform hover:scale-125`}
                >
                  {item.icon}
                </div>

                {/* Card */}
                <div
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg 
                             border border-gray-300 dark:border-gray-700 
                             hover:scale-105 transition transform"
                >
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mt-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {item.description}
                  </p>
                  <span
                    className="text-xs mt-2 inline-block px-2 py-1 
                               bg-gray-200 dark:bg-gray-700 
                               text-gray-800 dark:text-gray-200 
                               rounded-full"
                  >
                    {item.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
