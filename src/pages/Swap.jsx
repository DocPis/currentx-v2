// src/pages/Swap.jsx
import React, { useState } from "react";

function TokenPill({ symbol, label }) {
  return (
    <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 hover:border-sky-500/80 transition">
      <span className="h-5 w-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-semibold">
        {symbol[0]}
      </span>
      <span className="text-xs font-medium text-slate-100">{label}</span>
      <span className="text-[9px] text-slate-500">▼</span>
    </button>
  );
}

function AmountRow({ side, token, balanceLabel, amount, onChange }) {
  return (
    <div className="rounded-2xl bg-[#050816] border border-slate-800/90 px-4 py-3.5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-medium text-slate-300">
          {side}
        </span>
        <span className="text-[11px] text-slate-500">
          Balance {balanceLabel}
        </span>
      </div>

      <div className="flex items-center justify-between gap-3">
        <TokenPill symbol={token} label={token} />
        <div className="flex-1 text-right">
          <input
            value={amount}
            onChange={onChange}
            placeholder="0"
            className="w-full bg-transparent text-2xl font-semibold text-slate-50 text-right outline-none placeholder:text-slate-700"
          />
          <div className="text-[11px] text-slate-500">~$0.0</div>
        </div>
      </div>
    </div>
  );
}

export default function SwapPage() {
  const [sellToken] = useState("ETH");
  const [buyToken] = useState("AERO");
  const [sellAmount, setSellAmount] = useState("");
  const [buyAmount] = useState("0");

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-lg">
        <div className="rounded-[24px] bg-[#020617]/90 border border-slate-900 shadow-[0_24px_60px_rgba(0,0,0,0.8)] px-6 py-7">
          <AmountRow
            side="Sell"
            token={sellToken}
            balanceLabel={`0.0 ${sellToken}`}
            amount={sellAmount}
            onChange={(e) => setSellAmount(e.target.value)}
          />

          <div className="flex justify-center my-4">
            <div className="h-9 w-9 rounded-full bg-[#020617] border border-slate-800 flex items-center justify-center text-slate-300">
              <span className="text-base">↓</span>
            </div>
          </div>

          <AmountRow
            side="Buy"
            token={buyToken}
            balanceLabel={`0.0 ${buyToken}`}
            amount={buyAmount}
            onChange={() => {}}
          />
        </div>

        <button className="mt-6 w-full h-12 rounded-full bg-[#2555ff] hover:bg-[#2f63ff] text-sm font-semibold text-white shadow-[0_16px_40px_rgba(37,85,255,0.7)] transition">
          Swap
        </button>
      </div>
    </div>
  );
}
