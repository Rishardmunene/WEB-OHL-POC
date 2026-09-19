# DISCOVERY SUMMARY

**Phase 1 artifact — evidence inventory and instruction map**

| | |
|---|---|
| Repository | `/Users/admin/Desktop/Ojijo HR Law Website/WEB-OHL-POC` |
| Produced | Phase 1 (Discovery). No application code inspected, modified, or created. |
| Status | Discovery complete. Awaiting approval before Phase 2. |
| Scope rule applied | Analysis only. Nothing in `STEERING/` was modified or deleted. |

> This document records **what we actually know**, separated from **what a previous agent believed**. It deliberately does not propose a design direction. Every quantitative claim below was measured from the screenshot pixels, and the measurement method is stated so it can be re-verified or refuted.

---

## 3.1 Project Objective

The project reconstructs an existing law-firm website from a reference video plus five reference screenshots, then implements it as a refined React application.

Three facts about the objective must be stated up front, because all of them affect scope:

1. **The reference site is a commercial template, and it identifies itself.** The footer of the reference reads `Copyright © Attorney Law | Designed by VictorFlow Templates - Powered by Webflow`, and the brand shown throughout is **"Attorneyster"**. The reference is the VictorFlow *Attorney Law* Webflow template.
2. **No evidence in `STEERING/` mentions Ojijo HR Law.** The repository is named for Ojijo HR Law (`WEB-OHL-POC`), but every screenshot, every text string, and the entire forensic document describe "Attorneyster" with placeholder Lorem Ipsum copy. Whether the deliverable is a faithful template reproduction (a POC), or a rebranded Ojijo HR Law site built on that layout, **is not established by any document in `STEERING/`**. This is the single largest open scope question.
3. **The objective as written in the steering files is not currently achievable as stated.** Both `MASTER PROMPT.md` and `Rules.md` instruct an agent to *refine an existing React implementation*. That implementation does not exist (see §3.8, Contradiction C1).

---

## 3.2 Evidence Inventory

Repository contents in full — this is the entire project, including hidden files:

```
LICENSE                      (only git-tracked file; MIT, © 2026 RISHARD. M. BAKUNDA)
STEERING/
├── VIDEO-TO-WEBSITE FORENSIC RECONSTRUCTION AGENT_RO....docx
├── MASTER PROMPT.md
├── Rules.md
├── AUDIT AGENT INSTRUCTION.md
└── Screenshots/
    ├── Screen Shot 2026-09-19 at 8.40.40 AM.png   749 × 1335
    ├── Screen Shot 2026-09-19 at 8.42.01 AM.png   742 × 1393
    ├── Screen Shot 2026-09-19 at 8.42.46 AM.png   744 × 1377
    ├── Screen Shot 2026-09-19 at 8.44.47 AM.png   749 × 1173
    └── Screen Shot 2026-09-19 at 8.46.26 AM.png   746 × 342
```

Git state: one commit (`03a1d21 Initial commit`) containing only `LICENSE`. All of `STEERING/` is untracked. No branches other than `main`, no stashes, no deleted application in history.

| Source | Type | Purpose | Authority | Key Contribution |
|---|---|---|---|---|
| `Screenshots/*.png` (5 files) | **Primary evidence** | Visual ground truth captured from the reference site | **Highest available.** Authoritative for anything visibly established | Actual colors, surfaces, section order, grid ratios, component anatomy, one hover state, exact copy including typos |
| `VIDEO-TO-WEBSITE FORENSIC RECONSTRUCTION AGENT_RO....docx` | **Secondary evidence + generated output** | Prior agent's video analysis, a complete single-file HTML/CSS reconstruction, and its own self-audit | **Hypothesis only.** Authoritative for nothing; useful for section order and motion/video claims | Only record of video-derived observations (duration 2:09, hover at 00:43–00:45, sticky header); a working structural baseline; an explicit uncertainty register |
| The reference video | **Would-be primary evidence** | Source recording | **Not present in the repository** | Referenced by every steering document but absent. All video claims are therefore single-sourced through the forensic docx and unverifiable |
| `MASTER PROMPT.md` (1079 lines) | **Instruction** (implementation prompt) | Directs the implementation agent through a refinement pass | Directive, but **premise-broken** and must be corrected before use | Detailed refinement targets: nav behavior, card/hover motion, shadow and radius policy, QA loop, deliverable format |
| `Rules.md` (777 lines) | **Instruction** (steering rules / guardrails) | Standing constraints on the implementation agent | Directive; **highest-quality instruction file** | Explicit reference hierarchy, motion/easing/timing tokens, performance and a11y rules, anti-overdesign rules, component tree sketch |
| `AUDIT AGENT INSTRUCTION.md` (389 lines) | **Instruction** (reviewer prompt) | Briefs an *independent auditor* to critique the other two prompts | Meta-level; not an implementation input | Defines the audit that Phase 4 of the current task performs; its §11 contradiction checklist is directly reusable |
| `LICENSE` | Supporting | MIT license | N/A | Establishes repository ownership only |

**Redundancy and supersession.** `MASTER PROMPT.md` and `Rules.md` overlap heavily (motion timings, shadow policy, radius policy, icon policy, QA loop, performance list appear in both, largely consistently). Neither is marked as superseding the other. Nothing in `STEERING/` is obsolete — but nothing is version-stamped either, so precedence between the two must be declared rather than inferred (§3.10).

**Absent artifacts.** There is no reviewer output, no auditor report, no implementation plan, no design-token file, no asset directory, and no prior gap analysis. The `AUDIT AGENT INSTRUCTION.md` prompt exists but **its output does not** — the audit was briefed and never delivered, or was delivered outside the repository.

---

## 3.3 Primary Reference Sources

