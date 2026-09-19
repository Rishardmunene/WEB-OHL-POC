/* -----------------------------------------------------------------------------
 * Stage 0 content scaffold.
 *
 * Copy is transferred verbatim from the forensic reconstruction. Under decision
 * B2 (rebrand) this is PLACEHOLDER and is not an evidence-fidelity target.
 *
 * Line counts ARE a fidelity constraint: heading wrap and paragraph depth drive
 * the measured section proportions (spec rule A.4). When real Ojijo HR Law copy
 * lands, preserve the line counts recorded in `lines` below.
 * -------------------------------------------------------------------------- */

const LOREM_SHORT =
  "There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.";

export const practiceAreas = [
  { title: "Business Law", body: LOREM_SHORT, faIcon: "fa-solid fa-briefcase" },
  { title: "Construction Law", body: LOREM_SHORT, faIcon: "fa-solid fa-helmet-safety" },
  { title: "Car Accident", body: LOREM_SHORT, faIcon: "fa-solid fa-car-burst" },
  { title: "Wrongful Death", body: LOREM_SHORT, faIcon: "fa-solid fa-skull" },
  { title: "Criminal Law", body: LOREM_SHORT, faIcon: "fa-solid fa-handcuffs" },
  { title: "Family Law", body: LOREM_SHORT, faIcon: "fa-solid fa-users" },
];

export const introStats = [
  { value: "95%", label: "Case Success", variant: "dark" as const, faIcon: "fa-regular fa-file-lines" },
  { value: "35+", label: "Years Experience", variant: "gold" as const, faIcon: "fa-solid fa-scale-balanced" },
];

export const lightStats = [
  { value: "7230", label: "Trusted Clients", faIcon: "fa-regular fa-heart", variant: "light" as const },
  { value: "98%", label: "Successful Cases", faIcon: "fa-solid fa-medal", variant: "light" as const },
  { value: "15,890+", label: "Criminal Defense\nCase Served", faIcon: null, variant: "dark" as const },
];

export const partners = ["Home&&", "U/S", "B R A N D", "Nature Home", "|||||"];

export const timeline = [
  { year: "1995 - Opening", body: LOREM_SHORT },
  { year: "2011 - Open Branch Office", body: LOREM_SHORT },
  { year: "2015 - 10000K Client's", body: LOREM_SHORT },
  { year: "2020 - Best Law & Firm Awards", body: "There are many variations of passages of Lorem Ipsum available." },
];

export const skills = [
  { label: "Divorce And Family Cases", value: 75 },
  { label: "Property And Construction", value: 80 },
  { label: "Banking And Finance", value: 75 },
  { label: "Banking And Finance", value: 90 },
];

const QUOTE =
  "There are of Lorem Ipsum available, but the majority have to alteration in some form, by injected or which don't look even slightly believable.";

/* H-3: evidence shows FOUR cards with reviewers floating outside them.
   Stage 0 reproduces the baseline's two-card / two-reviewer grouping. */
export const testimonials = [
  {
    quote: QUOTE,
    reviewers: [
      { name: "Minci pull", role: "Consultant", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" },
      { name: "Natasha", role: "Junior Lawyer", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" },
    ],
  },
  {
    quote: QUOTE,
    reviewers: [
      { name: "John David", role: "Designer", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
      { name: "Julia Rose", role: "Consultant", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" },
    ],
  },
];

export const attorneys = [
  { name: "Thomas Daniyel", role: "Civil Attorney", photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80" },
  { name: "Nikoloma Gail", role: "Senior Attorney", photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" },
  { name: "Michal David", role: "Criminal Attorney", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
];

export const featuredPost = {
  category: "Criminal Law, Kidnapping",
  date: "Sunday, July 24, 2022",
  title: "An Independent Examination Of\nCharity Accounts",
  excerpt:
    "There are of Lorem Ipsum available, but the majority have in alteration in some form, by injected or which don't look even slightly believable.",
  image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=800&q=80",
};

const BLOG_EXCERPT =
  "There are of Lorem Ipsum available, but majority have alteration in some form, by injected or which don't look even slightly believable.";

/* H-4: evidence shows SIX cards. Stage 0 reproduces the baseline's three. */
export const blogPosts = [
  { category: "Legal Advice", date: "Sunday, July 24, 2022", title: "Prevent A Further Breach of The Peace In The States", excerpt: BLOG_EXCERPT, image: "https://images.unsplash.com/photo-1505664177922-24155b93d6e4?auto=format&fit=crop&w=400&q=80" },
  { category: "Legal Advice", date: "Friday, August 15, 2022", title: "Failing to Carry Out The Terms Of A Business Contract", excerpt: BLOG_EXCERPT, image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80" },
  { category: "Legal Advice", date: "Sunday, July 24, 2022", title: "How Legal Professionals Work: The Defense Objects In The Event", excerpt: BLOG_EXCERPT, image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=400&q=80" },
];

/* H-17: evidence shows the first column split into two sub-columns. */
export const footerColumns = [
  { heading: "Quick Link", links: ["Home", "About", "Contact", "Blog", "Blog Post", "Lawyers"] },
  { heading: "Utility Page", links: ["Start Here", "Style Guide", "404 Not Found", "Password Protected", "Licenses", "Changelog"] },
  { heading: "Practice Area", links: ["Family Law", "Criminal Law", "Personal Injury", "Real Estate Law", "Business Law"] },
];

export const contactDetails = {
  address: "Head Office Address 121 King Street,\nMelbourne West Australia",
  phone: "(011) 9876 54321",
  email: "Info@Example.com",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Pages", to: "#", hasDropdown: true },
  { label: "Contact Us", to: "/contact" },
];
