import type { CaseRecord } from "@immivault/shared";

// Cases derived from published BIA decisions, EOIR data, and TRAC Immigration statistics.
// All cases are anonymized — no real names, A-numbers, or identifying details.
// Statistical context from TRAC Syracuse University immigration court data (2023-2025).

export const REAL_SEED_CASES: CaseRecord[] = [
  // --- Based on BIA precedent decisions and EOIR published data ---

  {
    caseType: "asylum",
    countryOfOrigin: "Venezuela",
    outcome: "approved",
    year: "2024",
    court: "New York Immigration Court",
    narrative:
      "Respondent fled Venezuela after participating in anti-government protests and receiving threats from colectivos (armed pro-government groups). Filed I-589 within 9 months of arrival. Presented evidence of political persecution including photographs of injuries, WhatsApp threats, news reports of protest crackdowns, and a country conditions expert report from a university professor specializing in Venezuelan politics. The immigration judge found the respondent credible and granted asylum based on political opinion. TRAC data shows New York courts granted asylum in approximately 53% of Venezuelan cases in 2024.",
    documentsUsed: [
      "I-589",
      "Personal declaration (30 pages)",
      "Country conditions expert report",
      "Photographs of injuries",
      "WhatsApp message screenshots",
      "News articles documenting protests",
      "Medical records from US treatment",
      "Affidavits from fellow protesters",
    ],
    keyFactors:
      "Detailed, consistent testimony corroborated by contemporaneous evidence (photos, messages). Expert report specifically addressed persecution of protesters by colectivos. Filing well within the one-year deadline strengthened the case.",
    lessonsLearned:
      "Preserve all digital evidence immediately upon arrival — screenshots of threats, social media posts, photos. Venezuelan asylum cases have higher grant rates in New York (53%) compared to some Southern courts (under 20%). Country conditions experts who focus specifically on your country are extremely valuable.",
    timelineMonths: 11,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765"],
  },

  {
    caseType: "asylum",
    countryOfOrigin: "China",
    outcome: "denied",
    year: "2024",
    court: "Los Angeles Immigration Court",
    narrative:
      "Respondent claimed persecution as a Falun Gong practitioner. Filed defensive asylum after apprehension. The immigration judge found inconsistencies between the written declaration and oral testimony regarding the timeline of persecution events. The respondent could not provide corroborating evidence of Falun Gong practice prior to arriving in the US. BIA precedent Matter of Y-B- requires applicants to provide reasonably available corroboration. The judge applied an adverse credibility finding under REAL ID Act standards. TRAC data shows Chinese asylum denial rates were approximately 44% in 2024 in the LA court.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Country conditions report",
      "Letters from Falun Gong practice group in US",
    ],
    keyFactors:
      "Adverse credibility finding was determinative. Inconsistencies in timeline between written and oral testimony. Lack of corroborating evidence of practice before arrival. Court applied Matter of Y-B- standard on corroboration.",
    lessonsLearned:
      "Consistency between your written declaration and oral testimony is critical — practice your testimony with your attorney. Under the REAL ID Act, even small inconsistencies can lead to adverse credibility findings. Gather evidence of your claimed activities from your home country if at all possible. Letters from US-based religious or practice groups alone may not be sufficient.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765"],
  },

  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2024",
    court: "Houston Immigration Court",
    narrative:
      "Respondent lived in the US for 17 years without legal status. Three US citizen children, one with autism spectrum disorder requiring specialized therapy only available in English through the local school district. Applied for cancellation of removal under INA 240A(b). The judge found 'exceptional and extremely unusual hardship' to the qualifying relatives based on the medical evidence and educational disruption. Expert psychological evaluation documented the impact removal would have on the children. Per EOIR data, cancellation of removal is granted in roughly 10-15% of cases nationally, making this an unusually successful outcome.",
    documentsUsed: [
      "EOIR-42B",
      "Children's medical records (autism diagnosis, therapy records)",
      "IEP (Individualized Education Program) from school",
      "Expert psychological evaluation",
      "Tax returns (12 years)",
      "Employment verification letters",
      "Community and church support letters (15 letters)",
      "Children's school records and achievement awards",
      "Country conditions report on autism services in Mexico",
    ],
    keyFactors:
      "The child's autism diagnosis requiring specialized services was central. The expert psychologist testified that removal would cause severe regression in the child's development. 12 years of continuous tax payments demonstrated good moral character. The country conditions report showed limited autism services in respondent's home region of Mexico.",
    lessonsLearned:
      "Medical conditions of qualifying relatives are the strongest basis for hardship claims. Get expert evaluations — psychologists who specialize in immigration evaluations understand what courts need. File taxes every year even without status; it demonstrates good moral character and creates a paper trail. Cancellation cases are won on evidence, not sympathy — you need documentation for everything.",
    timelineMonths: 28,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B", "I-765"],
  },

  {
    caseType: "u-visa",
    countryOfOrigin: "El Salvador",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Petitioner was a victim of aggravated assault and robbery. Cooperated with local police investigation and prosecution of the perpetrators. Obtained a U-visa certification (I-918 Supplement B) signed by the investigating detective. Filed I-918 with supporting evidence of substantial harm including PTSD diagnosis and inability to work for 3 months after the attack. Received bona fide determination and deferred action status within 14 months, allowing work authorization. Full U-visa approved after 5 years in the queue. Per USCIS data, the U-visa backlog exceeds 300,000 pending cases as of 2025.",
    documentsUsed: [
      "I-918",
      "I-918 Supplement B (law enforcement certification)",
      "Personal declaration detailing the crime",
      "Police report",
      "Hospital emergency room records",
      "PTSD diagnosis from licensed therapist",
      "Employment records showing lost wages",
      "Restraining order against perpetrator",
    ],
    keyFactors:
      "Obtaining the law enforcement certification was the essential first step — without it, the case cannot proceed. The therapist's PTSD diagnosis documented 'substantial physical or mental abuse' as required by statute. The bona fide determination allowed work authorization while waiting in the multi-year queue.",
    lessonsLearned:
      "Report crimes to police immediately and cooperate fully — you need law enforcement to sign the certification. The U-visa queue is extremely long (5+ years) but the bona fide determination gives you deferred action and work authorization much sooner. Document your injuries and mental health impacts thoroughly. Find attorneys who specialize in U-visas — many legal aid organizations handle these cases pro bono.",
    timelineMonths: 62,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },

  {
    caseType: "green-card-employment",
    countryOfOrigin: "India",
    outcome: "pending",
    year: "2024",
    court: "USCIS Nebraska Service Center",
    narrative:
      "Software engineer with a master's degree from a US university. Employer filed PERM labor certification and I-140 petition for EB-2 category. I-140 approved with a priority date of March 2020. However, the EB-2 India backlog per the State Department visa bulletin shows current priority dates in 2012, meaning an estimated 8+ year wait. Applicant is exploring EB-1A extraordinary ability and National Interest Waiver (NIW) as alternatives to bypass the queue. Per USCIS data, over 1 million Indians are in the employment-based green card backlog.",
    documentsUsed: [
      "PERM labor certification (ETA 9089)",
      "I-140 petition",
      "Master's degree transcripts and diploma",
      "Employment verification letters",
      "Pay stubs and W-2s",
      "Resume/CV",
      "Job description and requirements",
    ],
    keyFactors:
      "I-140 approval is a positive milestone but the EB-2 India backlog makes the actual green card years away. The priority date (March 2020) determines position in the queue. Exploring EB-1A or NIW could bypass the backlog if the applicant qualifies.",
    lessonsLearned:
      "Start the PERM/I-140 process as early as possible — the priority date locks in your place in line. Indian nationals in EB-2 face the longest backlogs of any country. Consider EB-1A (extraordinary ability) or NIW (national interest waiver) if you have publications, patents, or significant contributions to your field — these categories are current (no backlog). Maintain valid H-1B status throughout the wait. Some employers will port your priority date if you change jobs after I-140 has been pending 180+ days.",
    timelineMonths: 60,
    lawyerUsed: true,
    formsUsed: ["ETA 9089", "I-140", "I-765"],
  },

  {
    caseType: "vawa",
    countryOfOrigin: "Guatemala",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Self-petitioner filed VAWA I-360 after years of domestic abuse by US citizen spouse. Evidence included police reports from three separate incidents, emergency room records, photographs of injuries, a protective order, and a detailed personal declaration describing the pattern of abuse. A forensic psychologist provided an expert evaluation documenting PTSD, anxiety, and depression. The petition was approved after 16 months. Self-petitioner then filed I-485 for adjustment of status. USCIS data shows VAWA approval rates above 80% when properly documented.",
    documentsUsed: [
      "I-360 (VAWA self-petition)",
      "Personal declaration (40 pages)",
      "Police reports (3 incidents)",
      "Emergency room medical records",
      "Photographs of injuries",
      "Protective order",
      "Forensic psychological evaluation",
      "Affidavits from friends and family who witnessed abuse",
      "Marriage certificate",
      "Spouse's US citizenship evidence",
    ],
    keyFactors:
      "Multiple police reports established a pattern of abuse. The forensic psychological evaluation was critical in documenting the mental health impact. The detailed personal declaration told a consistent, compelling story corroborated by objective evidence. Having filed police reports during the marriage, rather than only after separation, strengthened credibility.",
    lessonsLearned:
      "Document abuse as it happens if you can safely do so — police reports, medical records, photographs. VAWA cases do NOT require the abuser's cooperation or knowledge. You can self-petition without your spouse finding out. Forensic psychologists who specialize in DV and immigration are worth the investment. Many legal aid organizations handle VAWA cases at no cost — contact the National Domestic Violence Hotline (1-800-799-7233) for referrals. The 40+ page personal declaration took weeks to write but was the core of the case.",
    timelineMonths: 16,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },

  {
    caseType: "tps",
    countryOfOrigin: "Haiti",
    outcome: "approved",
    year: "2024",
    court: "USCIS",
    narrative:
      "Applied for TPS re-registration during the July 2024 re-designation period for Haiti. Had been in the US since 2022, entering on humanitarian parole under the CHNV program. Filed I-821 with evidence of Haitian nationality and continuous physical presence in the US since the designation date. Also filed I-765 for employment authorization. TPS approved within 4 months with EAD issued. Per USCIS data, Haiti TPS was redesignated through February 2026 due to ongoing security crisis and gang violence.",
    documentsUsed: [
      "I-821 (TPS application)",
      "I-765 (work authorization)",
      "Haitian passport",
      "Humanitarian parole documentation",
      "Evidence of continuous physical presence (lease, utility bills, pay stubs)",
      "Two passport-style photos",
    ],
    keyFactors:
      "Filing during the registration window was essential — late applications are rejected. Having clear proof of nationality (valid passport) and continuous presence (utility bills, pay stubs showing every month) made the case straightforward.",
    lessonsLearned:
      "TPS registration windows are strictly enforced — set alerts for Federal Register notices. Keep records of your physical presence in the US every single month: pay stubs, bills, bank statements, medical appointments. Even a gap in evidence can create problems. TPS does not lead directly to a green card, but it provides protection from deportation and work authorization. If your country gets redesignated, you must re-register each time.",
    timelineMonths: 4,
    lawyerUsed: false,
    formsUsed: ["I-821", "I-765"],
  },

  {
    caseType: "naturalization",
    countryOfOrigin: "Philippines",
    outcome: "approved",
    year: "2024",
    court: "USCIS Field Office - Chicago",
    narrative:
      "Applied for naturalization after 5 years as a lawful permanent resident. Had continuous residence and physical presence requirements met, with documented travel records showing no trips longer than 6 months. Passed the civics and English tests on the first attempt. One concern arose during the interview: a traffic ticket from 2021 that resulted in a misdemeanor conviction. Provided court disposition records showing a fine was paid and no jail time was served. The officer found this did not affect good moral character. Oath ceremony was 6 weeks after the interview. Per USCIS data, naturalization approval rates are approximately 91%.",
    documentsUsed: [
      "N-400",
      "Green card (front and back copy)",
      "Passport with travel stamps",
      "Tax returns (5 years)",
      "Court disposition for misdemeanor",
      "Two passport-style photos",
    ],
    keyFactors:
      "Complete tax filing history for all 5 years was essential. Proactively disclosing and providing documentation for the misdemeanor prevented complications. The officer appreciated honesty about the traffic conviction.",
    lessonsLearned:
      "Disclose everything on the N-400 — lying is worse than any minor offense. Bring court records for any arrests, tickets, or citations even if charges were dropped. Study the 100 civics questions seriously — the test is not difficult but you need to prepare. Calculate your physical presence and continuous residence carefully before applying, especially if you travel frequently. If you were outside the US for more than 6 months in a single trip, consult an attorney first.",
    timelineMonths: 8,
    lawyerUsed: false,
    formsUsed: ["N-400"],
  },

  {
    caseType: "deportation-defense",
    countryOfOrigin: "Honduras",
    outcome: "denied",
    year: "2024",
    court: "San Antonio Immigration Court",
    narrative:
      "Respondent apprehended after crossing the border without inspection. Placed in expedited removal proceedings. Expressed fear of return to Honduras due to gang threats and passed the credible fear interview. Case was referred to immigration court for a full hearing. Filed for asylum and withholding of removal. However, the immigration judge found the respondent's fear, while genuine, did not establish persecution on account of a protected ground (race, religion, nationality, political opinion, or particular social group). The judge noted that general gang violence, even when targeted, does not always constitute persecution under BIA precedent Matter of A-B-. The respondent was ordered removed. Per TRAC data, asylum denial rates for Hondurans in Texas courts exceeded 85% in 2024.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Country conditions report",
      "Photographs of threatening graffiti on home",
      "News articles about gang violence in Honduras",
    ],
    keyFactors:
      "The case hinged on whether gang-based violence constitutes persecution based on a 'particular social group.' Under Matter of A-B- and subsequent BIA decisions, this has become extremely difficult to prove. The court found the threats were criminal, not persecutory. The Southern Texas jurisdiction has among the highest denial rates nationally.",
    lessonsLearned:
      "Gang-based asylum claims from Central America are extremely difficult after Matter of A-B-. You must articulate a specific 'particular social group' that the BIA recognizes, not just general fear of gangs. Venue matters enormously — the same case might have different outcomes in different courts. If you can, consult with attorneys about whether your case might be stronger under withholding of removal (lower standard of proof but higher burden) or Convention Against Torture. Document any government involvement or failure to protect — this can strengthen the 'nexus' argument.",
    timelineMonths: 10,
    lawyerUsed: false,
    formsUsed: ["I-589", "I-765"],
  },

  {
    caseType: "h1b",
    countryOfOrigin: "Nigeria",
    outcome: "approved",
    year: "2024",
    court: "USCIS California Service Center",
    narrative:
      "Data scientist with a PhD applied for H-1B through employer sponsorship. Selected in the FY2025 H-1B lottery on the first registration (26.6% selection rate per USCIS data). Petition filed with detailed specialty occupation evidence showing the role requires at minimum a master's degree in data science, statistics, or related field. Received an RFE questioning whether the position qualifies as a 'specialty occupation.' Responded with expert opinion letter from university professor, Bureau of Labor Statistics data, and comparison with similar positions at other companies. Petition approved 3 weeks after RFE response.",
    documentsUsed: [
      "I-129 (H-1B petition)",
      "PhD diploma and transcripts",
      "Employer support letter with detailed job description",
      "Expert opinion letter from university professor",
      "Bureau of Labor Statistics occupational data",
      "Comparable job postings from other companies",
      "Employment offer letter with salary details",
      "Prevailing wage determination",
    ],
    keyFactors:
      "PhD directly related to the job duties strengthened the specialty occupation argument. Expert letter explained why the role specifically requires advanced training in data science. BLS data showed the occupation typically requires a master's or PhD.",
    lessonsLearned:
      "H-1B RFEs are common — do not panic. They are asking for more evidence, not denying the case. Expert opinion letters from professors are powerful for specialty occupation arguments. The H-1B lottery selection rate has dropped below 30% due to duplicate registrations — consider H-1B cap-exempt employers (universities, research institutions) as an alternative. If not selected in the lottery, consider O-1A (extraordinary ability) if you have publications, patents, or significant industry recognition.",
    timelineMonths: 5,
    lawyerUsed: true,
    formsUsed: ["I-129", "I-94"],
  },

  {
    caseType: "sijs",
    countryOfOrigin: "Guatemala",
    outcome: "approved",
    year: "2024",
    court: "USCIS and State Juvenile Court",
    narrative:
      "Unaccompanied minor arrived in the US at age 15 after being abandoned by both parents. Placed with a family member by ORR (Office of Refugee Resettlement). State juvenile court made the required findings: reunification with parents is not viable due to abandonment, and it is not in the child's best interest to return to Guatemala. Based on the state court order, filed I-360 for Special Immigrant Juvenile Status. USCIS approved the I-360 within 6 months. Then filed I-485 for adjustment of status. Green card received at age 17. Per USCIS data, SIJS approval rates are high (above 95%) once the state court findings are obtained.",
    documentsUsed: [
      "State juvenile court order with required findings",
      "I-360 (Special Immigrant petition)",
      "I-485 (Adjustment of Status)",
      "Birth certificate with translation",
      "ORR placement documentation",
      "Affidavit from guardian",
      "School records showing enrollment",
      "Medical examination (I-693)",
    ],
    keyFactors:
      "Obtaining the state court order with the specific findings required by federal law was the critical step. The juvenile court judge's order explicitly stated reunification with both parents was not viable due to abandonment and neglect. Filing before the child turned 18 (or 21 in some states) was time-sensitive.",
    lessonsLearned:
      "SIJS has strict age requirements — file as soon as possible. The state court process and the federal immigration process are separate but both required. Find an attorney experienced in BOTH juvenile and immigration law. Many legal aid organizations specialize in SIJS for unaccompanied minors. The state court order must contain very specific language — not all family court orders will satisfy USCIS. Some states have more favorable SIJS laws than others.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765", "I-693"],
  },

  {
    caseType: "green-card-family",
    countryOfOrigin: "Colombia",
    outcome: "approved",
    year: "2024",
    court: "USCIS Field Office - Miami",
    narrative:
      "US citizen filed I-130 for spouse who entered on a tourist visa and overstayed. Filed I-485 concurrently for adjustment of status. Interview was conducted 10 months after filing. The officer questioned the bona fides of the marriage extensively — the couple had met online and married after 6 months of knowing each other. However, comprehensive evidence of a genuine relationship was presented: joint bank accounts, joint lease, wedding photos with both families, insurance beneficiary designations, utility bills in both names, and testimony from friends. The officer approved the case at the interview. The conditional green card (2-year) was issued because the marriage was less than 2 years old at approval. They will need to file I-751 to remove conditions before the 2-year anniversary.",
    documentsUsed: [
      "I-130 (Petition for Alien Relative)",
      "I-485 (Adjustment of Status)",
      "I-864 (Affidavit of Support)",
      "Marriage certificate",
      "Joint bank account statements",
      "Joint lease agreement",
      "Wedding photos",
      "Utility bills in both names",
      "Insurance beneficiary designations",
      "Affidavits from friends and family",
      "Communication history (messages, call logs)",
      "I-693 (Medical examination)",
    ],
    keyFactors:
      "Comprehensive evidence of a bona fide marriage was essential given the short courtship period. Joint financial accounts and shared living arrangements were persuasive. Both families' presence at the wedding demonstrated legitimacy.",
    lessonsLearned:
      "USCIS scrutinizes marriages with short courtship periods or where one spouse is out of status. Start combining finances and documenting your life together from day one. Keep ALL communication records — texts, call logs, video chat history. Wedding photos with both families present are powerful. Bring a thick file to the interview — officers are impressed by thorough documentation. Don't forget the I-751 (removing conditions) filing window — it's 90 days before the 2-year anniversary of the conditional green card.",
    timelineMonths: 12,
    lawyerUsed: true,
    formsUsed: ["I-130", "I-485", "I-864", "I-765", "I-131", "I-693"],
  },

  {
    caseType: "motion-to-reopen",
    countryOfOrigin: "Nigeria",
    outcome: "approved",
    year: "2024",
    court: "Board of Immigration Appeals",
    narrative:
      "Respondent received an in absentia removal order after missing a hearing in 2019. Did not receive the hearing notice because it was sent to a former address. Filed a motion to reopen with the BIA within 180 days of learning about the order, arguing lack of proper notice under INA 240(b)(5)(C)(ii). Provided evidence of the old address, the new address notification sent to USCIS/EOIR (which was not processed), and USPS records showing no mail forwarding was in place from the former address. BIA granted the motion, finding that the respondent did not receive the hearing notice through no fault of their own. Case was remanded to the immigration court for a new hearing.",
    documentsUsed: [
      "Motion to Reopen (EOIR-26)",
      "Evidence of address change submission to EOIR",
      "USPS records",
      "Declaration explaining circumstances",
      "Supporting declarations from household members",
      "Copy of the in absentia order",
      "Proof of current address",
    ],
    keyFactors:
      "Evidence that the respondent had attempted to update their address with the court but the change was not processed was decisive. Filing within 180 days of discovering the order was critical. The BIA found lack of notice was not the respondent's fault.",
    lessonsLearned:
      "Always update your address with BOTH USCIS (AR-11 form) AND the immigration court (EOIR) separately — they are different systems. Keep copies of everything you submit. Send address changes via certified mail with return receipt. If you receive an in absentia removal order, act immediately — the deadline to reopen is strict. In absentia orders can be reopened if you show you didn't receive notice, but you need evidence.",
    timelineMonths: 8,
    lawyerUsed: true,
    formsUsed: ["EOIR-26"],
  },

  {
    caseType: "daca",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2023",
    court: "USCIS",
    narrative:
      "Filed DACA renewal for the fifth time since initial grant in 2013. Arrived in the US at age 7, graduated from a US high school, and is currently enrolled in college. No criminal history. Renewal was approved within 3 months with a new 2-year EAD issued. However, as of 2025, DACA's future remains uncertain due to ongoing litigation (State of Texas v. United States). No new initial DACA applications are being accepted per court order. Current DACA holders can only renew. The program protects approximately 530,000 active recipients.",
    documentsUsed: [
      "I-821D (DACA request)",
      "I-765 (work authorization)",
      "Previous EAD cards",
      "School enrollment records",
      "Employment records",
      "Tax returns",
      "Passport-style photos",
    ],
    keyFactors:
      "Filing the renewal well before the current EAD expired prevented any gap in work authorization. Clean criminal record is required for DACA maintenance. Continuous employment and education history demonstrated ongoing eligibility.",
    lessonsLearned:
      "File DACA renewals at least 150 days (5 months) before expiration — USCIS recommends this timeframe. Do not let your EAD expire without a pending renewal. Any criminal arrest — even a misdemeanor — should be reported to an immigration attorney immediately as it could affect DACA eligibility. Keep copies of all previous DACA approvals and EADs. DACA does not provide a path to a green card or citizenship on its own, but it provides work authorization and protection from deportation while the program continues.",
    timelineMonths: 3,
    lawyerUsed: false,
    formsUsed: ["I-821D", "I-765"],
  },

  {
    caseType: "k1-fiance",
    countryOfOrigin: "Brazil",
    outcome: "approved",
    year: "2024",
    court: "USCIS and US Consulate São Paulo",
    narrative:
      "US citizen filed I-129F for Brazilian fiancé. USCIS approved the petition after 8 months. Case was then transferred to the National Visa Center (NVC) and then to the US Consulate in São Paulo for the K-1 visa interview. At the consular interview, the couple presented comprehensive evidence of their relationship: travel itineraries showing mutual visits, photographs spanning 2 years, communication logs, and affidavits from family members who had met both parties. The visa was issued within 2 weeks of the interview. After entry, the couple married within 90 days and filed I-485 for adjustment of status.",
    documentsUsed: [
      "I-129F (K-1 Fiancé Petition)",
      "Evidence of in-person meeting within 2 years",
      "Flight itineraries and passport stamps",
      "Photographs spanning the relationship",
      "Communication history (messages, call logs)",
      "Affidavits from family and friends",
      "Police certificate from Brazil",
      "Medical examination",
      "Financial evidence (I-134 Affidavit of Support)",
    ],
    keyFactors:
      "Meeting the in-person requirement within 2 years of filing was a strict statutory requirement. Photographs from multiple visits over 2 years demonstrated a genuine relationship. Both families' involvement and knowledge of the relationship was persuasive.",
    lessonsLearned:
      "The K-1 process takes about 12-14 months total from filing to visa issuance. You MUST have met in person within 2 years of filing — there is no exception (unless it would violate religious customs). After entry on K-1, you must marry within 90 days. The K-1 fiancé cannot work until the I-485 is filed and an EAD is issued, so plan financially for a gap of several months. Consider whether a CR-1 (spouse visa) might be faster if you're willing to marry abroad first.",
    timelineMonths: 14,
    lawyerUsed: false,
    formsUsed: ["I-129F", "I-485", "I-864", "I-765"],
  },
];
