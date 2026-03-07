import type { CaseRecord } from "@immivault/shared";

export const SEED_CASES: CaseRecord[] = [
  // ============================================================
  // ASYLUM (8 cases)
  // ============================================================
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
  {
    caseType: "asylum",
    countryOfOrigin: "Venezuela",
    outcome: "approved",
    year: "2024",
    court: "Miami Immigration Court",
    narrative:
      "Fled Venezuela after receiving death threats for participating in anti-government protests. Filed defensive asylum after being placed in removal proceedings at the border. Presented social media evidence of threats, medical documentation of injuries sustained during protests, and expert testimony on Venezuelan political repression. Judge granted asylum after a full merits hearing.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Country conditions report",
      "Social media screenshots",
      "Medical records",
      "Expert affidavit",
      "News articles documenting protests",
    ],
    keyFactors:
      "Social media evidence directly corroborating threats was very persuasive. Medical records showing injuries consistent with the narrative strengthened credibility.",
    lessonsLearned:
      "Preserve all social media evidence immediately — screenshot and notarize. Digital evidence can be powerful but must be authenticated. Defensive asylum is harder than affirmative but still possible with strong evidence.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765"],
  },
  {
    caseType: "asylum",
    countryOfOrigin: "Cameroon",
    outcome: "denied",
    year: "2023",
    court: "New York Immigration Court",
    narrative:
      "Filed asylum based on persecution as an Anglophone Cameroonian during the Anglophone Crisis. Case denied because the judge found the applicant had not filed within the one-year deadline and did not meet an exception. The applicant entered the US 14 months before filing. Currently appealing to the BIA.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Country conditions report",
      "News articles on Anglophone Crisis",
    ],
    keyFactors:
      "The one-year filing deadline was the deciding factor. The judge acknowledged the persecution claim was credible but the late filing was fatal to the asylum claim.",
    lessonsLearned:
      "The one-year deadline is extremely strict. File as soon as possible after arrival. If you miss it, explore whether changed or extraordinary circumstances apply. Consider withholding of removal as an alternative — it has no one-year deadline.",
    timelineMonths: 16,
    lawyerUsed: false,
    formsUsed: ["I-589"],
    denialReasons: "Failure to file within the one-year deadline. No extraordinary or changed circumstances established.",
  },
  {
    caseType: "asylum",
    countryOfOrigin: "Syria",
    outcome: "approved",
    year: "2024",
    court: "Los Angeles Asylum Office",
    narrative:
      "Syrian national who fled during the civil war. Applied for affirmative asylum based on fear of persecution by government forces due to perceived political opposition. Had been detained and tortured before fleeing. Presented detailed medical and psychological evaluations documenting torture. Approved at the asylum office without referral.",
    documentsUsed: [
      "I-589",
      "Psychological evaluation",
      "Medical records documenting torture",
      "Country conditions report",
      "Personal declaration",
      "Affidavits from family members",
    ],
    keyFactors:
      "Medical evidence consistent with torture claims was extremely persuasive. Psychological evaluation documenting PTSD symptoms corroborated the narrative.",
    lessonsLearned:
      "If you have been tortured, get a forensic medical evaluation — organizations like Physicians for Human Rights can help. Psychological evaluations are also powerful. These evaluations can be done pro bono.",
    timelineMonths: 12,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765", "I-131"],
  },
  {
    caseType: "asylum",
    countryOfOrigin: "Uganda",
    outcome: "approved",
    year: "2023",
    court: "San Francisco Asylum Office",
    narrative:
      "LGBTQ individual who fled Uganda after the passage of the Anti-Homosexuality Act. Had been attacked and hospitalized. Filed affirmative asylum based on membership in a particular social group. Presented medical records, police report showing police refused to help, and affidavits from friends aware of identity. Approved.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Medical records",
      "Country conditions report on LGBTQ persecution",
      "Affidavits from community members",
      "News articles on Anti-Homosexuality Act",
    ],
    keyFactors:
      "Well-documented country conditions regarding LGBTQ persecution in Uganda. Corroborating evidence from multiple sources consistent with the applicant's account.",
    lessonsLearned:
      "LGBTQ asylum claims are recognized in the US. You do not need to prove persecution by the government — persecution by private actors counts if the government is unable or unwilling to protect you. Gather corroborating evidence from people who knew about your identity.",
    timelineMonths: 15,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765"],
  },
  {
    caseType: "asylum",
    countryOfOrigin: "Colombia",
    outcome: "denied",
    year: "2024",
    court: "Houston Immigration Court",
    narrative:
      "Filed asylum claiming persecution by a paramilitary group after a land dispute. The judge found the claim was based on a private dispute over property rather than a protected ground (race, religion, nationality, political opinion, or particular social group). Asylum denied. Withholding of removal also denied.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Property documents",
      "Police reports",
      "Country conditions report",
    ],
    keyFactors:
      "The judge determined that the threats were motivated by a private land dispute, not by a protected characteristic. The nexus to a protected ground was not established.",
    lessonsLearned:
      "Asylum requires showing persecution on account of a protected ground. Private disputes, even violent ones, may not qualify unless connected to race, religion, nationality, political opinion, or social group membership. Consult a lawyer to frame the claim properly.",
    timelineMonths: 20,
    lawyerUsed: false,
    formsUsed: ["I-589"],
    denialReasons: "No nexus to a protected ground. Persecution motivated by private dispute.",
  },
  {
    caseType: "asylum",
    countryOfOrigin: "Eritrea",
    outcome: "approved",
    year: "2025",
    court: "Newark Asylum Office",
    narrative:
      "Eritrean national who deserted from indefinite military conscription. Filed affirmative asylum based on political opinion (imputed opposition to government). Presented evidence of Eritrea's indefinite conscription policy, punishment of deserters, and expert testimony. Approved at the asylum office level.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Country conditions report",
      "Expert affidavit on Eritrean military service",
      "Human Rights Watch reports",
      "UNHCR guidelines on Eritrean asylum claims",
    ],
    keyFactors:
      "Well-established country conditions showing Eritrea punishes deserters harshly. UNHCR guidelines supporting asylum claims from Eritrean deserters were persuasive.",
    lessonsLearned:
      "Eritrean desertion cases have strong precedent. UNHCR guidelines can be cited as persuasive authority. Gather as much documentation about the conscription system as possible.",
    timelineMonths: 10,
    lawyerUsed: true,
    formsUsed: ["I-589", "I-765"],
  },

  // ============================================================
  // GREEN CARD - FAMILY (6 cases)
  // ============================================================
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
  {
    caseType: "green-card-family",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2024",
    court: "USCIS Chicago Field Office",
    narrative:
      "US citizen adult child petitioned for parent. I-130 filed as immediate relative petition. Parent was in the US on a tourist visa. Concurrent I-485 filed. Interview at local field office. Approved in 12 months. No RFE issued.",
    documentsUsed: [
      "I-130",
      "I-485",
      "I-864",
      "I-693",
      "Birth certificate proving relationship",
      "Petitioner's US citizenship evidence",
      "Tax returns",
    ],
    keyFactors:
      "Immediate relative category meant no wait for visa number. Clear documentation of parent-child relationship. Financial sponsor met income requirements.",
    lessonsLearned:
      "Parents of US citizens over 21 are immediate relatives — no visa backlog. Make sure all civil documents are properly translated. Have the I-864 sponsor's tax returns ready.",
    timelineMonths: 12,
    lawyerUsed: false,
    formsUsed: ["I-130", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "green-card-family",
    countryOfOrigin: "Dominican Republic",
    outcome: "denied",
    year: "2023",
    court: "USCIS National Benefits Center",
    narrative:
      "US citizen filed I-130 for spouse. USCIS denied the petition after finding the marriage was entered into primarily to obtain immigration benefits. Evidence showed the couple had minimal contact before marriage, no shared residence, and inconsistent testimony at the interview about basic details of their relationship.",
    documentsUsed: [
      "I-130",
      "I-485",
      "I-864",
      "Marriage certificate",
      "Photos",
    ],
    keyFactors:
      "Inconsistent testimony between petitioner and beneficiary during separate interviews was the primary reason for denial. Lack of commingled finances or shared residence raised red flags.",
    lessonsLearned:
      "USCIS takes marriage fraud very seriously. Both parties must be prepared for Stokes interviews (separate questioning). Document your relationship thoroughly from the beginning — texts, photos, shared finances, travel together.",
    timelineMonths: 14,
    lawyerUsed: false,
    formsUsed: ["I-130", "I-485", "I-864"],
    denialReasons: "Marriage determined to be entered for immigration benefits. Inconsistent testimony. Insufficient evidence of bona fide marriage.",
  },
  {
    caseType: "green-card-family",
    countryOfOrigin: "Ghana",
    outcome: "approved",
    year: "2024",
    court: "US Embassy Accra",
    narrative:
      "US citizen filed I-130 for spouse. Consular processing through Accra embassy. DS-260 submitted after I-130 approval. Medical exam completed locally. Interview at embassy lasted 30 minutes. Visa issued same day. Spouse entered the US and received green card in the mail 3 weeks later.",
    documentsUsed: [
      "I-130",
      "DS-260",
      "I-864",
      "I-693 equivalent (embassy panel physician exam)",
      "Marriage certificate",
      "Joint photos",
      "Communication records",
      "Birth certificates",
    ],
    keyFactors:
      "Thorough preparation of evidence packet for the consular interview. Having communication records (WhatsApp logs, call records) showing ongoing relationship was helpful.",
    lessonsLearned:
      "Consular processing can be faster than adjustment of status for some countries. Print communication records and organize them chronologically. Arrive at the embassy early with all documents organized.",
    timelineMonths: 16,
    lawyerUsed: true,
    formsUsed: ["I-130", "DS-260", "I-864"],
  },
  {
    caseType: "green-card-family",
    countryOfOrigin: "China",
    outcome: "approved",
    year: "2025",
    court: "USCIS San Jose Field Office",
    narrative:
      "LPR filed I-130 for unmarried adult child (F2B category). Priority date: 2016. Waited 8 years for visa number to become current. Filed I-485 once current. Interview at field office was brief. Approved. The long wait was the most challenging aspect.",
    documentsUsed: [
      "I-130",
      "I-485",
      "I-864",
      "I-693",
      "Birth certificate",
      "Evidence of continuous unmarried status",
      "Petitioner's green card",
    ],
    keyFactors:
      "Maintaining unmarried status throughout the 8-year wait was essential — marriage would have bumped the category and reset the wait. Keeping address updated with USCIS prevented missed notices.",
    lessonsLearned:
      "Family preference categories can have very long waits. Check the visa bulletin monthly. Do not get married while waiting in the F2B category. Keep USCIS updated on any address changes.",
    timelineMonths: 102,
    lawyerUsed: true,
    formsUsed: ["I-130", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "green-card-family",
    countryOfOrigin: "Nigeria",
    outcome: "pending",
    year: "2025",
    court: "US Embassy Lagos",
    narrative:
      "US citizen filed I-130 for sibling (F4 category). Priority date: 2008. After 17 years of waiting, the priority date finally became current. DS-260 submitted. Awaiting interview scheduling at the Lagos embassy. The sibling has been maintaining valid status and documentation throughout the wait.",
    documentsUsed: [
      "I-130",
      "DS-260",
      "I-864",
      "Birth certificates proving sibling relationship",
      "Petitioner's citizenship evidence",
    ],
    keyFactors:
      "The F4 sibling category has the longest wait times. Maintaining contact with NVC and keeping case current is essential. Address changes must be reported promptly.",
    lessonsLearned:
      "Sibling-based immigration can take 15-20+ years. Consider whether other immigration pathways might be available while waiting. Keep all documents current and renewed as needed.",
    timelineMonths: 204,
    lawyerUsed: true,
    formsUsed: ["I-130", "DS-260", "I-864"],
  },

  // ============================================================
  // GREEN CARD - EMPLOYMENT (6 cases)
  // ============================================================
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
  {
    caseType: "green-card-employment",
    countryOfOrigin: "South Korea",
    outcome: "approved",
    year: "2024",
    court: "USCIS Texas Service Center",
    narrative:
      "Research scientist with a PhD in biomedical engineering. Filed EB-1A (extraordinary ability) with evidence of published research, peer review activity, and significant citations. I-140 approved in 3 months with premium processing. I-485 filed concurrently and approved in 14 months total.",
    documentsUsed: [
      "I-140",
      "I-485",
      "I-131",
      "I-765",
      "Published research articles",
      "Citation records",
      "Peer review invitations",
      "Recommendation letters from leading researchers",
      "Media coverage of research",
    ],
    keyFactors:
      "Strong publication record with high citation count. Evidence of serving as a peer reviewer for top journals. Letters from independent experts in the field were particularly effective.",
    lessonsLearned:
      "EB-1A does not require employer sponsorship — you can self-petition. Focus on meeting at least 3 of the 10 criteria. Quality of recommendation letters matters more than quantity. Independent recommenders carry more weight than those who know you personally.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-485", "I-131", "I-765"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Brazil",
    outcome: "approved",
    year: "2023",
    court: "USCIS Nebraska Service Center",
    narrative:
      "Data scientist. Employer sponsored through PERM labor certification (EB-3). PERM audit delayed the process by 6 months. I-140 filed after PERM approval and approved with premium processing. I-485 filed and approved. Total process took 3 years from PERM filing to green card.",
    documentsUsed: [
      "PERM labor certification",
      "I-140",
      "I-485",
      "I-765",
      "I-131",
      "Employer letter",
      "Degree evaluation",
      "Pay stubs",
    ],
    keyFactors:
      "Surviving the PERM audit was critical — employer had thorough recruitment documentation. Premium processing for I-140 saved months.",
    lessonsLearned:
      "PERM audits are common — make sure the employer follows all recruitment steps precisely. Keep copies of all job postings and recruitment efforts. The employer must be able to pay the offered wage from the PERM filing date.",
    timelineMonths: 36,
    lawyerUsed: true,
    formsUsed: ["PERM", "I-140", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Canada",
    outcome: "approved",
    year: "2024",
    court: "USCIS Nebraska Service Center",
    narrative:
      "EB-2 NIW (National Interest Waiver) self-petition. Applicant is a climate scientist with significant published research on carbon capture. Argued that the work is in the national interest of the US. No employer sponsor needed. I-140 approved. Since Canada has no backlog, I-485 filed concurrently and approved in 10 months.",
    documentsUsed: [
      "I-140",
      "I-485",
      "I-765",
      "I-131",
      "Published research",
      "Recommendation letters",
      "Evidence of national importance of research",
      "Citation analysis",
    ],
    keyFactors:
      "The national interest argument was strengthened by recent federal investments in climate technology. Strong letters from government researchers and industry leaders supported the claim.",
    lessonsLearned:
      "NIW is a powerful option for researchers — no employer sponsor needed. Frame your work in terms of national interest and broader impact. The Dhanasar framework (2016 AAO decision) is the current standard for NIW evaluation.",
    timelineMonths: 10,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-485", "I-765", "I-131"],
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Pakistan",
    outcome: "denied",
    year: "2023",
    court: "USCIS Texas Service Center",
    narrative:
      "Filed EB-1A extraordinary ability petition as a software engineer. USCIS found that the applicant did not meet at least 3 of the 10 criteria. The evidence of high salary and published work was insufficient without more context. Awards were internal company awards, not nationally recognized. Denied without RFE.",
    documentsUsed: [
      "I-140",
      "Published articles",
      "Salary documentation",
      "Company awards",
      "Recommendation letters",
    ],
    keyFactors:
      "Internal company awards do not qualify as nationally or internationally recognized prizes. Published articles in company blogs or non-peer-reviewed venues were not sufficient. Salary evidence lacked comparison to field averages.",
    lessonsLearned:
      "EB-1A has a high bar. Internal awards do not count — they must be nationally or internationally recognized. Publications must be in professional journals or major media. If EB-1A is a stretch, consider EB-2 NIW instead.",
    timelineMonths: 4,
    lawyerUsed: false,
    formsUsed: ["I-140"],
    denialReasons: "Failed to establish at least 3 of the 10 EB-1A criteria. Awards not nationally recognized. Publications not in qualifying venues.",
  },
  {
    caseType: "green-card-employment",
    countryOfOrigin: "Germany",
    outcome: "approved",
    year: "2025",
    court: "USCIS Nebraska Service Center",
    narrative:
      "EB-1C multinational manager. Worked as a senior director at a German company for 4 years, then transferred to the US subsidiary. Employer filed I-140 under EB-1C. Approved with premium processing. I-485 filed and approved in 8 months. No interview required.",
    documentsUsed: [
      "I-140",
      "I-485",
      "I-765",
      "I-131",
      "Organizational charts",
      "Job descriptions (abroad and US)",
      "Evidence of managerial role",
      "Company financials",
    ],
    keyFactors:
      "Clear evidence of managerial capacity in both the foreign and US positions. Organizational charts showing direct reports were essential. Company financials demonstrated ability to pay.",
    lessonsLearned:
      "EB-1C requires showing you managed people or a function, not just projects. Organizational charts are critical evidence. The qualifying relationship between the foreign and US companies must be clearly documented.",
    timelineMonths: 8,
    lawyerUsed: true,
    formsUsed: ["I-140", "I-485", "I-765", "I-131"],
  },

  // ============================================================
  // CANCELLATION OF REMOVAL (4 cases)
  // ============================================================
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
    caseType: "cancellation-removal-non-lpr",
    countryOfOrigin: "Guatemala",
    outcome: "denied",
    year: "2024",
    court: "Denver Immigration Court",
    narrative:
      "In the US for 12 years. Two US citizen children. Filed for cancellation of removal but could not establish the 'exceptional and extremely unusual hardship' standard. Children were healthy with no special needs. Judge found that while removal would cause hardship, it did not rise to the required level. Appealed to BIA.",
    documentsUsed: [
      "EOIR-42B",
      "Children's school records",
      "Tax returns",
      "Community letters",
      "Employment records",
    ],
    keyFactors:
      "The hardship standard for non-LPR cancellation is extremely high. General hardship of family separation was not sufficient. No medical or educational special circumstances.",
    lessonsLearned:
      "The 'exceptional and extremely unusual hardship' standard is one of the highest in immigration law. General disruption to a child's life is not enough. You need something specific — medical conditions, educational needs, country conditions that would specifically harm your qualifying relatives.",
    timelineMonths: 28,
    lawyerUsed: true,
    formsUsed: ["EOIR-42B"],
    denialReasons: "Hardship did not meet the exceptional and extremely unusual standard. No medical or special educational needs established.",
    appealDetails: "Appeal filed with BIA. Arguing judge applied incorrect legal standard.",
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "Jamaica",
    outcome: "approved",
    year: "2024",
    court: "New York Immigration Court",
    narrative:
      "LPR for 20 years. Placed in removal proceedings after a drug possession conviction (later expunged). Filed for cancellation of removal for LPRs. Demonstrated 7+ years of continuous residence and 5+ years as LPR. Showed rehabilitation through completion of drug treatment program, steady employment, and community involvement. Judge exercised discretion favorably.",
    documentsUsed: [
      "EOIR-42A",
      "Green card",
      "Drug treatment completion certificate",
      "Employment records",
      "Community letters",
      "Family ties documentation",
      "Tax returns",
    ],
    keyFactors:
      "Evidence of rehabilitation was the most important factor. Completion of treatment, years of clean record after the conviction, and strong community ties tipped the balance.",
    lessonsLearned:
      "LPR cancellation of removal is discretionary — you need to show the positive factors outweigh the negative. Rehabilitation evidence is critical. Get letters from employers, community leaders, and family members. Complete any required programs before the hearing.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A"],
  },
  {
    caseType: "cancellation-removal-lpr",
    countryOfOrigin: "Trinidad and Tobago",
    outcome: "denied",
    year: "2023",
    court: "Miami Immigration Court",
    narrative:
      "LPR for 12 years. Convicted of an aggravated felony (fraud over $10,000). Filed for cancellation of removal but was found statutorily ineligible because aggravated felony convictions bar LPR cancellation. The only relief available was deferral under the Convention Against Torture, which was also denied due to insufficient evidence of torture risk.",
    documentsUsed: [
      "EOIR-42A",
      "Criminal court records",
      "Country conditions report",
      "Personal declaration",
    ],
    keyFactors:
      "Aggravated felony conviction is an absolute bar to LPR cancellation of removal. No discretionary waiver is available.",
    lessonsLearned:
      "Certain criminal convictions permanently bar immigration relief. Consult an immigration attorney before pleading guilty to any crime if you are not a US citizen. Even LPRs can be deported for aggravated felonies.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["EOIR-42A"],
    denialReasons: "Statutory ineligibility due to aggravated felony conviction. CAT deferral denied for insufficient evidence.",
  },

  // ============================================================
  // DEPORTATION DEFENSE (3 cases)
  // ============================================================
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
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Honduras",
    outcome: "approved",
    year: "2024",
    court: "Memphis Immigration Court",
    narrative:
      "Placed in removal proceedings after overstaying a tourist visa. Applied for withholding of removal based on fear of gang violence targeting the family. Presented evidence that family members in Honduras had been killed by gangs. Judge granted withholding of removal, finding a clear probability of persecution.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Death certificates of family members",
      "Police reports from Honduras",
      "Country conditions report",
      "News articles about gang violence",
    ],
    keyFactors:
      "Evidence that family members had already been killed was extremely persuasive. The pattern of targeting established a clear probability of future persecution.",
    lessonsLearned:
      "Withholding of removal is different from asylum — it has a higher standard but no one-year filing deadline. You cannot travel outside the US with withholding status. Gather evidence of harm to family members still in the home country.",
    timelineMonths: 22,
    lawyerUsed: true,
    formsUsed: ["I-589"],
  },
  {
    caseType: "deportation-defense",
    countryOfOrigin: "Guatemala",
    outcome: "denied",
    year: "2025",
    court: "Atlanta Immigration Court",
    narrative:
      "Placed in removal proceedings after being apprehended near the border. Filed for asylum and withholding of removal. The judge found the applicant's testimony not credible due to significant inconsistencies between the written declaration and oral testimony. Both asylum and withholding denied. CAT protection also denied. Ordered removed.",
    documentsUsed: [
      "I-589",
      "Personal declaration",
      "Country conditions report",
    ],
    keyFactors:
      "Credibility was the deciding factor. Major inconsistencies between the written application and testimony at the merits hearing undermined the entire case.",
    lessonsLearned:
      "Consistency is everything in immigration court. Review your application carefully before the hearing. Practice your testimony with your attorney. Any inconsistency, even about minor details, can destroy credibility.",
    timelineMonths: 8,
    lawyerUsed: false,
    formsUsed: ["I-589"],
    denialReasons: "Adverse credibility finding. Significant inconsistencies between written declaration and oral testimony.",
  },

  // ============================================================
  // U-VISA (3 cases)
  // ============================================================
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
  {
    caseType: "u-visa",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2023",
    court: "USCIS Vermont Service Center",
    narrative:
      "Victim of armed robbery and assault at workplace. Cooperated with police investigation and testified at trial. Obtained law enforcement certification from the district attorney's office. Filed I-918 with evidence of substantial physical and mental harm. Placed on the U-visa waitlist due to annual cap, then approved when number became available.",
    documentsUsed: [
      "I-918",
      "I-918 Supplement B",
      "Personal declaration",
      "Police reports",
      "Medical records (ER visit)",
      "Psychological evaluation",
      "Court testimony transcript",
    ],
    keyFactors:
      "Active cooperation with prosecution, including testifying at trial, strengthened the case. Medical evidence of substantial harm was well-documented.",
    lessonsLearned:
      "The U-visa has a 10,000 per year cap, so there is a waitlist. You get deferred action and work authorization while waiting. Cooperate fully with law enforcement — it is a requirement. The certification can come from police, prosecutors, judges, or other qualifying agencies.",
    timelineMonths: 48,
    lawyerUsed: true,
    formsUsed: ["I-918", "I-918B", "I-765"],
  },
  {
    caseType: "u-visa",
    countryOfOrigin: "El Salvador",
    outcome: "denied",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Filed U-visa based on being a victim of theft. Law enforcement certification was obtained but the personal declaration did not adequately demonstrate substantial physical or mental abuse. USCIS found the harm was minimal and did not meet the threshold. Denied.",
    documentsUsed: [
      "I-918",
      "I-918 Supplement B",
      "Personal declaration",
      "Police report",
    ],
    keyFactors:
      "The 'substantial physical or mental abuse' standard was not met. A simple theft without physical injury or documented psychological trauma was insufficient.",
    lessonsLearned:
      "U-visa requires showing substantial harm. Even if you have a qualifying crime and law enforcement certification, you must document the impact on you. Get a psychological evaluation to document trauma. Not every crime victim will qualify.",
    timelineMonths: 36,
    lawyerUsed: false,
    formsUsed: ["I-918", "I-918B"],
    denialReasons: "Substantial physical or mental abuse not established. Insufficient evidence of harm from the qualifying crime.",
  },

  // ============================================================
  // T-VISA (2 cases)
  // ============================================================
  {
    caseType: "t-visa",
    countryOfOrigin: "Philippines",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Victim of labor trafficking. Brought to the US on a work visa but passport was confiscated by employer. Forced to work excessive hours with minimal pay under threat of deportation. Escaped with help from a community organization. Filed T-visa with assistance from a legal aid nonprofit. Cooperated with federal investigation of the employer.",
    documentsUsed: [
      "I-914",
      "I-914 Supplement B (law enforcement declaration)",
      "Personal declaration",
      "Evidence of trafficking (employment records, pay stubs showing below minimum wage)",
      "Community organization records",
      "Psychological evaluation",
    ],
    keyFactors:
      "Federal law enforcement involvement and an active investigation strengthened the application. Detailed documentation of coercive conditions was essential.",
    lessonsLearned:
      "If you are a trafficking victim, contact the National Human Trafficking Hotline (1-888-373-7888). T-visa provides a path to permanent residence. You do not need to have your trafficker convicted — you just need to cooperate with reasonable law enforcement requests.",
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
      "Victim of sex trafficking. Smuggled into the US and forced into commercial sex work. Escaped and sought help from a domestic violence shelter. Law enforcement was initially unresponsive but an FBI task force eventually took the case. Filed T-visa with extensive evidence of trafficking and trauma. Approved. Now working toward adjustment of status to permanent residence.",
    documentsUsed: [
      "I-914",
      "I-914 Supplement B",
      "Personal declaration",
      "Psychological evaluation",
      "Medical records",
      "Shelter intake records",
      "FBI victim witness coordinator letter",
    ],
    keyFactors:
      "FBI involvement provided strong law enforcement support. The psychological evaluation documenting severe PTSD was powerful evidence. Shelter records corroborated the timeline.",
    lessonsLearned:
      "Trafficking victims have rights regardless of immigration status. If local police are unresponsive, contact federal law enforcement (FBI, HSI). T-visa holders can adjust to permanent residence after 3 years or when the investigation concludes.",
    timelineMonths: 22,
    lawyerUsed: true,
    formsUsed: ["I-914", "I-914B", "I-765"],
  },

  // ============================================================
  // VAWA (3 cases)
  // ============================================================
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
  {
    caseType: "vawa",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center (VAWA unit)",
    narrative:
      "Spouse of abusive LPR. Suffered years of emotional and physical abuse. Filed I-360 VAWA self-petition after leaving the abuser. Submitted evidence including text messages showing threats, photos of injuries, declarations from friends who witnessed the abuse, and a detailed personal statement. Prima facie determination granted in 3 months. Full approval in 18 months.",
    documentsUsed: [
      "I-360",
      "Personal declaration",
      "Text messages showing threats",
      "Photos of injuries",
      "Declarations from witnesses",
      "Psychological evaluation",
      "Proof of marriage",
    ],
    keyFactors:
      "Text messages providing direct evidence of abuse were very compelling. Multiple witness declarations corroborated the pattern of abuse.",
    lessonsLearned:
      "Save all evidence of abuse — texts, photos, voicemails. VAWA applies to spouses of both US citizens and LPRs. You can file even after divorce if you file within 2 years. The prima facie determination lets you get work authorization while the case is pending.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-765"],
  },
  {
    caseType: "vawa",
    countryOfOrigin: "India",
    outcome: "denied",
    year: "2023",
    court: "USCIS Vermont Service Center (VAWA unit)",
    narrative:
      "Filed VAWA self-petition claiming emotional abuse by US citizen spouse. USCIS found the evidence insufficient to establish battery or extreme cruelty. The personal declaration described general marital conflict but did not detail specific incidents rising to the level of extreme cruelty. No police reports, medical records, or third-party corroboration was provided.",
    documentsUsed: [
      "I-360",
      "Personal declaration",
      "Marriage certificate",
    ],
    keyFactors:
      "Insufficient evidence of battery or extreme cruelty. General descriptions of arguments and unhappiness did not meet the legal standard.",
    lessonsLearned:
      "VAWA requires showing battery or extreme cruelty — not just an unhappy marriage. Be specific about incidents in your declaration. Corroborating evidence (medical, police, counselor, witness statements) strengthens the case significantly. Consult a VAWA-experienced attorney.",
    timelineMonths: 12,
    lawyerUsed: false,
    formsUsed: ["I-360"],
    denialReasons: "Insufficient evidence of battery or extreme cruelty. Personal declaration lacked specific incidents. No corroborating evidence.",
  },

  // ============================================================
  // SIJS (2 cases)
  // ============================================================
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
  {
    caseType: "sijs",
    countryOfOrigin: "El Salvador",
    outcome: "approved",
    year: "2023",
    court: "USCIS Nebraska Service Center",
    narrative:
      "17-year-old placed in foster care after arriving unaccompanied. State juvenile court issued SIJS predicate order based on parental neglect. I-360 approved. I-485 filed but delayed due to visa backlog for El Salvador (EB-4 category). Received deferred action and work authorization while waiting. I-485 approved after visa number became available.",
    documentsUsed: [
      "I-360",
      "I-485",
      "State court SIJS order",
      "Foster care records",
      "Birth certificate",
      "School records",
      "Guardian ad litem report",
    ],
    keyFactors:
      "Filing the I-360 before turning 21 was critical. The visa backlog for El Salvador meant a wait for the I-485, but deferred action provided protection during that time.",
    lessonsLearned:
      "Some countries have visa backlogs for SIJS (EB-4 category). Even if you cannot immediately adjust status, file the I-360 before turning 21 to preserve eligibility. You can get work authorization while waiting.",
    timelineMonths: 30,
    lawyerUsed: true,
    formsUsed: ["I-360", "I-485", "I-765"],
  },

  // ============================================================
  // TPS (3 cases)
  // ============================================================
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
  {
    caseType: "tps",
    countryOfOrigin: "Venezuela",
    outcome: "approved",
    year: "2024",
    court: "USCIS",
    narrative:
      "Venezuelan national who entered the US in 2022. Applied for TPS when Venezuela was redesignated with a new qualifying date. Submitted evidence of nationality, physical presence, and continuous residence. Work permit approved in 6 months. Has been maintaining TPS status since.",
    documentsUsed: [
      "I-821",
      "I-765",
      "Venezuelan passport",
      "Lease agreement",
      "Utility bills",
      "Bank statements showing US transactions",
    ],
    keyFactors:
      "Having clear evidence of nationality and US presence during the qualifying period was essential. Filing during the initial registration period for the redesignation.",
    lessonsLearned:
      "TPS designations and redesignations happen periodically — monitor USCIS announcements for your country. Keep all documentation proving your presence in the US. A brief trip abroad can break continuous presence requirements.",
    timelineMonths: 6,
    lawyerUsed: false,
    formsUsed: ["I-821", "I-765"],
  },
  {
    caseType: "tps",
    countryOfOrigin: "Ukraine",
    outcome: "approved",
    year: "2024",
    court: "USCIS",
    narrative:
      "Ukrainian national in the US on a student visa when the Russian invasion began. Applied for TPS when Ukraine was designated. Filed I-821 and I-765. Approved quickly given the emergency designation. Able to work while continuing studies. Plans to apply for TPS re-registration when the current designation expires.",
    documentsUsed: [
      "I-821",
      "I-765",
      "Ukrainian passport",
      "I-20 (student status)",
      "University enrollment verification",
      "Lease",
    ],
    keyFactors:
      "Emergency TPS designation for Ukraine had expedited processing. Being in valid status at the time of designation simplified the application.",
    lessonsLearned:
      "TPS can be combined with other statuses. You can maintain F-1 student status alongside TPS. TPS provides work authorization even for students who might otherwise have limited work options.",
    timelineMonths: 3,
    lawyerUsed: false,
    formsUsed: ["I-821", "I-765"],
  },

  // ============================================================
  // DACA (3 cases)
  // ============================================================
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
  {
    caseType: "daca",
    countryOfOrigin: "South Korea",
    outcome: "approved",
    year: "2024",
    court: "USCIS",
    narrative:
      "Brought to the US as a child at age 5. Original DACA recipient since 2012. Has renewed 6 times without issue. College graduate working as a registered nurse. Filed renewal on time each period. Currently exploring whether any path to permanent residence might be available through employer sponsorship.",
    documentsUsed: [
      "I-821D",
      "I-765",
      "College diploma",
      "Nursing license",
      "Employment letter",
      "Tax returns",
    ],
    keyFactors:
      "Consistent renewal history and clean record. Steady employment and education strengthen the profile.",
    lessonsLearned:
      "DACA is temporary but renewable. Build your career and education while maintaining DACA. Some DACA recipients may have paths to permanent residence through employer sponsorship or marriage, but the legal landscape is complex — consult an attorney.",
    timelineMonths: 4,
    lawyerUsed: false,
    formsUsed: ["I-821D", "I-765"],
  },
  {
    caseType: "daca",
    countryOfOrigin: "Honduras",
    outcome: "denied",
    year: "2023",
    court: "USCIS",
    narrative:
      "Applied for initial DACA (first-time applicant) after a federal court ruling temporarily allowed new applications. USCIS processed the application but a subsequent court order blocked initial DACA grants. Application was denied based on the injunction. Currently in legal limbo waiting for further court rulings.",
    documentsUsed: [
      "I-821D",
      "I-765",
      "Evidence of continuous presence since 2007",
      "School records",
      "Birth certificate",
    ],
    keyFactors:
      "The ongoing federal litigation has blocked new DACA grants. Renewal applications for existing recipients continue to be processed.",
    lessonsLearned:
      "DACA's future depends on court rulings and potential legislation. First-time applicants face uncertainty. Stay informed through organizations like United We Dream and NILC. Keep gathering and preserving evidence of your eligibility in case the program reopens to new applicants.",
    timelineMonths: 8,
    lawyerUsed: true,
    formsUsed: ["I-821D", "I-765"],
    denialReasons: "Federal court injunction blocking initial DACA grants. Application could not be approved under current court orders.",
  },

  // ============================================================
  // NATURALIZATION (4 cases)
  // ============================================================
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
  {
    caseType: "naturalization",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2025",
    court: "USCIS Los Angeles Field Office",
    narrative:
      "LPR for 7 years. Filed N-400 after meeting the 5-year requirement. Had two brief trips abroad totaling 8 months over the 5-year period. USCIS questioned continuous residence but trips were under 6 months each. Passed civics and English tests on first attempt. Approved and took oath of citizenship at a naturalization ceremony with 500 other new citizens.",
    documentsUsed: [
      "N-400",
      "Green card",
      "Passport with travel stamps",
      "Tax returns (5 years)",
      "Employment records",
    ],
    keyFactors:
      "Each trip abroad was under 6 months, preserving continuous residence. Maintaining US employment and tax filing during trips was important.",
    lessonsLearned:
      "Any single trip over 6 months breaks continuous residence. Trips over 1 year break physical presence. Keep records of all travel. Apply for a re-entry permit before any extended travel.",
    timelineMonths: 8,
    lawyerUsed: false,
    formsUsed: ["N-400"],
  },
  {
    caseType: "naturalization",
    countryOfOrigin: "Ethiopia",
    outcome: "denied",
    year: "2024",
    court: "USCIS Washington DC Field Office",
    narrative:
      "Filed N-400. During the interview, USCIS discovered an unreported arrest from 8 years ago. Although charges were dropped, failure to disclose the arrest on the N-400 was considered a misrepresentation. Application denied for lack of good moral character. Advised to refile after the statutory period with full disclosure.",
    documentsUsed: [
      "N-400",
      "Green card",
      "Tax returns",
    ],
    keyFactors:
      "Failure to disclose the arrest was the sole reason for denial. USCIS conducts background checks and will discover arrests even if charges were dropped.",
    lessonsLearned:
      "Always disclose everything on the N-400, including arrests where charges were dropped or expunged. USCIS asks about arrests, not convictions. Hiding information is worse than disclosing a minor issue. Get a certified copy of your criminal record before filing.",
    timelineMonths: 6,
    lawyerUsed: false,
    formsUsed: ["N-400"],
    denialReasons: "Lack of good moral character due to failure to disclose arrest on application. Considered a material misrepresentation.",
  },
  {
    caseType: "naturalization",
    countryOfOrigin: "Philippines",
    outcome: "approved",
    year: "2024",
    court: "USCIS New York Field Office",
    narrative:
      "LPR for 20 years. Over 50 years old with 20+ years as LPR, qualifying for the 55/15 civics test exemption (test in native language). Passed the civics test in Tagalog with an interpreter. English test waived. Interview was straightforward. Approved and took oath 6 weeks later.",
    documentsUsed: [
      "N-400",
      "Green card",
      "Tax returns (5 years)",
      "Passport",
      "Birth certificate",
    ],
    keyFactors:
      "The 55/15 exemption allowed the civics test to be taken in Tagalog, removing the English barrier. Long residence and clean record made the case straightforward.",
    lessonsLearned:
      "If you are 55+ with 15+ years as LPR, you qualify for the 55/15 exemption. If you are 50+ with 20+ years as LPR, you qualify for the 50/20 exemption. Both allow the civics test in your native language. Study the 20 designated questions for these exemptions — they are a subset of the standard 100.",
    timelineMonths: 5,
    lawyerUsed: false,
    formsUsed: ["N-400"],
  },

  // ============================================================
  // H-1B (4 cases)
  // ============================================================
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
  {
    caseType: "h1b",
    countryOfOrigin: "India",
    outcome: "denied",
    year: "2024",
    court: "USCIS California Service Center",
    narrative:
      "IT consulting company filed H-1B for systems analyst to be placed at a client site. USCIS denied the petition finding that the petitioner did not establish a valid employer-employee relationship because the beneficiary would be working at a third-party site. The itinerary of work was insufficiently detailed. RFE response did not resolve the concerns.",
    documentsUsed: [
      "I-129",
      "Labor Condition Application",
      "Client contracts",
      "Work itinerary",
      "Employer letter",
    ],
    keyFactors:
      "Third-party placement H-1Bs face heightened scrutiny. USCIS required detailed evidence of the employer's control over the work, specific project details, and end-client confirmation.",
    lessonsLearned:
      "H-1B petitions for consulting or staffing arrangements face extra scrutiny. Provide detailed client letters, specific project descriptions, and clear evidence of the petitioner's control over the work. Consider whether a direct employer petition would be stronger.",
    timelineMonths: 6,
    lawyerUsed: true,
    formsUsed: ["I-129"],
    denialReasons: "Failure to establish valid employer-employee relationship. Insufficient detail on third-party placement. Itinerary not specific enough.",
    rfesReceived: "RFE requesting evidence of employer-employee relationship, specific work itinerary, and end-client letter confirming assignment.",
  },
  {
    caseType: "h1b",
    countryOfOrigin: "China",
    outcome: "approved",
    year: "2025",
    court: "USCIS Vermont Service Center",
    narrative:
      "Mechanical engineer with a master's degree from a US university. Selected in the H-1B lottery under the advanced degree exemption (master's cap). Employer filed with premium processing. Approved without RFE in 15 business days. Started work on October 1.",
    documentsUsed: [
      "I-129",
      "Labor Condition Application",
      "US master's degree diploma and transcripts",
      "Job offer letter",
      "Employer financials",
    ],
    keyFactors:
      "US advanced degree provided better lottery odds under the master's cap. Straightforward specialty occupation with a clear degree-to-job match eliminated RFE risk.",
    lessonsLearned:
      "A US master's degree gives you two chances in the H-1B lottery (regular and advanced degree caps). Engineering roles with clear degree requirements tend to have fewer RFE issues. Premium processing gives you a decision in 15 business days.",
    timelineMonths: 2,
    lawyerUsed: true,
    formsUsed: ["I-129"],
  },
  {
    caseType: "h1b",
    countryOfOrigin: "Brazil",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Financial analyst at a major bank. Cap-exempt H-1B filed because the petitioner is a nonprofit research organization affiliated with a university. No lottery required. Petition filed and approved in 3 months without premium processing. Able to start immediately without waiting for October 1.",
    documentsUsed: [
      "I-129",
      "Labor Condition Application",
      "Evidence of cap-exempt status (nonprofit determination letter)",
      "Job description",
      "Degree and transcripts",
    ],
    keyFactors:
      "Cap-exempt status meant no lottery and immediate filing availability. Clear specialty occupation match with a finance degree.",
    lessonsLearned:
      "H-1B cap exemptions exist for nonprofits, universities, and government research organizations. These employers can file H-1B petitions at any time and are not subject to the annual lottery. Consider cap-exempt employers if you cannot get selected in the lottery.",
    timelineMonths: 3,
    lawyerUsed: true,
    formsUsed: ["I-129"],
  },

  // ============================================================
  // L-1 (2 cases)
  // ============================================================
  {
    caseType: "l1",
    countryOfOrigin: "Japan",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Senior manager at a Japanese technology company. Transferred to the US subsidiary under L-1A. Had worked at the parent company for 5 years in a managerial role. Petition filed with premium processing. Approved in 10 business days. Entered the US and began work at the US office.",
    documentsUsed: [
      "I-129 with L supplement",
      "Evidence of qualifying relationship between companies",
      "Organizational charts (Japan and US)",
      "Job descriptions (Japan and US)",
      "Payroll records from Japan",
      "Company registration documents",
    ],
    keyFactors:
      "Clear managerial role with direct reports in both the foreign and US positions. Well-documented corporate relationship between parent and subsidiary.",
    lessonsLearned:
      "L-1A is for managers and executives, L-1B is for specialized knowledge workers. You must have worked for the related foreign company for at least 1 year in the past 3 years. Organizational charts are critical evidence.",
    timelineMonths: 1,
    lawyerUsed: true,
    formsUsed: ["I-129"],
  },
  {
    caseType: "l1",
    countryOfOrigin: "United Kingdom",
    outcome: "denied",
    year: "2023",
    court: "USCIS California Service Center",
    narrative:
      "Software developer at a UK tech company filed L-1B for specialized knowledge. USCIS denied the petition finding that the beneficiary's knowledge was not sufficiently specialized — the skills described (Python, AWS, React) were common industry skills, not proprietary to the company. An RFE was issued and the response did not adequately distinguish the beneficiary's knowledge.",
    documentsUsed: [
      "I-129 with L supplement",
      "Job description",
      "Evidence of proprietary technology",
      "Organizational chart",
      "Training records",
    ],
    keyFactors:
      "L-1B specialized knowledge must be truly specialized to the petitioning organization, not just general industry expertise. Common programming skills do not qualify.",
    lessonsLearned:
      "L-1B specialized knowledge petitions are frequently denied. Focus on knowledge of proprietary systems, processes, or products unique to the company. General industry skills are not enough. Consider H-1B as an alternative if the knowledge is not truly specialized.",
    timelineMonths: 4,
    lawyerUsed: true,
    formsUsed: ["I-129"],
    denialReasons: "Specialized knowledge not established. Skills described are common industry skills, not proprietary to the petitioner.",
    rfesReceived: "RFE requesting evidence that beneficiary possesses specialized knowledge unique to the petitioning organization.",
  },

  // ============================================================
  // O-1 (3 cases)
  // ============================================================
  {
    caseType: "o1",
    countryOfOrigin: "Argentina",
    outcome: "approved",
    year: "2024",
    court: "USCIS Vermont Service Center",
    narrative:
      "Professional soccer player transferred to a US club. Filed O-1A for extraordinary ability in athletics. Evidence included national team appearances, international competition results, significant media coverage, and high salary relative to peers. Advisory opinion from the players' union supported the petition. Approved with premium processing.",
    documentsUsed: [
      "I-129 with O supplement",
      "Advisory opinion from MLSPA",
      "National team records",
      "Media articles",
      "Contract showing high compensation",
      "Awards and honors",
    ],
    keyFactors:
      "National team selection and international competition results clearly demonstrated extraordinary ability. Media coverage from major outlets was well-documented.",
    lessonsLearned:
      "O-1A for athletes requires evidence of sustained national or international acclaim. An advisory opinion from the relevant labor union or peer group is required. Gather media coverage systematically — create a press portfolio.",
    timelineMonths: 2,
    lawyerUsed: true,
    formsUsed: ["I-129"],
  },
  {
    caseType: "o1",
    countryOfOrigin: "Nigeria",
    outcome: "approved",
    year: "2025",
    court: "USCIS Vermont Service Center",
    narrative:
      "Award-winning filmmaker. Filed O-1B for extraordinary ability in the arts. Evidence included two international film festival awards, critical reviews in major publications, credits as director on commercially successful films, and a high salary compared to peers. Advisory opinion from a film industry peer group supported the petition.",
    documentsUsed: [
      "I-129 with O supplement",
      "Advisory opinion from film industry group",
      "Festival awards and nominations",
      "Critical reviews",
      "Film credits (IMDb, production records)",
      "Box office data",
      "Recommendation letters",
    ],
    keyFactors:
      "International film festival awards were strong evidence of distinction. Critical reviews in recognized publications demonstrated recognition beyond the applicant's home country.",
    lessonsLearned:
      "O-1B for arts requires distinction, which is a lower standard than O-1A extraordinary ability. Focus on awards, critical recognition, and commercial success. The advisory opinion can come from a peer group, labor organization, or management organization in your field.",
    timelineMonths: 3,
    lawyerUsed: true,
    formsUsed: ["I-129"],
  },
  {
    caseType: "o1",
    countryOfOrigin: "Russia",
    outcome: "denied",
    year: "2024",
    court: "USCIS California Service Center",
    narrative:
      "Software startup founder filed O-1A for extraordinary ability in business/technology. USCIS found the evidence did not meet at least 3 of the required criteria. The startup had limited revenue, no major press coverage, and the recommendation letters were from personal contacts rather than independent experts. Denied after RFE response was insufficient.",
    documentsUsed: [
      "I-129 with O supplement",
      "Business plan",
      "Revenue documentation",
      "Recommendation letters",
      "Patent application",
      "Conference presentation records",
    ],
    keyFactors:
      "Insufficient evidence of extraordinary ability. Startup metrics were too early-stage. Recommendation letters lacked independence. No major awards or significant media coverage.",
    lessonsLearned:
      "O-1A has a high bar. Early-stage startups may struggle to show extraordinary ability. Build a track record of measurable achievements before applying. Independent recommendation letters from recognized experts carry far more weight than letters from collaborators or friends.",
    timelineMonths: 5,
    lawyerUsed: true,
    formsUsed: ["I-129"],
    denialReasons: "Failed to establish extraordinary ability. Insufficient evidence for at least 3 criteria. Recommendation letters not from independent experts.",
    rfesReceived: "RFE requesting additional evidence of extraordinary ability including independent expert opinions and evidence of sustained acclaim.",
  },

  // ============================================================
  // VOLUNTARY DEPARTURE (2 cases)
  // ============================================================
  {
    caseType: "voluntary-departure",
    countryOfOrigin: "Ecuador",
    outcome: "approved",
    year: "2024",
    court: "New York Immigration Court",
    narrative:
      "In removal proceedings after visa overstay. No relief available. Requested voluntary departure instead of a formal removal order. Judge granted 60 days to depart. Applicant departed within the deadline and avoided a formal removal order, preserving the ability to apply for future visas.",
    documentsUsed: [
      "Passport",
      "Evidence of financial ability to depart (bank statement)",
      "Flight itinerary",
    ],
    keyFactors:
      "Good moral character and no criminal history. Demonstrated ability to pay for departure. Having a valid passport was essential.",
    lessonsLearned:
      "Voluntary departure avoids a formal removal order, which carries a 5 or 10-year bar on reentry. You must actually depart within the granted period — failure to depart converts it to a removal order with additional penalties. Always have your passport ready.",
    timelineMonths: 6,
    lawyerUsed: true,
    formsUsed: [],
  },
  {
    caseType: "voluntary-departure",
    countryOfOrigin: "Peru",
    outcome: "denied",
    year: "2023",
    court: "Chicago Immigration Court",
    narrative:
      "Requested voluntary departure but had a prior DUI conviction. Judge denied voluntary departure due to concerns about good moral character. Formal removal order was issued instead. The applicant now faces a 10-year bar on reentry.",
    documentsUsed: [
      "Passport",
      "DUI court records",
      "Evidence of rehabilitation",
    ],
    keyFactors:
      "The DUI conviction undermined the good moral character requirement for voluntary departure. Even a single DUI can disqualify you.",
    lessonsLearned:
      "Voluntary departure requires good moral character. Criminal convictions, even misdemeanors like DUI, can be disqualifying. If you have any criminal history, consult an attorney about whether voluntary departure is still available.",
    timelineMonths: 8,
    lawyerUsed: false,
    formsUsed: [],
    denialReasons: "Failure to establish good moral character due to DUI conviction.",
  },

  // ============================================================
  // MOTION TO REOPEN (3 cases)
  // ============================================================
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
  {
    caseType: "motion-to-reopen",
    countryOfOrigin: "Albania",
    outcome: "approved",
    year: "2024",
    court: "Board of Immigration Appeals",
    narrative:
      "Original asylum case denied in 2015. Filed motion to reopen based on changed country conditions in Albania — increased persecution of the applicant's ethnic minority group. Submitted new country conditions evidence, updated State Department reports, and new expert affidavits. BIA granted the motion. Case remanded to immigration court for new hearing.",
    documentsUsed: [
      "Motion to Reopen brief",
      "Updated country conditions reports",
      "State Department Human Rights Report",
      "New expert affidavit",
      "News articles documenting changed conditions",
    ],
    keyFactors:
      "The changed country conditions exception allows motions to reopen beyond the normal 90-day deadline. The new evidence had to be material and not previously available.",
    lessonsLearned:
      "If country conditions have worsened since your case was decided, you may be able to reopen your case regardless of how long ago it was denied. The evidence must be material and must not have been available at the time of the original hearing. Monitor conditions in your home country.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: [],
  },
  {
    caseType: "motion-to-reopen",
    countryOfOrigin: "Nigeria",
    outcome: "denied",
    year: "2023",
    court: "Board of Immigration Appeals",
    narrative:
      "Filed motion to reopen 2 years after removal order, claiming ineffective assistance of counsel. However, the motion did not comply with the Lozada requirements — no bar complaint was filed against the prior attorney, and the prior attorney was not given an opportunity to respond. BIA denied the motion as procedurally deficient.",
    documentsUsed: [
      "Motion to Reopen brief",
      "Prior case record",
      "Declaration describing counsel's failures",
    ],
    keyFactors:
      "The Lozada requirements are strict procedural prerequisites for ineffective assistance of counsel claims. Failure to follow them is fatal to the motion.",
    lessonsLearned:
      "To claim ineffective assistance of counsel, you must follow the Matter of Lozada steps: (1) file a detailed affidavit, (2) give prior counsel notice and opportunity to respond, and (3) file a bar complaint (or explain why not). These steps are mandatory. Consult a new attorney before filing.",
    timelineMonths: 10,
    lawyerUsed: false,
    formsUsed: [],
    denialReasons: "Failure to comply with Matter of Lozada requirements. No bar complaint filed. Prior counsel not given opportunity to respond.",
  },

  // ============================================================
  // K-1 FIANCE (3 cases)
  // ============================================================
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Ukraine",
    outcome: "approved",
    year: "2024",
    court: "US Embassy (processed Warsaw due to conflict)",
    narrative:
      "US citizen petitioned for fiance. I-129F filed. Processing delayed due to consulate closure — rerouted through Warsaw, Poland. Medical exam completed in Poland. Visa issued. Entered US, married within 90 days. Filed I-485 for adjustment of status. Approved.",
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
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Colombia",
    outcome: "approved",
    year: "2025",
    court: "US Embassy Bogota",
    narrative:
      "US citizen filed I-129F for Colombian fiance. Met during a trip to Colombia and maintained a long-distance relationship for 2 years with regular visits. Submitted extensive evidence of relationship including flight records, WhatsApp communication history, photos together, and affidavits from friends and family. Approved at the Bogota embassy interview. Married in the US 60 days after entry.",
    documentsUsed: [
      "I-129F",
      "I-485",
      "I-864",
      "I-693",
      "Flight records showing mutual visits",
      "WhatsApp communication logs",
      "Relationship photos",
      "Affidavits from friends and family",
    ],
    keyFactors:
      "Extensive communication records and multiple in-person visits demonstrated a genuine relationship. Meeting the in-person requirement was well-documented with passport stamps and flight records.",
    lessonsLearned:
      "Document everything from the start of the relationship. Save communication records, travel records, and photos. The K-1 requires meeting in person within 2 years of filing. Plan your wedding before the K-1 entry — you only have 90 days.",
    timelineMonths: 14,
    lawyerUsed: false,
    formsUsed: ["I-129F", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Morocco",
    outcome: "denied",
    year: "2024",
    court: "US Embassy Casablanca",
    narrative:
      "US citizen filed I-129F for Moroccan fiance. I-129F was approved by USCIS but the visa was denied at the consular interview. The consular officer found that the couple had not met in person within the required 2-year period — the meeting they claimed was not supported by passport stamps or travel records. The decision was based on INA 214(b) and the in-person meeting requirement.",
    documentsUsed: [
      "I-129F",
      "Photos",
      "Communication records",
      "Affidavits",
    ],
    keyFactors:
      "Failure to prove the in-person meeting was the sole reason for denial. Passport stamps did not corroborate the claimed meeting dates.",
    lessonsLearned:
      "The in-person meeting requirement for K-1 is strict. Keep your passport stamped when visiting your fiance's country. If you meet in a third country, bring documentation. Consular denials are difficult to appeal — consider refiling with stronger evidence.",
    timelineMonths: 16,
    lawyerUsed: false,
    formsUsed: ["I-129F"],
    denialReasons: "Failure to establish that the petitioner and beneficiary met in person within the 2-year period. Insufficient documentary evidence of meeting.",
  },
];
