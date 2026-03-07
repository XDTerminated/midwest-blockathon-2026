import type { CaseRecord } from "@immivault/shared";

export const K1_CASES: CaseRecord[] = [
  // ============================================================
  // APPROVED CASES (39 cases, ~65%)
  // ============================================================
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Philippines",
    outcome: "approved",
    year: "2023",
    court: "US Embassy Manila",
    narrative:
      "Petitioner and beneficiary met during a vacation in Cebu and maintained a long-distance relationship for two years. They provided extensive chat logs, video call records, and photos from three in-person visits. Approved after a routine consular interview with no RFE.",
    documentsUsed: [
      "I-129F",
      "Passport copies",
      "Birth certificates",
      "Photos of couple together",
      "Chat logs and call records",
      "Flight itineraries",
      "Hotel receipts",
    ],
    keyFactors:
      "Multiple in-person visits with thorough documentation and consistent communication history strengthened the petition.",
    lessonsLearned:
      "Keep organized records of all visits and communications from the start of the relationship. Consular officers at Manila are experienced with K-1 cases and appreciate well-organized evidence packets.",
    timelineMonths: 11,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Colombia",
    outcome: "approved",
    year: "2024",
    court: "US Embassy Bogota",
    narrative:
      "Couple met through a mutual friend while petitioner was working in Bogota. They visited each other four times over 18 months before filing. Strong financial evidence and employer verification letter supported the I-864.",
    documentsUsed: [
      "I-129F",
      "Proof of in-person meeting",
      "Joint travel photos",
      "Phone records",
      "Petitioner tax returns",
      "Employer verification letter",
      "I-864 financial documents",
    ],
    keyFactors:
      "The petitioner exceeded the income threshold significantly, and the couple had met multiple times with well-documented visits.",
    lessonsLearned:
      "Having income well above the 125% poverty guideline threshold reduces scrutiny on the financial side and lets the officer focus on the bona fide relationship.",
    timelineMonths: 9,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Ukraine",
    outcome: "approved",
    year: "2022",
    court: "US Embassy Kyiv",
    narrative:
      "Filed shortly before embassy operations were disrupted. The case was transferred to Warsaw for consular processing. Beneficiary provided evidence of genuine relationship including joint vacation photos and notarized affidavits from friends and family.",
    documentsUsed: [
      "I-129F",
      "Relationship timeline",
      "Affidavits from friends",
      "Travel receipts",
      "Photos from visits",
      "Communication records",
    ],
    keyFactors:
      "Despite the embassy transfer to Warsaw, the case proceeded smoothly due to comprehensive documentation prepared in advance.",
    lessonsLearned:
      "Geopolitical events can cause unexpected transfers. Keep all original documents accessible and be prepared to travel to an alternate embassy location.",
    timelineMonths: 16,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Brazil",
    outcome: "approved",
    year: "2023",
    court: "US Embassy Bogota",
    narrative:
      "Petitioner and beneficiary met at a tech conference in Sao Paulo. After a year of video calls and two visits, they filed the I-129F. The consular interview in Bogota was brief and approval came the same day.",
    documentsUsed: [
      "I-129F",
      "Conference registration receipts",
      "Flight records",
      "Video call screenshots",
      "WhatsApp chat exports",
      "Joint photos",
    ],
    keyFactors:
      "Clear documentation of how the couple initially met at a verifiable public event added credibility to the relationship narrative.",
    lessonsLearned:
      "Having a clear, verifiable story of how you met makes the consular interview smoother. Keep receipts from the event or trip where you first met.",
    timelineMonths: 10,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Thailand",
    outcome: "approved",
    year: "2024",
    court: "US Embassy Bangkok",
    narrative:
      "Petitioner traveled to Thailand three times over two years to visit beneficiary. They submitted over 200 pages of LINE messenger conversations and video call logs. Received a 221(g) for additional financial documents but was approved two weeks after responding.",
    documentsUsed: [
      "I-129F",
      "LINE chat logs",
      "Video call records",
      "Bank statements",
      "Tax transcripts",
      "Travel photos",
      "Boarding passes",
    ],
    keyFactors:
      "Volume and consistency of communication evidence demonstrated a genuine ongoing relationship despite the 221(g) administrative processing delay.",
    lessonsLearned:
      "A 221(g) is not a denial. Respond promptly with exactly what is requested. Bangkok embassy commonly issues 221(g) for supplemental financial documentation.",
    timelineMonths: 13,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
    rfesReceived: "221(g) requesting updated bank statements and tax transcripts to verify income meets poverty guideline threshold.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Dominican Republic",
    outcome: "approved",
    year: "2021",
    court: "US Embassy Santo Domingo",
    narrative:
      "Petitioner of Dominican descent met beneficiary during a family visit to Santo Domingo. They maintained the relationship through daily video calls for a year. Strong family support letters and cultural ties bolstered the case.",
    documentsUsed: [
      "I-129F",
      "Family letters of support",
      "Call records",
      "Photos with extended family",
      "Petitioner's Dominican heritage documents",
      "Travel itineraries",
    ],
    keyFactors:
      "Shared cultural background and strong family endorsement on both sides made the relationship highly credible to the consular officer.",
    lessonsLearned:
      "Letters from family members who have witnessed the relationship in person carry significant weight, especially when they include specific details about interactions they observed.",
    timelineMonths: 8,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Nigeria",
    outcome: "approved",
    year: "2024",
    court: "US Embassy Lagos",
    narrative:
      "Couple met at a church conference in Lagos. Petitioner visited Nigeria twice, and beneficiary visited the US once on a tourist visa. Comprehensive evidence package included pastoral letters, photos, and a detailed relationship timeline.",
    documentsUsed: [
      "I-129F",
      "Church conference documentation",
      "Pastoral reference letter",
      "Tourist visa records",
      "Joint photos from both countries",
      "Relationship timeline",
      "I-864 with co-sponsor",
    ],
    keyFactors:
      "The beneficiary's prior legal entry and departure from the US on a tourist visa demonstrated non-immigrant intent and strengthened credibility.",
    lessonsLearned:
      "If the beneficiary has previously visited the US and departed on time, highlight this fact. It shows the consular officer that the beneficiary respects immigration rules.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Japan",
    outcome: "approved",
    year: "2023",
    court: "US Embassy Tokyo",
    narrative:
      "Petitioner was stationed at a US military base in Japan where they met the beneficiary. After two years of dating, they filed the K-1 petition. Military service records and base access logs corroborated the in-person meeting requirement.",
    documentsUsed: [
      "I-129F",
      "Military service records",
      "Base access documentation",
      "Joint photos",
      "Communication records",
      "Petitioner's tax returns",
    ],
    keyFactors:
      "Military-connected K-1 cases benefit from official records that independently verify the couple's proximity and meetings.",
    lessonsLearned:
      "Service members should obtain official documentation of their overseas assignment early. Base access records and duty station orders serve as strong corroborating evidence.",
    timelineMonths: 7,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Mexico",
    outcome: "approved",
    year: "2022",
    court: "US Embassy Bogota",
    narrative:
      "Cross-border couple living in San Diego and Tijuana met through work in the same industry. They provided extensive evidence of weekend visits, shared social media presence, and letters from coworkers who witnessed the relationship develop.",
    documentsUsed: [
      "I-129F",
      "Border crossing records",
      "Social media printouts",
      "Coworker affidavits",
      "Joint photos",
      "Phone records",
    ],
    keyFactors:
      "Frequent documented border crossings and third-party affidavits from colleagues who observed the relationship over time were decisive.",
    lessonsLearned:
      "For cross-border relationships, SENTRI or Global Entry records can serve as excellent proof of frequent visits. Coworker statements add an independent layer of verification.",
    timelineMonths: 10,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Ghana",
    outcome: "approved",
    year: "2024",
    court: "US Embassy Accra",
    narrative:
      "Petitioner traveled to Accra twice to meet the beneficiary, who they initially connected with through a Ghanaian diaspora community event in New York. The consular officer asked detailed questions about daily routines and future wedding plans, which the beneficiary answered confidently.",
    documentsUsed: [
      "I-129F",
      "Diaspora event program",
      "Travel receipts",
      "Hotel bookings",
      "WhatsApp messages",
      "Wedding venue deposit receipt",
      "I-864 financial package",
    ],
    keyFactors:
      "A deposit on a US wedding venue and detailed knowledge of wedding plans demonstrated genuine intent to marry within 90 days of entry.",
    lessonsLearned:
      "Having concrete wedding plans with verifiable deposits or bookings signals to the consular officer that the couple is serious and prepared for the 90-day marriage requirement.",
    timelineMonths: 12,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Russia",
    outcome: "approved",
    year: "2021",
    court: "US Embassy Moscow",
    narrative:
      "Couple met on an international dating platform and transitioned to daily video calls within weeks. Petitioner visited Moscow twice before filing. Approved despite increased scrutiny on Russia-origin K-1 cases during this period.",
    documentsUsed: [
      "I-129F",
      "Dating platform registration records",
      "Video call logs",
      "Flight and hotel records",
      "Photos from visits",
      "Notarized relationship affidavits",
    ],
    keyFactors:
      "Transitioning from the dating platform to independent communication channels early and documenting that progression showed organic relationship development.",
    lessonsLearned:
      "Document the progression of your relationship from initial contact through engagement. Officers want to see natural evolution, not just a snapshot.",
    timelineMonths: 15,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Vietnam",
    outcome: "approved",
    year: "2023",
    court: "US Embassy Phnom Penh",
    narrative:
      "Petitioner of Vietnamese-American heritage met the beneficiary through family introductions during a Tet celebration in Ho Chi Minh City. Two subsequent visits and a formal engagement ceremony attended by both families preceded the filing.",
    documentsUsed: [
      "I-129F",
      "Engagement ceremony photos and video",
      "Family introduction letters",
      "Travel records",
      "Phone records",
      "Petitioner's naturalization certificate",
    ],
    keyFactors:
      "A traditional engagement ceremony with both families present provided strong cultural evidence of a bona fide relationship.",
    lessonsLearned:
      "Cultural engagement or betrothal ceremonies carry weight as evidence. Photograph and video-record these events and obtain statements from attendees.",
    timelineMonths: 11,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "United Kingdom",
    outcome: "approved",
    year: "2022",
    court: "US Embassy London",
    narrative:
      "Couple met while studying abroad at the same university program in Spain. After graduation, they maintained a transatlantic relationship for two years with alternating visits. London embassy processed the case efficiently with minimal questions.",
    documentsUsed: [
      "I-129F",
      "University enrollment records",
      "Study abroad program documentation",
      "Flight records for visits",
      "Joint travel photos",
      "Communication records",
    ],
    keyFactors:
      "Shared academic history with verifiable institutional records provided objective evidence of when and how the relationship began.",
    lessonsLearned:
      "University records, class rosters, or program enrollment documentation can serve as independent evidence of how a couple met in a third country.",
    timelineMonths: 6,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "South Korea",
    outcome: "approved",
    year: "2025",
    court: "US Embassy Seoul",
    narrative:
      "Petitioner met the beneficiary while teaching English in Seoul. After returning to the US, they continued the relationship for 18 months before filing. Included KakaoTalk chat history spanning the entire relationship.",
    documentsUsed: [
      "I-129F",
      "Teaching contract in Korea",
      "KakaoTalk chat exports",
      "Visit photos",
      "Boarding passes",
      "Tax returns",
      "Engagement ring receipt",
    ],
    keyFactors:
      "Employment records in South Korea independently confirmed the petitioner's presence during the period they claimed to have met.",
    lessonsLearned:
      "Former employment records abroad can serve as strong corroborating evidence for the in-person meeting requirement. Seoul embassy processes K-1 cases relatively quickly.",
    timelineMonths: 8,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Morocco",
    outcome: "approved",
    year: "2024",
    court: "US Embassy Casablanca",
    narrative:
      "Couple met while the petitioner was traveling through Morocco. After the initial trip, petitioner returned twice for extended visits. Received a 221(g) for additional relationship evidence but was approved after submitting supplemental photos and affidavits.",
    documentsUsed: [
      "I-129F",
      "Travel photos from Morocco",
      "Hotel receipts",
      "Supplemental relationship affidavits",
      "Phone records",
      "Financial documents",
    ],
    keyFactors:
      "Prompt and thorough response to the 221(g) with targeted supplemental evidence directly addressing the officer's concerns led to quick approval.",
    lessonsLearned:
      "Casablanca embassy frequently issues 221(g) requests for additional evidence on K-1 cases. Prepare extra relationship evidence in advance so you can respond quickly.",
    timelineMonths: 15,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
    rfesReceived: "221(g) requesting additional evidence of bona fide relationship including more recent photos and third-party affidavits.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Peru",
    outcome: "approved",
    year: "2022",
    court: "US Embassy Lima",
    narrative:
      "Petitioner and beneficiary met through a language exchange app and began a relationship after the petitioner visited Lima. They provided a detailed relationship timeline with supporting evidence for each milestone.",
    documentsUsed: [
      "I-129F",
      "Language exchange app records",
      "Relationship timeline document",
      "Visit photos by date",
      "Call logs",
      "Gift shipping receipts",
    ],
    keyFactors:
      "A well-organized chronological timeline with evidence mapped to each milestone made the case easy for the officer to review and verify.",
    lessonsLearned:
      "Create a detailed relationship timeline as a cover document and attach corresponding evidence in the same order. This organizational approach saves the officer time and projects credibility.",
    timelineMonths: 9,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2023",
    court: "US Embassy Mumbai",
    narrative:
      "Arranged introduction through families followed by a six-month courtship with two visits to Mumbai. Both families provided detailed support letters describing the match process and engagement ceremony. Approved on first interview.",
    documentsUsed: [
      "I-129F",
      "Family introduction letters",
      "Engagement ceremony documentation",
      "Visit records",
      "WhatsApp video call logs",
      "Financial documents",
      "Petitioner's employment verification",
    ],
    keyFactors:
      "Family-arranged introductions are legitimate and well-understood by Mumbai consular officers. Detailed family letters explaining the cultural context were helpful.",
    lessonsLearned:
      "For culturally arranged relationships, provide context about the customs involved. Mumbai embassy officers are familiar with arranged introductions and view them favorably when well-documented.",
    timelineMonths: 12,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Poland",
    outcome: "approved",
    year: "2024",
    court: "US Embassy Warsaw",
    narrative:
      "Couple met at an international music festival in Krakow. Petitioner returned to Poland three times and beneficiary visited the US once. Warsaw embassy interview lasted only ten minutes before approval.",
    documentsUsed: [
      "I-129F",
      "Festival ticket stubs",
      "Travel records",
      "B-2 visa records for US visit",
      "Photos spanning two years",
      "Messenger chat history",
    ],
    keyFactors:
      "Beneficiary's prior successful US visit on B-2 visa and timely departure demonstrated credibility and non-immigrant intent history.",
    lessonsLearned:
      "Warsaw embassy tends to process K-1 cases efficiently. Having evidence of a prior lawful US visit by the beneficiary is advantageous.",
    timelineMonths: 7,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Ecuador",
    outcome: "approved",
    year: "2021",
    court: "US Embassy Quito",
    narrative:
      "Petitioner met the beneficiary while volunteering with a nonprofit in Quito. After six months of volunteering together, they began dating. Filed after returning to the US and making two additional trips back to Ecuador.",
    documentsUsed: [
      "I-129F",
      "Nonprofit volunteer records",
      "Volunteer coordinator letter",
      "Travel records",
      "Photos from volunteer work and personal time",
      "Communication logs",
    ],
    keyFactors:
      "Third-party verification from the nonprofit organization confirmed the couple's cohabitation timeline and corroborated their meeting story.",
    lessonsLearned:
      "If you met through an organization, church, or volunteer program, obtain a letter from the organization confirming your overlapping presence. This provides independent verification.",
    timelineMonths: 11,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "China",
    outcome: "approved",
    year: "2023",
    court: "US Embassy Beijing",
    narrative:
      "Petitioner and beneficiary met at a business conference in Shanghai. The relationship developed over 14 months with visits in both countries. Received a 221(g) for administrative processing that lasted six weeks before final approval.",
    documentsUsed: [
      "I-129F",
      "Business conference materials",
      "Travel records to China and US",
      "WeChat conversation exports",
      "Joint photos",
      "Financial documents",
      "I-864 with assets",
    ],
    keyFactors:
      "Administrative processing delays at Beijing are common and not cause for alarm. Complete documentation minimized the delay period.",
    lessonsLearned:
      "Beijing embassy frequently places K-1 cases in administrative processing. Budget extra time and do not panic. Respond to any document requests immediately.",
    timelineMonths: 16,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
    rfesReceived: "221(g) administrative processing for background check, resolved after six weeks without additional document requests.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Kenya",
    outcome: "approved",
    year: "2024",
    court: "US Embassy Nairobi",
    narrative:
      "Petitioner met beneficiary during a safari tour in Kenya. They maintained the relationship for a year through daily video calls. Petitioner made two additional trips to Nairobi before filing. Approved at the consular interview with no issues.",
    documentsUsed: [
      "I-129F",
      "Safari tour booking confirmation",
      "Video call records",
      "Flight records",
      "Photos from three visits",
      "Financial documents",
    ],
    keyFactors:
      "Consistent daily communication pattern over 12 months established relationship continuity between in-person visits.",
    lessonsLearned:
      "Nairobi embassy appreciates concise, well-organized petition packages. Focus on quality over quantity of evidence.",
    timelineMonths: 10,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "France",
    outcome: "approved",
    year: "2022",
    court: "US Embassy London",
    narrative:
      "Couple met on a dating app while petitioner was on a work assignment in Paris. After a 10-month relationship with monthly visits due to geographic proximity of their jobs, they filed the I-129F. London processed the case in under seven months.",
    documentsUsed: [
      "I-129F",
      "Dating app account records",
      "Eurostar and flight tickets",
      "Joint travel photos across Europe",
      "Communication records",
      "Petitioner work assignment documents",
    ],
    keyFactors:
      "Frequent documented visits, enabled by short travel distance, created a dense evidence trail that strongly supported the relationship.",
    lessonsLearned:
      "French nationals are processed through London embassy. The London post is generally efficient and familiar with Western European K-1 cases.",
    timelineMonths: 7,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Cuba",
    outcome: "approved",
    year: "2024",
    court: "US Embassy Bogota",
    narrative:
      "Due to limited consular services in Havana, the case was processed through Bogota. Beneficiary traveled to Colombia for the interview. Despite logistical challenges, the case was approved after the couple demonstrated a genuine three-year relationship.",
    documentsUsed: [
      "I-129F",
      "Travel records to third countries for visits",
      "Photos spanning three years",
      "Call records",
      "Money transfer receipts",
      "Family support letters",
    ],
    keyFactors:
      "The extended relationship duration and creative solutions for meeting in third countries despite Cuba travel restrictions demonstrated genuine commitment.",
    lessonsLearned:
      "Cuban K-1 cases require third-country consular processing. Budget extra time and funds for the beneficiary to travel to the designated embassy for the interview.",
    timelineMonths: 22,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Jamaica",
    outcome: "approved",
    year: "2023",
    court: "US Embassy Kingston",
    narrative:
      "Petitioner and beneficiary met at a wedding in Montego Bay. After a year of visits and video calls, they filed the K-1. Kingston embassy interview was straightforward, and the visa was issued within two weeks of the interview.",
    documentsUsed: [
      "I-129F",
      "Wedding invitation and photos",
      "Guest list confirming both attendees",
      "Travel records",
      "FaceTime call logs",
      "Financial documents",
    ],
    keyFactors:
      "Having independent evidence from the wedding where they met, including the guest list and event photos, provided strong corroboration.",
    lessonsLearned:
      "Kingston embassy processes K-1 cases relatively quickly. The initial meeting story should be corroborated with evidence beyond just the couple's own testimony.",
    timelineMonths: 9,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Romania",
    outcome: "approved",
    year: "2025",
    court: "US Embassy Bucharest",
    narrative:
      "Couple met through an online gaming community and transitioned to a romantic relationship after meeting in person in Bucharest. Petitioner visited Romania three times and beneficiary visited the US once before filing.",
    documentsUsed: [
      "I-129F",
      "Gaming platform account records",
      "Discord chat history",
      "Travel records for all visits",
      "B-1/B-2 visa records",
      "Joint photos",
      "Financial documents",
    ],
    keyFactors:
      "Documentation of the relationship's online origins through gaming platform records and the progression to in-person meetings showed natural relationship development.",
    lessonsLearned:
      "Online-origin relationships are common and accepted. Document the transition from online to in-person interaction clearly, with timestamps and platform records.",
    timelineMonths: 10,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Ethiopia",
    outcome: "approved",
    year: "2022",
    court: "US Embassy Addis Ababa",
    narrative:
      "Petitioner of Ethiopian descent returned to Addis Ababa for a family event where they were introduced to the beneficiary. After an 18-month courtship with four visits, they filed the K-1. The embassy approved after a standard interview.",
    documentsUsed: [
      "I-129F",
      "Family event documentation",
      "Cultural engagement ceremony records",
      "Travel records",
      "Phone and video call logs",
      "Financial package with co-sponsor",
    ],
    keyFactors:
      "Family-connected introduction with cultural engagement ceremony and co-sponsor for financial support were key elements of the successful petition.",
    lessonsLearned:
      "If the petitioner's income alone does not meet the I-864 threshold, a qualified co-sponsor with proper documentation can resolve the financial requirement without delaying the case.",
    timelineMonths: 13,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Philippines",
    outcome: "approved",
    year: "2024",
    court: "US Embassy Manila",
    narrative:
      "Second K-1 petition filed by the same petitioner after a previous relationship ended before marriage. USCIS required an explanation for the prior petition, which was provided with documentation of the previous relationship's termination. Approved after additional scrutiny.",
    documentsUsed: [
      "I-129F",
      "Explanation letter for prior petition",
      "Prior petition withdrawal documentation",
      "Current relationship evidence",
      "Communication records",
      "Financial documents",
      "In-person meeting proof",
    ],
    keyFactors:
      "Transparent disclosure and explanation of the prior K-1 petition with supporting documentation prevented the officer from viewing the new petition with suspicion.",
    lessonsLearned:
      "Prior K-1 petitions trigger additional scrutiny under IMBRA. Be proactive about disclosing and explaining previous petitions rather than waiting for USCIS to discover them.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
    rfesReceived: "RFE requesting detailed explanation of prior K-1 petition and IMBRA disclosure compliance.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Turkey",
    outcome: "approved",
    year: "2023",
    court: "US Embassy Ankara",
    narrative:
      "Petitioner met beneficiary while on a guided tour in Istanbul. They continued the relationship through daily video calls and two additional visits. Ankara embassy conducted a thorough interview but approved the case same day.",
    documentsUsed: [
      "I-129F",
      "Tour booking confirmation",
      "Travel records",
      "Video call records",
      "Photos from three visits",
      "Financial documents",
      "Petitioner's employment letter",
    ],
    keyFactors:
      "Well-prepared beneficiary who could answer detailed questions about the petitioner's daily life and future plans demonstrated genuine relationship knowledge.",
    lessonsLearned:
      "Prepare the beneficiary for interview questions about the petitioner's job, family, home, and daily routine. Consular officers use these questions to assess whether the couple truly knows each other.",
    timelineMonths: 11,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Moldova",
    outcome: "approved",
    year: "2022",
    court: "US Embassy Bucharest",
    narrative:
      "Couple met through a professional networking event when the petitioner's company expanded to Eastern Europe. The relationship developed over two years with regular visits. Bucharest embassy processed the Moldovan case without issues.",
    documentsUsed: [
      "I-129F",
      "Professional networking event records",
      "Business travel records",
      "Personal visit records after initial meeting",
      "Communication history",
      "Financial documents",
    ],
    keyFactors:
      "Clear separation between the initial professional context and subsequent personal relationship development was important for credibility.",
    lessonsLearned:
      "Moldovan nationals are processed through Bucharest. When a relationship begins in a professional context, clearly document when and how it transitioned to a personal relationship.",
    timelineMonths: 12,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Colombia",
    outcome: "approved",
    year: "2025",
    court: "US Embassy Bogota",
    narrative:
      "Petitioner traveled to Medellin for a vacation where they met the beneficiary through a local cooking class. After 14 months of visits and video calls, they filed the K-1. Bogota embassy approved after a brief interview.",
    documentsUsed: [
      "I-129F",
      "Cooking class registration",
      "Travel records",
      "Instagram message history",
      "Video call records",
      "Photos from visits",
      "Financial package",
    ],
    keyFactors:
      "Consistent visit pattern and well-documented communication history spanning over a year demonstrated the relationship's stability and authenticity.",
    lessonsLearned:
      "Bogota embassy is one of the higher-volume K-1 posts and officers are experienced. Present organized, chronological evidence and be concise at the interview.",
    timelineMonths: 9,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Philippines",
    outcome: "approved",
    year: "2021",
    court: "US Embassy Manila",
    narrative:
      "Retired petitioner met beneficiary through a church mission trip to Mindanao. After several return visits and a traditional Filipino engagement, they filed the K-1. Used retirement income and pension to meet the financial requirement.",
    documentsUsed: [
      "I-129F",
      "Church mission trip records",
      "Retirement income documentation",
      "Pension statements",
      "Traditional engagement photos",
      "Communication records",
      "Medical exam results",
    ],
    keyFactors:
      "Retirement income and pension can satisfy the I-864 requirement. The mission trip provided verifiable context for how the couple met.",
    lessonsLearned:
      "Retirees can use Social Security, pension, and investment income to meet the I-864 threshold. Manila embassy processes a high volume of K-1 cases and values organized submissions.",
    timelineMonths: 10,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Germany",
    outcome: "approved",
    year: "2024",
    court: "US Embassy London",
    narrative:
      "Couple met through a mutual friend at Oktoberfest in Munich. After a year of alternating visits between the US and Germany, they filed. London embassy processed the German case quickly with a five-minute interview.",
    documentsUsed: [
      "I-129F",
      "Mutual friend's affidavit",
      "Festival photos",
      "Travel records",
      "Communication records",
      "Financial documents",
    ],
    keyFactors:
      "Mutual friend's detailed affidavit describing the introduction and witnessing the relationship develop added credible third-party verification.",
    lessonsLearned:
      "German nationals process through London. Third-party affidavits from people who witnessed the relationship are powerful supporting evidence.",
    timelineMonths: 6,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Egypt",
    outcome: "approved",
    year: "2023",
    court: "US Embassy Cairo",
    narrative:
      "Petitioner met the beneficiary during a guided tour of historical sites in Cairo. They continued the relationship through video calls and two additional visits over 18 months. Received 221(g) for additional documents but was approved after a three-week wait.",
    documentsUsed: [
      "I-129F",
      "Tour company records",
      "Travel receipts",
      "Video call records",
      "Photos spanning 18 months",
      "Financial documents",
      "Background check results",
    ],
    keyFactors:
      "Thorough background documentation and patience with Cairo embassy's administrative processing timeline led to successful outcome.",
    lessonsLearned:
      "Cairo embassy frequently uses 221(g) administrative processing for K-1 cases. Plan for potential delays of several weeks and ensure all background documents are in order.",
    timelineMonths: 17,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
    rfesReceived: "221(g) for administrative processing and additional police clearance documentation.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Lebanon",
    outcome: "approved",
    year: "2024",
    court: "US Embassy Amman",
    narrative:
      "Due to embassy limitations in Beirut, the case was processed through Amman. Petitioner of Lebanese descent met beneficiary through family connections in Beirut. They provided extensive family documentation and cultural engagement evidence.",
    documentsUsed: [
      "I-129F",
      "Family connection documentation",
      "Cultural engagement records",
      "Travel records to Lebanon and Jordan",
      "Communication records",
      "Financial package",
    ],
    keyFactors:
      "Strong family network documentation on both sides and cultural engagement customs provided credible relationship evidence despite third-country processing.",
    lessonsLearned:
      "Lebanese nationals may be processed through Amman. Budget extra time and travel costs for the beneficiary to attend the interview in Jordan.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Jordan",
    outcome: "approved",
    year: "2022",
    court: "US Embassy Amman",
    narrative:
      "Couple met at an academic conference in Amman where both were presenting papers. After a year of collaboration that evolved into a personal relationship, petitioner visited Jordan three times. Approved at interview without complications.",
    documentsUsed: [
      "I-129F",
      "Conference program listing both names",
      "Academic collaboration records",
      "Travel records",
      "Email and messaging history",
      "Financial documents",
    ],
    keyFactors:
      "Academic conference documentation independently verified the couple's presence at the same event and provided a credible meeting story.",
    lessonsLearned:
      "Academic and professional conferences that list attendees or presenters provide excellent independent verification of how a couple met.",
    timelineMonths: 11,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Thailand",
    outcome: "approved",
    year: "2025",
    court: "US Embassy Bangkok",
    narrative:
      "Petitioner met beneficiary at a yoga retreat in Chiang Mai. After the retreat, they spent two weeks traveling together. Petitioner returned twice more before filing. Bangkok interview included detailed questions about future plans which beneficiary answered well.",
    documentsUsed: [
      "I-129F",
      "Yoga retreat registration",
      "Joint travel bookings",
      "Photos from retreat and travels",
      "LINE messenger history",
      "Financial documents",
      "Wedding planning documents",
    ],
    keyFactors:
      "Detailed knowledge of wedding plans and future living arrangements demonstrated the couple's genuine intent and preparation.",
    lessonsLearned:
      "Bangkok officers ask specific questions about post-arrival plans. Discuss wedding details, living arrangements, and employment plans with your fiance before the interview.",
    timelineMonths: 12,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Nigeria",
    outcome: "approved",
    year: "2022",
    court: "US Embassy Lagos",
    narrative:
      "Couple met through a professional LinkedIn connection that evolved into a personal relationship. Petitioner visited Lagos twice and they also met in London for a vacation. Strong professional and personal documentation supported the case.",
    documentsUsed: [
      "I-129F",
      "LinkedIn connection records",
      "Professional correspondence transitioning to personal",
      "Travel records to Nigeria and UK",
      "Photos from three meetings",
      "Communication records",
      "Financial documents",
    ],
    keyFactors:
      "Multi-country meetings demonstrated genuine effort to maintain the relationship and the professional-to-personal transition was well-documented.",
    lessonsLearned:
      "Meeting in third countries in addition to the beneficiary's home country strengthens the case by showing the couple makes efforts to see each other wherever possible.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "India",
    outcome: "approved",
    year: "2025",
    court: "US Embassy Mumbai",
    narrative:
      "Petitioner and beneficiary met through a matrimonial website commonly used in Indian culture. After video calls and a family-coordinated visit to Mumbai, they had a formal engagement ceremony. Mumbai embassy approved after a standard interview.",
    documentsUsed: [
      "I-129F",
      "Matrimonial website registration",
      "Family coordination letters",
      "Engagement ceremony photos and video",
      "Visit travel records",
      "Communication history",
      "Financial documents",
    ],
    keyFactors:
      "Matrimonial websites are culturally appropriate for Indian relationships and well-understood by Mumbai consular officers as legitimate meeting platforms.",
    lessonsLearned:
      "Cultural context matters. Mumbai embassy understands matrimonial website introductions. Provide the cultural background in a brief cover letter if your relationship follows traditional customs.",
    timelineMonths: 11,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Ukraine",
    outcome: "approved",
    year: "2024",
    court: "US Embassy Warsaw",
    narrative:
      "Beneficiary relocated to Poland after the conflict began, where the petitioner visited three times. The couple had been in a relationship for two years prior. Warsaw embassy processed the case and approved after verifying the relationship predated the conflict.",
    documentsUsed: [
      "I-129F",
      "Pre-conflict relationship evidence",
      "Travel records to Ukraine and Poland",
      "Photos spanning multiple years",
      "Communication records",
      "Financial documents",
      "Beneficiary's Polish temporary residence permit",
    ],
    keyFactors:
      "Evidence that the relationship predated the conflict was critical to establish that the petition was not filed solely for humanitarian reasons.",
    lessonsLearned:
      "When geopolitical events affect your case, proactively document the relationship timeline relative to those events. Officers need to confirm the relationship is genuine and not circumstantially motivated.",
    timelineMonths: 13,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-485", "I-864", "I-693", "I-765"],
  },
  // ============================================================
  // DENIED CASES (9 cases, ~15%)
  // ============================================================
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Philippines",
    outcome: "denied",
    year: "2023",
    court: "US Embassy Manila",
    narrative:
      "Petition denied due to insufficient evidence of a bona fide relationship. The couple had met only once for three days and provided minimal communication records. The consular officer found the relationship evidence unconvincing.",
    documentsUsed: [
      "I-129F",
      "Limited photos from one visit",
      "Sparse text messages",
      "Financial documents",
    ],
    keyFactors:
      "A single brief meeting with minimal follow-up communication was insufficient to establish a genuine ongoing relationship.",
    lessonsLearned:
      "One short visit is rarely enough for K-1 approval, especially at Manila which sees high case volumes. Build a substantial communication record and make multiple visits before filing.",
    timelineMonths: 8,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160"],
    denialReasons: "Insufficient evidence of bona fide relationship. Single meeting of three days with minimal communication records did not establish genuine ongoing relationship.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Morocco",
    outcome: "denied",
    year: "2024",
    court: "US Embassy Casablanca",
    narrative:
      "Denied after the consular officer determined the beneficiary's interview responses were inconsistent with the petitioner's statements. The beneficiary could not answer basic questions about the petitioner's family and daily life.",
    documentsUsed: [
      "I-129F",
      "Travel records",
      "Photos",
      "Some communication records",
      "Financial documents",
    ],
    keyFactors:
      "Inconsistent statements between the petitioner's petition and the beneficiary's interview answers raised serious credibility concerns.",
    lessonsLearned:
      "Both parties must be thoroughly prepared and consistent in their accounts. Practice interview questions together and ensure you both know details about each other's lives.",
    timelineMonths: 12,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160"],
    denialReasons: "Beneficiary unable to provide consistent information about the petitioner during the consular interview. Credibility determination was negative.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Ghana",
    outcome: "denied",
    year: "2022",
    court: "US Embassy Accra",
    narrative:
      "Denied due to the petitioner's failure to meet the income requirement on the I-864. No co-sponsor was provided, and the petitioner's tax returns showed income below the poverty guideline threshold for two consecutive years.",
    documentsUsed: [
      "I-129F",
      "I-864 with insufficient income",
      "Tax returns showing below-threshold income",
      "Photos and communication records",
    ],
    keyFactors:
      "Financial insufficiency without a co-sponsor is a straightforward ground for denial that cannot be overcome with strong relationship evidence alone.",
    lessonsLearned:
      "Verify income meets the 125% federal poverty guideline before filing. If it does not, secure a qualified co-sponsor and include their I-864 and financial documents with the petition.",
    timelineMonths: 10,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-864"],
    denialReasons: "Petitioner failed to demonstrate income at or above 125% of federal poverty guidelines. No joint sponsor provided.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "China",
    outcome: "denied",
    year: "2023",
    court: "US Embassy Beijing",
    narrative:
      "Denied after extended 221(g) administrative processing revealed discrepancies in the beneficiary's background. The beneficiary had previously filed for immigration benefits under a different name, which was not disclosed on the application.",
    documentsUsed: [
      "I-129F",
      "Travel records",
      "Communication records",
      "Financial documents",
      "Photos",
    ],
    keyFactors:
      "Undisclosed prior immigration history and name discrepancy constituted material misrepresentation, which is a serious ground for denial.",
    lessonsLearned:
      "Full disclosure of all prior immigration filings and any name changes is essential. Material misrepresentation can result in permanent visa ineligibility under INA 212(a)(6)(C).",
    timelineMonths: 20,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160"],
    denialReasons: "Material misrepresentation under INA 212(a)(6)(C)(i). Beneficiary failed to disclose prior immigration filing under a different name.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Dominican Republic",
    outcome: "denied",
    year: "2021",
    court: "US Embassy Santo Domingo",
    narrative:
      "Denied because the petitioner had two prior K-1 petitions for different beneficiaries within five years and failed to obtain the required IMBRA waiver. The filing was rejected for non-compliance with the International Marriage Broker Regulation Act.",
    documentsUsed: [
      "I-129F",
      "Prior petition records",
      "Relationship evidence",
      "Financial documents",
    ],
    keyFactors:
      "IMBRA restrictions limit serial K-1 petitions. Filing multiple petitions within a short period without a waiver is grounds for automatic denial.",
    lessonsLearned:
      "Petitioners with prior K-1 filings must understand IMBRA requirements. If you have filed two or more K-1 petitions previously, you must obtain a waiver before filing again.",
    timelineMonths: 6,
    lawyerUsed: false,
    formsUsed: ["I-129F"],
    denialReasons: "Petitioner subject to IMBRA restrictions due to multiple prior K-1 filings. Required waiver not obtained.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Russia",
    outcome: "denied",
    year: "2022",
    court: "US Embassy Moscow",
    narrative:
      "Denied after the consular officer determined the couple had not met the in-person meeting requirement. The petitioner claimed to have visited Moscow, but passport stamps did not corroborate the claimed travel dates, and hotel records could not be verified.",
    documentsUsed: [
      "I-129F",
      "Passport with inconsistent stamps",
      "Unverifiable hotel records",
      "Communication records",
      "Photos",
    ],
    keyFactors:
      "Failure to satisfy the in-person meeting requirement under INA 214(d) is a statutory bar that cannot be overcome by other evidence.",
    lessonsLearned:
      "The in-person meeting within two years is a strict legal requirement. Ensure passport stamps, travel records, and hotel bookings all corroborate your visit dates. Discrepancies will be caught.",
    timelineMonths: 14,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160"],
    denialReasons: "Failure to establish in-person meeting requirement under INA 214(d). Passport records inconsistent with claimed travel dates.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Vietnam",
    outcome: "denied",
    year: "2024",
    court: "US Embassy Phnom Penh",
    narrative:
      "Denied due to a significant age gap of 35 years combined with inability to communicate without a translator. The consular officer found the totality of circumstances did not support a bona fide relationship determination.",
    documentsUsed: [
      "I-129F",
      "Travel records",
      "Photos",
      "Translator-assisted communication records",
      "Financial documents",
    ],
    keyFactors:
      "While age gaps alone are not disqualifying, combined with language barriers and limited independent communication, they increase scrutiny significantly.",
    lessonsLearned:
      "Large age differences require stronger evidence of genuine relationship. Demonstrate efforts to learn each other's language and show that you can communicate meaningfully without relying entirely on translators.",
    timelineMonths: 11,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160"],
    denialReasons: "Consular officer determined relationship was not bona fide based on totality of circumstances including significant age disparity and inability to communicate without third-party assistance.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Nigeria",
    outcome: "denied",
    year: "2023",
    court: "US Embassy Lagos",
    narrative:
      "Denied after the petitioner's criminal background check revealed an undisclosed domestic violence conviction. Under IMBRA, petitioners with certain criminal histories must disclose them, and failure to do so results in denial.",
    documentsUsed: [
      "I-129F",
      "Criminal background check results",
      "Relationship evidence",
      "Financial documents",
    ],
    keyFactors:
      "IMBRA requires disclosure of specified criminal convictions. Domestic violence convictions trigger mandatory disclosure and additional review requirements.",
    lessonsLearned:
      "Petitioners must disclose all criminal history, especially domestic violence or related offenses. Non-disclosure is worse than disclosure. Consult an attorney if you have any criminal record before filing.",
    timelineMonths: 7,
    lawyerUsed: false,
    formsUsed: ["I-129F"],
    denialReasons: "Petitioner failed to disclose domestic violence conviction as required under IMBRA. Non-disclosure constituted grounds for denial.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Brazil",
    outcome: "denied",
    year: "2025",
    court: "US Embassy Bogota",
    narrative:
      "Denied because the beneficiary had a prior immigration violation with an unlawful presence bar still in effect. The three-year bar under INA 212(a)(9)(B)(i)(I) had not yet expired, making the beneficiary inadmissible.",
    documentsUsed: [
      "I-129F",
      "Prior immigration records",
      "Relationship evidence",
      "Communication records",
    ],
    keyFactors:
      "Prior unlawful presence in the US triggers automatic bars to admissibility. These bars must expire or be waived before a new visa can be issued.",
    lessonsLearned:
      "Check whether the beneficiary has any prior unlawful presence in the US before filing. If a bar exists, consult an attorney about waiver options under I-601 before investing time and filing fees.",
    timelineMonths: 9,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160"],
    denialReasons: "Beneficiary inadmissible under INA 212(a)(9)(B)(i)(I) due to prior unlawful presence. Three-year bar had not expired and no waiver was filed.",
  },
  // ============================================================
  // PENDING CASES (9 cases, ~15%)
  // ============================================================
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Philippines",
    outcome: "pending",
    year: "2025",
    court: "US Embassy Manila",
    narrative:
      "Petition filed in early 2025 and currently awaiting NOA2 approval from USCIS. The couple has been in a relationship for two years with five in-person visits. Strong evidence package prepared with attorney assistance.",
    documentsUsed: [
      "I-129F",
      "Comprehensive relationship evidence",
      "Five sets of visit documentation",
      "Communication records spanning two years",
      "Financial package",
    ],
    keyFactors:
      "Case is in the initial USCIS processing stage. Manila embassy typically schedules interviews 2-4 months after NVC forwards the case.",
    lessonsLearned:
      "Filing early in the year can mean processing during peak season. Monitor USCIS processing times and prepare consular documents while waiting for NOA2.",
    timelineMonths: 3,
    lawyerUsed: true,
    formsUsed: ["I-129F"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Colombia",
    outcome: "pending",
    year: "2025",
    court: "US Embassy Bogota",
    narrative:
      "I-129F approved by USCIS and forwarded to NVC. Currently waiting for the Bogota embassy to schedule the consular interview. The couple has been preparing interview documents and the beneficiary completed the medical exam.",
    documentsUsed: [
      "I-129F",
      "NOA2 approval notice",
      "DS-160 confirmation",
      "Medical exam results",
      "Financial documents",
      "Relationship evidence updates",
    ],
    keyFactors:
      "Case has cleared USCIS and is in the NVC-to-embassy pipeline. Bogota typically schedules within 2-3 months of NVC forwarding.",
    lessonsLearned:
      "Use the waiting period between NOA2 and interview scheduling to gather updated evidence, complete the medical exam, and prepare the beneficiary for interview questions.",
    timelineMonths: 8,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-864"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Mexico",
    outcome: "pending",
    year: "2024",
    court: "US Embassy Bogota",
    narrative:
      "Case placed in 221(g) administrative processing after the consular interview. The officer requested additional evidence of the petitioner's divorce from a prior marriage being finalized. Couple is gathering certified court records.",
    documentsUsed: [
      "I-129F",
      "DS-160",
      "Interview documents",
      "Financial package",
      "Relationship evidence",
    ],
    keyFactors:
      "221(g) was issued specifically for proof of petitioner's legal capacity to marry, requiring certified divorce decree from prior marriage.",
    lessonsLearned:
      "If either party was previously married, obtain certified copies of all divorce decrees well before the interview. Some courts take weeks to issue certified copies.",
    timelineMonths: 14,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-864", "I-693"],
    rfesReceived: "221(g) requesting certified divorce decree for petitioner's prior marriage to establish legal capacity to marry.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "South Korea",
    outcome: "pending",
    year: "2025",
    court: "US Embassy Seoul",
    narrative:
      "Recently filed petition is in USCIS processing. Petitioner and beneficiary met while both were graduate students at a US university. Beneficiary returned to Korea after graduation and couple filed the K-1 shortly after.",
    documentsUsed: [
      "I-129F",
      "University enrollment records",
      "Joint class schedules",
      "Photos from university and after",
      "Communication records post-departure",
    ],
    keyFactors:
      "Meeting in the US during studies is well-documented through university records. The case is straightforward but awaiting normal processing times.",
    lessonsLearned:
      "Former F-1 students who met their partner in the US have excellent documentation of the meeting and relationship. University records provide independent verification.",
    timelineMonths: 2,
    lawyerUsed: false,
    formsUsed: ["I-129F"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Kenya",
    outcome: "pending",
    year: "2024",
    court: "US Embassy Nairobi",
    narrative:
      "USCIS approved the I-129F but the NVC transfer to Nairobi has been delayed. The couple has been waiting three months beyond typical NVC processing times and has contacted their congressional representative for assistance.",
    documentsUsed: [
      "I-129F",
      "NOA2 approval notice",
      "Congressional inquiry documentation",
      "NVC correspondence",
      "Updated relationship evidence",
    ],
    keyFactors:
      "NVC processing delays can occur independently of USCIS or embassy timelines. Congressional inquiries can sometimes expedite the transfer.",
    lessonsLearned:
      "If NVC processing exceeds normal timelines, contacting your US congressional representative's office can generate an inquiry that sometimes resolves administrative backlogs.",
    timelineMonths: 13,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Ethiopia",
    outcome: "pending",
    year: "2025",
    court: "US Embassy Addis Ababa",
    narrative:
      "Petition filed and USCIS receipt notice received. Currently in initial review stage. Couple met through the Ethiopian-American community and has been together for three years with multiple visits in both countries.",
    documentsUsed: [
      "I-129F",
      "Community event documentation",
      "Travel records spanning three years",
      "Photos from visits in both countries",
      "Communication records",
      "Financial package",
    ],
    keyFactors:
      "Strong case on paper with extensive relationship history. Normal processing times at USCIS California Service Center apply.",
    lessonsLearned:
      "Starting documentation early in the relationship pays off at filing time. Three years of evidence provides a comprehensive picture that is difficult to fabricate.",
    timelineMonths: 1,
    lawyerUsed: false,
    formsUsed: ["I-129F"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Egypt",
    outcome: "pending",
    year: "2024",
    court: "US Embassy Cairo",
    narrative:
      "Interview completed at Cairo embassy but case placed in extended administrative processing. No additional documents requested. The couple has been waiting four months since the interview with no update despite multiple inquiries.",
    documentsUsed: [
      "I-129F",
      "DS-160",
      "Interview documents",
      "Complete financial package",
      "Relationship evidence",
      "Police clearance certificates",
    ],
    keyFactors:
      "Extended administrative processing at Cairo without document requests suggests background check delays rather than evidentiary issues.",
    lessonsLearned:
      "Cairo embassy administrative processing can extend for months. While frustrating, this is usually a background check issue and not a reflection of the case's merits. Continue to inquire politely every 60 days.",
    timelineMonths: 18,
    lawyerUsed: true,
    formsUsed: ["I-129F", "DS-160", "I-864", "I-693"],
    rfesReceived: "221(g) administrative processing with no specific document requests. Ongoing for four months post-interview.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Peru",
    outcome: "pending",
    year: "2025",
    court: "US Embassy Lima",
    narrative:
      "I-129F received by USCIS and currently in the initial evidence review phase. RFE issued for additional proof of in-person meeting as the petitioner's passport had been renewed and old passport with entry stamps was reported lost.",
    documentsUsed: [
      "I-129F",
      "New passport",
      "Police report for lost passport",
      "Alternative meeting evidence",
      "Hotel receipts from visits",
      "Credit card statements showing Peru transactions",
    ],
    keyFactors:
      "Lost passport containing travel stamps required alternative evidence of in-person meetings through financial records and third-party documentation.",
    lessonsLearned:
      "Keep copies of passport stamp pages and maintain alternative proof of travel such as credit card statements, hotel receipts, and boarding passes in case original documents are lost.",
    timelineMonths: 4,
    lawyerUsed: true,
    formsUsed: ["I-129F"],
    rfesReceived: "RFE for alternative evidence of in-person meeting due to lost passport containing relevant entry stamps.",
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Turkey",
    outcome: "pending",
    year: "2024",
    court: "US Embassy Ankara",
    narrative:
      "Interview completed at Ankara embassy. Consular officer issued 221(g) requesting updated police clearance certificate from a city where the beneficiary previously lived. The beneficiary is working to obtain the document from local authorities.",
    documentsUsed: [
      "I-129F",
      "DS-160",
      "Interview documents",
      "Financial package",
      "Relationship evidence",
      "Original police clearance certificates",
    ],
    keyFactors:
      "Additional police clearance from a specific prior residence is a routine request. Processing depends on the local Turkish authorities' response time.",
    lessonsLearned:
      "Obtain police clearance certificates from every city or province where the beneficiary has lived, not just the current residence. Ankara embassy is thorough about this requirement.",
    timelineMonths: 15,
    lawyerUsed: false,
    formsUsed: ["I-129F", "DS-160", "I-864", "I-693"],
    rfesReceived: "221(g) requesting police clearance certificate from beneficiary's prior city of residence.",
  },
  // ============================================================
  // WITHDRAWN CASES (3 cases, ~5%)
  // ============================================================
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Ukraine",
    outcome: "withdrawn",
    year: "2022",
    court: "US Embassy Kyiv",
    narrative:
      "Petition was withdrawn after the couple decided to marry abroad and pursue a CR-1 spousal visa instead, which provides immediate permanent residence upon entry rather than requiring marriage within 90 days and subsequent adjustment of status.",
    documentsUsed: [
      "I-129F",
      "Withdrawal letter",
      "Marriage certificate from abroad",
    ],
    keyFactors:
      "Strategic switch from K-1 to CR-1 can be advantageous when the couple is ready to marry abroad, as CR-1 provides immediate green card upon entry.",
    lessonsLearned:
      "Consider whether a CR-1 spousal visa might be more advantageous than K-1. CR-1 takes longer but provides permanent residence immediately upon entry and avoids the 90-day marriage deadline.",
    timelineMonths: 5,
    lawyerUsed: true,
    formsUsed: ["I-129F"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Thailand",
    outcome: "withdrawn",
    year: "2023",
    court: "US Embassy Bangkok",
    narrative:
      "Petitioner withdrew the case after the relationship ended during the long processing period. The couple had been waiting 16 months for the interview to be scheduled and grew apart during the extended separation.",
    documentsUsed: [
      "I-129F",
      "Withdrawal request letter",
    ],
    keyFactors:
      "Extended processing times can strain long-distance relationships. The couple mutually decided to end the relationship before the interview was scheduled.",
    lessonsLearned:
      "Long processing times are a reality of the K-1 process. Couples should discuss contingency plans and maintain regular communication and visits during the waiting period to keep the relationship strong.",
    timelineMonths: 16,
    lawyerUsed: false,
    formsUsed: ["I-129F"],
  },
  {
    caseType: "k1-fiance",
    countryOfOrigin: "Jamaica",
    outcome: "withdrawn",
    year: "2024",
    court: "US Embassy Kingston",
    narrative:
      "Withdrawn after the petitioner received advice from an immigration attorney that the beneficiary's prior visa overstay would likely result in a denial without a waiver. The couple decided to first obtain an I-601 waiver before refiling.",
    documentsUsed: [
      "I-129F",
      "Attorney consultation letter",
      "Withdrawal request",
    ],
    keyFactors:
      "Strategic withdrawal to address an admissibility issue before proceeding saves time and filing fees compared to receiving a denial and then seeking a waiver.",
    lessonsLearned:
      "If an admissibility issue is discovered after filing, it may be better to withdraw and address the issue first rather than proceed to an interview that will likely result in denial.",
    timelineMonths: 4,
    lawyerUsed: true,
    formsUsed: ["I-129F"],
  },
];
