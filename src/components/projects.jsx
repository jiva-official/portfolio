
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg p-6 border dark:border-gray-700 transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                >
                  GitHub ↗
                </a>
                <a
                  href={project.live}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                >
                  Live Demo ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}