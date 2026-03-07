import type { CaseRecord } from "@immivault/shared";

export const VAWA_SIJS_CASES: CaseRecord[] = [
  // ============================================================
  // VAWA (18 cases)
  // ============================================================
  {
    caseType: "vawa",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2023",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "Self-petitioned under VAWA after enduring years of physical and emotional abuse by USC spouse. Prima facie determination was granted within 5 months, and full approval followed after submission of police reports and a personal declaration.",
    documentsUsed: [
      "Personal declaration",
      "Police reports",
      "Medical records",
      "Photographs of injuries",
      "Affidavits from friends and family",
    ],
    keyFactors:
      "Well-documented police reports and medical evidence of battery strongly corroborated the petitioner's declaration.",
    lessonsLearned:
      "Gather evidence of abuse as safely as possible, including medical records, police reports, and witness statements. A prima facie determination provides interim benefits while the case is adjudicated.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Guatemala",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "Filed VAWA self-petition as abused spouse of LPR husband who subjected her to extreme cruelty and economic control. Approval came after 22 months with strong corroborating evidence from a licensed therapist.",
    documentsUsed: [
      "Personal declaration",
      "Therapist letter",
      "Financial records showing economic abuse",
      "Affidavits from community members",
    ],
    keyFactors:
      "Detailed therapist letter documenting PTSD and trauma consistent with described abuse was critical to establishing extreme cruelty.",
    lessonsLearned:
      "Psychological evaluations from licensed mental health professionals carry significant weight in VAWA cases, especially where physical evidence is limited.",
    timelineMonths: 22,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },
  {
    caseType: "vawa",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2022",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "VAWA self-petition filed by abused spouse of USC husband who inflicted emotional and financial abuse over a 6-year marriage. Case was approved after 16 months with extensive documentation of the abusive pattern.",
    documentsUsed: [
      "Personal declaration",
      "Text messages and emails showing threats",
      "Bank statements",
      "Affidavits from neighbors",
      "Psychological evaluation",
    ],
    keyFactors:
      "Digital evidence including threatening text messages and emails provided a contemporaneous record of extreme cruelty.",
    lessonsLearned:
      "Preserve digital communications such as texts, emails, and voicemails as they serve as powerful real-time evidence of abuse.",
    timelineMonths: 16,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Philippines",
    outcome: "approved",
    year: "2023",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "Self-petitioned after USC spouse used immigration status as a tool of control and repeatedly threatened deportation. Prima facie was granted quickly, and full approval followed with supporting affidavits and a protection order.",
    documentsUsed: [
      "Personal declaration",
      "Restraining order",
      "Affidavits from coworkers",
      "Psychological evaluation",
    ],
    keyFactors:
      "The restraining order issued by a state court and consistent testimony from multiple affiants established a clear pattern of abuse.",
    lessonsLearned:
      "A protection or restraining order from a state court, while not required, can substantially bolster a VAWA petition.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Honduras",
    outcome: "denied",
    year: "2024",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "VAWA self-petition was denied due to insufficient evidence of a qualifying relationship and battery or extreme cruelty. The petitioner had limited corroborating documentation beyond her own declaration.",
    documentsUsed: [
      "Personal declaration",
      "Marriage certificate",
    ],
    keyFactors:
      "Lack of any corroborating evidence beyond the personal declaration led to a finding of insufficient proof of abuse.",
    lessonsLearned:
      "While a personal declaration alone can theoretically suffice, in practice USCIS expects corroborating evidence. Gather as much supporting documentation as possible before filing.",
    timelineMonths: 20,
    lawyerUsed: false,
    formsUsed: ["I-360"],
    denialReasons:
      "Insufficient evidence of battery or extreme cruelty; no corroborating documentation submitted beyond the personal declaration.",
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Colombia",
    outcome: "approved",
    year: "2025",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "Filed VAWA petition as abused child of USC father who subjected her to physical abuse and neglect throughout childhood. Approved after 19 months with school counselor reports and medical evidence.",
    documentsUsed: [
      "Personal declaration",
      "School counselor reports",
      "Medical records",
      "CPS investigation report",
      "Affidavit from mother",
    ],
    keyFactors:
      "CPS investigation report documenting substantiated abuse by the USC father was highly persuasive.",
    lessonsLearned:
      "Child abuse cases under VAWA can rely on school and child protective services records as strong corroborating evidence.",
    timelineMonths: 19,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Nigeria",
    outcome: "pending",
    year: "2025",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "VAWA self-petition filed by spouse of LPR husband who inflicted repeated physical violence. Prima facie determination has been granted and the petitioner is awaiting final adjudication.",
    documentsUsed: [
      "Personal declaration",
      "Hospital emergency room records",
      "Police reports",
      "Photographs of injuries",
      "Affidavits from church members",
    ],
    keyFactors:
      "Multiple emergency room visits with injuries consistent with the described abuse formed the core of the evidentiary record.",
    lessonsLearned:
      "Seek medical attention after incidents of abuse when it is safe to do so, as hospital records create an independent evidentiary trail.",
    timelineMonths: 12,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },
  {
    caseType: "vawa",
    countryOfOrigin: "El Salvador",
    outcome: "approved",
    year: "2021",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "Abused spouse of USC husband filed VAWA self-petition with help from a legal aid organization. Approved after 24 months with evidence including a therapist evaluation and sworn declarations from witnesses.",
    documentsUsed: [
      "Personal declaration",
      "Therapist evaluation",
      "Sworn declarations from two witnesses",
      "Country conditions evidence",
    ],
    keyFactors:
      "Witness declarations from individuals who directly observed the abuse provided critical third-party corroboration.",
    lessonsLearned:
      "Legal aid organizations and pro bono attorneys specializing in domestic violence can provide high-quality representation at no cost. Witnesses who observed abuse firsthand should provide detailed declarations.",
    timelineMonths: 24,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Dominican Republic",
    outcome: "pending",
    year: "2025",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "Self-petition filed by abused spouse of USC who suffered extreme emotional cruelty and isolation. Case is pending after prima facie determination, with the petitioner holding a valid EAD.",
    documentsUsed: [
      "Personal declaration",
      "Psychological evaluation",
      "Affidavits from family members",
      "Text messages showing controlling behavior",
    ],
    keyFactors:
      "Psychological evaluation diagnosing major depressive disorder linked to spousal abuse was key to establishing extreme cruelty without physical violence.",
    lessonsLearned:
      "VAWA covers extreme cruelty beyond physical violence, including emotional abuse, isolation, and coercive control. A psychological evaluation can bridge the gap when there is no physical evidence.",
    timelineMonths: 13,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Haiti",
    outcome: "denied",
    year: "2022",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "VAWA petition denied because the petitioner could not establish that the abuser was a USC or LPR at the time of the abuse. The abuser's status had lapsed before the marriage.",
    documentsUsed: [
      "Personal declaration",
      "Marriage certificate",
      "Affidavit from friend",
    ],
    keyFactors:
      "Failure to establish the abuser's qualifying immigration status at the relevant time was the sole basis for denial.",
    lessonsLearned:
      "Confirm the abuser's immigration status before filing. If the abuser has lost LPR status or citizenship, the VAWA petition may not be viable.",
    timelineMonths: 18,
    lawyerUsed: false,
    formsUsed: ["I-360"],
    denialReasons:
      "Petitioner failed to establish that the abuser held USC or LPR status during the period of the qualifying relationship.",
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Brazil",
    outcome: "approved",
    year: "2020",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "Filed VAWA self-petition after LPR spouse subjected her to escalating physical abuse during a 4-year marriage. Case was approved in 15 months with strong documentary evidence.",
    documentsUsed: [
      "Personal declaration",
      "Police reports",
      "Photographs of injuries",
      "Protective order",
      "Medical records",
    ],
    keyFactors:
      "A protective order combined with multiple police reports created an overwhelming evidentiary record of battery.",
    lessonsLearned:
      "Filing police reports, even when charges are not pursued, creates an official record that USCIS considers highly credible.",
    timelineMonths: 15,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Pakistan",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "Abused spouse of USC self-petitioned under VAWA after years of coercive control including confiscation of passport and forced isolation. Approved with compelling psychological and documentary evidence.",
    documentsUsed: [
      "Personal declaration",
      "Psychological evaluation",
      "Financial records",
      "Affidavits from domestic violence shelter staff",
    ],
    keyFactors:
      "Affidavit from domestic violence shelter staff who housed the petitioner after she fled provided powerful corroboration of the abuse.",
    lessonsLearned:
      "Domestic violence shelters can provide not only safety but also staff who can serve as witnesses and provide supporting documentation for VAWA cases.",
    timelineMonths: 21,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Russia",
    outcome: "pending",
    year: "2025",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "VAWA self-petition filed by spouse of USC after enduring years of psychological abuse and threats of deportation. Awaiting adjudication after receiving prima facie approval and work authorization.",
    documentsUsed: [
      "Personal declaration",
      "Voicemail recordings of threats",
      "Therapist records",
      "Affidavits from two friends",
    ],
    keyFactors:
      "Voicemail recordings where the abuser explicitly threatened to have the petitioner deported were critical evidence of extreme cruelty.",
    lessonsLearned:
      "Audio and video recordings, where legally obtained, can be some of the most compelling evidence in VAWA cases involving threats and emotional abuse.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Jamaica",
    outcome: "approved",
    year: "2022",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "Self-petitioned as abused spouse of LPR after suffering physical battery and economic abuse. Approved after 26 months following an RFE requesting additional evidence of good faith marriage.",
    documentsUsed: [
      "Personal declaration",
      "Joint tax returns",
      "Joint lease agreements",
      "Medical records",
      "Affidavits from neighbors",
    ],
    keyFactors:
      "Successfully responding to an RFE with joint financial records and lease agreements proved the bona fide nature of the marriage.",
    lessonsLearned:
      "Be prepared for an RFE, especially regarding proof of good faith marriage. Maintain joint financial documents even after separating from the abuser.",
    timelineMonths: 26,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
    rfesReceived:
      "RFE requesting additional evidence of bona fide marriage, responded to with joint tax returns and lease agreements.",
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Ghana",
    outcome: "denied",
    year: "2023",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "VAWA self-petition denied after USCIS found inconsistencies between the personal declaration and supporting evidence. The petitioner did not respond to an RFE addressing the discrepancies.",
    documentsUsed: [
      "Personal declaration",
      "Affidavit from cousin",
    ],
    keyFactors:
      "Inconsistencies in the timeline of events and failure to respond to an RFE were fatal to the case.",
    lessonsLearned:
      "Ensure all statements and supporting documents are internally consistent. Always respond to RFEs, as failure to do so almost guarantees denial.",
    timelineMonths: 17,
    lawyerUsed: false,
    formsUsed: ["I-360"],
    denialReasons:
      "Material inconsistencies between personal declaration and supporting affidavit; failure to respond to RFE.",
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Albania",
    outcome: "approved",
    year: "2021",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "Filed VAWA petition as abused spouse of USC after suffering severe physical violence during a 3-year marriage. Approved in 13 months with extensive medical and law enforcement documentation.",
    documentsUsed: [
      "Personal declaration",
      "Emergency room records",
      "Police incident reports",
      "Photographs of injuries",
      "Restraining order",
      "Affidavits from two witnesses",
    ],
    keyFactors:
      "Multiple police incident reports filed over a two-year period demonstrated a sustained pattern of battery.",
    lessonsLearned:
      "Building a record over time through repeated police reports and medical visits, while difficult, creates the strongest possible evidentiary foundation for a VAWA case.",
    timelineMonths: 13,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Ukraine",
    outcome: "pending",
    year: "2024",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "VAWA self-petition filed by spouse of USC following years of emotional abuse and financial control. Case is pending final adjudication after prima facie approval was issued.",
    documentsUsed: [
      "Personal declaration",
      "Bank statements showing financial control",
      "Therapist letter",
      "Affidavits from coworkers",
    ],
    keyFactors:
      "Bank statements showing the abuser systematically denied access to joint finances documented the economic dimension of extreme cruelty.",
    lessonsLearned:
      "Financial abuse is a recognized form of extreme cruelty under VAWA. Bank statements and financial records can effectively demonstrate economic control.",
    timelineMonths: 15,
    lawyerUsed: false,
    formsUsed: ["I-360", "I-765"],
  },
  {
    caseType: "vawa",
    countryOfOrigin: "Morocco",
    outcome: "approved",
    year: "2023",
    court: "USCIS Vermont Service Center (VAWA Unit)",
    narrative:
      "Abused spouse of USC self-petitioned under VAWA after suffering physical and emotional abuse, including forced isolation from family and friends. Approved after 20 months with comprehensive documentation.",
    documentsUsed: [
      "Personal declaration",
      "Medical records",
      "Psychological evaluation",
      "Affidavits from domestic violence advocate",
      "Phone records showing isolation",
    ],
    keyFactors:
      "A domestic violence advocate's detailed affidavit describing the petitioner's condition upon intake at a shelter was particularly persuasive.",
    lessonsLearned:
      "Seeking help from a domestic violence organization creates both safety and a documented record. Advocates who work with survivors can provide informed affidavits.",
    timelineMonths: 20,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },

  // ============================================================
  // SIJS (12 cases)
  // ============================================================
  {
    caseType: "sijs",
    countryOfOrigin: "Guatemala",
    outcome: "approved",
    year: "2023",
    court: "USCIS Nebraska Service Center / Cook County Juvenile Court",
    narrative:
      "Unaccompanied minor obtained SIJ predicate order from state juvenile court finding abandonment by both parents. USCIS approved the I-360 petition within 6 months of filing.",
    documentsUsed: [
      "State juvenile court order",
      "Birth certificate",
      "Personal declaration",
      "Home study report",
      "Guardian affidavit",
    ],
    keyFactors:
      "Clear and uncontested finding of parental abandonment by the state juvenile court streamlined USCIS adjudication.",
    lessonsLearned:
      "Obtaining a strong predicate order from the state juvenile court is the most critical step in any SIJS case. Work with an attorney experienced in both state family law and immigration law.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "sijs",
    countryOfOrigin: "Honduras",
    outcome: "approved",
    year: "2024",
    court: "USCIS Texas Service Center / Harris County Juvenile Court",
    narrative:
      "Minor who suffered abuse by father in Honduras obtained SIJ status after state court made required findings of abuse and that reunification was not viable. Green card application followed promptly.",
    documentsUsed: [
      "State juvenile court order",
      "Birth certificate",
      "Medical records documenting abuse",
      "Affidavit from mother",
      "Country conditions report",
    ],
    keyFactors:
      "State court's detailed findings of parental abuse and a determination that return to Honduras was not in the child's best interest were dispositive.",
    lessonsLearned:
      "State court findings must specifically address abuse, neglect, or abandonment and the child's best interest. Ensure the predicate order contains all required findings under federal law.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "sijs",
    countryOfOrigin: "El Salvador",
    outcome: "denied",
    year: "2023",
    court: "USCIS Nebraska Service Center / Los Angeles County Juvenile Court",
    narrative:
      "SIJS petition denied because the applicant had aged out before the I-360 was filed. The state court predicate order was obtained after the applicant turned 21.",
    documentsUsed: [
      "State juvenile court order",
      "Birth certificate",
      "Personal declaration",
    ],
    keyFactors:
      "Aging out before filing the I-360 petition rendered the applicant ineligible for SIJ classification.",
    lessonsLearned:
      "Age requirements for SIJS are strict. File the state court petition and the I-360 well before the applicant reaches the age cutoff in the relevant state.",
    timelineMonths: 24,
    lawyerUsed: true,
    formsUsed: ["I-360"],
    denialReasons:
      "Applicant exceeded the age limit for SIJ eligibility at the time of filing the I-360 petition.",
  },
  {
    caseType: "sijs",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2022",
    court: "USCIS Texas Service Center / Bexar County Juvenile Court",
    narrative:
      "Minor neglected by both parents in Mexico was placed with an aunt in Texas and obtained SIJ predicate findings from state court. I-360 was approved, and adjustment of status followed.",
    documentsUsed: [
      "State juvenile court order",
      "Birth certificate",
      "Guardian designation documents",
      "School records",
      "Affidavit from aunt/guardian",
    ],
    keyFactors:
      "State court finding of neglect by both parents and appointment of the aunt as legal guardian satisfied all SIJ predicate requirements.",
    lessonsLearned:
      "When both parents are the subject of the SIJ findings, the case for non-reunification is strengthened. School and medical records from the U.S. can demonstrate the child's integration and best interest.",
    timelineMonths: 16,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "sijs",
    countryOfOrigin: "Ecuador",
    outcome: "pending",
    year: "2025",
    court: "USCIS Nebraska Service Center / Queens County Family Court",
    narrative:
      "Unaccompanied minor from Ecuador who was abandoned by father filed for SIJS after obtaining predicate order from New York family court. I-360 petition is pending adjudication.",
    documentsUsed: [
      "State family court order",
      "Birth certificate",
      "Personal declaration",
      "Affidavit from mother",
      "School enrollment records",
    ],
    keyFactors:
      "New York family court made clear findings of abandonment and determined reunification with the father was not viable.",
    lessonsLearned:
      "Each state has different procedures for obtaining SIJ predicate orders. In New York, family courts handle these matters and practitioners should be familiar with local practice.",
    timelineMonths: 12,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "sijs",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2021",
    court: "USCIS Texas Service Center / Dallas County Juvenile Court",
    narrative:
      "Minor abused by father in India came to live with maternal uncle in Texas. State court issued predicate findings, and USCIS approved the SIJ petition after 20 months.",
    documentsUsed: [
      "State juvenile court order",
      "Birth certificate",
      "Medical records",
      "Affidavit from uncle/guardian",
      "Police report from India",
    ],
    keyFactors:
      "Police report from India documenting a complaint of child abuse by the father corroborated the state court's abuse findings.",
    lessonsLearned:
      "Evidence from the home country, such as police reports or medical records, can strengthen the state court petition and the subsequent USCIS adjudication.",
    timelineMonths: 20,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "sijs",
    countryOfOrigin: "Bangladesh",
    outcome: "pending",
    year: "2024",
    court: "USCIS Nebraska Service Center / Bronx County Family Court",
    narrative:
      "Minor abandoned by both parents in Bangladesh entered the U.S. as an unaccompanied child. State court predicate order was obtained and the I-360 is pending with USCIS.",
    documentsUsed: [
      "State family court order",
      "Birth certificate",
      "Personal declaration",
      "ORR release documents",
      "Affidavit from foster parent",
    ],
    keyFactors:
      "ORR custody and release records documented the minor's status as an unaccompanied child and supported the abandonment finding.",
    lessonsLearned:
      "Records from ORR custody can serve as valuable evidence in SIJS cases involving unaccompanied minors. Coordinate between the immigration attorney and the family law attorney handling the state court petition.",
    timelineMonths: 15,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "sijs",
    countryOfOrigin: "Honduras",
    outcome: "approved",
    year: "2020",
    court: "USCIS Texas Service Center / Miami-Dade County Juvenile Court",
    narrative:
      "Minor who fled gang recruitment and parental neglect in Honduras obtained SIJ status with help from a pro bono legal clinic. Adjustment of status was approved 28 months after initial filing.",
    documentsUsed: [
      "State juvenile court order",
      "Birth certificate",
      "Personal declaration",
      "Country conditions report",
      "Affidavit from guardian",
      "School records",
    ],
    keyFactors:
      "State court specifically found that the child was neglected and that return to Honduras was not in the child's best interest due to dangerous conditions.",
    lessonsLearned:
      "Pro bono legal clinics at law schools and nonprofit organizations provide critical representation for SIJS-eligible minors. Country conditions evidence can support the best-interest analysis in state court.",
    timelineMonths: 28,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "sijs",
    countryOfOrigin: "Guatemala",
    outcome: "approved",
    year: "2024",
    court: "USCIS Nebraska Service Center / Suffolk County Family Court",
    narrative:
      "Minor abandoned by father and neglected by mother in Guatemala was placed with an older sibling in New York. SIJ petition was approved after state court issued required findings.",
    documentsUsed: [
      "State family court order",
      "Birth certificate",
      "Personal declaration",
      "Affidavit from sibling/guardian",
      "School records",
    ],
    keyFactors:
      "State court found both abandonment by the father and neglect by the mother, establishing that reunification with either parent was not viable.",
    lessonsLearned:
      "When findings involve both parents, ensure the state court order addresses each parent separately with specific factual findings.",
    timelineMonths: 17,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "sijs",
    countryOfOrigin: "Nepal",
    outcome: "denied",
    year: "2022",
    court: "USCIS Texas Service Center / Fairfax County Juvenile Court",
    narrative:
      "SIJS petition denied because USCIS found the state court order lacked sufficient factual basis for the required findings. The predicate order was conclusory and did not detail the abuse or neglect.",
    documentsUsed: [
      "State juvenile court order",
      "Birth certificate",
      "Personal declaration",
    ],
    keyFactors:
      "A conclusory state court order without specific factual findings was deemed insufficient by USCIS to support SIJ classification.",
    lessonsLearned:
      "USCIS may look behind the state court order to assess its sufficiency. Ensure the predicate order contains detailed factual findings, not just legal conclusions.",
    timelineMonths: 22,
    lawyerUsed: false,
    formsUsed: ["I-360"],
    denialReasons:
      "State court predicate order lacked specific factual findings to support the determination of abuse, neglect, or abandonment.",
  },
  {
    caseType: "sijs",
    countryOfOrigin: "China",
    outcome: "approved",
    year: "2023",
    court: "USCIS Nebraska Service Center / King County Juvenile Court",
    narrative:
      "Minor abandoned by parents in China and raised by grandparents came to the U.S. to live with an uncle. State juvenile court made required findings and SIJ petition was approved.",
    documentsUsed: [
      "State juvenile court order",
      "Birth certificate",
      "Personal declaration",
      "Affidavit from uncle/guardian",
      "Affidavit from grandparents in China",
    ],
    keyFactors:
      "Affidavit from grandparents in China confirming parental abandonment provided unique corroboration for the state court findings.",
    lessonsLearned:
      "Evidence from family members abroad, including sworn statements translated into English, can strengthen both the state court petition and the USCIS filing.",
    timelineMonths: 19,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "sijs",
    countryOfOrigin: "El Salvador",
    outcome: "pending",
    year: "2025",
    court: "USCIS Texas Service Center / Montgomery County Juvenile Court",
    narrative:
      "Minor who suffered abuse by stepfather and neglect by mother in El Salvador obtained predicate order from Maryland juvenile court. I-360 petition was recently filed and is pending.",
    documentsUsed: [
      "State juvenile court order",
      "Birth certificate",
      "Personal declaration",
      "Medical records from El Salvador",
      "Affidavit from foster parent",
    ],
    keyFactors:
      "Medical records from El Salvador documenting injuries consistent with the reported abuse strengthened the state court petition.",
    lessonsLearned:
      "Gather any available evidence from the home country before filing. Medical records, police reports, and school records from abroad can be translated and submitted as supporting evidence.",
    timelineMonths: 13,
    lawyerUsed: false,
    formsUsed: ["I-360", "I-765"],
  },
];