**Strongest evidence: the five screenshots.** They are the only artifact produced by the reference site itself rather than by an interpreting agent. They are authoritative for colors, surface treatments, component anatomy, section order, proportional geometry, and text content.

Their three limitations must be respected:

- **Absolute pixel sizes are not recoverable.** They are downscaled full-page captures (~742–749 px wide). The capture viewport is unknown, so no screenshot establishes any value in CSS pixels. What *is* recoverable, and highly reliable, is **ratios** — which is how all geometry is expressed in this document.
- **Coverage has gaps.** The five captures are sequential slices of one long page, and they are not contiguous. Four boundaries fall between captures and are therefore unobserved: the bottom of the practice-areas grid and its transition into the light section; the bottom of the testimonials; the bottom of the contact form; and the exact top edge of the footer. Section padding at these four joints is not evidence-established.
- **They are desktop-only, single-state.** One hover state is visible (§3.5). No scrolled header state, no focus state, no pressed state, no tablet or mobile layout is captured anywhere.

**Second-strongest: the forensic document's video-derived claims** — but only those that describe the *video* (timings, sticky behavior, hover moment). These are single-sourced and unverifiable without the video.

**Not evidence at all:** the HTML/CSS reconstruction embedded in the forensic docx. It is a prior agent's *output*, and §3.8 shows it diverges from the screenshots on a large number of measurable points.

---

## 3.4 Existing Forensic Reconstruction

The `.docx` is a binary Word file (not readable as text directly); it was extracted read-only to a temporary location for analysis. **The original file was not modified.** It contains three parts: a reference-design specification, a complete single-file HTML/CSS implementation, and a self-audit.

**What it concluded** (presented here as claims, not facts, with the classification the evidence supports):

| Claim | Forensic's own label | Evidence-supported classification |
|---|---|---|
| Section order: Header → Hero → Intro → Practice Areas → Stats/Partners (light) → History/Skills → Testimonials → Attorneys (light) → CTA → Form → Blogs → Footer | stated as observed | **OBSERVED** — screenshots confirm this order exactly, with one omission (§3.5) |
| Sticky 2-row header; row 1 = logo + cart + CTA, row 2 = nav + contact | stated as observed | Two-row structure and contents: **OBSERVED**. Sticky behavior: **UNCERTAIN** (video-only claim, no scrolled screenshot) |
| Container ≈ 1200 px | explicitly INFERRED | **UNCERTAIN** — correctly flagged, but the stated basis is internally inconsistent (§3.8, C3) |
| Hero ≈ 90vh, split 50/50 content-to-image | stated as observed | Height: **UNCERTAIN**. The 50/50 split is **CONTRADICTED** — the hero is a single full-bleed photograph with a left gradient scrim, not a two-column split |
| Hero has overlapping statistics cards at bottom right | stated as observed | **CONTRADICTED** — the stat cards are in the *Intro* section (§3.8, C2) |
| Dark bg `#1A1D24`, card `#252830`, light `#F8F8F8`, footer `#16181d`, gold `#C8A153` | stated as observed, "match perfectly" | **CONTRADICTED** — every one of these five values is measurably wrong (§3.8, C4) |
| Serif headings + sans body; substituted Playfair Display + Inter | explicitly SUBSTITUTED / UNCERTAIN | **UNCERTAIN** — honestly flagged. Screenshots confirm the serif/sans *pairing* but cannot identify either family |
| Signature ornamental separator: line — diamond — line | stated as observed | **PARTIALLY CONFIRMED** — the motif exists and is pervasive, but its geometry differs (§3.5) |
| Zero border-radius throughout; "possibly exactly 0px" | stated as observed | **CONFIRMED** — and this is the most important confirmed finding in the entire reconstruction |
| Images are placeholders (Unsplash substitutions) | explicitly PLACEHOLDER | **CONFIRMED as substitution.** No reference asset exists in the repository |
| Mobile/tablet behavior not visible | explicitly NOT VISIBLE | **Correct.** Remains unknown |
| Final self-assessment: 98% structural, 92% visual, 95% interaction, 95% overall | self-reported | **Not supported.** Structural order is genuinely strong; the visual figure is not defensible given the contradiction count in §3.8. These percentages have no stated methodology and should not be carried forward |

**Fair assessment of the forensic work.** Its section ordering is excellent and should be preserved. Its uncertainty register is genuinely good practice — it correctly flagged fonts, mobile behavior, and routing as unknown. Its principal failure is not the inferences it labelled, but the **unlabelled** ones: it presented measured-sounding color hex values, component anatomy, and layout claims as observations when they are reconstructions, and its self-audit then scored those reconstructions as "matched / high confidence."

---

## 3.5 Screenshot Evidence

### Method

Colors were read as dominant-pixel frequency over flat regions (a 100 %-frequency result means a pure, unantialiased fill). Geometry was measured by scanning pixel rows for background-color runs to find element edges. Ratios are given relative to page width or container width, because absolute pixel values are not recoverable.

### Section order (OBSERVED)

Header (overlaying hero) → Hero → Intro → Practice Areas → Light stats + Partners → History/Skills → Testimonials → Attorneys (light) → CTA → Contact form → Blog → **full-bleed photographic band** → Footer.

This matches the forensic order, **plus one section the forensic document does not mention at all**: a full-bleed photographic band (warm classical architecture) between the blog section and the footer, height ≈ 0.172 × page width, reaching both page edges. `OBSERVED`.

### Geometry (OBSERVED as ratios; absolute px UNCERTAIN)

