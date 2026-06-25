"use client";

import Image from "next/image";
import Header from "@/components/Header";
import DateRangePicker from "@/components/DateRangePicker";
import KpiFunnel from "@/components/KpiFunnel";
import ChartCard from "@/components/ChartCard";
import HorizontalBars from "@/components/charts/HorizontalBars";
import DonutChart from "@/components/charts/DonutChart";
import { ACCENT_PALETTE, DATASETS, localizeDataset, localizeKpis } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";

const nf = new Intl.NumberFormat("es-MX");

export default function Page() {
  const { lang } = useLang();

  const kpis = localizeKpis(lang);
  const ds = Object.fromEntries(
    Object.entries(DATASETS).map(([key, value]) => [key, localizeDataset(value, lang)])
  ) as Record<keyof typeof DATASETS, ReturnType<typeof localizeDataset>>;

  const total = (id: keyof typeof DATASETS) =>
    nf.format(ds[id].data.reduce((s, d) => s + d.value, 0));

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-5 pb-2 pt-8 sm:px-8 sm:pt-12">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-gold-700">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {UI.heroBadge[lang]}
            </span>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] text-navy sm:text-5xl">
              {UI.heroTitle[lang]}
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-navy-400">
              {UI.heroSubtitle[lang]}
            </p>
          </div>
          <DateRangePicker />
        </div>
      </section>

      {/* KPIs */}
      <section className="mx-auto max-w-[1280px] px-5 py-6 sm:px-8">
        <div className="mb-3 flex items-center gap-2">
          <h2 className="text-[13px] font-bold uppercase tracking-wide text-navy-300">
            {UI.sectionKpis[lang]}
          </h2>
          <span className="h-px flex-1 bg-navy/[0.07]" />
        </div>
        <KpiFunnel items={kpis} />
      </section>

      {/* Gráficas */}
      <section className="mx-auto max-w-[1280px] px-5 pb-16 pt-2 sm:px-8">
        <div className="mb-3 flex items-center gap-2">
          <h2 className="text-[13px] font-bold uppercase tracking-wide text-navy-300">
            {UI.sectionCharts[lang]}
          </h2>
          <span className="h-px flex-1 bg-navy/[0.07]" />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ChartCard
            title={ds.recepcion.title}
            subtitle={ds.recepcion.subtitle}
            info={ds.recepcion.info}
            icon={ds.recepcion.icon}
            total={total("recepcion")}
          >
            <HorizontalBars data={ds.recepcion.data} unit={ds.recepcion.unit} />
          </ChartCard>

          <ChartCard
            title={ds.estatus.title}
            subtitle={ds.estatus.subtitle}
            info={ds.estatus.info}
            icon={ds.estatus.icon}
            total={total("estatus")}
          >
            <HorizontalBars data={ds.estatus.data} unit={ds.estatus.unit} />
          </ChartCard>

          <ChartCard
            title={ds.dependencia.title}
            subtitle={ds.dependencia.subtitle}
            info={ds.dependencia.info}
            icon={ds.dependencia.icon}
            className="lg:col-span-2"
          >
            <HorizontalBars data={ds.dependencia.data} unit={ds.dependencia.unit} />
          </ChartCard>

          <ChartCard
            title={ds.sexoDenunciante.title}
            subtitle={ds.sexoDenunciante.subtitle}
            info={ds.sexoDenunciante.info}
            icon={ds.sexoDenunciante.icon}
            total={total("sexoDenunciante")}
          >
            <DonutChart
              data={ds.sexoDenunciante.data}
              unit={ds.sexoDenunciante.unit}
              palette={[ACCENT_PALETTE[1], ACCENT_PALETTE[5]]}
            />
          </ChartCard>

          <ChartCard
            title={ds.sexoDenunciado.title}
            subtitle={ds.sexoDenunciado.subtitle}
            info={ds.sexoDenunciado.info}
            icon={ds.sexoDenunciado.icon}
            total={total("sexoDenunciado")}
          >
            <DonutChart
              data={ds.sexoDenunciado.data}
              unit={ds.sexoDenunciado.unit}
              palette={[ACCENT_PALETTE[1], ACCENT_PALETTE[5], ACCENT_PALETTE[7]]}
            />
          </ChartCard>

          <ChartCard
            title={ds.calificacion.title}
            subtitle={ds.calificacion.subtitle}
            info={ds.calificacion.info}
            icon={ds.calificacion.icon}
            total={total("calificacion")}
          >
            <HorizontalBars data={ds.calificacion.data} unit={ds.calificacion.unit} />
          </ChartCard>

          <ChartCard
            title={ds.tipoSancion.title}
            subtitle={ds.tipoSancion.subtitle}
            info={ds.tipoSancion.info}
            icon={ds.tipoSancion.icon}
            total={total("tipoSancion")}
          >
            <HorizontalBars data={ds.tipoSancion.data} unit={ds.tipoSancion.unit} />
          </ChartCard>

          <ChartCard
            title={ds.tipoResolucion.title}
            subtitle={ds.tipoResolucion.subtitle}
            info={ds.tipoResolucion.info}
            icon={ds.tipoResolucion.icon}
            className="lg:col-span-2"
          >
            <DonutChart
              data={ds.tipoResolucion.data}
              unit={ds.tipoResolucion.unit}
              palette={[ACCENT_PALETTE[0], ACCENT_PALETTE[2], ACCENT_PALETTE[1], ACCENT_PALETTE[3], ACCENT_PALETTE[4]]}
            />
          </ChartCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy/[0.06] bg-white/60">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-gdl-gold.png"
              alt="Gobierno de Guadalajara"
              width={44}
              height={44}
              className="h-11 w-auto"
            />
            <div>
              <p className="text-[13px] font-semibold text-navy">{UI.footerOrg[lang]}</p>
              <p className="text-[12px] text-navy-300">{UI.footerSub[lang]}</p>
            </div>
          </div>
          <p className="max-w-md text-[11.5px] leading-snug text-navy-300">
            {UI.footerNote[lang]}
          </p>
        </div>
      </footer>
    </main>
  );
}
