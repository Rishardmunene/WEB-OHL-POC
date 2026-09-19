# IMPLEMENTATION PLAN

**Phase 6 artifact**

| | |
|---|---|
| Governing spec | `CONSOLIDATED_UI_SPEC.md` |
| Correction checklist | `CURRENT_IMPLEMENTATION_GAP_ANALYSIS.md` — 38 tracked corrections |
| Stack | Vite · React 19 · TypeScript · React Router 7 · Tailwind 4 (CSS-first) · shadcn (broad, fully overridden) · Lucide |
| Decisions in force | B1 port · B2 rebrand · B3 no video · B4 no template access · B5 multi-page · full WCAG AA · documented refinement |

---

## Stage 0 — Verbatim port, committed alone

Convert the forensic HTML/CSS to React **without corrections**, and commit it as its own commit.

This looks counterproductive but serves the §19 auditable chain: it makes all 38 corrections visible as a reviewable diff rather than disappearing into an initial commit. Nobody has to trust that the corrections happened.

Deliverables: component tree per spec §F · all copy transferred as placeholder · original CSS as a single legacy stylesheet · routing shell.

Exit: renders, builds clean, visually matches the forensic reconstruction (**not** the reference).

## Stage 1 — Architecture and design tokens

Establish tokens **before** component work so the 6 `CRITICAL` corrections propagate automatically instead of being chased component by component.

Tailwind 4 `@theme` tokens: the four-value dark scale · two-value light scale · **two** gold tokens · `--container-max: 1280px` · type scale · spacing rhythm · `--radius-surface: 0` · `--shadow-0: none` · motion durations and easing · breakpoints.

Closes **C-1, C-2, C-3, C-5, C-6**. shadcn initialised here with `--radius: 0` and shadows disabled at the root, so no stock default is ever inherited.

Exit: no hard-coded color, radius, shadow or duration anywhere in component code.

## Stage 2 — Page architecture and shared primitives

`Section` (surface variant + container + rhythm) · `SectionHeading` · **`OrnamentalDivider`** with corrected geometry, used in 8+ places · button variants · the hairline system.

Closes **C-4, H-1, M-6, M-7**. Add the missing pre-footer band here, while the architecture is still malleable.

Exit: all 13 sections present in the right order with the right surfaces.

## Stage 3 — Header and navigation

Rest state faithful: transparent, two rows, hairline divider, gold rings, gold labels. Scroll state as the §J-2 refinement — continuously interpolated, not a class swap, one passive rAF-throttled listener.

Closes **M-1, M-2, L-1, L-4**.

## Stage 4 — Hero and Intro

Hero: full-bleed image, left scrim, separator above H1, corrected H1 size. Intro: three-image collage, script signature, **stat tiles moved into normal flow**.

Closes **H-2, H-11, M-10, M-11**, plus the §J-9 scrim contrast floor.

## Stage 5 — Cards, tiles and stats

The largest correction block. Practice cards (rest state, hairline rule, Lucide line icons, vertical heading rule, gold highlight phrases) · light stat boxes (ring badges) · CTA consult card (inset frame, gold square tile).

Closes **H-10, H-13, H-14, H-15, H-16, M-3, M-4, M-5, L-2**.

## Stage 6 — Remaining sections

History/skills (full-bleed blurred backdrop, panel, line-less timeline, knobbed skill bars) · testimonials (**4 staggered cards**, floating reviewers) · attorneys (aspect-ratio portraits, white social bar) · form (container-width panel, real labels, 3:1 boundaries) · blog (6 cards, no surfaces) · footer (correct tone, flanking ornament, two sub-columns).

Closes **H-3, H-4, H-5, H-6, H-7, H-8, H-9, H-12, H-17, M-8, M-9, L-3**, plus §J-8.

Exit: **all 38 corrections closed.** Static fidelity complete.

## Stage 7 — Motion

Only after static fidelity is strong. Observed motion first (the one button hover), then the §J-2/J-3/J-4 refinements. **Review the Deviation Register as a whole here** — this is the checkpoint for whether 15 individually-defensible deviations have collectively drifted. J-3 is first to withdraw if the lift reads as un-referencelike.

`transform`/`opacity` only · interruptible · `IntersectionObserver`, reveal-once · `prefers-reduced-motion`.

## Stage 8 — Responsive

Entirely inferred (§J-11). Reproduce the design language; least visually disruptive collapse. Test 1920 / 1440 / 1280 / 1024 / 768 / 480 / 390 / 375.

## Stage 9 — Inner pages

15 routes, ~100 % inferred (§J-12). Composed strictly from the home page's confirmed system. **One-way rule: an inner page may never justify changing the home page.**

## Stage 10 — Performance, accessibility, visual QA

Performance: responsive images with intrinsic dimensions, lazy-loading below the fold, pre-blurred backdrop asset (never a runtime `filter` on a large layer), blur confined to the nav, containment on long sections.

Accessibility: full AA audit — two-gold usage, form labels, 3:1 boundaries, composited contrast over imagery, focus states, landmarks, heading hierarchy, keyboard paths.

**Visual QA by ratio, not by pixel.** The references are downscaled captures from an unknown viewport, so `MASTER PROMPT.md` §32's "same viewport dimensions" is unfollowable (audit CONFLICT 7). Instead: capture full-page at a declared viewport → normalise to page width → compare measured ratios against the spec §C.1 table. Verify the container ratio first; it calibrates everything else.

Compare: full page · header (both states) · hero · intro tiles · practice grid + hover · light stats · history panel · testimonials · attorneys · CTA · form · blog · footer · mobile. The four boundary gaps are marked unverifiable, not passed.

Exit: no open `CRITICAL`/`HIGH`; every remaining `MEDIUM`/`LOW` documented. Convergence, not a pass count (audit P10).

---

## Sequencing rationale

Tokens precede components so the 6 `CRITICAL` corrections propagate once. Static fidelity precedes motion so animation is never used to mask geometry errors. The home page precedes inner pages so inferred work cannot contaminate evidenced work. QA priority follows `MASTER PROMPT.md` §33 — geometry before shadows — which is sound and is adopted unchanged.

## Change control

Per the task's §20, every modification records what changed, why, the supporting evidence, and its class (restoration / correction / refinement / inferred / new requirement). Corrections cite a `C-`/`H-`/`M-`/`L-` row; refinements cite a `J-` row. Anything citing neither is out of scope and must be stopped.

## Definition of done

All 38 corrections closed or explicitly deferred with a reason · Deviation Register reviewed as a whole · full AA verified by measurement, not inspection · ratio-based QA passed at 8 widths · builds clean with no console errors · `FINAL_RECONSTRUCTION_REPORT.md` written, **claiming no pixel-perfection** since the evidence cannot establish it.
