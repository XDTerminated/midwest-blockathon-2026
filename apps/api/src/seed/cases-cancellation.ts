import type { CaseRecord } from "@immivault/shared";

export const CANCELLATION_CASES: CaseRecord[] = [
  // ============================================================
  // NON-LPR CANCELLATION OF REMOVAL (EOIR-42B) — 20 cases
  // ============================================================
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2023",
    court: "Los Angeles Immigration Court",
    narrative:
      "Respondent demonstrated 12 years of continuous physical presence and exceptional hardship to USC spouse with chronic kidney disease. Judge found medical evidence compelling and granted relief.",
    documentsUsed: [
      "EOIR-42B",
      "Medical records",
      "Tax returns",
      "Spouse's disability documentation",
      "Country conditions report",
      "Letters of support",
    ],
    keyFactors:
      "Spouse's life-threatening medical condition and lack of adequate treatment in Mexico established exceptional and extremely unusual hardship.",
    lessonsLearned:
      "Medical hardship claims require thorough documentation from treating physicians. Expert testimony on country medical infrastructure strengthens the case.",
    timelineMonths: 28,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B", "EOIR-28"],
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Guatemala",
    outcome: "denied",
    year: "2022",
    court: "Houston Immigration Court",
    narrative:
      "Respondent had 10 years of presence but failed to establish exceptional hardship to qualifying relatives. Judge found children could adapt to life in Guatemala.",
    documentsUsed: [
      "EOIR-42B",
      "School records",
      "Tax returns",
      "Letters from community members",
    ],
    keyFactors:
      "Court determined that general hardship of relocation did not rise to the exceptional and extremely unusual standard.",
    lessonsLearned:
      "The hardship standard for non-LPR cancellation is extremely high. Focus evidence on specific, individualized hardship rather than generalized claims.",
    timelineMonths: 22,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B"],
    denialReasons:
      "Failed to meet the exceptional and extremely unusual hardship standard under INA 240A(b)(1)(D).",
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Honduras",
    outcome: "approved",
    year: "2024",
    court: "Miami Immigration Court",
    narrative:
      "Mother of three USC children, one with severe autism requiring specialized therapy unavailable in Honduras. Fourteen years of continuous presence established.",
    documentsUsed: [
      "EOIR-42B",
      "Psychological evaluation",
      "Child's IEP records",
      "Therapy records",
      "Expert declaration on Honduras services",
      "Tax returns",
    ],
    keyFactors:
      "USC child's severe developmental disability and documented lack of equivalent services in Honduras met the exceptional hardship threshold.",
    lessonsLearned:
      "Children's special needs with country-specific evidence about lack of services can be decisive. Obtain expert declarations on conditions in the home country.",
    timelineMonths: 31,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B", "EOIR-28"],
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "El Salvador",
    outcome: "denied",
    year: "2021",
    court: "Arlington Immigration Court",
    narrative:
      "Respondent could not establish 10 years of continuous physical presence due to a 95-day trip abroad that broke continuity. Case denied on statutory eligibility grounds.",
    documentsUsed: [
      "EOIR-42B",
      "Passport stamps",
      "Tax returns",
      "Employment records",
    ],
    keyFactors:
      "Extended trip abroad exceeding 90 days broke the continuous physical presence requirement under the statute.",
    lessonsLearned:
      "Any single absence over 90 days or aggregate absences over 180 days can break continuous physical presence. Track travel carefully.",
    timelineMonths: 18,
    lawyerUsed: false,
    formsUsed: ["EOIR-42B"],
    denialReasons:
      "Failed to establish 10 years of continuous physical presence due to trip exceeding 90 days.",
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Mexico",
    outcome: "appealed",
    year: "2023",
    court: "Chicago Immigration Court",
    narrative:
      "Judge denied cancellation despite USC child's serious medical condition. Respondent appealed to BIA arguing the judge applied an incorrect legal standard for hardship.",
    documentsUsed: [
      "EOIR-42B",
      "Medical records",
      "BIA appeal brief",
      "Tax returns",
      "School records",
    ],
    keyFactors:
      "Appeal centered on whether the immigration judge improperly required hardship beyond what the statute demands.",
    lessonsLearned:
      "Preserve legal arguments on the record during the merits hearing. A well-documented record is essential for a successful appeal.",
    timelineMonths: 36,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B", "EOIR-26"],
    appealDetails:
      "BIA appeal filed arguing IJ applied incorrect hardship standard. Case remanded for further proceedings.",
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Jamaica",
    outcome: "approved",
    year: "2022",
    court: "New York Immigration Court",
    narrative:
      "Respondent present for 15 years with USC children deeply rooted in their community. Expert psychologist testified removal would cause severe psychological harm to the children.",
    documentsUsed: [
      "EOIR-42B",
      "Psychological evaluation",
      "School records",
      "Community letters",
      "Employment verification",
      "Tax returns",
    ],
    keyFactors:
      "Expert psychological testimony documenting predicted severe emotional harm to USC children was found highly persuasive by the court.",
    lessonsLearned:
      "Psychological evaluations from qualified experts carry significant weight. Invest in a thorough evaluation that addresses the specific hardship factors.",
    timelineMonths: 26,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B", "EOIR-28"],
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Dominican Republic",
    outcome: "denied",
    year: "2024",
    court: "Newark Immigration Court",
    narrative:
      "Respondent had good moral character and 11 years of presence but only adult LPR children as qualifying relatives. Court found no exceptional hardship to adult children.",
    documentsUsed: [
      "EOIR-42B",
      "Tax returns",
      "Employment records",
      "Letters of support",
    ],
    keyFactors:
      "Adult qualifying relatives who are healthy and self-sufficient rarely meet the exceptional and extremely unusual hardship standard.",
    lessonsLearned:
      "Cases relying on hardship to adult qualifying relatives face an uphill battle. Focus on any dependence or special circumstances that distinguish the case.",
    timelineMonths: 20,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B"],
    denialReasons:
      "Hardship to adult LPR children did not rise to the exceptional and extremely unusual level required by statute.",
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Ecuador",
    outcome: "pending",
    year: "2025",
    court: "Dallas Immigration Court",
    narrative:
      "Respondent has been in the US for 13 years with two USC children, one requiring ongoing cardiac treatment. Individual hearing scheduled after multiple continuances.",
    documentsUsed: [
      "EOIR-42B",
      "Medical records",
      "Tax returns",
      "School records",
      "Letters of support",
    ],
    keyFactors:
      "Child's cardiac condition and documented need for continuous specialized care in the US are central to the hardship claim.",
    lessonsLearned:
      "Court backlogs can extend timelines significantly. Keep evidence current and update medical and financial records before each hearing.",
    timelineMonths: 19,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B"],
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Haiti",
    outcome: "approved",
    year: "2023",
    court: "Boston Immigration Court",
    narrative:
      "Respondent had 14 years of presence and USC spouse diagnosed with multiple sclerosis. Country conditions evidence showed Haiti's healthcare system could not manage the spouse's condition.",
    documentsUsed: [
      "EOIR-42B",
      "Medical records",
      "Country conditions report",
      "Expert declaration",
      "Tax returns",
      "Marriage certificate",
    ],
    keyFactors:
      "Combination of spouse's degenerative illness and well-documented collapse of Haiti's medical infrastructure proved decisive.",
    lessonsLearned:
      "Country conditions evidence is critical when arguing medical hardship. Use expert declarations to connect the qualifying relative's condition to specific country deficiencies.",
    timelineMonths: 30,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B", "EOIR-28"],
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Mexico",
    outcome: "denied",
    year: "2020",
    court: "Phoenix Immigration Court",
    narrative:
      "Respondent had two USC children but a DUI conviction raised good moral character concerns. Judge found respondent failed the good moral character requirement.",
    documentsUsed: [
      "EOIR-42B",
      "Court disposition records",
      "Tax returns",
      "Rehabilitation evidence",
    ],
    keyFactors:
      "Criminal conviction during the statutory period negated the good moral character requirement.",
    lessonsLearned:
      "Any criminal history during the 10-year statutory period can be fatal. Address moral character issues proactively with rehabilitation evidence.",
    timelineMonths: 16,
    lawyerUsed: false,
    formsUsed: ["EOIR-42B"],
    denialReasons:
      "Failed to establish good moral character due to DUI conviction within the 10-year statutory period.",
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Colombia",
    outcome: "approved",
    year: "2024",
    court: "San Francisco Immigration Court",
    narrative:
      "Single mother of a USC child with Down syndrome demonstrated the child's dependence on US-based educational and therapeutic services. Eleven years of continuous presence established.",
    documentsUsed: [
      "EOIR-42B",
      "Child's medical records",
      "IEP documentation",
      "Expert declaration on Colombia services",
      "Tax returns",
      "Employer letter",
    ],
    keyFactors:
      "USC child's severe disability combined with expert testimony that comparable services do not exist in Colombia satisfied the hardship standard.",
    lessonsLearned:
      "Document every service the qualifying relative receives in the US and obtain expert evidence that equivalent services are unavailable in the home country.",
    timelineMonths: 27,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B", "EOIR-28"],
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Guatemala",
    outcome: "appealed",
    year: "2022",
    court: "Memphis Immigration Court",
    narrative:
      "IJ denied relief despite strong hardship evidence. Appeal to BIA argued the judge failed to consider cumulative hardship factors as required by precedent.",
    documentsUsed: [
      "EOIR-42B",
      "Appeal brief",
      "Medical records",
      "Financial records",
      "Country conditions report",
    ],
    keyFactors:
      "BIA found the immigration judge failed to conduct the required cumulative analysis of hardship factors under Matter of Recinas.",
    lessonsLearned:
      "Ensure the IJ addresses each hardship factor on the record. If the judge ignores key evidence, it strengthens grounds for appeal.",
    timelineMonths: 40,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B", "EOIR-26"],
    appealDetails:
      "BIA remanded, finding IJ did not adequately consider cumulative hardship to USC children.",
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "China",
    outcome: "approved",
    year: "2021",
    court: "New York Immigration Court",
    narrative:
      "Respondent with 16 years of presence had a USC child with leukemia undergoing active chemotherapy. Judge granted relief, finding interruption of treatment would be life-threatening.",
    documentsUsed: [
      "EOIR-42B",
      "Oncology records",
      "Treatment plan",
      "Expert medical declaration",
      "Tax returns",
      "Employer verification",
    ],
    keyFactors:
      "Active life-threatening medical treatment of a USC child created a clear case of exceptional and extremely unusual hardship.",
    lessonsLearned:
      "Ongoing critical medical treatment is among the strongest hardship evidence. Obtain treating physician declarations detailing the consequences of treatment interruption.",
    timelineMonths: 24,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B", "EOIR-28"],
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Honduras",
    outcome: "denied",
    year: "2023",
    court: "Atlanta Immigration Court",
    narrative:
      "Respondent had 10 years of presence but presented limited hardship evidence. Court found financial hardship alone insufficient to meet the exceptional standard.",
    documentsUsed: [
      "EOIR-42B",
      "Tax returns",
      "Pay stubs",
      "Children's school records",
    ],
    keyFactors:
      "Purely economic hardship without additional compelling factors does not satisfy the exceptional and extremely unusual hardship requirement.",
    lessonsLearned:
      "Financial hardship alone is almost never sufficient. Build a multi-faceted hardship case covering medical, psychological, educational, and country conditions factors.",
    timelineMonths: 21,
    lawyerUsed: false,
    formsUsed: ["EOIR-42B"],
    denialReasons:
      "Economic hardship alone did not meet the exceptional and extremely unusual hardship threshold.",
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Peru",
    outcome: "pending",
    year: "2025",
    court: "Denver Immigration Court",
    narrative:
      "Respondent with 11 years of presence has a USC spouse with bipolar disorder. Case awaiting merits hearing after master calendar appearance.",
    documentsUsed: [
      "EOIR-42B",
      "Psychiatric records",
      "Marriage certificate",
      "Tax returns",
      "Employment records",
    ],
    keyFactors:
      "Spouse's documented severe mental health condition and dependence on respondent as primary caregiver form the core of the hardship argument.",
    lessonsLearned:
      "Mental health conditions require thorough documentation from treating psychiatrists. Establish the caregiver relationship with concrete evidence.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B"],
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "El Salvador",
    outcome: "approved",
    year: "2022",
    court: "Houston Immigration Court",
    narrative:
      "Respondent present for 13 years with three USC children, eldest with severe PTSD from witnessing domestic violence. Psychologist testified removal would cause irreparable psychological harm.",
    documentsUsed: [
      "EOIR-42B",
      "Psychological evaluation",
      "Police reports",
      "Protective order",
      "School records",
      "Tax returns",
    ],
    keyFactors:
      "Child's severe PTSD requiring ongoing specialized treatment and the domestic violence history created a compelling hardship case.",
    lessonsLearned:
      "Domestic violence history and its psychological impact on children can significantly strengthen a hardship claim. Document the connection between past trauma and current treatment needs.",
    timelineMonths: 29,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B", "EOIR-28"],
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Brazil",
    outcome: "denied",
    year: "2024",
    court: "Charlotte Immigration Court",
    narrative:
      "Respondent had 10 years of presence but the NTA was served before the 10-year mark, triggering the stop-time rule. Court found statutory eligibility was not met.",
    documentsUsed: [
      "EOIR-42B",
      "NTA",
      "Entry records",
      "Tax returns",
    ],
    keyFactors:
      "The stop-time rule ended accrual of physical presence upon service of the NTA before the 10-year threshold was reached.",
    lessonsLearned:
      "The stop-time rule under INA 240A(d) stops the clock on physical presence when the NTA is served. Verify eligibility dates carefully before filing.",
    timelineMonths: 15,
    lawyerUsed: false,
    formsUsed: ["EOIR-42B"],
    denialReasons:
      "Stop-time rule applied; respondent had not accrued 10 years of continuous physical presence before NTA was served.",
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Cuba",
    outcome: "approved",
    year: "2021",
    court: "Miami Immigration Court",
    narrative:
      "Respondent with 12 years of presence had a USC child with Type 1 diabetes requiring insulin pump therapy. Expert testified such treatment is unavailable in Cuba.",
    documentsUsed: [
      "EOIR-42B",
      "Endocrinology records",
      "Expert declaration on Cuban healthcare",
      "Country conditions report",
      "Tax returns",
      "Community letters",
    ],
    keyFactors:
      "Documented unavailability of insulin pump therapy and related supplies in Cuba established exceptional hardship to the USC child.",
    lessonsLearned:
      "For medical hardship cases involving countries with limited healthcare, expert testimony on specific treatment unavailability is powerful evidence.",
    timelineMonths: 25,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B", "EOIR-28"],
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Nigeria",
    outcome: "appealed",
    year: "2023",
    court: "Baltimore Immigration Court",
    narrative:
      "IJ denied relief finding hardship did not meet the statutory threshold. Respondent appealed arguing the judge ignored key medical evidence regarding USC child's sickle cell disease.",
    documentsUsed: [
      "EOIR-42B",
      "Appeal brief",
      "Hematology records",
      "Expert medical declaration",
      "Country conditions report",
    ],
    keyFactors:
      "Appeal argued IJ failed to consider critical medical evidence showing USC child's sickle cell disease requires specialized US-based care.",
    lessonsLearned:
      "If the judge does not address key evidence in the decision, note it for the appeal. Failure to consider material evidence is a strong basis for remand.",
    timelineMonths: 38,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B", "EOIR-26"],
    appealDetails:
      "BIA appeal pending; brief argues IJ committed clear error by ignoring medical evidence of child's sickle cell disease.",
  },
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Mexico",
    outcome: "denied",
    year: "2020",
    court: "El Paso Immigration Court",
    narrative:
      "Respondent had 10 years of presence and two USC children but no evidence of hardship beyond normal consequences of removal. Pro se respondent struggled to present the case effectively.",
    documentsUsed: [
      "EOIR-42B",
      "Birth certificates",
      "Tax returns",
    ],
    keyFactors:
      "Lack of individualized hardship evidence beyond general disruption to children's lives resulted in denial.",
    lessonsLearned:
      "Pro se respondents in cancellation cases face significant challenges. The hardship standard requires specific, well-documented evidence that is difficult to present without legal assistance.",
    timelineMonths: 17,
    lawyerUsed: false,
    formsUsed: ["EOIR-42B"],
    denialReasons:
      "Failed to present evidence of hardship rising above the normal consequences of deportation.",
  },
  // ============================================================
  // LPR CANCELLATION OF REMOVAL (EOIR-42A) — 15 cases
  // ============================================================
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2023",
    court: "Los Angeles Immigration Court",
    narrative:
      "LPR of 18 years with aggravated DUI conviction demonstrated rehabilitation and exceptional equities including USC family and long employment history. Judge exercised discretion favorably.",
    documentsUsed: [
      "EOIR-42A",
      "Rehabilitation evidence",
      "AA completion certificates",
      "Employment records",
      "Family declarations",
      "Tax returns",
    ],
    keyFactors:
      "Eighteen years of lawful residence, strong family ties, full rehabilitation, and steady employment history tipped discretion in respondent's favor.",
    lessonsLearned:
      "Rehabilitation evidence is critical for LPR cancellation cases involving criminal grounds. Document sobriety, community involvement, and family support thoroughly.",
    timelineMonths: 24,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A", "EOIR-28"],
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "Dominican Republic",
    outcome: "denied",
    year: "2022",
    court: "New York Immigration Court",
    narrative:
      "LPR of 8 years with drug trafficking conviction. Court found the serious nature of the offense outweighed the equities presented.",
    documentsUsed: [
      "EOIR-42A",
      "Criminal court records",
      "Family letters",
      "Employment records",
    ],
    keyFactors:
      "Drug trafficking conviction was deemed too serious for a favorable exercise of discretion despite family ties in the US.",
    lessonsLearned:
      "Drug trafficking and other serious offenses create a very high bar for discretionary relief. Equities must be extraordinary to overcome such adverse factors.",
    timelineMonths: 20,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A"],
    denialReasons:
      "Adverse factors stemming from drug trafficking conviction outweighed positive equities under the discretionary balancing test.",
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "Jamaica",
    outcome: "approved",
    year: "2024",
    court: "Atlanta Immigration Court",
    narrative:
      "LPR of 22 years placed in proceedings for a controlled substance conviction. Demonstrated the conviction was for simple possession of a small amount and showed strong rehabilitation.",
    documentsUsed: [
      "EOIR-42A",
      "Drug treatment records",
      "Employment verification",
      "Community service records",
      "Family declarations",
      "Tax returns",
    ],
    keyFactors:
      "Long-term residence, single minor offense, completed drug treatment, and extensive community ties supported a favorable discretionary outcome.",
    lessonsLearned:
      "For minor drug offenses, demonstrating genuine rehabilitation through treatment completion and community involvement can be sufficient. Length of LPR status matters significantly.",
    timelineMonths: 22,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A", "EOIR-28"],
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "Philippines",
    outcome: "denied",
    year: "2021",
    court: "San Francisco Immigration Court",
    narrative:
      "LPR of 12 years with two assault convictions. Court found pattern of criminal behavior outweighed equities despite USC children.",
    documentsUsed: [
      "EOIR-42A",
      "Criminal records",
      "Family declarations",
      "Employment records",
      "Children's school records",
    ],
    keyFactors:
      "Multiple violent offenses indicated a pattern of criminal behavior that the court found disqualifying despite positive equities.",
    lessonsLearned:
      "Multiple convictions, especially violent ones, create a pattern that is extremely difficult to overcome. A single offense is far more defensible than repeat offenses.",
    timelineMonths: 19,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A"],
    denialReasons:
      "Pattern of violent criminal conduct outweighed equities in the discretionary analysis.",
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2023",
    court: "Newark Immigration Court",
    narrative:
      "LPR of 20 years with a single shoplifting conviction that was classified as a crime involving moral turpitude. Strong equities including US military service and USC family granted relief.",
    documentsUsed: [
      "EOIR-42A",
      "Military service records",
      "DD-214",
      "Family declarations",
      "Employment records",
      "Tax returns",
    ],
    keyFactors:
      "Military service record combined with 20 years of lawful residence and a single minor offense heavily favored a grant of relief.",
    lessonsLearned:
      "US military service is among the strongest positive equities in cancellation cases. Veterans should always highlight their service record.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A", "EOIR-28"],
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "Colombia",
    outcome: "appealed",
    year: "2022",
    court: "Miami Immigration Court",
    narrative:
      "LPR of 15 years denied cancellation for a fraud conviction. Appealed to BIA arguing the IJ gave insufficient weight to hardship to USC children.",
    documentsUsed: [
      "EOIR-42A",
      "Appeal brief",
      "Criminal court records",
      "Children's medical records",
      "Family declarations",
    ],
    keyFactors:
      "Appeal focused on the IJ's failure to adequately weigh the severe hardship that deportation would cause to respondent's special-needs USC child.",
    lessonsLearned:
      "When the IJ's discretionary analysis appears imbalanced, an appeal can succeed if the record supports stronger equities than the judge acknowledged.",
    timelineMonths: 34,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A", "EOIR-26"],
    appealDetails:
      "BIA remanded for reconsideration, finding IJ did not adequately address hardship to USC children in the discretionary balance.",
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "Trinidad and Tobago",
    outcome: "denied",
    year: "2024",
    court: "Cleveland Immigration Court",
    narrative:
      "LPR of 9 years with an aggravated felony theft conviction. Court found respondent did not meet the 7-year continuous residence requirement after the stop-time rule applied.",
    documentsUsed: [
      "EOIR-42A",
      "Criminal records",
      "NTA",
      "Residence records",
    ],
    keyFactors:
      "Stop-time rule triggered by commission of the offense before 7 years of continuous residence eliminated statutory eligibility.",
    lessonsLearned:
      "For LPR cancellation, continuous residence ends when the offense triggering removal is committed. Verify the timeline between admission and the offense date.",
    timelineMonths: 14,
    lawyerUsed: false,
    formsUsed: ["EOIR-42A"],
    denialReasons:
      "Respondent did not accrue 7 years of continuous residence before the commission of the qualifying offense.",
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "Poland",
    outcome: "approved",
    year: "2020",
    court: "Chicago Immigration Court",
    narrative:
      "LPR of 25 years with a domestic battery conviction. Completed batterer's intervention program and had no other criminal history. Judge found extraordinary equities warranted relief.",
    documentsUsed: [
      "EOIR-42A",
      "Batterer's intervention certificate",
      "Employment records",
      "Property ownership records",
      "Community letters",
      "Tax returns",
    ],
    keyFactors:
      "Quarter-century of lawful residence, single offense with completed rehabilitation, property ownership, and deep community ties constituted extraordinary equities.",
    lessonsLearned:
      "Long-term LPR status with deep roots significantly favors a discretionary grant. Complete all court-ordered programs and document rehabilitation thoroughly.",
    timelineMonths: 21,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A", "EOIR-28"],
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "Ghana",
    outcome: "pending",
    year: "2025",
    court: "Detroit Immigration Court",
    narrative:
      "LPR of 14 years in proceedings for a firearms possession conviction. Merits hearing continued due to pending criminal appeal that may vacate the conviction.",
    documentsUsed: [
      "EOIR-42A",
      "Criminal court records",
      "Motion for continuance",
      "Family declarations",
    ],
    keyFactors:
      "Pending criminal appeal could vacate the underlying conviction, potentially eliminating the basis for removal proceedings.",
    lessonsLearned:
      "If a criminal appeal is pending, request a continuance in immigration court. A vacated conviction can change the entire case posture.",
    timelineMonths: 12,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A"],
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "Mexico",
    outcome: "denied",
    year: "2023",
    court: "Dallas Immigration Court",
    narrative:
      "LPR of 10 years with two DUI convictions and a hit-and-run. Court found the cumulative criminal record demonstrated poor moral character and denied relief.",
    documentsUsed: [
      "EOIR-42A",
      "Criminal records",
      "DMV records",
      "Family letters",
      "Employment records",
    ],
    keyFactors:
      "Multiple DUI convictions combined with a hit-and-run demonstrated a pattern of irresponsible behavior that overwhelmed positive equities.",
    lessonsLearned:
      "Multiple traffic-related criminal offenses, especially hit-and-run, are taken very seriously. Each additional offense exponentially weakens the case.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A"],
    denialReasons:
      "Cumulative criminal history including multiple DUIs and hit-and-run outweighed positive equities in discretionary analysis.",
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "Ireland",
    outcome: "approved",
    year: "2024",
    court: "Boston Immigration Court",
    narrative:
      "LPR of 30 years with a single aggravated DUI. Extensive equities including USC spouse, children, grandchildren, and decades of tax-paying employment. Judge granted relief.",
    documentsUsed: [
      "EOIR-42A",
      "Sobriety records",
      "Employment history",
      "Family declarations",
      "Property records",
      "Tax returns",
    ],
    keyFactors:
      "Three decades of lawful residence with extraordinary community and family ties outweighed the single criminal offense.",
    lessonsLearned:
      "Extremely long-term LPR status with deep family and community roots can overcome even serious single offenses. Document every tie to the US comprehensively.",
    timelineMonths: 20,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A", "EOIR-28"],
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "Honduras",
    outcome: "appealed",
    year: "2021",
    court: "Seattle Immigration Court",
    narrative:
      "LPR of 16 years denied cancellation after a burglary conviction. Appeal filed arguing the IJ improperly weighed adverse factors and ignored rehabilitation evidence.",
    documentsUsed: [
      "EOIR-42A",
      "Appeal brief",
      "Rehabilitation records",
      "Employment records",
      "Family declarations",
    ],
    keyFactors:
      "Appeal challenged the IJ's discretionary analysis as failing to account for post-conviction rehabilitation and family hardship.",
    lessonsLearned:
      "Document rehabilitation efforts contemporaneously. A strong post-conviction record of good behavior is critical both at trial and on appeal.",
    timelineMonths: 32,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A", "EOIR-26"],
    appealDetails:
      "BIA dismissed the appeal, finding the IJ's discretionary balancing was within acceptable bounds. Federal court petition under review.",
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "El Salvador",
    outcome: "pending",
    year: "2025",
    court: "Houston Immigration Court",
    narrative:
      "LPR of 11 years in proceedings for an aggravated assault conviction reduced to misdemeanor on appeal. Case awaiting rescheduled merits hearing.",
    documentsUsed: [
      "EOIR-42A",
      "Modified criminal judgment",
      "Rehabilitation records",
      "Family declarations",
      "Employment verification",
    ],
    keyFactors:
      "Reduction of the conviction to a misdemeanor may eliminate the aggravated felony bar and restore eligibility for cancellation.",
    lessonsLearned:
      "Post-conviction relief in criminal court can directly impact immigration eligibility. Coordinate closely between criminal and immigration counsel.",
    timelineMonths: 10,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A"],
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "China",
    outcome: "denied",
    year: "2020",
    court: "New York Immigration Court",
    narrative:
      "LPR of 7 years with a money laundering conviction classified as an aggravated felony. Court found the aggravated felony bar precluded eligibility for cancellation.",
    documentsUsed: [
      "EOIR-42A",
      "Criminal records",
      "Financial records",
      "Family declarations",
    ],
    keyFactors:
      "Aggravated felony conviction created a statutory bar to cancellation of removal that cannot be overcome by equities.",
    lessonsLearned:
      "Certain aggravated felonies create an absolute bar to cancellation. Verify whether the specific conviction triggers the bar before investing in the application.",
    timelineMonths: 16,
    lawyerUsed: false,
    formsUsed: ["EOIR-42A"],
    denialReasons:
      "Aggravated felony conviction under INA 101(a)(43) created a statutory bar to cancellation of removal for LPRs.",
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "Ecuador",
    outcome: "approved",
    year: "2022",
    court: "Denver Immigration Court",
    narrative:
      "LPR of 19 years with a single misdemeanor drug possession conviction. Strong equities including USC family, business ownership, and community involvement led to a favorable decision.",
    documentsUsed: [
      "EOIR-42A",
      "Drug treatment records",
      "Business registration",
      "Tax returns",
      "Community letters",
      "Family declarations",
    ],
    keyFactors:
      "Business ownership employing US workers, 19 years of residence, completed drug treatment, and strong family ties created overwhelming positive equities.",
    lessonsLearned:
      "Business ownership and job creation are strong equities. Document the economic impact of the respondent's presence in the community.",
    timelineMonths: 23,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A", "EOIR-28"],
  },
];
