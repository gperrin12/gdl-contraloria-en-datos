"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Lang } from "./data";

// Cadenas de la interfaz (no son datos). Bilingües es / en.
export const UI = {
  navProduct: { es: "Contraloría en Datos", en: "Comptroller in Data" },
  navStats: { es: "Estadísticas", en: "Statistics" },
  heroBadge: {
    es: "Contraloría Ciudadana · Guadalajara",
    en: "Citizen Comptroller's Office · Guadalajara",
  },
  heroTitle: { es: "Estadísticas", en: "Statistics" },
  heroSubtitle: {
    es: "Tablero interactivo de la atención de denuncias ciudadanas. Pasa el cursor sobre cualquier gráfica o dato para conocer su significado al detalle.",
    en: "Interactive dashboard of how citizen complaints are handled. Hover over any chart or data point to see what it means in detail.",
  },
  sectionKpis: { es: "Cifras generales", en: "Key figures" },
  sectionCharts: { es: "Análisis de las denuncias", en: "Complaints analysis" },
  total: { es: "Total", en: "Total" },
  period: { es: "Periodo", en: "Period" },
  provisional: { es: "Provisional", en: "Provisional" },
  from: { es: "Desde", en: "From" },
  to: { es: "Hasta", en: "To" },
  moreInfo: { es: "Más información", en: "More information" },
  footerOrg: { es: "Gobierno de Guadalajara", en: "Government of Guadalajara" },
  footerSub: {
    es: "Contraloría Ciudadana · Mirada Pública",
    en: "Citizen Comptroller's Office · Mirada Pública",
  },
  footerNote: {
    es: "Prototipo de tablero interactivo para demostración. Los rangos de fecha son provisionales. Datos: Contraloría en Datos — Estadísticas.",
    en: "Interactive dashboard prototype for demonstration. Date ranges are provisional. Data: Contraloría en Datos — Statistics.",
  },
  switchTo: { es: "Switch to English", en: "Cambiar a español" },
} as const;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "cd-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  // Restaura preferencia guardada al montar.
  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved === "es" || saved === "en") setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    }
  }, []);

  const toggle = useCallback(
    () => setLang(lang === "es" ? "en" : "es"),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}
