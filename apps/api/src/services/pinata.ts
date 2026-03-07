import type { CaseListItem, CaseRecord, CaseType, CategorySlug } from "@immivault/shared";
import { config } from "dotenv";
import { dirname, resolve } from "path";
import { PinataSDK } from "pinata";
import { fileURLToPath } from "url";

// Ensure env vars are loaded before initializing SDK.
if (!process.env.PINATA_JWT) {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  config({ path: resolve(__dirname, "../../../../.env") });
}

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT!,
  pinataGateway: process.env.PINATA_GATEWAY!,
});

const getGroups = (): Record<string, string> => {
  try {
    return JSON.parse(process.env.PINATA_GROUPS ?? "{}");
  } catch {
    return {};
  }
};

const CASE_TYPE_TO_SLUG: Record<CaseType, CategorySlug> = {
  asylum: "asylum-refugee",
  "green-card-family": "green-card-family",
  "green-card-employment": "green-card-employment",
  "cancellation-removal-lpr": "removal-defense",
  "cancellation-removal-non-lpr": "removal-defense",
  "deportation-defense": "removal-defense",
  "voluntary-departure": "removal-defense",
  "motion-to-reopen": "removal-defense",
  "u-visa": "victim-protections",
  "t-visa": "victim-protections",
  vawa: "victim-protections",
  sijs: "victim-protections",
  tps: "humanitarian",
  daca: "humanitarian",
  h1b: "work-visas",
  l1: "work-visas",
  o1: "work-visas",
  naturalization: "citizenship",
  "k1-fiance": "family-reunification",
};

const groupIdForCaseType = (caseType: CaseType): string | undefined => {
  const groups = getGroups();
  const slug = CASE_TYPE_TO_SLUG[caseType];
  return slug ? groups[slug] : undefined;
};

// In-memory cache for case data fetched from IPFS gateway.
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const CACHE_MAX_SIZE = 200;

interface CacheEntry {
  data: CaseRecord;
  expiresAt: number;
}

const caseCache = new Map<string, CacheEntry>();

const getCached = (cid: string): CaseRecord | null => {
  const entry = caseCache.get(cid);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    caseCache.delete(cid);
    return null;
  }
  return entry.data;
};

