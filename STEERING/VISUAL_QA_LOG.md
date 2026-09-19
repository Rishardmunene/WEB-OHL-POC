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
