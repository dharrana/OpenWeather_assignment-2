import React, { useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";

function App() {
  const [page, setPage] = useState("dashboard");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  const runWeatherCheck = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://127.0.0.1:8000/process-orders");
      if (res.data?.orders) {
        setOrders(res.data.orders);
        setHasRun(true);
      }
    } catch (err) {
      console.error(err);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen text-white"
      style={{
        background:
          "linear-gradient(135deg, #060c1a 0%, #0d1528 40%, #060c1a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background orbs */}
      <div
        style={{
          position: "fixed",
          top: "-200px",
          left: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-150px",
          right: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar
          setPage={setPage}
          runWeatherCheck={runWeatherCheck}
          loading={loading}
          page={page}
        />

        <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
          {page === "dashboard" && (
            <Dashboard orders={orders} hasRun={hasRun} />
          )}
          {page === "orders" && <Orders orders={orders} hasRun={hasRun} />}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