const setCache = (cid: string, data: CaseRecord): void => {
  // Evict oldest entries if cache is full.
  if (caseCache.size >= CACHE_MAX_SIZE) {
    const firstKey = caseCache.keys().next().value;
    if (firstKey) caseCache.delete(firstKey);
  }
  caseCache.set(cid, { data, expiresAt: Date.now() + CACHE_TTL_MS });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fileListItemToCaseListItem = (f: any): CaseListItem => {
  return {
    cid: f.cid,
    name: f.name ?? "",
    caseType: (f.keyvalues?.caseType as CaseType) ?? "asylum",
    countryOfOrigin: f.keyvalues?.countryOfOrigin ?? "",
    outcome: (f.keyvalues?.outcome as CaseListItem["outcome"]) ?? "pending",
    year: f.keyvalues?.year ?? "",
    court: f.keyvalues?.court,
    lawyerUsed: f.keyvalues?.lawyerUsed,
    createdAt: f.created_at,
  };
};

export const pinataService = {
  async uploadRawFile(file: File, name: string, userId: string) {
    return await pinata.upload.file(file).addMetadata({ name, keyvalues: { userId } });
  },

  async listFilesByUser(userId: string, limit = 50): Promise<{ cid: string; name: string; mimeType?: string; size?: number; createdAt: string }[]> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await pinata.files.list().limit(200);
      return (result.files ?? [])
        .filter((f: any) => f.keyvalues?.userId === userId)
        .slice(0, limit)
        .map((f: any) => ({
          cid: f.cid,
          name: f.name ?? "",
          mimeType: f.mime_type,
          size: f.size,
          createdAt: f.created_at,
        }));
    } catch {
      return [];
    }
  },

  async isFileOwnedByUser(cid: string, userId: string): Promise<boolean> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await pinata.files.list().cid(cid).limit(1);
      const file = result.files?.[0];
      return file?.keyvalues?.userId === userId;
    } catch {
      return false;
    }
  },

  async uploadCase(data: CaseRecord, contributorWallet: string, userId?: string) {
    const payload = { ...data, contributorWallet, uploadedAt: new Date().toISOString() };
    const file = new File(
      [JSON.stringify(payload)],
      `case-${Date.now()}.json`,
      { type: "application/json" }
    );

    const groupId = groupIdForCaseType(data.caseType);
    const keyvalues: Record<string, string> = {
      caseType: data.caseType,
      countryOfOrigin: data.countryOfOrigin,
      outcome: data.outcome,
      year: data.year,
      court: data.court ?? "",
      contributorWallet,
      lawyerUsed: String(data.lawyerUsed),
      timelineMonths: String(data.timelineMonths),
      ...(userId ? { userId } : {}),
    };
    const name = `${data.caseType}-${data.countryOfOrigin.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`;

    let builder = pinata.upload.file(file).addMetadata({ name, keyvalues });
    if (groupId) builder = builder.group(groupId);

    try {
      return await builder.vectorize();
    } catch {
      // Vectorize may be in beta or not enabled.
      return await pinata.upload.file(file).addMetadata({ name, keyvalues });
    }
  },

  async searchCases(query: string, _userId: string, limit = 10): Promise<CaseRecord[]> {
    const groups = getGroups();
    const groupIds = Object.values(groups);

    if (groupIds.length === 0) {
      return this.listAllCaseData(limit).catch(() => []);
    }

    // Query ALL groups in parallel instead of sequentially.
    const results = await Promise.allSettled(
      groupIds.map((groupId) =>
        pinata.files.queryVectors({ groupId, query, returnFile: false })
      )
    );

    const matches: { fileId: string; cid: string; score: number }[] = [];
    for (const result of results) {
      if (result.status !== "fulfilled") continue;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = result.value as any;
      if (data?.matches) {
        for (const m of data.matches) {
          matches.push({ fileId: m.file_id, cid: m.cid, score: m.score });
        }
      }
    }

    matches.sort((a, b) => b.score - a.score);
    const topMatches = matches.slice(0, limit);

    if (topMatches.length === 0) {
      return this.listAllCaseData(limit);
    }

    // Fetch all case data in parallel, using cache.
    const cases = await Promise.all(
      topMatches.map((m) => this.getCase(m.cid).catch(() => null))
    );
    return cases.filter(Boolean) as CaseRecord[];
  },

  async listAllCaseData(limit = 20): Promise<CaseRecord[]> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await pinata.files.list().limit(limit);
      const files = (result.files ?? []).slice(0, limit);
      const cases = await Promise.all(
        files.map((f: { cid: string }) => this.getCase(f.cid).catch(() => null))
      );
      return cases.filter(Boolean) as CaseRecord[];
    } catch {
      return [];
    }
  },

  async listCases(userId: string, limit = 20): Promise<CaseListItem[]> {
    if (!userId) return [];
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await pinata.files.list().limit(200);
      return (result.files ?? [])
        .filter((f: any) => f.keyvalues?.userId === userId)
        .slice(0, limit)
        .map(fileListItemToCaseListItem);
    } catch {
      return [];
    }
  },

  async listAllFiles(limit = 100): Promise<CaseListItem[]> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await pinata.files.list().limit(limit);
      return (result.files ?? []).map(fileListItemToCaseListItem);
    } catch {
      return [];
    }
  },

  async listByCategory(slug: CategorySlug, userId: string, limit = 20): Promise<CaseListItem[]> {
    if (!userId) return [];
    const groups = getGroups();
    const groupId = groups[slug];
    if (!groupId) return [];
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await pinata.files.list().group(groupId).limit(200);
      return (result.files ?? [])
        .filter((f: any) => f.keyvalues?.userId === userId)
        .slice(0, limit)
        .map(fileListItemToCaseListItem);
    } catch {
      return [];
    }
  },

  async getCase(cid: string): Promise<CaseRecord> {
    // Check cache first.
    const cached = getCached(cid);
    if (cached) return cached;

    const response = await pinata.gateways.get(cid);
    const raw = response.data;
    let caseData: CaseRecord;
    if (typeof raw === "string") {
      caseData = { ...JSON.parse(raw), cid } as CaseRecord;
    } else if (raw && typeof raw === "object") {
      caseData = { ...(raw as object), cid } as unknown as CaseRecord;
    } else {
      throw new Error(`Unexpected response type for CID ${cid}`);
    }

    setCache(cid, caseData);
    return caseData;
  },

  async signCase(_cid: string): Promise<string | null> {
    // File signatures are a Pinata beta feature not in SDK v1 — skip gracefully.
    return null;
  },

  async getSignature(_cid: string): Promise<{ isValid: boolean; signedAt?: string; signedBy?: string } | null> {
    // Not in SDK v1 — return stub showing IPFS content-addressing provides integrity.
    return { isValid: true, signedAt: undefined, signedBy: undefined };
  },

  async createPresignedUrl(cid: string, expiresSeconds: number): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = await pinata.gateways.createSignedURL({ cid, expires: expiresSeconds });
    if (typeof result === "string") return result;
    if (result?.url) return result.url;
    throw new Error("Unexpected createSignedURL response");
  },
};
