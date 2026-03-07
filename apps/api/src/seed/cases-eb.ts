import type { CaseRecord } from "@immivault/shared";

export const EB_CASES: CaseRecord[] = [
  // ============================================================
  // EB-1A: Extraordinary Ability (5 cases)
  // ============================================================
  {
    caseType: "green-card-employment",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2023",
    court: "USCIS Texas Service Center",
    narrative:
      "EB-1A petition for a machine learning researcher with 200+ citations and three best-paper awards at top-tier AI conferences. Approved without RFE after 6 months.",
    documentsUsed: [
      "I-140",
      "Citation evidence",
      "Award certificates",
      "Recommendation letters",
      "Published articles",
      "Media coverage",
    ],
    keyFactors:
      "High citation count and nationally recognized awards satisfied at least three EB-1A criteria without ambiguity.",
    lessonsLearned:
      "Organizing evidence by each EB-1A criterion with a clear index dramatically speeds adjudication.",
    timelineMonths: 6,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "China",
    outcome: "denied",
    year: "2022",
    court: "USCIS Nebraska Service Center",
    narrative:
      "EB-1A petition for a data scientist claiming extraordinary ability based on patents and conference presentations. Denied after RFE response failed to demonstrate sustained national acclaim.",
    documentsUsed: [
      "I-140",
      "Patent filings",
      "Conference presentation slides",
      "Recommendation letters",
      "Employment verification",
    ],
    keyFactors:
      "USCIS found that conference presentations alone did not constitute published material in major trade publications.",
    lessonsLearned:
      "Conference presentations are weaker than peer-reviewed journal publications for EB-1A; focus on evidence of impact, not just participation.",
    timelineMonths: 11,
    lawyerUsed: true,
    formsUsed: ["I-140"],
    rfesReceived: "RFE requesting additional evidence of sustained national or international acclaim and original contributions of major significance.",
    denialReasons: "Failed to establish at least three criteria; evidence of original contributions and published material was insufficient.",
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Israel",
    outcome: "approved",
    year: "2024",
    court: "USCIS California Service Center",
    narrative:
      "EB-1A petition for a cybersecurity expert who discovered multiple zero-day vulnerabilities and was featured in international media. Premium processing approved in 12 days.",
    documentsUsed: [
      "I-140",
      "CVE records",
      "Media articles",
      "Recommendation letters",
      "Judging invitations",
      "Salary evidence",
    ],
    keyFactors:
      "Documented media coverage in major outlets and evidence of judging the work of others in the field were compelling.",
    lessonsLearned:
      "Premium processing is worth the fee for strong EB-1A cases to avoid prolonged uncertainty.",
    timelineMonths: 1,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-907"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "South Korea",
    outcome: "pending",
    year: "2025",
    court: "USCIS Texas Service Center",
    narrative:
      "EB-1A petition for a semiconductor researcher with 15 patents and a high salary in the top 5% of the field. Case is pending after an RFE was issued.",
    documentsUsed: [
      "I-140",
      "Patent certificates",
      "Salary documentation",
      "Recommendation letters",
      "Published articles",
    ],
    keyFactors:
      "USCIS questioned whether patents alone demonstrate original contributions of major significance without evidence of industry adoption.",
    lessonsLearned:
      "Include licensing agreements or adoption metrics when relying on patents as evidence of original contributions.",
    timelineMonths: 8,
    lawyerUsed: true,
    formsUsed: ["I-140"],
    rfesReceived: "RFE requesting evidence that patented inventions have been adopted or cited by others in the field.",
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Iran",
    outcome: "approved",
    year: "2021",
    court: "USCIS Nebraska Service Center",
    narrative:
      "EB-1A petition for a biomedical engineer with 500+ citations and editorial board memberships at two journals. Approved after responding to an RFE on original contributions.",
    documentsUsed: [
      "I-140",
      "Citation reports",
      "Editorial board appointment letters",
      "Recommendation letters",
      "Published research",
      "Peer review records",
    ],
    keyFactors:
      "Editorial board membership and extensive peer review history established judging criterion clearly.",
    lessonsLearned:
      "Always request and preserve peer review invitations and completed reviews as evidence for the judging criterion.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-485", "I-765"],
    rfesReceived: "RFE on original contributions of major significance requiring additional citation context and impact letters.",
  },

  // ============================================================
  // EB-1B: Outstanding Researcher/Professor (3 cases)
  // ============================================================
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Germany",
    outcome: "approved",
    year: "2023",
    court: "USCIS Vermont Service Center",
    narrative:
      "EB-1B petition for a tenure-track professor of computational biology at a research university. Employer provided permanent research position letter and evidence of international recognition.",
    documentsUsed: [
      "I-140",
      "Offer letter",
      "Published research",
      "Citation evidence",
      "Recommendation letters",
      "Tenure documentation",
    ],
    keyFactors:
      "Three years of research experience plus strong citation record and six independent recommendation letters from international scholars.",
    lessonsLearned:
      "EB-1B requires a qualifying job offer for a permanent research position; ensure the employer letter explicitly states this.",
    timelineMonths: 9,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-485", "I-131"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Japan",
    outcome: "denied",
    year: "2022",
    court: "USCIS Texas Service Center",
    narrative:
      "EB-1B petition for a postdoctoral researcher in materials science. Denied because the position was a fixed two-year appointment, not a permanent or tenure-track role.",
    documentsUsed: [
      "I-140",
      "Postdoc appointment letter",
      "Published research",
      "Recommendation letters",
    ],
    keyFactors:
      "The position did not qualify as permanent or tenure-track, which is a strict EB-1B requirement.",
    lessonsLearned:
      "Postdoctoral positions rarely qualify for EB-1B unless the employer can certify the role is permanent in nature.",
    timelineMonths: 7,
    lawyerUsed: true,
    formsUsed: ["I-140"],
    denialReasons: "Position did not meet the regulatory definition of a permanent research position or tenure-track teaching position.",
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Taiwan",
    outcome: "approved",
    year: "2024",
    court: "USCIS Nebraska Service Center",
    narrative:
      "EB-1B for a senior research scientist at a pharmaceutical company with 10+ years of drug discovery research. Approved with premium processing in 15 business days.",
    documentsUsed: [
      "I-140",
      "Permanent position letter",
      "Published research",
      "Patent filings",
      "Recommendation letters",
      "Award certificates",
    ],
    keyFactors:
      "Employer's letter clearly established the role as a permanent research position and documented the company's significant research mission.",
    lessonsLearned:
      "Private-sector EB-1B petitions succeed when the employer letter thoroughly demonstrates a research-oriented mission and the position's permanence.",
    timelineMonths: 1,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-907", "I-485"],
  },

  // ============================================================
  // EB-1C: Multinational Manager/Executive (3 cases)
  // ============================================================
  {
    caseType: "green-card-employment",
    countryOfOrigin: "UK",
    outcome: "approved",
    year: "2023",
    court: "USCIS California Service Center",
    narrative:
      "EB-1C petition for a VP of Engineering transferred from a London office to the US headquarters of a fintech company. Approved after demonstrating managerial control over 40+ employees.",
    documentsUsed: [
      "I-140",
      "Organizational charts",
      "Job descriptions",
      "L-1A approval notice",
      "Company financial statements",
      "Board resolutions",
    ],
    keyFactors:
      "Detailed organizational charts showing direct and indirect reports clearly established the managerial capacity requirement.",
    lessonsLearned:
      "Invest heavily in organizational charts and subordinate job descriptions to prove the role is truly managerial, not functional.",
    timelineMonths: 10,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Brazil",
    outcome: "denied",
    year: "2021",
    court: "USCIS Vermont Service Center",
    narrative:
      "EB-1C petition for a regional director of a mid-size manufacturing firm. Denied because USCIS found the beneficiary performed primarily operational duties rather than managing through subordinate supervisors.",
    documentsUsed: [
      "I-140",
      "Organizational charts",
      "Position description",
      "Company financials",
      "L-1A approval notice",
    ],
    keyFactors:
      "The organizational structure showed the beneficiary managed first-line workers directly rather than through professional managers or supervisors.",
    lessonsLearned:
      "EB-1C managers must manage through subordinate managers or professionals; direct supervision of line workers is typically insufficient.",
    timelineMonths: 12,
    lawyerUsed: true,
    formsUsed: ["I-140"],
    denialReasons: "Beneficiary did not function in a primarily managerial or executive capacity as defined by INA 101(a)(44).",
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "France",
    outcome: "approved",
    year: "2024",
    court: "USCIS Texas Service Center",
    narrative:
      "EB-1C for a CFO of a multinational consulting firm relocating from Paris to New York. Strong evidence of executive-level decision-making authority and a qualifying one-year employment abroad.",
    documentsUsed: [
      "I-140",
      "Board minutes",
      "Organizational charts",
      "Financial reports",
      "Employment verification from foreign entity",
      "Tax returns",
    ],
    keyFactors:
      "Board-level decision-making authority and control over a major functional component of the organization satisfied the executive capacity test.",
    lessonsLearned:
      "For executive-capacity EB-1C, focus on broad decision-making authority and direction of a major function rather than headcount of reports.",
    timelineMonths: 8,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-485", "I-765"],
  },

  // ============================================================
  // EB-2 NIW: National Interest Waiver (6 cases)
  // ============================================================
  {
    caseType: "green-card-employment",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2024",
    court: "USCIS Texas Service Center",
    narrative:
      "EB-2 NIW petition for a physician committing to practice primary care in an underserved area for five years. Approved under the physician NIW exception in 4 months.",
    documentsUsed: [
      "I-140",
      "Medical license",
      "HPSA designation letter",
      "Employment contract",
      "State health department letter",
      "Board certification",
    ],
    keyFactors:
      "Physician NIW with a qualifying HPSA commitment and state health department attestation is a well-established pathway.",
    lessonsLearned:
      "Physician NIW applicants should secure their HPSA or MUA designation letter before filing to avoid unnecessary RFEs.",
    timelineMonths: 4,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-485"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Nigeria",
    outcome: "approved",
    year: "2023",
    court: "USCIS Nebraska Service Center",
    narrative:
      "EB-2 NIW for an epidemiologist whose infectious disease research was cited in WHO policy documents. Approved under the Matter of Dhanasar framework after demonstrating national importance.",
    documentsUsed: [
      "I-140",
      "Published research",
      "WHO citations",
      "Recommendation letters",
      "Citation reports",
      "Research plan",
    ],
    keyFactors:
      "Direct citation of the applicant's work in WHO policy guidelines satisfied the substantial merit and national importance prongs.",
    lessonsLearned:
      "Evidence that your work has influenced policy or standards is among the strongest proof of national importance for NIW.",
    timelineMonths: 10,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-485", "I-765"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "China",
    outcome: "denied",
    year: "2022",
    court: "USCIS Texas Service Center",
    narrative:
      "EB-2 NIW for a mid-career software engineer arguing that their cloud infrastructure work served the national interest. Denied for failing the third Dhanasar prong.",
    documentsUsed: [
      "I-140",
      "Resume",
      "Recommendation letters",
      "Published articles",
      "Employment verification",
    ],
    keyFactors:
      "USCIS found no evidence that the applicant was well-positioned to advance the proposed endeavor beyond their current employer's interests.",
    lessonsLearned:
      "Generic software engineering roles rarely qualify for NIW unless you can show impact beyond your employer through publications, patents, or open-source contributions.",
    timelineMonths: 13,
    lawyerUsed: false,
    formsUsed: ["I-140"],
    denialReasons: "Failed to demonstrate that the benefit of waiving the labor certification requirement would outweigh the national interest in the labor certification process.",
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Pakistan",
    outcome: "pending",
    year: "2025",
    court: "USCIS Texas Service Center",
    narrative:
      "EB-2 NIW for an AI safety researcher with publications on alignment and interpretability. Petition is pending initial adjudication after 5 months.",
    documentsUsed: [
      "I-140",
      "Published research",
      "Research plan",
      "Recommendation letters",
      "Citation evidence",
      "Conference invitations",
    ],
    keyFactors:
      "The proposed endeavor of advancing AI safety has substantial merit, but demonstrating the applicant's unique positioning remains the key challenge.",
    lessonsLearned:
      "For emerging fields, a detailed future research plan and letters from established researchers are critical to satisfying the Dhanasar test.",
    timelineMonths: 5,
    lawyerUsed: true,
    formsUsed: ["I-140"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Egypt",
    outcome: "approved",
    year: "2021",
    court: "USCIS Nebraska Service Center",
    narrative:
      "EB-2 NIW for a renewable energy engineer whose solar panel efficiency research resulted in two US patents licensed by major manufacturers. Approved without RFE.",
    documentsUsed: [
      "I-140",
      "Patent certificates",
      "Licensing agreements",
      "Published research",
      "Recommendation letters",
      "Industry impact statements",
    ],
    keyFactors:
      "Commercialized patents with licensing agreements provided concrete evidence of being well-positioned to advance the proposed endeavor.",
    lessonsLearned:
      "Patent licensing and commercialization evidence is far more persuasive than patent filings alone for NIW petitions.",
    timelineMonths: 7,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-485", "I-131"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Colombia",
    outcome: "approved",
    year: "2024",
    court: "USCIS Texas Service Center",
    narrative:
      "EB-2 NIW for a biostatistician whose clinical trial methodology was adopted by three NIH-funded studies. Approved after a well-structured Dhanasar analysis in the petition letter.",
    documentsUsed: [
      "I-140",
      "Published research",
      "NIH grant documentation",
      "Recommendation letters",
      "Citation evidence",
      "Research plan",
    ],
    keyFactors:
      "Adoption of the applicant's methodology by NIH-funded research groups demonstrated concrete national-level impact.",
    lessonsLearned:
      "Connecting your work to federally funded research strengthens the national importance argument considerably.",
    timelineMonths: 9,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-485", "I-765"],
  },

  // ============================================================
  // EB-2 PERM (5 cases)
  // ============================================================
  {
    caseType: "green-card-employment",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2020",
    court: "USCIS Texas Service Center",
    narrative:
      "EB-2 PERM for a senior software engineer at a large tech company. PERM labor certification took 9 months; I-140 approved in 5 months but I-485 pending due to India EB-2 backlog.",
    documentsUsed: [
      "ETA-9089",
      "I-140",
      "Prevailing wage determination",
      "Recruitment evidence",
      "Degree evaluations",
      "Employment verification",
    ],
    keyFactors:
      "Clean PERM audit with well-documented recruitment steps led to smooth labor certification approval.",
    lessonsLearned:
      "Start the PERM process as early as possible for India-born applicants due to severe visa bulletin backlogs.",
    timelineMonths: 36,
    lawyerUsed: true,
    formsUsed: ["ETA-9089", "I-140", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Philippines",
    outcome: "approved",
    year: "2023",
    court: "USCIS Nebraska Service Center",
    narrative:
      "EB-2 PERM for a healthcare data analyst with a master's degree. PERM certified without audit and I-140 approved via premium processing.",
    documentsUsed: [
      "ETA-9089",
      "I-140",
      "Prevailing wage determination",
      "Recruitment advertisements",
      "Degree certificates",
      "Experience letters",
    ],
    keyFactors:
      "No PERM audit was triggered because recruitment was conducted precisely according to DOL requirements.",
    lessonsLearned:
      "Following the prescribed recruitment steps exactly and retaining documentation of every step prevents costly PERM audits.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["ETA-9089", "I-140", "I-907", "I-485"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Russia",
    outcome: "denied",
    year: "2021",
    court: "USCIS Vermont Service Center",
    narrative:
      "EB-2 PERM for a financial analyst. PERM was denied after a DOL audit revealed the employer failed to conduct the mandatory supervised recruitment steps.",
    documentsUsed: [
      "ETA-9089",
      "Prevailing wage determination",
      "Partial recruitment evidence",
    ],
    keyFactors:
      "Missing two of the three required additional recruitment steps for professional occupations caused the PERM denial.",
    lessonsLearned:
      "Employers must complete all mandatory and additional recruitment steps before filing the PERM application; missing even one can be fatal.",
    timelineMonths: 15,
    lawyerUsed: false,
    formsUsed: ["ETA-9089"],
    denialReasons: "PERM labor certification denied due to insufficient recruitment documentation during DOL audit.",
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Vietnam",
    outcome: "pending",
    year: "2025",
    court: "USCIS Texas Service Center",
    narrative:
      "EB-2 PERM for a DevOps engineer at a mid-size SaaS company. PERM was certified but the I-140 is pending adjudication after 4 months.",
    documentsUsed: [
      "ETA-9089",
      "I-140",
      "Prevailing wage determination",
      "Recruitment evidence",
      "Degree evaluation",
      "Pay stubs",
    ],
    keyFactors:
      "Employer's ability to pay the proffered wage is under review as the company is a startup with fluctuating revenue.",
    lessonsLearned:
      "Smaller employers should prepare strong ability-to-pay evidence including tax returns, audited financials, and bank statements.",
    timelineMonths: 4,
    lawyerUsed: true,
    formsUsed: ["ETA-9089", "I-140"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2022",
    court: "USCIS California Service Center",
    narrative:
      "EB-2 PERM for a mechanical engineer with a master's degree from a US university. Smooth process from prevailing wage to I-485 approval in 22 months total.",
    documentsUsed: [
      "ETA-9089",
      "I-140",
      "I-485",
      "Prevailing wage determination",
      "Recruitment evidence",
      "Degree certificates",
      "Experience letters",
    ],
    keyFactors:
      "Current priority date for Mexico EB-2 and a strong employer with clear ability to pay expedited the entire process.",
    lessonsLearned:
      "Applicants from countries without significant backlogs can complete the entire EB-2 PERM process in under two years.",
    timelineMonths: 22,
    lawyerUsed: true,
    formsUsed: ["ETA-9089", "I-140", "I-485", "I-765", "I-131"],
  },

  // ============================================================
  // EB-3: Skilled Workers / Professionals (8 cases)
  // ============================================================
  {
    caseType: "green-card-employment",
    countryOfOrigin: "India",
    outcome: "pending",
    year: "2020",
    court: "USCIS Texas Service Center",
    narrative:
      "EB-3 PERM for a software developer with a bachelor's degree. I-140 approved but I-485 has been pending for over 5 years due to the India EB-3 backlog.",
    documentsUsed: [
      "ETA-9089",
      "I-140",
      "Prevailing wage determination",
      "Recruitment evidence",
      "Degree certificates",
      "Experience letters",
    ],
    keyFactors:
      "India EB-3 priority dates have barely moved, leaving applicants in indefinite waiting periods.",
    lessonsLearned:
      "India-born EB-3 applicants should consider EB-2 downgrade or EB-1 alternatives if qualifications permit to avoid decades-long waits.",
    timelineMonths: 60,
    lawyerUsed: true,
    formsUsed: ["ETA-9089", "I-140", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Kenya",
    outcome: "approved",
    year: "2024",
    court: "USCIS Nebraska Service Center",
    narrative:
      "EB-3 for a registered nurse recruited by a hospital system in a rural area. PERM and I-140 approved quickly; I-485 processed in 8 months due to current priority dates.",
    documentsUsed: [
      "ETA-9089",
      "I-140",
      "Nursing license",
      "VisaScreen certificate",
      "Employment contract",
      "Prevailing wage determination",
    ],
    keyFactors:
      "VisaScreen certification and a valid state nursing license were essential prerequisites that prevented any delays.",
    lessonsLearned:
      "Healthcare workers should obtain VisaScreen certification early as it is required before visa issuance or adjustment of status.",
    timelineMonths: 16,
    lawyerUsed: true,
    formsUsed: ["ETA-9089", "I-140", "I-485", "I-765"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Poland",
    outcome: "approved",
    year: "2023",
    court: "USCIS Vermont Service Center",
    narrative:
      "EB-3 for an IT project manager with a bachelor's degree and 6 years of experience. Straightforward PERM and I-140 process with no audits or RFEs.",
    documentsUsed: [
      "ETA-9089",
      "I-140",
      "Prevailing wage determination",
      "Recruitment evidence",
      "Degree evaluation",
      "Experience letters",
    ],
    keyFactors:
      "Well-documented job requirements that matched the applicant's qualifications exactly avoided any credibility issues.",
    lessonsLearned:
      "Ensure the PERM job requirements reflect genuine business needs and match the beneficiary's background to prevent DOL scrutiny.",
    timelineMonths: 19,
    lawyerUsed: true,
    formsUsed: ["ETA-9089", "I-140", "I-485"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Argentina",
    outcome: "denied",
    year: "2022",
    court: "USCIS California Service Center",
    narrative:
      "EB-3 for a graphic designer. I-140 denied because the employer could not demonstrate ability to pay the proffered wage based on tax returns and net income.",
    documentsUsed: [
      "ETA-9089",
      "I-140",
      "Employer tax returns",
      "Prevailing wage determination",
      "Recruitment evidence",
    ],
    keyFactors:
      "Employer's net income and net current assets were both below the proffered wage for the relevant years.",
    lessonsLearned:
      "Small employers must ensure their financials can demonstrate ability to pay; consider alternative evidence such as bank statements or lines of credit.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["ETA-9089", "I-140"],
    denialReasons: "Employer failed to establish ability to pay the proffered wage as required under 8 CFR 204.5(g)(2).",
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Turkey",
    outcome: "approved",
    year: "2024",
    court: "USCIS Texas Service Center",
    narrative:
      "EB-3 for an accountant at a mid-size firm. PERM was audited but certified after the employer produced complete recruitment documentation.",
    documentsUsed: [
      "ETA-9089",
      "I-140",
      "Prevailing wage determination",
      "Recruitment advertisements",
      "Interview logs",
      "Degree certificates",
      "CPA license",
    ],
    keyFactors:
      "Thorough documentation of all recruitment steps and interview outcomes led to a successful PERM audit response.",
    lessonsLearned:
      "Maintain a detailed recruitment log with dates, applicant names, and disposition reasons in case of a DOL audit.",
    timelineMonths: 21,
    lawyerUsed: true,
    formsUsed: ["ETA-9089", "I-140", "I-485", "I-765"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Canada",
    outcome: "withdrawn",
    year: "2021",
    court: "USCIS Nebraska Service Center",
    narrative:
      "EB-3 for a marketing manager. The petition was withdrawn after the sponsoring employer went through layoffs and could no longer support the position.",
    documentsUsed: [
      "ETA-9089",
      "I-140",
      "Prevailing wage determination",
      "Recruitment evidence",
    ],
    keyFactors:
      "Employer layoffs during the pandemic raised ability-to-pay concerns and eliminated the sponsored position.",
    lessonsLearned:
      "Employer-sponsored green cards carry inherent risk; consider self-petitioned categories like EB-1A or EB-2 NIW as alternatives when possible.",
    timelineMonths: 11,
    lawyerUsed: false,
    formsUsed: ["ETA-9089", "I-140"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "China",
    outcome: "pending",
    year: "2024",
    court: "USCIS California Service Center",
    narrative:
      "EB-3 for a physical therapist at a rehabilitation center. PERM certified and I-140 approved but waiting for priority date to become current for China EB-3.",
    documentsUsed: [
      "ETA-9089",
      "I-140",
      "Physical therapy license",
      "Degree evaluation",
      "Prevailing wage determination",
      "VisaScreen certificate",
    ],
    keyFactors:
      "China EB-3 backlog means the applicant may wait several years despite having an approved I-140.",
    lessonsLearned:
      "Chinese nationals in EB-3 should explore EB-2 or EB-1 options in parallel to potentially shorten the wait.",
    timelineMonths: 12,
    lawyerUsed: true,
    formsUsed: ["ETA-9089", "I-140"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "India",
    outcome: "denied",
    year: "2023",
    court: "USCIS Texas Service Center",
    narrative:
      "EB-3 for a quality assurance analyst. PERM was denied after DOL found the job requirements were tailored to the beneficiary's specific background rather than reflecting genuine business needs.",
    documentsUsed: [
      "ETA-9089",
      "Prevailing wage determination",
      "Job posting",
      "Recruitment evidence",
    ],
    keyFactors:
      "Overly specific job requirements that matched only the beneficiary's resume triggered DOL rejection for tailored requirements.",
    lessonsLearned:
      "PERM job requirements must reflect actual minimum needs of the position, not the beneficiary's exact qualifications.",
    timelineMonths: 10,
    lawyerUsed: false,
    formsUsed: ["ETA-9089"],
    denialReasons: "DOL determined the job requirements were unduly restrictive and tailored to the beneficiary's qualifications.",
  },
];
