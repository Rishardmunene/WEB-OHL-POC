# BASELINE GAP ANALYSIS — PORT CORRECTION CHECKLIST

**Phase 5 + 12 artifact, adapted to reality**

| | |
|---|---|
| Why this is adapted | The task's Phase 5/12 compares the reference against "the current implementation." **No current implementation existed.** The repository held only `LICENSE` and `STEERING/` |
| What is compared instead | The **forensic HTML/CSS reconstruction** (embedded in the `.docx`) against the screenshot evidence. Under decision B1 that artifact is being ported to React, so it becomes the incoming baseline |
| Function | This is the **mandatory correction checklist** for the port. Every `CONTRADICTED` row must be corrected before Stage 10 sign-off |
| Severity | `CRITICAL` · `HIGH` · `MEDIUM` · `LOW`. No aesthetic scoring, no numerical ratings — per the task's §12 |

> Decision B1 chose to port rather than build greenfield. The port's value is that it carries the confirmed section ordering and the full content scaffold. Its cost is that it also carries **19 contradicted claims**. This document is the instrument that prevents those from surviving into the finished site. Committing the verbatim port as its own commit first makes every correction below visible in the diff.

---

## Severity summary

| Severity | Count | Meaning |
|---|---|---|
| `CRITICAL` | 6 | Wrong at the design-system level; propagates everywhere if not fixed first |
| `HIGH` | 17 | Wrong component anatomy or structure; clearly visible |
| `MEDIUM` | 11 | Wrong values or missing detail; visible on comparison |
| `LOW` | 4 | Minor or unverifiable |

**Total: 38 tracked corrections.**

---

## 1. CRITICAL — design-system level

These propagate through every component. Fix before any component work.

| # | Dimension | Reference (evidence) | Baseline (forensic HTML) | Likely cause | Correction |
|---|---|---|---|---|---|
| **C-1** | Colors | `#1E2833` primary · `#161D28` deep · `#2F3A48` raised card · `#FFFFFF` light · `#FCFBFC` light card · `#CFAF71` gold | `#1b1e25` · (none) · `#252830` · `#F8F8F8`/`#f9f9f9` · `#fff` + `#eaeaea` border · `#C8A153` | Colors estimated by eye from video, then self-audited as "matched, high confidence" | Replace all six. Adopt the four-value dark scale. **Invert** the light relationship: section pure white, card near-white |
| **C-2** | Container | 0.737 × viewport (7 measurements) | `--container-width: 1200px` | Inferred from an assumed 1920px viewport; 1200px at 0.737 implies 1628px | Lock `1280px` (§J-1). Re-derive every grid gap from the container ratio |
| **C-3** | Shadows | **None detectable on any surface** | `0 10px 30px rgba(0,0,0,.3)` on stat cards; `0 20px 40px rgba(0,0,0,.4)` on form; `0 5px 20px` on light stat boxes | Invented to convey depth | Remove all. Default every surface to `none`. Replace with fill-tone difference + the hairline inventory |
| **C-4** | Hairline separation | 7 deliberate hairlines, including a **vertical** rule and a **gold** rule | Only 3 modelled | The reference's actual separation device was not recognised | Add all 7 (spec §C.5). This is how the reference does hierarchy |
| **C-5** | Gold accessibility | `#CFAF71` used on white for small text | `#C8A153` used on light backgrounds | Contrast never evaluated | Two tokens: `--gold` `#CFAF71` (dark surfaces), `--gold-on-light` `#877249` (light surfaces). Gold-on-white for text is forbidden (§J-5) |
| **C-6** | Radius | **0 on every rectangular element** | Mostly 0 — but `border-bottom-right-radius: 40px` on the intro image and `border-radius: 20px` on the history image | Two inline exceptions contradict the report's own correct finding | Remove both. `--radius-surface: 0`. Non-zero reserved for circles |

---

## 2. HIGH — structure and component anatomy

