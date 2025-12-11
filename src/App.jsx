// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import DashboardPage from "./pages/Dashboard.jsx";
import SwapPage from "./pages/Swap.jsx";
import LiquidityPage from "./pages/Liquidity.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 flex flex-col">
      {/* glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <Header />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/swap" element={<SwapPage />} />
          <Route path="/liquidity" element={<LiquidityPage />} />
          {/* default redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
