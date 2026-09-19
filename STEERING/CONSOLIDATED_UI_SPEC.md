# CONSOLIDATED UI SPECIFICATION

**The operative implementation reference**

| | |
|---|---|
| Supersedes, for implementation purposes | `MASTER PROMPT.md` and `Rules.md` wherever they conflict with this document |
| Built from | `DISCOVERY_SUMMARY.md` · `FORENSIC_SCREENSHOT_COMPARISON.md` · `PROMPT_AUDIT.md` (patches P1–P20 applied) |
| Status | Specification only. No application code exists yet |

> Read §A and §J first. §A tells you which source wins; §J records every place where this specification **deliberately departs** from the evidence. Nothing in this document may be treated as observed fact unless it carries an `OBSERVED` label.

---

## A. Evidence hierarchy

| Rank | Source | Status |
|---|---|---|
| 1 | Reference video | **Permanently empty** (decision B3). No claim may cite it |
| 2 | **Reference screenshots** | Effective top authority for anything visibly established |
| 3 | **Measured ratios** derived from them | Binding for all geometry |
| 4 | Patterns confirmed in 3+ independent locations | Outrank any single reading |
| 5 | Forensic reconstruction — **section ordering only** | Reliable |
| 6 | Forensic reconstruction — video-derived motion claims | `UNCERTAIN`, permanently |
| 7 | Forensic reconstruction — everything else | Hypothesis. 19 of 41 claims contradicted |
| 8 | **Deviation Register entries** (§J) | Binding once recorded there |
| 9 | Technical requirements from `Rules.md` (perf, a11y, tokens, motion timing) | Binding where not conflicting with 2–4 |
| 10 | Minimal documented inference | Last resort |
| — | Generic UI convention, shadcn defaults, aesthetic preference | **Never authoritative** |

**Four operating rules.**

1. **Absence of evidence is not licence.** Where the screenshots show no shadow, no radius and no motion, the implementation starts flat, sharp and static. Adding any of them requires a §J entry.
2. **Ratio over absolute.** Absolute pixels are not recoverable from the evidence. Ratios are the fidelity criterion; absolute values in §C are locked decisions, not measurements.
3. **Every decision carries a label** — `OBSERVED` / `SUPPORTED` / `INFERRED` / `UNCERTAIN` / `REFINEMENT`. A label may never be silently upgraded. This is the exact failure that produced 19 contradicted forensic claims.
4. **Content is not a fidelity target; content *length* is.** Copy is placeholder (decision B2), but heading line-counts and paragraph depth drive the observed proportions. A two-line heading that becomes four lines breaks geometry you are simultaneously required to match.

---

## B. Page architecture

`OBSERVED` — confirmed section order, top to bottom. Preserve exactly.

| # | Section | Surface | Container | Notes |
|---|---|---|---|---|
| 1 | Header | Transparent | Container | Overlays the hero. Two rows |
| 2 | Hero | Full-bleed photo + left gradient scrim | Content in container | Height 0.566 × page width |
| 3 | Intro | `#1E2833` | Container | Three-image collage + copy + **two stat tiles** |
| 4 | Practice Areas | `#161D28` | Container | 6 cards, 3 × 2 |
| 5 | Help / Stats / Partners | `#FFFFFF` | Container | 3 stat boxes, then partner logos |
| 6 | History & Skills | **Full-bleed blurred photo** | Translucent panel at container width | Timeline · portrait image · skill bars |
| 7 | Testimonials | `#1E2833` | Container | **4** staggered cards |
| 8 | Attorneys | `#FFFFFF` | Container | 3 tall portraits |
| 9 | Consultation CTA | `#1E2833` | Container | Copy + framed white card |
| 10 | Contact Form | **Full-bleed photo**, lightly darkened | Panel at **container width** | Offset downward |
| 11 | Blog | `#1E2833` | Container | Featured + **6** cards, **no card surfaces** |
| 12 | **Pre-footer image band** | Full-bleed photo | — | Height 0.172 × page width. **Missing from the forensic report** |
| 13 | Footer | `#1E2833` | Container | Same tone as sections — not darker |

Sections 6, 10 and 12 break the container; all others respect it.

