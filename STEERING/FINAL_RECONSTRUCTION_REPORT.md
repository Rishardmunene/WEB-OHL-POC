# FINAL RECONSTRUCTION REPORT

**Project:** Ojijo HR Law website — evidence-first forensic reconstruction
**Scope:** home page, desktop reference viewport 1728px, plus an inferred responsive ladder
**Chain:** `ORIGINAL EVIDENCE → DISCOVERY → FORENSIC vs SCREENSHOT → PROMPT AUDIT → CONSOLIDATED SPEC → GAP ANALYSIS → IMPLEMENTATION PLAN → IMPLEMENTATION → VISUAL QA`

> **Accuracy claim.** This is **not** a pixel-perfect reproduction and was never
> validated as one. Fidelity is asserted as **ratio conformance at 1728px across
> 11 measured geometries**, plus targeted pixel-level colour and motif matching.
> Everything else is stated below as observed, inferred, or unresolved.

---

## 1. What Was Found

`STEERING/` contained one primary forensic document (a `.docx` video-to-website
reconstruction), five reference screenshots, and three instruction layers
(`MASTER PROMPT.md`, `Rules.md`, `AUDIT AGENT INSTRUCTION.md`) that had accreted
across earlier attempts and were not mutually consistent.

The single most consequential finding was structural, not visual: **the forensic
document is an interpretation, and the screenshots frequently contradict it.** It
had been written in the register of a specification — exact pixel values, exact
colours — which invited downstream agents to implement it verbatim. Treating it
as a hypothesis instead of a spec is what produced the correction register.

The second finding was that **the reference viewport was never recorded**. The
screenshots are downscaled full-page captures at 744–749px wide from an unknown
original. This made every absolute pixel value in the forensic document
unverifiable and forced the whole project onto **ratios** instead.

---

## 2. What the Original Forensic Agent Got Right

Substantial and worth stating plainly — the document is a good faith artifact and
most of its skeleton survived:

- **Section inventory and ordering** for 9 of 10 sections, confirmed against the screenshots.
- **The dark palette**, confirmed to the byte: `#1E2833` surface, `#161D28` deep, `#CFAF71` gold. Pixel sampling of the practice-card band returned exactly these values.
- **The serif/sans split** — display serif for headings, humanist sans for body.
- **Radius-0 throughout.** Correctly resisted the pull toward rounded corners; the screenshots show sharp corners everywhere and the implementation ships `--radius-surface: 0` with an automated offender count.
- **Near-shadowless surfaces**, separated by hairlines rather than elevation.
- **The general composition** of hero, practice grid, history panel, attorney cards, and footer.

## 3. What Was Incorrect or Unsupported

43 corrections were raised (6 CRITICAL, 17 HIGH, 16 MEDIUM, 4 LOW). The
structurally significant ones:

| ID | Forensic claim | Evidence |
| -- | -------------- | -------- |
| C-1 | Container `1200px` fixed | Container is **0.737 of page width**, measured in 7 independent places |
| C-3 | **Two** testimonial cards in `1fr 1fr` | **Four** cards in a staggered 4-column grid with alternating reviewer placement |
| C-2 | Stat text white | White-on-white; text was **unreadable** as specified |
| H-2 | Hero stat tiles `position:absolute; bottom:-50px` | Tiles sit in the **intro section in normal flow** |
| H-3 | — | — (folded into C-3) |
| H-6 | History panel capped at `900px` | **Container width**, over a full-bleed backdrop |
| H-11 | Intro shows one image | **Three-image collage**, two above and one wide below |
| H-12 | Form panel `900px`, centred, heavy shadow | **Container width**, container-aligned, no shadow |
| H-13 | "Learn More" has a gold border and hover lift | Pixel runs show **no distinct button fill at all** — white text on the card, gold only on hover |
| H-15 | Card hover lifts with shadow and gold border | The one hovered card in the evidence shows **no lift, no shadow, no border** |
| M-6 / M-12 | Ornament is `line + rotated square + line` | **Continuous paired hairlines crossed by paired verticals** with a saturated node |
| M-9 | Form photo under an 85% overlay | **No overlay.** Reference photo margin mean 37.7 vs the source photograph's own 38.7 |
| — | Section count 9 | A **10th section** exists: a pre-footer image band, entirely absent from the document |