| Measurement | Value | How measured |
|---|---|---|
| **Content container** | **0.737 × page width**, centered | Independently measured in 7 places across 4 screenshots: 0.7316, 0.7399, 0.7392, 0.7379, 0.7370, 0.7399, 0.7306 |
| Side gutters | ≈ 0.132 × page width each | Derived from above |
| 3-column grid (practice, light stats, attorneys, blog) | column ≈ 0.320 × container; gap ≈ 0.020 × container | Practice cards: 175/176/175 px wide, 11 px gaps, container 548 px |
| 4-column grid (testimonials) | column ≈ 0.241 × container; gap ≈ 0.013 × container | Four cards, each 132 px, 7 px gaps |
| Hero height | ≈ 0.566 × page width | Photographic region ends at y = 424 of 749 |
| Header row 1 height | ≈ 0.077 × page width | Inter-row divider rule detected at y ≈ 58 |
| Header total height | ≈ 0.158 × page width | Content ends ≈ y = 118 |
| Attorney portrait aspect | **0.678 (w:h)** — tall portrait | 177 × 261 px |
| Bottom photographic band | ≈ 0.172 × page width tall, full-bleed | Rows 1025–1153, non-background at both x = 0 and x = max |
| Contact form panel | **exactly container width**, container-aligned | Panel spans x 96–643; container spans 95–643 |

**Scale note.** Body text renders ~6–7 px tall in these captures, implying a downscale factor near 2.3 and an original capture width near 1728 px (a common macOS laptop logical width). On that basis the container would be ≈ 1274 px. This is `INFERRED`, not observed, and must not be hard-coded as fact. The robust statement is the ratio 0.737. Note that the forensic's 1200 px container would require a 1628 px viewport.

### Color (OBSERVED — high confidence, flat unantialiased fills)

| Surface | Measured | Confidence |
|---|---|---|
| Primary dark section background (intro, testimonials, CTA, blog, **footer**) | **`#1E2833`** | 100 % pure fill in all five locations |
| Deeper dark background (practice-areas section only) | **`#161D28`** | 100 % pure fill |
| Practice card fill | **`#1E2833`** | The card is the *primary* dark tone sitting on the *deeper* tone — which is why card/section contrast is nearly imperceptible |
| Testimonial card fill | **`#2F3A48`** | 45 % dominant |
| History/skills floating panel | ≈ `#2F3642`–`#303843` | Translucent over photography, so it varies |
| Light section background | **`#FFFFFF`** (pure white) | 100 % pure fill, two separate sections |
| Light stat-box fill | ≈ `#FCFBFC` | Only barely distinguishable from pure white |
| **Gold accent** | **`#CFAF71`** | 34–57 % dominant across multiple independent gold elements |

The site therefore uses **two** distinct dark tones plus **two** distinct dark card tones — a four-value dark scale, not the two-value scale the forensic describes.

### Typography (PARTIALLY OBSERVED)

`OBSERVED`: a high-contrast serif for all headings and proper names; a geometric sans for body, labels, nav, buttons, numerals and percentages; a **calligraphic script** for the intro author signature ("Peeter Park") — a third family the forensic document does not account for. Attorney role labels are gold; timeline year labels are gold.

`UNCERTAIN`: every font family, every absolute size, all weights, line heights and tracking. At this raster scale, letterform identification is not reliable. Playfair Display and Inter remain unvalidated substitutions.

### Surface treatment (OBSERVED)

- **Border radius: 0 everywhere.** Cards, buttons, images, panels, stat tiles, the form panel, the history panel — all sharp. The only round geometry is intentionally circular: avatars, the header's gold contact icon rings, and the gold ring badges in the light stat boxes. This is consistent across all five screenshots and is the strongest confirmed finding.
- **Shadows: none detectable.** No card, panel, button or floating surface shows a discernible drop shadow. Separation is achieved entirely by fill-tone difference.
- **Borders:** used sparingly as thin low-opacity hairlines — the header inter-row divider, a vertical rule between the practice-areas heading and its paragraph, a horizontal rule inside each practice card above its footer row, rules under each footer column heading, and a rule below the light stats row.
- **Translucency:** used in exactly two places — the header (fully transparent over the hero) and the history/skills panel (a dark scrim over a blurred photograph).

### Component anatomy (OBSERVED)

- **Header:** fully transparent over the hero, no gold top border. Row 1: gold fluted-column logo mark + "Attorneyster" serif; right side "Cart (0)" with an outline bag icon and a "Book a Consultation" button on a light translucent fill. Hairline divider. Row 2: Home / About Us / Pages ˅ / Contact Us; right side two contact blocks, each a **circular gold ring** containing a gold icon, with a **gold** label ("Call Us On:") above a white value.
- **Hero:** one full-bleed photograph (man in blue suit, library, US flag) with a dark gradient scrim from the left. Small ornamental separator *above* the H1. Two-line serif H1, muted paragraph, gold "Get In Touch" button. **No stat cards.**
- **Intro:** left = a **three-image collage** (two side by side above, one wide below). Right = serif heading, separator, paragraph, script-signature author block, then **two stat tiles** — one dark (gold outline document icon + "95% / Case Success"), one gold-filled in which "35+" sits inside a **dark square badge** beside "Years Experiance".
- **Practice areas:** heading block with a **vertical rule** separating it from a paragraph that contains **gold-highlighted phrases**. Six cards, 3 × 2. Each card: serif title, muted paragraph, hairline rule, then a footer row with a **thin-stroke line icon in gold** on the left and a "Learn More" button on the right. Button rest state is a **dark fill with white text**.
- **Light stats:** three boxes. Boxes 1–2 are near-white with a **gold ring badge containing a small gold icon above the number**, beside a **serif** label and a small muted line. Box 3 is dark with a photographic background and left-aligned white text.
- **History/skills:** a full-bleed blurred photographic section with a container-width translucent dark panel on top, holding three columns — timeline (gold year headings, **no connector line and no dots**), a tall narrow Lady Justice image, and skill bars. Each skill bar is a hairline track with a gold fill terminating in a **gold circular knob**.
- **Testimonials:** **four** quote cards in a vertically staggered 4-column arrangement; reviewer identity blocks (circular avatar + serif name + muted role) float **outside and overlapping** the cards, above the raised cards and below the lowered ones. Gold double-quote glyph top-left of each card.
- **Attorneys:** three tall portraits. A **white bar inset from the photo's edges overlaps the bottom of each image**, containing **four** social icons and finished with a thin **gold** underline. Name in dark serif below, role in gold.
- **CTA:** left heading/paragraph/gold button. Right = a white card with an **inset grey frame** (double-frame effect) containing a serif heading, paragraph, and a **solid gold square tile** with a white phone icon beside the number.
- **Contact form:** full-bleed library photograph, only lightly darkened — the image remains clearly legible. A near-solid dark **container-width** panel sits over it, offset downward. Underline-only inputs, 2 × 2 then full-width message, centred **white** submit button.
- **Blog:** featured post (image + content) and six cards in 3 × 2, **all with no card surface whatsoever** — the section background `#1E2833` was sampled directly inside every card text area. Read More links are underlined.
- **Footer:** background identical to the sections. Logo centred and flanked by long **double-hairline gold rules** terminating in a four-point star motif. Four columns with hairline-ruled serif headings; the first column holds **two sub-columns** of links. Bottom bar with gold-highlighted copyright and four social icons.

