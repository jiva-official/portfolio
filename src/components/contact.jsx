import { motion } from "framer-motion";
import { contact } from "../data/contact";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.form
          className="grid gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submission is disabled in demo mode.");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>

        <div className="mt-10 text-center space-x-6">
          <a href={contact.github} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={contact.linkedin} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
            Email
          </a>
          <a href={contact.whatsapp} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
