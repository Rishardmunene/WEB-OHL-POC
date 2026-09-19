/* -----------------------------------------------------------------------------
 * Home page content.
 *
 * Rebranded to Ojijo HR Law (decision B2). Body copy remains lorem ipsum
 * pending real text.
 *
 * Content is NOT a fidelity target — content LENGTH is (spec §A rule 4). Heading
 * line counts and paragraph depth drive the measured section proportions, so
 * when real copy arrives, preserve the shape: practice titles stay on one line,
 * the hero headline stays two lines, section headings stay two lines.
 *
 * Practice areas were re-pointed from the reference's general-practice list
 * (Car Accident, Wrongful Death...) to employment-law subjects, because an HR
 * law firm advertising road-accident work would be incoherent. Titles were kept
 * to two words each so the single-line constraint holds.
 *
 * Imagery is local (public/images/). See public/images/MANIFEST.json for the
 * provenance of each file and which ones are substitutes.
 * -------------------------------------------------------------------------- */

import {
  Briefcase,
  ClipboardCheck,
  FileSignature,
  Heart,
  Medal,
  Scale,
  ScrollText,
  UserMinus,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "Ojijo HR Law",
  tagline: "Employment & HR Law",
};

const LOREM_SHORT =
  "There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.";

export interface PracticeArea {
  title: string;
  body: string;
  Icon: LucideIcon;
}

/* Thin-stroke line icons, gold on dark — OBSERVED (spec §C.8). The forensic
   reconstruction used FontAwesome SOLID glyphs, wrong in both style and choice. */
export const practiceAreas: PracticeArea[] = [
  { title: "Employment Contracts", body: LOREM_SHORT, Icon: FileSignature },
  { title: "Workplace Disputes", body: LOREM_SHORT, Icon: Scale },
  { title: "Unfair Dismissal", body: LOREM_SHORT, Icon: UserMinus },
  { title: "Discrimination Claims", body: LOREM_SHORT, Icon: UsersRound },
  { title: "Labour Compliance", body: LOREM_SHORT, Icon: ClipboardCheck },
  { title: "Redundancy Advice", body: LOREM_SHORT, Icon: Briefcase },
];

/* Correction H-2: these live in the Intro section in normal flow, not floated
   out of the hero. */
export const introStats = [
  { value: "95%", label: "Case Success", variant: "dark" as const, Icon: ScrollText },
  { value: "35+", label: "Years\nExperience", variant: "gold" as const, Icon: null },
];

/* Correction H-10: number inside a gold ring badge, small gold icon above it,
   serif label, extra muted line. Third box is dark, photographic, left-aligned. */
export const lightStats = [
  {
    value: "7230",
    label: "Trusted Clients",
    note: "There are of Lorem Ipsum",
    Icon: Heart,
    variant: "light" as const,
  },
  {
    value: "98%",
    label: "Successful Cases",
    note: "There are of Lorem Ipsum",
    Icon: Medal,
    variant: "light" as const,
  },
  {
    value: "15,890+",
    label: "Employment Claims\nResolved",
    note: null,
    Icon: null,
    variant: "photo" as const,
    image: "/images/stat-panel-background.jpg",
  },
];

export const partners = ["Home&&", "U/S", "B R A N D", "Nature Home", "|||||"];

/* Correction H-7: gold year heading above a muted paragraph, flush left, with no
   connector line and no markers. */
export const timeline = [
  { year: "1995 — Opening", body: LOREM_SHORT },
  { year: "2011 — Open Branch Office", body: LOREM_SHORT },
  { year: "2015 — 10,000 Clients", body: LOREM_SHORT },
  { year: "2020 — Best Law Firm Award", body: "There are many variations of passages of Lorem Ipsum available." },
];

export const skills = [
  { label: "Employment Tribunals", value: 75 },
  { label: "Contracts And Policy", value: 80 },
  { label: "Collective Bargaining", value: 75 },
  { label: "Workplace Investigations", value: 90 },
];

const QUOTE =
  "There are of Lorem Ipsum available, but the majority have to alteration in some form, by injected or which don't look even slightly believable.";

/* Correction H-3: FOUR cards in a staggered grid, one reviewer each, the
   reviewer block floating outside the card. The forensic rendered two cards with
   two reviewers each inside a bordered footer.
 *
 * `lift` follows the screenshots: columns 1 and 3 sit raised with the reviewer
 * below, columns 2 and 4 sit lowered with the reviewer above. */