**Inner pages** — `INFERRED`, 100 %. Decision B5 puts a multi-page site in scope, and **no screenshot shows any page but home**. Page inventory from footer links: About, Contact, Blog, Blog Post, Lawyers, Lawyer Single, Case Results, Practice Areas, Packages, Package Single, Start Here, Style Guide, 404, Password Protected, Licenses, Changelog. Every inner page is composed from the home page's confirmed system and **may never be used as precedent to change the home page**.

---

## C. Visual design system

### C.1 Container and geometry

| Token | Value | Basis |
|---|---|---|
| Container ratio | **0.737 × viewport** | `OBSERVED` — measured in 7 places (0.7306–0.7399) |
| `--container-max` | **1280px** | **Locked decision.** 0.737 × ~1728px derived viewport ≈ 1272px; 1280 is the nearest conventional value. The forensic's 1200px would compress every ratio by ~6 % |
| 3-col grid column | 0.320 × container | `OBSERVED` |
| 3-col grid gap | 0.020 × container ≈ **25px** | `OBSERVED`. The forensic's 30px is ~20 % too wide |
| 4-col grid gap (testimonials) | 0.013 × container ≈ **17px** | `OBSERVED` |
| Attorney grid gap | 0.018 × container ≈ **23px** | `OBSERVED`. The forensic's 40px is ~75 % too wide |
| Hero height | 0.566 × page width | `OBSERVED`. Any `vh` expression is `INFERRED` |
| Header row 1 / total | 0.077 / 0.158 × page width | `OBSERVED` |
| Pre-footer band height | 0.172 × page width | `OBSERVED` |
| Attorney portrait aspect | **0.678 (w:h)** | `OBSERVED`. The forensic's fixed 350px height is far too short |
| Section padding | uniform, generous | `INFERRED` — 4 boundaries fall between captures |

### C.2 Color

`OBSERVED` unless noted. Values at 100 % dominant frequency are exact.

```css
/* Dark scale — four values, not two */
--dark-primary:  #1E2833;  /* intro, testimonials, CTA, blog, footer. 100% pure */
--dark-deep:     #161D28;  /* practice-areas section only. 100% pure */
--card-dark:     #1E2833;  /* practice card = primary tone ON deep tone */
--card-raised:   #2F3A48;  /* testimonial card */
--panel-scrim:   rgba(...) /* history panel ≈ #2F3642–#303843. Alpha UNCERTAIN */

/* Light scale — inverted from the forensic reconstruction */
--light-bg:      #FFFFFF;  /* light sections. 100% pure */
--light-card:    #FCFBFC;  /* stat boxes — barely distinguishable from bg */

/* Gold — TWO tokens, required by the AA decision. See §J-5 */
--gold:          #CFAF71;  /* OBSERVED. Use on dark surfaces only */
--gold-on-light: #877249;  /* DERIVED. Use on light surfaces only */

/* Text */
--text-on-dark:       #FFFFFF;
--text-muted-on-dark: #A3A7B5;  /* PARTIALLY CONFIRMED — not isolable from antialiasing */
--text-on-light:      #1E2833;
```

Verified contrast (WCAG 2.1 AA):

| Pair | Ratio | Result |
|---|---|---|
| `--gold` on `#1E2833` | 7.13:1 | Pass |
| `--gold` on `#161D28` | 8.08:1 | Pass |
| `--gold` on `#2F3A48` | 5.51:1 | Pass |
| `--gold-on-light` on `#FFFFFF` | 4.65:1 | Pass |
| `--gold-on-light` on `#FCFBFC` | 4.50:1 | Pass |
| `#FFFFFF` on `#1E2833` | 14.93:1 | Pass |
| `#A3A7B5` on `#1E2833` | 6.22:1 | Pass |
| `#A3A7B5` on `#2F3A48` | 4.81:1 | Pass |
| `#1E2833` on `--gold` | 7.13:1 | Pass |
| ~~`#CFAF71` on white~~ | 2.10:1 | **Forbidden** |
| ~~white on `#CFAF71`~~ | 2.10:1 | **Forbidden** |

### C.3 Typography

