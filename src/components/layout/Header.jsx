import React from "react";

export default function Header() {
  return (
    <header className="w-full border-b border-slate-800/80 bg-[#020617]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-sky-500/30">
            <span className="text-sm font-black tracking-tight">CX</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-semibold">CurrentX</span>
            <span className="text-[10px] sm:text-xs text-slate-400">
              The new current of decentralized trading.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Sepolia Testnet</span>
          </div>

          <button className="px-3 sm:px-4 py-1.5 rounded-full border border-slate-700 bg-slate-900/80 text-xs font-medium text-slate-100 hover:border-sky-500 hover:text-sky-100 transition">
            Connect wallet
          </button>
        </div>
      </div>
    </header>
  );
}
