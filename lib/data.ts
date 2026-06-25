// Datos de Contraloría en Datos — Estadísticas
// Fuente: data/contraloria en datos - estadisticas.xlsx
// Cada texto es bilingüe (es / en). Las descripciones (info) explican el
// significado de cada estadística y se muestran en los tooltips.

export type Lang = "es" | "en";

/** Cadena localizada en español e inglés. */
export type L = { es: string; en: string };

export const t = (s: L, lang: Lang) => s[lang];

// ---------- Tipos de origen (bilingües) ----------
export type RawDatum = { label: L; value: number; info: L };
export type RawDataset = {
  id: string;
  title: L;
  subtitle: L;
  info: L;
  icon: string;
  unit?: L;
  data: RawDatum[];
};
export type RawKpi = { id: string; label: L; value: number; icon: string; info: L };

// ---------- Tipos planos (ya localizados, los consumen las gráficas) ----------
export type Datum = { label: string; value: number; info: string };
export type Dataset = {
  id: string;
  title: string;
  subtitle: string;
  info: string;
  icon: string;
  unit?: string;
  data: Datum[];
};
export type Kpi = { id: string; label: string; value: number; icon: string; info: string };

// Marco temporal — PLACEHOLDER. Sustituir cuando se conozca el periodo real.
export const DATE_RANGE = {
  start: { es: "1 ene 2024", en: "Jan 1, 2024" },
  end: { es: "25 jun 2026", en: "Jun 25, 2026" },
  label: {
    es: "Periodo de referencia (provisional)",
    en: "Reference period (provisional)",
  },
  note: {
    es: "Rango de fechas de marcador de posición. Pendiente de confirmar con la fuente oficial.",
    en: "Placeholder date range. Pending confirmation from the official source.",
  },
};

export const KPIS: RawKpi[] = [
  {
    id: "total",
    label: { es: "Total de Denuncias Presentadas", en: "Total Complaints Filed" },
    value: 1387,
    icon: "/images/total.svg",
    info: {
      es: "Número total de denuncias ciudadanas recibidas por la Contraloría a través de todos los mecanismos de recepción (presencial, portal web, correo, WhatsApp, buzones, módulos itinerantes y llamada telefónica).",
      en: "Total number of citizen complaints received by the Comptroller's Office through all intake channels (in person, web portal, email, WhatsApp, drop boxes, mobile modules, and phone call).",
    },
  },
  {
    id: "denuncias",
    label: { es: "Unidad de Denuncias", en: "Complaints Unit" },
    value: 1304,
    icon: "/images/g_n_exp_unidad_denuncias.svg",
    info: {
      es: "Expedientes que se encuentran en la Unidad de Denuncias, donde se realiza la recepción, registro y clasificación inicial de cada denuncia para determinar su ruta de atención.",
      en: "Case files in the Complaints Unit, where each complaint is received, registered, and given an initial classification to determine how it will be handled.",
    },
  },
  {
    id: "investigacion",
    label: { es: "Unidad de Investigación", en: "Investigation Unit" },
    value: 72,
    icon: "/images/unidad_de_investigacion.svg",
    info: {
      es: "Expedientes en la Unidad de Investigación. Aquí se recaban pruebas y se determina si los hechos constituyen una posible falta administrativa que deba calificarse.",
      en: "Case files in the Investigation Unit. Here evidence is gathered and it is determined whether the facts constitute a possible administrative offense that must be classified.",
    },
  },
  {
    id: "substanciacion",
    label: { es: "Unidad de Substanciación", en: "Substantiation Unit" },
    value: 2,
    icon: "/images/unidad_de_subtratacion.svg",
    info: {
      es: "Expedientes en la Unidad de Substanciación, encargada de integrar y dar trámite al procedimiento de responsabilidad administrativa una vez calificada la falta.",
      en: "Case files in the Substantiation Unit, responsible for assembling and processing the administrative liability proceeding once the offense has been classified.",
    },
  },
  {
    id: "resolutora",
    label: { es: "Unidad Resolutora", en: "Resolution Unit" },
    value: 9,
    icon: "/images/unidad_resolucion.svg",
    info: {
      es: "Expedientes en la Unidad Resolutora, donde se dicta la resolución final del procedimiento y, en su caso, se determina la sanción correspondiente.",
      en: "Case files in the Resolution Unit, where the final ruling of the proceeding is issued and, where applicable, the corresponding sanction is determined.",
    },
  },
];