| Role | Value | Basis |
|---|---|---|
| Heading face | High-contrast serif | `OBSERVED`. Identity `UNCERTAIN` — permanently (B4) |
| Body face | Geometric sans | `OBSERVED`. Identity `UNCERTAIN` |
| Signature face | **Calligraphic script** | `OBSERVED`. Missing from the forensic report |
| Substitutes | Playfair Display · Inter · a script face | `INFERRED`. Unvalidated |
| Body | **16px / 1.6** | `CONFIRMED` — independently corroborated (comparison §1.1) |
| Section H2 | 38–42px / 1.2 | `CONFIRMED` |
| Hero H1 | 58–61px / ~1.1 | `PARTIALLY CONFIRMED` — slightly smaller than the forensic's 64px |
| Scale ratios | hero:body 2.64 · section:body 1.82–2.00 | `OBSERVED` |
| Numerals | Set in the **sans** face even beside serif labels | `OBSERVED` |
| Weights, tracking | — | `UNCERTAIN` |

Gold text is used for: practice-paragraph highlight phrases, timeline years, attorney roles, header contact labels, "Read More", "Follow :", and copyright segments. `OBSERVED` — entirely absent from the forensic report. On light surfaces use `--gold-on-light`.

### C.4 Radius — the single best-confirmed property

```css
--radius-surface: 0;      /* ALL rectangular elements */
--radius-circle: 9999px;  /* avatars, contact icon rings, stat ring badges */
```

`OBSERVED`, very high confidence, consistent across all five screenshots and independently confirmed by the forensic report (*"possibly exactly 0px"*). Cards, buttons, images, panels, stat tiles, the form panel and the history panel are all square.

**Any non-zero radius on a rectangular surface requires a §J entry.** `Rules.md` §8 and `MASTER PROMPT.md` §12 are overridden here (patch P4).

### C.5 Elevation and separation

```css
--shadow-0: none;  /* default for every surface */
```

`OBSERVED` — no shadow is detectable on any surface in any screenshot. The reference establishes hierarchy by **fill-tone difference** and **hairline rules**, not elevation.

Hairline inventory (`OBSERVED`; five of these were missed by the forensic report):

| Location | Orientation |
|---|---|
| Header, between rows | Horizontal, container width |
| Practice heading ↔ paragraph | **Vertical** |
| Inside each practice card, above the footer row | Horizontal |
| Below the light stats row | Horizontal |
| Under each footer column heading | Horizontal |
| Below the featured blog post | Horizontal |
| Attorney social bar, bottom edge | Horizontal, **gold** |

Decorative hairlines may stay faint. **Form-control boundaries may not** — see §H.

### C.6 Ornamental separator

`OBSERVED` — the signature motif, used under almost every section heading, above the hero H1, flanking "Meet The Partners" on both sides, and at container scale in the footer.

Geometry: **paired parallel gold hairlines crossed by a short vertical tick carrying a slim four-point star.** Asymmetric in section headings (short left, long right); symmetric when centred.

Not `line — diamond — line` with a rotated square — that is the forensic approximation. Preserve the concept, correct the geometry. As a decorative element it is exempt from contrast requirements, so `--gold` may be used on light surfaces here.

### C.7 Components

`OBSERVED` anatomy. Where this differs from the forensic reconstruction, the difference is a required correction.

**Buttons**

| Variant | Rest | Hover |
|---|---|---|
| Primary | Gold fill, dark text, square | `UNCERTAIN` |
| "Learn More" | **Dark fill, white text, no border** | **Gold fill, dark text** — `OBSERVED`, the only observed state in the evidence |
| Outline (light sections) | White fill, thin dark border | `UNCERTAIN` |
| Form submit | **White fill**, dark text | `UNCERTAIN` |

**Practice card** — title (serif) · body (muted) · **hairline rule** · footer row = gold thin-stroke line icon left, button right. Fill `#1E2833` on `#161D28`, giving **deliberately near-invisible contrast**. This is the design, not a defect — do not "fix" it.

**Intro stat tiles** — in the Intro section, normal flow, below the signature. Dark tile: gold line icon + "95%" + "Case Success". Gold tile: **number inside a dark square badge** + two-line label.

**Light stat boxes** — `#FCFBFC` on `#FFFFFF`. Gold **ring badge** containing a small gold icon above the number, beside a **serif** label and a small muted line. Third box is dark with a photographic background and **left-aligned** text, no icon.

