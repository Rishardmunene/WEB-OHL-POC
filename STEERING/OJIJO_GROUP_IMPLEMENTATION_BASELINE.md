# OJIJO GROUP IMPLEMENTATION BASELINE

Phase 1 audit of the current React application **before** Group IA work. No application code was modified to produce this file.

Inspected: `src/`, `index.html`, `vite.config.ts`, `package.json`, `public/`, `src/styles/`, `STEERING/CONSOLIDATED_UI_SPEC.md`, `STEERING/OJIJO_GROUP_BUILD_PLAN.md`.

---

## Current architecture

| Layer | What exists |
|---|---|
| Runtime | Vite 8 + React 19 + TypeScript + React Router 7 |
| Styling | Hand-authored CSS in four cascade files. Tailwind is registered in `vite.config.ts` but **has no entry and no utility classes**. It emits nothing. |
| Design tokens | `src/styles/tokens.css` — surfaces, two-gold system, type, ratio geometry, motion, reduced-motion |
| CSS | `base.css` (reset, container, buttons, ornament) → `sections.css` (home anatomy) → `responsive.css` (inferred, isolated) |
| Content | Single module `src/content/home.ts` — still Lorem Ipsum / fake KPIs / Melbourne contact / Ojijo HR Law brand |
| Pages | **`/` only.** Inner routes were deliberately not scaffolded (spec J-12). |
| Shell | `App.tsx`: skip link, `SiteHeader`, `<Routes>`, `SiteFooter` |
| Motion | `useScrollProgress` (header, CSS variable, no re-renders). `useReveal` (IntersectionObserver, Home-only). Tokens 140/220/340ms, `cubic-bezier(0.22, 1, 0.36, 1)`. |
| Icons | `lucide-react` + hand-authored social SVGs |
| Assets | `public/images/*` (vendored, sized). **`public/Logo/Ojijo.png` is a real Ojijo Group lockup** (gold O / white G / “OJIJO GROUP”) on a black field. Unused. |

```text
src/
  App.tsx
  main.tsx
  pages/Home.tsx
  content/home.ts
  hooks/useReveal.ts  useScrollProgress.ts
  components/
    SiteHeader  SiteFooter  Hero  IntroSection  PracticeAreas
    HelpStats  HistorySkills  Testimonials  Attorneys
    ConsultationCTA  ConsultationForm  BlogSection  PreFooterBand
    OrnamentalDivider  icons/SocialIcons
  styles/ tokens.css  base.css  sections.css  responsive.css
```

**Routes currently available:** `/` only.

---

## Reusable visual primitives (keep)

These are the reconstruction. Do not replace them with a template or stock shadcn look.

- Container 0.737 / 1280 cap; section padding rhythm
- Two-row sticky header with continuous `--scroll-progress` (transparency → blur)
- Hero full-bleed + left scrim, two-line H1, warm lead
- Ornamental crossed-hairline divider
- Dark / deep / light / full-bleed-photo section cadence
- Square surfaces (`--radius-surface: 0`), hairlines, near-zero shadow — **this is the evidence-based language**
- 3×2 card grid, 4-col grid, 3-col portrait grid
- Gold / outline / white button set, two-gold polarity (`.on-dark` / `.on-light`)
- Form underline fields on a photo panel
- Pre-footer image band; footer flanking ornaments
- Playfair Display + Inter + Great Vibes
- Reduced-motion at the token level

**Conflict noted and resolved.** The implementation prompt §4 asks to preserve “rounded cards” and “layered shadows.” The forensic screenshots, `CONSOLIDATED_UI_SPEC.md`, and prompt §5 (“change the information architecture, not the design language”) all require **sharp corners and hairline hierarchy**. Rounded/elevated cards would be a redesign. **Baseline decision: keep radius-0 / hairline system.** Hover may keep the existing 4px `translateY` (already a logged refinement).

---

## Reusable components (transform, do not rewrite)

