import type {
  CaseListItem,
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

export interface CaseListItem {
  cid: string;
  name: string;
  caseType: string;
  countryOfOrigin: string;
  outcome: string;
  year: string;
  court?: string;
  lawyerUsed?: string;
  createdAt?: string;
}

export const listAllFiles = async (limit = 100): Promise<{ cases: CaseListItem[] }> => {
  return apiFetch(`/api/files?limit=${limit}`);
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

export const getContributorStats = async (walletAddress: string) => {
  return apiFetch<{
    casesUploaded: number;
    totalEarned: number;
    totalAccesses: number;
    cases: { cidHash: string; accessCount: number; earned: number; registeredAt: number }[];
  }>(`/api/cases/contributor/${walletAddress}`);
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

export const getContributorStats = async (walletAddress: string) => {
  return apiFetch<{
    casesUploaded: number;
    totalEarned: number;
    totalAccesses: number;
    cases: { cidHash: string; accessCount: number; earned: number; registeredAt: number }[];
  }>(`/api/stats/${walletAddress}`);
};

export const isPaymentRequired = (res: unknown): res is PaymentRequiredError => {
  return (
    typeof res === "object" &&
    res !== null &&
    (res as PaymentRequiredError).error === "Payment Required"
  );
};

// --- Chat sessions ---

export interface ChatSession {
  id: number;
  userId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChatMessageRecord {
  id: number;
  sessionId: number;
  role: string;
  content: string;
  createdAt: string;
}

export const listChatSessions = async (): Promise<{ sessions: ChatSession[] }> => {
  return apiFetch("/api/chat/sessions");
};

export const createChatSession = async (title?: string): Promise<ChatSession> => {
  return apiFetch("/api/chat/sessions", {
    method: "POST",
    body: JSON.stringify({ title }),
  });
};

export const deleteChatSession = async (id: number): Promise<void> => {
  await apiFetch(`/api/chat/sessions/${id}`, { method: "DELETE" });
};

export const getChatMessages = async (sessionId: number): Promise<{ messages: ChatMessageRecord[] }> => {
  return apiFetch(`/api/chat/sessions/${sessionId}/messages`);
};

export const addChatMessage = async (sessionId: number, role: string, content: string): Promise<ChatMessageRecord> => {
  return apiFetch(`/api/chat/sessions/${sessionId}/messages`, {
    method: "POST",
    body: JSON.stringify({ role, content }),
  });
};
