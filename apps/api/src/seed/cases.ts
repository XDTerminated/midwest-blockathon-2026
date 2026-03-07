import type { CaseRecord } from "@immivault/shared";

export const SEED_CASES: CaseRecord[] = [
  // --- ASYLUM ---
  {
    caseType: "asylum",
    countryOfOrigin: "Guatemala",
    outcome: "approved",
    year: "2024",
    court: "Arlington Immigration Court",
    narrative:
      "Applied for asylum based on persecution by gang members after refusing recruitment. Filed within 11 months of arrival. Presented country conditions evidence, personal declaration, and two supporting affidavits. Interview lasted 3 hours. Approved after 14 months.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Country conditions report",
      "Affidavits of support",
      "Medical records",
      "Police reports from home country",
    ],
    keyFactors:
      "Strong country conditions evidence and detailed personal declaration were cited by the judge as most persuasive.",
    lessonsLearned:
      "File as early as possible. The one-year deadline is strict. Get country conditions reports from reputable sources like Human Rights Watch or the State Department.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765"],
  },
  {
    caseType: "asylum",
    countryOfOrigin: "Ethiopia",
    outcome: "approved",
    year: "2023",
    court: "Chicago Asylum Office",
    narrative:
      "Affirmative asylum case. Persecuted by government due to political opinions and affiliation with opposition party. Evidence included news articles about opposition crackdowns, personal threats, arrest record, and expert affidavit from Ethiopia scholar. Approved at asylum office level without referral to immigration court.",
    documentsUsed: [
      "I-589",
      "I-765",
      "Expert affidavit",
      "Country conditions report",
      "Arrest record",
      "News articles",
      "Personal declaration",
    ],
    keyFactors:
      "Expert affidavit from a recognized country conditions scholar was highly credible. Consistent and detailed testimony at the asylum interview.",
    lessonsLearned:
      "Expert witnesses on country conditions can make or break asylum cases. Organizations like CLINIC or law school clinics can help find experts. Apply for asylum before the one-year anniversary of entry.",
    timelineMonths: 22,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765", "I-131"],
  },

  // --- CANCELLATION / REMOVAL DEFENSE ---
  {
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2023",
    court: "Los Angeles Immigration Court",
    narrative:
      "In the US for 15 years without status. Three US citizen children. Argued extreme and exceptionally unusual hardship to children who had medical needs requiring specialized care only available in the US. Judge granted cancellation after 2-year court process.",
    documentsUsed: [
      "EOIR-42B",
      "Children's medical records",
      "School records",
      "Tax returns (10 years)",
      "Community letters",
      "Expert psychological evaluation",
    ],
    keyFactors:
      "The medical evidence for the children was decisive. Tax payment history showed good moral character.",
    lessonsLearned:
      "Document everything about your children's ties to the US. Medical evidence is powerful. Pay your taxes even without status — it shows good moral character.",
    timelineMonths: 24,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B"],
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "El Salvador",
    outcome: "approved",
    year: "2023",
    court: "San Francisco Immigration Court",
    narrative:
      "Received NTA after arrest (charges later dropped). Applied for cancellation of removal (non-LPR, 12 years in US). Three US citizen children. Submitted extensive evidence of hardship including child with autism requiring specialized services. Judge granted cancellation.",
    documentsUsed: [
      "EOIR-42B",
      "Children's medical records",
      "Special education records",
      "Community letters",
      "Tax returns",
      "Expert psychological report",
    ],
    keyFactors:
      "Documentation of child's special needs and dependency on parent was decisive. Expert testimony helped enormously.",
    lessonsLearned:
      "Get a lawyer for immigration court — pro se representation in removal proceedings is extremely difficult. Document your children's needs thoroughly.",
    timelineMonths: 30,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B"],
  },

  // --- U-VISA ---
  {
    caseType: "u-visa",
    countryOfOrigin: "Honduras",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Victim of domestic violence. Cooperated with law enforcement and obtained a signed U-visa certification from local police. Filed I-918 with supporting evidence. Received deferred action while waiting. U-visa approved after 4.5 years.",
    documentsUsed: [
      "I-918",
      "I-918 Supplement B (law enforcement certification)",
      "Personal declaration",
      "Police reports",
      "Medical records",
      "Restraining order",
    ],
    keyFactors:
      "Having the law enforcement certification was essential. The detailed personal statement describing the trauma was also important.",
    lessonsLearned:
      "The wait is extremely long but don't give up. Keep your address updated with USCIS. You can get a work permit while waiting.",
    timelineMonths: 54,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },

  // --- GREEN CARD FAMILY ---
  {
    caseType: "green-card-family",
    countryOfOrigin: "Philippines",
    outcome: "approved",
    year: "2023",
    court: "USCIS National Benefits Center",
    narrative:
      "US citizen spouse filed I-130 for spouse from Philippines. Priority date was current at filing. Concurrent filing of I-485. RFE issued requesting additional evidence of bona fide marriage — responded with joint bank statements, lease, photos, and affidavits. Approved 18 months after filing.",
    documentsUsed: [
      "I-130",
      "I-485",
      "I-864",
      "I-693",
      "I-765",
      "Joint tax returns",
      "Joint lease",
      "Wedding photos",
    ],
    keyFactors:
      "Responding quickly and thoroughly to the RFE was critical. Joint financial accounts were most convincing.",
    lessonsLearned:
      "Open joint bank accounts immediately after marriage. The more documentation of shared life, the better. Respond to RFEs within the deadline — extensions are sometimes available.",
    timelineMonths: 18,
    lawyerUsed: false,
    formsUsed: ["I-130", "I-485", "I-864", "I-693", "I-765"],
  },

  // --- GREEN CARD EMPLOYMENT ---
  {
    caseType: "green-card-employment",
    countryOfOrigin: "India",
    outcome: "pending",
    year: "2024",
    court: "USCIS Nebraska Service Center",
    narrative:
      "Software engineer from India. EB-2 NIW self-petition filed. Priority date: 2019. Currently on H-1B extension using AC21 portability. Waiting for priority date to become current. Filed I-485 when PD was briefly current in 2023 but retrogressed. Premium processing used for I-140.",
    documentsUsed: [
      "I-140",
      "I-485",
      "I-131",
      "I-765",
      "Employer support letters",
      "Expert recommendation letters",
    ],
    keyFactors:
      "NIW approval was faster than PERM route. AC21 portability keeps status valid during the long wait for priority date.",
    lessonsLearned:
      "Consider NIW if you have significant national interest qualifications. Monitor the visa bulletin monthly. AC21 portability is your friend — you can change employers after I-485 has been pending 180+ days.",
    timelineMonths: 60,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-485", "I-131", "I-765"],
  },

  // --- VAWA ---
  {
    caseType: "vawa",
    countryOfOrigin: "Brazil",
    outcome: "approved",
    year: "2023",
    court: "USCIS Vermont Service Center (VAWA unit)",
    narrative:
      "Married to abusive US citizen. Filed I-360 VAWA self-petition confidentially. Evidence included medical records, police report, psychological evaluation, and detailed personal declaration. Approved in 14 months. Then filed I-485. Now a permanent resident.",
    documentsUsed: [
      "I-360",
      "I-485",
      "Police reports",
      "Medical records",
      "Psychological evaluation",
      "Affidavit from shelter",
    ],
    keyFactors:
      "Confidentiality of VAWA filings is protected by law — DHS cannot disclose to the abuser. Psychological evaluation was compelling evidence of the abuse.",
    lessonsLearned:
      "You do NOT need your abuser's cooperation. File independently. Legal aid organizations can help for free. The VAWA unit at VSC is specialized and generally responsive.",
    timelineMonths: 26,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },

  // --- NATURALIZATION ---
  {
    caseType: "naturalization",
    countryOfOrigin: "Vietnam",
    outcome: "approved",
    year: "2024",
    court: "USCIS Houston Field Office",
    narrative:
      "LPR for 6 years. Married to US citizen, so eligible after 3 years as LPR. Filed N-400. Biometrics completed. Interview in 4 months. One re-interview required due to interpreter miscommunication. Oath ceremony scheduled 3 weeks after final approval.",
    documentsUsed: [
      "N-400",
      "Green card",
      "Tax returns (5 years)",
      "Marriage certificate",
      "Passport photos",
    ],
    keyFactors:
      "Good moral character and continuous residence were key. Having a consistent work history helped. Being honest about all questions is essential.",
    lessonsLearned:
      "Study for the civics test thoroughly. If English is limited, you may be eligible for an exemption based on age and years as LPR. Schedule early — backlogs vary by field office.",
    timelineMonths: 10,
    lawyerUsed: false,
    formsUsed: ["N-400"],
  },

  // --- TPS ---
  {
    caseType: "tps",
    countryOfOrigin: "Haiti",
    outcome: "approved",
    year: "2024",
    court: "USCIS",
    narrative:
      "Haitian national registered for TPS during open registration period. Filed I-821 and I-765 for work authorization. Evidence of presence in US during required period and absence of disqualifying factors. Approved. Re-registered for each subsequent period.",
    documentsUsed: [
      "I-821",
      "I-765",
      "Evidence of presence (utility bills, lease)",
      "Passport",
      "Biometrics",
    ],
    keyFactors:
      "Filing during the open window and having proof of US presence since the qualifying date were essential.",
    lessonsLearned:
      "Set calendar reminders for TPS re-registration periods. Missing the window means losing status. Keep all evidence of continuous US presence.",
    timelineMonths: 4,
    lawyerUsed: false,
    formsUsed: ["I-821", "I-765"],
  },

  // --- H-1B ---
  {
    caseType: "h1b",
    countryOfOrigin: "Nigeria",
    outcome: "approved",
    year: "2024",
    court: "USCIS California Service Center",
    narrative:
      "Software engineer. Selected in H-1B lottery. Employer filed cap-subject petition. Received one RFE questioning specialty occupation requirements — submitted additional evidence of job duties and degree equivalency. Approved in 5 months total. Premium processing used.",
    documentsUsed: [
      "I-129",
      "Labor Condition Application",
      "Degree equivalency evaluation",
      "Job description",
      "Employer financials",
    ],
    keyFactors:
      "Premium processing reduced wait significantly. Detailed job duty description was key to RFE response. Degree equivalency evaluation from credentialed evaluator was critical.",
    lessonsLearned:
      "Have employer use an experienced immigration attorney for H-1B. The specialty occupation standard has been heavily scrutinized. Premium processing is worth the cost.",
    timelineMonths: 5,
    lawyerUsed: true,
    formsUsed: ["I-129"],
  },

  // --- SIJS ---
  {
    caseType: "sijs",
    countryOfOrigin: "Honduras",
    outcome: "approved",
    year: "2024",
    court: "USCIS Texas Service Center",
    narrative:
      "Minor, 16 years old, came to US unaccompanied. Abandoned by parent. State family court issued SIJS predicate order finding abuse, neglect, and abandonment. Filed I-360 and I-485 concurrently. EAD and advance parole issued. I-485 approved 18 months after filing.",
    documentsUsed: [
      "I-360",
      "I-485",
      "State court SIJS predicate order",
      "Birth certificate",
      "School enrollment",
      "Guardian appointment",
    ],
    keyFactors:
      "The state court predicate order is the foundation of SIJS. A family law attorney and immigration attorney must coordinate. Filing before age 21 is a hard deadline.",
    lessonsLearned:
      "SIJS must be filed before the applicant turns 21. Act quickly. Many nonprofit legal aid organizations specialize in unaccompanied minor cases.",
    timelineMonths: 22,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765", "I-131"],
  },

  // --- MOTION TO REOPEN ---
  {
    caseType: "motion-to-reopen",
    countryOfOrigin: "China",
    outcome: "approved",
    year: "2023",
    court: "Board of Immigration Appeals",
    narrative:
      "Had in absentia removal order from 2010 after not receiving notice. Filed motion to reopen based on lack of notice — submitted evidence that hearing notice was sent to old address. BIA granted motion to reopen. Case returned to immigration court. Ultimately granted withholding of removal.",
    documentsUsed: [
      "EOIR-26 (Notice of Appeal)",
      "Motion to Reopen brief",
      "Evidence of changed address filing",
      "Country conditions (China religious persecution)",
    ],
    keyFactors:
      "Proving lack of notice was the entire case. USPS return receipt and evidence of address change were critical.",
    lessonsLearned:
      "Always keep USCIS and immigration courts updated on your address. In absentia orders can be challenged if you never received notice. There is no strict deadline to file a motion to reopen based on lack of notice.",
    timelineMonths: 36,
    lawyerUsed: true,
    formsUsed: ["EOIR-26"],
  },

  // --- K-1 FIANCÉ ---
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Ukraine",
    outcome: "approved",
    year: "2024",
    court: "US Embassy (processed Warsaw due to conflict)",
    narrative:
      "US citizen petitioned for fiancé. I-129F filed. Processing delayed due to consulate closure — rerouted through Warsaw, Poland. Medical exam completed in Poland. Visa issued. Entered US, married within 90 days. Filed I-485 for adjustment of status. Approved.",
    documentsUsed: [
      "I-129F",
      "I-485",
      "I-864",
      "I-693",
      "Evidence of meeting in person (photos, travel records)",
      "Birth certificates",
    ],
    keyFactors:
      "Proof of having met in person within 2 years was required. Clear evidence of genuine relationship. Alternative consulate processing was available due to embassy closure.",
    lessonsLearned:
      "If your country's consulate is closed, contact NVC about alternative consulate processing. Start medical early — it has a 2-year validity window. You must marry within 90 days of K-1 entry.",
    timelineMonths: 20,
    lawyerUsed: false,
    formsUsed: ["I-129F", "I-485", "I-864", "I-693", "I-765"],
  },

  // --- DACA ---
  {
    caseType: "daca",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2023",
    court: "USCIS",
    narrative:
      "DACA recipient since 2014. Renewed every 2 years. Most recent renewal filed 180 days before expiration per USCIS guidance. Work permit renewed without gap. DACA litigation ongoing — monitoring federal court decisions. Currently maintains valid DACA and EAD.",
    documentsUsed: [
      "I-821D",
      "I-765",
      "Tax transcripts",
      "Evidence of school enrollment/graduation",
      "Passport-style photos",
    ],
    keyFactors:
      "Renewing on time is critical. Check expiration date 6 months in advance. Make sure biometrics are current.",
    lessonsLearned:
      "Keep copies of every USCIS receipt and approval. Track federal litigation through NILC and CLINIC updates. Apply for renewal well before the 150-day window opens.",
    timelineMonths: 5,
    lawyerUsed: false,
    formsUsed: ["I-821D", "I-765"],
  },
];
