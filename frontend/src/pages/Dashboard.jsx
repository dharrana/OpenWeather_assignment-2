import React from "react";

const StatCard = ({ title, value, color, icon, trend }) => {
  const palette = {
    blue: {
      glow: "rgba(59,130,246,0.12)",
      border: "rgba(59,130,246,0.2)",
      accent: "#3b82f6",
      light: "#93c5fd",
      badge: "rgba(59,130,246,0.15)",
    },
    green: {
      glow: "rgba(16,185,129,0.12)",
      border: "rgba(16,185,129,0.2)",
      accent: "#10b981",
      light: "#6ee7b7",
      badge: "rgba(16,185,129,0.15)",
    },
    amber: {
      glow: "rgba(245,158,11,0.12)",
      border: "rgba(245,158,11,0.2)",
      accent: "#f59e0b",
      light: "#fcd34d",
      badge: "rgba(245,158,11,0.15)",
    },
    red: {
      glow: "rgba(239,68,68,0.12)",
      border: "rgba(239,68,68,0.2)",
      accent: "#ef4444",
      light: "#fca5a5",
      badge: "rgba(239,68,68,0.15)",
    },
  };

  const c = palette[color];

  return (
    <div
      style={{
        background: `linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `1px solid ${c.border}`,
        boxShadow: `0 8px 32px ${c.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = `0 16px 48px ${c.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = `0 8px 32px ${c.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`;
      }}
      className="rounded-2xl p-6 relative overflow-hidden"
    >
      {/* Subtle corner glow */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${c.accent}30 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div className="flex items-start justify-between mb-5">
        <div
          style={{
            background: c.badge,
            border: `1px solid ${c.border}`,
          }}
          className="w-10 h-10 rounded-xl flex items-center justify-center"
        >
          <span style={{ color: c.light }}>{icon}</span>
        </div>
        {trend !== undefined && (
          <span
            style={{
              background:
                trend >= 0 ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
              color: trend >= 0 ? "#6ee7b7" : "#fca5a5",
              border: `1px solid ${trend >= 0 ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)"}`,
              fontSize: "11px",
            }}
            className="px-2 py-1 rounded-lg font-medium"
          >
            {trend >= 0 ? "+" : ""}
            {trend}%
          </span>
        )}
      </div>

      <p
        className="text-sm font-medium mb-1"
        style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.02em" }}
      >
        {title}
      </p>
      <p
        style={{
          color: c.light,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "2.5rem",
          fontWeight: "700",
          lineHeight: 1,
          letterSpacing: "-0.03em",
        }}
      >
        {value}
      </p>

      {/* Bottom bar indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "20%",
          right: "20%",
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)`,
          opacity: 0.6,
        }}
      />
    </div>
  );
};

const Dashboard = ({ orders, hasRun }) => {
  const total = orders.length;
  const delayed = orders.filter((o) => o.status === "Delayed").length;
  const onTime = orders.filter((o) => o.status === "On Time").length;
  const error = orders.filter((o) => o.status === "Error").length;

  const stats = [
    {
      title: "Total Deliveries",
      value: total,
      color: "blue",
      icon: (
        <svg
          width="17"
          height="17"
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
        </svg>
      ),
    },
    {
      title: "On-Time Prediction",
      value: onTime,
      color: "green",
      icon: (
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
    {
      title: "Weather Delayed",
      value: delayed,
      color: "amber",
      icon: (
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="M22 10a3 3 0 0 0-3-3h-2.207" />
        </svg>
      ),
    },
    {
      title: "Routing Errors",
      value: error,
      color: "red",
      icon: (
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{
              width: "3px",
              height: "22px",
              background: "linear-gradient(180deg, #3b82f6, #06b6d4)",
              borderRadius: "2px",
            }}
          />
          <h1
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: "700",
              fontSize: "1.5rem",
              letterSpacing: "-0.02em",
              color: "white",
            }}
          >
            Order Dashboard
          </h1>
        </div>
        <p
          className="text-sm ml-5 pl-1"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Real-time weather impact analysis across active deliveries
        </p>
      </div>

      {hasRun ? (
        <>
          {/* Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <StatCard key={s.title} {...s} />
            ))}
          </div>

          {/* Delivery Rate Bar */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
            className="rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-semibold text-white text-sm">
                  Delivery Performance
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Distribution across all order statuses
                </p>
              </div>
              {total > 0 && (
                <span
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.2)",
                    color: "#6ee7b7",
                    fontSize: "12px",
                  }}
                  className="px-3 py-1 rounded-lg font-medium"
                >
                  {Math.round((onTime / total) * 100)}% on-time rate
                </span>
              )}
            </div>

            {/* Segmented Progress Bar */}
            <div className="h-3 rounded-full overflow-hidden flex gap-0.5 bg-white/5">
              {total > 0 && (
                <>
                  <div
                    style={{
                      width: `${(onTime / total) * 100}%`,
                      background: "linear-gradient(90deg, #10b981, #34d399)",
                      transition: "width 0.6s ease",
                    }}
                    className="h-full rounded-l-full"
                  />
                  <div
                    style={{
                      width: `${(delayed / total) * 100}%`,
                      background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                      transition: "width 0.6s ease",
                    }}
                    className="h-full"
                  />
                  <div
                    style={{
                      width: `${(error / total) * 100}%`,
                      background: "linear-gradient(90deg, #ef4444, #f87171)",
                      transition: "width 0.6s ease",
                    }}
                    className="h-full rounded-r-full"
                  />
                </>
              )}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 mt-4">
              {[
                { label: "On Time", color: "#10b981", count: onTime },
                { label: "Delayed", color: "#f59e0b", count: delayed },
                { label: "Errors", color: "#ef4444", count: error },
              ].map(({ label, color, count }) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: color,
                    }}
                  />
                  <span
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "12px",
                    }}
                  >
                    {label}
                    <span
                      className="ml-1.5 font-semibold"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {count}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Empty State */
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(16px)",
          }}
          className="rounded-2xl flex flex-col items-center justify-center py-24 gap-4"
        >
          <div
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          </div>
          <p className="font-semibold text-white text-base">No data loaded</p>
          <p
            className="text-sm text-center max-w-xs"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Click{" "}
            <span className="text-blue-400 font-medium">Run Weather Check</span>{" "}
            to fetch live delivery data and analyze weather impacts.
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