### Ornamental separator (OBSERVED — refines the forensic claim)

The motif is real and pervasive, but it is not `line — diamond — line`. It is a **pair of parallel horizontal gold hairlines crossed by a short vertical tick with a slim four-point star**, asymmetric in section headings (short left, long right) and symmetric when centred. The footer version is a large-scale variant spanning the container.

### Text content (OBSERVED — reproduce verbatim)

The reference contains typos that are part of the ground truth and must not be silently "fixed": **"Our Practice Arease"**, **"Years Experiance"**, **"Get An Appoinment"**, **"Conaetct Us"**, **"Best Law & Firm Awwards"**, **"randomised workds"**, and corrupted lorem ("have su alteration", "by injected oir"). Several names in the forensic reconstruction are also wrong: reference shows **Peeter Park** (not Peeter Ocal), **Nikolona Gail** (not Nikoloma), **Nattasha** (not Natasha), and **"2015 – 18000K Client's"** (not 10000K).

### Motion evidence (deliberately minimal)

`OBSERVED` — exactly one interaction state exists in the screenshots: on the "Car Accident" practice card, the "Learn More" button is **gold-filled with dark text** while its five siblings are dark-filled with white text. This is a genuine hover state for that button.

Critically, **that hovered card shows no lift, no shadow change, and no gold bottom-border**. The forensic reconstruction implemented `translateY(-5px)` plus a gold bottom border on card hover; the screenshot of the hovered card does not support either.

`UNCERTAIN` (video-only, single-sourced): sticky header behavior, and the hover moment at 00:43–00:45.

`NOT VISIBLE`: every scroll reveal, the scrolled header state, button press/focus states, card hover lift, skill-bar animation, hero entrance motion, and all stagger behavior.

---

## 3.6 Existing Prompt / Steering System

`Rules.md` (777 lines) is the standing guardrail document and the strongest instruction file. It establishes a reference hierarchy (video > screenshots > forensic spec > existing implementation > user instruction > tokens > general principles), declares that the screenshot wins over the old implementation, mandates centralized design tokens, specifies motion timings (120–180 / 180–280 / 280–450 ms) and easing (`cubic-bezier(0.22, 1, 0.36, 1)`), restricts animation to transform/opacity/filter, requires `prefers-reduced-motion`, requires accessibility basics, sketches a component tree, positions shadcn as an implementation primitive rather than a visual identity, and repeatedly warns against overdesign. Its closing principle is *"The same design, but professionally refined."*

`MASTER PROMPT.md` (1079 lines) is the implementation prompt. It opens by stating the previous agent completed the structural reconstruction and that the current job is a refinement pass over an existing React implementation. It orders the agent to inspect the repo, run the app, screenshot it, and produce a gap analysis before changing anything. It then specifies refinement targets section by section — dynamic translucent blurred navigation that gains opacity/blur/shadow/compression on scroll via continuous interpolation; card hover lift of 2–4 px; iOS-style press scale 0.97–0.99; a coherent radius hierarchy; softened shadows; gold used "like jewelry, not paint"; an IntersectionObserver scroll-reveal system; hero entrance motion; skill-bar animation on enter; a mandatory three-pass visual QA loop; and a fixed final-deliverable format.

`AUDIT AGENT INSTRUCTION.md` (389 lines) briefs an independent auditor to critique the other two prompts for ambiguity, contradiction, overconstraint, underconstraint, performance risk, and generic-design drift, and to deliver recommended prompt patches rather than a rewrite. Its §11 contradiction checklist anticipates most of the conflicts catalogued in §3.8 below.

**Assessment.** These are unusually disciplined prompts. `Rules.md` in particular already encodes the correct evidence hierarchy. The problem is not rigour — it is that both documents were written on a **factual premise that does not hold**, and that their refinement targets were derived from the forensic reconstruction rather than from the screenshots, so several targets now point away from the evidence.

---

## 3.7 Agent Feedback

**There is no reviewer or auditor feedback in the repository.** `AUDIT AGENT INSTRUCTION.md` is a *prompt for* an audit, not the audit itself. No auditor report, no reviewer notes, and no prior gap analysis exist anywhere in `STEERING/`.