export const testimonials = [
  {
    quote: QUOTE,
    lift: "raised" as const,
    reviewer: { name: "Nattasha", role: "Junior Lawyer", photo: "/images/reviewer-2.jpg" },
  },
  {
    quote: QUOTE,
    lift: "lowered" as const,
    reviewer: { name: "Minci Pall", role: "Consultant", photo: "/images/reviewer-1.jpg" },
  },
  {
    quote: QUOTE,
    lift: "raised" as const,
    reviewer: { name: "Julia Rose", role: "Consultant", photo: "/images/reviewer-4.jpg" },
  },
  {
    quote: QUOTE,
    lift: "lowered" as const,
    reviewer: { name: "John David", role: "Designer", photo: "/images/reviewer-3.jpg" },
  },
];

export const attorneys = [
  { name: "Thomas Daniyel", role: "Employment Counsel", photo: "/images/attorney-1.jpg" },
  { name: "Nikolona Gail", role: "Senior Attorney", photo: "/images/attorney-2.jpg" },
  { name: "Michal David", role: "Tribunal Advocate", photo: "/images/attorney-3.jpg" },
];

export const featuredPost = {
  category: "Employment Law, Tribunals",
  date: "Sunday, July 24, 2022",
  title: "An Independent Examination Of\nCharity Accounts",
  excerpt:
    "There are of Lorem Ipsum available, but the majority have in alteration in some form, by injected or which don't look even slightly believable.",
  image: "/images/blog-featured.jpg",
};

const BLOG_EXCERPT =
  "There are of Lorem Ipsum available, but majority have alteration in some form, by injected or which don't look even slightly believable.";

/* Correction H-4: SIX cards, 3 x 2. The forensic rendered three. */
export const blogPosts = [
  {
    category: "Legal Advice",
    date: "Sunday, July 24, 2022",
    title: "Prevent A Further Breach Of The Peace In The States",
    excerpt: BLOG_EXCERPT,
    image: "/images/blog-1.jpg",
  },
  {
    category: "Legal Advice",
    date: "Friday, August 15, 2022",
    title: "Failing To Carry Out The Terms Of A Business Contract",
    excerpt: BLOG_EXCERPT,
    image: "/images/blog-2.jpg",
  },
  {
    category: "Legal Advice",
    date: "Sunday, July 24, 2022",
    title: "How Legal Professionals Work: The Defense Objects",
    excerpt: BLOG_EXCERPT,
    image: "/images/blog-3.jpg",
  },
  {
    category: "Legal Advice",
    date: "Sunday, July 24, 2022",
    title: "Riding Solo To The Rescue Of Her Beloved Nonprofits",
    excerpt: BLOG_EXCERPT,
    image: "/images/blog-4.jpg",
  },
  {
    category: "Legal Advice",
    date: "Friday, August 15, 2022",
    title: "Case Filed On Behalf Of An Injured Tugboat Worker",
    excerpt: BLOG_EXCERPT,
    image: "/images/blog-5.jpg",
  },
  {
    category: "Legal Advice",
    date: "Sunday, July 24, 2022",
    title: "How Companies Choose Legal Representation",
    excerpt: BLOG_EXCERPT,
    image: "/images/blog-6.jpg",
  },
];

/* Correction H-17: the first column holds two sub-columns. */
export const footerColumns = [
  {
    heading: "Quick Link",
    split: true,
    links: [
      "Home",
      "About",
      "Contact",
      "Blog",
      "Blog Post",
      "Lawyers",
      "Lawyer Single",
      "Case Results",
      "Practice Areas",
      "Packages",
      "Package Single",
    ],
  },
  {
    heading: "Utility Page",
    split: false,
    links: ["Start Here", "Style Guide", "404 Not Found", "Password Protected", "Licenses", "Changelog"],
  },
  {
    heading: "Practice Area",
    split: false,
    links: [
      "Employment Contracts",
      "Workplace Disputes",
      "Unfair Dismissal",
      "Discrimination Claims",
      "Redundancy Advice",
    ],
  },
];

/* Reference typos ("Conaetct Us", "Appoinment", "Arease", "Experiance") are
   corrected — deviation J-13, permitted by the rebrand decision. */
export const contactDetails = {
  addressLabel: "Head Office Address",
  address: "121 King Street,\nMelbourne West, Australia",
  phone: "(011) 9876 54321",
  email: "info@ojijohrlaw.com",
};

/* Correction L-1: no gold active state — "Home" reads white like its siblings. */
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Pages", to: "#", hasDropdown: true },
  { label: "Contact Us", to: "/contact" },
];
