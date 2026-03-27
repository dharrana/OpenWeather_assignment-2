import React from "react";

const Navbar = ({ setPage, runWeatherCheck, loading, page }) => {
  return (
    <nav
      style={{
        background: "rgba(10, 15, 30, 0.75)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.4)",
      }}
      className="sticky top-0 z-50 px-8 py-4 flex justify-between items-center"
    >
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
            boxShadow: "0 0 20px rgba(59,130,246,0.4)",
          }}
          className="w-9 h-9 rounded-xl flex items-center justify-center"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        </div>
        <div>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "-0.02em",
            }}
            className="text-white font-bold text-lg tracking-tight"
          >
            OpenWeather
          </span>
          <p
            className="text-xs text-blue-400/70 font-medium tracking-widest uppercase"
            style={{ fontSize: "9px" }}
          >
            Delay Predictor
          </p>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-1">
        {[
          {
            id: "dashboard",
            label: "Dashboard",
            icon: (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            ),
          },
          {
            id: "orders",
            label: "Active Orders",
            icon: (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                <path d="m7.5 4.27 9 5.15" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" y1="22" x2="12" y2="12" />
                <circle cx="18.5" cy="15.5" r="2.5" />
                <path d="M20.27 17.27 22 19" />
              </svg>
            ),
          },
          {
            id: "ai-log",
            label: "AI Log",
            icon: (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2v4" />
                <path d="M12 18v4" />
                <path d="M4.93 4.93l2.83 2.83" />
                <path d="M16.24 16.24l2.83 2.83" />
                <path d="M2 12h4" />
                <path d="M18 12h4" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ),
          },
        ].map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => setPage(id)}
            style={{
              background: page === id ? "rgba(59,130,246,0.15)" : "transparent",
              border:
                page === id
                  ? "1px solid rgba(59,130,246,0.3)"
                  : "1px solid transparent",
              color: page === id ? "#93c5fd" : "rgba(255,255,255,0.5)",
              transition: "all 0.2s ease",
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover:text-white"
          >
            {icon}
            {label}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={runWeatherCheck}
          disabled={loading}
          style={{
            background: loading
              ? "rgba(59,130,246,0.4)"
              : "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            boxShadow: loading ? "none" : "0 4px 20px rgba(59,130,246,0.35)",
            border: "1px solid rgba(255,255,255,0.1)",
            transition: "all 0.2s ease",
          }}
          className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Checking...
            </>
          ) : (
            <>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Run Weather Check
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