| Component | Keep as | Transform into |
|---|---|---|
| `SiteHeader` / `SiteFooter` | Chrome, geometry, motion | Group brand, nav, Kenya contact, no Cart |
| `Hero` | Treatment | Group H1 + two CTAs |
| `IntroSection` | Collage + copy + tiles | Group introduction; tiles **without invented numbers** |
| `PracticeAreas` | 3×2 cards | Our Expertise (routing copy) |
| `HelpStats` | Light band, 3 boxes, flanked heading | Who we serve + textual trust marks (no fake logos we do not have) |
| `HistorySkills` | Photo panel, two columns + portrait | Differentiators; **no fake timeline / no % bars** |
| `Testimonials` | 4-col staggered grid | **Our Entities** gateway |
| `Attorneys` | 3-col tall cards | Leadership + entity pathways. **No stock face as Kepher.** |
| `ConsultationCTA` / `ConsultationForm` | Layout | Group enquiry; routing question; inert submit |
| `BlogSection` | Featured + grid | Upcoming training / outbound tiles. Do not fill 6 fake articles. |
| `PreFooterBand` | As-is | Keep |
| `OrnamentalDivider` | As-is | Keep |

---

## Sections worth preserving (visual)

All thirteen home blocks’ **geometry**. Pre-footer band especially — no content claim.

---

## Sections requiring content replacement

Hero, intro, expertise copy, CTA, form labels, footer, header, metadata.

---

## Sections requiring structural replacement of *purpose*

| Section | Why |
|---|---|
| Practice areas | Group capabilities, not HR-law practice menu |
| Stats / partners | Fake KPIs and template “Home&&” logos |
| History / skills | Fake 1995–2020 history and invented percentages |
| Testimonials | Fake people; becomes entity gateway |
| Attorneys | Fake lawyers; becomes leadership + pathways |
| Blog | Fake posts; becomes training discovery (sparse > false) |

---

## Obsolete content (must not ship)

Lorem Ipsum; Melbourne address; `info@ojijohrlaw.com` as Group email; Cart (0); Pages dropdown; `95%` / `35+` / `7230` / `98%` / `15,890+`; 1995–2020 timeline; skill %; Dexter Devid / Nattasha / Minci Pall / Julia Rose / John David; Thomas Daniyel / Nikolona Gail / Michal David; template blog titles; partner nonsense strings; “Book a Consultation” / “Get a Free Consultation” as Group-primary CTAs; Landmark icon as the mark.

---

## Obsolete routes / components

No inner routes to delete. Cart UI and Pages disclosure go away. Tailwind/shadcn helper packages are unused (see below) — leave installed; removing them is out of scope unless asked.

---

## Dependencies

| Keep | Why |
|---|---|
| `react`, `react-dom`, `react-router-dom` | App + required inner routes |
| `lucide-react` | Icon family |
| `vite`, `@vitejs/plugin-react`, `typescript` | Tooling |
| `puppeteer-core` | QA harness |

| Present, unused | Notes |
|---|---|
| `tailwindcss`, `@tailwindcss/vite`, `tw-animate-css` | Plugin loaded, no CSS imported |
| `class-variance-authority`, `clsx`, `tailwind-merge` | shadcn leftovers; no imports in `src/` |

No shadcn component files exist. Do not introduce stock shadcn visuals.

---

## Implementation risks

1. **Logo PNG has a black field.** On the dark header, treat with `mix-blend-mode: lighten` rather than inventing a transparent file.
2. **No verified photograph of Kepher Kiche Ojijo.** Using `attorney-*.jpg` as his portrait would be a new fabrication.
3. **Header is transparent** and sized for overlaying the home hero. Inner pages need a solid/dark page band so the nav remains legible.
4. **Six blog slots vs three upcoming events.** Leave empty space; do not invent posts.
5. **Consortium dates conflict** (Luma 21–23 Oct vs HR Law site 4–6 Nov). Publish Luma dates only.
6. **Zanzibar fee** not confirmed on the Luma body we fetched — omit fee.
7. **Address Kindaruma vs Northcote** unresolved — Group contact says Nairobi / Kilimani, not a single street as “the” HQ.
8. **`useReveal` only runs on Home** — must run for inner pages or reveals stay at `opacity: 0` if class `reveal` is used.
9. Prompt §4 rounded/shadow vs evidence-based sharp system — see decision above.
10. No form backend. Keep inert + documented.

---

## Phase 2 intent (next)

Centralise Group content, add routes `/about` `/expertise` `/entities` `/training` `/contact`, rewire header/footer/nav, then transform homepage section purpose without replacing the CSS foundation.
