import type { CaseRecord } from "@immivault/shared";

export const DEFENSE_CASES: CaseRecord[] = [
  // ============================================================
  // DEPORTATION DEFENSE (20 cases)
  // ============================================================
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Guatemala",
    outcome: "approved",
    year: "2023",
    court: "Chicago Immigration Court",
    narrative:
      "Respondent applied for asylum defensively after being placed in removal proceedings. Judge granted relief based on credible testimony and extensive country conditions evidence documenting gang violence.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Country conditions reports",
      "Expert witness affidavit",
      "Medical psychological evaluation",
    ],
    keyFactors:
      "Corroborative psychological evaluation and expert testimony on Guatemala gang targeting were decisive.",
    lessonsLearned:
      "Invest in a forensic psychological evaluation early. Judges find clinical documentation of trauma highly persuasive in asylum claims.",
    timelineMonths: 22,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765", "EOIR-28"],
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Honduras",
    outcome: "approved",
    year: "2024",
    court: "Los Angeles Immigration Court",
    narrative:
      "Family unit sought withholding of removal after failed initial asylum claim due to one-year bar. Judge granted withholding based on particular social group membership as a former police informant.",
    documentsUsed: [
      "I-589",
      "Police cooperation records",
      "Threat documentation",
      "Country conditions report",
      "Witness affidavits",
    ],
    keyFactors:
      "Evidence of cooperation with Honduran police and subsequent death threats established a nexus to a cognizable particular social group.",
    lessonsLearned:
      "When the one-year asylum bar applies, pursue withholding of removal as an alternative. Document the particular social group clearly from the start.",
    timelineMonths: 30,
    lawyerUsed: true,
    formsUsed: ["I-589", "EOIR-28", "EOIR-26"],
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "El Salvador",
    outcome: "denied",
    year: "2022",
    court: "Houston Immigration Court",
    narrative:
      "Respondent sought CAT protection claiming fear of MS-13 retaliation. Judge found testimony inconsistent with country conditions evidence and denied all relief.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Country conditions report",
    ],
    keyFactors:
      "Adverse credibility finding based on inconsistencies between testimony and prior statements to border agents.",
    lessonsLearned:
      "Ensure your client's testimony is fully consistent with all prior statements, including credible fear interview notes. Prepare thoroughly before the merits hearing.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["I-589", "EOIR-28"],
    denialReasons:
      "Adverse credibility determination; failure to establish nexus to protected ground.",
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2024",
    court: "San Antonio Immigration Court",
    narrative:
      "Journalist fleeing cartel threats was granted asylum in removal proceedings. Extensive press coverage and documented assassination attempts against colleagues supported the claim.",
    documentsUsed: [
      "I-589",
      "Published articles by respondent",
      "CPJ threat reports",
      "News coverage of attacks on journalists",
      "Personal declaration",
      "Affidavits from colleagues",
    ],
    keyFactors:
      "Well-documented pattern of cartel violence against journalists in respondent's home state established a clear nexus to political opinion.",
    lessonsLearned:
      "Media professionals should preserve all published work and threat documentation. Press freedom organization reports serve as strong corroborative evidence.",
    timelineMonths: 16,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765", "EOIR-28"],
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Somalia",
    outcome: "approved",
    year: "2023",
    court: "Arlington Immigration Court",
    narrative:
      "Respondent from a minority clan obtained CAT protection after demonstrating likelihood of torture by al-Shabaab upon return. DHS did not appeal the grant.",
    documentsUsed: [
      "I-589",
      "Country conditions expert report",
      "UNHCR advisory on Somalia",
      "Medical records documenting prior torture",
      "Personal declaration",
    ],
    keyFactors:
      "Medical evidence of prior torture combined with expert testimony on al-Shabaab targeting of minority clans met the CAT standard.",
    lessonsLearned:
      "CAT claims require showing it is more likely than not the applicant will be tortured. Prior torture evidence significantly strengthens this burden.",
    timelineMonths: 26,
    lawyerUsed: true,
    formsUsed: ["I-589", "EOIR-28"],
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "China",
    outcome: "denied",
    year: "2021",
    court: "New York Immigration Court",
    narrative:
      "Respondent claimed persecution based on Falun Gong practice but could not demonstrate genuine involvement. Judge found lack of credible evidence of personal practice.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Falun Gong practice certificate",
    ],
    keyFactors:
      "Respondent failed to demonstrate genuine knowledge of Falun Gong practices during cross-examination.",
    lessonsLearned:
      "Religious persecution claims require demonstrating authentic, personal involvement. Prepare clients to discuss their beliefs and practices in detail under cross-examination.",
    timelineMonths: 24,
    lawyerUsed: true,
    formsUsed: ["I-589", "EOIR-28"],
    denialReasons:
      "Adverse credibility finding; failure to demonstrate genuine religious practice.",
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Eritrea",
    outcome: "approved",
    year: "2022",
    court: "Baltimore Immigration Court",
    narrative:
      "Young man who fled indefinite military conscription was granted asylum based on political opinion. Country conditions evidence showed Eritrea's national service amounts to forced labor.",
    documentsUsed: [
      "I-589",
      "UN Commission of Inquiry report on Eritrea",
      "Personal declaration",
      "Expert affidavit on Eritrean military service",
      "Medical records",
    ],
    keyFactors:
      "UN reports documenting Eritrea's indefinite conscription as a human rights violation supported the political opinion nexus.",
    lessonsLearned:
      "Eritrean military service cases benefit from strong UN documentation. Frame the claim around imputed political opinion for draft evaders.",
    timelineMonths: 20,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765", "EOIR-28"],
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Albania",
    outcome: "appealed",
    year: "2023",
    court: "Boston Immigration Court",
    narrative:
      "Respondent's asylum claim based on blood feud was denied at the trial level. Case appealed to BIA arguing the judge applied incorrect legal standard for particular social group.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Albanian blood feud expert report",
      "Country conditions evidence",
      "EOIR-26 appeal brief",
    ],
    keyFactors:
      "Immigration judge allegedly applied an incorrect legal standard when analyzing whether blood feud targets constitute a particular social group.",
    lessonsLearned:
      "Preserve all legal arguments on the record at trial even if the judge seems unreceptive. A clean record is essential for a successful BIA appeal.",
    timelineMonths: 34,
    lawyerUsed: true,
    formsUsed: ["I-589", "EOIR-26", "EOIR-28"],
    appealDetails:
      "BIA appeal filed challenging legal standard applied to particular social group analysis. Briefing schedule set.",
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Nigeria",
    outcome: "denied",
    year: "2020",
    court: "Atlanta Immigration Court",
    narrative:
      "Respondent sought asylum based on persecution as a member of the LGBTQ community. Claim denied due to lack of corroborating evidence beyond personal testimony.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Country conditions report",
    ],
    keyFactors:
      "Judge found insufficient corroboration of LGBTQ identity despite credible testimony about conditions in Nigeria.",
    lessonsLearned:
      "LGBTQ asylum claims should include corroborating declarations from partners, friends, or community organizations. Do not rely solely on the applicant's own testimony.",
    timelineMonths: 28,
    lawyerUsed: false,
    formsUsed: ["I-589"],
    denialReasons:
      "Insufficient corroboration of membership in claimed particular social group.",
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Haiti",
    outcome: "approved",
    year: "2024",
    court: "Miami Immigration Court",
    narrative:
      "Haitian political activist granted withholding of removal based on documented threats from gang-affiliated political operatives. DHS conceded the case after reviewing updated country conditions.",
    documentsUsed: [
      "I-589",
      "Political party membership records",
      "Threat letters",
      "News articles about political violence in Haiti",
      "Personal declaration",
      "State Department human rights report",
    ],
    keyFactors:
      "DHS concession following submission of overwhelming country conditions evidence showing collapse of rule of law in Haiti.",
    lessonsLearned:
      "Monitor rapidly changing country conditions and submit updated evidence even after the initial filing. DHS trial attorneys sometimes concede strong cases.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765", "EOIR-28"],
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "India",
    outcome: "denied",
    year: "2022",
    court: "San Francisco Immigration Court",
    narrative:
      "Respondent claimed persecution as a Sikh political activist but filed asylum application beyond the one-year deadline. Judge denied asylum and found withholding standard not met.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Country conditions report",
      "Political party documents",
    ],
    keyFactors:
      "One-year filing deadline bar applied to asylum claim and respondent did not meet the higher withholding of removal standard.",
    lessonsLearned:
      "The one-year filing deadline is strictly enforced. If the bar applies, prepare a strong withholding or CAT case from the outset rather than relying on narrow exceptions.",
    timelineMonths: 32,
    lawyerUsed: false,
    formsUsed: ["I-589"],
    denialReasons:
      "One-year bar for asylum; failure to meet clear probability standard for withholding.",
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Colombia",
    outcome: "approved",
    year: "2023",
    court: "Newark Immigration Court",
    narrative:
      "Business owner targeted by FARC dissidents for extortion obtained prosecutorial discretion resulting in administrative closure. ICE agreed the case was low priority.",
    documentsUsed: [
      "Prosecutorial discretion request letter",
      "Evidence of community ties",
      "Tax returns",
      "Children's school records",
      "Police reports from Colombia",
    ],
    keyFactors:
      "Strong equities including US citizen children, long residence, tax compliance, and no criminal record supported prosecutorial discretion.",
    lessonsLearned:
      "Prosecutorial discretion requests should comprehensively document positive equities. Present the strongest humanitarian and community-ties arguments upfront.",
    timelineMonths: 8,
    lawyerUsed: true,
    formsUsed: ["EOIR-28"],
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Cuba",
    outcome: "approved",
    year: "2021",
    court: "Miami Immigration Court",
    narrative:
      "Former political prisoner granted asylum after presenting prison records and medical evidence of mistreatment. Case was straightforward given well-documented political persecution.",
    documentsUsed: [
      "I-589",
      "Prison records",
      "Medical records",
      "Amnesty International report",
      "Personal declaration",
      "Family affidavits",
    ],
    keyFactors:
      "Documentary evidence of imprisonment for political dissent provided direct proof of past persecution.",
    lessonsLearned:
      "Cases with direct evidence of past persecution by the government are among the strongest. Gather official records whenever safely possible before fleeing.",
    timelineMonths: 12,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765", "EOIR-28"],
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "DRC",
    outcome: "appealed",
    year: "2024",
    court: "Denver Immigration Court",
    narrative:
      "Congolese asylum seeker denied relief despite evidence of ethnic persecution in eastern DRC. Attorney filed BIA appeal arguing judge failed to consider cumulative harm.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Country conditions reports",
      "UNHCR position on DRC returns",
      "Medical records",
      "EOIR-26 appeal brief",
    ],
    keyFactors:
      "Immigration judge analyzed each incident of harm in isolation rather than considering the cumulative effect as required by precedent.",
    lessonsLearned:
      "Always argue cumulative harm on the record. If the judge analyzes incidents separately, object and cite Matter of O-Z- & I-Z- to preserve the issue for appeal.",
    timelineMonths: 28,
    lawyerUsed: true,
    formsUsed: ["I-589", "EOIR-26", "EOIR-28"],
    appealDetails:
      "BIA appeal pending. Brief argues IJ erred by failing to assess cumulative harm and by ignoring updated country conditions evidence.",
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Ecuador",
    outcome: "pending",
    year: "2025",
    court: "New York Immigration Court",
    narrative:
      "Indigenous rights activist placed in removal proceedings after visa overstay. Asylum application filed defensively based on persecution by mining companies with government backing.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Indigenous community leader affidavits",
      "Environmental activism records",
      "Country conditions reports",
    ],
    keyFactors:
      "Nexus between environmental activism and political opinion is central to the pending claim.",
    lessonsLearned:
      "Environmental and land rights activism claims require careful framing under political opinion or particular social group grounds.",
    timelineMonths: 6,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765", "EOIR-28"],
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Russia",
    outcome: "approved",
    year: "2023",
    court: "San Francisco Immigration Court",
    narrative:
      "Anti-war journalist granted asylum after demonstrating persecution for opposing the invasion of Ukraine. Judge found political opinion claim well-supported by documentary evidence.",
    documentsUsed: [
      "I-589",
      "Published anti-war articles",
      "Arrest records from protests",
      "Colleague affidavits",
      "RSF press freedom reports",
      "Personal declaration",
    ],
    keyFactors:
      "Documented arrests at anti-war protests and published articles critical of the government established clear political opinion persecution.",
    lessonsLearned:
      "Preserve digital evidence of published work and social media posts before fleeing. Screenshots and archived web pages are valuable corroborating evidence.",
    timelineMonths: 10,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765", "EOIR-28"],
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Jamaica",
    outcome: "denied",
    year: "2021",
    court: "New York Immigration Court",
    narrative:
      "Respondent sought CAT protection based on fear of gang violence after deportation. Judge found generalized violence insufficient to meet the CAT standard.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Country conditions report",
    ],
    keyFactors:
      "Claim was based on generalized crime rather than individualized risk of torture by or with government acquiescence.",
    lessonsLearned:
      "CAT claims must show individualized risk of torture with government involvement or acquiescence. Generalized violence claims rarely succeed without specific targeting evidence.",
    timelineMonths: 20,
    lawyerUsed: false,
    formsUsed: ["I-589"],
    denialReasons:
      "Failure to demonstrate individualized risk of torture with government acquiescence; generalized violence claim insufficient.",
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Vietnam",
    outcome: "approved",
    year: "2022",
    court: "Seattle Immigration Court",
    narrative:
      "Religious minority granted withholding of removal based on documented government crackdown on unregistered house churches. Respondent had been detained twice for religious activities.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "USCIRF report on Vietnam",
      "Church community affidavits",
      "Medical records from detention",
    ],
    keyFactors:
      "Two prior detentions for religious activity combined with USCIRF documentation of crackdowns on unregistered churches met the clear probability standard.",
    lessonsLearned:
      "USCIRF reports are highly credible for religious persecution claims. Document all prior encounters with authorities and gather corroborating statements from community members.",
    timelineMonths: 24,
    lawyerUsed: true,
    formsUsed: ["I-589", "EOIR-28"],
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Peru",
    outcome: "withdrawn",
    year: "2024",
    court: "Los Angeles Immigration Court",
    narrative:
      "DHS moved to dismiss removal proceedings after discovering a defective NTA that failed to specify the time and date of the hearing. Case terminated without prejudice.",
    documentsUsed: [
      "Motion to terminate",
      "Defective NTA",
      "Legal brief citing Pereira v. Sessions",
    ],
    keyFactors:
      "NTA lacked date and time of hearing, providing grounds for termination under Pereira and related circuit precedent.",
    lessonsLearned:
      "Always review the NTA for deficiencies. Defective notices to appear remain a viable basis for motions to terminate in some jurisdictions.",
    timelineMonths: 4,
    lawyerUsed: true,
    formsUsed: ["EOIR-28"],
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Philippines",
    outcome: "pending",
    year: "2025",
    court: "Honolulu Immigration Court",
    narrative:
      "Human rights worker placed in proceedings after overstay seeks asylum based on threats from extrajudicial killing squads. Individual hearing not yet scheduled.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Human Rights Watch Philippines reports",
      "Threat documentation",
    ],
    keyFactors:
      "Pending case hinges on establishing nexus between human rights work and political opinion in the context of extrajudicial killings.",
    lessonsLearned:
      "Cases involving anti-drug-war activism in the Philippines should heavily cite international human rights organizations' documentation of extrajudicial killings.",
    timelineMonths: 3,
    lawyerUsed: false,
    formsUsed: ["I-589"],
  },

  // ============================================================
  // VOLUNTARY DEPARTURE (10 cases)
  // ============================================================
  {
    caseType: "voluntary-departure",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2023",
    court: "El Paso Immigration Court",
    narrative:
      "Respondent with no criminal record granted pre-hearing voluntary departure after demonstrating good moral character and financial ability to depart. Left within the 120-day window.",
    documentsUsed: [
      "Passport",
      "Proof of financial means",
      "Good moral character evidence",
      "I-210 bond documentation",
    ],
    keyFactors:
      "Clean criminal record, valid passport, and demonstrated financial ability to purchase departure ticket were sufficient for the grant.",
    lessonsLearned:
      "Pre-hearing voluntary departure is simpler to obtain but must be requested early. Have a valid passport and proof of funds ready at the first hearing.",
    timelineMonths: 3,
    lawyerUsed: true,
    formsUsed: ["I-229a", "EOIR-28"],
  },
  {
    caseType: "voluntary-departure",
    countryOfOrigin: "Guatemala",
    outcome: "approved",
    year: "2022",
    court: "Omaha Immigration Court",
    narrative:
      "After asylum claim was denied, respondent requested post-hearing voluntary departure as an alternative to a removal order. Judge granted 60 days to depart.",
    documentsUsed: [
      "Passport",
      "Proof of financial means",
      "Good moral character evidence",
      "Tax returns",
      "Employment records",
    ],
    keyFactors:
      "One year of physical presence, good moral character, and financial means met the post-hearing voluntary departure requirements.",
    lessonsLearned:
      "Always request voluntary departure as a fallback when pursuing defensive asylum. It avoids the severe consequences of a formal removal order.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["I-229a", "I-589", "EOIR-28"],
  },
  {
    caseType: "voluntary-departure",
    countryOfOrigin: "Honduras",
    outcome: "denied",
    year: "2021",
    court: "Dallas Immigration Court",
    narrative:
      "Respondent requested voluntary departure but had a prior DUI conviction. Judge found the conviction disqualified respondent from establishing good moral character.",
    documentsUsed: [
      "Passport",
      "Criminal records",
      "Character reference letters",
    ],
    keyFactors:
      "DUI conviction within the statutory period precluded a finding of good moral character required for voluntary departure.",
    lessonsLearned:
      "Criminal history is carefully scrutinized for voluntary departure. Even a single DUI can defeat the good moral character requirement depending on the jurisdiction.",
    timelineMonths: 12,
    lawyerUsed: true,
    formsUsed: ["I-229a", "EOIR-28"],
    denialReasons:
      "Failure to establish good moral character due to DUI conviction within the statutory period.",
  },
  {
    caseType: "voluntary-departure",
    countryOfOrigin: "Ecuador",
    outcome: "approved",
    year: "2024",
    court: "New York Immigration Court",
    narrative:
      "Long-term resident with US citizen children granted voluntary departure to preserve future immigration options. Departed within the required timeframe and paid the voluntary departure bond.",
    documentsUsed: [
      "Passport",
      "Children's birth certificates",
      "Proof of financial means",
      "Employment records",
      "Tax returns",
      "Voluntary departure bond receipt",
    ],
    keyFactors:
      "Strong family ties and clean record made the case straightforward; voluntary departure bond was posted timely.",
    lessonsLearned:
      "Voluntary departure preserves the ability to apply for future immigration benefits without the bars triggered by removal orders. Post the bond immediately.",
    timelineMonths: 6,
    lawyerUsed: true,
    formsUsed: ["I-229a", "EOIR-28"],
  },
  {
    caseType: "voluntary-departure",
    countryOfOrigin: "Colombia",
    outcome: "denied",
    year: "2020",
    court: "Miami Immigration Court",
    narrative:
      "Respondent failed to demonstrate financial ability to depart the United States. Judge denied voluntary departure and entered a removal order instead.",
    documentsUsed: [
      "Passport",
      "Personal declaration",
    ],
    keyFactors:
      "Inability to show financial means to purchase a plane ticket or post a voluntary departure bond resulted in denial.",
    lessonsLearned:
      "Financial ability to depart is a strict requirement. Explore community organizations or family support to demonstrate funds if personal resources are insufficient.",
    timelineMonths: 10,
    lawyerUsed: false,
    formsUsed: ["I-229a"],
    denialReasons:
      "Failure to demonstrate financial ability to depart the United States.",
  },
  {
    caseType: "voluntary-departure",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2023",
    court: "San Francisco Immigration Court",
    narrative:
      "H-1B worker whose status lapsed requested pre-hearing voluntary departure. Granted quickly due to clean record, valid passport, and employer-purchased return ticket.",
    documentsUsed: [
      "Passport",
      "Former H-1B approval notices",
      "Return flight itinerary",
      "Bank statements",
    ],
    keyFactors:
      "Valid travel documents, no immigration violations beyond the overstay, and immediate ability to depart supported the grant.",
    lessonsLearned:
      "Visa overstay cases with no other violations are strong candidates for pre-hearing voluntary departure. Act quickly before additional unlawful presence accrues.",
    timelineMonths: 2,
    lawyerUsed: true,
    formsUsed: ["I-229a", "EOIR-28"],
  },
  {
    caseType: "voluntary-departure",
    countryOfOrigin: "Mexico",
    outcome: "appealed",
    year: "2022",
    court: "Phoenix Immigration Court",
    narrative:
      "Judge denied post-hearing voluntary departure citing an old misdemeanor. Attorney appealed to BIA arguing the conviction did not fall within the good moral character bars.",
    documentsUsed: [
      "Criminal disposition records",
      "Good moral character evidence",
      "Legal brief on moral character bars",
      "EOIR-26 appeal brief",
    ],
    keyFactors:
      "Dispute over whether a petty theft misdemeanor from eight years prior fell within the statutory bars to good moral character.",
    lessonsLearned:
      "Analyze criminal history against the specific statutory bars in INA 101(f). Not all misdemeanors automatically defeat good moral character.",
    timelineMonths: 24,
    lawyerUsed: true,
    formsUsed: ["I-229a", "EOIR-26", "EOIR-28"],
    appealDetails:
      "BIA appeal argues IJ incorrectly classified petty theft as a crime involving moral turpitude for good moral character purposes.",
  },
  {
    caseType: "voluntary-departure",
    countryOfOrigin: "Peru",
    outcome: "approved",
    year: "2024",
    court: "Hartford Immigration Court",
    narrative:
      "Respondent granted pre-hearing voluntary departure at the master calendar hearing. Departed voluntarily within 30 days and confirmed departure with the court.",
    documentsUsed: [
      "Passport",
      "Bank statements",
      "Flight itinerary",
    ],
    keyFactors:
      "Straightforward case with no criminal history, valid travel documents, and cooperation with the court throughout proceedings.",
    lessonsLearned:
      "Confirm departure with the court in writing and retain proof of exit. Failure to depart within the granted period triggers penalties equivalent to a removal order.",
    timelineMonths: 1,
    lawyerUsed: false,
    formsUsed: ["I-229a"],
  },
  {
    caseType: "voluntary-departure",
    countryOfOrigin: "China",
    outcome: "denied",
    year: "2021",
    court: "New York Immigration Court",
    narrative:
      "Respondent requested voluntary departure after asylum denial but had failed to appear at a prior hearing. Judge found the absence demonstrated lack of good moral character.",
    documentsUsed: [
      "Passport",
      "Proof of financial means",
      "Explanation for prior absence",
    ],
    keyFactors:
      "Prior failure to appear at a scheduled hearing was treated as a negative factor in the good moral character determination.",
    lessonsLearned:
      "Never miss a hearing. A single failure to appear can undermine voluntary departure eligibility and trigger an in absentia removal order.",
    timelineMonths: 26,
    lawyerUsed: false,
    formsUsed: ["I-229a", "I-589"],
    denialReasons:
      "Failure to establish good moral character due to prior failure to appear at a scheduled hearing.",
  },
  {
    caseType: "voluntary-departure",
    countryOfOrigin: "El Salvador",
    outcome: "approved",
    year: "2023",
    court: "Memphis Immigration Court",
    narrative:
      "Family with three US citizen children granted post-hearing voluntary departure after cancellation of removal was denied. Departed within 60 days to avoid removal bars.",
    documentsUsed: [
      "Passports",
      "Children's birth certificates",
      "Tax returns",
      "Employment verification",
      "Community support letters",
      "Voluntary departure bond receipt",
    ],
    keyFactors:
      "Despite failing to meet the exceptional and extremely unusual hardship standard for cancellation, the family's strong equities supported voluntary departure.",
    lessonsLearned:
      "When cancellation of removal fails, voluntary departure is a critical backup. It avoids the 10-year bar to re-entry that comes with a formal removal order.",
    timelineMonths: 20,
    lawyerUsed: true,
    formsUsed: ["I-229a", "EOIR-42B", "EOIR-28"],
  },

  // ============================================================
  // MOTION TO REOPEN (10 cases)
  // ============================================================
  {
    caseType: "motion-to-reopen",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2024",
    court: "Board of Immigration Appeals",
    narrative:
      "BIA granted motion to reopen based on ineffective assistance of prior counsel under the Lozada framework. Prior attorney had failed to file an asylum application despite being retained to do so.",
    documentsUsed: [
      "EOIR-26",
      "Lozada affidavit",
      "Bar complaint against prior attorney",
      "Retainer agreement with prior counsel",
      "Proof of prejudice",
    ],
    keyFactors:
      "All three Lozada requirements were met: affidavit detailing failures, notice to prior counsel, and bar complaint filed.",
    lessonsLearned:
      "Lozada motions require strict compliance with all three procedural requirements. File the bar complaint before submitting the motion even if the bar investigation is pending.",
    timelineMonths: 8,
    lawyerUsed: true,
    formsUsed: ["EOIR-26"],
  },
  {
    caseType: "motion-to-reopen",
    countryOfOrigin: "Guatemala",
    outcome: "denied",
    year: "2022",
    court: "Board of Immigration Appeals",
    narrative:
      "Motion to reopen based on changed country conditions was filed more than 90 days after the final order. BIA found the evidence did not establish materially changed conditions.",
    documentsUsed: [
      "EOIR-26",
      "Updated country conditions reports",
      "Personal declaration",
    ],
    keyFactors:
      "BIA determined that the submitted country conditions evidence showed continuation of existing conditions rather than material change.",
    lessonsLearned:
      "Changed country conditions motions must show a material change, not just ongoing problems. Focus on specific, new developments that post-date the original decision.",
    timelineMonths: 14,
    lawyerUsed: false,
    formsUsed: ["EOIR-26"],
    denialReasons:
      "Evidence did not establish materially changed country conditions since the prior order; conditions were ongoing rather than new.",
  },
  {
    caseType: "motion-to-reopen",
    countryOfOrigin: "El Salvador",
    outcome: "approved",
    year: "2023",
    court: "San Antonio Immigration Court",
    narrative:
      "Motion to reopen granted after respondent proved lack of proper notice of the original hearing. Mail had been sent to an incorrect address and respondent never received the hearing notice.",
    documentsUsed: [
      "Motion to reopen",
      "Evidence of incorrect address on file",
      "Postal records",
      "Personal declaration",
      "Proof of current address",
    ],
    keyFactors:
      "Clear evidence that the NTA and hearing notices were mailed to an address where respondent never resided established lack of proper notice.",
    lessonsLearned:
      "Always file a change of address form (EOIR-33) immediately when moving. If an in absentia order was entered due to a wrong address, gather evidence quickly to support a motion to reopen.",
    timelineMonths: 6,
    lawyerUsed: true,
    formsUsed: ["EOIR-26", "EOIR-33", "EOIR-28"],
  },
  {
    caseType: "motion-to-reopen",
    countryOfOrigin: "Haiti",
    outcome: "approved",
    year: "2024",
    court: "Board of Immigration Appeals",
    narrative:
      "BIA sua sponte reopened proceedings based on dramatically changed conditions in Haiti following the collapse of government authority. DHS did not oppose the motion.",
    documentsUsed: [
      "EOIR-26",
      "State Department travel advisory for Haiti",
      "UNHCR non-return advisory",
      "Updated country conditions evidence",
      "News reports on government collapse",
    ],
    keyFactors:
      "Complete collapse of government authority and DHS non-opposition made this a strong changed country conditions case with no time bar.",
    lessonsLearned:
      "Monitor country conditions continuously even after a final order. Catastrophic changes can justify reopening regardless of the normal 90-day filing deadline.",
    timelineMonths: 4,
    lawyerUsed: true,
    formsUsed: ["EOIR-26"],
  },
  {
    caseType: "motion-to-reopen",
    countryOfOrigin: "China",
    outcome: "denied",
    year: "2021",
    court: "Board of Immigration Appeals",
    narrative:
      "Motion to reopen based on ineffective assistance was denied because the respondent failed to comply with the Lozada requirements. No bar complaint was filed against prior counsel.",
    documentsUsed: [
      "EOIR-26",
      "Affidavit regarding prior counsel",
      "Retainer agreement",
    ],
    keyFactors:
      "Failure to file a bar complaint against prior counsel meant the Lozada procedural requirements were not satisfied.",
    lessonsLearned:
      "The BIA strictly enforces all three Lozada requirements. Failure to file a bar complaint is almost always fatal to an ineffective assistance motion to reopen.",
    timelineMonths: 10,
    lawyerUsed: false,
    formsUsed: ["EOIR-26"],
    denialReasons:
      "Non-compliance with Matter of Lozada procedural requirements; no bar complaint filed against prior counsel.",
  },
  {
    caseType: "motion-to-reopen",
    countryOfOrigin: "Somalia",
    outcome: "approved",
    year: "2023",
    court: "Board of Immigration Appeals",
    narrative:
      "BIA reopened case after finding prior counsel's failure to present available CAT evidence constituted ineffective assistance. All Lozada requirements were properly met.",
    documentsUsed: [
      "EOIR-26",
      "Lozada affidavit",
      "Bar complaint and receipt",
      "Prior counsel notification letter",
      "Medical evidence of prior torture",
      "Updated country conditions reports",
    ],
    keyFactors:
      "Prior attorney had failed to submit readily available medical evidence of torture scars, which would have materially affected the outcome.",
    lessonsLearned:
      "Keep copies of all evidence provided to your attorney. If counsel fails to submit critical evidence, it may constitute ineffective assistance warranting reopening.",
    timelineMonths: 12,
    lawyerUsed: true,
    formsUsed: ["EOIR-26"],
  },
  {
    caseType: "motion-to-reopen",
    countryOfOrigin: "Nigeria",
    outcome: "appealed",
    year: "2024",
    court: "Newark Immigration Court",
    narrative:
      "Immigration judge denied motion to reopen in absentia removal order despite evidence of improper notice. Respondent appealed to BIA challenging the notice finding.",
    documentsUsed: [
      "Motion to reopen",
      "EOIR-26 appeal",
      "Evidence of address discrepancy",
      "Personal declaration",
      "EOIR-33 filing receipt",
    ],
    keyFactors:
      "Dispute over whether respondent's timely-filed EOIR-33 change of address form was properly processed by the court.",
    lessonsLearned:
      "Always retain proof of filing for change of address forms. A certified mail receipt or EOIR confirmation can be the difference between winning and losing a motion to reopen.",
    timelineMonths: 16,
    lawyerUsed: true,
    formsUsed: ["EOIR-26", "EOIR-33", "EOIR-28"],
    appealDetails:
      "BIA appeal argues IJ erred in finding proper notice was given when the EOIR-33 had been filed before the hearing date.",
  },
  {
    caseType: "motion-to-reopen",
    countryOfOrigin: "Cuba",
    outcome: "remanded",
    year: "2023",
    court: "Board of Immigration Appeals",
    narrative:
      "BIA remanded case to immigration judge for further fact-finding after granting motion to reopen based on changed US-Cuba policy. New evidence required evaluation at the trial level.",
    documentsUsed: [
      "EOIR-26",
      "Updated policy guidance",
      "Country conditions evidence",
      "Personal declaration",
      "Prior hearing transcripts",
    ],
    keyFactors:
      "Shift in US-Cuba diplomatic relations and updated DHS enforcement priorities constituted changed circumstances warranting further proceedings.",
    lessonsLearned:
      "Policy changes can constitute changed circumstances for motions to reopen. Monitor executive orders and DHS policy memoranda for potential reopening arguments.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["EOIR-26"],
  },
  {
    caseType: "motion-to-reopen",
    countryOfOrigin: "Honduras",
    outcome: "denied",
    year: "2020",
    court: "Board of Immigration Appeals",
    narrative:
      "BIA denied motion to reopen filed six years after the removal order. Respondent argued changed country conditions but BIA found the evidence insufficient to overcome the time bar.",
    documentsUsed: [
      "EOIR-26",
      "Country conditions reports",
      "Personal declaration",
    ],
    keyFactors:
      "Evidence showed a continuation of pre-existing gang violence rather than a material change in conditions since the original order.",
    lessonsLearned:
      "Changed country conditions exceptions to the time and number bars require truly new developments. Worsening of existing conditions alone is often insufficient.",
    timelineMonths: 8,
    lawyerUsed: false,
    formsUsed: ["EOIR-26"],
    denialReasons:
      "Evidence showed ongoing conditions rather than material change; insufficient to invoke the changed country conditions exception to time bar.",
  },
  {
    caseType: "motion-to-reopen",
    countryOfOrigin: "Albania",
    outcome: "approved",
    year: "2024",
    court: "Board of Immigration Appeals",
    narrative:
      "Motion to reopen granted after respondent demonstrated prior attorney never informed him of the hearing date and failed to appear. Bar complaint confirmed attorney had been subsequently disbarred.",
    documentsUsed: [
      "EOIR-26",
      "Lozada affidavit",
      "Bar discipline records showing disbarment",
      "Communication records with prior attorney",
      "Personal declaration",
    ],
    keyFactors:
      "Prior attorney's subsequent disbarment for client neglect strongly corroborated the ineffective assistance claim.",
    lessonsLearned:
      "Check your former attorney's bar status. If they have been disciplined or disbarred, this significantly strengthens an ineffective assistance motion to reopen.",
    timelineMonths: 10,
    lawyerUsed: true,
    formsUsed: ["EOIR-26", "EOIR-28"],
  },
];
