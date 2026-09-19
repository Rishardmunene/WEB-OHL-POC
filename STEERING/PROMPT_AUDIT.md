# PROMPT AUDIT

**Phase 4 artifact — audit of the existing instruction set against the established evidence**

| | |
|---|---|
| Documents audited | `MASTER PROMPT.md` (1079 lines) · `Rules.md` (777 lines) · `AUDIT AGENT INSTRUCTION.md` (389 lines) |
| Audited against | `DISCOVERY_SUMMARY.md` and `FORENSIC_SCREENSHOT_COMPARISON.md` |
| Performed per | `AUDIT AGENT INSTRUCTION.md` — the audit it specifies was briefed but never delivered; this fulfils it |
| Status | Analysis only. No application code exists or was created. No audited file was modified |

> The purpose is to make the eventual implementation agent **harder to misunderstand**, not to praise or rewrite these prompts. Patches are targeted; neither document is rewritten. Both are unusually disciplined documents whose problem is a broken factual premise and inherited error, not sloppiness.

---

## 1. Categorical assessment

Per `AUDIT AGENT INSTRUCTION.md` §13 — no overall score, no ranking.

| Area | Assessment | Main issue |
|---|---|---|
| Reference fidelity | **Undermined by inherited error** | Hard-codes six wrong colors, a wrong container width, and three component behaviors the evidence contradicts |
| Evidence discipline | **Strong in principle, unenforced in practice** | `Rules.md` §3 states a correct hierarchy, then §8 instructs the agent to override the single best-confirmed observation |
| UI refinement | Detailed and well-judged | Refinement targets derived from the reconstruction rather than the screenshots, so several point away from the evidence |
| Motion design | **Over-specified relative to evidence** | ~200 lines of motion specification against exactly one observed interaction state |
| Performance | **Strong** | Sound and specific. Minor tension with the blur the prompts themselves request |
| React architecture | Adequate | Component tree is sensible and correctly warns against over-componentizing; assumes an existing codebase |
| shadcn usage | Correctly positioned | Unexamined cost: every relevant default is opposite to the reference |
| Responsive design | Adequate | Correctly notes evidence is desktop-only; no method for validating inference |
| Visual QA | **Strong intent, unusable method** | The prescribed comparison cannot be executed as written (§3.4 below) |
| Accessibility | Good coverage | Misses that the reference itself contains a WCAG failure (§3.4, M8) |
| Premise validity | **Broken** | Both documents address an implementation that does not exist |

---

## 2. Findings against the required audit dimensions

### 2.1 Accuracy — does the prompt reflect what the screenshots show?

Substantially not, in seven specific places. Each of these was written from the forensic reconstruction rather than from the screenshots, and each is now a wrong instruction rather than a debatable one:

| Location | Instruction | Evidence |
|---|---|---|
| `MASTER PROMPT` §13 | *"The existing design uses approximately `#C8A153` as the primary gold accent"* | Measured **`#CFAF71`** |
| `MASTER PROMPT` §3 | *"approximately 1200px content width … Use this as the existing structural baseline"* | Container = **0.737 × viewport** ≈ 1272 px; 1200 px compresses every measured ratio by ~6 % |
| `MASTER PROMPT` §3, §18 | *"hero with overlapping statistics"*; *"Preserve their overlapping relationship … they should feel like they belong to the hero"* | Stat tiles are in the **Intro** section, in normal flow. Nothing overlaps the hero |
| `MASTER PROMPT` §20 | *"Refine the timeline with: subtle line, clean markers, progressive reveal"* | The timeline has **no line and no markers** |
| `MASTER PROMPT` §11 | *"Current implementation contains shadows that may feel heavier than necessary. Reduce unnecessary visual weight"* | **No shadow exists anywhere** in the reference. This asks the agent to soften an invented property |
| `MASTER PROMPT` §8, §19 | Card hover: *"2–4px upward movement, soft elevation"* | The one hovered card in evidence shows **no lift and no shadow change** |
| `MASTER PROMPT` §3 | *"light/dark section transitions"* baseline; single dark tone implied | Dark scale has **four** values; light sections are **pure white** with near-white cards (inverted from the reconstruction) |

