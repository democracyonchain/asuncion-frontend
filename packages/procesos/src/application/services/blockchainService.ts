import axios from "axios";
import { Constantes } from "../../../../library/src/components/service/constantes";

const BLOCKCHAIN_API = Constantes.URLBLOCKCHAIN;

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
  const url = `${BLOCKCHAIN_API}/Acta/${actaId}/escaneo`; // mismo endpoint para ambos casos

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
