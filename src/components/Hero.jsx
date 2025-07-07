
import { motion } from "framer-motion";
import { profile } from "../data/Profile";

export default function Hero() {
  return (
    <section id="home" className="mx-auto min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
      <motion.h2 
        className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-600">{profile.name}</span>
      </motion.h2>
      <motion.p 
        className="mt-4 text-lg md:text-xl max-w-2xl text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }}
      >
        {profile.intro}
      </motion.p>
      <motion.a 
        href="#projects"
        className="mt-6 inline-block bg-black-600 text-black px-6 py-3 rounded-xl shadow-md hover:bg-grey-700 transition"
        initial={{ scale: 0.9 }} 
        animate={{ scale: 1 }} 
        transition={{ delay: 1, duration: 0.3 }}
      >
        View Projects
      </motion.a>
    </section>
  );
}