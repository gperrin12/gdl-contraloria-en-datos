"use client";

import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Datum } from "@/lib/data";
import ChartTooltip from "../ChartTooltip";

const nf = new Intl.NumberFormat("es-MX");

type Props = {
  data: Datum[];
  unit?: string;
  /** Si es true, usa la paleta categórica; si no, degradado dorado por jerarquía. */
  categorical?: boolean;
  palette?: string[];
};

export default function HorizontalBars({ data, unit, categorical = false, palette }: Props) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const max = Math.max(...data.map((d) => d.value), 1);

  const rows = data.map((d, i) => ({
    ...d,
    unit,
    pct: total > 0 ? (d.value / total) * 100 : 0,
    fill: categorical && palette ? palette[i % palette.length] : goldShade(d.value, max),
  }));

  return (
    <div style={{ width: "100%", height: Math.max(rows.length * 46, 180) }}>
      <ResponsiveContainer>
        <BarChart
          data={rows}
          layout="vertical"
          margin={{ top: 4, right: 44, bottom: 4, left: 8 }}
          barCategoryGap={10}
        >
          <XAxis type="number" hide domain={[0, max * 1.04]} />
          <YAxis
            type="category"
            dataKey="label"
            width={168}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12.5, fill: "#22344f" }}
          />
          <Tooltip
            cursor={{ fill: "rgba(204,159,82,0.07)" }}
            content={<ChartTooltip />}
            wrapperStyle={{ outline: "none", zIndex: 50 }}
          />
          <Bar dataKey="value" radius={[6, 6, 6, 6]} isAnimationActive>
            {rows.map((r, i) => (
              <Cell key={i} fill={r.fill} />
            ))}
            <LabelList
              dataKey="value"
              position="right"
              formatter={(v: number) => nf.format(v)}
              style={{ fill: "#16243f", fontSize: 12.5, fontWeight: 700 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function goldShade(value: number, max: number) {
  // Degradado dorado: valores altos más intensos.
  const t = max > 0 ? value / max : 0;
  const light = { r: 0xe8, g: 0xd2, b: 0xa3 }; // gold-200
  const dark = { r: 0xb3, g: 0x85, b: 0x3d }; // gold-600
  const mix = (a: number, b: number) => Math.round(a + (b - a) * t);
  return `rgb(${mix(light.r, dark.r)}, ${mix(light.g, dark.g)}, ${mix(light.b, dark.b)})`;
}
