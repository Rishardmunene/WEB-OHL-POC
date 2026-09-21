# Ojijo Group Website

Official **Ojijo Group** umbrella site: a professional gateway, not a specialist practice homepage.

This repository is a Vite + React application. Copy, routes, and visual language describe **Ojijo Group**. Ojijo HR Law, Ojijo Senaji Advocates, and Ojijo Group Training remain separate destinations.

---

## Overview

Ojijo Group is the shared professional identity for specialist legal, HR, advisory, and training work. This website’s job is:

1. Introduce the Group.
2. State the Group philosophy: **preempt. Prevent. Secure.**
3. Outline Group-level capabilities (and where the work is delivered).
4. Present the specialist entities.
5. Help a visitor choose the right destination.
6. Introduce Group training.
7. Send people to specialist sites and to **Luma** for registration.
8. Offer a Group-level contact path.

It is **not** the Ojijo HR Law website. It does not replace `ojijohrlaw.com`, `ojijosenaji.com`, or Luma. It does not take payment, run a CMS, or host a full service catalogue.

The npm package name (`web-ohl-poc`) is a leftover from the original proof-of-concept. Treat the product as **Ojijo Group**.

---

## Purpose of the website

| This site is | This site is not |
| --- | --- |
| The Group front door | A duplicate of any specialist site |
| Discovery and routing | Case intake for every entity |
| Philosophy and ecosystem | Three companies named Preempt, Prevent, and Secure |
| Training *discovery* | Training checkout |
| Group enquiry (`info@ojijogroup.com`) | The HR Law or Senaji mailbox |

Live `ojijogroup.com` (as reviewed during the Group work) was an employment-law brochure, not this umbrella model. Shipping this app on that domain is a **repositioning**. Confirm domain and live-site strategy with the client before treating this repo as the production homepage.

---

## Ojijo Group brand philosophy

The primary brand expression is:

> **preempt. Prevent. Secure.**

That line is the conceptual anchor of the site (hero, metadata, approach section, consultation close, footer). It is **not** a slogan invented for this build, and it is **not** three products, three teams, or three companies.

Intended progression:

```text
PREEMPT
Identify risks, issues and emerging challenges.

        ↓

PREVENT
Put appropriate measures, processes and guidance in place.

        ↓

SECURE
Protect people, processes, interests and organisational position.
```

On the site:

- **Preempt** is early identification: advisory, investigations, seeing employment and HR risk before it hardens.
- **Prevent** is systems: documentation, HR process, compliance, training that improves decisions.
- **Secure** is protection of organisational interests, people, and position through defensible process, legal support, and governance. It does **not** mean cybersecurity, shields, or padlocks.

Supporting descriptor (Luma / Group voice, secondary to the philosophy):

> Business law consulting, HR consulting, employment-law advisory and capacity development.

Do not replace the philosophy with generic lines such as “specialist expertise” or “your in-house HR lawyers.” Do not stamp the three words on every entity card. The Group holds the line; each entity states its specialist role.

---

## Group and entity architecture

```text
Ojijo Group                          ← this website (gateway)
    │
    ├── Ojijo HR Law
    │     (legal name: Ojijo & Partners Consulting)
    │     https://ojijohrlaw.com/
    │
    ├── Ojijo Senaji Advocates
    │     https://ojijosenaji.com/
    │
    └── Ojijo Group Training
          Luma calendar + event pages
          https://luma.com/ojijogrouptraining
```

**The Group website is the gateway. Specialist websites remain the detailed destinations.**

Until shareholding is confirmed, public language treats these as **specialist arms / sister professional brands under the Ojijo Group name**, sharing Nairobi presence and leadership — not as a proven parent/subsidiary chart. Ojijo Group Training is a **destination**, not a verified separate company. Do not invent a fourth legal entity.

