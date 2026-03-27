import axios from "axios";
 

const BLOCKCHAIN_API = "http://192.168.100.45:5000/api";

export interface BlockchainResponse {
  transactionId?: string; // p.ej. "Transaction submitted: <txHash>"
  error?: string;
}

function extractTxHash(res: BlockchainResponse): string {
  if (!res.transactionId) return "";
  // Captura un hash de 64 caracteres hexadecimales si existe
  const match = res.transactionId.match(/[0-9a-fA-F]{64}/);
  if (match) return match[0];
  // Si no, toma el último token
  const parts = res.transactionId.trim().split(/\s+/);
  return parts[parts.length - 1] ?? "";
}

export async function sendToBlockchain(
  actaId: number | string,
  payload: any
): Promise<string> {
  try
  {
    const url = `${BLOCKCHAIN_API}/Acta/${actaId}/ingreso`; // mismo endpoint para ambos casos
console.log("payload:", payload );
// ---- JSON básico para probar (ajústalo si Swagger pide otros campos) ----
    const testBody = {
      codigo: Number(actaId),
      seguridad: 0,
      provincia: 0,
      canton: 0,
      parroquia: 0,
      zona: 0,
      junta: 0,
      sexo: "M",
      dignidad: "Presidente",
      pagina: 1,
      numero_paginas: 1,
      path: "string",
      paginas: [
        {
          actaId: Number(actaId),
          numero: 1,
          nombre: "pagina-1.jpg",
          path: "string",
          url: "string",
          hash: "string",
          candidatos: [] as Array<{ id: number; orden: number; nombre?: string; votos?: number }>
        }
      ]
    };

  const { data } = await axios.post<BlockchainResponse>(url, payload, {
    headers: { "Content-Type": "application/json" },
    timeout: 90_000,
  });

  if (data?.error) {
    throw new Error(`Backend blockchain error: ${data.error}`);
  }

  const txHash = extractTxHash(data);
  if (!txHash) {
    throw new Error("No se pudo extraer el txHash de la respuesta del backend de blockchain.");
  }
  return txHash;

  }
  catch(e:any)
  {
    return e.message;
  }
  
}

