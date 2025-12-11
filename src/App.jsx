// src/App.jsx
import React, { useState } from "react";

function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 border-b border-slate-800 bg-[#020617]">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-sky-500 flex items-center justify-center font-bold text-sm">
          X
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-slate-50">CurrentX</span>
          <span className="text-xs text-slate-400">
            The new current of decentralized trading.
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 text-xs">
        <div className="px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300">
          Sepolia Testnet
        </div>
        <button className="px-4 py-1.5 rounded-full bg-sky-500 hover:bg-sky-400 text-xs font-semibold text-white shadow-md">
          Connect wallet
        </button>
      </div>
    </header>
  );
}

function SwapSection() {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <div className="w-full max-w-xl rounded-3xl bg-slate-900/80 border border-slate-800 p-6 shadow-xl">
        {/* SELL */}
        <div className="mb-4 rounded-2xl bg-slate-900 border border-slate-800 p-4">
          <div className="flex items-center justify-between mb-2 text-xs text-slate-400">
            <span>Sell</span>
            <span className="font-medium text-slate-300">Balance: 0.0000 ETH</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-3 py-1.5 rounded-full bg-slate-800 text-xs text-slate-100 border border-slate-700">
              ETH
            </button>
            <input
              placeholder="0.00"
              className="flex-1 text-right bg-transparent text-2xl font-semibold text-slate-50 outline-none placeholder:text-slate-700"
            />
          </div>
        </div>

        {/* FLIP */}
        <div className="flex justify-center my-2">
          <div className="h-8 w-8 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-300 text-lg">
            ↓
          </div>
        </div>

        {/* BUY */}
        <div className="mb-4 rounded-2xl bg-slate-900 border border-slate-800 p-4">
          <div className="flex items-center justify-between mb-2 text-xs text-slate-400">
            <span>Buy</span>
            <span className="font-medium text-slate-300">Balance: 0.00 USDC</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-3 py-1.5 rounded-full bg-slate-800 text-xs text-slate-100 border border-slate-700">
              USDC
            </button>
            <div className="flex-1 text-right">
              <div className="text-2xl font-semibold text-slate-50">0.00</div>
              <div className="text-[11px] text-slate-500">No quote available</div>
            </div>
          </div>
        </div>

        <button className="w-full py-3 mt-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-sm font-semibold text-white shadow-lg shadow-sky-500/30">
          Swap
        </button>
      </div>

      <div className="mt-4 w-full max-w-xl rounded-2xl bg-slate-900/60 border border-slate-800 px-4 py-3 text-xs text-slate-300">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">Price impact</span>
          <span>—</span>
        </div>
      </div>
    </div>
  );
}

function LiquiditySection() {
  return (
    <div className="w-full px-6 mt-10 text-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="col-span-1 lg:col-span-2 bg-[#050816] border border-slate-800/80 rounded-2xl p-6 shadow-xl shadow-black/40">
          <p className="text-sm text-slate-400 mb-4">
            Provide liquidity to enable low-slippage swaps and earn emissions.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">
                Volume
              </div>
              <div className="text-lg sm:text-xl font-semibold">~$335.42M</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">
                Fees
              </div>
              <div className="text-lg sm:text-xl font-semibold">~$874,544.93</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">
                TVL
              </div>
              <div className="text-lg sm:text-xl font-semibold">~$440.4M</div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-gradient-to-br from-[#1b1f4d] via-[#4338ca] to-[#f97316] rounded-2xl p-6 shadow-xl shadow-black/40" />
      </div>

      <div className="bg-[#050816] border border-slate-800/80 rounded-2xl shadow-xl shadow-black/40">
        <div className="px-4 sm:px-6 pb-2 text-[11px] sm:text-xs text-slate-500 border-b border-slate-800/70 pt-4">
          <div className="grid grid-cols-12 py-2">
            <div className="col-span-4">Pools</div>
            <div className="col-span-2 text-right">Volume</div>
            <div className="col-span-2 text-right">Fees</div>
            <div className="col-span-2 text-right">TVL</div>
            <div className="col-span-1 text-right">Fee APR</div>
            <div className="col-span-1 text-right">Emission APR</div>
          </div>
        </div>
        <div className="px-2 sm:px-4 pb-3">
          <div className="grid grid-cols-12 items-center px-2 sm:px-4 py-3 rounded-xl hover:bg-slate-900/80 transition">
            <div className="col-span-4 flex flex-col">
              <div className="text-sm font-medium">USDC / AERO</div>
              <div className="text-[11px] text-slate-500">Basic volatile</div>
            </div>
            <div className="col-span-2 text-right text-xs sm:text-sm">~$80,957.04</div>
            <div className="col-span-2 text-right text-xs sm:text-sm">~$242.87</div>
            <div className="col-span-2 text-right text-xs sm:text-sm">~$38.56M</div>
            <div className="col-span-1 text-right text-xs sm:text-sm">N/A</div>
            <div className="col-span-1 text-right text-xs sm:text-sm">16.24%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("swap");

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 flex flex-col">
      <Header />

      <div className="px-6 pt-6">
        <div className="inline-flex bg-slate-900/80 rounded-full p-1 text-xs sm:text-sm border border-slate-800">
          <button
            onClick={() => setTab("dashboard")}
            className={`px-4 py-1.5 rounded-full ${
              tab === "dashboard"
                ? "bg-slate-800 text-white"
                : "text-slate-400 hover:text-slate-100"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setTab("swap")}
            className={`px-4 py-1.5 rounded-full ${
              tab === "swap"
                ? "bg-slate-800 text-white"
                : "text-slate-400 hover:text-slate-100"
            }`}
          >
            Swap
          </button>
          <button
            onClick={() => setTab("liquidity")}
            className={`px-4 py-1.5 rounded-full ${
              tab === "liquidity"
                ? "bg-slate-800 text-white"
                : "text-slate-400 hover:text-slate-100"
            }`}
          >
            Liquidity
          </button>
        </div>
      </div>

      <main className="flex-1">
        {tab === "swap" && <SwapSection />}
        {tab === "liquidity" && <LiquiditySection />}
        {tab === "dashboard" && (
          <div className="mt-10 text-center text-slate-400">
            Dashboard coming soon.
          </div>
        )}
      </main>
    </div>
  );
}