**One claim in our own consolidated spec also failed verification.** §C stated the
attorney social bar is "finished with a thin gold underline". Scanning rows
340–445 of the first attorney card returns **zero** gold pixels between the social
bar and the name; the only gold in that region is the role text at y416–422. The
claim was inherited from the forensic document and is contradicted. The
implementation correctly omits it.

## 4. What the Screenshots Established

Directly measurable, and these became the ratio table the QA harness enforces:

| Geometry | Ratio | Denominator |
| -------- | ----- | ----------- |
| Content container | 0.737 | page width |
| Hero height | 0.566 | page width |
| Header row 1 / total height | 0.077 / 0.158 | page width |
| Pre-footer band height | 0.172 | page width |
| 3-col grid column / gap | 0.320 / 0.020 | container |
| Testimonial column / gap | 0.241 / 0.013 | container |
| Attorney grid gap | 0.018 | container |
| Attorney portrait | 0.678 | w:h |

The ratios are **mutually corroborating in a way the screenshots did not have to
satisfy**, which is the strongest single piece of evidence in the project: three
independently measured grids each sum back to one container.
`3×0.320 + 2×0.020 = 1.000`; `4×0.241 + 3×0.013 = 1.003`; the attorney grid at
0.018 gaps = 1.000. This is also what fixes the reference viewport:
`1280 / 0.737 = 1737 ≈ 1728`.

Also established at pixel level: the exact palette; the ornament motif and its
`#CFAF71`-at-50%-alpha hairlines in **both** polarities; the opaque `#1E2833` form
panel; the two-line hero H1 at 0.288 of page width; the warm-tan hero lead
(`#B69D74` peak); a single centred "Meet Attorney" button rather than one per card.

## 5. What Was Inferred

Declared as inference, not evidence. The two largest blocks:

- **The entire responsive system (J-11).** There is **no sub-desktop evidence whatsoever** — every screenshot is desktop. The breakpoint ladder, the container going fluid below 1024, the stacked grids, and the mobile header are all inferred and isolated in `src/styles/responsive.css` so the inference stays visible in the source.
- **The entire motion system (J-4, and §7 below).** No animation is observable in still screenshots. Nothing was inferred *from* the evidence; motion was added as declared refinement.

Smaller inferences: container padding (24px), the hero content column floor
(420px), muted text on light (`#5A6472`, which the spec left undefined), and all
focus-state design (J-10), since none is observable.

## 6. What Was Changed

Implementation proceeded in staged commits from a deliberate **Stage 0 verbatim
port** of the forensic reconstruction — built to be wrong on purpose, so the
correction register had a measurable baseline.

- **Design tokens** (`tokens.css`) — palette, the two-gold system, type scale, ratio-derived geometry, motion, each tagged `OBSERVED` / `DERIVED` / `INFERRED`.
- **Hand-authored CSS** in four cascade layers (tokens → base → sections → responsive) rather than Tailwind utilities, to keep the ratio derivations legible at the point of use.
- **14 components**, one per section plus the shared ornament and a social-icon set.
- **Iconography** — 31 FontAwesome icons and their blocking CDN stylesheet removed; migrated to `lucide-react` with hand-authored SVG for brand marks. Automated count is now 0 FontAwesome.
- **Assets vendored locally** — 26 images. Two reference URLs were ORB-blocked and dead; all are now local, with intrinsic dimensions, lazy loading, and a `MANIFEST.json` recording each as confirmed or substitute.
- **Content rebranded** to Ojijo HR Law with HR-law practice areas, preserving content *volume* so layout geometry stays comparable.

