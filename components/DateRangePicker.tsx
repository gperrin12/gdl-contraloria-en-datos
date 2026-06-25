"use client";

import { useState } from "react";
import { DATE_RANGE } from "@/lib/data";

/**
 * Selector de rango de fechas — MARCADOR DE POSICIÓN.
 * Muestra un periodo provisional hasta contar con el dato oficial.
 */
export default function DateRangePicker() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2.5 rounded-full border border-gold/30 bg-white px-4 py-2 text-left shadow-sm transition hover:border-gold/60 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-gold/30"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="shrink-0 text-gold"
          aria-hidden
        >
          <path
            d="M7 3v3M17 3v3M3.5 9h17M5 5h14a1.5 1.5 0 011.5 1.5V19A1.5 1.5 0 0119 20.5H5A1.5 1.5 0 013.5 19V6.5A1.5 1.5 0 015 5z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-wide text-navy-300">
            Periodo
          </span>
          <span className="text-[13.5px] font-semibold text-navy">
            {DATE_RANGE.start} — {DATE_RANGE.end}
          </span>
        </span>
        <span className="ml-1 rounded-full bg-accent-yellow/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold-700">
          Provisional
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className={`shrink-0 text-navy-300 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-72 rounded-xl border border-navy/10 bg-white p-4 shadow-cardHover">
          <p className="text-[13px] font-semibold text-navy">{DATE_RANGE.label}</p>
          <p className="mt-1 text-[12.5px] leading-snug text-navy-400">{DATE_RANGE.note}</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-navy-50 px-3 py-2">
              <div className="text-[10px] uppercase tracking-wide text-navy-300">Desde</div>
              <div className="text-[13px] font-semibold text-navy">{DATE_RANGE.start}</div>
            </div>
            <div className="rounded-lg bg-navy-50 px-3 py-2">
              <div className="text-[10px] uppercase tracking-wide text-navy-300">Hasta</div>
              <div className="text-[13px] font-semibold text-navy">{DATE_RANGE.end}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