export const DATASETS: Record<string, RawDataset> = {
  recepcion: {
    id: "recepcion",
    title: { es: "Mecanismos de Recepción de Denuncias", en: "Complaint Intake Channels" },
    subtitle: {
      es: "¿A través de qué canal llega la ciudadanía a denunciar?",
      en: "Through which channel do citizens file their complaints?",
    },
    info: {
      es: "Distribución de las denuncias según el canal por el cual fueron recibidas. Permite identificar los medios más utilizados por la ciudadanía para presentar una denuncia.",
      en: "Breakdown of complaints by the channel through which they were received. Shows the means most used by citizens to file a complaint.",
    },
    icon: "/images/g_recepcion.svg",
    unit: { es: "denuncias", en: "complaints" },
    data: [
      {
        label: { es: "Personal", en: "In person" },
        value: 619,
        info: {
          es: "Denuncias presentadas de forma presencial en las oficinas de la Contraloría.",
          en: "Complaints filed in person at the Comptroller's offices.",
        },
      },
      {
        label: { es: "Portal Web", en: "Web Portal" },
        value: 525,
        info: {
          es: "Denuncias capturadas en línea a través del portal de Contraloría en Datos.",
          en: "Complaints submitted online through the Contraloría en Datos portal.",
        },
      },
      {
        label: { es: "Correo Electrónico", en: "Email" },
        value: 168,
        info: {
          es: "Denuncias enviadas por correo electrónico a la Contraloría.",
          en: "Complaints sent to the Comptroller's Office by email.",
        },
      },
      {
        label: { es: "WhatsApp", en: "WhatsApp" },
        value: 30,
        info: {
          es: "Denuncias recibidas mediante la línea de WhatsApp habilitada.",
          en: "Complaints received via the dedicated WhatsApp line.",
        },
      },
      {
        label: { es: "Módulos Itinerantes", en: "Mobile Modules" },
        value: 22,
        info: {
          es: "Denuncias captadas en módulos móviles instalados temporalmente en distintos puntos de la ciudad.",
          en: "Complaints collected at mobile modules temporarily set up around the city.",
        },
      },
      {
        label: { es: "Buzones", en: "Drop Boxes" },
        value: 15,
        info: {
          es: "Denuncias depositadas en buzones físicos ubicados en dependencias municipales.",
          en: "Complaints deposited in physical drop boxes located in municipal offices.",
        },
      },
      {
        label: { es: "Llamada telefónica", en: "Phone Call" },
        value: 6,
        info: {
          es: "Denuncias presentadas por vía telefónica.",
          en: "Complaints filed by phone.",
        },
      },
    ],
  },
  estatus: {
    id: "estatus",
    title: { es: "Denuncias según su Estatus", en: "Complaints by Status" },
    subtitle: {
      es: "Estado actual de las denuncias recibidas",
      en: "Current status of the complaints received",
    },
    info: {
      es: "Situación procesal de cada denuncia. Muestra cuántas siguen activas y cuántas han sido archivadas, derivadas o turnadas a investigación.",
      en: "Procedural status of each complaint. Shows how many remain active and how many have been closed, referred, or sent to investigation.",
    },
    icon: "/images/g_estatus.svg",
    unit: { es: "denuncias", en: "complaints" },
    data: [
      {
        label: { es: "Activa", en: "Active" },
        value: 537,
        info: {
          es: "Denuncias en trámite que continúan bajo análisis o atención.",
          en: "Complaints in progress that are still under review or being handled.",
        },
      },
      {
        label: { es: "Archivo por falta de elementos", en: "Closed — insufficient evidence" },
        value: 236,
        info: {
          es: "Denuncias archivadas por no contar con elementos suficientes para continuar el procedimiento.",
          en: "Complaints closed for lack of sufficient evidence to continue the proceeding.",
        },
      },
      {
        label: { es: "Archivo por incompetencia", en: "Closed — lack of jurisdiction" },
        value: 186,
        info: {
          es: "Denuncias archivadas porque el asunto no corresponde a la competencia de la Contraloría.",
          en: "Complaints closed because the matter falls outside the Comptroller's jurisdiction.",
        },
      },
      {
        label: { es: "Turnado a investigación", en: "Sent to investigation" },
        value: 146,
        info: {
          es: "Denuncias remitidas a la Unidad de Investigación para recabar pruebas.",
          en: "Complaints forwarded to the Investigation Unit to gather evidence.",
        },
      },
      {
        label: { es: "Archivo por Acumulación", en: "Closed — consolidation" },
        value: 56,
        info: {
          es: "Denuncias archivadas por referirse a hechos ya contenidos en otro expediente.",
          en: "Complaints closed because they refer to facts already contained in another case file.",
        },
      },
      {
        label: { es: "Derivado", en: "Referred" },
        value: 34,
        info: {
          es: "Denuncias canalizadas a otra autoridad o instancia competente.",
          en: "Complaints channeled to another competent authority or body.",
        },
      },
      {
        label: { es: "Estudio", en: "Under study" },
        value: 0,
        info: {
          es: "Denuncias en etapa de estudio preliminar.",
          en: "Complaints in the preliminary study stage.",
        },
      },
    ],
  },
  dependencia: {
    id: "dependencia",
    title: { es: "Dependencias más Denunciadas", en: "Most-Reported Departments" },
    subtitle: {
      es: "Áreas del gobierno municipal con mayor número de denuncias",
      en: "Municipal government areas with the most complaints",
    },
    info: {
      es: "Dependencias municipales señaladas con mayor frecuencia en las denuncias. La categoría \u201cNo lo sé\u201d agrupa los casos en que la persona denunciante no identificó la dependencia.",
      en: "Municipal departments most frequently named in complaints. The \u201cI don't know\u201d category groups cases where the complainant did not identify the department.",
    },
    icon: "/images/g_expediente.svg",
    unit: { es: "denuncias", en: "complaints" },
    data: [
      {
        label: { es: "No lo sé", en: "I don't know" },
        value: 187,
        info: {
          es: "Denuncias en las que la persona denunciante no especificó la dependencia involucrada.",
          en: "Complaints in which the complainant did not specify the department involved.",
        },
      },
      {
        label: { es: "Dir. de Inspección y Vigilancia", en: "Inspection & Oversight Dept." },
        value: 155,
        info: {
          es: "Denuncias dirigidas a la Dirección de Inspección y Vigilancia.",
          en: "Complaints directed at the Inspection and Oversight Department.",
        },
      },
      {
        label: { es: "Servicios Médicos Municipales", en: "Municipal Medical Services" },
        value: 121,
        info: {
          es: "Denuncias relacionadas con Servicios Médicos Municipales.",
          en: "Complaints related to Municipal Medical Services.",
        },
      },
      {
        label: { es: "Dir. de Movilidad y Transporte", en: "Mobility & Transport Dept." },
        value: 88,
        info: {
          es: "Denuncias dirigidas a la Dirección de Movilidad y Transporte.",
          en: "Complaints directed at the Mobility and Transport Department.",
        },
      },
      {
        label: { es: "Comisaría de Policía", en: "Police Department" },
        value: 54,
        info: {
          es: "Denuncias relacionadas con la Comisaría de Policía de Guadalajara.",
          en: "Complaints related to the Guadalajara Police Department.",
        },
      },
      {
        label: { es: "Dir. de Tianguis y Espacios Abiertos", en: "Street Markets & Open Spaces Dept." },
        value: 44,
        info: {
          es: "Denuncias dirigidas a la Dirección de Tianguis y Espacios Abiertos.",
          en: "Complaints directed at the Street Markets and Open Spaces Department.",
        },
      },
      {
        label: { es: "Tesorería", en: "Treasury" },
        value: 29,
        info: {
          es: "Denuncias relacionadas con la Tesorería Municipal.",
          en: "Complaints related to the Municipal Treasury.",
        },
      },
    ],
  },
  sexoDenunciante: {
    id: "sexoDenunciante",
    title: {
      es: "Denuncias por Sexo de la Persona Denunciante",
      en: "Complaints by Sex of the Complainant",
    },
    subtitle: { es: "¿Quién presenta las denuncias?", en: "Who files the complaints?" },
    info: {
      es: "Distribución por sexo de las personas que presentan denuncias ante la Contraloría.",
      en: "Breakdown by sex of the people who file complaints with the Comptroller's Office.",
    },
    icon: "/images/g_n_den_por_sexo_denunciante.svg",
    unit: { es: "personas", en: "people" },
    data: [
      {
        label: { es: "Masculino", en: "Male" },
        value: 1136,
        info: {
          es: "Denuncias presentadas por hombres (82.0% del total).",
          en: "Complaints filed by men (82.0% of the total).",
        },
      },
      {
        label: { es: "Femenino", en: "Female" },
        value: 249,
        info: {
          es: "Denuncias presentadas por mujeres (18.0% del total).",
          en: "Complaints filed by women (18.0% of the total).",
        },
      },
    ],
  },
  sexoDenunciado: {
    id: "sexoDenunciado",
    title: {
      es: "Denuncias por Sexo de la Persona Denunciada",
      en: "Complaints by Sex of the Accused",
    },
    subtitle: { es: "¿A quién se denuncia?", en: "Who is being reported?" },
    info: {
      es: "Distribución por sexo de las personas servidoras públicas señaladas en las denuncias.",
      en: "Breakdown by sex of the public servants named in complaints.",
    },
    icon: "/images/g_n_den_por_sexo_denunciado.svg",
    unit: { es: "personas", en: "people" },
    data: [
      {
        label: { es: "Masculino", en: "Male" },
        value: 737,
        info: {
          es: "Personas servidoras públicas denunciadas de sexo masculino (53.2%).",
          en: "Public servants reported who are male (53.2%).",
        },
      },
      {
        label: { es: "Femenino", en: "Female" },
        value: 441,
        info: {
          es: "Personas servidoras públicas denunciadas de sexo femenino (31.8%).",
          en: "Public servants reported who are female (31.8%).",
        },
      },
      {
        label: { es: "Prefiero no contestar", en: "Prefer not to say" },
        value: 207,
        info: {
          es: "Denuncias en las que no se especificó el sexo de la persona denunciada (14.9%).",
          en: "Complaints in which the sex of the accused was not specified (14.9%).",
        },
      },
    ],
  },
  tipoResolucion: {
    id: "tipoResolucion",
    title: { es: "Tipos de Resoluciones", en: "Types of Rulings" },
    subtitle: {
      es: "Resultado de los procedimientos resueltos",
      en: "Outcome of the proceedings that have been resolved",
    },
    info: {
      es: "Clasificación de las resoluciones emitidas por la Unidad Resolutora según su resultado.",
      en: "Classification of the rulings issued by the Resolution Unit according to their outcome.",
    },
    icon: "/images/g_n_tipo_de_resolucion.svg",
    unit: { es: "resoluciones", en: "rulings" },
    data: [
      {
        label: { es: "Con Sanción", en: "With Sanction" },
        value: 8,
        info: {
          es: "Resoluciones en las que se determinó una sanción para la persona servidora pública.",
          en: "Rulings in which a sanction was imposed on the public servant.",
        },
      },
      {
        label: { es: "Sin Sanción", en: "Without Sanction" },
        value: 1,
        info: {
          es: "Resoluciones en las que no se impuso sanción alguna.",
          en: "Rulings in which no sanction was imposed.",
        },
      },
      {
        label: { es: "Con y Sin Sanción", en: "With & Without Sanction" },
        value: 0,
        info: {
          es: "Resoluciones mixtas que incluyen partes con y sin sanción.",
          en: "Mixed rulings that include parts with and without sanction.",
        },
      },
      {
        label: { es: "Abstención", en: "Abstention" },
        value: 0,
        info: {
          es: "Resoluciones en las que la autoridad se abstuvo de sancionar.",
          en: "Rulings in which the authority abstained from sanctioning.",
        },
      },
      {
        label: { es: "Seguimiento", en: "Follow-up" },
        value: 0,
        info: {
          es: "Resoluciones que derivan en acciones de seguimiento.",
          en: "Rulings that result in follow-up actions.",
        },
      },
    ],
  },
  tipoSancion: {
    id: "tipoSancion",
    title: { es: "Resoluciones por Tipo de Sanción", en: "Rulings by Type of Sanction" },
    subtitle: {
      es: "¿Qué sanciones se han impuesto?",
      en: "What sanctions have been imposed?",
    },
    info: {
      es: "Tipo de sanción impuesta en las resoluciones que concluyeron con responsabilidad administrativa.",
      en: "Type of sanction imposed in the rulings that concluded with administrative liability.",
    },
    icon: "/images/g_n_resolu_por_tipo_sancion.svg",
    unit: { es: "sanciones", en: "sanctions" },
    data: [
      {
        label: { es: "Inhabilitación temporal", en: "Temporary disqualification" },
        value: 6,
        info: {
          es: "Sanción que impide temporalmente ocupar un empleo, cargo o comisión en el servicio público.",
          en: "Sanction that temporarily bars the person from holding a public position or role.",
        },
      },
      {
        label: { es: "Suspensión", en: "Suspension" },
        value: 2,
        info: {
          es: "Suspensión temporal del empleo, cargo o comisión.",
          en: "Temporary suspension from the position or role.",
        },
      },
      {
        label: { es: "Amonestación pública", en: "Public reprimand" },
        value: 1,
        info: {
          es: "Llamada de atención formal con carácter público.",
          en: "Formal warning of a public nature.",
        },
      },
      {
        label: { es: "Amonestación privada", en: "Private reprimand" },
        value: 0,
        info: {
          es: "Llamada de atención formal de carácter privado.",
          en: "Formal warning of a private nature.",
        },
      },
      {
        label: { es: "Destitución del cargo", en: "Removal from office" },
        value: 0,
        info: {
          es: "Separación definitiva del empleo, cargo o comisión.",
          en: "Permanent removal from the position or role.",
        },
      },
    ],
  },
  calificacion: {
    id: "calificacion",
    title: { es: "Calificaciones por Tipo de Falta", en: "Offense Classifications" },
    subtitle: {
      es: "Cómo se califican las faltas investigadas",
      en: "How investigated offenses are classified",
    },
    info: {
      es: "Resultado de la calificación de las faltas tras la investigación: grave, no grave, o en trámite/archivo.",
      en: "Result of classifying offenses after investigation: serious, non-serious, or in progress/closed.",
    },
    icon: "/images/g_n_cal_por_tipo_faltag.svg",
    unit: { es: "casos", en: "cases" },
    data: [
      {
        label: { es: "Investigación en trámite", en: "Investigation in progress" },
        value: 58,
        info: {
          es: "Casos cuya investigación continúa en proceso, aún sin calificación definitiva.",
          en: "Cases whose investigation is still ongoing, without a final classification yet.",
        },
      },
      {
        label: { es: "Acuerdo de conclusión y archivo", en: "Conclusion & closure agreement" },
        value: 15,
        info: {
          es: "Casos concluidos y archivados por falta de elementos tras la investigación.",
          en: "Cases concluded and closed for lack of evidence after the investigation.",
        },
      },
      {
        label: { es: "Falta No Grave", en: "Non-serious offense" },
        value: 8,
        info: {
          es: "Faltas calificadas como no graves.",
          en: "Offenses classified as non-serious.",
        },
      },
      {
        label: { es: "Falta Grave", en: "Serious offense" },
        value: 4,
        info: {
          es: "Faltas calificadas como graves.",
          en: "Offenses classified as serious.",
        },
      },
      {
        label: { es: "Grave y No Grave", en: "Serious & Non-serious" },
        value: 0,
        info: {
          es: "Casos que incluyen faltas tanto graves como no graves.",
          en: "Cases that include both serious and non-serious offenses.",
        },
      },
    ],
  },
};

// ---------- Localizadores ----------
export function localizeKpis(lang: Lang): Kpi[] {
  return KPIS.map((k) => ({
    id: k.id,
    value: k.value,
    icon: k.icon,
    label: k.label[lang],
    info: k.info[lang],
  }));
}

export function localizeDataset(ds: RawDataset, lang: Lang): Dataset {
  return {
    id: ds.id,
    icon: ds.icon,
    title: ds.title[lang],
    subtitle: ds.subtitle[lang],
    info: ds.info[lang],
    unit: ds.unit ? ds.unit[lang] : undefined,
    data: ds.data.map((d) => ({
      value: d.value,
      label: d.label[lang],
      info: d.info[lang],
    })),
  };
}

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
