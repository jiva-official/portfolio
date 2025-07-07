
import { useEffect } from "react";

export default function ResumeModal({ show, onClose }) {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[95%] md:w-[80%] h-[90%] bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-300 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-300 dark:border-gray-700 z-50">
          <a
            href="/resume.pdf"
            download
            className="text-sm text-white bg-grey-600 hover:bg-blue-700 px-4 py-2 rounded font-medium shadow"
          >
            ⬇️ Download Resume
          </a>

          <button
            onClick={onClose}
            className="text-sm text-black bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-medium shadow"
          >
            ✕ Close
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-full pt-12">
          <iframe
            src="/resume.pdf"
            title="Resume Viewer"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