The only self-assessment available is the forensic document's own Phase 3 audit, which is not independent feedback. It rates itself 95 % overall with "Matched / High" confidence on structure, layout, colors and components — an assessment the measurements in §3.5 do not support, particularly on colors and components.

**Consequence:** the Phase 4 prompt audit required by this task has no prior audit to build on and must be performed from scratch. `AUDIT AGENT INSTRUCTION.md` is the correct specification for it.

---

## 3.8 Known Contradictions

### C1 — CRITICAL: the implementation that both prompts assume does not exist

`MASTER PROMPT.md` opens *"You are now taking over an existing React/web implementation"* and *"The previous agent has already completed the structural reconstruction."* `Rules.md` §1 and §4 likewise assume an existing implementation to refine incrementally.

**The repository contains no application code.** No `package.json`, no source directory, no React, no Tailwind, no shadcn, no assets, no fonts, no configuration. The full file inventory is in §3.2: one `LICENSE` and the `STEERING/` directory. Git history contains one commit holding only `LICENSE`.

The only implementation that exists anywhere is the **single-file vanilla HTML/CSS document embedded inside the forensic `.docx`** — not React, not in the repository, and not a file that can be "run."

This invalidates a large block of instructions as literally written: run the existing app, screenshot the current implementation, inspect the installed icon library and animation library, preserve the existing structure, replace FontAwesome usage, prefer incremental refinement over rewriting, and avoid architecture rewrites. It also means the task's Phase 5 ("inspect the current implementation, run it, capture screenshots") and Phase 12 (gap analysis vs. current implementation) have no subject.

**Resolution required from the user:** this is a greenfield build, not a refinement pass. The question is whether to (a) build a new React application from the consolidated spec, or (b) first port the forensic HTML/CSS into React as an explicit baseline and refine from there. This choice should be made before Phase 6.

### C2 — HIGH: hero statistics are in the wrong section

Forensic: *"Hero Section: ~90vh height, split 50/50 content to image. Overlapping statistics cards at the bottom right"*, implemented with `position: absolute; bottom: -50px; right: 20%`. `MASTER PROMPT.md` §18 then builds on this, instructing the agent to *"preserve their overlapping relationship"* and make them *"feel like they belong to the hero."*

Screenshot: the hero is a single full-bleed photograph ending cleanly at y = 424; **no cards overlap it**. The two stat tiles appear in the *Intro* section, in normal document flow, below the author signature in the right-hand column. Their anatomy also differs — the gold tile's number sits inside a dark square badge rather than beside an icon.

This is an inference that was recorded as an observation and then amplified into an implementation requirement.

### C3 — HIGH: the container width claim is internally inconsistent

Forensic: container ≈ 1200 px, *"INFERRED based on standard desktop aspect ratio"*, with the viewport *"inferred ~1920px."* Those two numbers imply a container:viewport ratio of 0.625.

Measured ratio, in seven independent places: **0.737**. A 1200 px container at ratio 0.737 implies a 1628 px viewport, not 1920 px. The inference was correctly labelled, but its stated justification does not hold, and the number was subsequently promoted to a structural baseline in `MASTER PROMPT.md` §3 (*"approximately 1200px content width"*).

The ratio is reliable; the absolute pixel value is not recoverable from these screenshots.

### C4 — HIGH: every stated color value is measurably wrong

| Role | Forensic | Measured | Nature of error |
|---|---|---|---|
| Dark background | `#1A1D24` / `#1b1e25` | **`#1E2833`** | Reference is markedly bluer and less neutral |
| Practice-areas section | (not identified) | **`#161D28`** | A second dark tone the forensic does not model |
| Card on dark | `#252830` | **`#1E2833`** (practice) / **`#2F3A48`** (testimonial) | Two distinct card tones, neither equal to the stated one |
| Light section | `#F8F8F8` | **`#FFFFFF`** | Light sections are pure white; the near-white is the *stat box*, i.e. the relationship is inverted |
| Footer | `#16181d` | **`#1E2833`** | Footer is not darker than the sections — it is identical |
| Gold accent | `#C8A153` | **`#CFAF71`** | Reference gold is lighter and less saturated |

The forensic self-audit rates colors *"Matched / High confidence / match the observed dark aesthetic perfectly."* `MASTER PROMPT.md` §13 then hard-codes `#C8A153` as the project accent. Both must be corrected.

### C5 — MEDIUM/HIGH: multiple component anatomies were reconstructed rather than observed

| Component | Forensic implementation | Screenshot |
|---|---|---|
| Testimonials | 2 cards, 2-col grid, two reviewers per card in a `border-top` footer row | **4 cards**, staggered 4-col grid, reviewers floating **outside and overlapping** the cards |
| Blog | 3 cards + featured, all with `background-color: var(--bg-card)` | **6 cards** + featured, **no card surface at all** (background sampled directly inside card text) |
| Timeline | `border-left: 2px` with gold `::before` dots | **No connector line, no dots** |
| Skill bars | 4 px track, gold fill | Hairline track, gold fill, **gold circular knob** at the fill terminus |
| Attorney socials | 3 dark icons (fb/twitter/linkedin) below the name | **4 icons in a white bar overlapping the image bottom**, finished with a gold underline |
| Attorney role | `color: #666` | **Gold** |
| Attorney portrait | `height: 350px` | aspect 0.678 → roughly 1.5 × the width; the forensic crop is far too short |
| Practice "Learn More" | transparent with gold border and gold text | **Dark fill, white text**; gold fill is the *hover* state |
| Practice icons | FontAwesome **solid** (`fa-helmet-safety`, `fa-car-burst`) | **Thin-stroke line icons** in gold; different glyphs (building, truck) |
| Light stat boxes | icon beside number; white fill, `#eaeaea` border, small shadow | **Number inside a gold ring badge with the icon above it**; serif label; extra muted line; no visible border or shadow |
| CTA consult box | plain white, circular gold-tinted icon | White with an **inset grey frame**; **solid gold square** icon tile |
| Form panel | `max-width: 900px; margin: 0 auto`, `box-shadow: 0 20px 40px` | **Full container width**, container-aligned, no detectable shadow |
| Form section overlay | `rgba(27,30,37,0.85)` | Much lighter — the photograph remains clearly legible |
| Intro image | one image, `border-bottom-right-radius: 40px` | **Three-image collage**, all corners sharp |
| History centre image | `border-radius: 20px` | Sharp corners |
| Footer | `#16181d`, single 6-link first column | `#1E2833`, first column holds **two sub-columns** |
| Header | `border-top: 3px solid gold`, `rgba(27,30,37,0.95)` + `blur(10px)` | **Fully transparent** over the hero, **no gold top border** |
| Bottom photographic band | absent | **Present** — full-bleed, ≈ 0.172 × page width tall |
| Author name font | Playfair Display, "Peeter Ocal" | **Calligraphic script**, "Peeter Park" |

