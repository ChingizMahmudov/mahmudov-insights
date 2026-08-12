import { BUSINESS_STATS, reportsDeliveredDisplay } from "@/content/stats";

export const en = {
  htmlLang: "en",
  nav: {
    home: "Home",
    services: "Services",
    industries: "Industries",
    cases: "Case Studies",
    about: "About",
    contact: "Contact",
    menu: "Open menu",
    close: "Close menu",
    language: "Language",
  },
  cta: {
    discuss: "Discuss a Project",
    viewCases: "View Case Studies",
    viewAllCases: "View All Case Studies",
    exploreServices: "Explore Services",
    aboutUs: "About Mahmudov Insights",
    credentials: "Download Credentials",
    requirements: "Discuss Your Requirements",
    firstProject: "Discuss Your First Project",
    readCase: "Read case study",
    backToCases: "All case studies",
  },
  brand: {
    name: "Mahmudov Insights",
    descriptor: "Market Research Analysis & Reporting Partner",
    positioning: "Client-ready data analysis & reporting for market research agencies.",
  },
  home: {
    seoTitle: "Mahmudov Insights — Research Analysis & Reporting Partner",
    seoDescription: `Client-ready data analysis, statistical analysis, research QA and reporting for market research agencies. ${reportsDeliveredDisplay} analytical reports delivered.`,
    heroTitle: "Client-ready data analysis & reporting for market research agencies",
    heroSubtitle: "Turning complex data into actionable business decisions.",
    heroBody:
      "Mahmudov Insights helps market research agencies transform raw datasets into structured analysis, decision-ready insights and professional client-facing reports.",
    heroImageAlt:
      "Research workstation showing crosstab tables, scatter plots and a correlation matrix alongside printed questionnaires",
    trust: [
      { value: reportsDeliveredDisplay, label: "Reports delivered" },
      { value: `${BUSINESS_STATS.yearsExperience} years`, label: "Research experience" },
      { value: "ESOMAR", label: "Member" },
      { value: "NDA-friendly", label: "Collaboration" },
    ],
    supportEyebrow: "Agency support",
    supportTitle: "Your research team, extended.",
    supportBody:
      "Research agencies work in peaks. Mahmudov Insights provides additional analytical capacity during high workload periods, complex studies, compressed timelines and specialist analysis — without the cost of permanent internal headcount.",
    supportItems: [
      {
        title: "Flexible capacity",
        body: "Scale analytical support project by project without increasing permanent headcount.",
      },
      {
        title: "Client-ready delivery",
        body: "Outputs are structured for agency review and final client presentation.",
      },
      {
        title: "Senior-level involvement",
        body: "Projects are handled directly by an experienced research consultant.",
      },
      {
        title: "Confidential collaboration",
        body: "NDA-friendly and white-label collaboration available where needed.",
      },
    ],
    servicesEyebrow: "Services",
    servicesTitle: "Four analytical disciplines, one delivery standard",
    servicesBody:
      "Each area can be commissioned individually or combined into end-to-end support from raw dataset to final presentation.",
    processEyebrow: "Workflow",
    processTitle: "From raw data to business decisions",
    processBody:
      "A structured sequence that keeps analysis auditable, deadlines predictable and conclusions defensible.",
    process: [
      {
        title: "Objective alignment",
        body: "Clarifying business questions, KPIs and the decisions the study must support.",
      },
      {
        title: "Research design",
        body: "Questionnaire architecture, routing logic and measurement framework.",
      },
      {
        title: "Quality control",
        body: "Mid-field checks, interview validation and data consistency review.",
      },
      {
        title: "Data processing & analysis",
        body: "Cleaning, weighting, crosstabs, significance testing and modelling.",
      },
      {
        title: "Reporting & insights",
        body: "Structured narrative, business implications and client-ready deliverables.",
      },
    ],
    outcomesEyebrow: "Outcomes",
    outcomesTitle: "What agencies get in practice",
    outcomes: [
      {
        title: "Faster delivery",
        body: "Structured workflows and efficient data processing reduce project turnaround time.",
      },
      {
        title: "Decision-ready insights",
        body: "Not just tables — clear narrative, business implications and actionable conclusions.",
      },
      {
        title: "Fewer revision cycles",
        body: "Strong analytical logic and structured reporting reduce unnecessary rework.",
      },
      {
        title: "Consistent quality",
        body: "Reliable outputs aligned with professional research agency expectations.",
      },
    ],
    proofEyebrow: "Track record",
    proofTitle: "Evidence, not adjectives",
    proof: [
      { value: reportsDeliveredDisplay, label: "Analytical reports delivered" },
      { value: `${BUSINESS_STATS.yearsExperience} years`, label: "Market research experience" },
      { value: "Multi-industry", label: "Project exposure" },
      { value: "End-to-end", label: "Analytical support" },
    ],
    experienceEyebrow: "Selected experience",
    experienceTitle: "Project experience across leading organizations and industries",
    experienceBody:
      "Work has been delivered in collaboration with research agencies across a range of sectors. Client identities remain confidential; the categories below describe the research exposure.",
    experienceTags: ["Banking", "Retail & FMCG", "Telecom", "Public Sector", "Consumer Services"],
    casesEyebrow: "Case studies",
    casesTitle: "Anonymized project examples",
    casesBody: "Three representative engagements, described at methodology level.",
    founderEyebrow: "Leadership",
    founderTitle: "Research expertise with direct senior involvement",
    founderName: "Chingiz Mahmudov",
    founderRole: "Data Analyst & Research Consultant",
    founderPortraitAlt: "Portrait of Chingiz Mahmudov, Data Analyst and Research Consultant",
    founderPoints: [
      `${BUSINESS_STATS.yearsExperience} years of market research experience`,
      "ESOMAR member",
      `${reportsDeliveredDisplay} analytical reports delivered`,
      "Project management experience",
      "Fieldwork operations experience",
      "Advanced quantitative research capability",
    ],
    toolsLabel: "Tools",
    tools: ["SPSS", "Excel", "PowerPoint", "Power BI"],
    languagesLabel: "Languages",
    languages: [
      "Azerbaijani — Native",
      "Russian — Advanced",
      "English — Advanced",
      "Turkish — Advanced",
    ],
    offerEyebrow: "New collaborations",
    offerTitle: "Starting a new collaboration?",
    offerBody: `New clients can receive ${BUSINESS_STATS.firstProjectDiscountPercent}% off their first eligible project engagement.`,
    offerNote: "Terms and project scope may apply.",
    finalTitle: "Need additional research capacity for your next project?",
    finalBody:
      "From data processing and statistical analysis to insight development and client-ready reporting, Mahmudov Insights can support your team project by project.",
  },
  services: {
    seoTitle: "Services — Research QA, Statistical Analysis & Reporting",
    seoDescription:
      "Research QA, statistical analysis, insight development and questionnaire design for market research agencies. Commissioned individually or end-to-end.",
    eyebrow: "Services",
    title: "Specialist research support from raw data to final insight delivery",
    intro:
      "Services can be commissioned individually as standalone modules or combined into full analytical support across the project lifecycle. Scope, format and delivery standards are agreed before work begins.",
    groups: [
      {
        title: "Research QA",
        summary: "Ensuring data quality and fieldwork accuracy before analysis begins.",
        items: [
          "Mid-field data checks",
          "Interview quality validation",
          "Audio back-check review",
          "Logical consistency checks",
          "Straight-lining and response pattern detection",
          "Data cleaning frameworks",
          "Issue logs and correction tracking",
        ],
      },
      {
        title: "Statistical Analysis",
        summary: "Identifying statistically valid insights and the drivers behind them.",
        items: [
          "Crosstab analysis",
          "Significance testing",
          "Regression",
          "Key driver analysis",
          "Customer segmentation",
          "Profiling",
          "Comparative analysis",
          "KPI analysis",
        ],
      },
      {
        title: "Insight & Reporting",
        summary: "Turning analysis into client-ready business stories.",
        items: [
          "Insight-driven PowerPoint reports",
          "Executive summaries",
          "Business implications",
          "Strategic recommendations",
          "Data storytelling",
          "Chart development",
          "Client-ready reporting",
        ],
      },
      {
        title: "Research Design",
        summary: "Designing structured, KPI-driven research frameworks.",
        items: [
          "Questionnaire design",
          "Survey architecture",
          "Routing and logic",
          "KPI development",
          "Research objective translation",
          "Pilot review and questionnaire optimization",
        ],
      },
    ],
    engagementEyebrow: "Engagement models",
    engagementTitle: "Four ways agencies work with Mahmudov Insights",
    engagement: [
      {
        title: "Full project support",
        body: "End-to-end analytical support from research design through to final reporting.",
      },
      {
        title: "Overflow capacity",
        body: "Additional analyst support during high workload periods and overlapping deadlines.",
      },
      {
        title: "White-label support",
        body: "Confidential behind-the-scenes analytical collaboration under the agency's own brand.",
      },
      {
        title: "Specialist module support",
        body: "Segmentation, driver analysis, questionnaire development or QA as standalone assignments.",
      },
    ],
  },
  industries: {
    seoTitle: "Industries — Research Experience by Sector",
    seoDescription:
      "Analytical project experience across banking, retail and FMCG, telecom, public sector and consumer service markets.",
    eyebrow: "Industries",
    title: "Research experience across complex consumer and service categories",
    intro:
      "The sectors below describe project experience and analytical exposure gained through collaboration with research agencies, not exclusive specialization.",
    items: [
      {
        title: "Banking & Financial Services",
        body: "Satisfaction research, NPS, service quality, customer journey and driver analysis.",
      },
      {
        title: "Retail & FMCG",
        body: "Shopper segmentation, consumer behavior, brand evaluation and customer experience.",
      },
      {
        title: "Telecom",
        body: "Customer satisfaction, service experience, fieldwork QA and usage research.",
      },
      {
        title: "Public Sector",
        body: "Opinion research, structured surveys and data reporting.",
      },
      {
        title: "Consumer & Service Markets",
        body: "Customer experience, segmentation and behavioral insight.",
      },
    ],
  },
  cases: {
    seoTitle: "Case Studies — Anonymized Research Engagements",
    seoDescription:
      "Anonymized market research case studies: shopper segmentation, fieldwork supervision and data validation, and satisfaction questionnaire design.",
    eyebrow: "Case studies",
    title: "Selected engagements, described at methodology level",
    intro:
      "Client identities are confidential. Each case describes the objective, approach, analysis and deliverables in the form an agency partner would review them.",
    labels: {
      industry: "Industry",
      market: "Market",
      sample: "Sample",
      method: "Method",
      scope: "Scope",
      mode: "Mode",
      questionnaire: "Final questionnaire",
      pilot: "Pilot",
      objective: "Objective",
      challenge: "Challenge",
      approach: "Approach",
      methodology: "Methodology",
      analysis: "Analysis",
      findings: "Key findings",
      implications: "Strategic implications",
      deliverables: "Deliverables",
      result: "Core result",
    },
  },
  about: {
    seoTitle: "About — Independent Research Analytics Consultancy",
    seoDescription:
      "Mahmudov Insights is an independent specialist research consultancy providing flexible analytical capacity to market research agencies.",
    eyebrow: "About",
    title: "Built to help research agencies deliver better analytical work, faster.",
    intro:
      "Mahmudov Insights is an independent specialist research consultancy. It provides market research agencies with flexible, senior-level analytical capacity — from data processing and statistical analysis to insight development and client-ready reporting.",
    philosophyTitle: "Analysis should not end at tables",
    philosophyBody:
      "A dataset becomes valuable when it produces structured conclusions and business implications. Every deliverable is built to answer the decision behind the research question: what the data shows, what it means commercially, and what should follow.",
    founderEyebrow: "Founder",
    esomarTitle: "ESOMAR membership",
    esomarBody:
      "Membership reflects professional engagement with international research ethics and quality standards, and informs how data, respondents and client confidentiality are handled on every project.",
    workTitle: "How I work with agencies",
    work: [
      {
        title: "Structured communication",
        body: "Clear scoping, agreed checkpoints and a single point of contact throughout the project.",
      },
      {
        title: "Deadline reliability",
        body: "Timelines are committed to realistically and held, including under compressed fieldwork schedules.",
      },
      {
        title: "Confidentiality",
        body: "NDA-friendly handling of datasets, questionnaires and client identities as standard.",
      },
      {
        title: "Analytical transparency",
        body: "Methods, assumptions, weighting and exclusions are documented and reviewable.",
      },
      {
        title: "Direct senior involvement",
        body: "The analysis is performed by the consultant you brief — not passed down a chain.",
      },
      {
        title: "Flexible collaboration",
        body: "Project-based engagement, white-label output and specialist modules where required.",
      },
    ],
    credentialsTitle: "Company credentials",
    credentialsBody: "A concise PDF overview of positioning, services, methodology and experience.",
  },
  contact: {
    seoTitle: "Contact — Discuss a Research Project",
    seoDescription:
      "Contact Mahmudov Insights to discuss project-based analytical support for market research agencies. Typical response within 24 hours.",
    eyebrow: "Contact",
    title: "Let's discuss your next research project",
    body: "Available for project-based collaboration with research agencies.",
    responseLabel: "Typical response",
    responseValue: `Within ${BUSINESS_STATS.responseHours} hours`,
    nda: "NDA-friendly collaboration available.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    linkedinLabel: "LinkedIn",
  },
  footer: {
    nav: "Navigation",
    contact: "Contact",
    legal: "Legal",
    language: "Language",
    rights: "© {year} Mahmudov Insights",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
    terms: "Terms of Use",
  },
  cookies: {
    text: "This site uses only cookies required for it to function. No advertising or analytics tracking is used.",
    accept: "Understood",
    link: "Cookie Policy",
  },
  legal: {
    updated: "Last updated: August 2026",
    privacy: {
      title: "Privacy Policy",
      body: [
        "Mahmudov Insights collects personal data only when you choose to provide it — for example, when you contact us by email, telephone or LinkedIn to discuss a project.",
        "Data provided in this way is used solely to respond to your enquiry and to manage any resulting professional engagement. It is not sold, rented or shared with third parties for marketing purposes.",
        "Research datasets received from clients are treated as confidential client material. They are processed only for the agreed project scope, stored securely for the duration of the engagement, and returned or deleted on request in line with the applicable agreement or NDA.",
        "You may request access to, correction of, or deletion of personal data held about you by writing to chingiz@mi-az.com.",
        "This website does not use advertising or behavioural tracking technologies.",
      ],
    },
    cookies: {
      title: "Cookie Policy",
      body: [
        "This website uses a minimal set of cookies and equivalent local storage strictly necessary for the site to function — for example, remembering your language preference and whether you have dismissed the cookie notice.",
        "No advertising, profiling or third-party analytics cookies are used.",
        "Strictly necessary storage does not require consent, but the notice is shown so that the use of local storage is transparent.",
        "You can clear this storage at any time through your browser settings.",
      ],
    },
    terms: {
      title: "Terms of Use",
      body: [
        "The content of this website is provided for general information about the services of Mahmudov Insights. It does not constitute a contractual offer or professional advice.",
        "Case studies published on this site are anonymized. Figures, methodologies and outcomes describe completed work while protecting the confidentiality of the organizations involved. Company names shown as categories do not imply direct contractual relationships.",
        "Brand names, texts, layouts and visual materials on this website are the property of Mahmudov Insights unless stated otherwise and may not be reproduced without permission.",
        "Project engagements are governed exclusively by the written agreement, statement of work or NDA signed for that project.",
      ],
    },
  },
};

export type Dict = typeof en;
