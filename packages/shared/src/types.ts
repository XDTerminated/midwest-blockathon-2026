export type CaseType =
  | "asylum"
  | "green-card-family"
  | "green-card-employment"
  | "cancellation-removal-lpr"
  | "cancellation-removal-non-lpr"
  | "u-visa"
  | "t-visa"
  | "vawa"
  | "sijs"
  | "tps"
  | "daca"
  | "naturalization"
  | "h1b"
  | "l1"
  | "o1"
  | "deportation-defense"
  | "voluntary-departure"
  | "motion-to-reopen"
  | "k1-fiance";

export type Outcome =
  | "approved"
  | "denied"
  | "pending"
  | "appealed"
  | "withdrawn"
  | "remanded";

export type CategorySlug =
  | "asylum-refugee"
  | "green-card-family"
  | "green-card-employment"
  | "removal-defense"
  | "victim-protections"
  | "humanitarian"
  | "work-visas"
  | "citizenship"
  | "family-reunification";

export interface CaseRecord {
  caseType: CaseType;
  countryOfOrigin: string;
  outcome: Outcome;
  year: string;
  court?: string;
  narrative: string;
  documentsUsed: string[];
  keyFactors: string;
  lessonsLearned: string;
  timelineMonths: number;
  lawyerUsed: boolean;
  formsUsed: string[];
  interviewDetails?: string;
  evidenceSubmitted?: string;
  rfesReceived?: string;
  denialReasons?: string;
  appealDetails?: string;
  // Added by upload pipeline.
  cid?: string;
  contributorWallet?: string;
  uploadedAt?: string;
}

export interface CitedCaseRef {
  cid: string;
  type: CaseType;
  outcome: Outcome;
  country?: string;
  year?: string;
}

export interface SearchResult {
  analysis: string;
  citedCases: CitedCaseRef[];
  disclaimer: string;
  detectedLanguage?: string;
}

export interface CaseListItem {
  cid: string;
  name: string;
  caseType: CaseType;
  countryOfOrigin: string;
  outcome: Outcome;
  year: string;
  court?: string;
  lawyerUsed?: string;
  createdAt?: string;
}

export interface UploadResult {
  cid: string;
  name: string;
  signature?: string;
}

export interface VerifyResult {
  cid: string;
  isValid: boolean;
  signedAt?: string;
  signedBy?: string;
}

export interface PresignResult {
  url: string;
  expiresAt: string;
  expiresMinutes: number;
}

export interface PaymentRequiredError {
  error: "Payment Required";
  amount: string;
  network: "base";
  asset: "USDC";
  description: string;
  paymentInstructions: string;
}