| Arm | Role on this site | Does not belong here |
| --- | --- | --- |
| **Ojijo Group** | Identity, philosophy, ecosystem map, Group enquiry, training discovery | Full delivery of every brief |
| **Ojijo HR Law** | Employment, labour, HR consulting, investigations, employer-side ELRC work | Full HR Law catalogue, articles, workshop CMS |
| **Ojijo Senaji Advocates** | Broader legal practice for work outside employment/HR | Invented practice-area lists, “55 specialists” unless confirmed |
| **Ojijo Group Training** | Upcoming programmes, CPD where listed, Luma CTAs | Ticketing, MPESA, approval workflow |

---

## Website information architecture

Implemented routes (`src/App.tsx`):

| Path | Nav label | Purpose |
| --- | --- | --- |
| `/` | Home | Group introduction and primary routing |
| `/about` | About | Identity, approach, leadership, ecosystem |
| `/expertise` | Our Expertise | Group-level capabilities with destination CTAs |
| `/entities` | Our Entities | Fuller directory of specialist arms |
| `/training` | Training | Programme discovery; registration on Luma |
| `/contact` | Contact | Group enquiry and contact details |

There is no `/insights` route and no cart. Inner pages share the same header and footer. Changing route remounts `.page-frame` and scrolls to the top.

Header CTA: **Talk to Ojijo Group** → `/contact`.

---

## Homepage structure

`src/pages/Home.tsx` composes sections in this order. Several component **filenames** still come from the original template; the **role** is what matters.

| Order | Component | What it does now |
| --- | --- | --- |
| 1 | `Hero` | Full-bleed photograph, Group eyebrow, **preempt. Prevent. Secure.**, two CTAs (Group / Entities) |
| 2 | `IntroSection` | “Built to Preempt. Structured to Prevent. Positioned to Secure.” Group paragraph, Kepher signature, presence strip (Kilimani, Nairobi / across Kenya) |
| 3 | `PracticeAreas` | Six expertise cards, each with a Preempt / Prevent / Secure *lens* and a destination CTA |
| 4 | `HelpStats` | Who the Group serves (employers & boards, HR & compliance leaders, institutions) plus sectors named on the public Group site — **not** fake KPIs |
| 5 | `HistorySkills` | “Our approach” (the three philosophy steps) and “Specialist arms, one identity” |
| 6 | `Testimonials` | **Our Entities** gateway — three cards (HR Law, Senaji, Training). Not quotes |
| 7 | `Attorneys` | Leadership + specialist practices: Kepher (Group MD), Ojijo HR Law, Ojijo Senaji Advocates |
| 8 | `ConsultationCTA` | “Preempt the risk. Prevent the exposure. Secure what matters.” plus Group enquiry card |
| 9 | `ConsultationForm` | Display prototype; no submission backend |
| 10 | `BlogSection` | **Upcoming training** from verified Luma programmes — not a magazine |
| 11 | `PreFooterBand` | Decorative full-bleed image |

`SiteHeader` and `SiteFooter` wrap every page in `App.tsx`.

---

## Inner pages

- **About** — page hero, intro, approach, leadership, Group CTA.
- **Our Expertise** — page hero, expertise grid, audiences/sectors, Group CTA.
- **Our Entities** — one profile block per arm (what it does, who it serves, focus, why engage, CTA).
- **Training** — explicit note that Luma handles ticketing and payment; cards for the three upcoming programmes; calendar link.
- **Contact** — Kilimani locality, both Group phones, `info@ojijogroup.com`, then the same enquiry form as the home page.

---

## Content principles

Copy lives mainly in `src/content/group.ts`. Hierarchy used for that file:

> Group brief → verified research → live official sites / Luma → connective copy.

**Publish only what is verified.** If a claim is unresolved, omit it. Do not invent a plausible substitute.

Do not fabricate:

- statistics, conversion rates, or client counts
- awards presented as wins (Kepher is shown as **nominated** for Forty Under 40 Africa 2026 Law — not as a confirmed global winner)
- testimonials or named reviewers
- years of experience, founding year, or a historical timeline
- team members besides **Kepher Kiche Ojijo**
- street addresses (two Nairobi streets remain unresolved; the site states **Kilimani, Nairobi, Kenya**)
- articles, blog posts, or thought-leadership pieces
- named clients (sectors only)
- Senaji practice menus taken from third-party directories
- partnership badges for IHRM / NITA / LSK unless the exact relationship is confirmed

