import type { CaseRecord } from "@immivault/shared";

export const H1B_CASES: CaseRecord[] = [
  // ============================================================
  // H-1B CASES (25 total)
  // ~65% approved, ~20% denied, ~10% pending, ~5% other
  // ============================================================

  // --- APPROVED (16 cases) ---

  {
    caseType: "h1b",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2023",
    court: "USCIS California Service Center",
    narrative:
      "Cap-subject H-1B petition for a software engineer at a mid-size tech company. Selected in the FY2024 lottery on the first registration and approved without RFE after submitting a detailed specialty occupation analysis.",
    documentsUsed: [
      "Form I-129",
      "Labor Condition Application (LCA)",
      "Degree evaluation",
      "Client engagement letters",
      "Organizational chart",
      "Pay stubs",
    ],
    keyFactors:
      "A direct employer-employee relationship and a well-documented specialty occupation tied to the beneficiary's CS degree streamlined adjudication.",
    lessonsLearned:
      "Include a thorough specialty occupation analysis mapping the role to the degree field to reduce RFE risk.",
    timelineMonths: 4,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129 H-1B Data Collection Supplement"],
  },
  {
    caseType: "h1b",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2022",
    court: "USCIS Vermont Service Center",
    narrative:
      "H-1B transfer for a senior data scientist moving from a consulting firm to a direct-hire role at a Fortune 500 company. Approved in 15 calendar days under premium processing.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Current H-1B approval notice",
      "Offer letter",
      "Resume",
      "Transcripts",
    ],
    keyFactors:
      "The transfer to a direct employer eliminated third-party placement concerns and the Level 3 wage exceeded prevailing wage requirements.",
    lessonsLearned:
      "Transferring to a direct employer with a strong wage level significantly simplifies the H-1B transfer process.",
    timelineMonths: 1,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-907"],
  },
  {
    caseType: "h1b",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2024",
    court: "USCIS California Service Center",
    narrative:
      "Cap-subject petition for an electrical engineer with a master's degree from a U.S. university. Selected in the advanced-degree lottery and approved after responding to an RFE about the specific job duties.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Master's diploma and transcripts",
      "Expert opinion letter",
      "Detailed job description",
    ],
    keyFactors:
      "An expert opinion letter from a professor confirming the role required a minimum of a master's in electrical engineering resolved the RFE.",
    lessonsLearned:
      "Expert opinion letters are highly effective in responding to specialty occupation RFEs, especially for niche engineering roles.",
    timelineMonths: 6,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129 H-1B Data Collection Supplement"],
    rfesReceived: "Specialty occupation RFE requesting evidence that the position requires a degree in a specific field.",
  },
  {
    caseType: "h1b",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2021",
    court: "USCIS Vermont Service Center",
    narrative:
      "H-1B extension for a project manager at an IT staffing company working at a client site. Approved after responding to a third-party worksite RFE with detailed client contracts and itineraries.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Client contract",
      "Work orders",
      "Client letter confirming assignment",
      "Itinerary of services",
    ],
    keyFactors:
      "Comprehensive client letters and contracts covering the full requested validity period satisfied the third-party placement concerns.",
    lessonsLearned:
      "For third-party placements, always secure client letters confirming the assignment duration, duties, and supervision before filing.",
    timelineMonths: 8,
    lawyerUsed: true,
    formsUsed: ["I-129"],
    rfesReceived: "Third-party worksite RFE requesting client contracts, work orders, and proof of employer-employee relationship at the end-client site.",
  },
  {
    caseType: "h1b",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2025",
    court: "USCIS California Service Center",
    narrative:
      "Cap-subject H-1B for a machine learning engineer at a startup. Filed with premium processing and approved in 12 business days without an RFE.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Bachelor's and master's transcripts",
      "Published research papers",
      "Offer letter with detailed job duties",
    ],
    keyFactors:
      "The beneficiary's published ML research and a Level 4 prevailing wage offered by the startup demonstrated clear specialty occupation requirements.",
    lessonsLearned:
      "Startups can successfully sponsor H-1Bs when they offer competitive wages and clearly articulate the technical nature of the role.",
    timelineMonths: 1,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-907", "I-129 H-1B Data Collection Supplement"],
  },
  {
    caseType: "h1b",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2020",
    court: "USCIS Vermont Service Center",
    narrative:
      "H-1B extension for a systems analyst during COVID-19 when the beneficiary was working remotely. Approved after providing an amended LCA for the new home worksite location.",
    documentsUsed: [
      "Form I-129",
      "Amended LCA for remote work location",
      "Employer letter explaining remote work policy",
      "Prior approval notices",
    ],
    keyFactors:
      "Filing an amended LCA for the remote worksite address proactively addressed COVID-era compliance concerns.",
    lessonsLearned:
      "When remote work changes the worksite MSA, file an amended LCA to maintain compliance even if USCIS has issued temporary flexibilities.",
    timelineMonths: 5,
    lawyerUsed: true,
    formsUsed: ["I-129"],
  },
  {
    caseType: "h1b",
    countryOfOrigin: "China",
    outcome: "approved",
    year: "2023",
    court: "USCIS California Service Center",
    narrative:
      "Cap-subject H-1B for a biomedical researcher with a Ph.D. from a U.S. university transitioning from F-1 OPT. Selected in the lottery and approved without RFE in standard processing.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Ph.D. diploma and transcripts",
      "Employment offer letter",
      "OPT EAD card",
      "Published journal articles",
    ],
    keyFactors:
      "The Ph.D. in a directly relevant field and peer-reviewed publications left no ambiguity about the specialty occupation requirement.",
    lessonsLearned:
      "Beneficiaries with doctoral degrees in niche scientific fields rarely face specialty occupation challenges if the job duties align.",
    timelineMonths: 5,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129 H-1B Data Collection Supplement"],
  },
  {
    caseType: "h1b",
    countryOfOrigin: "China",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Cap-exempt H-1B petition for a postdoctoral research associate at a major university hospital. Approved in three months without premium processing.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "University offer letter",
      "CV with publications list",
      "Degree certificates",
    ],
    keyFactors:
      "Cap-exempt status as a higher-education institution employer meant no lottery was required, and the research role clearly met specialty occupation criteria.",
    lessonsLearned:
      "Cap-exempt petitions at universities can be filed year-round and avoid lottery uncertainty entirely.",
    timelineMonths: 3,
    lawyerUsed: false,
    formsUsed: ["I-129"],
  },
  {
    caseType: "h1b",
    countryOfOrigin: "South Korea",
    outcome: "approved",
    year: "2022",
    court: "USCIS California Service Center",
    narrative:
      "Cap-subject H-1B for a UX designer at a major tech company. Received an RFE questioning whether UX design qualifies as a specialty occupation but overcame it with industry evidence and expert letters.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "BFA and HCI certificate",
      "Expert opinion letter",
      "Job postings from similar companies requiring degrees",
      "Detailed position description",
    ],
    keyFactors:
      "Evidence showing comparable UX roles across the industry require at least a bachelor's in HCI, design, or a related field persuaded the adjudicator.",
    lessonsLearned:
      "For roles USCIS considers borderline specialty occupations, gather job postings from peer companies to demonstrate industry-wide degree requirements.",
    timelineMonths: 7,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129 H-1B Data Collection Supplement"],
    rfesReceived: "Specialty occupation RFE questioning whether UX design requires a bachelor's degree in a specific specialty.",
  },
  {
    caseType: "h1b",
    countryOfOrigin: "Canada",
    outcome: "approved",
    year: "2021",
    court: "USCIS Vermont Service Center",
    narrative:
      "H-1B transfer for a financial analyst moving between two banks. Filed with premium processing and approved in 10 business days with no issues.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Current H-1B approval notice",
      "New employer offer letter",
      "Transcripts",
      "CFA certification",
    ],
    keyFactors:
      "A clear specialty occupation match between a finance degree, CFA certification, and the financial analyst role made adjudication straightforward.",
    lessonsLearned:
      "Professional certifications like the CFA can strengthen an H-1B petition by reinforcing the specialty occupation argument.",
    timelineMonths: 1,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-907"],
  },
  {
    caseType: "h1b",
    countryOfOrigin: "Philippines",
    outcome: "approved",
    year: "2023",
    court: "USCIS Vermont Service Center",
    narrative:
      "Cap-exempt H-1B for a physical therapist at a nonprofit hospital. The employer's nonprofit status qualified for cap exemption, and the petition was approved in under four months.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "PT license",
      "Degree evaluation (FCCPT)",
      "Nonprofit determination letter",
      "Employer support letter",
    ],
    keyFactors:
      "The employer's 501(c)(3) status provided cap exemption, and physical therapy is well-established as a specialty occupation.",
    lessonsLearned:
      "Healthcare workers should explore cap-exempt employers such as nonprofit hospitals to avoid the H-1B lottery entirely.",
    timelineMonths: 4,
    lawyerUsed: true,
    formsUsed: ["I-129"],
  },
  {
    caseType: "h1b",
    countryOfOrigin: "Japan",
    outcome: "approved",
    year: "2024",
    court: "USCIS California Service Center",
    narrative:
      "Cap-subject H-1B for a mechanical engineer at an automotive R&D center. Selected in the FY2025 lottery and approved without RFE under standard processing.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Engineering degree and transcripts",
      "PE license",
      "Detailed project descriptions",
    ],
    keyFactors:
      "A PE license and direct alignment between the mechanical engineering degree and the job duties made the case clear-cut.",
    lessonsLearned:
      "Engineering roles with licensed professionals remain among the strongest H-1B specialty occupation categories.",
    timelineMonths: 5,
    lawyerUsed: false,
    formsUsed: ["I-129", "I-129 H-1B Data Collection Supplement"],
  },
  {
    caseType: "h1b",
    countryOfOrigin: "Nigeria",
    outcome: "approved",
    year: "2022",
    court: "USCIS Vermont Service Center",
    narrative:
      "Cap-subject H-1B for a pharmacist at a retail pharmacy chain. Approved after an RFE about wage level, which was resolved by providing evidence the offered wage met Level 2 prevailing wage.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "PharmD credential evaluation",
      "State pharmacy license",
      "Wage documentation",
      "Prevailing wage determination",
    ],
    keyFactors:
      "Demonstrating the offered wage met the Level 2 prevailing wage for the MSA resolved the wage-level RFE.",
    lessonsLearned:
      "Always verify the offered wage meets or exceeds the prevailing wage for the specific MSA before filing to avoid wage-related RFEs.",
    timelineMonths: 7,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129 H-1B Data Collection Supplement"],
    rfesReceived: "Wage level RFE questioning whether the offered salary corresponded to the complexity of duties described.",
  },
  {
    caseType: "h1b",
    countryOfOrigin: "Taiwan",
    outcome: "approved",
    year: "2025",
    court: "USCIS California Service Center",
    narrative:
      "H-1B extension for a semiconductor process engineer at a chip fabrication facility. Approved under premium processing with no RFE after three years on initial H-1B.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Prior H-1B approval notices",
      "Updated resume",
      "Employer support letter",
      "Pay stubs and W-2s",
    ],
    keyFactors:
      "A clean filing history with no prior RFEs or violations and continued employment with the same petitioner made the extension routine.",
    lessonsLearned:
      "Maintaining clean immigration status and consistent employment history simplifies H-1B extension adjudication.",
    timelineMonths: 1,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-907"],
  },
  {
    caseType: "h1b",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2021",
    court: "USCIS California Service Center",
    narrative:
      "Cap-subject H-1B for a civil engineer at a construction management firm. Selected in the lottery after two prior unsuccessful registrations and approved with no RFE.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Civil engineering degree",
      "EIT certification",
      "Offer letter",
      "Project portfolio",
    ],
    keyFactors:
      "Civil engineering is among the strongest specialty occupation categories, and the EIT certification reinforced the beneficiary's qualifications.",
    lessonsLearned:
      "Lottery selection can take multiple years; maintain valid status through OPT or other means while awaiting selection.",
    timelineMonths: 5,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129 H-1B Data Collection Supplement"],
  },
  {
    caseType: "h1b",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2023",
    court: "USCIS Vermont Service Center",
    narrative:
      "Cap-exempt H-1B for a research scientist at a university-affiliated research institute. Filed without going through the lottery due to the institute's affiliation with a higher-education institution.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Research institute affiliation documentation",
      "Ph.D. transcripts",
      "Research proposal",
      "PI support letter",
    ],
    keyFactors:
      "Documentation proving the research institute's formal affiliation with the university established cap-exempt eligibility.",
    lessonsLearned:
      "University-affiliated research organizations may qualify for cap exemption, but the affiliation must be clearly documented in the petition.",
    timelineMonths: 4,
    lawyerUsed: false,
    formsUsed: ["I-129"],
  },

  // --- DENIED (5 cases) ---

  {
    caseType: "h1b",
    countryOfOrigin: "India",
    outcome: "denied",
    year: "2022",
    court: "USCIS Vermont Service Center",
    narrative:
      "H-1B petition for a business analyst at an IT consulting firm denied after RFE response failed to establish the position as a specialty occupation. USCIS found the job duties were too general and could be performed with any bachelor's degree.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Bachelor's degree in business",
      "Client letters",
      "Job description",
    ],
    keyFactors:
      "The vague job description and Level 1 wage undermined the specialty occupation argument, as USCIS concluded the role did not require a specific degree.",
    lessonsLearned:
      "Avoid generic job descriptions and Level 1 wages for roles claimed to be complex specialty occupations, as this inconsistency invites denial.",
    timelineMonths: 9,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129 H-1B Data Collection Supplement"],
    rfesReceived: "Specialty occupation RFE questioning whether the business analyst role requires a degree in a specific specialty.",
    denialReasons: "Position not established as a specialty occupation; job duties too generalized; wage level inconsistent with claimed complexity.",
  },
  {
    caseType: "h1b",
    countryOfOrigin: "India",
    outcome: "denied",
    year: "2023",
    court: "USCIS California Service Center",
    narrative:
      "Third-party placement H-1B for a software developer denied due to insufficient evidence of the employer-employee relationship at the client site. The petitioner could not produce a valid end-client contract covering the full petition period.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Vendor agreement",
      "Partial work orders",
      "Beneficiary resume",
    ],
    keyFactors:
      "Work orders covered only 8 months of the requested 3-year validity, and no end-client letter was provided to confirm the assignment.",
    lessonsLearned:
      "Third-party H-1B petitions require contracts and client letters covering the entire requested validity period or must request a shorter validity.",
    timelineMonths: 10,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129 H-1B Data Collection Supplement"],
    rfesReceived: "Third-party worksite RFE requesting end-client contracts, detailed itinerary, and proof of right to control the beneficiary's work.",
    denialReasons: "Failure to establish valid employer-employee relationship at third-party worksite; insufficient contract documentation.",
  },
  {
    caseType: "h1b",
    countryOfOrigin: "China",
    outcome: "denied",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Cap-subject H-1B for a marketing coordinator denied without an RFE. USCIS determined the position did not meet the specialty occupation criteria under any of the four regulatory prongs.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Bachelor's degree in communications",
      "Job description",
      "Offer letter",
    ],
    keyFactors:
      "The OOH listing for marketing coordinators does not require a specific bachelor's degree, and the petition did not overcome this with company-specific evidence.",
    lessonsLearned:
      "Before filing, review the Occupational Outlook Handbook entry for the role; if it does not list a specific degree requirement, prepare substantial evidence to overcome the first prong.",
    timelineMonths: 3,
    lawyerUsed: false,
    formsUsed: ["I-129", "I-129 H-1B Data Collection Supplement"],
    denialReasons: "Position does not qualify as specialty occupation; OOH does not require a specific bachelor's degree for marketing coordinators.",
  },
  {
    caseType: "h1b",
    countryOfOrigin: "Pakistan",
    outcome: "denied",
    year: "2021",
    court: "USCIS California Service Center",
    narrative:
      "H-1B petition for a quality assurance analyst at a small consulting company denied after USCIS found the beneficiary's degree in general studies did not relate to the specialty occupation. The credential evaluation was also questioned.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Foreign degree in general studies",
      "Credential evaluation",
      "Work experience letters",
    ],
    keyFactors:
      "A general studies degree could not be equated to a U.S. bachelor's in a specific field, and work experience letters lacked sufficient detail.",
    lessonsLearned:
      "Ensure the beneficiary's degree is in a field directly related to the specialty occupation; general or broad degrees face heightened scrutiny.",
    timelineMonths: 11,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129 H-1B Data Collection Supplement"],
    rfesReceived: "RFE requesting evidence that the beneficiary's foreign degree is equivalent to a U.S. bachelor's in a specific specialty.",
    denialReasons: "Beneficiary's general studies degree not equivalent to a U.S. bachelor's in a specific specialty related to the position.",
  },
  {
    caseType: "h1b",
    countryOfOrigin: "Brazil",
    outcome: "denied",
    year: "2020",
    court: "USCIS Vermont Service Center",
    narrative:
      "H-1B extension denied because the petitioner's tax returns and financial statements showed insufficient revenue to pay the offered wage. USCIS concluded the employer lacked the ability to pay.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Tax returns",
      "Financial statements",
      "Offer letter",
      "Degree and transcripts",
    ],
    keyFactors:
      "The petitioner's net income and net current assets were both below the proffered wage, and no additional evidence of ability to pay was provided.",
    lessonsLearned:
      "Small employers must demonstrate ability to pay through tax returns, audited financials, or bank statements showing sufficient resources.",
    timelineMonths: 8,
    lawyerUsed: true,
    formsUsed: ["I-129"],
    denialReasons: "Employer failed to demonstrate ability to pay the proffered wage based on submitted tax returns and financial records.",
  },

  // --- PENDING (2 cases) ---

  {
    caseType: "h1b",
    countryOfOrigin: "India",
    outcome: "pending",
    year: "2025",
    court: "USCIS California Service Center",
    narrative:
      "Cap-subject H-1B for a cloud architect selected in the FY2026 lottery. Petition filed in April 2025 and currently awaiting initial review under standard processing.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Master's degree in computer science",
      "AWS certifications",
      "Detailed position description",
      "Employer financials",
    ],
    keyFactors:
      "The petition is still in the initial review queue; no RFE has been issued yet.",
    lessonsLearned:
      "Standard processing times can exceed six months; consider premium processing if timing is critical for employment start dates.",
    timelineMonths: 0,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129 H-1B Data Collection Supplement"],
  },
  {
    caseType: "h1b",
    countryOfOrigin: "Colombia",
    outcome: "pending",
    year: "2025",
    court: "USCIS Vermont Service Center",
    narrative:
      "H-1B transfer petition for a supply chain analyst moving to a new employer. An RFE was received regarding specialty occupation and the response was submitted; awaiting final decision.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Current H-1B approval notice",
      "Bachelor's in industrial engineering",
      "Expert opinion letter",
      "Comparative job postings",
    ],
    keyFactors:
      "The RFE response included an expert letter and industry job postings, but adjudication remains pending after four months.",
    lessonsLearned:
      "After submitting an RFE response, processing can still take several additional months; plan employment transitions accordingly.",
    timelineMonths: 4,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-907"],
    rfesReceived: "Specialty occupation RFE questioning whether a supply chain analyst role requires a specific degree.",
  },

  // --- WITHDRAWN (1 case) ---

  {
    caseType: "h1b",
    countryOfOrigin: "UK",
    outcome: "withdrawn",
    year: "2022",
    court: "USCIS California Service Center",
    narrative:
      "Cap-subject H-1B for a product manager was withdrawn by the petitioner after the beneficiary accepted a position in London before adjudication was complete. The petition had been pending for five months.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "MBA degree",
      "Offer letter",
      "Resume",
    ],
    keyFactors:
      "The withdrawal was employer-initiated after the beneficiary voluntarily departed; no substantive adjudication occurred.",
    lessonsLearned:
      "If a beneficiary departs or changes plans, promptly withdraw the petition to avoid unnecessary fees and to maintain a clean filing record with USCIS.",
    timelineMonths: 5,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-129 H-1B Data Collection Supplement"],
  },

  // --- APPEALED (1 case) ---

  {
    caseType: "h1b",
    countryOfOrigin: "Turkey",
    outcome: "appealed",
    year: "2023",
    court: "USCIS Vermont Service Center",
    narrative:
      "H-1B petition for an architect denied on specialty occupation grounds was appealed to the AAO. The appeal argued USCIS misapplied the specialty occupation test by ignoring state licensing requirements for architects.",
    documentsUsed: [
      "Form I-129",
      "LCA",
      "Architecture degree",
      "State architecture license",
      "Appeal brief",
      "NCARB certification",
    ],
    keyFactors:
      "State licensing requirements mandate a degree in architecture, which directly satisfies the specialty occupation test, and the denial overlooked this regulatory framework.",
    lessonsLearned:
      "When a denial contradicts established licensing requirements, an appeal to the AAO can be an effective remedy with strong precedent.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-290B"],
    denialReasons: "Initial denial on specialty occupation grounds; USCIS erroneously found the position did not require a specific degree.",
  },
];