| # | Dimension | Reference (evidence) | Baseline (forensic HTML) | Severity | Correction |
|---|---|---|---|---|---|
| **H-1** | Structure | Pre-footer **full-bleed image band**, 0.172 × page width | Absent entirely | `HIGH` | Add section 12 |
| **H-2** | Hero / stats | Stat tiles in the **Intro** section, normal flow | `.hero-stats { position:absolute; bottom:-50px; right:20% }` | `HIGH` | Move into Intro, below the signature, in flow. Remove absolute positioning |
| **H-3** | Testimonials | **4** cards, staggered 4-col grid, reviewers floating **outside/overlapping** | **2** cards, `1fr 1fr`, 2 reviewers per card in a `border-top` footer | `HIGH` | Rebuild. Largest structural error |
| **H-4** | Blog count | Featured + **6** cards (3 × 2) | Featured + **3** cards | `HIGH` | Add second row |
| **H-5** | Blog surface | **No card surface** — section bg sampled inside every card | `.blog-card`, `.blog-featured` both `background: var(--bg-card)` | `HIGH` | Remove both backgrounds |
| **H-6** | History section | **Full-bleed blurred photo** + container-width translucent panel | Plain contained section, no backdrop, no panel | `HIGH` | Add backdrop and panel |
| **H-7** | Timeline | **No connector line, no markers**, flush left | `border-left: 2px` + gold `::before` dots + `padding-left: 20px` | `HIGH` | Remove line, dots and inset |
| **H-8** | Attorney socials | **4** icons in a **white bar overlapping the image bottom**, gold underline | 3 dark icons below the name, no bar | `HIGH` | Rebuild |
| **H-9** | Attorney portrait | Aspect **0.678 (w:h)** | `height: 350px` fixed | `HIGH` | Use aspect ratio, not fixed height |
| **H-10** | Light stat boxes | Number **inside a gold ring badge**, icon above it; **serif** label; extra muted line | Icon beside number; sans label; bordered white box with shadow | `HIGH` | Rebuild |
| **H-11** | Intro image | **Three-image collage** (2 above, 1 wide below) | Single image | `HIGH` | Rebuild as collage |
| **H-12** | Form panel | **Container width**, container-aligned | `max-width: 900px; margin: 0 auto` + heavy shadow | `HIGH` | Full container width; remove shadow |
| **H-13** | Practice button | Rest = **dark fill, white text, no border** | `.btn-outline-gold` = transparent + gold border + gold text | `HIGH` | Correct rest state. Hover (gold fill) is already right |
| **H-14** | Practice icons | **Thin-stroke line** icons; building (not helmet), truck (not car-burst) | FontAwesome **solid** glyphs | `HIGH` | Replace with Lucide line icons; re-select glyphs |
| **H-15** | Card hover | Hovered card shows **no lift, no gold bottom border** | `translateY(-5px)` + `border-bottom-color: gold` | `HIGH` | Remove the gold border outright. Lift only as logged refinement §J-3 |
| **H-16** | CTA consult card | White with **inset grey frame**; **solid gold square** icon tile | Plain white; circular gold-tinted icon | `HIGH` | Add frame; square gold tile with dark glyph (C-5) |
| **H-17** | Footer | `#1E2833`; ornamental rules flanking the logo; first column has **two sub-columns** | `#16181d`; plain centred logo; one 6-link column | `HIGH` | Correct all three |

---

## 3. MEDIUM — values and missing detail

