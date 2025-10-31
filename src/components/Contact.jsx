import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "your_service_id", // replace with EmailJS Service ID
        "your_template_id", // replace with EmailJS Template ID
        form.current,
        "your_user_id" // replace with EmailJS User ID
      )
      .then(
        () => {
          setStatus("✅ Message Sent Successfully!");
          setLoading(false);
          setFormData({ name: "", email: "", message: "" });
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again!");
          setLoading(false);
          console.error(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center 
                 bg-gradient-to-r from-gray-100 via-white to-gray-100 
                 dark:from-gray-900 dark:via-black dark:to-gray-900 
                 text-gray-900 dark:text-white 
                 px-6 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
          className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full top-[-100px] left-[-100px] blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
          className="absolute w-[300px] h-[300px] bg-pink-500/20 rounded-full bottom-[-80px] right-[-80px] blur-3xl"
        />
      </div>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/80 dark:bg-gray-800/80 
                   backdrop-blur-md p-8 rounded-2xl shadow-2xl 
                   w-full max-w-md space-y-6 
                   border border-gray-300 dark:border-gray-700 
                   transition-colors duration-500"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Let’s build something amazing together 🚀
        </p>

        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="peer w-full p-4 rounded-xl 
                       bg-gray-100 dark:bg-gray-700 
                       border border-gray-300 dark:border-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       text-gray-900 dark:text-white 
                       transition-colors duration-500"
          />
          <label
            className={`absolute left-4 text-sm transition-all duration-300 pointer-events-none
                        ${formData.name
              ? "top-1 text-blue-600 dark:text-blue-400 text-sm"
              : "top-4 text-gray-500 dark:text-gray-400 text-base"}`}
          >
            Your Name
          </label>
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="peer w-full p-4 rounded-xl 
                       bg-gray-100 dark:bg-gray-700 
                       border border-gray-300 dark:border-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       text-gray-900 dark:text-white 
                       transition-colors duration-500"
          />
          <label
            className={`absolute left-4 text-sm transition-all duration-300 pointer-events-none
                        ${formData.email
              ? "top-1 text-blue-600 dark:text-blue-400 text-sm"
              : "top-4 text-gray-500 dark:text-gray-400 text-base"}`}
          >
            Your Email
          </label>
        </div>

        {/* Message Input */}
        <div className="relative">
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="peer w-full p-4 rounded-xl 
                       bg-gray-100 dark:bg-gray-700 
                       border border-gray-300 dark:border-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       text-gray-900 dark:text-white resize-none 
                       transition-colors duration-500"
          />
          <label
            className={`absolute left-4 text-sm transition-all duration-300 pointer-events-none
                        ${formData.message
              ? "top-1 text-blue-600 dark:text-blue-400 text-sm"
              : "top-4 text-gray-500 dark:text-gray-400 text-base"}`}
          >
            Your Message
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg 
                      ${loading
              ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed text-white"
              : "bg-gradient-to-r from-blue-500 to-pink-500 hover:scale-105 hover:shadow-2xl text-white"}`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Status Message */}
        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`text-center mt-3 ${status.includes("✅") ? "text-green-500" : "text-red-500"}`}
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}
