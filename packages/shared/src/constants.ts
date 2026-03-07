import type { CaseType, CategorySlug, Outcome } from "./types";

export const CASE_TYPES: { value: CaseType; label: string }[] = [
  { value: "asylum", label: "Asylum" },
  { value: "green-card-family", label: "Green Card (Family)" },
  { value: "green-card-employment", label: "Green Card (Employment)" },
  { value: "cancellation-removal-lpr", label: "Cancellation of Removal (LPR)" },
  { value: "cancellation-removal-non-lpr", label: "Cancellation of Removal (Non-LPR)" },
  { value: "u-visa", label: "U-Visa" },
  { value: "t-visa", label: "T-Visa" },
  { value: "vawa", label: "VAWA Self-Petition" },
  { value: "sijs", label: "Special Immigrant Juvenile Status (SIJS)" },
  { value: "tps", label: "Temporary Protected Status (TPS)" },
  { value: "daca", label: "DACA" },
  { value: "naturalization", label: "Naturalization (N-400)" },
  { value: "h1b", label: "H-1B Visa" },
  { value: "l1", label: "L-1 Visa" },
  { value: "o1", label: "O-1 Visa" },
  { value: "deportation-defense", label: "Deportation Defense" },
  { value: "voluntary-departure", label: "Voluntary Departure" },
  { value: "motion-to-reopen", label: "Motion to Reopen / Reconsider" },
  { value: "k1-fiance", label: "K-1 Fiancé Visa" },
];

export const OUTCOMES: { value: Outcome; label: string }[] = [
  { value: "approved", label: "Approved" },
  { value: "denied", label: "Denied" },
  { value: "pending", label: "Pending" },
  { value: "appealed", label: "Appealed" },
  { value: "withdrawn", label: "Withdrawn" },
  { value: "remanded", label: "Remanded" },
];

export const CATEGORIES: {
  slug: CategorySlug;
  label: string;
  description: string;
  emoji: string;
}[] = [
  {
    slug: "asylum-refugee",
    label: "Asylum & Refugee",
    description: "Affirmative and defensive asylum, withholding of removal, CAT protection",
    emoji: "🛡️",
  },
  {
    slug: "green-card-family",
    label: "Green Card (Family)",
    description: "Family-based permanent residence, I-130, adjustment of status",
    emoji: "👨‍👩‍👧",
  },
  {
    slug: "green-card-employment",
    label: "Green Card (Employment)",
    description: "EB-1, EB-2, EB-3, NIW, PERM labor certification",
    emoji: "💼",
  },
  {
    slug: "removal-defense",
    label: "Removal Defense",
    description: "Cancellation of removal, deportation defense, BIA appeals",
    emoji: "⚖️",
  },
  {
    slug: "victim-protections",
    label: "Victim Protections",
    description: "U-Visa, T-Visa, VAWA self-petition, SIJS",
    emoji: "🤝",
  },
  {
    slug: "humanitarian",
    label: "Humanitarian",
    description: "TPS, DACA, humanitarian parole, CHNV programs",
    emoji: "🌍",
  },
  {
    slug: "work-visas",
    label: "Work Visas",
    description: "H-1B, L-1, O-1, H-2A/H-2B, status changes",
    emoji: "🏢",
  },
  {
    slug: "citizenship",
    label: "Citizenship",
    description: "N-400 naturalization, derivative citizenship, certificate of citizenship",
    emoji: "🇺🇸",
  },
  {
    slug: "family-reunification",
    label: "Family Reunification",
    description: "K-1 fiancé visa, K-3/CR-1 spouse visa, I-130, affidavit of support",
    emoji: "❤️",
  },
];

export const COMMON_DOCUMENTS = [
  "I-589 (Asylum Application)",
  "I-485 (Adjustment of Status)",
  "I-130 (Petition for Alien Relative)",
  "I-140 (Immigrant Petition)",
  "I-360 (VAWA / SIJS Petition)",
  "I-918 (U-Visa)",
  "I-821 (TPS)",
  "I-821D (DACA)",
  "I-765 (Work Authorization)",
  "I-131 (Advance Parole)",
  "I-864 (Affidavit of Support)",
  "I-693 (Medical Exam)",
  "I-129 (H-1B Petition)",
  "I-129F (K-1 Fiancé Petition)",
  "N-400 (Naturalization)",
  "EOIR-42B (Cancellation of Removal - Non-LPR)",
  "EOIR-42A (Cancellation of Removal - LPR)",
  "Personal Declaration / Affidavit",
  "Country Conditions Report",
  "Expert Affidavit",
  "Medical Records",
  "Police Reports",
  "Tax Returns",
  "School Records",
  "Employment Letters",
  "Bank Statements / Joint Accounts",
  "Lease / Mortgage Documents",
  "Wedding / Relationship Photos",
  "Psychological Evaluation",
  "Community Support Letters",
];

export const LEGAL_DISCLAIMER =
  "This is legal information based on anonymized case data, not legal advice. Immigration cases are highly fact-specific. Please consult a qualified immigration attorney for advice about your specific situation.";