### C6 — MEDIUM/HIGH: rounded geometry versus observed sharp geometry

Every screenshot shows `border-radius: 0` on every rectangular element, and the forensic report independently confirms it (*"Appears exceptionally sharp, possibly exactly 0px"*).

Against this: `Rules.md` §8 states *"Do not automatically preserve 0px corners"* and prescribes a six-step radius token scale; `MASTER PROMPT.md` §12 instructs *"Introduce a coherent radius system"* with small/medium/large/larger tiers; §4 lists *"rounded geometry"* as a target quality. Both documents do include an override (*"Preserve sharper geometry if the reference screenshot demonstrates it. The screenshot wins."*) — but the override is a single sentence set against many paragraphs of rounding guidance, which is exactly the asymmetry that produces drift.

The evidence permits no rounding of rectangular surfaces without an explicit, documented deviation decision.

### C7 — MEDIUM: invented elevation versus observed flatness

No shadow is detectable on any surface in any screenshot. The forensic reconstruction nevertheless applies `0 10px 30px rgba(0,0,0,0.3)` to stat cards and `0 20px 40px rgba(0,0,0,0.4)` to the form panel. `MASTER PROMPT.md` §11 then frames the task as *reducing* shadows that are *"heavier than necessary"* and §8 asks for *"soft elevation"* on card hover — treating an invented shadow as an inherited condition to be softened, rather than as something the reference does not have.

### C8 — MEDIUM: prescribed navigation behavior is unobserved

`Rules.md` §11 and `MASTER PROMPT.md` §6–7 specify the navigation in detail: translucent, backdrop-blurred, gaining opacity and blur and shadow and border and height compression on scroll, continuously interpolated.

Evidence: the header is **fully transparent with no blur and no border** in its only captured state. No scrolled state exists in any screenshot. The forensic document's `blur(10px)` and `rgba(...,0.95)` are its own invention; its only scroll-related claim is "sticky," from the video.

The prescribed behavior may well be a legitimate and desirable *refinement* — but it must be labelled as one, not as reconstruction.

### C9 — MEDIUM: motion is specified in detail but almost entirely unobserved

Scroll reveals, stagger, hero entrance, skill-bar animation, press scales and card lifts are specified across `Rules.md` §12–17 and `MASTER PROMPT.md` §9, §16–21. Exactly **one** interaction state is visible in the evidence (a button hover fill), and the one hovered card visible in the screenshots shows **no lift and no shadow change** — directly contradicting the 2–4 px hover lift both prompts request and the `translateY(-5px)` the forensic implemented.

