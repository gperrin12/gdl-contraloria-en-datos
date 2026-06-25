"use client";

import { useState } from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import type { Datum } from "@/lib/data";
import ChartTooltip from "../ChartTooltip";

const nf = new Intl.NumberFormat("es-MX");

type Props = {
  data: Datum[];
  unit?: string;
  palette: string[];
};

export default function DonutChart({ data, unit, palette }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const total = data.reduce((s, d) => s + d.value, 0);
  const visible = data.filter((d) => d.value > 0);

  const rows = visible.map((d, i) => ({
    ...d,
    unit,
    pct: total > 0 ? (d.value / total) * 100 : 0,
    fill: palette[i % palette.length],
  }));

  const focused = active !== null ? rows[active] : null;

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <div className="relative" style={{ width: 200, height: 200 }}>
        <PieChart width={200} height={200}>
          <Tooltip content={<ChartTooltip />} wrapperStyle={{ outline: "none", zIndex: 50 }} />
          <Pie
            data={rows}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            innerRadius={62}
            outerRadius={92}
            paddingAngle={2}
            stroke="#fff"
            strokeWidth={2}
            isAnimationActive={false}
            onMouseEnter={(_, i) => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            {rows.map((r, i) => (
              <Cell
                key={i}
                fill={r.fill}
                opacity={active === null || active === i ? 1 : 0.4}
                style={{ transition: "opacity 0.2s" }}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-navy">
            {nf.format(focused ? focused.value : total)}
          </span>
          <span className="max-w-[110px] text-center text-[11px] leading-tight text-navy-300">
            {focused ? focused.label : "Total"}
          </span>
        </div>
      </div>

      <ul className="flex-1 space-y-2 self-stretch">
        {rows.map((r, i) => (
          <li
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className={`flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition ${
              active === i ? "bg-navy-50" : ""
            }`}
          >
            <span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: r.fill }} />
            <span className="flex-1 text-[13px] leading-tight text-navy-700">{r.label}</span>
            <span className="text-[13px] font-semibold text-navy">{nf.format(r.value)}</span>
            <span className="w-12 text-right text-[12px] text-navy-300">
              {r.pct.toLocaleString("es-MX", { maximumFractionDigits: 1 })}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