| # | Dimension | Reference | Baseline | Severity | Correction |
|---|---|---|---|---|---|
| **M-1** | Header surface | **Fully transparent**, no blur, no gold top border | `rgba(27,30,37,0.95)` + `blur(10px)` + `border-top: 3px solid gold` | `MEDIUM` | Transparent at rest; remove gold border. Scroll state is refinement §J-2 |
| **M-2** | Header contact | Gold ring, **gold** label text | `rgba(255,255,255,0.1)` ring, muted label | `MEDIUM` | Gold ring and gold label |
| **M-3** | Grid gaps | 3-col 0.020 × container (~25px); attorneys 0.018 (~23px); testimonials 0.013 (~17px) | 30px / 40px / 40px | `MEDIUM` | Re-derive from container ratio. Attorney gap is ~75 % too wide |
| **M-4** | Practice card rule | Hairline rule above the footer row | Absent | `MEDIUM` | Add |
| **M-5** | Practice heading | **Vertical** hairline between heading and paragraph; **gold-highlighted phrases** in the paragraph | Neither | `MEDIUM` | Add both |
| **M-6** | Separator geometry | Paired parallel hairlines + vertical tick + slim **four-point star**; asymmetric in headings | 40px lines + 8px **rotated square**, symmetric | `MEDIUM` | Correct geometry; keep the concept |
| **M-7** | "Meet The Partners" | Separators **flanking both sides** | Separator below | `MEDIUM` | Correct |
| **M-8** | Skill bars | Gold **circular knob** at the fill terminus | 4px track, no knob | `MEDIUM` | Add knob |
| **M-9** | Form overlay | Light — photograph clearly legible | `rgba(27,30,37,0.85)` | `MEDIUM` | Lighten, subject to the §J-9 contrast floor |
| **M-10** | Signature face | **Calligraphic script** | Playfair Display | `MEDIUM` | Add a third face |
| **M-11** | Hero H1 | 58–61px | 65px | `MEDIUM` | Reduce |

---

## 4. LOW

| # | Dimension | Reference | Baseline | Severity | Correction |
|---|---|---|---|---|---|
| **L-1** | Active nav | "Home" appears white, like siblings | `.active { color: gold }` | `LOW` | Remove gold active state |
| **L-2** | Light stat box 3 | Text **left-aligned** | Centred flex | `LOW` | Left-align |
| **L-3** | "Read More" | Underlined; casing not legible | Uppercase, letterspaced, no underline | `LOW` | Add underline; keep casing as inference |
| **L-4** | Header contact icon 2 | Appears gold-filled where icon 1 is ring-only | Both identical | `LOW` | Leave identical (§J-15, `UNCERTAIN`) |

---

## 5. Dimensions where the baseline is already correct

Carry forward unchanged — these are the port's genuine value:

| Dimension | Status |
|---|---|
| **Section ordering** (all 12 original sections) | Correct end to end |
| Two-row header structure and contents | Correct |
| Hero as full-bleed image + left gradient scrim | The **CSS** is right even though the prose said "50/50 split" |
| Type scale ratios; 16px/1.6 body; 38–42px section H2 | Correct, independently corroborated |
| Serif headings + sans body; numerals in sans | Correct |
| Radius 0 as the general rule | Correct (two inline exceptions at C-6) |
| Underline-only form fields | Correct (labels and boundary contrast still need §J-8) |
| Practice button **hover** = gold fill, dark text | Correct — matches the one observed state |
| Ornamental separator as a system-level motif | Correct concept (geometry at M-6) |
| Dark/light section alternation | Correct pattern (tones at C-1) |
| Content scaffold and copy structure | Useful as placeholder (decision B2) |

---

## 6. Dimensions the task lists that cannot be gap-analysed

| Dimension | Why |
|---|---|
| **Responsiveness** | No sub-desktop evidence exists. The baseline has essentially no responsive CSS. Entirely `INFERRED` (§J-11) |
| **Interaction** | One observed state only. Everything else is refinement |
| **Animation** | Nothing observable. The baseline has only a global `transition: 0.3s ease`, to be replaced by the motion tokens |
| **Accessibility** | The baseline has no labels, no focus states, no landmarks, and a failing contrast pair. Not a "gap" against the reference — the reference fails too. Governed by the full-AA decision (§H of the spec) |
| **Performance** | The baseline is a single static HTML file; not comparable. Governed by §G of the spec |

---

**Next:** `IMPLEMENTATION_PLAN.md`. Every row above must be closed or explicitly deferred with a reason before Stage 10 sign-off.
