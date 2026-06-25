import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contraloría en Datos · Estadísticas | Gobierno de Guadalajara",
  description:
    "Tablero interactivo de estadísticas de la Contraloría Ciudadana de Guadalajara — Mirada Pública.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
