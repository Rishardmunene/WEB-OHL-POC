# VISUAL QA LOG

Append-only record of each measured QA pass. Produced by `tools/qa.mjs`, which
measures live element geometry in headless Chrome and compares it against the
ratio table in `CONSOLIDATED_UI_SPEC.md` §C.1.

Ratios, not pixels: the reference screenshots are downscaled full-page captures
from an unknown viewport, so absolute pixel comparison would be false precision.
See `PROMPT_AUDIT.md` CONFLICT 7 / patch P9.

Reproduce any row with:

```
npm run dev
node tools/qa.mjs --label=<stage> --out=qa
```

---

## Stage 0 — verbatim port of the forensic reconstruction

**Purpose:** establish an honest baseline. This stage intentionally reproduces
the forensic document's HTML/CSS *including its errors*, so that every
subsequent correction is a measurable delta rather than an assertion.

**Result: 1 pass / 9 fail / 1 missing.** This is the expected and desired
outcome — it confirms the forensic reconstruction does not match the screenshot
evidence, which is what `FORENSIC_SCREENSHOT_COMPARISON.md` predicted.

### Geometry @1440 (page 1440px, container 1200px)

| Check | Expected | Actual | Delta | Status | Correction |
| ----- | -------- | ------ | ----- | ------ | ---------- |
| Content container | 0.737 | 0.8333 | +0.0963 | FAIL | C-2 |
| 3-col grid column | 0.320 | 0.3055 | −0.0145 | FAIL | M-3 |
| 3-col grid gap | 0.020 | 0.0250 | +0.0050 | PASS | — |
| Testimonial column | 0.241 | 0.4667 | +0.2257 | FAIL | C-4 (2 cards, must be 4) |
| Testimonial gap | 0.013 | 0.0333 | +0.0203 | FAIL | C-4 |
| Attorney grid gap | 0.018 | 0.0333 | +0.0153 | FAIL | M-5 |
| Hero height | 0.566 | 0.5000 | −0.0660 | FAIL | H-3 |
| Header row 1 height | 0.077 | 0.0604 | −0.0166 | FAIL | H-2 |
| Header total height | 0.158 | 0.1165 | −0.0415 | FAIL | H-2 |
| Attorney portrait w:h | 0.678 | 1.0286 | +0.3506 | FAIL | H-4 (square, must be portrait) |
| Pre-footer band height | 0.172 | — | — | MISSING | H-1 (section absent entirely) |

The container is the highest-leverage failure: at 0.833 instead of 0.737 every
inner ratio is measured against a denominator that is ~13% too wide, so several
child failures should partially resolve once the container is corrected. Fix the
container first, then re-measure before touching child grids.

### Structural counts

`practiceCards: 6, testimonialCards: 2, blogCards: 3, attorneyCards: 3, sections: 10, h1: 1`

Testimonial count of 2 contradicts the screenshots (4 columns) — correction C-4.

### Design tokens

`tokens: {}` — **no spec tokens resolve.** The ported CSS uses the forensic
document's own variable names, so Stage 2 (design tokens) is a prerequisite for
nearly every colour and spacing correction, not an optional cleanup.

### Surface treatment

- radius offenders: **1**
- shadow offenders: **6**

Each must either be removed (screenshots show flat, sharp surfaces) or logged in
the Deviation Register as an approved refinement. None are currently logged.

### Accessibility

One contrast failure, and it is a genuine defect rather than a borderline ratio:

| Ratio | Required | Colour | Size | Text |
| ----- | -------- | ------ | ---- | ---- |
| 1.05:1 | 3.0 | `rgb(255,255,255)` | 36px | "15,890+" |

White text on a white surface in the light stats band — effectively invisible.
Tracked as correction C-3.

### Assets (§21)

| Issue | Count |
| ----- | ----- |
| Broken | 2 |
| Missing `alt` | 0 |
| Not lazy-loaded | 14 of 14 |
| Missing intrinsic `width`/`height` | 14 of 14 |
| Oversized (>2× rendered box) | 0 |

