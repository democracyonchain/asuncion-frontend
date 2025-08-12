type Etapa = "digitacion" | "control";

function compact<T extends Record<string, any>>(obj: T): Partial<T> {
  // elimina null/undefined y arrays vacíos, sin romper tipos
  const out: any = Array.isArray(obj) ? [] : {};
  Object.entries(obj).forEach(([k, v]) => {
    if (v === null || v === undefined) return;
    if (Array.isArray(v)) {
      const arr = v.map((x) => (typeof x === "object" ? compact(x) : x)).filter((x) => x !== undefined && x !== null);
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
 * Construye el payload para el backend de blockchain según el formulario.
 * - Usa `atributoRecorte` (digitación) o `atributoRecorteControl` (control).
 * - Asocia cada valor con su `candidatoId` tomado de `dataGeneral.candidatoId`.
 */
export function buildBlockchainPayload(formData: any, etapa: Etapa) {
  const actaId = Number(formData?.actaId);
  const dignidadId = Number(formData?.idDignidad_acta?.id);

  const valores: any[] =
    etapa === "control"
      ? formData?.atributoRecorteControl ?? []
      : formData?.atributoRecorte ?? [];

  const candidatosIds: any[] = formData?.dataGeneral?.candidatoId ?? [];

  // Mapea candidatos + votos (solo índices que tengan candidato y algún valor)
  const candidatos = candidatosIds
    .map((cid, i) => ({
      id: Number(cid),
      orden: i + 1,
      patidoId: 0,      // si lo tienes, ponlo; si no, queda 0
      votosIa: Number(valores[i]) || 0,
      path: undefined,  // opcionales
      url: undefined,
      hash: undefined,
      estado: 0,
    }))
    .filter((c) => !Number.isNaN(c.id));

  const pagina = {
    actaId,
    numero: 1,               // si manejas número de página real, cámbialo aquí
    nombre: etapa,           // "digitacion" | "control"
    path: undefined,
    url: undefined,
    hash: undefined,
    candidatos,
    estado: 0,
  };

  // Construye objeto base (solo lo que tengas; lo demás se omite con compact)
  const base = {
    codigo: actaId,
    seguridad: undefined,
    provincia: undefined,
    canton: undefined,
    parroquia: undefined,
    zona: undefined,
    junta: undefined,
    sexo: undefined,
    dignidad: dignidadId,
    pagina: 1,
    numero_paginas: 1,
    path: undefined,
    paginas: [pagina],
    estado: 0,
    sufragantes: undefined,
    blancos: undefined,
    nulos: undefined,
    txIcr: formData?.txIcr, // si existe en tu form
  };

  return compact(base);
}