Change control: the register distinguishes **restoration** (matching the reference
against the forensic document), **correction** (fixing a defect such as C-2's
unreadable text), **refinement** (declared improvements, J-2/J-3/J-4), and
**accessibility-driven correction** (J-5/J-8/J-9/J-10, which knowingly change the
reference's appearance).

## 7. Motion System

**Observed motion: none.** Still screenshots cannot establish animation, and §5 of
the master task forbids inventing it. Everything here is therefore declared
refinement, not reconstruction.

- Durations 140 / 220 / 340ms with a single easing `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Header** interpolates continuously on scroll progress — background, bounded blur, and height compression driven by one custom property — rather than swapping between two states at a threshold.
- Animated properties are restricted to `transform`, `opacity`, and a bounded `backdrop-filter` on the header only. Skill bars animate via `scaleX`, never `width`, so they cannot trigger layout.
- **No continuous decorative loops.**
- `prefers-reduced-motion: reduce` collapses all three duration tokens to 1ms, so reduced motion is handled at the token level and cannot be bypassed by an individual rule.

## 8. Component Architecture

Deliberately under-componentized, one component per evidenced section:

```
App
├── SiteHeader          Hero              HelpStats
├── IntroSection        PracticeAreas     HistorySkills
├── Testimonials        Attorneys         ConsultationCTA
├── ConsultationForm    BlogSection       PreFooterBand
└── SiteFooter
    └── OrnamentalDivider (5 variants)  ·  icons/SocialIcons
```

Content is separated from presentation in `src/content/home.ts`, so copy changes
never require touching layout. Client-side state is limited to the header's
scroll progress; everything else is static markup plus CSS.

## 9. Responsive Behaviour

Entirely inferred (§5). The **Stage 0 baseline contained no responsive rules at
all** — it overflowed to a fixed 920px floor at every viewport below 1024,
i.e. +545px of horizontal overflow at 375px.

Current state — **zero horizontal overflow at all nine tested widths**: 375, 390,
480, 768, 1024, 1280, 1440, 1728, 1920.

The container holds 0.737 down to 1024, then goes fluid, because below 1024 the
ratio would leave impractically wide margins. Grids collapse 3→2→1; the header's
contact block and flanking footer ornaments drop out at narrow widths.

## 10. Performance Improvements

- **Zero oversized images.** All 26 assets are derived offline to their actual rendered box (`tools/derive-assets.mjs`); none exceeds 2× its rendered width. Total 3.6MB for 26 images.
- All below-fold images are `loading="lazy"` with intrinsic `width`/`height`, so there is no layout shift on load. The only non-lazy image is the hero, which is correct.
- **Blur is bounded and confined to the header.** The history and form backdrops use pre-blurred *assets* rather than a live `filter` on a large layer.
- Scroll handling is a single passive listener writing one custom property; reveals use `IntersectionObserver`, not scroll math.
- Bundle: **294kB JS (92kB gzip), 26kB CSS (5.7kB gzip)** — the CSS is entirely hand-authored, with no framework CSS shipped.

## 11. Accessibility Improvements

Not deferred to the end; the palette was designed around it. Full WCAG 2.1 AA was
adopted, **accepted as changing the reference's appearance** where the reference
fails.

- **Two-gold system (J-5).** The reference's single `#CFAF71` measures **2.10:1 on white** and fails AA at any size. `--gold-on-light: #877249` (4.65:1) is used for text on light surfaces; `--gold` is confined to dark. Polarity is carried by `.on-dark`/`.on-light` scopes so a component *cannot* accidentally place gold on white.
- **Decorative graphics are explicitly exempt** (spec §H.6). Over-applying the rule to the ornament made it visibly darker than the reference; corrected as M-16.
- **Real form labels (J-8).** The reference labels fields with placeholders only, failing WCAG 3.3.2 regardless of contrast. Field boundaries raised from ~0.05 alpha to ≥3:1 per 1.4.11. Both visibly differ from the reference, by decision.
- **C-2** fixed unreadable white-on-white stat text — an accessibility defect *and* a fidelity defect.
- Semantic landmarks, exactly one `<h1>`, no heading-level skips, a skip link, and designed focus indicators on every interactive element.
- **Automated result: 0 contrast failures** across all tested viewports.

## 12. Visual QA Results

Six render–compare–correct rounds (`stage0` … `stage9`). Final gate:

**`pass=11 fail=0 missing=0`** on the ratio table; 0 FontAwesome icons;
0 radius offenders; 0 shadow offenders; 0 broken images; 0 missing alt;
0 missing intrinsic dimensions; 0 oversized images; 0 contrast failures;
0 horizontal overflow at 9 viewports; correct structural counts
(6 practice / 4 testimonial / 6 blog / 3 attorney, 10 sections, 1 `h1`).

**The important result is that passing this gate was not sufficient.** Six
discrepancies (M-12 … M-16 and the M-9 revision) passed every automated check and
were caught only by looking at the render beside the screenshots — a three-line
H1, a wrong ornament motif, a cool-grey lead that should be warm tan, a
translucent panel that should be opaque, an overlay that should not exist, and an
ornament darkened by an over-applied accessibility rule.

Two defects were in the **instrument**, not the page, and both produced false
signals:

1. The full-page capture **raced lazy images**, rendering the form backdrop as flat colour. Six sampled points came back byte-identical and composited exactly to "overlay over body background" — a convincing signature of a negative-`z-index` layering bug. A live DOM probe disproved it: the image was `complete`, correctly sized, and an element-level capture of the same section had stddev 15.0. The harness now forces `eager` and awaits `decode()` before capturing, *after* the asset audit reads the real `loading` attributes.
2. `sips -c` **letterboxed instead of cropping**, adding black bars to derived variants. Now scales to cover, then crops.

States captured beyond the static full page: header at rest and scrolled, and
full-page renders at both 1728 and 390.

## 13. Remaining Known Discrepancies

Stated rather than smoothed over.

1. **The reference viewport is derived, not known.** 1728 is well corroborated (§4) but remains an inference. Every absolute pixel value depends on it; the ratios do not.
2. **Photography is substitute, not confirmed.** The originals are unavailable. Compositions match the reference's role for each slot, and `MANIFEST.json` marks each accordingly. Specifically, the **form backdrop is darker than the reference** (band mean ~27 vs 37.7). Not re-sourced again, because that would mean choosing an image for brightness rather than evidence.
3. **All responsive behaviour is unevidenced** (§9). It is coherent and overflow-free, but it is not a reconstruction of anything.
4. **All motion is unevidenced** (§7), by declaration.
5. **Body typeface is inferred.** The screenshots are too compressed to isolate a humanist sans with confidence; `--text-muted-on-dark` is similarly `PARTIALLY CONFIRMED` — it could not be separated from antialiasing.
6. **Interior pages do not exist.** The nav links to About, Pages, and Contact resolve nowhere; only the home page was in scope.
7. **The form is inert.** No backend exists, and inventing a submission endpoint would exceed the evidence.
8. **Unused dependencies remain.** `class-variance-authority`, `clsx`, `tailwind-merge`, and `tw-animate-css` are entirely unreferenced, and Tailwind is registered in `vite.config.ts` with **no entry point or utility class anywhere** — it emits nothing. This is shadcn scaffolding left from before §J-6 deferred shadcn in favour of hand-authored CSS. They cost nothing at runtime but should be removed; left in place because removing them presumes shadcn will not be reintroduced, which is the user's call.
9. **Hover/press states are largely unevidenced.** Exactly one hovered element appears in the screenshots (a practice card, which showed *no* hover treatment — see H-15). All other interaction states are declared refinement.
