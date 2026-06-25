import Image from "next/image";
import type { Kpi } from "@/lib/data";
import CountUp from "./CountUp";
import InfoTooltip from "./InfoTooltip";

export default function KpiFunnel({ items }: { items: Kpi[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((kpi, i) => (
        <div
          key={kpi.id}
          className="animate-floatUp"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="group relative z-0 flex h-full flex-col rounded-xl2 border border-navy/[0.06] bg-white p-4 shadow-card transition duration-300 hover:z-20 hover:-translate-y-1 hover:shadow-cardHover focus-within:z-20">
            <span className="absolute right-3 top-3">
              <InfoTooltip text={kpi.info} side="bottom" />
            </span>

            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/15 to-gold/5">
              <Image
                src={kpi.icon}
                alt=""
                width={30}
                height={30}
                className="h-8 w-8 object-contain"
              />
            </div>

            <CountUp
              value={kpi.value}
              className="text-3xl font-bold leading-none text-navy"
            />
            <p className="mt-2 text-[12.5px] font-medium leading-snug text-navy-400">
              {kpi.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