**History panel** — translucent dark scrim at container width over a full-bleed blurred photograph. Timeline has **no connector line and no markers**: gold year heading above muted paragraph, flush left. Skill bars are a hairline track with gold fill terminating in a **gold circular knob**.

**Testimonials** — **4** cards, staggered 4-column grid, fill `#2F3A48`. Reviewer blocks (circular avatar + serif name + muted role) float **outside and overlapping** the cards: above the raised ones, below the lowered ones. Gold double-quote glyph top-left.

**Attorney card** — portrait at aspect **0.678**. A **white bar inset from the photo's edges overlaps the image bottom**, holding **4** social icons, finished with a thin gold underline. Name in dark serif below; role in gold (`--gold-on-light`).

**CTA consult card** — white with an **inset grey frame** (double-frame effect). Serif heading, paragraph, then a **solid gold square tile** with a phone glyph. Glyph must be dark, not white (§J-5).

**Contact form** — panel at **container width**, container-aligned, offset downward over a lightly-darkened photograph. Underline-only fields, 2 × 2 then full-width message. Centred white submit.

**Blog** — featured post and 6 cards, **all with no card surface**. Image, meta (gold category), serif title, excerpt, underlined "Read More".

**Footer** — `#1E2833`. Logo centred, flanked by **long double-hairline gold rules** ending in the four-point star. Four columns, hairline-ruled serif headings, **first column holds two sub-columns**. Bottom bar with gold-accented copyright.

### C.8 Iconography

`OBSERVED`: **thin-stroke line icons**, gold on dark surfaces. Solid icon families are contradicted — the forensic's FontAwesome solid glyphs are wrong in both style and glyph choice (office building not safety helmet; truck not car-burst).

**Decision:** one line-icon family (Lucide) at consistent stroke weight and optical size. Social icons in the footer and attorney bars show mixed fills in the reference; normalise to one family and log as §J-7.

---

## D. Motion system

The two halves below must never be merged.

### D.1 Observed motion

| Behavior | Evidence |
|---|---|
| "Learn More" hover → gold fill, dark text | `OBSERVED` — the Car Accident card |
| Sticky header | `UNCERTAIN` — video-only, permanently unverifiable (B3) |

**That is the entire observed motion inventory.** Critically, the hovered card in evidence shows **no lift, no shadow change and no gold bottom accent** — so the forensic's `translateY(-5px)` plus bottom border, and `MASTER PROMPT.md` §8/§19's 2–4px lift, are all contradicted rather than merely unevidenced.

### D.2 Desired refinement motion

Every item here is a `REFINEMENT` with a §J entry. Timing tokens from `Rules.md` §14–15 (which remain sound):

```css
--motion-fast:   140ms;  /* micro-interaction */
--motion-normal: 220ms;  /* standard UI transition */
--motion-slow:   340ms;  /* larger transition */
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
```

Approved refinements: header scroll treatment (§J-2) · card hover lift (§J-3) · scroll reveals (§J-4) · button press feedback · focus transitions · skill-bar animation on entry · hero entrance.

Constraints: animate `transform`/`opacity` only; no `width`/`height`/`top`/`left`/`margin`/`padding`; interruptible; `IntersectionObserver` for scroll triggers, never scroll listeners; reveal once, not on every re-entry; honour `prefers-reduced-motion: reduce` by disabling decorative movement while preserving all function.

---

## E. Responsive system

### E.1 Observed

**Nothing.** No capture exists below desktop width. This is not a gap to be filled by inference presented as fact — it is a permanent unknown under decision B4.

### E.2 Inferred

All of it. Principle: reproduce the desktop design language, infer only what is necessary, and choose the least visually disruptive option.

| Breakpoint | Inferred behavior |
|---|---|
| ≥ 1280 | Reference layout at locked container |
| 1024–1279 | Container fluid at 0.737 × viewport; grids hold |
| 768–1023 | 3-col → 2-col; testimonial 4-col → 2-col, stagger removed; header rows stack |
| 480–767 | All grids → 1-col; header collapses to a disclosure menu; hero scrim strengthens |
| < 480 | Single column; stat tiles stack |

Test at 1920 / 1440 / 1280 / 1024 / 768 / 480 / 390 / 375. The header disclosure menu and the testimonial stagger removal are the two largest inferences and need §J entries.

