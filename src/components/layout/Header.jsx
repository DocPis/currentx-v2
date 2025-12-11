// src/components/layout/Header.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useWeb3 } from "../../context/Web3Context.jsx";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/swap", label: "Swap" },
  { to: "/liquidity", label: "Liquidity" },
];

export default function Header() {
  const { account, connect, isConnecting } = useWeb3();
  const location = useLocation();

  const shortAccount = account
    ? `${account.slice(0, 6)}...${account.slice(-4)}`
    : null;

  return (
    <header className="w-full border-b border-slate-800/80 bg-[#020617]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Left: logo + brand */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-sky-500/30">
            <span className="text-sm font-black tracking-tight">CX</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-semibold">
              CurrentX
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400">
              The new current of decentralized trading.
            </span>
          </div>
        </div>

        {/* Center: nav */}
        <nav className="hidden md:flex items-center gap-1 text-xs sm:text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "px-3 py-1.5 rounded-full transition-all",
                  isActive
                    ? "bg-slate-900 text-sky-100 border border-slate-700"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-900/70",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: network + wallet */}
        <div className="flex items-center gap-3 text-xs">
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Sepolia (mock)</span>
          </div>

          {account ? (
            <div className="px-3 sm:px-4 py-1.5 rounded-full border border-slate-700 bg-slate-900/80 text-xs font-medium text-slate-100">
              {shortAccount}
            </div>
          ) : (
            <button
              onClick={connect}
              disabled={isConnecting}
              className="px-3 sm:px-4 py-1.5 rounded-full border border-slate-700 bg-slate-900/80 text-xs font-medium text-slate-100 hover:border-sky-500 hover:text-sky-100 transition disabled:opacity-60"
            >
              {isConnecting ? "Connecting..." : "Connect wallet"}
            </button>
          )}
        </div>
      </div>

      {/* mobile nav (sotto) */}
      <div className="md:hidden border-t border-slate-800/80 bg-[#020617]/95">
        <div className="max-w-6xl mx-auto px-3 py-2 flex items-center justify-center gap-2 text-[11px]">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={[
                  "px-3 py-1 rounded-full",
                  active
                    ? "bg-slate-900 text-sky-100 border border-slate-700"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-900/70",
                ].join(" ")}
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </header>
  );
}
