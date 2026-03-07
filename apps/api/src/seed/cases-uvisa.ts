import type { CaseRecord } from "@immivault/shared";

export const UVISA_CASES: CaseRecord[] = [
  // ===== U-VISA CASES (20) =====
  {
    caseType: "u-visa",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2022",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was a victim of domestic violence perpetrated by a U.S. citizen spouse over a three-year period. Law enforcement certification was obtained from local police after the applicant cooperated with the criminal investigation.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Police report",
      "Protective order",
      "Medical records",
      "Personal declaration",
    ],
    keyFactors:
      "Strong law enforcement certification and well-documented pattern of abuse supported approval.",
    lessonsLearned:
      "Obtaining the law enforcement certification early in the process is critical. Detailed personal declarations significantly strengthen the case.",
    timelineMonths: 52,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Guatemala",
    outcome: "approved",
    year: "2023",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was sexually assaulted by an employer and cooperated fully with law enforcement during the prosecution. The perpetrator was convicted, and the applicant received a U-visa after a lengthy wait.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Court records",
      "Forensic exam report",
      "Therapist letter",
    ],
    keyFactors:
      "Successful criminal prosecution of the perpetrator and applicant's ongoing cooperation were decisive.",
    lessonsLearned:
      "Cases with criminal convictions tend to have stronger outcomes. Maintaining contact with law enforcement throughout the process is essential.",
    timelineMonths: 60,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Honduras",
    outcome: "pending",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was the victim of a robbery at gunpoint and suffered physical injuries requiring hospitalization. The case remains on the waitlist due to the annual U-visa cap.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Hospital records",
      "Police report",
      "Witness affidavits",
    ],
    keyFactors:
      "Case is substantively strong but delayed due to the 10,000 annual cap on U-visas.",
    lessonsLearned:
      "Applicants should be prepared for multi-year waits given the visa cap. Filing for deferred action status while waiting can provide interim work authorization.",
    timelineMonths: 42,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "El Salvador",
    outcome: "approved",
    year: "2021",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was a victim of felonious assault by a neighbor and sustained permanent scarring. She cooperated with the district attorney's office throughout the trial.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Medical records",
      "Police report",
      "DA cooperation letter",
      "Photographs of injuries",
    ],
    keyFactors:
      "Permanent physical injuries and consistent cooperation with prosecutors strengthened the application.",
    lessonsLearned:
      "Photographic evidence of injuries and medical documentation of lasting harm carry significant weight.",
    timelineMonths: 48,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Haiti",
    outcome: "denied",
    year: "2022",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant claimed to be a victim of stalking but the law enforcement certification was not properly completed. USCIS found insufficient evidence that the applicant had been helpful to law enforcement.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Personal declaration",
      "Partial police report",
    ],
    keyFactors:
      "Incomplete law enforcement certification and lack of evidence of cooperation led to denial.",
    lessonsLearned:
      "Ensure the I-918B is fully and correctly completed by the certifying agency. Without clear evidence of helpfulness to law enforcement, the case will likely fail.",
    timelineMonths: 38,
    lawyerUsed: false,
    formsUsed: ["I-918", "I-918B", "I-765"],
    denialReasons: "Incomplete law enforcement certification. Insufficient evidence of cooperation with law enforcement.",
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Dominican Republic",
    outcome: "approved",
    year: "2020",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was kidnapped and held for ransom by individuals known to the family. After escaping, she worked closely with FBI agents investigating the case.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "FBI cooperation letter",
      "Medical evaluation",
      "Psychological evaluation",
      "News clippings",
    ],
    keyFactors:
      "Federal law enforcement involvement and the severity of the qualifying crime were key to approval.",
    lessonsLearned:
      "Kidnapping cases with federal law enforcement involvement tend to receive strong certifications. Psychological evaluations documenting trauma are highly persuasive.",
    timelineMonths: 44,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Jamaica",
    outcome: "pending",
    year: "2025",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was the victim of domestic violence and obtained a law enforcement certification from the local sheriff's office. The application was recently filed and is awaiting initial review.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Police report",
      "Restraining order",
      "Personal declaration",
    ],
    keyFactors:
      "Recently filed case with complete documentation awaiting processing.",
    lessonsLearned:
      "Filing a complete application from the outset avoids delays from requests for evidence.",
    timelineMonths: 36,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Colombia",
    outcome: "approved",
    year: "2023",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was sexually assaulted by an acquaintance and reported the crime within days of the incident. Her consistent cooperation with the detective assigned to the case was well documented.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Police report",
      "SANE exam report",
      "Therapist records",
      "Detective's supplemental letter",
    ],
    keyFactors:
      "Prompt reporting and sustained cooperation with the investigating detective were central to the approval.",
    lessonsLearned:
      "Timely reporting of the crime to law enforcement strengthens the certification request. Supplemental letters from detectives can provide critical context.",
    timelineMonths: 55,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Ecuador",
    outcome: "denied",
    year: "2021",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant filed a U-visa petition based on a robbery but the certifying agency declined to sign the I-918B. Without the certification, USCIS could not adjudicate the petition favorably.",
    documentsUsed: [
      "I-918",
      "I-765",
      "Police report",
      "Personal declaration",
    ],
    keyFactors:
      "Absence of the required law enforcement certification was fatal to the application.",
    lessonsLearned:
      "The I-918B certification is a mandatory element; without it, the petition cannot be approved. Applicants should seek agencies willing to certify before filing.",
    timelineMonths: 40,
    lawyerUsed: false,
    formsUsed: ["I-918", "I-765"],
    denialReasons: "Missing law enforcement certification (I-918B).",
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was a victim of domestic violence involving strangulation and cooperated with prosecutors in securing a felony conviction. The applicant waited over four years on the waitlist before final approval.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Criminal court records",
      "Medical records",
      "Order of protection",
      "Prosecutor's letter",
    ],
    keyFactors:
      "Felony conviction of the abuser and the applicant's long-term cooperation with the prosecution were decisive.",
    lessonsLearned:
      "Even strong cases face years of waiting due to the visa cap. Applicants should maintain updated contact information with USCIS throughout the wait.",
    timelineMonths: 64,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Philippines",
    outcome: "pending",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was the victim of stalking by a former partner who violated multiple protective orders. Law enforcement certified the petition and the case is currently on the waitlist.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Multiple police reports",
      "Protective orders",
      "Violation records",
      "Personal declaration",
    ],
    keyFactors:
      "Multiple documented incidents and protective order violations demonstrated the severity of the stalking.",
    lessonsLearned:
      "Documenting each incident separately with law enforcement creates a stronger record of the qualifying criminal activity.",
    timelineMonths: 39,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Nigeria",
    outcome: "approved",
    year: "2022",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was a victim of felonious assault during an attempted carjacking and suffered a broken jaw. He cooperated with police and later identified the assailant in a lineup.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Police report",
      "Hospital discharge records",
      "Lineup identification report",
      "Victim impact statement",
    ],
    keyFactors:
      "Active participation in identifying the perpetrator and the severity of physical injuries supported approval.",
    lessonsLearned:
      "Victim participation in the investigative process, such as lineup identifications, demonstrates the helpfulness USCIS requires.",
    timelineMonths: 50,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Ghana",
    outcome: "withdrawn",
    year: "2023",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant filed a U-visa petition based on domestic violence but later decided to withdraw the case due to reconciliation with the abuser. The withdrawal was processed without prejudice.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Police report",
      "Personal declaration",
    ],
    keyFactors:
      "Applicant voluntarily withdrew the petition before adjudication.",
    lessonsLearned:
      "Withdrawal does not prevent future filing if the applicant later decides to proceed. Advocates should ensure safety planning is in place regardless of case status.",
    timelineMonths: 18,
    lawyerUsed: false,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Kenya",
    outcome: "pending",
    year: "2025",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was the victim of a violent robbery at her workplace and sustained head injuries. The law enforcement certification was recently obtained and the petition has been filed.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Police report",
      "Emergency room records",
      "Employer statement",
    ],
    keyFactors:
      "Workplace crime with employer corroboration and clear medical evidence of injury.",
    lessonsLearned:
      "Employer statements can serve as valuable corroborating evidence in workplace crime cases.",
    timelineMonths: 36,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Ethiopia",
    outcome: "approved",
    year: "2021",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was a victim of sexual assault by a coworker and cooperated with the police investigation over several months. The perpetrator pleaded guilty to a lesser charge as part of a plea agreement.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Police report",
      "Plea agreement records",
      "Counseling records",
      "Personal declaration",
    ],
    keyFactors:
      "Applicant's cooperation through the plea process and documented psychological harm supported the petition.",
    lessonsLearned:
      "A plea agreement does not weaken the U-visa case; the applicant's cooperation remains the critical factor. Mental health documentation adds important context.",
    timelineMonths: 58,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Brazil",
    outcome: "denied",
    year: "2020",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant filed a U-visa based on a verbal threat but USCIS determined the conduct did not constitute a qualifying criminal activity. The petition was denied for failure to establish a qualifying crime.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Police report",
      "Personal declaration",
    ],
    keyFactors:
      "The alleged crime did not meet the statutory definition of a qualifying criminal activity under the U-visa statute.",
    lessonsLearned:
      "Not all crimes qualify for U-visa relief; applicants must ensure the criminal activity falls within the enumerated list. Consulting with an attorney before filing can prevent unnecessary denials.",
    timelineMonths: 36,
    lawyerUsed: false,
    formsUsed: ["I-918", "I-918B", "I-765"],
    denialReasons: "Conduct did not constitute a qualifying criminal activity.",
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "China",
    outcome: "approved",
    year: "2023",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was kidnapped and held captive for two days before being rescued by law enforcement. She provided extensive testimony that led to the arrest of three individuals.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Police report",
      "FBI report",
      "Medical evaluation",
      "Psychological evaluation",
      "Witness testimony records",
    ],
    keyFactors:
      "The severity of the crime and applicant's testimony leading to multiple arrests demonstrated exceptional helpfulness.",
    lessonsLearned:
      "Cases involving serious crimes with significant applicant cooperation tend to be prioritized. Comprehensive documentation from multiple agencies strengthens the record.",
    timelineMonths: 46,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Vietnam",
    outcome: "pending",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was a victim of domestic violence including repeated felonious assault by a partner. The petition was filed with a strong law enforcement certification and is awaiting a visa number.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Police reports",
      "Hospital records",
      "Order of protection",
      "Advocate letter",
    ],
    keyFactors:
      "Multiple incidents of documented felonious assault and a comprehensive certification supported the filing.",
    lessonsLearned:
      "Domestic violence cases with multiple police reports and hospitalizations build a compelling record of qualifying criminal activity.",
    timelineMonths: 40,
    lawyerUsed: false,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Thailand",
    outcome: "appealed",
    year: "2022",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant's U-visa was initially denied for insufficient evidence of substantial harm, but the decision was appealed with additional psychological evaluations. The appeal is currently pending with the Administrative Appeals Office.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Police report",
      "Initial psychological evaluation",
      "Supplemental psychological evaluation",
      "Appeal brief",
    ],
    keyFactors:
      "Initial denial was based on insufficient evidence of substantial physical or mental abuse, prompting an appeal with new evidence.",
    lessonsLearned:
      "Denials based on insufficient evidence of harm can often be overcome on appeal with stronger psychological or medical documentation.",
    timelineMonths: 62,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "Cambodia",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was a victim of a violent robbery that left him with a permanent disability. He cooperated with the investigation, and the assailant was apprehended based on his description.",
    documentsUsed: [
      "I-918",
      "I-918B",
      "I-765",
      "Police report",
      "Surgical records",
      "Disability documentation",
      "Victim impact statement",
    ],
    keyFactors:
      "Permanent disability resulting from the crime and the applicant's role in identifying the perpetrator were central to approval.",
    lessonsLearned:
      "Cases involving permanent injury or disability demonstrate substantial harm clearly. Detailed victim impact statements help convey the lasting effects of the crime.",
    timelineMonths: 54,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },

  // ===== T-VISA CASES (10) =====
  {
    caseType: "t-visa",
    countryOfOrigin: "Philippines",
    outcome: "approved",
    year: "2022",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was trafficked for labor exploitation in a domestic servitude situation where her passport was confiscated. She escaped with the help of a neighbor and reported the trafficking to law enforcement.",
    documentsUsed: [
      "I-914",
      "I-914B",
      "I-765",
      "Police report",
      "Personal declaration",
      "Psychological evaluation",
      "Neighbor's affidavit",
    ],
    keyFactors:
      "Clear evidence of force, fraud, and coercion including passport confiscation and isolation supported the trafficking claim.",
    lessonsLearned:
      "Confiscation of identity documents is a strong indicator of trafficking that USCIS takes seriously. Third-party witness statements can corroborate the applicant's account.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["I-914", "I-914B", "I-765"],
  },
  {
    caseType: "t-visa",
    countryOfOrigin: "Guatemala",
    outcome: "approved",
    year: "2023",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was recruited under false promises of restaurant work but was forced into sex trafficking upon arrival in the U.S. She cooperated with an FBI task force investigating the trafficking ring.",
    documentsUsed: [
      "I-914",
      "I-914B",
      "I-765",
      "FBI cooperation letter",
      "Psychological evaluation",
      "Medical records",
      "Personal declaration",
    ],
    keyFactors:
      "Federal law enforcement cooperation and clear evidence of fraud in recruitment were determinative.",
    lessonsLearned:
      "Cases involving organized trafficking rings with federal investigations tend to receive favorable outcomes. Demonstrating fraudulent recruitment is key to establishing the trafficking claim.",
    timelineMonths: 22,
    lawyerUsed: true,
    formsUsed: ["I-914", "I-914B", "I-765"],
  },
  {
    caseType: "t-visa",
    countryOfOrigin: "Mexico",
    outcome: "pending",
    year: "2025",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was subjected to labor trafficking on a farm where workers were held in debt bondage and threatened with deportation. The case was recently filed after the applicant connected with a legal services organization.",
    documentsUsed: [
      "I-914",
      "I-914B",
      "I-765",
      "Personal declaration",
      "Co-worker affidavits",
      "Pay records showing sub-minimum wages",
      "Photographs of living conditions",
    ],
    keyFactors:
      "Debt bondage, threats of deportation, and sub-minimum wages established labor trafficking elements.",
    lessonsLearned:
      "Pay records and documentation of living conditions provide concrete evidence of exploitative labor practices.",
    timelineMonths: 12,
    lawyerUsed: true,
    formsUsed: ["I-914", "I-914B", "I-765"],
  },
  {
    caseType: "t-visa",
    countryOfOrigin: "Thailand",
    outcome: "approved",
    year: "2021",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was trafficked for labor in a massage parlor where she was forced to work excessive hours under threat of harm to her family. She reported the situation to local police who referred the case to Homeland Security Investigations.",
    documentsUsed: [
      "I-914",
      "I-914B",
      "I-765",
      "HSI cooperation letter",
      "Police report",
      "Psychological evaluation",
      "Personal declaration",
    ],
    keyFactors:
      "Threats against family members abroad and referral to federal investigators demonstrated the seriousness of the trafficking.",
    lessonsLearned:
      "Threats to family members in the home country constitute coercion under the trafficking statute. Referrals from local to federal law enforcement can strengthen the case.",
    timelineMonths: 20,
    lawyerUsed: true,
    formsUsed: ["I-914", "I-914B", "I-765"],
  },
  {
    caseType: "t-visa",
    countryOfOrigin: "India",
    outcome: "denied",
    year: "2023",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant claimed labor trafficking in a restaurant but USCIS found the working conditions, while exploitative, did not rise to the level of severe trafficking. The applicant had freedom of movement and was paid, though below minimum wage.",
    documentsUsed: [
      "I-914",
      "I-914B",
      "I-765",
      "Personal declaration",
      "Pay stubs",
      "Partial police report",
    ],
    keyFactors:
      "USCIS determined the labor conditions did not meet the threshold of severe forms of trafficking in persons.",
    lessonsLearned:
      "Not all exploitative labor situations qualify as trafficking; the statute requires force, fraud, or coercion. Thorough documentation of coercive elements is essential to distinguish trafficking from labor violations.",
    timelineMonths: 16,
    lawyerUsed: false,
    formsUsed: ["I-914", "I-914B", "I-765"],
    denialReasons: "Conditions did not meet the threshold of severe forms of trafficking. Insufficient evidence of force, fraud, or coercion.",
  },
  {
    caseType: "t-visa",
    countryOfOrigin: "Honduras",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was a minor who was trafficked for sex by a family acquaintance after being brought to the U.S. under the pretense of educational opportunities. A teacher noticed signs of abuse and contacted child protective services.",
    documentsUsed: [
      "I-914",
      "I-914B",
      "I-765",
      "CPS records",
      "Police report",
      "Forensic interview transcript",
      "Medical evaluation",
      "Psychological evaluation",
    ],
    keyFactors:
      "Minor status eliminated the need to prove force, fraud, or coercion under the TVPA, and CPS involvement provided strong corroboration.",
    lessonsLearned:
      "Minors trafficked for sex do not need to demonstrate force, fraud, or coercion. Institutional reports from schools or CPS carry significant evidentiary weight.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["I-914", "I-914B", "I-765"],
  },
  {
    caseType: "t-visa",
    countryOfOrigin: "Nigeria",
    outcome: "pending",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was brought to the U.S. for domestic work but was forced to work without pay and was physically abused by the employer. She is currently cooperating with an ongoing federal investigation.",
    documentsUsed: [
      "I-914",
      "I-914B",
      "I-765",
      "Police report",
      "Medical records",
      "Personal declaration",
      "Federal investigation acknowledgment letter",
    ],
    keyFactors:
      "Unpaid labor combined with physical abuse and an active federal investigation support the trafficking claim.",
    lessonsLearned:
      "Active federal investigations can facilitate the certification process and strengthen the overall petition.",
    timelineMonths: 15,
    lawyerUsed: true,
    formsUsed: ["I-914", "I-914B", "I-765"],
  },
  {
    caseType: "t-visa",
    countryOfOrigin: "Moldova",
    outcome: "approved",
    year: "2020",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was recruited through a fraudulent modeling agency and was forced into sex trafficking upon arrival in the U.S. She escaped and cooperated with law enforcement, leading to the dismantling of the operation.",
    documentsUsed: [
      "I-914",
      "I-914B",
      "I-765",
      "Law enforcement certification",
      "Personal declaration",
      "Psychological evaluation",
      "Fraudulent contract documents",
    ],
    keyFactors:
      "Fraudulent recruitment documents and the applicant's role in dismantling the trafficking operation were pivotal.",
    lessonsLearned:
      "Preserving fraudulent recruitment materials serves as powerful evidence of the fraud element. Cooperation that leads to operational disruption demonstrates exceptional helpfulness.",
    timelineMonths: 24,
    lawyerUsed: true,
    formsUsed: ["I-914", "I-914B", "I-765"],
  },
  {
    caseType: "t-visa",
    countryOfOrigin: "Cambodia",
    outcome: "remanded",
    year: "2022",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant's T-visa was initially denied but the case was remanded for further review after new evidence of the trafficking operation emerged from a related federal case. Additional testimony from co-victims was submitted.",
    documentsUsed: [
      "I-914",
      "I-914B",
      "I-765",
      "Motion to reopen",
      "New federal case records",
      "Co-victim affidavits",
      "Updated personal declaration",
    ],
    keyFactors:
      "New evidence from a related federal prosecution warranted reopening and further review of the initial denial.",
    lessonsLearned:
      "Developments in related criminal cases can provide grounds for reopening denied petitions. Co-victim testimony can substantially corroborate individual claims.",
    timelineMonths: 28,
    lawyerUsed: true,
    formsUsed: ["I-914", "I-914B", "I-765"],
  },
  {
    caseType: "t-visa",
    countryOfOrigin: "Ukraine",
    outcome: "pending",
    year: "2025",
    court: "USCIS Vermont Service Center",
    narrative:
      "Applicant was trafficked for labor in a construction company where her documents were confiscated and she was threatened with violence if she attempted to leave. She recently escaped and is working with a victim advocacy organization.",
    documentsUsed: [
      "I-914",
      "I-914B",
      "I-765",
      "Personal declaration",
      "Advocacy organization intake records",
      "Photographs of living conditions",
      "Police report",
    ],
    keyFactors:
      "Document confiscation and threats of violence established clear elements of coercion in a labor trafficking context.",
    lessonsLearned:
      "Victim advocacy organizations play a critical role in helping trafficking survivors navigate the legal process. Early engagement with such organizations can expedite the filing.",
    timelineMonths: 12,
    lawyerUsed: false,
    formsUsed: ["I-914", "I-914B", "I-765"],
  },
];
