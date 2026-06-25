// Datos de Contraloría en Datos — Estadísticas
// Fuente: data/contraloria en datos - estadisticas.xlsx
// Las descripciones (tooltips) explican el significado de cada estadística.

export type Datum = {
  label: string;
  value: number;
  /** Explicación detallada que aparece en el tooltip del punto de dato. */
  info: string;
};

export type Dataset = {
  id: string;
  title: string;
  /** Subtítulo / descripción corta de la gráfica. */
  subtitle: string;
  /** Explicación general de la gráfica (tooltip del encabezado). */
  info: string;
  icon: string;
  unit?: string;
  data: Datum[];
};

// Marco temporal — PLACEHOLDER. Sustituir cuando se conozca el periodo real.
export const DATE_RANGE = {
  start: "1 ene 2024",
  end: "25 jun 2026",
  label: "Periodo de referencia (provisional)",
  note: "Rango de fechas de marcador de posición. Pendiente de confirmar con la fuente oficial.",
};

export type Kpi = {
  id: string;
  label: string;
  value: number;
  icon: string;
  /** Etapa dentro del flujo de atención de la denuncia. */
  stage: string;
  info: string;
};

// Flujo de atención: las denuncias avanzan por etapas (embudo del proceso).
export const KPIS: Kpi[] = [
  {
    id: "total",
    label: "Total de Denuncias Presentadas",
    value: 1387,
    icon: "/images/total.svg",
    stage: "Entrada",
    info: "Número total de denuncias ciudadanas recibidas por la Contraloría a través de todos los mecanismos de recepción (presencial, portal web, correo, WhatsApp, buzones, módulos itinerantes y llamada telefónica).",
  },
  {
    id: "denuncias",
    label: "Unidad de Denuncias",
    value: 1304,
    icon: "/images/g_expediente.svg",
    stage: "Etapa 1",
    info: "Expedientes que se encuentran en la Unidad de Denuncias, donde se realiza la recepción, registro y clasificación inicial de cada denuncia para determinar su ruta de atención.",
  },
  {
    id: "investigacion",
    label: "Unidad de Investigación",
    value: 72,
    icon: "/images/unidad_de_investigacion.svg",
    stage: "Etapa 2",
    info: "Expedientes en la Unidad de Investigación. Aquí se recaban pruebas y se determina si los hechos constituyen una posible falta administrativa que deba calificarse.",
  },
  {
    id: "substanciacion",
    label: "Unidad de Substanciación",
    value: 2,
    icon: "/images/unidad_de_subtratacion.svg",
    stage: "Etapa 3",
    info: "Expedientes en la Unidad de Substanciación, encargada de integrar y dar trámite al procedimiento de responsabilidad administrativa una vez calificada la falta.",
  },
  {
    id: "resolutora",
    label: "Unidad Resolutora",
    value: 9,
    icon: "/images/unidad_resolucion.svg",
    stage: "Etapa 4",
    info: "Expedientes en la Unidad Resolutora, donde se dicta la resolución final del procedimiento y, en su caso, se determina la sanción correspondiente.",
  },
];