`MASTER PROMPT.md` §28 is a notable exception and deserves credit: it names Playfair Display and Inter as *approximations* and explicitly instructs *"Verify this against the supplied screenshots."* That is exactly the right posture, and it is the model the other seven should follow.

### 2.2 Evidence discipline — does it distinguish observed from inferred?

**At the level of stated principle: yes, and well.** `Rules.md` §3 gives an explicit hierarchy, states *"If a screenshot contradicts the old implementation, the screenshot wins,"* and adds *"If the reference does not establish a value, use the smallest reasonable inference and document it."* `MASTER PROMPT.md` §1 repeats it. `AUDIT AGENT INSTRUCTION.md` §11 anticipates most of the conflicts found here.

**At the level of operative instruction: no.** Three structural gaps:

1. **No classification requirement.** Neither document asks the implementation agent to *label* its decisions `OBSERVED` / `INFERRED` / `UNCERTAIN` / refinement. Without labels, the exact failure that produced the forensic errors — silently promoting inference to observation — recurs with nothing to catch it.
2. **No deviation record.** `Rules.md` §3 says to document inferences, but specifies no artifact, format, or location. Under the **documented-refinement** policy now in force, this is the central mechanism and it does not exist.
3. **The override is outweighed by its context.** Both documents contain the correct override — *"Preserve sharper geometry if the reference screenshot demonstrates it. The screenshot wins."* It is one sentence. It sits against roughly forty lines instructing the agent to build a radius system. Instruction volume, not instruction correctness, drives agent behavior.

### 2.3 Contradictions

Catalogued in §3 below in the `CONFLICT` format required by `AUDIT AGENT INSTRUCTION.md` §11.

### 2.4 Missing requirements

Eleven gaps that would materially change the outcome. `M1`–`M4` are the consequential ones.

**M1 — No ratio-based fidelity criterion.** Both documents assume the reference can be compared in pixels. It cannot: the screenshots are downscaled full-page captures from an unknown viewport. Fidelity must be defined as **ratio correspondence** (container ÷ viewport, column ÷ container, gap ÷ container, glyph pitch ÷ body pitch), with absolute pixels as a locked decision rather than a measured target. Without this, every QA comparison produces a false result.

**M2 — No deviation register.** Required by the standing policy. Needs: evidence position, chosen position, rationale, and classification (restoration / correction / refinement / inferred / new requirement).

**M3 — No treatment of content as placeholder.** Under decision B2 this is a rebrand, so the Lorem Ipsum, "Attorneyster", the placeholder contacts, the "Cart (0)" element and the reference typos ("Arease", "Experiance", "Appoinment", "Conaetct") are **placeholders, not fidelity targets**. Neither prompt says so. Crucially, the prompts also fail to note the converse: **text length remains a layout constraint**, because heading wrap and paragraph depth drive the observed proportions. Replacing two-line headings with four-line headings breaks geometry the agent is simultaneously told to match.

**M4 — No multi-page instruction.** Decision B5 puts a full multi-page site in scope. Both prompts address a single page. No inner page has any visual evidence, so inner pages must be built from the home page's confirmed system, labelled `INFERRED` wholesale, and — most importantly — **must never be used as precedent to change anything on the home page.**

**M5 — No hairline-separation requirement.** The prompts discuss shadow as the hierarchy device (`Rules.md` §9: *"Use shadow primarily to establish hierarchy"*). The reference uses **hairline rules and fill-tone difference** instead, in at least five places the forensic reconstruction missed. This is a defining characteristic and is entirely unmentioned.

**M6 — No icon family decision.** `Rules.md` §7 and `MASTER PROMPT.md` §27 both say "prefer a consistent family" and mention Lucide, but neither decides. Evidence shows **thin-stroke line icons** — which rules out the solid FontAwesome glyphs the forensic used and makes this decidable now rather than left to the implementer.

**M7 — No non-contiguity warning.** The five captures are sequential slices that are **not contiguous**; four section boundaries fall between them. An agent told to "compare against the references" will read those joints as evidence when they are gaps.

**M8 — No fidelity-versus-accessibility rule.** Both documents require "sufficient contrast" and separately require faithfulness, without anticipating that the reference violates the former. Measured against WCAG 2.1 AA:

