import type {
  SearchResult,
  CaseRecord,
  CaseListItem,
  UploadResult,
  VerifyResult,
  PresignResult,
  PaymentRequiredError,
  CategorySlug,
} from "@immivault/shared";

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001").replace(/\/+$/, "");

async function apiFetch<T>(
  path: string,
  options?: RequestInit & { paymentProof?: string }
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options?.paymentProof ? { "X-Payment-Proof": options.paymentProof } : {}),
  };

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: "include",
    headers: { ...headers, ...(options?.headers as Record<string, string>) },
  });

  if (!res.ok && res.status !== 402) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }

  return res.json() as Promise<T>;
}

export type ChatMessage = { role: "user" | "assistant"; content: string };

export async function searchCases(
  q: string,
  params?: { caseType?: string; country?: string; outcome?: string; limit?: number }
): Promise<SearchResult> {
  const query = new URLSearchParams({ q, ...Object.fromEntries(
    Object.entries(params ?? {}).filter(([, v]) => v != null).map(([k, v]) => [k, String(v)])
  )});
  return apiFetch<SearchResult>(`/api/search?${query}`);
}

export async function chatSearch(
  q: string,
  history: ChatMessage[] = []
): Promise<SearchResult> {
  return apiFetch<SearchResult>("/api/search", {
    method: "POST",
    body: JSON.stringify({ q, history }),
  });
}

export async function listCases(page = 1, limit = 20): Promise<{ cases: CaseListItem[]; page: number; limit: number }> {
  return apiFetch(`/api/cases?page=${page}&limit=${limit}`);
}

export async function listCasesByCategory(slug: CategorySlug): Promise<{ cases: CaseListItem[]; slug: string }> {
  return apiFetch(`/api/cases/category/${slug}`);
}

export async function getCase(
  cid: string,
  paymentProof?: string
): Promise<(CaseRecord & { cid: string }) | PaymentRequiredError> {
  return apiFetch<(CaseRecord & { cid: string }) | PaymentRequiredError>(
    `/api/cases/${cid}`,
    { paymentProof }
  );
}

export async function uploadCase(data: Record<string, unknown>): Promise<UploadResult> {
  return apiFetch<UploadResult>("/api/upload/case", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function uploadFile(file: File): Promise<{ cid: string; name: string }> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/api/upload/file`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Upload failed: ${text}`);
  }

  return res.json();
}

export interface UploadedFile {
  cid: string;
  name: string;
  mimeType?: string;
  size?: number;
  createdAt: string;
}

export async function listFiles(): Promise<{ files: UploadedFile[] }> {
  return apiFetch("/api/upload/files");
}

export async function verifyCase(cid: string): Promise<VerifyResult> {
  return apiFetch<VerifyResult>(`/api/verify/${cid}`);
}

export async function presignCase(cid: string, expiresMinutes = 1440): Promise<PresignResult> {
  return apiFetch<PresignResult>("/api/share/presign", {
    method: "POST",
    body: JSON.stringify({ cid, expiresMinutes }),
  });
}

export function isPaymentRequired(res: unknown): res is PaymentRequiredError {
  return (
    typeof res === "object" &&
    res !== null &&
    (res as PaymentRequiredError).error === "Payment Required"
  );
}