export const DATASETS: Record<string, Dataset> = {
  recepcion: {
    id: "recepcion",
    title: "Mecanismos de Recepción de Denuncias",
    subtitle: "¿A través de qué canal llega la ciudadanía a denunciar?",
    info: "Distribución de las denuncias según el canal por el cual fueron recibidas. Permite identificar los medios más utilizados por la ciudadanía para presentar una denuncia.",
    icon: "/images/g_recepcion.svg",
    unit: "denuncias",
    data: [
      { label: "Personal", value: 619, info: "Denuncias presentadas de forma presencial en las oficinas de la Contraloría." },
      { label: "Portal Web", value: 525, info: "Denuncias capturadas en línea a través del portal de Contraloría en Datos." },
      { label: "Correo Electrónico", value: 168, info: "Denuncias enviadas por correo electrónico a la Contraloría." },
      { label: "WhatsApp", value: 30, info: "Denuncias recibidas mediante la línea de WhatsApp habilitada." },
      { label: "Módulos Itinerantes", value: 22, info: "Denuncias captadas en módulos móviles instalados temporalmente en distintos puntos de la ciudad." },
      { label: "Buzones", value: 15, info: "Denuncias depositadas en buzones físicos ubicados en dependencias municipales." },
      { label: "Llamada telefónica", value: 6, info: "Denuncias presentadas por vía telefónica." },
    ],
  },
  estatus: {
    id: "estatus",
    title: "Denuncias según su Estatus",
    subtitle: "Estado actual de las denuncias recibidas",
    info: "Situación procesal de cada denuncia. Muestra cuántas siguen activas y cuántas han sido archivadas, derivadas o turnadas a investigación.",
    icon: "/images/g_estatus.svg",
    unit: "denuncias",
    data: [
      { label: "Activa", value: 537, info: "Denuncias en trámite que continúan bajo análisis o atención." },
      { label: "Archivo por falta de elementos", value: 236, info: "Denuncias archivadas por no contar con elementos suficientes para continuar el procedimiento." },
      { label: "Archivo por incompetencia", value: 186, info: "Denuncias archivadas porque el asunto no corresponde a la competencia de la Contraloría." },
      { label: "Turnado a investigación", value: 146, info: "Denuncias remitidas a la Unidad de Investigación para recabar pruebas." },
      { label: "Archivo por Acumulación", value: 56, info: "Denuncias archivadas por referirse a hechos ya contenidos en otro expediente." },
      { label: "Derivado", value: 34, info: "Denuncias canalizadas a otra autoridad o instancia competente." },
      { label: "Estudio", value: 0, info: "Denuncias en etapa de estudio preliminar." },
    ],
  },
  dependencia: {
    id: "dependencia",
    title: "Dependencias más Denunciadas",
    subtitle: "Áreas del gobierno municipal con mayor número de denuncias",
    info: "Dependencias municipales señaladas con mayor frecuencia en las denuncias. La categoría \u201cNo lo sé\u201d agrupa los casos en que la persona denunciante no identificó la dependencia.",
    icon: "/images/g_n_exp_unidad_denuncias.svg",
    unit: "denuncias",
    data: [
      { label: "No lo sé", value: 187, info: "Denuncias en las que la persona denunciante no especificó la dependencia involucrada." },
      { label: "Dir. de Inspección y Vigilancia", value: 155, info: "Denuncias dirigidas a la Dirección de Inspección y Vigilancia." },
      { label: "Servicios Médicos Municipales", value: 121, info: "Denuncias relacionadas con Servicios Médicos Municipales." },
      { label: "Dir. de Movilidad y Transporte", value: 88, info: "Denuncias dirigidas a la Dirección de Movilidad y Transporte." },
      { label: "Comisaría de Policía", value: 54, info: "Denuncias relacionadas con la Comisaría de Policía de Guadalajara." },
      { label: "Dir. de Tianguis y Espacios Abiertos", value: 44, info: "Denuncias dirigidas a la Dirección de Tianguis y Espacios Abiertos." },
      { label: "Tesorería", value: 29, info: "Denuncias relacionadas con la Tesorería Municipal." },
    ],
  },
  sexoDenunciante: {
    id: "sexoDenunciante",
    title: "Denuncias por Sexo de la Persona Denunciante",
    subtitle: "¿Quién presenta las denuncias?",
    info: "Distribución por sexo de las personas que presentan denuncias ante la Contraloría.",
    icon: "/images/g_n_den_por_sexo_denunciante.svg",
    unit: "personas",
    data: [
      { label: "Masculino", value: 1136, info: "Denuncias presentadas por hombres (82.0% del total)." },
      { label: "Femenino", value: 249, info: "Denuncias presentadas por mujeres (18.0% del total)." },
    ],
  },
  sexoDenunciado: {
    id: "sexoDenunciado",
    title: "Denuncias por Sexo de la Persona Denunciada",
    subtitle: "¿A quién se denuncia?",
    info: "Distribución por sexo de las personas servidoras públicas señaladas en las denuncias.",
    icon: "/images/g_n_den_por_sexo_denunciado.svg",
    unit: "personas",
    data: [
      { label: "Masculino", value: 737, info: "Personas servidoras públicas denunciadas de sexo masculino (53.2%)." },
      { label: "Femenino", value: 441, info: "Personas servidoras públicas denunciadas de sexo femenino (31.8%)." },
      { label: "Prefiero no contestar", value: 207, info: "Denuncias en las que no se especificó el sexo de la persona denunciada (14.9%)." },
    ],
  },
  tipoResolucion: {
    id: "tipoResolucion",
    title: "Tipos de Resoluciones",
    subtitle: "Resultado de los procedimientos resueltos",
    info: "Clasificación de las resoluciones emitidas por la Unidad Resolutora según su resultado.",
    icon: "/images/g_n_tipo_de_resolucion.svg",
    unit: "resoluciones",
    data: [
      { label: "Con Sanción", value: 8, info: "Resoluciones en las que se determinó una sanción para la persona servidora pública." },
      { label: "Sin Sanción", value: 1, info: "Resoluciones en las que no se impuso sanción alguna." },
      { label: "Con y Sin Sanción", value: 0, info: "Resoluciones mixtas que incluyen partes con y sin sanción." },
      { label: "Abstención", value: 0, info: "Resoluciones en las que la autoridad se abstuvo de sancionar." },
      { label: "Seguimiento", value: 0, info: "Resoluciones que derivan en acciones de seguimiento." },
    ],
  },
  tipoSancion: {
    id: "tipoSancion",
    title: "Resoluciones por Tipo de Sanción",
    subtitle: "¿Qué sanciones se han impuesto?",
    info: "Tipo de sanción impuesta en las resoluciones que concluyeron con responsabilidad administrativa.",
    icon: "/images/g_n_resolu_por_tipo_sancion.svg",
    unit: "sanciones",
    data: [
      { label: "Inhabilitación temporal", value: 6, info: "Sanción que impide temporalmente ocupar un empleo, cargo o comisión en el servicio público." },
      { label: "Suspensión", value: 2, info: "Suspensión temporal del empleo, cargo o comisión." },
      { label: "Amonestación pública", value: 1, info: "Llamada de atención formal con carácter público." },
      { label: "Amonestación privada", value: 0, info: "Llamada de atención formal de carácter privado." },
      { label: "Destitución del cargo", value: 0, info: "Separación definitiva del empleo, cargo o comisión." },
    ],
  },
  calificacion: {
    id: "calificacion",
    title: "Calificaciones por Tipo de Falta",
    subtitle: "Cómo se califican las faltas investigadas",
    info: "Resultado de la calificación de las faltas tras la investigación: grave, no grave, o en trámite/archivo.",
    icon: "/images/g_n_cal_por_tipo_faltag.svg",
    unit: "casos",
    data: [
      { label: "Investigación en trámite", value: 58, info: "Casos cuya investigación continúa en proceso, aún sin calificación definitiva." },
      { label: "Acuerdo de conclusión y archivo", value: 15, info: "Casos concluidos y archivados por falta de elementos tras la investigación." },
      { label: "Falta No Grave", value: 8, info: "Faltas calificadas como no graves." },
      { label: "Falta Grave", value: 4, info: "Faltas calificadas como graves." },
      { label: "Grave y No Grave", value: 0, info: "Casos que incluyen faltas tanto graves como no graves." },
    ],
  },
};

export const ACCENT_PALETTE = [
  "#cc9f52", // gold (principal)
  "#009ade", // blue
  "#6cca98", // green
  "#9264cc", // purple
  "#ff9d6c", // orange
  "#e96cb0", // pink
  "#ffb700", // yellow
  "#808080", // gray
];
