import Image from "next/image";
import InfoTooltip from "./InfoTooltip";

type Props = {
  title: string;
  subtitle?: string;
  info: string;
  icon?: string;
  total?: string;
  className?: string;
  children: React.ReactNode;
};

export default function ChartCard({
  title,
  subtitle,
  info,
  icon,
  total,
  className = "",
  children,
}: Props) {
  return (
    <section
      className={`group flex flex-col rounded-xl2 border border-navy/[0.06] bg-white p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-cardHover ${className}`}
    >
      <header className="mb-4 flex items-start gap-3">
        {icon && (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/15 to-gold/5">
            <Image src={icon} alt="" width={26} height={26} className="h-7 w-7 object-contain" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate text-[15px] font-bold leading-tight text-navy">{title}</h3>
            <InfoTooltip text={info} />
          </div>
          {subtitle && (
            <p className="mt-0.5 text-[12.5px] leading-snug text-navy-300">{subtitle}</p>
          )}
        </div>
        {total && (
          <div className="shrink-0 text-right">
            <div className="text-lg font-bold leading-none text-gold">{total}</div>
            <div className="text-[10.5px] uppercase tracking-wide text-navy-200">Total</div>
          </div>
        )}
      </header>
      <div className="flex-1">{children}</div>
    </section>
  );
}