| Pair | Ratio | AA normal (4.5) | AA large (3.0) |
|---|---|---|---|
| **Gold `#CFAF71` on white** — attorney role labels | **2.10:1** | **FAIL** | **FAIL** |
| **White on gold** — CTA phone-tile glyph | **2.10:1** | **FAIL** | **FAIL** |
| Gold on `#1E2833` — timeline years, contact labels | 7.13:1 | PASS | PASS |
| Gold on `#161D28` — practice icons | 8.08:1 | PASS | PASS |
| Gold on `#2F3A48` | 5.51:1 | PASS | PASS |
| White on `#1E2833` | 14.93:1 | PASS | PASS |
| Muted `#A3A7B5` on `#1E2833` | 6.22:1 | PASS | PASS |
| Muted `#A3A7B5` on `#2F3A48` | 4.81:1 | PASS | PASS |
| `#1E2833` on gold — button text | 7.13:1 | PASS | PASS |
| `#1E2833` on white | 14.93:1 | PASS | PASS |

The dark palette is comfortably accessible. **Gold on white is not, and the reference uses it for small text.** The prompts provide no rule for resolving this, so the agent will silently pick one requirement over the other. A decision is required (§4, P8).

**M9 — No focus-state specification.** No focus state is observable anywhere, yet `Rules.md` §22 forbids removing focus indicators. Focus styling is therefore 100 % refinement and needs an explicit design, not an inference.

**M10 — No asset strategy.** Reference photography is unavailable (no assets in the repository, template not to be consulted per B4). `MASTER PROMPT.md` §23 nonetheless asks for improved "image cropping" against references that do not exist locally. What is actually needed: required aspect ratios and crop behavior — notably the **0.678 attorney portrait aspect** and the three-image intro collage — so substitute imagery preserves the geometry.

**M11 — No instruction to preserve the evidence chain.** Nothing forbids editing the original screenshots or the `.docx`. The current task supplies this rule; the prompts should carry it too.

### 2.5 Overly restrictive requirements

**O1 — `Rules.md` §4 / `MASTER PROMPT.md` §3: preserve-the-existing-structure.** *"Do not rewrite the entire application simply because another implementation would be cleaner"* and *"Do not casually remove or restructure these."* With no application in existence, these are inert at best. At worst they push an agent toward preserving the **forensic HTML's** structure — which §3.7 of the comparison shows is wrong in fourteen components. The preservation instinct must attach to the **verified page architecture**, not to any prior code.

**O2 — `MASTER PROMPT.md` §3's baseline list.** It instructs preservation of *"floating statistics"* and *"sticky two-row header … 1200px content width."* Two of these are contradicted. A preservation instruction pointed at wrong facts is worse than no instruction.

**O3 — `MASTER PROMPT.md` §32: *"Do at least three deliberate visual QA passes."*** Pass-counting is the wrong criterion; it can be satisfied without fixing anything and it caps effort where more is warranted. Replace with a convergence criterion.

**O4 — `Rules.md` §8's radius mandate.** Prescribing a six-step radius token scale for an interface whose every rectangular corner is square is over-constraint in the strict sense: it forces structure the design does not use.

### 2.6 Ambiguous requirements

Unfalsifiable language, in rough order of risk. `AUDIT AGENT INSTRUCTION.md` §5 specifically asks that "iOS-like" be pinned down, so the request is already acknowledged.

| Phrase | Location | Why it is unsafe | Replace with |
|---|---|---|---|
| *"iOS-like fluidity"*, *"native-quality interaction design"*, *"subtle Apple-inspired motion"* | `MASTER PROMPT` §4, §9 | No testable meaning; invites Apple-flavoured pastiche | The concrete properties already in `Rules.md` §14–15: durations 120–180 / 180–280 / 280–450 ms, `cubic-bezier(0.22, 1, 0.36, 1)`, interruptible transitions, transform/opacity only |
| *"premium"*, *"expensive"*, *"cinematic"*, *"luxury editorial"*, *"high-end"* | `MASTER PROMPT` §4, `Rules.md` §2 | Aesthetic mood words that license almost any change | Delete, or bind to measurable properties |
| *"The hero should feel alive immediately"* | `MASTER PROMPT` §17 | Directly invites unevidenced motion | State as an explicit, approved refinement with named properties, or drop |
| *"Refined cards"*, *"cards appear flat"* | `MASTER PROMPT` §5, §8 | The reference **is** flat. "Flat" is framed as a defect when it is the design | Reframe: flatness is intended; refinement means hairline, spacing and interaction quality |
| *"Where appropriate"*, *"where justified"*, *"where supported"* | ~20 occurrences across both | Delegates the decision back to the agent at exactly the points that need governing | Tie each to the evidence hierarchy: "only where the screenshots establish it, or as a logged deviation" |
| *"Gold should feel like jewelry. Not paint."* | `MASTER PROMPT` §13 | Memorable but untestable | Enumerate the observed gold usages — they are a closed set and can simply be listed |

