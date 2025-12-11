// src/components/layout/TabNav.jsx
import React from "react";

const tabs = [
  { id: "dashboard", label: "Dashboard" },
  { id: "swap", label: "Swap" },
  { id: "liquidity", label: "Liquidity" },
];

export default function TabNav({ activeTab, onChange }) {
  return (
    <div className="inline-flex bg-slate-900/80 rounded-full p-1 border border-slate-800/80 shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm transition-all ${
              isActive
                ? "bg-sky-500 text-white shadow-md shadow-sky-500/40"
                : "text-slate-400 hover:text-slate-100"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
