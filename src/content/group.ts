/* -----------------------------------------------------------------------------
 * Ojijo Group content — source of truth for copy, routing, and contact.
 *
 * Hierarchy: Group brief → verified research → live official sites / Luma
 * (fetched 20 Sep 2026) → connective copy. Nothing here is a fabricated KPI,
 * award year, biography, or unnamed “client result.”
 *
 * Unresolved items live in STEERING/OJIJO_GROUP_CONTENT_CONFIRMATIONS.md and
 * are omitted rather than guessed.
 * -------------------------------------------------------------------------- */

import {
  Briefcase,
  Building2,
  ClipboardCheck,
  GraduationCap,
  Scale,
  Search,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "Ojijo Group",
  shortName: "Ojijo Group",
  philosophy: "preempt. Prevent. Secure.",
  tagline: "Business law consulting, HR consulting, employment-law advisory and capacity development.",
  logo: "/Logo/Ojijo.png",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Expertise", to: "/expertise" },
  { label: "Our Entities", to: "/entities" },
  { label: "Training", to: "/training" },
  { label: "Contact", to: "/contact" },
];

/* Verified on ojijogroup.com and Luma. Two street addresses remain unresolved
   (Kindaruma Road 714 vs Northcote Apt E02) — Kilimani, Nairobi is stated, not
   a single HQ pin. Phone +254 743 518 775 on one Luma page is treated as a typo
   until confirmed. */
export const contactDetails = {
  locality: "Kilimani, Nairobi, Kenya",
  phones: [
    { display: "+254 745 518 775", href: "tel:+254745518775" },
    { display: "+254 721 793 974", href: "tel:+254721793974" },
  ],
  email: "info@ojijogroup.com",
};

export const enquiryTopics = [
  { value: "employment-hr", label: "Employment, labour or HR-law advice" },
  { value: "general-legal", label: "A broader legal matter" },
  { value: "training", label: "Training and professional development" },
  { value: "group", label: "A Group enquiry" },
] as const;

export const hero = {
  eyebrow: "Ojijo Group",
  titleLines: ["preempt.", "Prevent.", "Secure."] as const,
  lead: "Through specialist advisory, legal, HR and training capabilities, Ojijo Group helps organisations anticipate risk, strengthen compliance and governance, and protect their people, processes and interests.",
  primary: { label: "Explore Our Group", to: "/about" },
  secondary: { label: "Explore Our Entities", to: "/entities" },
};

export const intro = {
  titleLines: ["Built to Preempt.", "Structured to Prevent.", "Positioned to Secure."] as const,
  body: "Ojijo Group brings together specialist capabilities that help organisations identify risks early, put the right legal, HR, governance and organisational measures in place, and protect their people, processes and interests. Understand the Group here, then continue to the specialist destination the work requires.",
  signatureName: "Kepher Kiche Ojijo",
  signatureRole: "Managing Director, Ojijo Group",
  presence: [
    { lead: "Based in ", emphasis: "Kilimani, Nairobi" },
    { lead: "Serving organisations ", emphasis: "across Kenya" },
  ],
};

export type PhilosophyLens = "Preempt" | "Prevent" | "Secure";

export interface ExpertiseItem {
  lens: PhilosophyLens;
  title: string;
  body: string;
  Icon: LucideIcon;
  routeLabel: string;
  to: string;
  external?: boolean;
}

export const expertiseHead = {
  titleLines: ["Our", "Expertise"] as const,
  body: "Verified capabilities that help organisations anticipate risk, put the right measures in place, and protect their interests. These are not three products named after the brand line — each card routes to the specialist arm that delivers the work.",
};

