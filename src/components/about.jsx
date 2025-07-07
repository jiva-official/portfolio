
import { motion } from "framer-motion";
import { about } from "../data/about";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {about.description}
        </motion.p>

        <motion.div 
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center"
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {about.technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
