// src/components/sections/Dashboard.jsx
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

const positions = [
  {
    pair: "WETH / USDC",
    tvl: "$38,560",
    fees24h: "$242.87",
    status: "Active",
  },
  {
    pair: "WETH / cbBTC",
    tvl: "$26,540",
    fees24h: "$180.91",
    status: "Active",
  },
];

export default function Dashboard() {
  return (
    <div className="mt-4 space-y-6">
      {/* Top stats */}
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

      {/* Positions preview */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-md shadow-black/30">
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-800/80">
          <h2 className="text-sm font-semibold">Your LP positions</h2>
          <span className="text-[11px] text-slate-500">
            Coming soon – data mock
          </span>
        </div>

        <div className="divide-y divide-slate-800/80">
          {positions.map((p) => (
            <div
              key={p.pair}
              className="px-4 sm:px-5 py-3 flex items-center justify-between text-xs sm:text-sm"
            >
              <div className="flex flex-col">
                <span className="font-medium">{p.pair}</span>
                <span className="text-[11px] text-slate-500">
                  Fees (24h): {p.fees24h}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-300 font-medium">
                  {p.tvl}
                </span>
                <span className="px-2 py-1 rounded-full text-[11px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
                  {p.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
