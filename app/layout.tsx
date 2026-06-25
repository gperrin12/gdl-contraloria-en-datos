import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
