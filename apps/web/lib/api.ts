import type {
  CaseListItem,
  CaseRecord,
  CategorySlug,
  CreditInfo,
  EscrowInfo,
  PaymentRequiredError,
  PresignResult,
  SearchResult,
  TrustVoteSummary,
  UploadResult,
  VerifyResult,
} from "@immivault/shared";

export type { CaseListItem };

const API_URL = typeof window !== "undefined" ? "" : (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001").replace(/\/+$/, "");

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

export const translateTexts = async (
  texts: Record<string, string>,
  targetLang: string
): Promise<Record<string, string>> => {
  const res = await apiFetch<{ translations: Record<string, string> }>("/api/translate", {
    method: "POST",
    body: JSON.stringify({ texts, targetLang }),
  });
  return res.translations;
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

// --- Escrow ---

export const stakeCase = async (
  cid: string,
  cidHash: string,
  contributorWallet: string,
  stakeTxHash?: string,
): Promise<EscrowInfo> => {
  return apiFetch("/api/escrow/stake", {
    method: "POST",
    body: JSON.stringify({ cid, cidHash, contributorWallet, stakeTxHash }),
  });
};

export const getMyEscrows = async (): Promise<EscrowInfo[]> => {
  return apiFetch("/api/escrow/my");
};

export const getEscrowStatus = async (cid: string): Promise<EscrowInfo> => {
  return apiFetch(`/api/escrow/${cid}`);
};

// --- Trust voting ---

export const submitTrustVote = async (
  cid: string,
  voteType: "approve" | "flag",
): Promise<{ ok?: boolean; error?: string; newStatus?: string }> => {
  return apiFetch("/api/trust/vote", {
    method: "POST",
    body: JSON.stringify({ cid, voteType }),
  });
};

export const getTrustStatus = async (cid: string): Promise<TrustVoteSummary> => {
  return apiFetch(`/api/trust/status/${cid}`);
};

// --- Lawyer requests ---

export interface LawyerRequestData {
  caseType: string;
  countryOfOrigin: string;
  summary: string;
  urgency: "low" | "medium" | "high" | "urgent";
  preferredLanguage: string;
  contactEmail: string;
  contactPhone?: string;
  relatedCid?: string;
}

export interface LawyerRequestRecord {
  id: number;
  userId: string;
  caseType: string;
  countryOfOrigin: string;
  summary: string;
  urgency: string;
  preferredLanguage: string;
  contactEmail: string;
  contactPhone: string | null;
  relatedCid: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export const createLawyerRequest = async (data: LawyerRequestData): Promise<LawyerRequestRecord> => {
  return apiFetch("/api/lawyer", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const listLawyerRequests = async (): Promise<{ requests: LawyerRequestRecord[] }> => {
  return apiFetch("/api/lawyer");
};

export const cancelLawyerRequest = async (id: number): Promise<LawyerRequestRecord> => {
  return apiFetch(`/api/lawyer/${id}/cancel`, { method: "PATCH" });
};

// --- Credits ---

export const getMyCredits = async (): Promise<CreditInfo[]> => {
  return apiFetch("/api/credits/my");
};