export const expertise: ExpertiseItem[] = [
  {
    lens: "Preempt",
    title: "Employment & labour law",
    body: "Advisory on contracts, termination, redundancy, union disputes and the Kenyan employment framework — so organisations see legal and HR risk before it hardens into a dispute.",
    Icon: Scale,
    routeLabel: "Explore Ojijo HR Law",
    to: "https://ojijohrlaw.com/",
    external: true,
  },
  {
    lens: "Prevent",
    title: "HR consulting & compliance",
    body: "Policies, manuals, audits and day-to-day HR legal support so workplace documentation, process and practice stay aligned with the law.",
    Icon: ClipboardCheck,
    routeLabel: "Explore Ojijo HR Law",
    to: "https://ojijohrlaw.com/",
    external: true,
  },
  {
    lens: "Preempt",
    title: "Workplace investigations",
    body: "Disciplinary process, grievance handling, mediation and labour-office conciliation when an issue has to be identified and handled before it becomes a larger organisational problem.",
    Icon: Search,
    routeLabel: "Explore Ojijo HR Law",
    to: "https://ojijohrlaw.com/",
    external: true,
  },
  {
    lens: "Secure",
    title: "Employer representation",
    body: "Strategic advice and representation in employment and labour disputes, including matters before the Employment and Labour Relations Court — protecting organisational interests with defensible process.",
    Icon: Briefcase,
    routeLabel: "Explore Ojijo HR Law",
    to: "https://ojijohrlaw.com/",
    external: true,
  },
  {
    lens: "Prevent",
    title: "Training & professional development",
    body: "Workshops, masterclasses and East Africa programmes that build awareness and better workplace decisions — with IHRM CPD on listed events.",
    Icon: GraduationCap,
    routeLabel: "View training",
    to: "/training",
  },
  {
    lens: "Secure",
    title: "Broader legal practice",
    body: "A Nairobi law firm for matters that sit outside the employment and HR vertical — legal support when the organisation’s interests reach beyond the specialist employment arm.",
    Icon: Building2,
    routeLabel: "Explore Ojijo Senaji Advocates",
    to: "https://ojijosenaji.com/",
    external: true,
  },
];

export const audiences = [
  {
    title: "Employers & boards",
    body: "Organisations that need specialist advice on employment decisions, restructuring, workplace risk and institutional exposure.",
  },
  {
    title: "HR & compliance leaders",
    body: "HR directors, managers and officers responsible for policy, process, investigations and professional development.",
  },
  {
    title: "Institutions",
    body: "NGOs, public bodies, schools, SACCOs, healthcare, manufacturing, hospitality and related sectors named on the Group’s public site.",
  },
];

/* Sectors named on ojijogroup.com. Not a client list. */
export const sectors = [
  "Manufacturing",
  "Hospitality",
  "NGOs & INGOs",
  "Financial institutions & SACCOs",
  "Education",
  "Healthcare",
  "Logistics & transport",
  "Government & parastatals",
];

export const philosophy = {
  headingLines: ["Our approach"] as const,
  lead: "The three words are a working philosophy, not three business units. They describe how the Group’s verified legal, HR, advisory and training work is meant to land.",
  steps: [
    {
      title: "Preempt",
      body: "Help organisations identify legal, HR and organisational issues before they become larger problems — through advisory, risk awareness and early strategic guidance.",
    },
    {
      title: "Prevent",
      body: "Support stronger systems: documentation, HR process, compliance, governance and the decision-making that keeps exposure from compounding.",
    },
    {
      title: "Secure",
      body: "Protect organisational interests, people and institutional position through defensible process, legal support, workforce governance and professional development.",
    },
  ],
};

export const capabilityAside = {
  headingLines: ["Specialist arms,", "one identity"] as const,
  body: "These are the Group-level themes. Detailed delivery sits on the specialist sites and on Luma.",
};

export const capabilityLines = [
  "Employment and labour law",
  "HR legal consulting",
  "Workplace investigations",
  "Professional training",
  "Broader legal practice",
];

export interface Entity {
  id: string;
  name: string;
  legalName?: string;
  category: string;
  relation: string;
  description: string;
  focus: string;
  audience: string;
  why: string;
  cta: string;
  href: string;
  external: boolean;
}

