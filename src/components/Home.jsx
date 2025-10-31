import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaArrowDown,
} from "react-icons/fa";

export default function UltimateHome() {
  const particlesInit = async (main) => await loadFull(main);

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 200, duration: 0.6 } },
    },
    particles: {
      color: { value: "#60A5FA" },
      links: { enable: true, color: "#60A5FA", distance: 180, opacity: 0.3 },
      move: { enable: true, speed: 1.5, random: true, outModes: "bounce" },
      number: { value: 80, density: { enable: true, area: 800 } },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 6 } },
    },
  };

  const techIcons = [
    { icon: FaReact, color: "#61DBFB" },
    { icon: FaNodeJs, color: "#68A063" },
    { icon: FaJsSquare, color: "#F7DF1E" },
    { icon: FaHtml5, color: "#E34F26" },
    { icon: FaCss3Alt, color: "#264DE4" },
    { icon: FaJava, color: "#007396" },
  ];

  const skills = [
    { name: "React", percentage: 90, color: "#61DBFB" },
    { name: "Node.js", percentage: 85, color: "#68A063" },
    { name: "Tailwind CSS", percentage: 80, color: "#38BDF8" },
    { name: "Java", percentage: 70, color: "#007396" },
    { name: "JavaScript", percentage: 90, color: "#F7DF1E" },
    { name: "HTML/CSS", percentage: 95, color: "#E34F26" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden 
                        bg-gray-50 text-gray-900 dark:bg-black dark:text-white px-6 transition-colors duration-500">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-20"
      />

      {/* Left Section: Intro */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I’m <span className="text-blue-500 dark:text-blue-400">Aniket</span> 👋
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer 💻", 2000,
              "React | Node.js | Tailwind | Java ⚡", 2000,
              "Creating Modern Web Experiences 🚀", 2000
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-lg"
        >
          I design and build interactive, scalable, and user-friendly web applications using
          <span className="text-blue-500 dark:text-blue-400"> React</span>,
          <span className="text-green-500 dark:text-green-400"> Node.js</span>,
          <span className="text-pink-500 dark:text-pink-400"> Tailwind CSS</span>, and
          <span className="text-red-500 dark:text-red-400"> Java</span>.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center md:justify-start mt-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 50px rgba(6, 88, 220, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-bold shadow-2xl text-lg transition-all duration-300"
          >
            Hire Me
          </motion.a>

          <motion.a
            href="\AniketMali Resume java.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 50px rgba(59,130,246,0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-500 dark:border-blue-400 hover:bg-blue-500 hover:text-white rounded-xl font-bold shadow-2xl text-lg transition-all duration-300"
          >
            View Resume
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center md:justify-start mt-6 text-2xl">
          {[{ icon: FaGithub, link: "https://github.com/aniket" },
            { icon: FaLinkedin, link: "https://linkedin.com/in/aniket" },
            { icon: FaTwitter, link: "https://twitter.com/aniket" }].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, color: "#3b82f6", rotate: [0, 15, -15, 0] }}
              className="transition-colors relative group"
            >
              <social.icon />
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {social.link.split("/")[2]}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Scroll Prompt */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-10 text-blue-500 dark:text-blue-400 text-3xl animate-bounce"
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>

      {/* Right Section: Profile + Skills */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center mt-10 md:mt-0 z-10 relative"
      >
        {/* Orbiting Tech Icons */}
        {techIcons.map((tech, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              top: 120 * Math.sin((i / techIcons.length) * Math.PI * 2),
              left: 120 * Math.cos((i / techIcons.length) * Math.PI * 2),
              color: tech.color,
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 25 + i * 5, ease: "linear" }}
          >
            <tech.icon />
          </motion.div>
        ))}

        {/* Skill Rings */}
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-4 opacity-25"
            style={{
              width: 220 + i * 40,
              height: 220 + i * 40,
              top: `-${i * 10}px`,
              left: `-${i * 10}px`,
              borderColor: skill.color,
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 25 + i * 5, ease: "linear" }}
          />
        ))}

        {/* Profile Image */}
        <motion.img
          src="\aniket pp.jpg"
          alt="Aniket"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-400 shadow-lg"
          whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0px 0px 50px rgba(59,130,246,0.8)" }}
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          dragElastic={0.2}
        />
      </motion.div>
    </section>
  );
}
