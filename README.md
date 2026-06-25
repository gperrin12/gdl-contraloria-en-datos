# Contraloría en Datos · Estadísticas — Tablero interactivo

Prototipo de rediseño del sitio **Contraloría en Datos / Estadísticas** de
[Mirada Pública](https://contraloriaendatos.guadalajara.gob.mx/estadisticas)
(Contraloría Ciudadana del Gobierno de Guadalajara) como un **dashboard interactivo**.

El objetivo es mostrar al equipo de Mirada Pública el *arte de lo posible*: las mismas
estadísticas que ya publica el sitio oficial, pero con gráficas mejoradas, **tooltips
explicativos** en cada dato y un selector de **rango de fechas** (provisional).

## Características

- **Embudo del proceso** (KPIs): muestra cómo avanzan las denuncias por las unidades
  (Denuncias → Investigación → Substanciación → Resolutora), con contadores animados.
- **Tooltips explicativos** en cada gráfica (ícono `i`) y en cada punto de dato (al pasar
  el cursor), describiendo qué significa la estadística.
- **Gráficas interactivas** (barras y dona) construidas con Recharts.
- **Rango de fechas provisional** — marcador de posición hasta contar con el periodo oficial
  (ver `DATE_RANGE` en `lib/data.ts`).
- Identidad de marca del **Gobierno de Guadalajara**: color dorado `#cc9f52`, paleta
  complementaria y tipografía **Seravek**.

## Tecnología

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

Para producción:

```bash
npm run build && npm run start
```

## Estructura

```
app/                 # Layout, página principal y estilos globales (incl. @font-face de Seravek)
components/          # Header, KPIs, tarjetas de gráficas, tooltips
components/charts/   # Gráficas (barras horizontales, dona)
lib/data.ts          # Datos + descripciones (tooltips) + rango de fechas provisional
public/images/       # Íconos y logotipos (los mismos del sitio original)
public/fonts/        # Tipografía Seravek (.otf)
data/                # Fuente original (Excel)
```

## Datos

Los datos provienen de `data/contraloria en datos - estadisticas.xlsx` y están tipados en
`lib/data.ts`. Para actualizarlos, edita ese archivo (cada serie incluye su explicación).

> **Nota:** El rango de fechas es un **marcador de posición** y debe sustituirse por el
> periodo real de los datos cuando esté disponible.
