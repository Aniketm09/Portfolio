import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 
                 py-12 px-6 relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* About / Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Aniket Mali
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Building intelligent systems. Learning fast. Creating impact.
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Sangli, India</p>
        </motion.div>

        {/* Contact / Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">
              <FaEnvelope />{" "}
              <a href="mailto:aniketmali0912@gmail.com">
                aniketmali0912@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition cursor-pointer">
              <FaWhatsapp /> <a href="https://wa.me/8799860186">WhatsApp</a>
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">
              <a href="#schedule">Schedule a Meeting</a>
            </li>
          </ul>
        </motion.div>

        {/* Connect / Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Connect
          </h3>
          <div className="flex gap-6 text-2xl">
            <motion.a
              href="https://github.com/Aniketm09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#000" }}
              className="text-gray-600 dark:text-gray-400 transition"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aniket-mali-a912m/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#0e76a8" }}
              className="text-gray-600 dark:text-gray-400 transition"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:aniketmali0912@gmail.com"
              whileHover={{ scale: 1.2, color: "#f97316" }}
              className="text-gray-600 dark:text-gray-400 transition"
            >
              <FaEnvelope />
            </motion.a>
          </div>

          {/* Support / CTA */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Support My Work
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Let's discuss your project!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10"></div>

      {/* Copyright */}
      <p className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm">
        © 2025 Aniket Mali. All rights reserved.
      </p>
    </footer>
  );
}