---

## F. Component architecture

Adapted from `Rules.md` §5, which correctly warns against over-componentizing. Componentize meaningful visual/behavioural units, not every `div`.

```
App
├── SiteHeader            (TopBar · MainNav · ContactActions)
├── Hero                  (HeroMedia · HeroContent)
├── Section               (shared: surface variant + container + padding)
│   ├── SectionHeading
│   └── OrnamentalDivider (shared — used in 8+ places)
├── IntroSection          (ImageCollage · Signature · StatTile[])
├── PracticeAreas         (PracticeCard[])
├── HelpStats             (StatBox[] · PartnerLogos)
├── HistorySkills         (TimelineItem[] · SkillBar[])
├── Testimonials          (TestimonialCard[] · ReviewerBadge[])
├── Attorneys             (AttorneyCard[])
├── ConsultationCTA       (FramedCard)
├── ConsultationForm      (Field[])
├── BlogSection           (FeaturedPost · BlogCard[])
├── PreFooterBand
└── SiteFooter            (FooterColumn[] · FooterBottom)
```

`OrnamentalDivider`, `Section` and the button variants are the genuine reuse wins. `StatTile` and `StatBox` are **different components** — do not merge them.

**shadcn** (decision: used broadly with comprehensive token override). Set `--radius: 0` globally, shadows to none, and build an underline input variant. Because every relevant shadcn default is the opposite of this reference, a token-parity audit is required before Stage 10 — see §J-6 for the risk this carries.

---

## G. Performance requirements

From `Rules.md` §13/§20 and `MASTER PROMPT.md` §30–31, which are sound and are adopted unchanged.

- Animate `transform`/`opacity` only. No layout-property animation.
- `IntersectionObserver` for scroll triggers. No scroll listeners on many elements; if the header needs scroll state, one passive listener, rAF-throttled.
- **Backdrop blur only on the navigation**, if §J-2 is adopted, with a bounded radius. The reference has no blur, so this is pure refinement and must not be extended to cards.
- Responsive images with width/height set to prevent layout shift; lazy-load below the fold. The page carries ~20 photographs — this is the dominant performance factor.
- `content-visibility` / containment for long off-screen sections.
- Minimal client state; no re-render on scroll.
- The full-bleed blurred photograph in §6 must be a pre-blurred asset, not a runtime `filter: blur()` on a large layer.

## H. Accessibility requirements

Decision: **full WCAG 2.1 AA everywhere, accepted as changing the reference's appearance where necessary.** Consequences:

1. **Two gold tokens** (§C.2) — a single gold cannot satisfy both polarities. §J-5.
2. **Gold on white is forbidden** for text. Use `--gold-on-light`.
3. **The CTA phone-tile glyph must be dark**, not white (2.10:1 → 7.13:1). §J-5.
4. **Form controls need real labels.** Placeholder-as-label fails WCAG 3.3.2 regardless of contrast. Use visible or visually-hidden labels, not placeholders alone. §J-8.
5. **Form-control boundaries need 3:1** (WCAG 1.4.11). The reference's `rgba(255,255,255,0.05)` underlines are far too faint: on `#1E2833` a boundary must be ≥ `#707070` (white at ~0.44 alpha); on `#FFFFFF`, ≤ `#949494`. **This is a visible departure** — form underlines become clearly visible. §J-8.
6. **Decorative separators are exempt** from 1.4.11, so the signature ornament is unaffected. Partner logotypes are also exempt.
7. **Text over photography** — the hero and form sections place text on images. Contrast must be verified against the *composited* result; strengthen the scrim until the text region measures ≥ 4.5:1. §J-9.
8. Semantic landmarks; one `h1`; no heading-level skips. The reference's visual hierarchy must map to real heading levels.
9. Visible focus states on every interactive element — 100 % refinement, since none is observable. §J-10.
10. Keyboard operability for the "Pages ▾" disclosure and the mobile menu.
11. Meaningful `alt` text; empty `alt` for decorative imagery.
12. `prefers-reduced-motion` support.

---

## J. Deviation Register

Every departure from the evidence. Required by the standing documented-refinement policy. **Review this table as a whole before Stage 7** — each entry is individually defensible, but twenty of them produce a different website.