Both prompts do warn against inventing motion, and the task brief states the timing ranges are implementation values rather than evidence. The contradiction is one of volume: the detailed motion specification will dominate the sparse evidence unless motion is explicitly partitioned into *observed* and *refinement* (as this task's §10D requires).

### C10 — MEDIUM: brand and content scope is unresolved

The project is "Ojijo HR Law." Every piece of evidence describes "Attorneyster," a VictorFlow Webflow template, with Lorem Ipsum copy, placeholder phone numbers, a Melbourne address, and a "Cart (0)" element. No steering document mentions Ojijo HR Law, real content, or a rebranding step.

Compounding this, §3.5 establishes that the reference copy contains typos ("Arease", "Experiance", "Appoinment", "Conaetct"). Faithful reconstruction means reproducing them; a real client site obviously would not. The two goals are incompatible and the intended one is undeclared.

### C11 — LOW/MEDIUM: shadcn versus the observed visual language

Both prompts permit shadcn while forbidding stock shadcn appearance. Worth noting concretely: the reference's defining traits are zero radius, zero shadow, hairline borders, and underline-only form inputs. shadcn's defaults are the opposite on all four. Using shadcn here means overriding essentially every default token — which is permitted, but the effort/benefit tradeoff should be a conscious decision rather than a default.

### C12 — LOW: assets are entirely unsourced

The forensic reconstruction uses Unsplash URLs as acknowledged placeholders. The repository contains no asset directory. The reference photography (the specific suited man, the three-image intro collage, the Lady Justice statue, the six attorney portraits, the library interiors, the classical-architecture band) is not available, so **no implementation can currently be asset-faithful**. `MASTER PROMPT.md` §23 asks for improved "image cropping" against references that do not exist locally.

---

## 3.9 Known Unknowns

**Cannot be verified with what is in the repository:**

1. **The reference video.** Absent. Every motion, scroll and sticky-header claim rests on the forensic document's single-sourced description of it.
2. **All absolute pixel dimensions.** The capture viewport is unknown and the screenshots are downscaled, so container width, font sizes, paddings, gaps and heights exist only as ratios. The ~1728 px viewport / ~1274 px container figure in §3.5 is inference.
3. **Font families.** Serif, sans and script are distinguishable; none is identifiable at this raster scale. Playfair Display and Inter remain unvalidated.
4. **All responsive behavior.** No capture below desktop width exists. Breakpoints, mobile navigation, grid collapse order, mobile typography — entirely unknown.
5. **Interaction states other than one button hover.** No scrolled header, no focus ring, no pressed state, no card hover lift, no form validation or error state.
6. **Section padding at four boundaries.** The captures are not contiguous: the practice-grid bottom and its transition to the light section, the testimonials bottom, the form-section bottom, and the exact footer top edge all fall between screenshots.
7. **Content below the practice grid**, if any (e.g. a "View all" action), is outside the captured region.
8. **Routing and page inventory.** Footer links imply additional pages (Lawyer Single, Case Results, Practice Areas, Packages, Package Single, Style Guide, 404, Password Protected, Licenses, Changelog). No screenshot shows any page other than the home page. Whether those pages are in scope is undeclared.
9. **Real function of the "Cart (0)" element.** Present in the header; purpose and intended retention unknown.
10. **Reference assets.** None available (C12).
11. **Exact translucency values** for the header and the history panel. Both sit over photography, so alpha cannot be separated from the backdrop.
12. **Whether the light stat boxes have a border.** Their fill (≈`#FCFBFC`) is so close to the `#FFFFFF` section background that a hairline border cannot be confirmed or excluded at this resolution.

**Resolvable with user input rather than analysis:** the C1 build-strategy decision, the C10 brand/content scope decision, the fate of the reference typos, whether the video can be supplied, whether higher-resolution or additional-state screenshots can be captured, and whether the source template may be consulted directly.

---

## 3.10 Recommended Evidence Hierarchy

This adapts `Rules.md` §3 to what actually exists, and adds the tie-breaking and labelling rules it lacks.

| Rank | Source | Status | Authority |
|---|---|---|---|
| 1 | Reference video | **Absent** | Would rank first if supplied. Until then, rank 1 is empty and no claim may cite it |
| 2 | **Reference screenshots** | Present | **Effective top authority.** Binding for anything visibly established: colors, surfaces, radius, component anatomy, section order, proportional geometry, text content |
| 3 | **Measured ratios derived from the screenshots** | Derived | Binding for geometry. Use ratios, not absolute px, as the fidelity criterion |
| 4 | Repeated visual patterns across screenshots | Derived | A pattern confirmed in 3+ places (container ratio, zero radius, hairline borders, absence of shadow) outranks any single-location reading |
| 5 | Forensic reconstruction — **section ordering only** | Present | Reliable and should be preserved |
| 6 | Forensic reconstruction — **video-derived motion claims** | Present | Single-sourced. Usable only when explicitly labelled `UNCERTAIN (video, unverified)` |
| 7 | Forensic reconstruction — **everything else** | Present | **Not authoritative.** Treat every value as a hypothesis requiring screenshot confirmation. §3.8 C4/C5 show a high error rate |
| 8 | Explicit, written refinement decisions | To be created | Binding once recorded in `CONSOLIDATED_UI_SPEC.md` §D as a deliberate deviation with rationale |
| 9 | `Rules.md` / `MASTER PROMPT.md` technical requirements (performance, a11y, tokens, motion timings, easing) | Present | Binding where they do not conflict with ranks 2–4. These are quality requirements, not evidence |
| 10 | Minimal implementation inference | — | Last resort. Must be documented at the point of use and chosen to be the least visually disruptive option |
| — | Generic UI convention, shadcn/Tailwind defaults, aesthetic preference | — | **Never authoritative.** Explicitly excluded by `Rules.md` §1 |

**Tie-breaking rules**

1. **Absence of evidence is not evidence of absence — but it is not a licence either.** Where the screenshots show no shadow, no radius and no motion, the implementation starts flat, sharp and static. Adding any of them is a rank-8 refinement decision requiring a written record.
2. **Ratio over absolute.** When a measured ratio conflicts with a stated pixel value, the ratio wins and the pixel value is recorded as inference.
3. **Repetition over single reading.** A property confirmed in several independent locations outranks one measurement, especially over photographic backdrops.
4. **Instruction documents do not outrank evidence.** Where `MASTER PROMPT.md` or `Rules.md` prescribe a visual property the screenshots contradict (radius, shadow, gold hex, hero stats placement, nav treatment), the screenshot wins and the instruction is logged in `PROMPT_AUDIT.md` as requiring a patch.
5. **Between the two instruction files, `Rules.md` prevails.** It is the standing-constraint document and is more evidence-disciplined; `MASTER PROMPT.md` carries more premise damage from C1 and more inherited error from the forensic report.
6. **Every conclusion carries its label.** `OBSERVED` / `SUPPORTED` / `INFERRED` / `UNCERTAIN` / `CONTRADICTED`, and a label may never be silently upgraded — the specific failure mode that produced C2, C4 and C5.

---

## 3.11 Recommended Next Steps

**Blocking decisions needed from you before Phase 6.** These are scope questions, not analysis gaps, and proceeding without them risks building the wrong thing:

- **B1 (C1)** — Greenfield React build from the consolidated spec, or port the forensic HTML/CSS into React first as an explicit baseline and refine from there?
- **B2 (C10)** — Faithful "Attorneyster" template reproduction as a POC, or an Ojijo HR Law site using this layout? And if faithful: reproduce the reference typos verbatim, or correct them?
- **B3** — Can the reference video be supplied? It is rank 1 in the hierarchy and is the only thing that can settle the motion and sticky-header questions.
- **B4** — May the source template be consulted directly? The footer identifies it as VictorFlow "Attorney Law" on Webflow. A live reference would outrank every artifact currently available and would resolve fonts, absolute dimensions, responsive behavior, and all interaction states at once. This also raises a licensing question worth settling early.
- **B5** — Scope: home page only, or the additional pages implied by the footer links?

### Decisions recorded at the Phase 1 checkpoint

The discovery findings were accepted and B1–B5 were answered as follows. These are now binding scope decisions.

| Ref | Decision | Consequence for the reconstruction |
|---|---|---|
| **B1** | **Deferred.** Finish Phases 2–4 (comparison + prompt audit), then choose between greenfield and porting the forensic HTML | `IMPLEMENTATION_PLAN.md` is not written yet. Phases 2–4 proceed first |
| **B2** | **Rebrand.** An Ojijo HR Law site built on this layout; real brand, copy and assets to be supplied by the user | **Content ceases to be an evidence-fidelity target.** The reference typos ("Arease", "Experiance", "Appoinment", "Conaetct"), the Lorem Ipsum, "Attorneyster", the Melbourne address, the placeholder phone numbers and the "Cart (0)" element are all **placeholders**, not reconstruction targets. Fidelity now means **layout, geometry, surface, typographic system and interaction** fidelity only. Text length must still be treated as a layout constraint, because heading wrap and paragraph depth drive the observed proportions |
| **B3** | **No video.** Not available | Rank 1 of the evidence hierarchy is **permanently empty**. Every motion and sticky-header claim stays single-sourced through the forensic `.docx` and can never be promoted above `UNCERTAIN` |
| **B4** | **Template not to be consulted** | Fonts, absolute dimensions, responsive behavior and all unobserved interaction states remain permanently unresolvable from evidence. A container width and a type scale must therefore be **locked as documented decisions**, not discovered |
| **B5** | **Full multi-page site.** Page inventory derived from the footer links | **Major inference zone.** No screenshot shows any page except home. Every inner page is ~100 % inferred from home-page design language and must be labelled as such. This is the largest single block of unevidenced work in the project |
| **Deviation policy** | **Documented refinement.** Apply the prompts' refinement direction, but log every departure from the evidence as an explicit approved decision | Requires a **Deviation Register** in `CONSOLIDATED_UI_SPEC.md`: for each deviation — evidence position, chosen position, rationale, and classification (restoration / correction / refinement / inferred / new requirement). Radius, shadow, motion and navigation behavior (C6–C9) are the first four entries |

Two consequences deserve emphasis because they are easy to lose later:

- **B2 does not license visual redesign.** Replacing placeholder *content* is now in scope; changing the *design* is not. The evidence hierarchy in §3.10 continues to govern every visual decision.
- **B5 + B4 together mean the inner pages have no ground truth at all.** They must be built from the home page's confirmed design system and explicitly marked `INFERRED`, and they must not be used as precedent to justify changing anything on the home page.

**Phase sequence, assuming the discovery findings are accepted:**

1. **Phase 2 — Forensic review.** Complete the claim-by-claim classification of the `.docx` (started in §3.4) across all categories the task enumerates. Original file untouched.
2. **Phase 3 + 6 — `FORENSIC_SCREENSHOT_COMPARISON.md`.** Build the full discrepancy matrix, using the measurement method in §3.5 so every row is reproducible. §3.8 C4/C5 are the seed rows.
3. **Phase 4 + 9 — `PROMPT_AUDIT.md`.** Audit the three instruction files against the evidence, following `AUDIT AGENT INSTRUCTION.md`. Deliver targeted patches, not rewrites. C1 is the headline finding; C6/C7/C8/C9 are the drift risks.
4. **Phase 10 — `CONSOLIDATED_UI_SPEC.md`.** The implementation reference. Express geometry as ratios with a stated container assumption. Partition motion strictly into *observed* and *refinement*, and responsive behavior into *observed* and *inferred*.
5. **Phase 5/12 — adapt to reality.** With no current implementation, "gap analysis vs. current" is void as written. Substitute a gap analysis of the **forensic HTML/CSS reconstruction** versus the evidence — it is the only implementation artifact that exists, and it is the likely starting point under B1(b).
6. **Phase 6 — `IMPLEMENTATION_PLAN.md`.** Only after B1–B5 are answered.
7. **Then implement,** in the task's stated stage order, with the visual QA loop from §17–18.

**Recommended low-cost evidence improvements, in value order:** the reference video (B3); the live template (B4); re-captured screenshots at native resolution rather than downscaled; captures of the missing boundaries listed in §3.9 item 6; a scrolled-header capture; and any mobile-width capture. Each of these would convert several current `UNCERTAIN` items into `OBSERVED`.

---

## Chain of custody

```
ORIGINAL EVIDENCE   STEERING/Screenshots/*.png            (untouched)
                    ...FORENSIC RECONSTRUCTION...docx     (untouched; read via read-only extraction to a temp path)
                    MASTER PROMPT.md / Rules.md / AUDIT AGENT INSTRUCTION.md  (untouched)
        ↓
DISCOVERY           STEERING/DISCOVERY_SUMMARY.md         ← this document (new file; nothing overwritten)
        ↓
next                FORENSIC_SCREENSHOT_COMPARISON.md → PROMPT_AUDIT.md → CONSOLIDATED_UI_SPEC.md
                    → (adapted) GAP ANALYSIS → IMPLEMENTATION_PLAN.md → IMPLEMENTATION → VISUAL QA
```

**No application code was created, modified, or deleted in this phase. No file in `STEERING/` was altered. The only change to the repository is the addition of this file.**
