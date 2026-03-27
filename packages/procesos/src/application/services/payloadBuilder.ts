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
  paginas: PaginaItem[];
  estado?: number;
  sufragantes?: number;
  blancos?: number;
  nulos?: number;
  txIcr?: string;
};


type CandidatoItemBlockChain= {
  id?: number;
  orden?: number;
  nombre?: string;
  votos?: number;  
};

type PaginaItemBlockChain = {
  actaId: number;
  numero: number;
  nombre?: string;  // usaremos la etapa como nombre
  path?: string;
  url?: string;
  hash?: string;
  candidatos?: CandidatoItemBlockChain[];
  estado?: number;
};

type EscaneoRequestBlockChain = {
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
  paginas: PaginaItemBlockChain[];
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
export function buildBlockchainPayload(formData: any, etapa: Etapa): EscaneoRequestBlockChain {
  const actaId = n(formData?.actaId);
  const dignidadId = n(formData?.idDignidad_acta?.id ?? formData?.dignidad, 1);

  // Valores de votos 
  const valores: any[]=
  etapa=='digitacion'
  ? formData?.atributoRecorte ?? []
  :formData?.atributoRecorteControl ?? [];

  // IDs de candidatos
  const candidatosIds: any[] =
    formData?.dataGeneral?.candidatoId ??
    formData?.dataGeneral?.candidatos ??
    [];
  
  // Nombres de candidatos
  const candidatosNombres: any[] =
    formData?.dataGeneral?.candidatoNombre ??
    formData?.dataGeneral?.candidatos ??
    []; 

    console.log('candidatosIds', candidatosNombres)
    console.log('valores', valores)
  // Construye candidatos alineando índices candidatosIds <-> valores
  const candidatos: CandidatoItemBlockChain[] = candidatosIds
    .map((cid, i) => {
      const id = n(cid, NaN);
      if (Number.isNaN(id)) return undefined;

      const votosNum = n(valores[i], 0);
      const nombresNum = s(candidatosNombres[i],"");
      
      return {
        id,
        orden: i + 1,
        votos: votosNum,
        nombre: nombresNum
      };
    })
    .filter(Boolean) as CandidatoItemBlockChain[];

  // Número de página (si tienes otro campo, cámbialo aquí)
  const numeroPagina = n(formData?.numeroPagina ?? 1, 1);

  const pagina: PaginaItemBlockChain = {
    actaId,
    numero: numeroPagina,
    nombre: etapa, // "digitacion" | "control"
    candidatos: candidatos,
    estado: 0,
    path: s(formData?.pathPagina, undefined as any),
    url: s(formData?.urlPagina, undefined as any),
    hash: s(formData?.hashPagina, undefined as any),
  };
console.log('provincia***:', formData?.provincia)
  const base: EscaneoRequestBlockChain = {
    codigo: actaId,
    seguridad: n(formData?.seguridad, 0),
    provincia: formData?.provincia,
    canton: formData?.canton, 
    parroquia: formData?.parroquia,
    zona: formData?.zona, 
    junta: n(formData?.junta, 0),
    sexo: formData?.sexo, 
    dignidad: dignidadId,
    pagina: numeroPagina,
    numero_paginas: n(formData?.numero_paginas ?? 1, 1),
    paginas: [compact(pagina) as PaginaItemBlockChain],
    estado: n(formData?.estado, 0),
    sufragantes: n(formData?.sufragantes, undefined as any),
    blancos: n(formData?.blancos, undefined as any),
    nulos: n(formData?.nulos, undefined as any),
    txIcr: s(formData?.txIcr, undefined as any),
  };

  // Limpia opcionales nulos/undefined pero conserva 0s
  return compact(base) as EscaneoRequestBlockChain;
}



