import type { CaseRecord } from "@immivault/shared";

export const L1_O1_CASES: CaseRecord[] = [
  // ============================================================
  // L-1 VISA CASES (12 cases)
  // ============================================================

  // L-1A — Approved
  {
    caseType: "l1",
    countryOfOrigin: "Japan",
    outcome: "approved",
    year: "2023",
    court: "USCIS California Service Center",
    narrative:
      "L-1A petition for a senior VP of operations at a Japanese automotive manufacturer transferring to lead the U.S. subsidiary. Extensive documentation of managerial duties and organizational charts demonstrated qualifying role.",
    documentsUsed: [
      "I-129",
      "I-129S",
      "Organizational charts",
      "Employment verification letter",
      "Tax filings",
      "Corporate registration documents",
    ],
    keyFactors:
      "Clear evidence of managerial capacity over a large team with budget authority was decisive.",
    lessonsLearned:
      "Include detailed org charts showing direct and indirect reports to establish managerial capacity beyond any doubt.",
    timelineMonths: 4,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129S"],
  },

  // L-1B — Approved
  {
    caseType: "l1",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "L-1B petition for a software architect with specialized knowledge of a proprietary ERP platform used only within the company. Approval came after a thorough RFE response detailing the uniqueness of the knowledge.",
    documentsUsed: [
      "I-129",
      "I-129S",
      "Specialized knowledge declaration",
      "Training records",
      "Project documentation",
      "Employment letter",
    ],
    keyFactors:
      "Demonstrating that the proprietary platform knowledge could not be readily transferred to a U.S. worker was critical.",
    lessonsLearned:
      "For L-1B specialized knowledge, emphasize what makes the knowledge rare and company-specific rather than generally available in the industry.",
    timelineMonths: 6,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129S"],
    rfesReceived: "RFE requesting further evidence that the beneficiary's knowledge qualifies as specialized and is not generally held by others in the field.",
  },

  // L-1A — Approved
  {
    caseType: "l1",
    countryOfOrigin: "Germany",
    outcome: "approved",
    year: "2022",
    court: "USCIS California Service Center",
    narrative:
      "L-1A for a managing director of a German consulting firm opening a new U.S. office. Approved based on a strong business plan and evidence of the parent company's financial strength.",
    documentsUsed: [
      "I-129",
      "I-129S",
      "Business plan",
      "Lease agreement",
      "Financial statements",
      "Corporate relationship evidence",
    ],
    keyFactors:
      "A comprehensive business plan with realistic financial projections and proof of secured office space satisfied the new office requirements.",
    lessonsLearned:
      "New office L-1 petitions require a detailed business plan showing the U.S. entity can realistically support a managerial role within one year.",
    timelineMonths: 3,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129S"],
  },

  // L-1B — Denied
  {
    caseType: "l1",
    countryOfOrigin: "UK",
    outcome: "denied",
    year: "2023",
    court: "USCIS Vermont Service Center",
    narrative:
      "L-1B petition for a financial analyst at a London-based bank denied for failure to establish specialized knowledge. USCIS found the skills described were common industry knowledge rather than proprietary to the company.",
    documentsUsed: [
      "I-129",
      "I-129S",
      "Employment letter",
      "Resume",
      "Job description",
    ],
    keyFactors:
      "The petition failed to distinguish the beneficiary's knowledge from widely available financial analysis skills.",
    lessonsLearned:
      "Generic job duties and industry-standard skills will not meet the specialized knowledge threshold; focus on proprietary processes or systems unique to the company.",
    timelineMonths: 5,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129S"],
    denialReasons: "USCIS determined the beneficiary's knowledge was not specialized or proprietary but rather common in the financial services industry.",
  },

  // L-1A — Approved
  {
    caseType: "l1",
    countryOfOrigin: "South Korea",
    outcome: "approved",
    year: "2024",
    court: "USCIS California Service Center",
    narrative:
      "L-1A for a director of engineering at a South Korean semiconductor company transferring to oversee the U.S. R&D facility. Premium processing yielded approval in 12 business days.",
    documentsUsed: [
      "I-129",
      "I-129S",
      "I-907",
      "Organizational chart",
      "Board resolutions",
      "Employment verification",
      "Payroll records",
    ],
    keyFactors:
      "Well-documented executive capacity with authority over budgets, hiring, and strategic direction of the U.S. division.",
    lessonsLearned:
      "Premium processing is worth the fee for time-sensitive transfers; ensure all documentation is airtight before filing.",
    timelineMonths: 1,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129S", "I-907"],
  },

  // L-1A — Denied
  {
    caseType: "l1",
    countryOfOrigin: "Brazil",
    outcome: "denied",
    year: "2021",
    court: "USCIS Vermont Service Center",
    narrative:
      "L-1A petition for the owner of a small Brazilian export company denied because the U.S. office had only two employees, undermining the claim of a managerial role. USCIS found the beneficiary would primarily perform operational duties.",
    documentsUsed: [
      "I-129",
      "I-129S",
      "Business plan",
      "Employment letter",
      "Tax returns",
    ],
    keyFactors:
      "Insufficient staffing at the U.S. entity made it implausible that the beneficiary would function primarily in a managerial capacity.",
    lessonsLearned:
      "Small companies must show a realistic staffing plan that frees the transferee from day-to-day operational tasks to qualify as a manager.",
    timelineMonths: 7,
    lawyerUsed: false,
    formsUsed: ["I-129", "I-129S"],
    denialReasons: "USCIS concluded the beneficiary would be a hands-on operator rather than a manager given the small size of the U.S. office.",
  },

  // L-1B — Approved
  {
    caseType: "l1",
    countryOfOrigin: "France",
    outcome: "approved",
    year: "2025",
    court: "USCIS California Service Center",
    narrative:
      "L-1B for a senior engineer with deep expertise in a proprietary automotive safety system developed by a French manufacturer. Approved without RFE after submitting detailed technical documentation.",
    documentsUsed: [
      "I-129",
      "I-129S",
      "Technical documentation",
      "Patent filings",
      "Training certifications",
      "Employment letter",
    ],
    keyFactors:
      "Patent filings listing the beneficiary as co-inventor demonstrated knowledge not available outside the company.",
    lessonsLearned:
      "Patents and proprietary technical documentation are powerful evidence for L-1B specialized knowledge claims.",
    timelineMonths: 3,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129S"],
  },

  // L-1A — Pending
  {
    caseType: "l1",
    countryOfOrigin: "Canada",
    outcome: "pending",
    year: "2025",
    court: "USCIS Vermont Service Center",
    narrative:
      "L-1A petition for a regional manager at a Canadian tech company expanding to the U.S. Currently pending after responding to an RFE about the qualifying relationship between entities.",
    documentsUsed: [
      "I-129",
      "I-129S",
      "Corporate ownership documents",
      "Organizational chart",
      "Employment letter",
      "Business plan",
    ],
    keyFactors:
      "The complex corporate structure involving multiple subsidiaries required extensive documentation to prove the qualifying relationship.",
    lessonsLearned:
      "When corporate structures are layered, provide clear ownership diagrams and legal documents showing the chain of control from parent to subsidiary.",
    timelineMonths: 8,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129S"],
    rfesReceived: "RFE requesting additional evidence of the qualifying corporate relationship between the Canadian parent and the U.S. subsidiary.",
  },

  // L-1B — Approved
  {
    caseType: "l1",
    countryOfOrigin: "Australia",
    outcome: "approved",
    year: "2022",
    court: "USCIS California Service Center",
    narrative:
      "L-1B for a data scientist at an Australian fintech company with specialized knowledge of their proprietary fraud-detection algorithms. Approved after five months of processing.",
    documentsUsed: [
      "I-129",
      "I-129S",
      "Employment letter",
      "Technical white papers",
      "Training records",
      "Performance reviews",
    ],
    keyFactors:
      "Evidence that the beneficiary developed the proprietary algorithms and was the only person with full system knowledge was persuasive.",
    lessonsLearned:
      "Performance reviews and training records help establish that the beneficiary gained knowledge through years of company-specific experience, not general education.",
    timelineMonths: 5,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129S"],
  },

  // L-1A — Denied
  {
    caseType: "l1",
    countryOfOrigin: "China",
    outcome: "denied",
    year: "2020",
    court: "USCIS Vermont Service Center",
    narrative:
      "L-1A petition for a mid-level manager at a Chinese tech company denied after USCIS determined the beneficiary did not have one continuous year of employment abroad in a qualifying role. The beneficiary had gaps in employment.",
    documentsUsed: [
      "I-129",
      "I-129S",
      "Employment letter",
      "Payroll records",
      "Resume",
    ],
    keyFactors:
      "Gaps in the employment history meant the beneficiary could not demonstrate the required one continuous year of qualifying employment abroad.",
    lessonsLearned:
      "Ensure the beneficiary has a clear, continuous year of qualifying employment within the three years preceding the petition before filing.",
    timelineMonths: 6,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129S"],
    denialReasons: "Beneficiary did not meet the one-year continuous employment requirement in a managerial or executive capacity at the foreign entity.",
  },

  // L-1A — Approved
  {
    caseType: "l1",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2023",
    court: "USCIS California Service Center",
    narrative:
      "L-1A blanket petition for a plant manager at a large Mexican automotive parts manufacturer transferring to the U.S. factory. Approved at the consulate with minimal questioning.",
    documentsUsed: [
      "I-129S",
      "Blanket petition approval",
      "Employment letter",
      "Organizational chart",
      "Degree certificates",
      "Payroll records",
    ],
    keyFactors:
      "The company's existing blanket L-1 approval streamlined the process, and the beneficiary's clear managerial role was well documented.",
    lessonsLearned:
      "Large multinational companies should consider blanket L-1 petitions to simplify and expedite transfers for multiple employees.",
    timelineMonths: 2,
    lawyerUsed: true,
    formsUsed: ["I-129S"],
  },

  // L-1B — Withdrawn
  {
    caseType: "l1",
    countryOfOrigin: "Netherlands",
    outcome: "withdrawn",
    year: "2021",
    court: "USCIS Vermont Service Center",
    narrative:
      "L-1B petition for a supply chain specialist at a Dutch logistics company was withdrawn after the beneficiary accepted a position with a different employer. The case never reached adjudication.",
    documentsUsed: [
      "I-129",
      "I-129S",
      "Employment letter",
      "Job description",
    ],
    keyFactors:
      "The withdrawal was voluntary and unrelated to the merits of the case.",
    lessonsLearned:
      "If business circumstances change, withdraw the petition promptly to avoid unnecessary processing and maintain a clean filing history.",
    timelineMonths: 3,
    lawyerUsed: false,
    formsUsed: ["I-129", "I-129S"],
  },

  // ============================================================
  // O-1 VISA CASES (13 cases)
  // ============================================================

  // O-1A — Approved (sciences)
  {
    caseType: "o1",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "O-1A petition for a machine learning researcher with over 50 published papers and 3,000+ citations. Approved in premium processing after demonstrating sustained national recognition in AI research.",
    documentsUsed: [
      "I-129",
      "Advisory opinion letter",
      "Published articles",
      "Citation evidence",
      "Awards documentation",
      "Peer review invitations",
      "Employment offer letter",
    ],
    keyFactors:
      "High citation count and multiple invitations to judge the work of others in the field met several O-1A criteria.",
    lessonsLearned:
      "Academic researchers should compile citation metrics, editorial board memberships, and peer review history well before filing.",
    timelineMonths: 1,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-907"],
  },

  // O-1B — Approved (film)
  {
    caseType: "o1",
    countryOfOrigin: "Argentina",
    outcome: "approved",
    year: "2023",
    court: "USCIS California Service Center",
    narrative:
      "O-1B petition for an Argentine film director whose independent films screened at Cannes and Toronto. Strong advisory opinion from a major film industry union supported the petition.",
    documentsUsed: [
      "I-129",
      "Advisory opinion letter",
      "Festival selections and awards",
      "Press coverage",
      "Contracts with production companies",
      "Letters from industry peers",
    ],
    keyFactors:
      "Prestigious festival selections and critical acclaim in major publications established distinction in the motion picture arts.",
    lessonsLearned:
      "For O-1B in film, festival laurels, critical reviews, and a strong union advisory letter carry significant weight.",
    timelineMonths: 3,
    lawyerUsed: true,
    formsUsed: ["I-129"],
  },

  // O-1A — Denied (business)
  {
    caseType: "o1",
    countryOfOrigin: "Nigeria",
    outcome: "denied",
    year: "2022",
    court: "USCIS Vermont Service Center",
    narrative:
      "O-1A petition for a fintech startup founder denied for insufficient evidence of extraordinary ability. USCIS found that the applicant's achievements, while notable, did not rise to the level of sustained national or international acclaim.",
    documentsUsed: [
      "I-129",
      "Advisory opinion letter",
      "Press articles",
      "Revenue documentation",
      "Recommendation letters",
    ],
    keyFactors:
      "The evidence showed promising early-stage success but lacked the sustained acclaim or recognition required for O-1A.",
    lessonsLearned:
      "Startup founders should build a documented track record of awards, media coverage, and industry recognition before filing an O-1A petition.",
    timelineMonths: 5,
    lawyerUsed: true,
    formsUsed: ["I-129"],
    denialReasons: "Petitioner did not meet at least three of the eight evidentiary criteria for extraordinary ability in business.",
  },

  // O-1B — Approved (music)
  {
    caseType: "o1",
    countryOfOrigin: "South Korea",
    outcome: "approved",
    year: "2024",
    court: "USCIS California Service Center",
    narrative:
      "O-1B for a K-pop music producer with multiple platinum-certified albums and collaborations with internationally recognized artists. Approved without RFE.",
    documentsUsed: [
      "I-129",
      "Advisory opinion letter",
      "Album sales certifications",
      "Press coverage",
      "Grammy consideration letters",
      "Contracts and compensation records",
    ],
    keyFactors:
      "Platinum certifications and high-profile collaborations demonstrated distinction well above the ordinary in the music industry.",
    lessonsLearned:
      "Quantifiable commercial success such as sales certifications and chart positions are strong evidence for O-1B music petitions.",
    timelineMonths: 2,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-907"],
  },

  // O-1A — Approved (tech)
  {
    caseType: "o1",
    countryOfOrigin: "Russia",
    outcome: "approved",
    year: "2021",
    court: "USCIS Vermont Service Center",
    narrative:
      "O-1A petition for a cybersecurity expert who discovered multiple zero-day vulnerabilities and presented at DEF CON and Black Hat. Approved after responding to an RFE with additional evidence of judging and high salary.",
    documentsUsed: [
      "I-129",
      "Advisory opinion letter",
      "Conference presentations",
      "Published research",
      "Salary comparisons",
      "Media coverage",
      "Letters from industry leaders",
    ],
    keyFactors:
      "Presentations at top-tier security conferences combined with evidence of commanding a high salary relative to peers satisfied multiple criteria.",
    lessonsLearned:
      "Tech professionals should document speaking engagements, published work, and salary data showing they are in the top percentile of their field.",
    timelineMonths: 5,
    lawyerUsed: true,
    formsUsed: ["I-129"],
    rfesReceived: "RFE requesting additional evidence for the high salary and judging criteria.",
  },

  // O-1A — Denied (athletics)
  {
    caseType: "o1",
    countryOfOrigin: "Brazil",
    outcome: "denied",
    year: "2020",
    court: "USCIS California Service Center",
    narrative:
      "O-1A petition for a Brazilian jiu-jitsu competitor denied because regional competition results did not demonstrate sustained national or international acclaim. The advisory opinion was lukewarm.",
    documentsUsed: [
      "I-129",
      "Advisory opinion letter",
      "Competition results",
      "Training certifications",
      "Recommendation letters",
    ],
    keyFactors:
      "Regional-level achievements without national titles or international rankings were insufficient for O-1A extraordinary ability in athletics.",
    lessonsLearned:
      "Athletes must demonstrate acclaim at the national or international level through major titles, rankings, or Olympic participation rather than regional results.",
    timelineMonths: 4,
    lawyerUsed: false,
    formsUsed: ["I-129"],
    denialReasons: "Evidence of athletic achievement was limited to regional competitions and did not establish sustained national or international acclaim.",
  },

  // O-1B — Approved (fashion)
  {
    caseType: "o1",
    countryOfOrigin: "France",
    outcome: "approved",
    year: "2023",
    court: "USCIS Vermont Service Center",
    narrative:
      "O-1B for a French fashion designer whose collections appeared in Paris Fashion Week and were featured in Vogue and Elle. The strong portfolio of press coverage and industry awards secured approval.",
    documentsUsed: [
      "I-129",
      "Advisory opinion letter",
      "Fashion week participation records",
      "Press features in major publications",
      "Industry awards",
      "Contracts with major retailers",
    ],
    keyFactors:
      "Consistent coverage in top fashion publications and participation in a premier fashion week demonstrated distinction in the arts.",
    lessonsLearned:
      "Fashion professionals should maintain a well-organized portfolio of press, awards, and high-profile collaborations to support O-1B eligibility.",
    timelineMonths: 3,
    lawyerUsed: true,
    formsUsed: ["I-129"],
  },

  // O-1A — Approved (academia)
  {
    caseType: "o1",
    countryOfOrigin: "Germany",
    outcome: "approved",
    year: "2022",
    court: "USCIS California Service Center",
    narrative:
      "O-1A petition for a quantum physics professor with a Humboldt Research Award and editorial positions at two peer-reviewed journals. Approved with premium processing.",
    documentsUsed: [
      "I-129",
      "I-907",
      "Advisory opinion letter",
      "Award documentation",
      "Published articles",
      "Editorial board appointments",
      "Recommendation letters from Nobel laureates",
    ],
    keyFactors:
      "A prestigious international research award and editorial board memberships clearly satisfied multiple O-1A criteria.",
    lessonsLearned:
      "Named research awards and journal editorial roles are among the strongest evidence categories for O-1A in academia.",
    timelineMonths: 1,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-907"],
  },

  // O-1A — Pending (tech/business)
  {
    caseType: "o1",
    countryOfOrigin: "Israel",
    outcome: "pending",
    year: "2025",
    court: "USCIS Vermont Service Center",
    narrative:
      "O-1A petition for a serial entrepreneur who co-founded two venture-backed startups in the AI space. Currently pending after an RFE requesting further evidence of extraordinary ability beyond commercial success.",
    documentsUsed: [
      "I-129",
      "Advisory opinion letter",
      "Funding documentation",
      "Press coverage",
      "Patent filings",
      "Conference speaking invitations",
    ],
    keyFactors:
      "Venture funding and patents showed promise, but USCIS sought additional evidence that the beneficiary's contributions were extraordinary rather than merely successful.",
    lessonsLearned:
      "Startup funding alone is not sufficient for O-1A; petitioners must also show awards, media recognition, or evidence of judging others' work.",
    timelineMonths: 7,
    lawyerUsed: true,
    formsUsed: ["I-129"],
    rfesReceived: "RFE requesting additional evidence to meet at least three of the eight O-1A evidentiary criteria beyond original contributions.",
  },

  // O-1B — Denied (arts/music)
  {
    caseType: "o1",
    countryOfOrigin: "Colombia",
    outcome: "denied",
    year: "2021",
    court: "USCIS California Service Center",
    narrative:
      "O-1B petition for a Colombian singer-songwriter denied due to insufficient evidence of distinction. Local performances and a self-released album did not meet the standard for extraordinary achievement in the arts.",
    documentsUsed: [
      "I-129",
      "Advisory opinion letter",
      "Performance contracts",
      "Album release records",
      "Social media analytics",
    ],
    keyFactors:
      "The evidence showed a developing career but not the level of distinction or critical acclaim required for O-1B.",
    lessonsLearned:
      "Self-released recordings and local venue performances are insufficient; O-1B requires evidence of recognition from critics, industry awards, or major label interest.",
    timelineMonths: 4,
    lawyerUsed: true,
    formsUsed: ["I-129"],
    denialReasons: "Petitioner did not demonstrate distinction as evidenced by a record of critical acclaim, major awards, or leading roles in distinguished productions.",
  },

  // O-1A — Approved (sports/business)
  {
    caseType: "o1",
    countryOfOrigin: "Australia",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "O-1A petition for a former professional cricket player turned sports analytics CEO. Combined athletic achievements with business accomplishments to satisfy multiple evidentiary criteria.",
    documentsUsed: [
      "I-129",
      "Advisory opinion letter",
      "International competition records",
      "Press coverage",
      "Business revenue documentation",
      "Speaking engagement invitations",
      "Recommendation letters",
    ],
    keyFactors:
      "The combination of international athletic recognition and subsequent business success provided a compelling case across multiple criteria.",
    lessonsLearned:
      "Applicants with achievements spanning multiple domains can combine evidence from both fields to meet the O-1A threshold.",
    timelineMonths: 3,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-907"],
  },

  // O-1A — Approved (sciences)
  {
    caseType: "o1",
    countryOfOrigin: "China",
    outcome: "approved",
    year: "2023",
    court: "USCIS California Service Center",
    narrative:
      "O-1A for a biomedical researcher with breakthrough published work on CRISPR gene editing and membership in selective scientific societies. Approved after demonstrating original contributions of major significance.",
    documentsUsed: [
      "I-129",
      "Advisory opinion letter",
      "Published research articles",
      "Citation index reports",
      "Membership certificates",
      "Letters from leading researchers",
      "Grant award documentation",
    ],
    keyFactors:
      "Membership in highly selective scientific societies and published work with significant citations in the field met the original contributions and membership criteria.",
    lessonsLearned:
      "Researchers should join selective professional associations and document the exclusivity of membership requirements to strengthen O-1A petitions.",
    timelineMonths: 4,
    lawyerUsed: true,
    formsUsed: ["I-129"],
  },

  // O-1B — Appealed (arts/film)
  {
    caseType: "o1",
    countryOfOrigin: "UK",
    outcome: "appealed",
    year: "2020",
    court: "USCIS Vermont Service Center",
    narrative:
      "O-1B petition for a British theatre director initially denied, then appealed to the AAO. The appeal included additional evidence of West End productions and BAFTA nominations that were omitted from the original filing.",
    documentsUsed: [
      "I-129",
      "Advisory opinion letter",
      "Production credits",
      "Award nominations",
      "Press reviews",
      "Appeal brief",
      "Supplemental recommendation letters",
    ],
    keyFactors:
      "The initial denial resulted from incomplete evidence; the appeal succeeded by presenting a complete record of West End credits and award nominations.",
    lessonsLearned:
      "Submit all available evidence with the initial petition; relying on an appeal to supplement the record is costly and delays the process by months.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-290B"],
    denialReasons: "Initial denial for insufficient evidence of distinction in the arts; overturned on appeal with supplemental documentation.",
  },
];
