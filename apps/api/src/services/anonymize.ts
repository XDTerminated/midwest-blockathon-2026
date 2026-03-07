const PII_PATTERNS: { pattern: RegExp; replacement: string }[] = [
  // A-Numbers (immigration file numbers).
  { pattern: /\bA[-\s]?\d{8,9}\b/gi, replacement: "[A-NUMBER REDACTED]" },
  // Social Security Numbers.
  { pattern: /\b\d{3}[-\s]\d{2}[-\s]\d{4}\b/g, replacement: "[SSN REDACTED]" },
  // Phone numbers (US formats).
  {
    pattern: /\b(\+1[-.\s]?)?\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}\b/g,
    replacement: "[PHONE REDACTED]",
  },
  // Email addresses.
  {
    pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}\b/gi,
    replacement: "[EMAIL REDACTED]",
  },
  // Street addresses (heuristic).
  {
    pattern:
      /\b\d+\s+[A-Za-z\s]+(Street|St|Avenue|Ave|Boulevard|Blvd|Drive|Dr|Road|Rd|Lane|Ln|Court|Ct|Way|Place|Pl)\b\.?/gi,
    replacement: "[ADDRESS REDACTED]",
  },
  // ZIP codes.
  { pattern: /\b\d{5}(-\d{4})?\b/g, replacement: "[ZIP REDACTED]" },
  // Case/file numbers that aren't A-numbers.
  { pattern: /\b(case|file|receipt)\s*#?\s*\d{10,}\b/gi, replacement: "[FILE NUMBER REDACTED]" },
];

// Returns redacted text + whether PII was detected.
const stripPII = (text: string): { redacted: string; hadPII: boolean } => {
  let redacted = text;
  let hadPII = false;

  for (const { pattern, replacement } of PII_PATTERNS) {
    const before = redacted;
    redacted = redacted.replace(pattern, replacement);
    if (redacted !== before) hadPII = true;
  }

  return { redacted, hadPII };
};

export { stripPII };
