
import { useState } from "react";
import Navbar from "./components/Navbar";
import ResumeModal from "./components/ResumeModal";
import Hero from "./components/Hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      <AnimatedBackground />
      <Navbar onResumeClick={() => setShowResume(true)} />
      <ResumeModal show={showResume} onClose={() => setShowResume(false)} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}