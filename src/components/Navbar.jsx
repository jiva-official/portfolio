// src/components/Navbar.jsx
export default function Navbar({ onResumeClick }) {
    return (
      <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Jiva.dev</h1>
        <ul className="hidden md:flex space-x-6 font-medium items-center">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          <li>
            <button
              onClick={onResumeClick}
              className="text-blue-500 border px-3 py-1 border-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
            >
              Resume
            </button>
          </li>
        </ul>
      </nav>
    );
  }
  