Two images fail with `net::ERR_BLOCKED_BY_ORB` — Unsplash refuses these
cross-origin hotlinks. **All 14 images are hotlinked Unsplash URLs inherited
from the forensic document.** They are substitutes, not confirmed assets, and
hotlinking is unreliable by demonstration. Missing intrinsic dimensions on every
image is also a layout-shift source.

### Iconography (§16)

`fontAwesome: 31, svg: 0` — 31 icons from a CDN FontAwesome stylesheet, zero
from the project's icon library. This violates the single-coherent-family rule
and adds a blocking third-party stylesheet.

### Responsive (§22)

Horizontal overflow at every width below 1024px. The page always scrolls to
920px wide regardless of viewport, meaning the ported CSS contains **no
responsive rules at all** — the 920px floor is fixed desktop layout.

| Viewport | Client | Scroll | Overflow |
| -------- | ------ | ------ | -------- |
| 375 | 375 | 920 | **+545px** |
| 390 | 390 | 920 | **+530px** |
| 480 | 480 | 920 | **+440px** |
| 768 | 768 | 920 | **+152px** |
| 1024 | 1024 | 1024 | ok |
| 1280 | 1280 | 1280 | ok |
| 1440 | 1440 | 1440 | ok |
| 1920 | 1920 | 1920 | ok |

Primary culprits at mobile: `.header-actions`, `.header-contact`,
`.contact-item`. At 768 the culprits are section titles and separators pinned to
a fixed 240px-wide track.

Per §22 this behaviour is **not** observed in the evidence — the screenshots are
desktop-only. All responsive behaviour is therefore inferred and must be
recorded as such in the Deviation Register.

### Console

No console errors or page errors. The only failed requests are the two blocked
Unsplash images plus one blocked hero background.

---

## Baseline artifacts

- `qa/stage0-report.json` — full machine-readable report, all 8 viewports
- `qa/stage0-1440-full.png` — 1440×9350 full page
- `qa/stage0-390-full.png` — 920×12599 full page (note the 920px width: the overflow above)
- `qa/stage0-header-top.png`, `qa/stage0-header-scrolled.png` — header states

---

# ROUND 2 — post-implementation QA (`stage9`)

Loop run per MASTER PROMPT §17: implement -> render -> screenshot -> compare ->
correct -> render again. Six rounds were needed. What follows is the final state
plus the discrepancies each round found, because the corrections matter more than
the passing numbers.

## Automated gate

| Check | Expected | Measured | Status |
| ----- | -------- | -------- | ------ |
| Content container | 0.737 | 0.737 | PASS |
| 3-col grid column | 0.320 | 0.320 | PASS |
| 3-col grid gap | 0.020 | 0.020 | PASS |
| Testimonial column | 0.241 | 0.241 | PASS |
| Testimonial gap | 0.013 | 0.013 | PASS |
| Attorney grid gap | 0.018 | 0.018 | PASS |
| Hero height | 0.566 | 0.566 | PASS |
| Header row 1 height | 0.077 | 0.077 | PASS |
| Header total height | 0.158 | 0.158 | PASS |
| Attorney portrait w:h | 0.678 | 0.678 | PASS |
| Pre-footer band height | 0.172 | 0.172 | PASS |

`pass=11 fail=0 missing=0`

Structure: 6 practice / 4 testimonial / 6 blog / 3 attorney cards, 10 sections,
1 `<h1>`. Icons: 0 FontAwesome, 33 inline SVG. Radius offenders 0, shadow
offenders 0. Images: 0 broken, 0 missing alt, 0 missing intrinsic dimensions,
0 oversized. Contrast failures: 0. Horizontal overflow: none at 375, 390, 480,
768, 1024, 1280, 1440, 1728, 1920.

## Discrepancies the numbers did NOT catch

Every item below passed the automated gate and was found only by looking at the
render against the screenshots. This is the argument for §17 existing at all.