### 2.7 Generic-design drift risks

This is the risk `AUDIT AGENT INSTRUCTION.md` §4 calls *"extremely important,"* and the current prompts are exposed to it.

**The core problem is `MASTER PROMPT.md` §4.** It defines the target as `PREMIUM EDITORIAL LEGAL DESIGN + IOS-LIKE FLUIDITY`, and elaborates: *"Luxury editorial website + premium law firm + native-quality interaction design + subtle Apple-inspired motion,"* listing *"rounded geometry"* and *"material layering"* among the target qualities.

Every one of those cues points away from the measured evidence, which is: **square corners, no shadow, no blur, hairline separation, near-invisible card contrast, and one observed interaction state.** An agent that follows §4 faithfully produces *a nice modern law firm website*. An agent that follows the evidence produces *this law firm website*. §4 currently outranks the evidence by sheer volume and vividness.

Six specific drift vectors:

1. **Rounding.** `Rules.md` §8 + `MASTER PROMPT` §12 versus radius 0 confirmed in all five screenshots.
2. **Elevation.** `Rules.md` §9 + `MASTER PROMPT` §11 versus no detectable shadow anywhere.
3. **Glass.** `Rules.md` §10 + `MASTER PROMPT` §6 versus a fully transparent header with no blur.
4. **Motion.** ~200 lines across `Rules.md` §12–17 and `MASTER PROMPT` §9, §16–21 versus one observed hover fill.
5. **Contrast inflation.** An agent perceiving the near-invisible practice-card contrast (`#1E2833` on `#161D28`) as a mistake will "fix" it. It is the design.
6. **shadcn gravity.** Stock shadcn ships rounded corners, shadowed cards, and bordered inputs. The reference has square corners, no shadow, and underline-only inputs. Defaults drift toward the demo unless every relevant token is overridden.

**Mitigating factors, fairly noted:** `Rules.md` §25 (*"When uncertain, choose restraint"*), §27 (*"The same design, but professionally refined … NOT a completely different modern website"*), §2's explicit anti-list (no excessive glassmorphism, gradients, shadows, animation, bouncing, generic SaaS styling, *"overuse of rounded cards"*), and `MASTER PROMPT` §4's *"Do NOT make it look like an Apple website."* The right instincts are present throughout — they are simply outweighed by the volume of refinement instruction pointing the other way.

---

## 3. Contradictions

### CONFLICT 1 — CRITICAL: the subject of the instructions does not exist

```
Instruction A:  MASTER PROMPT §1 — "You are now taking over an existing React/web
                implementation." §2 STEP 2 — "Run the existing application."
                STEP 3 — "Capture screenshots of the current implementation."
                Rules §4 — "inspect the existing project … identify installed
                dependencies … Prefer incremental refinement."
Instruction B:  The repository contains LICENSE and STEERING/ only. No package.json,
                no React, no Tailwind, no shadcn, no assets, no source of any kind.
                Git history is one commit containing only LICENSE.
Risk:           A large block of instructions is unexecutable. An agent may
                hallucinate a codebase, or treat the forensic .docx HTML as "the
                existing implementation" and inherit all fourteen component errors
                in FORENSIC_SCREENSHOT_COMPARISON.md §3.7 as things to "preserve."
Resolution:     Decision B1 is deferred pending this audit. Recommendation:
                GREENFIELD. The forensic HTML's value is its section ordering, which
                is already extracted into the comparison document; its CSS embeds
                the errors. Porting it imports the errors as a baseline and then
                requires unpicking them. Rewrite MASTER PROMPT §1-3 to state that
                this is a new build whose architecture is fixed by verified page
                structure, not by prior code.
```