Why: the original template shipped invented KPIs, Melbourne contact, fake lawyers, and stock blog titles. Repeating that pattern would misrepresent a professional services group.

On this site Kepher is **Managing Director, Ojijo Group** only. Do not add Managing Partner of Senaji or any other title unless the client asks for it in Group copy.

---

## Design philosophy

The site is **formal, modern, premium, and restrained**. It should feel appropriate for legal services, HR advisory, consulting, and executive training.

It should not resemble a creative-agency portfolio, a startup landing page, a SaaS dashboard, or an experimental motion piece.

Visual system in practice:

- Editorial serif headings (**Playfair Display**) and sans body (**Inter**).
- Calligraphic signature (**Great Vibes**) on Kepher’s name only.
- Dark / deep / light section rhythm (`#1e2833`, `#161d28`, white).
- Two-gold system: `#CFAF71` on dark surfaces, `#877249` on light (contrast). Components read `--accent` from `.on-dark` / `.on-light` so gold is not placed on white by accident.
- Hairline rules and ornamental crossed dividers (`OrnamentalDivider`).
- Container at **73.7vw**, capped at **1280px**.
- Slightly rounded cards, not pill UI.
- Restrained shadows; hover lift of a few pixels.
- Understated interaction, not spectacle.

Full-bleed bands (hero, header, pre-footer) stay square. Cards and controls take the radius tokens.

---

## Radius and shadow

From `src/styles/tokens.css` (current implementation — not the original forensic radius-0):

| Token | Value | Use |
| --- | --- | --- |
| `--radius-control` / `--radius-button` | `8px` | Inputs, icon wells, buttons |
| `--radius-card` | `14px` | Cards |
| `--radius-feature` | `18px` | Form panel, history panel, consult card |
| `--radius-circle` | `9999px` | True circles only (icon wells) |

Objective: **softened sophistication**, not bubble UI. Do not raise these into large pills.

Shadows (restrained, no looping animation):

| Token | Typical use |
| --- | --- |
| `--shadow-0` | Resting buttons |
| `--shadow-1` … `--shadow-3` | Light elevation scale |
| `--shadow-card` / `--shadow-card-hover` | Cards (stronger on dark, softer on light) |

Header shadow interpolates with `--scroll-progress`. Do not introduce large cinematic drop shadows.

---

## Interaction and motion

Motion supports hierarchy, feedback, and continuity. It is not the content. Avoid continuous or expensive animation.

| Token | Value |
| --- | --- |
| `--motion-fast` | `160ms` (buttons, small chrome) |
| `--motion-normal` | `220ms` (cards, header-adjacent) |
| `--motion-slow` | `420ms` (scroll reveal) |
| `--motion-page` | `240ms` (page enter) |
| `--ease-standard` | `cubic-bezier(0.22, 1, 0.36, 1)` |

Stagger on grids uses `--reveal-delay` (typically 70–80ms steps).

**Cards** — slight `translateY(-3px)`, stronger shadow, gold-tinted border.

**Buttons** — shade / border / colour change, `translateY(-1px)` on hover, settle on active. External CTAs move the `ArrowUpRight` icon.

**Navigation** — sticky two-row header. `--scroll-progress` (0→1 over the first 180px of scroll) interpolates background opacity, `backdrop-filter` blur, shadow, and row compression. Written from a **single passive scroll listener**, rAF-throttled, as a CSS variable — not React state. Inner pages set `data-solid` so the header starts fully solid. Active `NavLink` is gold-underlined. Mobile: disclosure menu.

**Social icons** — colour shift on hover.

**Forms** — gold focus ring; field borders meet contrast requirements (stronger than the original template underlines).