| # | Element | Evidence position | Chosen position | Class | Rationale |
|---|---|---|---|---|---|
| **J-1** | Container width | Ratio 0.737; absolute unrecoverable | Locked **1280px** | `INFERRED` | An absolute value is unavoidable. 1280 is the nearest conventional value to the derived ~1272px |
| **J-2** | Header scroll state | Transparent at rest; **no scrolled state observed** | Translucency + bounded blur + hairline + slight compression, continuously interpolated | `REFINEMENT` | Requested by `MASTER PROMPT.md` §6–7. Rest state stays faithful; only the scrolled state is invented |
| **J-3** | Card hover | **No lift, no shadow, no accent** on the one hovered card | Small `translateY` lift | `REFINEMENT` | Requested by §8/§19. Note this is **contradicted**, not merely unevidenced — the weakest-justified entry here |
| **J-4** | Scroll reveals | Not observable | Opacity + small `translateY` on entry, short stagger | `REFINEMENT` | Requested by `Rules.md` §17 |
| **J-5** | Gold palette | **One** gold, `#CFAF71`, including on white | **Two** tokens; `--gold-on-light: #877249`; CTA glyph darkened | **Accessibility-driven correction** | Reference measures 2.10:1, failing AA at any size. Required by the full-AA decision |
| **J-6** | shadcn | Reference is radius-0, shadowless, hairline-bordered, underline-input | shadcn used broadly with comprehensive override | `NEW REQUIREMENT` | Every relevant default is opposite to the reference. Requires a token-parity audit; un-overridden defaults will drift toward the demo aesthetic |
| **J-7** | Icon families | Mixed fills in footer/attorney social bars | Normalised to one line-icon family | `REFINEMENT` | Consistency per `Rules.md` §7 |
| **J-8** | Form fields | Placeholder-as-label; ~0.05-alpha underlines | Real labels; boundaries at ≥ 3:1 | **Accessibility-driven correction** | WCAG 3.3.2 and 1.4.11. Visibly changes the form |
| **J-9** | Text over imagery | Scrim as rendered | Scrim strengthened until text measures ≥ 4.5:1 | **Accessibility-driven correction** | Full-AA decision. May visibly darken the hero |
| **J-10** | Focus states | None observable | Designed focus indicator on all interactive elements | **Accessibility-driven correction** | WCAG 2.4.7 |
| **J-11** | Mobile layout | **No sub-desktop evidence at all** | Inferred breakpoint ladder (§E.2) | `INFERRED` | Unavoidable. Largest single block of unevidenced work alongside J-12 |
| **J-12** | Inner pages | No evidence for any page but home | Composed from the home page's system | `INFERRED` | Decision B5. One-way rule: may never justify changing the home page |
| **J-13** | Reference typos | "Arease", "Experiance", "Appoinment", "Conaetct" | Corrected; copy replaced | `NEW REQUIREMENT` | Decision B2 (rebrand). Content is no longer a fidelity target |
| **J-14** | Section padding at 4 boundaries | Falls between captures | Uniform rhythm inferred from measured sections | `INFERRED` | Unobservable |
| **J-15** | Header contact icon asymmetry | Second ring appears gold-filled | Both rendered identically | `UNCERTAIN` | Possibly a hover state. Asymmetry not implemented pending evidence |

**Open risk on J-3.** It is the only entry that contradicts a direct observation rather than filling a void. If visual QA shows the lift reading as un-referencelike, J-3 should be the first refinement withdrawn.

---

## K. What this specification does not establish

Carried forward as permanently unresolvable under decisions B3 (no video) and B4 (no template access). These must never be quietly resolved later:

Font families · all absolute dimensions beyond the locked container · all responsive behavior · every interaction state except one button hover · section padding at four boundaries · exact translucency alpha for the header and history panel · whether the light stat boxes carry a hairline border · all inner-page design · the real function of the "Cart (0)" element · reference photography.

---

**Next:** `CURRENT_IMPLEMENTATION_GAP_ANALYSIS.md` — under decision B1 (port), this becomes the **correction checklist** for the port: every `CONTRADICTED` row in `FORENSIC_SCREENSHOT_COMPARISON.md` §3 as a mandatory, tracked correction. Then `IMPLEMENTATION_PLAN.md`.