| ID | Element | Found | Evidence |
| -- | ------- | ----- | -------- |
| M-12 | Ornamental separator | Built as `short rule + star + long rule`. The horizontals are **continuous** and are **crossed** by a pair of verticals, with a saturated node at the intersection. | Pixel zoom of two independent occurrences (hero on dark, attorneys on light) agree exactly. Box 38x18px at a 744px capture = 0.051 x 0.024 of page width. |
| M-13 | Hero `<h1>` | Set on THREE lines; reference sets TWO. `max-width: 46ch` resolved against the 16px body size (~368px), not the 60px heading. | "Deeper Understanding" measures 216px of 744 = 0.288 of page width (~498px at 1728). |
| M-14 | Hero lead colour | Used the cool grey `#A3A7B5` used for muted copy elsewhere. Reference is a warm tan. | Glyph cores across 30 rows peak at `#B69D74` with **nothing brighter anywhere** in the paragraph, so it is not white text tinted by the photo. |
| M-15 | Form panel | `rgb(30 40 51 / 0.93)`, letting the photo bleed through. Reference panel is fully opaque. | Panel interior is 78,695 pixels of exactly `#1E2833`, zero bleed-through. |
| M-9 (revised) | Form backdrop | Overlay `rgb(22 29 40 / 0.34)` measured 26.3 mean vs the reference's 37.7. There is **no** overlay. | Reference photo margin mean 37.7; the source photograph's own mean is 38.7. No text sits on the bare photo, so nothing depends on an overlay. Removed. |
| M-16 | Ornament colour | Forced to `--gold-on-light` (`#877249`) on light sections by the two-gold rule J-5, making it far darker than the reference. | The separator is decorative and `aria-hidden`, so WCAG 1.4.3/1.4.11 do not apply. Measured as `#CFAF71` at ~50% alpha in BOTH polarities: `#E2D6BF` observed on white vs `#E8D9BC` predicted; `#76715A` observed on the hero photo vs `#766B52` predicted. J-5 now explicitly exempts decorative graphics. |

Verification after correction: the light ornament measures 87x41px against a
target of 88x42, hairlines render `#E7D7B8` against the reference's `#E2D6BF`,
and the node is full-strength `#CFAF71`.

## Two harness defects found by disagreement with the render

Worth recording because in both cases the instrument, not the page, was wrong.

**1. The full-page capture raced lazy images.** The consultation-form backdrop
photographed as flat `#1C2430`, and six sampled points were *byte-identical*,
which composites exactly to `overlay over body background` — the signature of a
negative-`z-index` layer painting under an opaque background. It was not: a live
DOM probe showed the image `complete`, `1600x1067`, `visible`, correctly sized,
and an element-level screenshot of the same section had stddev 15.0, i.e. the
photo was painting all along. The harness had captured before the lazy image
decoded, and the artefact was indistinguishable from a real CSS layering bug.
`tools/qa.mjs` now forces every image to `eager` and awaits `decode()` before
capturing — after the asset audit reads the real `loading` attributes, so the
lazy-loading check still means something.

**2. `sips -c` letterboxed instead of cropping.** Derived image variants came
back with black bars because `-c` pads to the target box rather than filling it.
`tools/derive-assets.mjs` now scales to cover, then crops.

## Screenshot-derived corrections to imagery

Three assets were thematically wrong rather than technically broken, so no
automated check could have flagged them: the hero backdrop resolved to a yellow
book cover, the history backdrop was blurred past legibility, and the pre-footer
band did not show architecture. All three were re-sourced, and a visible
duplicate between `blog-5` and `intro-secondary` was varied.

## Known remaining discrepancy

The form backdrop photograph is darker than the reference (mean ~27 across the
band vs 37.7). The asset is a substitute — the original photography is not
available — and it is a library interior, which is structurally correct. Noted
rather than fixed, because replacing it again would be choosing an image for
brightness rather than for evidence.

## Artifacts

- `qa/stage9-report.json` — machine-readable, all 9 viewports
- `qa/stage9-1728-full.png` — 1728x11267 reference-viewport capture
- `qa/stage9-390-full.png` — 390x18011 mobile capture
- `qa/stage9-header-top.png`, `qa/stage9-header-scrolled.png` — header states