export const entities: Entity[] = [
  {
    id: "hr-law",
    name: "Ojijo HR Law",
    legalName: "Ojijo & Partners Consulting",
    category: "Employment, labour & HR law",
    relation: "Specialist consulting arm of Ojijo Group.",
    description:
      "An employment, industrial-relations and human-resources consulting practice: advisory, consulting, mediation and professional training for modern workplaces.",
    focus: "Employer-side employment law, HR compliance, workplace process and related training.",
    audience: "HR managers, corporate employers, county governments and NGOs.",
    why: "Use this destination when the work is employment, labour or HR-law — not a general legal file.",
    cta: "Explore Ojijo HR Law",
    href: "https://ojijohrlaw.com/",
    external: true,
  },
  {
    id: "senaji",
    name: "Ojijo Senaji Advocates",
    category: "Full-service legal practice",
    relation: "The Group’s broader legal-practice destination.",
    description:
      "A Nairobi law firm for clients whose matter sits outside the specialist employment and HR vertical.",
    focus: "General legal practice for matters that sit outside employment and HR consulting.",
    audience: "Corporate clients, individuals and institutions needing counsel beyond HR-law.",
    why: "Use this destination for legal work that is not an employment or HR consulting brief.",
    cta: "Explore Ojijo Senaji Advocates",
    href: "https://ojijosenaji.com/",
    external: true,
  },
  {
    id: "training",
    name: "Ojijo Group Training",
    category: "Professional development",
    relation: "The Group’s training and events destination — not presented here as a separate company.",
    description:
      "Workshops, masterclasses and regional programmes for HR professionals, managers and employers. Registration is completed on Luma.",
    focus: "Capacity development, including listed events that carry IHRM CPD points.",
    audience: "HR practitioners, line managers, compliance officers and organisational leaders.",
    why: "Use this destination to find a programme and register. This Group site does not take payment.",
    cta: "View training",
    href: "/training",
    external: false,
  },
];

export const leadership = {
  eyebrow: "GROUP LEADERSHIP",
  name: "Kepher Kiche Ojijo",
  role: "Managing Director, Ojijo Group",
  body: "Nominated for the Forty Under 40 Africa 2026 Law list.",
  cta: "Get in touch",
  href: "/contact",
};

export const specialistPractices = [
  {
    eyebrow: "SPECIALIST PRACTICE",
    name: "Ojijo HR Law",
    role: "Employment, labour and HR consulting",
    body: "Employer-side employment law, HR compliance and workplace training for modern organisations.",
    cta: "Visit the practice",
    href: "https://ojijohrlaw.com/",
    external: true,
  },
  {
    eyebrow: "SPECIALIST PRACTICE",
    name: "Ojijo Senaji Advocates",
    role: "Full-service legal practice",
    body: "A Nairobi law firm for matters that sit outside employment and HR.",
    cta: "Visit the law firm",
    href: "https://ojijosenaji.com/",
    external: true,
  },
] as const;

export interface TrainingEvent {
  id: string;
  title: string;
  dateLabel: string;
  format: string;
  location: string;
  fee: string | null;
  cpd: string | null;
  audience: string | null;
  summary: string;
  href: string;
  status: "upcoming" | "past";
}

export const trainingIntro = {
  titleLines: ["Training &", "professional development."] as const,
  body: "Training is one of the ways Ojijo Group helps organisations prevent problems and strengthen capability: knowledge, then awareness, then better decisions and tighter processes. This website is the discovery layer. Registration, ticketing and payment are completed on Luma.",
  calendarHref: "https://luma.com/ojijogrouptraining",
  calendarLabel: "Open the Luma calendar",
};

export const entityGateway = {
  heading: "Our Entities",
  lead: "Specialist destinations inside Ojijo Group. Each card states the arm’s role and opens its official site or training calendar.",
};

