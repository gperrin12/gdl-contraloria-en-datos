"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { UI, useLang } from "@/lib/i18n";

type Props = {
  text: string;
  /** Posición preferente del globo. */
  side?: "top" | "bottom";
  label?: string;
};

type Coords = { top: number; left: number };

function getCoords(el: HTMLElement, side: "top" | "bottom"): Coords {
  const rect = el.getBoundingClientRect();
  const gap = 8;
  return {
    left: rect.left + rect.width / 2,
    top: side === "top" ? rect.top - gap : rect.bottom + gap,
  };
}

/**
 * Pequeño ícono de información ("i") que muestra una explicación
 * al pasar el cursor o al enfocar con teclado. Accesible.
 * El globo se renderiza en un portal para evitar quedar oculto por tarjetas vecinas.
 */
export default function InfoTooltip({ text, side = "top", label }: Props) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<Coords>({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { lang } = useLang();
  const id = useId();
  const ariaLabel = label ?? UI.moreInfo[lang];

  useEffect(() => setMounted(true), []);

  useLayoutEffect(() => {
    if (!open || !buttonRef.current) return;

    const updatePosition = () => {
      if (buttonRef.current) {
        setCoords(getCoords(buttonRef.current, side));
      }
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open, side]);

  const tooltip =
    open && mounted ? (
      <span
        role="tooltip"
        id={id}
        style={{
          position: "fixed",
          top: coords.top,
          left: coords.left,
          transform: side === "top" ? "translate(-50%, -100%)" : "translate(-50%, 0)",
          zIndex: 9999,
        }}
        className="pointer-events-none w-64 rounded-xl border border-navy/10 bg-white p-3 text-[12.5px] font-normal leading-snug text-navy-700 shadow-cardHover"
      >
        {text}
      </span>
    ) : null;

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label={ariaLabel}
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
      {tooltip && createPortal(tooltip, document.body)}
    </>
  );
}