**Scroll reveal** — `useReveal` + `.reveal` / `.is-visible`. `IntersectionObserver` only (no scroll listener). Elements start at `opacity: 0` and `translateY(12px)`.

**Page transitions** — implemented. `App` remounts `<div className="page-frame" key={pathname}>`. CSS animation `page-enter`: opacity 0→1 and `translateY(8px)`→none over `240ms`.

**Reduced motion** — tokens collapse to `1ms`; reveal and page-frame animations are disabled; hover transforms are removed.

---

## Responsive design

Hand-authored bands in `src/styles/responsive.css` (inferred; the original reference was desktop screenshots only):

| Band | Behaviour |
| --- | --- |
| Default / ≥1280 | Desktop geometry; 3-column entity and leadership grids with CSS subgrid |
| ≤1279 | Fluid container still capped by ratio; footer contact row wraps |
| ≤1023 | Two-column grids where they remain readable; **entity and leadership cards stack to one column** so labels and CTAs are not crushed |
| ≤767 | Single column; nav behind a toggle; header contact row hidden (still in footer and contact page) |
| ≤479 | Tighter type and padding |

Principles: recompose rather than scale everything down; no horizontal overflow; CTAs stay tappable; forms stay usable.

A Puppeteer harness (`tools/qa.mjs`) still defines viewports **1920, 1728, 1440, 1280, 1024, 768, 480, 390, 375**. That harness was built for the forensic reconstruction. Later Group-era visual checks were done at desktop, 1024, tablet (768), and mobile (~390) widths. Do not treat `qa/stage0-report.json` / `qa/stage9-report.json` as a pass report for the current Group copy.

---

## External destinations

These URLs are intentional exits. `SmartLink` opens `http(s)` targets in a new tab, adds an arrow icon, and announces “opens in a new tab”. Do not turn them into internal routes unless the IA is deliberately changed.

