import React from "react";

const logs = [
  {
    title: "Parallel Fetching with asyncio.gather",
    prompt:
      "Write a Python async function that fetches weather data from the OpenWeatherMap API for multiple cities concurrently using asyncio.gather, not sequentially.",
    result:
      "Implemented using asyncio.gather(*tasks) where each task is an async API call using aiohttp. All requests are executed concurrently, and the event loop waits for all tasks to complete. This significantly improves performance compared to sequential execution.",
  },
  {
    title: "Error Handling for Invalid Cities",
    prompt:
      "How should I handle errors from the OpenWeatherMap API when a city name is invalid (like 'InvalidCity123')? The script must not crash and should still process all other valid cities. Log the error clearly.",
    result:
      "Wrapped each individual city fetch in a try/catch block inside the Promise.all map. Invalid cities throw an error (API returns 404), which is caught, logged with req.log.error, and the order is marked with status 'Error' and the error message stored. Other cities continue processing normally since each runs independently.",
  },
  {
    title: "Weather-Aware Apology Message Generator",
    prompt:
      "Create a function that generates a personalized, empathetic customer apology message when a delivery is delayed due to bad weather. The message should include the customer's first name, destination city, and the specific weather condition causing the delay.",
    result:
      "Built generateApologyMessage(customer, city, weatherDescription) that extracts the first name, then randomly selects from several message templates to add variety. Example: 'Hi Alice, your order to New York is delayed due to heavy rain. We appreciate your patience and are working hard to get your delivery to you as soon as conditions improve!",
  },
  {
    title: "Delay Condition Logic",
    prompt:
      "Which OpenWeatherMap 'main' weather conditions should trigger a delivery delay? Define the threshold for what counts as severe enough weather to delay an order.",
    result:
      "Defined DELAY_CONDITIONS = ['Rain', 'Snow', 'Extreme']. These map to OpenWeatherMap's 'main' weather field values. If the weather main is in this list, the order status is set to 'Delayed' and an apology message is generated.",
  },
  {
    title: "Security - API Key Management",
    prompt:
      "How should I securely store the OpenWeatherMap API key without hardcoding it in the source code?",
    result:
      "Stored the API key as OPENWEATHER_API_KEY in the environment secrets (equivalent to a .env file). The server reads it via process.env.OPENWEATHER_API_KEY at runtime. The key is never committed to source code and is managed through Replit's secure secrets system.",
  },
];

const AIDevelopmentLog = () => {
  return (
    <div className="h-[calc(100vh-80px)] overflow-y-auto hide-scrollbar overscroll-none p-8">
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
            AI Development Log
          </h1>
        </div>
        <p
          className="text-sm ml-5 pl-1"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Prompts used to build the Parallel Fetching and Error Handling logic
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-4 mb-12">
        {logs.map((log, index) => (
          <div
            key={index}
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.13)";
              e.currentTarget.style.boxShadow = "0 8px 36px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.25)";
            }}
            className="rounded-2xl p-5"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  color: "#93c5fd",
                  fontSize: "11px",
                  fontWeight: "700",
                  fontFamily: "monospace",
                  minWidth: "28px",
                }}
                className="h-7 px-2 rounded-lg flex items-center justify-center"
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3
                className="font-semibold text-white text-sm"
                style={{ letterSpacing: "-0.01em" }}
              >
                {log.title}
              </h3>
            </div>

            {/* Prompt + Result */}
            <div className="flex flex-col md:flex-row gap-3">
              {/* Prompt */}
              <div
                style={{
                  background: "rgba(15,23,42,0.7)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: "3px solid rgba(59,130,246,0.5)",
                }}
                className="flex-1 p-4 rounded-xl"
              >
                <div className="flex items-center gap-1.5 mb-2.5">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#93c5fd"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <p
                    style={{
                      color: "#93c5fd",
                      fontSize: "10px",
                      fontWeight: "700",
                      letterSpacing: "0.08em",
                    }}
                  >
                    PROMPT
                  </p>
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "13px",
                    lineHeight: "1.65",
                  }}
                >
                  {log.prompt}
                </p>
              </div>

              {/* Result */}
              <div
                style={{
                  background: "rgba(16,185,129,0.05)",
                  border: "1px solid rgba(16,185,129,0.12)",
                  borderLeft: "3px solid rgba(16,185,129,0.4)",
                }}
                className="flex-1 p-4 rounded-xl"
              >
                <div className="flex items-center gap-1.5 mb-2.5">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6ee7b7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p
                    style={{
                      color: "#6ee7b7",
                      fontSize: "10px",
                      fontWeight: "700",
                      letterSpacing: "0.08em",
                    }}
                  >
                    AI RESULT
                  </p>
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "13px",
                    lineHeight: "1.65",
                  }}
                >
                  {log.result}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIDevelopmentLog;
