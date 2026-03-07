import type {
  CaseRecord,
  CategorySlug,
  PaymentRequiredError,
  PresignResult,
  SearchResult,
  UploadResult,
  VerifyResult,
} from "@immivault/shared";

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001").replace(/\/+$/, "");

const apiFetch = async <T>(
  path: string,
  options?: RequestInit & { paymentProof?: string }
): Promise<T> => {
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
};

export type ChatMessage = { role: "user" | "assistant"; content: string };

export const chatSearch = async (
  q: string,
  history: ChatMessage[] = []
): Promise<SearchResult> => {
  return apiFetch<SearchResult>("/api/search", {
    method: "POST",
    body: JSON.stringify({ q, history }),
  });
};

export const listCasesByCategory = async (slug: CategorySlug): Promise<{ cases: CaseListItem[]; slug: string }> => {
  return apiFetch(`/api/cases/category/${slug}`);
};

export const getCase = async (
  cid: string,
  paymentProof?: string
): Promise<(CaseRecord & { cid: string }) | PaymentRequiredError> => {
  return apiFetch<(CaseRecord & { cid: string }) | PaymentRequiredError>(
    `/api/cases/${cid}`,
    { paymentProof }
  );
};

export const uploadCase = async (data: Record<string, unknown>): Promise<UploadResult> => {
  return apiFetch<UploadResult>("/api/upload/case", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const uploadFile = async (file: File): Promise<{ cid: string; name: string }> => {
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
};

export interface UploadedFile {
  cid: string;
  name: string;
  mimeType?: string;
  size?: number;
  createdAt: string;
}

export const listFiles = async (): Promise<{ files: UploadedFile[] }> => {
  return apiFetch("/api/upload/files");
};

export const verifyCase = async (cid: string): Promise<VerifyResult> => {
  return apiFetch<VerifyResult>(`/api/verify/${cid}`);
};

export const presignCase = async (cid: string, expiresMinutes = 1440): Promise<PresignResult> => {
  return apiFetch<PresignResult>("/api/share/presign", {
    method: "POST",
    body: JSON.stringify({ cid, expiresMinutes }),
  });
};

export const textToSpeech = async (text: string, lang = "en"): Promise<Blob> => {
  const res = await fetch(`${API_URL}/api/tts`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, lang }),
  });

  if (!res.ok) {
    throw new Error(`TTS error ${res.status}`);
  }

  return res.blob();
};

export const isPaymentRequired = (res: unknown): res is PaymentRequiredError => {
  return (
    typeof res === "object" &&
    res !== null &&
    (res as PaymentRequiredError).error === "Payment Required"
  );
};
