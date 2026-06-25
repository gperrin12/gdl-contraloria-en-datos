"use client";

import { useId, useState } from "react";

type Props = {
  text: string;
  /** Posición preferente del globo. */
  side?: "top" | "bottom";
  label?: string;
};

/**
 * Pequeño ícono de información ("i") que muestra una explicación
 * al pasar el cursor o al enfocar con teclado. Accesible.
 */
export default function InfoTooltip({ text, side = "top", label = "Más información" }: Props) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        aria-label={label}
        aria-describedby={open ? id : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        className="flex h-5 w-5 items-center justify-center rounded-full border border-gold/40 bg-white text-[11px] font-semibold leading-none text-gold transition hover:border-gold hover:bg-gold hover:text-white focus:outline-none focus:ring-2 focus:ring-gold/40"
      >
        i
      </button>
      {open && (
        <span
          role="tooltip"
          id={id}
          className={`absolute left-1/2 z-50 w-64 -translate-x-1/2 rounded-xl border border-navy/10 bg-white p-3 text-[12.5px] font-normal leading-snug text-navy-700 shadow-cardHover ${
            side === "top" ? "bottom-7" : "top-7"
          }`}
        >
          {text}
        </span>
      )}
    </span>
  );
}