| Destination | Purpose |
| --- | --- |
| [ojijohrlaw.com](https://ojijohrlaw.com/) | Employment, labour, and HR consulting |
| [ojijosenaji.com](https://ojijosenaji.com/) | Full-service legal practice |
| [luma.com/ojijogrouptraining](https://luma.com/ojijogrouptraining) | Training calendar |
| Event Luma pages | Per-programme registration (see training data) |

Social (from the official Group Luma profile; Facebook is not linked because it was not verified there):

| Network | URL |
| --- | --- |
| Instagram | https://instagram.com/ojijo_group |
| X | https://x.com/OjijoGroup |
| LinkedIn | https://www.linkedin.com/company/ojijo-group-originals |

Use the current **X** mark. Do not restore the Twitter bird. Glyphs live in `src/components/icons/SocialIcons.tsx`; the `socialLinks` array is what the footer renders.

---

## Training and Luma

This site **introduces** programmes and **routes** to Luma. It does **not** implement checkout, tickets, or mobile money.

When marketing pages disagree with Luma on dates or fees, **Luma wins** until the client confirms otherwise.

Upcoming programmes currently in `trainingEvents` (as implemented; do not add events that are not in that array):

| Programme | When | Notes |
| --- | --- | --- |
| Employer & The Data Protection Act: Do’s & Don’ts | 25 September 2026 · virtual | KES 5,000 · 1 IHRM CPD · [luma.com/55hm85gn](https://luma.com/55hm85gn) |
| Annual East Africa Benchmark (governance, management, leadership) | 13–16 October 2026 · Hotel Verde, Zanzibar | Fee omitted until confirmed on Luma · [luma.com/lhi93y9l](https://luma.com/lhi93y9l) |
| East Africa Annual HR Law Consortium | 21–23 October 2026 · Diamonds Hotel, Malindi | Luma dates/fee (KES 60,000 · 6 CPD). A marketing page on ojijohrlaw.com listed different dates; copy on this site says so · [luma.com/7win5gi3](https://luma.com/7win5gi3) |

Past programmes are not listed. Do not print MPESA paybills on this site.

---

## Technology stack

Verified from `package.json`, `vite.config.ts`, and `src/`:

| Layer | Actual choice |
| --- | --- |
| UI | React 19 |
| Language | TypeScript (strict) |
| Bundler | Vite 8 (`@vitejs/plugin-react`) |
| Routing | React Router 7 (`BrowserRouter`) |
| Icons | `lucide-react` (UI) + custom SVGs for social brands |
| Styling | **Hand-authored CSS** in four files. Cascade: `tokens.css` → `base.css` → `sections.css` → `responsive.css` |
| Package manager | npm (`package-lock.json`) |
| QA (optional) | `puppeteer-core` + `tools/qa.mjs` (expects local Google Chrome) |

**Installed but unused in `src/`:** Tailwind CSS 4 (`@tailwindcss/vite` is registered in Vite), `tw-animate-css`, `class-variance-authority`, `clsx`, `tailwind-merge`. There is no Tailwind entry stylesheet and no utility classes in components. Do not document this project as a Tailwind or shadcn app.

No animation library beyond CSS. No CMS. No backend. No CI config in this repository. No deployment target is encoded here.

Path alias: `@/` → `src/` (`vite.config.ts` and `tsconfig.json`).

---

## Project structure

```text
WEB-OHL-POC/
├── index.html                 # Document shell, fonts, SEO meta, favicon
├── package.json
├── vite.config.ts
├── public/
│   ├── Logo/Ojijo.png         # Group lockup
│   └── images/                # Section photography (reconstruction inventory)
├── src/
│   ├── main.tsx               # Router + CSS import order
│   ├── App.tsx                # Skip link, header, routes, page-frame, footer
│   ├── pages/                 # One file per route
│   ├── components/            # Section and chrome components
│   ├── content/group.ts       # Copy, nav, entities, training, contact
│   ├── hooks/                 # useReveal, useScrollProgress
│   └── styles/                # Design system CSS
├── tools/                     # qa.mjs and asset scripts from the reconstruction
├── qa/                        # JSON QA reports (PNGs are gitignored)
└── LICENSE
```

A local `STEERING/` folder may still exist on a developer machine (research, content map, confirmations). It is **gitignored and not on the remote**. Do not assume a fresh clone includes it.

`public/images/_originals/` holds uncropped source photographs from the reconstruction pipeline.

---

## Component architecture

Where to change things:

| Need | Start here |
| --- | --- |
| Routes | `src/App.tsx` |
| Nav labels / destinations | `navLinks` in `src/content/group.ts` |
| Copy, entities, events, contact | `src/content/group.ts` |
| Header / footer chrome | `SiteHeader.tsx`, `SiteFooter.tsx` |
| Hero | `Hero.tsx` + `hero` content |
| Intro + presence strip | `IntroSection.tsx` |
| Expertise cards | `PracticeAreas.tsx` + `expertise` |
| Audiences / sectors | `HelpStats.tsx` |
| Philosophy (“Our approach”) | `HistorySkills.tsx` + `philosophy` |
| Entity gateway cards | `Testimonials.tsx` (filename is historical) |
| Leadership row | `Attorneys.tsx` + `leadership` / `specialistPractices` |
| Group CTA band | `ConsultationCTA.tsx` |
| Enquiry form | `ConsultationForm.tsx` |
| Home training teaser | `BlogSection.tsx` (filename is historical) |
| Inner-page title block | `PageHero.tsx` |
| External vs internal links | `SmartLink.tsx` |
| Social glyphs / URLs | `icons/SocialIcons.tsx` |
| Colour, type, motion, radius | `src/styles/tokens.css` |
| Buttons, reveal, page-frame | `src/styles/base.css` |
| Section layout | `src/styles/sections.css` |
| Breakpoints | `src/styles/responsive.css` |

There is no shared `<Button>` React component. Buttons are `.btn` plus a variant (`.btn--gold`, `.btn--outline-light`, `.btn--outline-dark`, `.btn--outline-gold`, `.btn--learn`, `.btn--white`).

There is no `EntityCard.tsx`. Entity cards are markup inside `Testimonials.tsx`. Training cards are markup in `BlogSection.tsx` and `pages/Training.tsx`.

---

## Content architecture

Single module: **`src/content/group.ts`**.

| Export | Holds |
| --- | --- |
| `brand` | Name, philosophy, tagline, logo path |
| `navLinks` / `footerColumns` | IA |
| `contactDetails` | Locality, phones, email |
| `enquiryTopics` | Form routing options |
| `hero`, `intro`, `philosophy`, `capabilityAside` | Homepage/about narrative |
| `expertise` | Six capabilities + philosophy lens + destination |
| `audiences`, `sectors` | Who we serve |
| `entities` | Three specialist arms (directory + gateway) |
| `leadership`, `specialistPractices` | Leadership row |
| `trainingIntro`, `trainingEvents` | Luma programmes |
| `pageCopy` | Inner-page heroes |
| `consultationCta` | CTA band |

Do not scatter new Group claims into JSX. Prefer adding a field in `group.ts`.

---

## Brand assets

- **Logo:** `public/Logo/Ojijo.png` — Ojijo Group lockup. Used in the header and footer (`brand.logo`). Alt text is empty; the accessible name is on the surrounding link/span.
- **Favicon:** the same PNG (`index.html`).
- **Photography:** `public/images/*` — full-bleed hero, intro collage, history panel, form backdrop, training tiles, pre-footer band. These are reconstruction/template photographs, **not** named staff portraits. Do not caption them as Ojijo lawyers.
- **Fonts:** Google Fonts — Inter, Playfair Display, Great Vibes (`index.html`). The original reference faces were never identified; these are documented substitutes.
- **UI icons:** lucide-react, stroke ~1.4–1.75.
- **Social:** custom SVGs. X is the filled official mark, not a bird.

Entity names are typographic, not separate logos, on this site.

---

## SEO and metadata

From `index.html` (static; no per-route document titles):

| Field | Value |
| --- | --- |
| `<title>` | Ojijo Group — preempt. Prevent. Secure. |
| `description` | Group proposition: anticipate risk, strengthen compliance and governance, protect people, processes and interests through advisory, legal, HR and training |
| `og:title` / `og:description` | Same Group positioning; mentions the three destinations |
| Favicon | `/Logo/Ojijo.png` |
| `lang` | `en` |
| `color-scheme` | `dark light` |

Not implemented: `og:image`, Twitter cards, canonical URLs, sitemap, robots, JSON-LD, per-page `<title>`.

Heading pattern: one `h1` per view (hero or `PageHero`), section `h2`s, card `h3`s. Skip link targets `#main`.

Metadata must keep saying **Ojijo Group**, not Ojijo HR Law.

---

## Getting started

Requires Node.js capable of running Vite 8 (no `engines` field is set) and npm.

```bash
npm install
npm run dev
```

Vite prints a local URL (typically `http://localhost:5173/`). The app is a client-side SPA; deep links need the host to fall back to `index.html` in production.

---

## Development commands

Only these scripts exist in `package.json`:

```bash
npm run dev         # Vite development server
npm run build       # tsc -b && vite build
npm run preview     # serve the production build
npm run typecheck   # tsc -b --noEmit
```

There is **no** lint, test, or format script.

Optional visual harness (not an npm script): `node tools/qa.mjs` — expects Chrome at `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`. Written for the forensic pass; update it before treating it as Group-site CI.

---

## Environment variables

**None.** There is no `.env`, no `import.meta.env` usage in `src/`, and no secrets in the app. Contact goes to `mailto:` and `tel:` links.

---

## Development guidelines

### Do

- Keep Ojijo Group as the primary identity.
- Keep specialist sites and Luma as destinations.
- Edit copy in `src/content/group.ts` with verified sources.
- Reuse existing section components and `.btn` variants.
- Use tokens (`--surface-*`, `--accent`, `--radius-*`, `--motion-*`).
- Honour `.on-dark` / `.on-light` (two-gold rule).
- Keep reduced-motion and skip-link behaviour.
- Mark external links with `SmartLink` (new tab + accessible name).
- Align entity and leadership card rows with the existing subgrid pattern.
- Keep Kepher’s public title as Managing Director, Ojijo Group.

### Do not

- Turn the Group site back into an HR Law brochure.
- Invent statistics, testimonials, awards-as-wins, team, or addresses.
- Duplicate specialist catalogues or Luma checkout.
- Treat Preempt / Prevent / Secure as three firms or as cybersecurity.
- Introduce a new colour palette or large decorative shadows.
- Add looping or cinematic animation.
- Use the Twitter bird.
- Drop in unstyled shadcn/Tailwind chrome that ignores this design system.
- Caption reconstruction photographs as staff.
- Publish Kindaruma vs Northcote as *the* HQ until confirmed.

---

## Important design decisions

1. **Group-first architecture** — this property is the umbrella, not a practice site.
2. **Entity gateway** — three specialist destinations; this site does not absorb them.
3. **Luma integration** — discovery here, registration there.
4. **Verified content** — unresolved items are omitted, not guessed.
5. **Philosophy** — **preempt. Prevent. Secure.** is the brand line, not a service menu.
6. **Formal visual language** — editorial type, two golds, hairlines, slight radius, quiet motion.
7. **Micro-interactions** — hover and reveal only; page-frame for continuity.
8. **Relationship language** — specialist arms / sister brands until legal structure is confirmed.
9. **Inert form** — honest prototype copy; visitors are told to email or call.
10. **Subgrid card rows** — entity and leadership cards share segment baselines on desktop.

---

## Project evolution

```text
Original template / HR-law-shaped POC
    ↓
Forensic visual reconstruction (geometry, two-gold, tokens, a11y)
    ↓
Purpose and IA reassessment (this is the Group, not HR Law)
    ↓
Ojijo Group umbrella architecture and routes
    ↓
Entity gateway + Luma training discovery
    ↓
Messaging alignment to preempt. Prevent. Secure.
    ↓
Visual refinement (radius, shadow, hover, page-frame, X mark)
    ↓
Alignment passes (entity cards, presence strip, leadership row)
```

What was removed from the template and must not return: Lorem Ipsum, Melbourne contact, cart, invented KPIs and timelines, fake attorneys and reviewers, fake blog posts, partner logos that were not Ojijo’s, and “Practice Areas” as the Group’s whole story.

---

## Known limitations

These are real gaps, not a wishlist:

- **No form backend.** Submit shows a notice; use email/phone.
- **No per-route SEO** and no Open Graph image.
- **Production host / domain** for this umbrella model is not encoded in the repo.
- **Street address** unresolved (Kilimani only).
- **Legal org chart** unconfirmed (ownership vs sister brands).
- **Training** is not a verified separate company.
- **Founding year** (LinkedIn 2016) is omitted.
- **No additional leadership profiles** — only Kepher, by design.
- **Senaji practice areas** are not listed (live practice page was too thin to copy safely).
- **Analytics, consent, and sitemap** are absent.
- **Tailwind and CVA** sit in `package.json` unused.
- **No automated test or lint pipeline.**
- **Photography** is still the reconstruction set.
- **STEERING confirmations** (addresses, awards language, WhatsApp, named clients, etc.) remain client questions; they are not on the remote.

---

## Future maintenance notes

- Refresh `trainingEvents` from Luma when programmes change; keep the “Luma over marketing page” rule.
- If the client confirms a street address, founding year, or additional people, add them in `group.ts` — do not scrape directories.
- If a backend is added, replace the prototype notice in `ConsultationForm`; keep the routing `topic` field.
- If Tailwind is adopted, do it as a deliberate migration, not by sprinkling utilities on top of tokens.
- Keep `BrowserRouter` in mind for static hosting (history fallback).
- Package name `web-ohl-poc` can be renamed when the repo is treated as the Group product.

---

## License

MIT. See `LICENSE`.
