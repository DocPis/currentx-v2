// src/components/sections/LiquiditySection.jsx
import React from "react";

const pools = [
  {
    id: "1",
    pair: "USDC / AERO",
    type: "Basic volatile",
    volume: 80957.04,
    fees: 242.87,
    tvl: 38560000,
    feeApr: null,
    emissionApr: 16.24,
  },
  {
    id: "2",
    pair: "WETH / USDC",
    type: "Concentrated Volatile 100",
    volume: 1327573.91,
    fees: 439.42,
    tvl: 35480000,
    feeApr: null,
    emissionApr: 133.92,
  },
];

const formatUsd = (v) => {
  if (v >= 1_000_000_000) return `~$${(v / 1_000_000_000).toFixed(2)}B`;
  if (v >= 1_000_000) return `~$${(v / 1_000_000).toFixed(2)}M`;
  if (v >= 1_000) return `~$${(v / 1_000).toFixed(2)}K`;
  return `~$${v.toFixed(2)}`;
};

export default function LiquiditySection() {
  const totalVolume = pools.reduce((a, p) => a + p.volume, 0);
  const totalFees = pools.reduce((a, p) => a + p.fees, 0);
  const totalTvl = pools.reduce((a, p) => a + p.tvl, 0);

  return (
    <div className="mt-6">
      {/* top cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="col-span-1 lg:col-span-2 bg-[#050816]/95 border border-slate-800/80 rounded-2xl p-5 sm:p-6 shadow-xl shadow-black/50">
          <p className="text-sm text-slate-400 mb-4">
            Provide liquidity to enable low-slippage swaps and earn protocol
            emissions.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <Stat label="Volume (24h)" value={formatUsd(totalVolume)} />
            <Stat label="Fees (24h)" value={formatUsd(totalFees)} />
            <Stat label="Total TVL" value={formatUsd(totalTvl)} />
          </div>
        </div>

        {/* gradient panel */}
        <div className="col-span-1 bg-gradient-to-br from-[#1b1f4d] via-[#4338ca] to-[#f97316] rounded-2xl p-5 sm:p-6 relative overflow-hidden shadow-xl shadow-black/60">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="text-[10px] font-medium tracking-[0.25em] text-slate-100/80 mb-3">
              BUILT FOR CURRENTX
            </div>
            <div className="mb-4">
              <div className="text-2xl sm:text-3xl font-bold leading-tight">
                Launch your pool
              </div>
              <div className="mt-1 text-xs text-slate-100/80">
                Design custom fee tiers and volatility profiles.
              </div>
            </div>
            <button className="self-start px-4 py-2 rounded-full bg-slate-900/80 text-xs font-semibold text-slate-50 border border-slate-200/30 hover:bg-slate-900 transition">
              Launch pool
            </button>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="bg-[#050816]/95 border border-slate-800/80 rounded-2xl shadow-xl shadow-black/50 overflow-hidden">
        {/* filters row (mock) */}
        <div className="px-4 sm:px-6 pt-4 pb-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between text-[11px] sm:text-xs">
          <div className="flex flex-wrap gap-2">
            <FilterPill label="Token" value="Listed & emerging" />
            <FilterPill label="Type" value="Any" />
            <FilterPill label="Volatility" value="Any" />
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-full bg-sky-500 text-xs font-semibold shadow-md shadow-sky-500/40">
              New deposit
            </button>
            <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-full px-3 py-1.5">
              <SearchIcon />
              <input
                placeholder="Symbol or address..."
                className="bg-transparent outline-none text-[11px] sm:text-xs text-slate-200 placeholder:text-slate-500"
              />
            </div>
          </div>
        </div>

        {/* header */}
        <div className="px-4 sm:px-6 pb-2 text-[11px] sm:text-xs text-slate-500 border-t border-slate-800/80">
          <div className="grid grid-cols-12 py-2">
            <div className="col-span-4">Pools</div>
            <div className="col-span-2 text-right">Volume</div>
            <div className="col-span-2 text-right">Fees</div>
            <div className="col-span-2 text-right">TVL</div>
            <div className="col-span-1 text-right">Fee APR</div>
            <div className="col-span-1 text-right">Emission APR</div>
          </div>
        </div>

        {/* rows */}
        <div className="px-2 sm:px-4 pb-3">
          {pools.map((p) => (
            <div
              key={p.id}
              className="grid grid-cols-12 items-center px-2 sm:px-4 py-3 rounded-xl hover:bg-slate-900/80 transition border border-transparent hover:border-slate-700/70"
            >
              <div className="col-span-4 flex flex-col">
                <span className="text-sm font-medium">{p.pair}</span>
                <span className="text-[11px] text-slate-500">
                  {p.type}
                </span>
              </div>
              <div className="col-span-2 text-right text-xs sm:text-sm">
                {formatUsd(p.volume)}
              </div>
              <div className="col-span-2 text-right text-xs sm:text-sm">
                {formatUsd(p.fees)}
              </div>
              <div className="col-span-2 text-right text-xs sm:text-sm">
                {formatUsd(p.tvl)}
              </div>
              <div className="col-span-1 text-right text-xs sm:text-sm">
                {p.feeApr == null ? "N/A" : `${p.feeApr.toFixed(2)}%`}
              </div>
              <div className="col-span-1 text-right text-xs sm:text-sm">
                {p.emissionApr.toFixed(2)}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-3.5">
      <div className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">
        {label}
      </div>
      <div className="text-base sm:text-lg font-semibold">{value}</div>
    </div>
  );
}

function FilterPill({ label, value }) {
  return (
    <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] hover:border-slate-600 transition">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-slate-200">{value}</span>
      <span className="text-slate-500 text-[9px]">▼</span>
    </button>
  );
}

function SearchIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-slate-500"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.167 3.333A5.833 5.833 0 1 0 9.167 15a5.833 5.833 0 0 0 0-11.667Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m15 15-1.75-1.75"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
