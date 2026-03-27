import React, { useState } from "react";

const statusConfig = {
  "On Time": {
    label: "On Time",
    color: "#10b981",
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.2)",
    dot: "#34d399",
    icon: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  Delayed: {
    label: "Delayed",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.2)",
    dot: "#fbbf24",
    icon: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  Error: {
    label: "Error",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.1)",
    border: "rgba(239,68,68,0.2)",
    dot: "#f87171",
    icon: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
  },
};

const OrderCard = ({ order, index }) => {
  const status = statusConfig[order.status] || statusConfig["Error"];

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
        transition:
          "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
        animationDelay: `${index * 60}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.35)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.13)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.25)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
      }}
      className="rounded-2xl p-5 flex flex-col gap-4"
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
              <path d="m7.5 4.27 9 5.15" />
              <polyline points="3.29 7 12 12 20.71 7" />
              <line x1="12" y1="22" x2="12" y2="12" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-white text-sm leading-none">
              {order.customer}
            </p>
            <p
              className="text-xs mt-1"
              style={{
                color: "rgba(255,255,255,0.35)",
                fontFamily: "monospace",
                letterSpacing: "0.04em",
              }}
            >
              #{order.order_id}
            </p>
          </div>
        </div>

        {/* Status badge */}
        <div
          style={{
            background: status.bg,
            border: `1px solid ${status.border}`,
            color: status.color,
            fontSize: "11px",
            fontWeight: "600",
            letterSpacing: "0.03em",
          }}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg"
        >
          {status.icon}
          {status.label}
        </div>
      </div>

      {/* Location row */}
      <div className="flex items-center gap-2">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px" }}>
          {order.city}
        </span>
      </div>

      {/* Message / Error */}
      {order.message && (
        <div
          style={{
            background: "rgba(59,130,246,0.07)",
            border: "1px solid rgba(59,130,246,0.15)",
            borderLeft: "3px solid rgba(59,130,246,0.5)",
          }}
          className="rounded-lg px-3 py-2.5 flex items-start gap-2"
        >
          <svg
            className="flex-shrink-0 mt-0.5"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p style={{ color: "#93c5fd", fontSize: "12px", lineHeight: "1.5" }}>
            {order.message}
          </p>
        </div>
      )}

      {order.error && (
        <div
          style={{
            background: "rgba(239,68,68,0.07)",
            border: "1px solid rgba(239,68,68,0.15)",
            borderLeft: "3px solid rgba(239,68,68,0.5)",
          }}
          className="rounded-lg px-3 py-2.5 flex items-start gap-2"
        >
          <svg
            className="flex-shrink-0 mt-0.5"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f87171"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <p style={{ color: "#f87171", fontSize: "12px", lineHeight: "1.5" }}>
            {order.error}
          </p>
        </div>
      )}
    </div>
  );
};

const Orders = ({ orders, hasRun }) => {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "On Time", "Delayed", "Error"];

  const filtered =
    filter === "All" ? orders : orders.filter((o) => o.status === filter);

  const counts = {
    All: orders.length,
    "On Time": orders.filter((o) => o.status === "On Time").length,
    Delayed: orders.filter((o) => o.status === "Delayed").length,
    Error: orders.filter((o) => o.status === "Error").length,
  };

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
            Active Orders Overview
          </h1>
        </div>
        <p
          className="text-sm ml-5 pl-1"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Detailed view of all active delivery orders and their weather status
        </p>
      </div>

      {!hasRun ? (
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
              <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
              <path d="m7.5 4.27 9 5.15" />
              <polyline points="3.29 7 12 12 20.71 7" />
              <line x1="12" y1="22" x2="12" y2="12" />
            </svg>
          </div>
          <p className="font-semibold text-white text-base">No orders loaded</p>
          <p
            className="text-sm text-center max-w-xs"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Run the weather check to populate order data.
          </p>
        </div>
      ) : (
        <>
          {/* Filter Tabs */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            className="flex items-center gap-1 p-1 rounded-xl mb-6 w-fit"
          >
            {filters.map((f) => {
              const active = filter === f;
              const dotColor =
                f === "On Time"
                  ? "#10b981"
                  : f === "Delayed"
                    ? "#f59e0b"
                    : f === "Error"
                      ? "#ef4444"
                      : null;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    background: active
                      ? "rgba(255,255,255,0.1)"
                      : "transparent",
                    border: active
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "1px solid transparent",
                    color: active ? "white" : "rgba(255,255,255,0.4)",
                    transition: "all 0.15s ease",
                    fontSize: "13px",
                    fontWeight: active ? "600" : "400",
                  }}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-lg"
                >
                  {dotColor && (
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: dotColor,
                        display: "inline-block",
                      }}
                    />
                  )}
                  {f}
                  <span
                    style={{
                      background: active
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(255,255,255,0.07)",
                      color: active ? "white" : "rgba(255,255,255,0.35)",
                      fontSize: "10px",
                      padding: "1px 6px",
                      borderRadius: "10px",
                      fontWeight: "600",
                    }}
                  >
                    {counts[f]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((order, i) => (
              <OrderCard key={order.order_id || i} order={order} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              className="rounded-2xl flex flex-col items-center justify-center py-16 gap-3 mt-2"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px" }}>
                No orders match this filter
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Orders;
