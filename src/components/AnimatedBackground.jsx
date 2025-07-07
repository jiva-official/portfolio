
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#4f46e5", stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: "#0ea5e9", stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>

        {/* Blob 1 */}
        <circle
          cx="30%"
          cy="40%"
          r="220"
          fill="url(#grad1)"
        >
          <animate attributeName="cx" values="30%;35%;30%" dur="14s" repeatCount="indefinite" />
          <animate attributeName="cy" values="40%;45%;40%" dur="10s" repeatCount="indefinite" />
        </circle>

        {/* Blob 2 */}
        <circle
          cx="70%"
          cy="60%"
          r="180"
          fill="url(#grad1)"
        >
          <animate attributeName="cx" values="70%;65%;70%" dur="12s" repeatCount="indefinite" />
          <animate attributeName="cy" values="60%;55%;60%" dur="9s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