export const consultationCta = {
  titleLines: ["Preempt the risk.", "Prevent the exposure.", "Secure what matters."] as const,
  body: "Talk to Ojijo Group if you need the front door. Go directly to a specialist arm if you already know the work — employment and HR consulting, a broader legal practice, or a training place.",
  button: "Talk to Ojijo Group",
  cardTitle: "Group enquiry",
  cardBody:
    "Kilimani, Nairobi. Call or write — the Group mailbox is the front door, not a case intake system for every entity.",
};

export const pageCopy = {
  about: {
    eyebrow: "About",
    title: "Who we are.",
    lead: "Ojijo Group is the umbrella professional identity bringing together specialist capabilities that serve organisations and professionals.",
  },
  expertise: {
    eyebrow: "Our Expertise",
    title: "How the Group works.",
    lead: "Capabilities that support the Group philosophy through actual legal, HR, advisory and training work — then route to the specialist arm that delivers it.",
  },
  entities: {
    eyebrow: "Our Entities",
    title: "Specialist destinations.",
    lead: "The Group sits above these arms. Each destination keeps its own specialist identity, audience and official site.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Talk to Ojijo Group.",
    lead: "Start with the Group if you are not sure which specialist arm you need. Direct specialist work can go to the entity websites.",
  },
};

export const trainingEvents: TrainingEvent[] = [
  {
    id: "dpa-2026-09-25",
    title: "Employer & The Data Protection Act: Do’s & Don’ts",
    dateLabel: "25 September 2026",
    format: "Virtual",
    location: "Online",
    fee: "KES 5,000",
    cpd: "1 IHRM CPD point",
    audience: "HR professionals and anyone handling employee data",
    summary:
      "A practical session on what employee information employers collect, how it is handled, and the do’s and don’ts of workplace data protection.",
    href: "https://luma.com/55hm85gn",
    status: "upcoming",
  },
  {
    id: "zanzibar-2026-10",
    title: "Annual East Africa Benchmark on Effective Corporate Governance, Management & Leadership strategies",
    dateLabel: "13–16 October 2026",
    format: "In person",
    location: "Hotel Verde Zanzibar — Azam Luxury Resort & Spa",
    fee: null,
    cpd: null,
    audience: "Executive management and business owners",
    summary: "A destination programme on corporate governance, management and leadership. Fee is omitted until confirmed on the registration page.",
    href: "https://luma.com/lhi93y9l",
    status: "upcoming",
  },
  {
    id: "consortium-2026-10",
    title: "East Africa Annual HR Law Consortium — A Benchmark on Global HR Best Practices",
    dateLabel: "21–23 October 2026",
    format: "In person",
    location: "Diamonds Hotel, Malindi",
    fee: "KES 60,000",
    cpd: "6 IHRM CPD points",
    audience: "HR leaders, legal and compliance practitioners, organisational leaders",
    summary:
      "Dates and fee are taken from the Luma registration page. A marketing page on ojijohrlaw.com lists different dates; Luma is treated as the operational source until the client confirms.",
    href: "https://luma.com/7win5gi3",
    status: "upcoming",
  },
];

export const footerColumns = [
  {
    heading: "Ojijo Group",
    split: true,
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Our Expertise", to: "/expertise" },
      { label: "Our Entities", to: "/entities" },
      { label: "Training", to: "/training" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Our Entities",
    split: false,
    links: [
      { label: "Ojijo HR Law", to: "https://ojijohrlaw.com/", external: true },
      { label: "Ojijo Senaji Advocates", to: "https://ojijosenaji.com/", external: true },
      { label: "Ojijo Group Training", to: "https://luma.com/ojijogrouptraining", external: true },
    ],
  },
  {
    heading: "Training",
    split: false,
    links: [
      { label: "Upcoming programmes", to: "/training" },
      { label: "Luma calendar", to: "https://luma.com/ojijogrouptraining", external: true },
    ],
  },
];