### CONFLICT 2 — HIGH: rounded geometry versus observed square geometry

```
Instruction A:  Rules §8 — "Do not automatically preserve 0px corners if the supplied
                screenshots/video demonstrate a more refined rounded treatment."
                Prescribes --radius-xs … --radius-2xl.
                MASTER PROMPT §12 — "Introduce a coherent radius system," with
                small/medium/large/larger tiers. §4 lists "rounded geometry."
Instruction B:  Radius is 0 on every rectangular element in all five screenshots.
                The forensic report independently confirms it. Both prompts contain
                the override: "Preserve sharper geometry if the reference screenshot
                demonstrates it. The screenshot wins."
Risk:           The screenshots do NOT demonstrate a rounded treatment, so Rules §8's
                condition is unmet — but its framing ("do not automatically preserve")
                plus ~40 lines of radius guidance will read as a mandate. Outcome: a
                rounded reconstruction of a square design. This single change would
                alter the site's character more than any other on this list.
Resolution:     Invert the default. Radius 0 is the confirmed baseline. Keep the token
                scale but define every rectangular-surface token as 0, reserving
                non-zero values for the genuinely circular elements (avatars, icon
                rings). Any other rounding becomes a Deviation Register entry.
```

### CONFLICT 3 — HIGH: invented elevation treated as inherited condition

```
Instruction A:  MASTER PROMPT §11 — "Current implementation contains shadows that may
                feel heavier than necessary. Reduce unnecessary visual weight."
                §8 — card hover "soft elevation." Rules §9 — five-level shadow scale;
                "Use shadow primarily to establish hierarchy."
Instruction B:  No shadow is detectable on any surface in any screenshot. Hierarchy is
                established by fill-tone difference and hairline rules.
Risk:           §11 frames the task as softening shadows that exist only in the
                forensic reconstruction, so "reduce" will still land on a shadowed
                result. Meanwhile the reference's real separation mechanism is
                unmentioned (M5) and will be under-built.
Resolution:     State that the confirmed baseline is shadowless. Keep the Rules §9
                scale but set Level 0 as default for all surfaces. Add the hairline
                requirement (M5). Any shadow becomes a Deviation Register entry.
```

### CONFLICT 4 — HIGH: prescribed navigation behavior is unobserved

```
Instruction A:  MASTER PROMPT §6-7 and Rules §11 — translucent, backdrop-blurred nav
                gaining opacity, blur, shadow, border and height compression on
                scroll, continuously interpolated rather than class-switched.
Instruction B:  The header is FULLY TRANSPARENT with no tint, no blur and no border in
                its only captured state. No scrolled capture exists anywhere. The
                forensic report's blur(10px) and rgba(...,0.95) are its own invention;
                its only scroll claim is "sticky," sourced from an absent video.
Risk:           The most detailed behavioral specification in either prompt rests on no
                evidence, and will be implemented as reconstruction. It also collides
                with Rules §10/§20 and MASTER PROMPT §31 on blur cost.
Resolution:     Split explicitly. OBSERVED: transparent at rest over the hero, two
                rows, hairline divider. REFINEMENT (approved, logged): the scrolled
                treatment. Keep the continuous-interpolation requirement — it is good
                engineering guidance and costs no fidelity.
```

### CONFLICT 5 — HIGH: card hover lift contradicted by the one observed hover

```
Instruction A:  MASTER PROMPT §8 — "hover → 2-4px upward movement → soft elevation."
                §19 — "card rises 2-4px → bottom accent appears → icon shifts."
                Rules §16 — "translateY(-2px to -5px), shadow slightly stronger."
Instruction B:  The one hovered card in the evidence (Car Accident) shows ONLY the
                button changing to a gold fill. No lift, no shadow change, and no gold
                bottom accent — the accent the forensic CSS implements.
Risk:           Three prompt sections plus the forensic CSS all agree with each other
                and disagree with the only direct observation available. Consensus
                among interpretations will beat the single piece of evidence.
Resolution:     OBSERVED hover = button fill inversion only. Card lift, bottom accent
                and icon shift are REFINEMENTS requiring Deviation Register entries.
                This is the highest-value correction in the audit because it is the
                one place where evidence directly adjudicates a disputed behavior.
```

