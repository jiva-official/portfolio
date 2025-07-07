export default function Resume() {
    return (
      <section id="resume" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Resume</h2>
  
          <div className="mb-6">
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
  
          <div className="w-full h-[80vh] border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="/resume.pdf"
              title="Resume Viewer"
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
  