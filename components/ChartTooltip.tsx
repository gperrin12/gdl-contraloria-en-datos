"use client";

import type { TooltipProps } from "recharts";

const nf = new Intl.NumberFormat("es-MX");

type ExtraPayload = {
  info?: string;
  pct?: number;
  unit?: string;
  fill?: string;
};

/**
 * Tooltip personalizado para las gráficas. Muestra el valor, el porcentaje
 * (cuando aplica) y la explicación detallada de cada punto de dato.
 */
export default function ChartTooltip({ active, payload }: TooltipProps<number, string>) {
  if (!active || !payload || payload.length === 0) return null;

  const item = payload[0];
  const data = (item.payload ?? {}) as ExtraPayload & { label?: string; value?: number };
  const color = data.fill || item.color || "#cc9f52";

  return (
    <div className="max-w-[260px] rounded-xl border border-navy/10 bg-white/95 p-3 shadow-cardHover backdrop-blur">
      <div className="mb-1 flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-[13px] font-semibold text-navy-700">{data.label}</span>
      </div>
      <div className="mb-1.5 flex items-baseline gap-1.5">
        <span className="text-xl font-bold text-navy" style={{ color }}>
          {nf.format(data.value ?? 0)}
        </span>
        {data.unit && <span className="text-[12px] text-navy-300">{data.unit}</span>}
        {typeof data.pct === "number" && (
          <span className="ml-auto rounded-full bg-navy-50 px-2 py-0.5 text-[12px] font-medium text-navy-500">
            {data.pct.toLocaleString("es-MX", { maximumFractionDigits: 1 })}%
          </span>
        )}
      </div>
      {data.info && (
        <p className="text-[12px] leading-snug text-navy-400">{data.info}</p>
      )}
    </div>
  );
}