### CONFLICT 6 — MEDIUM: motion volume versus motion evidence

```
Instruction A:  ~200 lines specifying scroll reveals, stagger (40-80ms), hero entrance,
                skill-bar animation, press scale 0.97-0.99, timing tokens and easing.
Instruction B:  Exactly one interaction state exists in the evidence. The video that
                could establish motion is absent and will not be supplied (B3).
Risk:           Not that the motion is wrong — it is well-judged and restrained — but
                that its volume will read as reconstruction. Both prompts DO warn
                against inventing motion, so the contradiction is one of proportion.
Resolution:     Partition the motion system into "Observed" (one hover) and "Desired
                Refinement" (everything else), per the task's §10D. Never merge them.
```

### CONFLICT 7 — MEDIUM: visual QA method cannot be executed

```
Instruction A:  MASTER PROMPT §32 — "Capture screenshots at the same viewport
                dimensions as the supplied references." Rules §26 — "Compare against
                the video" (absent).
Instruction B:  The references are downscaled full-page captures from an UNKNOWN
                viewport. Their pixel dimensions (~742-749 wide) are not a viewport.
                They are also non-contiguous (M7), so four boundaries are gaps.
Risk:           The instruction is literally unfollowable, and an agent that follows it
                approximately will compare at the wrong scale and conclude the
                implementation matches when it does not. This converts the QA loop —
                the main safeguard in the whole system — into a source of false
                confidence.
Resolution:     Replace with ratio-based comparison (M1): capture full-page at a
                declared viewport, normalise to page width, then compare measured
                ratios against the table in FORENSIC_SCREENSHOT_COMPARISON.md. Drop
                the video reference. Mark the four boundary gaps as unverifiable.
```

### CONFLICT 8 — MEDIUM: faithfulness versus accessibility

```
Instruction A:  Rules §22 and MASTER PROMPT §24 — maintain "sufficient contrast."
Instruction B:  Rules §3 / MASTER PROMPT §1 — the screenshot wins; do not redesign.
                Measured: gold #CFAF71 on white = 2.10:1, used for small attorney role
                labels. White on gold = 2.10:1, used for the CTA phone-tile glyph.
                Both fail WCAG AA at any text size.
Risk:           Genuinely irreconcilable as written, so the agent will silently choose
                one and not report it. Neither outcome should be silent.
Resolution:     Needs a decision (§4, P8). Recommended: keep gold for LARGE display
                text and for gold-on-dark (7.13:1, passes comfortably); for small text
                on white, darken the gold to reach 4.5:1 and log it as an
                accessibility-driven deviation. Note the dark palette needs no change
                at all — this is a narrow, two-instance problem, not a palette problem.
```

### CONFLICT 9 — LOW/MEDIUM: shadcn versus the observed visual language

```
Instruction A:  Rules §6 / MASTER PROMPT §15 — shadcn permitted; must not look stock;
                "heavily customize."
Instruction B:  The reference's defining traits are radius 0, shadow 0, hairline
                borders and underline-only inputs. shadcn's defaults are the opposite
                on all four.
Risk:           Not prohibitive, but the customization burden is near-total for
                visual primitives, and every un-overridden default drifts toward the
                demo aesthetic.
Resolution:     Use shadcn for BEHAVIORAL primitives where accessibility is hard to
                get right (dialog, dropdown for "Pages ▾", accordion, focus
                management). Build the purely visual surfaces — cards, tiles, stat
                blocks, separators — directly. Decide per component, not globally.
```

### CONFLICT 10 — LOW: blur requested and blur restricted

```
Instruction A:  MASTER PROMPT §6 / Rules §10-11 — backdrop blur on the navigation,
                increasing on scroll.
Instruction B:  MASTER PROMPT §31 / Rules §20 — "Blur is expensive," avoid large
                backdrop-filter layers.
Risk:           Mild and self-aware; both documents already scope blur to the nav.
                The real issue is that the evidence shows NO blur, making the whole
                debate a refinement question (see CONFLICT 4).
Resolution:     Resolve via CONFLICT 4. If blur is adopted as refinement, confine it
                to the nav with a bounded radius and verify cost on scroll.
```

