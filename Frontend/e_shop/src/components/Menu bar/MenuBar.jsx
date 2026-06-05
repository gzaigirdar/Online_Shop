'use client'
import { useState } from "react";

export default function MenuBar({search,change,show_cart,items}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Cake 🎂");
  let total_items = items.length == 0 ? null : `(${items.length})`;

  return (
    <div className="flex justify-center items-center mt-1 p-0 sm:px-0">
      <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center mb-0 sm:mx-5 sm:my-0 gap-3 sm:gap-4 w-full sm:w-3/5 lg:w-2/4 p-3 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl shadow-indigo-500/10">

        {/* Dropdown */}
        <div className="relative w-full sm:w-auto">
          <div
            role="button"
            className="btn m-1 w-full sm:w-auto justify-between rounded-full border border-cyan-500/40 bg-blue-950/60 text-cyan-100 shadow-[0_0_12px_rgba(6,182,212,0.15)] hover:bg-blue-900/70 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:ring-2 hover:ring-cyan-400/40 transition-all duration-200 active:scale-[0.98]"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className={selectedType ? "font-medium text-white" : "text-white/50"}>
              {selectedType || "Select type"}
            </span>
            <span className={`ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>⬇️</span>
          </div>

          {isOpen && (
            <>
              {/* Backdrop for mobile tap-outside */}
              <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
              <ul className="menu bg-gray-900/95 backdrop-blur-lg rounded-2xl z-50 w-full min-w-[220px] p-2 shadow-2xl shadow-indigo-500/20 border border-white/10 absolute mt-2 left-0 sm:right-0 sm:left-auto animate-drop-in">
                {["Cake 🎂", "Sandwiches 🥪", "Pastries 🍩", "Drinks 🥤"].map((item) => (
                  <li
                    key={item}
                    className={`rounded-xl transition-all duration-150 ${
                      item === selectedType
                        ? "bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/50"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={() => {
                      const cleanItem = item.split(' ')[0].toLowerCase();
                      setSelectedType(item);
                      change(cleanItem);
                      setIsOpen(false);
                    }}
                  >
                    <a className="flex items-center gap-3 px-3 py-2.5">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-150 ${
                        item === selectedType
                          ? "bg-indigo-500 text-white scale-100"
                          : "bg-white/10 scale-90"
                      }`}>
                        {item === selectedType && (
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span className="flex-1">{item}</span>
                      {item === selectedType && (
                        <span className="text-[10px] uppercase tracking-wider text-indigo-400 font-semibold">Active</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Search */}
        <label className="input rounded-full w-full sm:flex-1 flex items-center gap-2 px-4 py-2.5 border border-cyan-500/40 bg-blue-950/60 text-cyan-100 shadow-[0_0_12px_rgba(6,182,212,0.1)] transition-all duration-200 focus-within:ring-2 focus-within:ring-cyan-400/60 focus-within:border-cyan-400/70 hover:border-cyan-400/50 hover:shadow-[0_0_16px_rgba(6,182,212,0.2)]">
          <svg className="h-4 w-4 text-white/40 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
           onChange={(e) => search(e.target.value)}
            type="search"
            required
            placeholder="Search items..."
            className="bg-transparent outline-none w-full text-cyan-100 placeholder-cyan-300/40"
          />
        </label>

        {/* Cart */}
        <div className="group relative">
          <div onClick={show_cart} className="bg-gradient-to-br from-indigo-500 to-green-600 p-2.5 rounded-full text-center shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer">
            <a className="text-white text-sm sm:text-base whitespace-nowrap font-medium flex items-center gap-1.5 px-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              Cart {total_items}
            </a>
          </div>
          {/* Cart badge dot */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-gray-900 animate-pulse" />
        </div>

      </div>
    </div>
  );
}