"use client";

import { UI, useLang } from "@/lib/i18n";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label={UI.switchTo[lang]}
      className="inline-flex items-center rounded-full border border-navy/10 bg-white p-0.5 shadow-sm"
    >
      {(["es", "en"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(code)}
            className={`rounded-full px-2.5 py-1 text-[12px] font-semibold uppercase tracking-wide transition ${
              active
                ? "bg-gold text-white shadow-sm"
                : "text-navy-300 hover:text-navy-700"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