---

## 4. Recommended prompt patches

Targeted edits. Neither document is rewritten, per `AUDIT AGENT INSTRUCTION.md` §14.6.

| # | Target | Change | Patch |
|---|---|---|---|
| **P1** | `MASTER PROMPT` §1–3 | **Replace** the premise | *"This is a NEW implementation. No application code exists. The previous agent produced a single-file HTML/CSS reconstruction inside the forensic .docx; it is NOT in this repository, is NOT authoritative, and contains documented errors in 14 components. Your structural baseline is `CONSOLIDATED_UI_SPEC.md`, not any prior code."* |
| **P2** | `MASTER PROMPT` §3 | **Delete** the wrong baseline facts | Remove *"hero with overlapping statistics"* and *"approximately 1200px content width."* Replace with: *"container = 0.737 × viewport (locked at 1280 px); stat tiles belong to the Intro section in normal flow."* |
| **P3** | `MASTER PROMPT` §13 | **Correct** the accent | `#C8A153` → **`#CFAF71`**. Add the full measured palette: `#1E2833`, `#161D28`, `#2F3A48`, `#FFFFFF`, `#FCFBFC` |
| **P4** | `Rules.md` §8 | **Invert** the default | Replace *"Do not automatically preserve 0px corners"* with: *"Radius 0 is CONFIRMED on every rectangular element across all five screenshots. It is the baseline. Non-zero radius is reserved for genuinely circular elements. Any other rounding requires a Deviation Register entry."* |
| **P5** | `MASTER PROMPT` §11 + `Rules.md` §9 | **Reframe** elevation | *"The reference has NO detectable shadow. Level 0 is the default for all surfaces. Hierarchy is established by fill-tone difference and hairline rules."* Add the M5 hairline inventory |
| **P6** | `MASTER PROMPT` §6–7 + `Rules.md` §11 | **Split** observed from refinement | Label the rest state OBSERVED (transparent, two rows, hairline divider) and the entire scroll treatment REFINEMENT. Retain the continuous-interpolation requirement |
| **P7** | `MASTER PROMPT` §8, §19 + `Rules.md` §16 | **Correct** hover | *"OBSERVED hover is a button fill inversion to gold with dark text — nothing else. The one hovered card in evidence shows no lift, no shadow change and no bottom accent. Card lift requires a Deviation Register entry."* |
| **P8** | `Rules.md` §22 | **Add** the contrast rule | *"Gold `#CFAF71` fails WCAG AA on white (2.10:1). Permitted for large display text and on dark backgrounds (7.13:1). For small text on white, darken to reach 4.5:1 and log as an accessibility deviation. The dark palette requires no change."* |
| **P9** | `MASTER PROMPT` §32 + `Rules.md` §26 | **Replace** the QA method | Ratio-based comparison per M1. Drop the *"same viewport dimensions as the references"* instruction and the absent-video reference. Add the four boundary gaps as known-unverifiable |
| **P10** | `MASTER PROMPT` §32 | **Replace** pass-counting | *"Iterate until no CRITICAL or HIGH discrepancy remains and each remaining MEDIUM/LOW is documented"* instead of *"at least three passes"* |
| **P11** | `MASTER PROMPT` §20 | **Correct** the timeline | *"The timeline has NO connector line and NO markers. Gold year heading above muted paragraph, flush left."* |
| **P12** | `MASTER PROMPT` §4 | **Constrain** the visual direction | Keep the words, add a binding limit: *"These describe execution QUALITY, not visual properties. They may never justify adding radius, shadow, blur, gradient or motion the evidence does not establish. Where §4 and the evidence conflict, the evidence wins."* |
| **P13** | `Rules.md` §3 | **Add** classification + register | Require every decision to carry `OBSERVED` / `SUPPORTED` / `INFERRED` / `UNCERTAIN` / `REFINEMENT`, and require the Deviation Register (M2) |
| **P14** | `Rules.md` §7 + `MASTER PROMPT` §27 | **Decide** the icon family | *"Evidence shows thin-stroke line icons. Use one line-icon family (Lucide) at consistent stroke and optical size. Solid icon families are contradicted."* |
| **P15** | `MASTER PROMPT` (new §37) | **Add** content policy (M3) | Text is placeholder pending supplied content; **text length remains a layout constraint** because heading wrap drives the observed proportions |
| **P16** | `MASTER PROMPT` (new §38) | **Add** multi-page policy (M4) | Inner pages are ~100 % inferred from the home page's confirmed system, labelled as such, and may never be used as precedent to change the home page |
| **P17** | `Rules.md` §4 | **Re-point** preservation (O1) | Preservation attaches to the **verified page architecture**, not to prior code |
| **P18** | `MASTER PROMPT` §23 | **Replace** crop guidance (M10) | Specify required aspect ratios — attorney portrait **0.678 (w:h)**, three-image intro collage — so substitute imagery preserves geometry |
| **P19** | Both, preamble | **Add** evidence-integrity rule (M11) | Original screenshots, the `.docx` and prior agent material are read-only. New analysis goes in new files |
| **P20** | `Rules.md` §1 | **Correct** the source-of-truth list | The reference **video is absent and will not be supplied** (B3). Rank 1 of the hierarchy is permanently empty; no claim may cite it |

