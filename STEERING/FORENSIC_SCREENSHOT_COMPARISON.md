# FORENSIC RECONSTRUCTION vs. SCREENSHOT EVIDENCE

**Phase 2 + 3 artifact — claim-by-claim discrepancy matrix**

| | |
|---|---|
| Compares | `STEERING/VIDEO-TO-WEBSITE FORENSIC RECONSTRUCTION AGENT_RO....docx` (claims + its embedded HTML/CSS) against `STEERING/Screenshots/*.png` (evidence) |
| Governing rule | The screenshot wins. The forensic document is a hypothesis report, not a specification |
| Status | Analysis only. No application code exists or was created. Original evidence untouched |
| Predecessor | `DISCOVERY_SUMMARY.md` |

> This document separates **what the previous agent believed** from **what the evidence demonstrates**. Where the two agree, that is recorded as a win for the forensic work, not glossed over. Where they disagree, the measurement method is stated so any row can be independently re-verified or refuted.

---

## 1. Measurement method and its limits

Read this before trusting any number below.

**Colors** were read as dominant-pixel frequency over flat regions. A result reported at 100 % frequency is a pure, unantialiased fill and is effectively exact. Results in the 30–50 % range are flat fills carrying image-compression noise and are reliable to within a point or two per channel.

**Geometry** was measured by scanning pixel rows for runs of background color to locate element edges. All values are expressed as **ratios**, because the screenshots are downscaled full-page captures from an unknown viewport — absolute CSS pixels are not directly recoverable.

**Typography** was measured as baseline-to-baseline line pitch and cap height. At this raster scale this supports *relative* scale comparison only. It cannot identify a typeface.

### 1.1 The scale factor, derived rather than assumed

One derivation underpins every absolute number in this document, so it is shown in full:

