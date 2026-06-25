import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy/[0.06] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/images/mirada_publica_logo.png"
            alt="Mirada Pública"
            width={150}
            height={44}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </div>

        <nav className="hidden items-center gap-1 text-[13px] text-navy-400 md:flex">
          <span className="rounded-full px-3 py-1.5 transition hover:bg-navy-50 hover:text-navy-700">
            Contraloría en Datos
          </span>
          <span className="text-navy-200">/</span>
          <span className="rounded-full bg-gold/10 px-3 py-1.5 font-semibold text-gold-700">
            Estadísticas
          </span>
        </nav>

        <Image
          src="/images/logo-gdl-gold.png"
          alt="Gobierno de Guadalajara"
          width={130}
          height={44}
          className="h-9 w-auto sm:h-11"
          priority
        />
      </div>
    </header>
  );
}
