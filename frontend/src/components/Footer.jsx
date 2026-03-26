import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "rgba(10,15,30,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
      className="px-8 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <div
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
          }}
          className="w-5 h-5 rounded-md flex items-center justify-center"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        </div>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>
          OpenWeather — Delay Predictor
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px" }}>
          © 2026 OpenWeather
        </span>
        <div
          style={{
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
          }}
        />
        <div className="flex items-center gap-1.5">
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 8px rgba(16,185,129,0.6)",
            }}
          />
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>
            Systems operational
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