1. Body-copy line pitch measures **11 px** consistently (hero paragraph, intro paragraph, practice-card body).
2. Glyph rendering suggests a downscale factor near 2.3, which would imply an original capture width near 1728 px — a standard macOS laptop logical width.
3. Testing that: 11 px × 2.307 = **25.4 px** line-height. At a line-height of 1.6 (the forensic's own value), that gives a font size of **15.9 px**.
4. That lands on **16 px** — the forensic report's stated body size, reached independently from pixel measurement.

This is a genuine cross-validation: an assumed scale factor and an independently claimed font size agree to within 1 %. It raises confidence in both.

**Consequences** (all `INFERRED`, never `OBSERVED`):

| Derived value | Result |
|---|---|
| Capture viewport | ≈ 1728 px wide |
| Scale factor | ≈ 2.307 |
| **Content container** | 0.737 × 1728 ≈ **1272 px** → a locked decision of **1280 px** is the closest conventional value |
| Hero H1 | pitch 29 px × 2.307 = 66.9 px line-height → **≈ 58–61 px** at line-height 1.1–1.15 |
| Section H2 | pitch 20–22 px → **≈ 38–42 px** at line-height 1.2 |
| Body | **16 px** / line-height 1.6 |

**This is inference, not observation.** If the capture viewport was different, every absolute figure above scales with it — but **every ratio in this document stays valid**. Ratios are therefore the fidelity criterion; the absolute values are a locked implementation decision required by decision B4.

---

## 2. Scorecard by category

| Category | Assessment | Principal issue |
|---|---|---|
| Section ordering | **Strong** | Correct throughout; one whole section omitted |
| Page structure | Mixed | Hero composition and stat-card placement wrong |
| Type scale (ratios) | **Strong** | Ratios validate to within ~4 %; families unidentifiable |
| Colors | **Poor** | All six stated values wrong; self-audited as "matched, high confidence" |
| Radius | **Strong** | Correctly identified as 0; then overridden by the prompts |
| Shadows | Poor | Invented where none exists |
| Borders / hairlines | Mixed | Several real hairlines missed, some invented |
| Component anatomy | **Poor** | 14 of ~18 components differ materially |
| Spacing / rhythm | Adequate | Right order of magnitude, grid gaps too wide |
| Iconography | Poor | Wrong style (solid vs line) and wrong glyphs |
| Imagery | Acknowledged placeholder | Honestly flagged; unresolvable (no assets) |
| Interactions | Weak | One state observed; a lift and a border invented |
| Animation / motion | Not evidenced | Single-sourced through an absent video |
| Responsive | Correctly unknown | Honestly flagged as not visible |

**Aggregate.** Of 41 significant claims assessed below: **9 CONFIRMED**, **6 PARTIALLY CONFIRMED**, **19 CONTRADICTED**, **7 NOT VISIBLE / UNCERTAIN**.

The forensic document's self-assessment of *"Visual accuracy: 92 %"* and *"Colors — Matched — High — match the observed dark aesthetic perfectly"* is not supportable. Its **structural** self-assessment largely is.

---

## 3. Discrepancy matrix

Status vocabulary: `CONFIRMED` · `PARTIALLY CONFIRMED` · `CONTRADICTED` · `NOT VISIBLE` · `INFERRED` · `UNCERTAIN`

### 3.1 Page structure and section ordering

| Element | Forensic report says | Screenshot shows | Status | Confidence | Action |
|---|---|---|---|---|---|
| Section order | Header → Hero → Intro → Practice → Stats/Partners (light) → History/Skills → Testimonials → Attorneys (light) → CTA → Form → Blogs → Footer | Exactly this order | **CONFIRMED** | High | **Preserve.** The forensic document's best contribution |
| Pre-footer image band | Not mentioned anywhere | Full-bleed photographic band (classical architecture) between blog and footer; height ≈ 0.172 × page width; reaches both page edges | **CONTRADICTED** (omission) | High | **Add.** Missing section |
| Global layout | Full-width sections with constrained central container | Confirmed; two sections break out full-bleed (history/skills, contact form) plus the image band | **CONFIRMED** | High | Preserve |
| Container width | ≈ 1200 px, *"INFERRED based on standard desktop aspect ratio"*, viewport *"inferred ~1920px"* | Container = **0.737 × page width**, measured in 7 independent places (0.7306–0.7399) | **CONTRADICTED** (reasoning) / **UNCERTAIN** (value) | High on ratio, none on absolute | **Correct.** 1200 px at ratio 0.737 implies a 1628 px viewport, not 1920. Lock **1280 px**; 1200 px would compress every measured ratio by ~6 % |
| Vertical rhythm | Standardized section padding ≈ 100 px; implemented at 120 px | Section heights ratio-consistent with generous uniform padding; 4 section boundaries fall between captures and are unobserved | **PARTIALLY CONFIRMED** | Medium | Keep uniform rhythm; treat exact padding as `INFERRED` |

### 3.2 Header and navigation

| Element | Forensic report says | Screenshot shows | Status | Confidence | Action |
|---|---|---|---|---|---|
| Two-row structure | Row 1 logo + CTA/cart; row 2 nav + contact | Exactly this | **CONFIRMED** | High | Preserve |
| Row 1 contents | Logo, "Cart (0)", "Book a Consultation" | Confirmed: gold fluted-column mark + serif wordmark; outline bag icon; button on a light translucent fill | **CONFIRMED** | High | Preserve |
| Row 2 contents | Home / About Us / Pages ▾ / Contact Us; phone + email blocks | Confirmed | **CONFIRMED** | High | Preserve |
| Header background | `rgba(27,30,37,0.95)` + `backdrop-filter: blur(10px)` | **Fully transparent** over the hero photograph. No tint, no blur | **CONTRADICTED** | High | **Correct** to transparent at rest. Any blur is a refinement, logged |
| Gold top border | `border-top: 3px solid #C8A153` | **Absent** | **CONTRADICTED** | High | **Remove** |
| Inter-row divider | `border-bottom: 1px solid rgba(255,255,255,0.05)` | Present — hairline at y ≈ 58, container width | **CONFIRMED** | High | Preserve |
| Contact icon treatment | 40 px circle, `rgba(255,255,255,0.1)` border, gold icon | Circular ring in **gold**, gold icon | **PARTIALLY CONFIRMED** | High | **Correct** ring color to gold |
| Contact label color | `--text-muted` grey | **Gold** | **CONTRADICTED** | High | **Correct** |
| Second contact icon | Same as first | Appears **gold-filled** where the first is ring-only | **UNCERTAIN** | Low | Investigate; may be a hover state. Do not implement asymmetry yet |
| "Book a Consultation" style | Transparent, 1 px muted border | Light translucent **fill**; border not distinguishable | **UNCERTAIN** | Low | Implement as translucent fill; flag |
| Active nav item | "Home" gold via `.active` | "Home" appears **white**, same as siblings | **CONTRADICTED** | Medium | **Correct.** No gold active state evidenced |
| Sticky behavior | Sticky (from video) | No scrolled capture exists anywhere | **NOT VISIBLE** | — | Single-sourced. Implement sticky; label `UNCERTAIN (video, unverified)` |
| Scrolled appearance | Not specified | No evidence | **NOT VISIBLE** | — | Entire scroll treatment in `MASTER PROMPT.md` §6–7 is **refinement**, not reconstruction |
| Header height | Not specified | Row 1 ≈ 0.077 × page width; total ≈ 0.158 | **INFERRED** | Medium | Use ratio |

### 3.3 Hero

| Element | Forensic report says | Screenshot shows | Status | Confidence | Action |
|---|---|---|---|---|---|
| Composition | *"split 50/50 content to image"* | **One full-bleed photograph** (suited man, library, US flag) with a dark gradient scrim from the left. No column split | **CONTRADICTED** | High | **Correct.** The forensic's own CSS (`linear-gradient … , url(...) center/cover`) actually implements the right thing — the prose description is what is wrong |
| Height | ≈ 90vh (implemented `min-height: 80vh`) | Photographic region = **0.566 × page width**. Viewport height unknown, so vh is unverifiable | **UNCERTAIN** | High on ratio | Implement to ratio; treat vh as `INFERRED` |
| Overlapping stat cards | *"Overlapping statistics cards at the bottom right"*; `position: absolute; bottom: -50px; right: 20%` | **None.** The hero ends cleanly at y = 424. The stat tiles are in the **Intro** section, in normal flow | **CONTRADICTED** | High | **Correct.** Amplified into a requirement by `MASTER PROMPT.md` §18 (*"preserve their overlapping relationship"*) — that instruction must be withdrawn |
| Separator above H1 | Not mentioned | Small ornamental separator **above** the H1 | **CONTRADICTED** (omission) | High | **Add** |
| H1 | Two lines, ≈ 65 px | Two lines; pitch 29 px, cap height 15 px → ≈ 58–61 px | **PARTIALLY CONFIRMED** | Medium | Minor correction; slightly smaller than claimed |
| Paragraph | Muted, 18 px, constrained width | Confirmed; pitch 11 px, same as body | **CONFIRMED** | Medium | Preserve |
| CTA button | Gold fill, dark text, sharp corners | Confirmed | **CONFIRMED** | High | Preserve |
| Content alignment | `.hero-content` inside container | Content left edge = container left edge (x = 100 at both heading and button rows) | **CONFIRMED** | High | Preserve |

### 3.4 Color system

The forensic self-audit rates this category *"Matched / High / match … perfectly."* Every value is wrong.

| Role | Forensic report says | Screenshot measures | Status | Confidence | Action |
|---|---|---|---|---|---|
| Primary dark background | `#1A1D24` (spec) / `#1b1e25` (CSS) | **`#1E2833`** — 100 % pure fill in 5 independent locations | **CONTRADICTED** | Very high | **Correct.** Reference is markedly bluer, less neutral |
| Second dark background | Not modelled | **`#161D28`** — 100 % pure fill, practice-areas section only | **CONTRADICTED** (omission) | Very high | **Add** |
| Card on dark (practice) | `#252830` | **`#1E2833`** — the *primary* tone on the *deeper* tone, which is why card contrast is nearly imperceptible | **CONTRADICTED** | Very high | **Correct** |
| Card on dark (testimonial) | `#252830` | **`#2F3A48`** — a distinctly lighter card | **CONTRADICTED** | High | **Correct.** Two card tones exist, not one |
| History panel | Not modelled | ≈ `#2F3642`–`#303843`, translucent over photography | **CONTRADICTED** (omission) | Medium | **Add**; exact alpha unrecoverable |
| Light section background | `#F8F8F8` | **`#FFFFFF`** — 100 % pure, two separate sections | **CONTRADICTED** | Very high | **Correct** |
| Light card fill | `#FFFFFF` + `#eaeaea` border + small shadow | ≈ **`#FCFBFC`**, no border or shadow detectable | **CONTRADICTED** | High | **Correct.** The relationship is **inverted**: section is pure white, card is the near-white |
| Footer | `#16181d` (darker than body) | **`#1E2833`** — identical to the sections | **CONTRADICTED** | Very high | **Correct.** No footer darkening |
| Gold accent | `#C8A153` | **`#CFAF71`** — 34–57 % dominant across several independent gold elements | **CONTRADICTED** | High | **Correct.** Also hard-coded in `MASTER PROMPT.md` §13 |
| Primary text on dark | `#FFFFFF` | Consistent with white | **CONFIRMED** | High | Preserve |
| Muted text on dark | `#A3A7B5` | Consistent with a light blue-grey; exact value not isolable from antialiased text | **PARTIALLY CONFIRMED** | Low | Accept; refine if better evidence appears |

**Net:** the dark scale has **four** values (`#1E2833`, `#161D28`, `#2F3A48`, plus the translucent panel), not two. The light scale is inverted relative to the reconstruction.

### 3.5 Typography

| Element | Forensic report says | Screenshot shows | Status | Confidence | Action |
|---|---|---|---|---|---|
| Serif headings / sans body pairing | High-contrast serif + geometric sans | Confirmed throughout | **CONFIRMED** | High | Preserve |
| Third family | Not mentioned | **Calligraphic script** for the intro author signature ("Peeter Park") | **CONTRADICTED** (omission) | High | **Add** to the type system |
| Font identities | Playfair Display + Inter, explicitly SUBSTITUTED | Unidentifiable at this raster scale | **UNCERTAIN** | — | Honestly flagged. Permanently unresolvable under decision B4 |
| Body size | 16 px / line-height 1.6 | Pitch 11 px → 25.4 px at scale → **15.9 px** | **CONFIRMED** | Medium-high | **Preserve.** Independently corroborated (§1.1) |
| Section H2 size | ≈ 42 px, line-height 1.2 | Pitch 20–22 px → 46–51 px → **38–42 px** | **CONFIRMED** | Medium | Preserve; 42 px is at the top of the measured range |
| Hero H1 size | ≈ 64–65 px, line-height 1.1 | Pitch 29 px → 66.9 px → **58–61 px** | **PARTIALLY CONFIRMED** | Medium | Minor reduction |
| Type scale *ratios* | hero:body ≈ 2.75, section:body ≈ 1.97 (implied) | **2.64** and **1.82–2.00** measured | **CONFIRMED** | Medium | **Preserve.** Within ~4 % — a real success for the forensic work |
| Numerals in sans | `.stat-info h3`, `.stat-box h3` set to sans | Confirmed — numbers and percentages are sans while adjacent labels are serif | **CONFIRMED** | High | Preserve |
| Gold text accents | Not modelled | Practice-area paragraph contains **gold-highlighted phrases**; timeline years gold; attorney roles gold; contact labels gold; footer copyright partly gold | **CONTRADICTED** (omission) | High | **Add** |
| Weights, tracking, optical sizing | Various | Not measurable at this scale | **UNCERTAIN** | — | Document as inference |

### 3.6 Surface treatment — radius, shadow, borders

| Element | Forensic report says | Screenshot shows | Status | Confidence | Action |
|---|---|---|---|---|---|
| **Border radius** | 0 px throughout; *"Appears exceptionally sharp, possibly exactly 0px"* | **0 on every rectangular element** — cards, buttons, images, panels, stat tiles, form panel, history panel. Consistent across all 5 screenshots | **CONFIRMED** | Very high | **Preserve.** Strongest confirmed finding in the project. Directly opposed by `Rules.md` §8 and `MASTER PROMPT.md` §12 |
| Circular geometry | Avatars 50 %, contact icons 50 % | Confirmed — avatars, header contact rings, light-stat gold ring badges | **CONFIRMED** | High | Preserve. The *only* round geometry, and deliberately so |
| Intro image radius | `border-bottom-right-radius: 40px` | Sharp corners; and it is a **three-image collage**, not one image | **CONTRADICTED** | High | **Remove** |
| History image radius | `border-radius: 20px` (inline) | Sharp corners | **CONTRADICTED** | High | **Remove** |
| **Shadows** | `0 10px 30px rgba(0,0,0,.3)` on stat cards; `0 20px 40px rgba(0,0,0,.4)` on form panel; `0 5px 20px` on light stat boxes | **No shadow detectable on any surface in any screenshot.** Separation is achieved entirely by fill-tone difference | **CONTRADICTED** | High | **Remove all.** Note `MASTER PROMPT.md` §11 frames the task as *softening* these — treating invented shadow as inherited condition |
| Hairline borders | Some modelled | Real and used deliberately: header inter-row divider; **vertical rule** beside the practice heading; **horizontal rule inside each practice card** above its footer row; rules under each footer column heading; rule below the light stats row | **PARTIALLY CONFIRMED** | High | **Add** the missed hairlines. This is the reference's actual separation device, in place of shadow |
| Translucency | Header at 0.95 + blur | Used in exactly two places: header (fully transparent) and history panel (dark scrim over blurred photo) | **PARTIALLY CONFIRMED** | Medium | Correct both; exact alpha unrecoverable |

### 3.7 Components

| Component | Forensic report says | Screenshot shows | Status | Confidence | Action |
|---|---|---|---|---|---|
| Intro image | One image | **Three-image collage** — two side by side above, one wide below | **CONTRADICTED** | High | **Correct** |
| Intro author | Playfair Display, "Peeter Ocal" | **Calligraphic script**, "Peeter Park" | **CONTRADICTED** | High | **Correct** typeface (name is now placeholder under B2) |
| Intro stat tiles | In hero; icon + `<h3>` number | In **Intro**; dark tile has gold **line-icon** + "95% / Case Success"; gold tile has **"35+" inside a dark square badge** | **CONTRADICTED** | High | **Correct** placement and anatomy |
| Practice heading block | Heading + paragraph, flex | Confirmed, **plus a vertical hairline rule** between columns and **gold-highlighted phrases** in the paragraph | **PARTIALLY CONFIRMED** | High | **Add** both |
| Practice card count / grid | 6 cards, `repeat(3,1fr)`, gap 30 px | 6 cards, 3 × 2 confirmed. Column = **0.320 × container**, gap = **0.020 × container** (≈ 25 px at 1280) | **PARTIALLY CONFIRMED** | High | **Correct** gap: 30 px is ~20 % too wide |
| Practice card internals | Title, body, footer row (icon + button) | Confirmed, **plus a horizontal hairline rule** above the footer row | **PARTIALLY CONFIRMED** | High | **Add** rule |
| "Learn More" rest state | Transparent, gold 1 px border, gold text | **Dark fill, white text, no border** | **CONTRADICTED** | High | **Correct** |
| "Learn More" hover state | Gold fill, dark text | **Gold fill, dark text** — visible on the "Car Accident" card | **CONFIRMED** | High | **Preserve.** The only observed interaction state in the entire evidence set |
| Practice icons | FontAwesome **solid** (`fa-briefcase`, `fa-helmet-safety`, `fa-car-burst`, `fa-skull`, `fa-handcuffs`, `fa-users`) | **Thin-stroke line icons** in gold; different glyphs — office **building** not safety helmet, **truck** not car-burst | **CONTRADICTED** | High | **Correct** to a single line-icon family; re-select glyphs |
| Light stat boxes | Icon beside number; white fill, `#eaeaea` border, small shadow; sans label | **Number inside a gold ring badge with a small gold icon above it**; **serif** label; extra muted descriptive line; no border or shadow | **CONTRADICTED** | High | **Correct** |
| Light stat box 3 | Gradient overlay + background image, centred flex | Dark photographic box, **left-aligned** white text, no icon | **PARTIALLY CONFIRMED** | High | Correct alignment |
| Light stats grid | `repeat(3,1fr)`, gap 30 px | 3 columns ≈ 0.32 × container, gap ≈ 11 px raw (same as practice) | **PARTIALLY CONFIRMED** | Medium | Correct gap |
| "Meet The Partners" | Separator below heading | Separators **flanking both sides** of the heading | **CONTRADICTED** | High | **Correct** |
| Partner logos | 5 FontAwesome/text mockups; acknowledged as substitutes | 5 distinct grayscale brand logos, faded | **CONTRADICTED** (asset) | High | Honestly flagged. Unresolvable — no assets |
| History section | Standard contained section | **Full-bleed blurred photograph** with a container-width translucent dark panel on top | **CONTRADICTED** | High | **Add** the photographic backdrop and panel |
| History grid | `1fr / 400px / 1fr` | Three columns: timeline, tall narrow portrait image, skills | **PARTIALLY CONFIRMED** | Medium | Preserve structure; verify centre ratio |
| Timeline | `border-left: 2px` + gold `::before` dots + left padding | **No connector line, no dots, no left inset.** Gold year heading over muted paragraph, flush left | **CONTRADICTED** | High | **Correct.** `MASTER PROMPT.md` §20 asks to refine a line and markers that do not exist |
| Skill bars | 4 px track, gold fill | Hairline track, gold fill, **gold circular knob at the fill terminus** | **CONTRADICTED** | High | **Add** knob |
| Testimonial count / layout | **2** cards, `1fr 1fr`, two reviewers per card in a `border-top` footer row | **4** cards in a staggered 4-column grid (column 0.241 × container, gap 0.013); reviewer blocks float **outside and overlapping** the cards — above the raised ones, below the lowered ones | **CONTRADICTED** | High | **Correct.** One of the largest structural errors |
| Testimonial quote mark | FontAwesome `fa-quote-left`, absolute, opacity 0.5 | Stylised gold double-quote glyph, top-left | **PARTIALLY CONFIRMED** | Medium | Refine treatment |
| Attorney portrait | `height: 350px`, `object-fit: cover` | Aspect **0.678 (w:h)** → height ≈ 1.475 × width (≈ 600 px at a 404 px card). The forensic crop is far too short | **CONTRADICTED** | High | **Correct** |
| Attorney socials | 3 dark icons (fb / twitter / linkedin) below the name | **4 icons** in a **white bar inset from the photo edges, overlapping the image bottom**, finished with a thin **gold** underline | **CONTRADICTED** | High | **Correct** |
| Attorney role color | `#666` | **Gold** | **CONTRADICTED** | High | **Correct** |
| Attorneys grid | gap 40 px | Column 0.322 × container, gap ≈ 10 px raw (≈ 0.018) | **CONTRADICTED** | High | **Correct.** 40 px is roughly double |
| CTA consult box | Plain white, 40 px padding; **circular** gold-tinted icon | White with an **inset grey frame** (double-frame effect); **solid gold square** icon tile with white glyph | **CONTRADICTED** | High | **Correct** |
| Form panel | `max-width: 900px`, `margin: 0 auto`, `#252830`, heavy shadow | **Full container width**, container-aligned (x 96–643 vs container 95–643), offset downward, no detectable shadow | **CONTRADICTED** | High | **Correct** |
| Form section overlay | `rgba(27,30,37,0.85)` | Much lighter — the library photograph remains clearly legible | **CONTRADICTED** | High | **Correct** |
| Form fields | Underline-only, transparent, gold focus underline | Underline-only confirmed; 2 × 2 then full-width message; centred **white** submit button | **PARTIALLY CONFIRMED** | High | Preserve. **Focus state NOT VISIBLE** — gold focus is inference |
| Blog card count | 3 cards + featured | **6 cards** (3 × 2) + featured | **CONTRADICTED** | High | **Correct** |
| Blog card surface | `background-color: var(--bg-card)` | **No card surface at all.** `#1E2833` sampled directly inside every card text area — identical to the section background | **CONTRADICTED** | High | **Correct** |
| Featured blog surface | `background-color: var(--bg-card)`, 50 px padding | **No card surface**; image + content directly on the section background, hairline rule beneath | **CONTRADICTED** | High | **Correct** |
| Blog grid | `repeat(3,1fr)`, gap 30 px | 3 columns ≈ 0.32 × container, gap ≈ 12 px raw | **PARTIALLY CONFIRMED** | High | Correct gap |
| Read More | Gold, uppercase, letterspaced | Gold, **underlined**; casing not reliably legible | **PARTIALLY CONFIRMED** | Medium | Add underline; verify casing |
| Footer background | `#16181d` | **`#1E2833`** — identical to sections | **CONTRADICTED** | Very high | **Correct** |
| Footer logo row | Centred logo, no ornament | Centred logo **flanked by long double-hairline gold rules** terminating in a four-point star motif | **CONTRADICTED** | High | **Add** |
| Footer columns | 4 columns, first has one 6-link list | 4 columns; **first column holds two sub-columns** of links; hairline rule under each serif heading | **CONTRADICTED** | High | **Correct** |
| Footer bottom | Copyright + 4 social icons | Confirmed; copyright has **gold-highlighted** segments, "Follow :" in gold | **PARTIALLY CONFIRMED** | High | Add gold accents |
| Ornamental separator | `line — diamond — line`; 40 px lines + 8 px rotated square | Motif is real and pervasive, but geometry differs: **paired parallel hairlines crossed by a short vertical tick with a slim four-point star**; asymmetric in section headings (short left, long right), symmetric when centred | **PARTIALLY CONFIRMED** | High | **Preserve the concept, correct the geometry.** A rotated square is not a four-point star |

### 3.8 Interaction, motion, responsive

| Element | Forensic report says | Screenshot shows | Status | Confidence | Action |
|---|---|---|---|---|---|
| Practice button hover | Gold fill, dark text | **Confirmed** on the "Car Accident" card | **CONFIRMED** | High | Preserve |
| Practice **card** hover | `transform: translateY(-5px)` + gold `border-bottom` | The hovered card shows **no lift, no shadow change, and no gold bottom border** | **CONTRADICTED** | High | **Remove both.** Any hover lift is refinement, logged. Note `MASTER PROMPT.md` §8/§19 request exactly these |
| Other hover states | *"UNCERTAIN; implemented logical inferences"* | Not visible | **NOT VISIBLE** | — | Honestly flagged. Keep as inference |
| Focus / pressed states | Not addressed | Not visible | **NOT VISIBLE** | — | Entirely refinement. A11y still requires visible focus |
| Scroll reveals | Not claimed | Not visible | **NOT VISIBLE** | — | Entirely refinement (`Rules.md` §17, `MASTER PROMPT.md` §16) |
| Skill-bar animation | Not claimed | Not visible — bars shown at final values | **NOT VISIBLE** | — | Refinement (`MASTER PROMPT.md` §21) |
| Hero motion | Not claimed | Not visible | **NOT VISIBLE** | — | Refinement (`MASTER PROMPT.md` §17) |
| Transition timing | `transition: 0.3s ease` globally | Not observable | **INFERRED** | — | Replace with the `Rules.md` §14 token scale |
| Video facts | Duration 2:09; hover observed 00:43–00:45; sticky header; grid at 01:06 | **Video absent from repository** | **UNCERTAIN** (permanently, per decision B3) | — | Single-sourced. May never be promoted above `UNCERTAIN` |
| Responsive behavior | *"NOT VISIBLE"*, standard wrappers assumed | No sub-desktop capture exists | **NOT VISIBLE** | — | Honestly flagged. Fully inferred |
| Routing | *"NOT VISIBLE"*, set to `#` | Footer links imply a multi-page site; only home is captured | **NOT VISIBLE** | — | Now in scope per decision B5, with **zero** visual evidence |

---

## 4. What the previous agent got right

Stated plainly, because the volume of corrections above could obscure it:

1. **Section ordering** — correct end to end, and the single most valuable thing carried forward.
2. **Zero border-radius** — correctly identified, and correctly flagged as *"possibly exactly 0px."* The evidence fully vindicates this, and the steering prompts then override it.
3. **The type scale ratios** — hero:body and section:body validate to within ~4 %, and the 16 px body size is independently corroborated (§1.1).
4. **The serif/sans pairing**, and setting numerals in the sans face while adjacent labels stay serif.
5. **Underline-only form fields.**
6. **Sans-serif numerals, serif headings** across stat and blog components.
7. **The uncertainty register** — fonts, mobile behavior, routing and assets were all honestly flagged as unknown. This is genuinely good practice.
8. **Asset substitution was disclosed**, not passed off as reference photography.
9. **The ornamental separator as a signature device** — a real and pervasive pattern, correctly identified as a system-level motif even though its geometry was approximated.

## 5. Where it went wrong, and why it matters

The failure mode is not the inferences it *labelled* — those are fine and even exemplary. It is the inferences it did **not** label:

- **Reconstruction presented as measurement.** Six color values were stated with hex precision and then self-audited as *"Matched / High / perfectly."* All six are wrong. Precision was communicated where none existed.
- **Component anatomy invented from a plausible mental model.** Testimonials (2 vs 4 cards), blog (3 vs 6 cards, card surface vs none), timeline (line and dots vs neither), attorney socials, the light stat badges and the CTA icon were reconstructed as a competent designer *would* build them, rather than as the reference does.
- **A whole section omitted** — the pre-footer image band.
- **Self-audit scored the reconstruction rather than the evidence.** "Visual accuracy 92 %" measures internal confidence, not correspondence. Percentages with no stated methodology should not be carried forward, and this document deliberately reports counts instead.
- **Errors propagated into the instruction layer.** Because `MASTER PROMPT.md` was written from the reconstruction rather than the screenshots, its §3 baseline (1200 px), §13 accent (`#C8A153`), §18 (preserve hero stat overlap), §20 (refine the timeline line and markers), §8/§19 (card hover lift) and §11 (soften existing shadows) now all point away from the evidence. This is Phase 4's subject.

---

## 6. Evidence-quality note for the next phase

Under decisions **B3** (no video) and **B4** (template not to be consulted), the following stay permanently unresolvable and must be carried as locked decisions or labelled inference — never quietly resolved later:

- Font families · all absolute dimensions · all responsive behavior · every interaction state except one button hover · section padding at the four boundaries falling between captures · exact translucency alpha for the header and history panel · whether the light stat boxes carry a hairline border · all inner-page design (decision B5, zero evidence).

**Next:** `PROMPT_AUDIT.md` — audit `MASTER PROMPT.md`, `Rules.md` and `AUDIT AGENT INSTRUCTION.md` against the findings above, per `AUDIT AGENT INSTRUCTION.md`. Then the build-strategy decision (B1) reopens.