---

## 5. Required output summary

### 5.1 Critical issues — fix before any implementation begins

1. **CONFLICT 1** — the prompts address a non-existent implementation. Patches P1, P2, P17.
2. **CONFLICT 2** — radius mandate versus confirmed square geometry. Patch P4. *Highest single-change impact on the site's character.*
3. **CONFLICT 5** — card hover lift contradicted by the only observed hover. Patch P7.
4. **CONFLICT 7** — the visual QA method cannot be executed, turning the primary safeguard into a false-confidence generator. Patch P9.
5. **Wrong hard-coded values** — `#C8A153` and 1200 px. Patches P2, P3.
6. **No evidence-classification or deviation mechanism**, which is the mechanism the standing policy depends on. Patch P13.

### 5.2 Important improvements

CONFLICT 3 (elevation reframing, P5) · CONFLICT 4 (nav split, P6) · CONFLICT 6 (motion partition) · CONFLICT 8 (contrast rule, P8) · M5 hairline requirement · M3 content policy (P15) · M4 multi-page policy (P16) · M7 non-contiguity warning · P12 constraining §4's visual direction · P11 timeline correction · P14 icon decision.

### 5.3 Optional improvements

CONFLICT 9 (per-component shadcn decisions) · CONFLICT 10 (blur scoping) · §2.6 ambiguity replacements · P10 convergence criterion · P18 aspect-ratio guidance · P19/P20 housekeeping.

### 5.4 Final implementation risks

Ways the agent could still go wrong even after every patch:

1. **Volume asymmetry persists.** The refinement instruction will still outweigh the evidence instruction by roughly ten to one. Mitigation: the Consolidated Spec — not these prompts — must be the operative document handed to the implementer.
2. **"Flat" reads as "unfinished."** The reference's near-invisible card contrast and total absence of shadow look like an incomplete design. An agent optimising for apparent quality will "improve" it. Mitigation: state explicitly that flatness is the design.
3. **Refinements accumulate.** Each logged deviation is individually defensible; twenty of them produce a different website. Mitigation: cap the register and review it as a whole before Stage 7, not deviation by deviation.
4. **Inferred inner pages become precedent.** Freely-invented inner pages will drift, then get cited to justify changing the home page. Mitigation: P16's one-way rule.
5. **Ratio drift at the locked container.** Implementing at 1280 px while the evidence ratio implies ~1272 px is a 0.6 % error that compounds through nested percentages. Mitigation: define components in ratios or `rem`, not hard pixels.
6. **False QA confidence.** Ratio comparison at ~0.5 % precision can still miss a systematic few-pixel offset. Mitigation: verify the container ratio first and treat it as the calibration for everything else.
7. **Placeholder content distorts geometry.** Real Ojijo copy will not wrap like the reference lorem. Headings that grow from two lines to three change section heights the agent is told to match. Mitigation: treat line counts per heading as part of the spec.

---

**Next:** `CONSOLIDATED_UI_SPEC.md`, incorporating patches P1–P20 as the operative implementation reference, and carrying the Deviation Register. Decision **B1** (greenfield vs. port) reopens now — the recommendation from CONFLICT 1 is greenfield.
