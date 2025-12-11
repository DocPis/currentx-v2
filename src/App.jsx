// src/App.jsx
import React, { useState } from "react";
import Header from "./components/layout/Header";
import TabNav from "./components/layout/TabNav";
import Dashboard from "./components/sections/Dashboard";
import SwapSection from "./components/sections/SwapSection";
import LiquiditySection from "./components/sections/LiquiditySection";

export default function App() {
  const [activeTab, setActiveTab] = useState("swap");

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 flex flex-col">
      {/* sfondo glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <Header />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* titolo + tab nav */}
        <div className="mt-6 mb-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
              CurrentX
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Monitor, swap and provide liquidity in a single unified interface.
            </p>
          </div>

          <TabNav activeTab={activeTab} onChange={setActiveTab} />
        </div>

        {/* contenuto tab */}
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "swap" && <SwapSection />}
        {activeTab === "liquidity" && <LiquiditySection />}
      </main>
    </div>
  );
}
