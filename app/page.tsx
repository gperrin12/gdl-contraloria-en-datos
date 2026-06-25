import Image from "next/image";
import Header from "@/components/Header";
import DateRangePicker from "@/components/DateRangePicker";
import KpiFunnel from "@/components/KpiFunnel";
import ChartCard from "@/components/ChartCard";
import HorizontalBars from "@/components/charts/HorizontalBars";
import DonutChart from "@/components/charts/DonutChart";
import { ACCENT_PALETTE, DATASETS } from "@/lib/data";

const nf = new Intl.NumberFormat("es-MX");

function total(id: keyof typeof DATASETS) {
  return nf.format(DATASETS[id].data.reduce((s, d) => s + d.value, 0));
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-5 pb-2 pt-8 sm:px-8 sm:pt-12">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-gold-700">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Contraloría Ciudadana · Guadalajara
            </span>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] text-navy sm:text-5xl">
              Estadísticas
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-navy-400">
              Tablero interactivo de la atención de denuncias ciudadanas. Pasa el cursor sobre
              cualquier gráfica o dato para conocer su significado al detalle.
            </p>
          </div>
          <DateRangePicker />
        </div>
      </section>

      {/* KPIs / Embudo del proceso */}
      <section className="mx-auto max-w-[1280px] px-5 py-6 sm:px-8">
        <div className="mb-3 flex items-center gap-2">
          <h2 className="text-[13px] font-bold uppercase tracking-wide text-navy-300">
            Cifras generales
          </h2>
          <span className="h-px flex-1 bg-navy/[0.07]" />
        </div>
        <KpiFunnel />
      </section>

      {/* Gráficas */}
      <section className="mx-auto max-w-[1280px] px-5 pb-16 pt-2 sm:px-8">
        <div className="mb-3 flex items-center gap-2">
          <h2 className="text-[13px] font-bold uppercase tracking-wide text-navy-300">
            Análisis de las denuncias
          </h2>
          <span className="h-px flex-1 bg-navy/[0.07]" />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ChartCard
            title={DATASETS.recepcion.title}
            subtitle={DATASETS.recepcion.subtitle}
            info={DATASETS.recepcion.info}
            icon={DATASETS.recepcion.icon}
            total={total("recepcion")}
          >
            <HorizontalBars data={DATASETS.recepcion.data} unit={DATASETS.recepcion.unit} />
          </ChartCard>

          <ChartCard
            title={DATASETS.estatus.title}
            subtitle={DATASETS.estatus.subtitle}
            info={DATASETS.estatus.info}
            icon={DATASETS.estatus.icon}
            total={total("estatus")}
          >
            <HorizontalBars data={DATASETS.estatus.data} unit={DATASETS.estatus.unit} />
          </ChartCard>

          <ChartCard
            title={DATASETS.dependencia.title}
            subtitle={DATASETS.dependencia.subtitle}
            info={DATASETS.dependencia.info}
            icon={DATASETS.dependencia.icon}
            className="lg:col-span-2"
          >
            <HorizontalBars data={DATASETS.dependencia.data} unit={DATASETS.dependencia.unit} />
          </ChartCard>

          <ChartCard
            title={DATASETS.sexoDenunciante.title}
            subtitle={DATASETS.sexoDenunciante.subtitle}
            info={DATASETS.sexoDenunciante.info}
            icon={DATASETS.sexoDenunciante.icon}
            total={total("sexoDenunciante")}
          >
            <DonutChart
              data={DATASETS.sexoDenunciante.data}
              unit={DATASETS.sexoDenunciante.unit}
              palette={[ACCENT_PALETTE[1], ACCENT_PALETTE[5]]}
            />
          </ChartCard>

          <ChartCard
            title={DATASETS.sexoDenunciado.title}
            subtitle={DATASETS.sexoDenunciado.subtitle}
            info={DATASETS.sexoDenunciado.info}
            icon={DATASETS.sexoDenunciado.icon}
            total={total("sexoDenunciado")}
          >
            <DonutChart
              data={DATASETS.sexoDenunciado.data}
              unit={DATASETS.sexoDenunciado.unit}
              palette={[ACCENT_PALETTE[1], ACCENT_PALETTE[5], ACCENT_PALETTE[7]]}
            />
          </ChartCard>

          <ChartCard
            title={DATASETS.calificacion.title}
            subtitle={DATASETS.calificacion.subtitle}
            info={DATASETS.calificacion.info}
            icon={DATASETS.calificacion.icon}
            total={total("calificacion")}
          >
            <HorizontalBars data={DATASETS.calificacion.data} unit={DATASETS.calificacion.unit} />
          </ChartCard>

          <ChartCard
            title={DATASETS.tipoSancion.title}
            subtitle={DATASETS.tipoSancion.subtitle}
            info={DATASETS.tipoSancion.info}
            icon={DATASETS.tipoSancion.icon}
            total={total("tipoSancion")}
          >
            <HorizontalBars data={DATASETS.tipoSancion.data} unit={DATASETS.tipoSancion.unit} />
          </ChartCard>

          <ChartCard
            title={DATASETS.tipoResolucion.title}
            subtitle={DATASETS.tipoResolucion.subtitle}
            info={DATASETS.tipoResolucion.info}
            icon={DATASETS.tipoResolucion.icon}
            className="lg:col-span-2"
          >
            <DonutChart
              data={DATASETS.tipoResolucion.data}
              unit={DATASETS.tipoResolucion.unit}
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
              <p className="text-[13px] font-semibold text-navy">Gobierno de Guadalajara</p>
              <p className="text-[12px] text-navy-300">
                Contraloría Ciudadana · Mirada Pública
              </p>
            </div>
          </div>
          <p className="max-w-md text-[11.5px] leading-snug text-navy-300">
            Prototipo de tablero interactivo para demostración. Los rangos de fecha son
            provisionales. Datos: Contraloría en Datos — Estadísticas.
          </p>
        </div>
      </footer>
    </main>
  );
}
