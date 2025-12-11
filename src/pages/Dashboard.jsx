// src/pages/Dashboard.jsx
import React from "react";

const stats = [
  {
    label: "Total Volume (24h)",
    value: "$1,245,320",
    sub: "+12.4% vs. yesterday",
  },
  {
    label: "Protocol TVL",
    value: "$18,430,512",
    sub: "Across all pools",
  },
  {
    label: "Average Swap Fee",
    value: "0.27%",
    sub: "Weighted by volume",
  },
];

export default function DashboardPage() {
  return (
    <div className="mt-6 space-y-6">
      {/* stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-4 shadow-md shadow-black/30"
          >
            <div className="text-[11px] uppercase tracking-wide text-slate-400 mb-1">
              {s.label}
            </div>
            <div className="text-lg sm:text-xl font-semibold mb-1">
              {s.value}
            </div>
            <div className="text-[11px] text-slate-500">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* placeholder for charts / positions */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-4 sm:p-5 text-sm text-slate-300">
        Charts & analytics coming soon.
      </div>
    </div>
  );
}
