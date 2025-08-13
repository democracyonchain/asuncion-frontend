type Etapa = "digitacion" | "control";

type CandidatoItem = {
  id?: number;
  orden?: number;
  nombre?: string;
  votos?: number;   // por si tu backend lo usa
  votosIa?: number; // si estabas usando este nombre
  path?: string;
  url?: string;
  hash?: string;
  estado?: number;
};

type PaginaItem = {
  actaId: number;
  numero: number;
  nombre?: string;  // usaremos la etapa como nombre
  path?: string;
  url?: string;
  hash?: string;
  candidatos?: CandidatoItem[];
  estado?: number;
};

type EscaneoRequest = {
  codigo: number;
  seguridad: number;
  provincia: number;
  canton: number;
  parroquia: number;
  zona: number;
  junta: number;
  sexo: string;
  dignidad: number;
  pagina: number;
  numero_paginas: number;
  path: string;
  paginas: PaginaItem[];
  estado?: number;
  sufragantes?: number;
  blancos?: number;
  nulos?: number;
  txIcr?: string;
};

// Helpers de normalización
const n = (v: any, def = 0) => (v === undefined || v === null || v === "" ? def : Number(v));
const s = (v: any, def = "") => (v === undefined || v === null ? def : String(v));

// Limpia null/undefined y arrays vacíos (no elimina 0)
function compact<T extends Record<string, any>>(obj: T): Partial<T> {
  const out: any = Array.isArray(obj) ? [] : {};
  Object.entries(obj).forEach(([k, v]) => {
    if (v === null || v === undefined) return;

    // 👇 NUEVO: trata "" como vacío también
    if (typeof v === "string" && v.trim() === "") return;

    if (Array.isArray(v)) {
      const arr = v
        .map((x) => (typeof x === "object" ? compact(x) : x))
        .filter((x) => x !== undefined && x !== null && !(typeof x === "string" && x.trim() === ""));
      if (arr.length) out[k] = arr;
      return;
    }

    if (typeof v === "object") {
      const sub = compact(v);
      if (Object.keys(sub).length) out[k] = sub;
      return;
    }

    out[k] = v;
  });
  return out;
}



/**
 * Construye el payload con el shape que acepta el backend para /Acta/{id}/escaneo.
 * Soporta tanto "digitacion" como "control".
 */
export function buildBlockchainPayload(formData: any, etapa: Etapa): EscaneoRequest {
  const actaId = n(formData?.actaId);
  const dignidadId = n(formData?.idDignidad_acta?.id ?? formData?.dignidad, 1);

  // Valores de votos según la etapa
  const valores: any[] =
    etapa === "control"
      ? formData?.atributoRecorteControl ?? []
      : formData?.atributoRecorte ?? [];

  // IDs de candidatos
  const candidatosIds: any[] =
    formData?.dataGeneral?.candidatoId ??
    formData?.dataGeneral?.candidatos ??
    [];

  // Construye candidatos alineando índices candidatosIds <-> valores
  const candidatos: CandidatoItem[] = candidatosIds
    .map((cid, i) => {
      const id = n(cid, NaN);
      if (Number.isNaN(id)) return undefined;

      const votosNum = n(valores[i], 0);

      return {
        id,
        orden: i + 1,
        votos: votosNum,      // si el backend usa "votos"
        votosIa: votosNum,    // si usa "votosIa" (despreciará el no usado)
        estado: 0,
        // path/url/hash si los tienes en tu form:
        path: undefined,
        url: undefined,
        hash: undefined,
      };
    })
    .filter(Boolean) as CandidatoItem[];

  // Número de página (si tienes otro campo, cámbialo aquí)
  const numeroPagina = n(formData?.numeroPagina ?? 1, 1);

  const pagina: PaginaItem = {
    actaId,
    numero: numeroPagina,
    nombre: etapa, // "digitacion" | "control"
    candidatos,
    estado: 0,
    path: s(formData?.pathPagina, undefined as any),
    url: s(formData?.urlPagina, undefined as any),
    hash: s(formData?.hashPagina, undefined as any),
  };

  const base: EscaneoRequest = {
    codigo: actaId,
    seguridad: n(formData?.seguridad, 0),
    provincia: n(formData?.provincia, 0),
    canton: n(formData?.canton, 0),
    parroquia: n(formData?.parroquia, 0),
    zona: n(formData?.zona, 0),
    junta: n(formData?.junta, 0),
    sexo: s(formData?.sexo, "M"),
    dignidad: dignidadId,
    pagina: numeroPagina,
    numero_paginas: n(formData?.numero_paginas ?? 1, 1),
    path: s(formData?.path, "string"),
    paginas: [compact(pagina) as PaginaItem],
    estado: n(formData?.estado, 0),
    sufragantes: n(formData?.sufragantes, undefined as any),
    blancos: n(formData?.blancos, undefined as any),
    nulos: n(formData?.nulos, undefined as any),
    txIcr: s(formData?.txIcr, undefined as any),
  };

  // Limpia opcionales nulos/undefined pero conserva 0s
  return compact(base) as EscaneoRequest;
}



