# MASTER TASK — REFINEMENT OF THE EXISTING WEBSITE

You are now taking over an existing React/web implementation that was reconstructed from a reference website recording.

The previous agent has already completed the **structural reconstruction**.

Your job is NOT to recreate the website from scratch.

Your job is to take the existing implementation and perform a comprehensive **UI refinement, interaction, animation, motion, visual-quality and performance pass**.

The final result should preserve the existing website's structure while making the implementation feel significantly more polished, fluid, premium and aesthetically refined.

---

# 1. PRIMARY SOURCE OF TRUTH

I am providing reference screenshots captured from the original website/video.

Treat these screenshots as PRIMARY VISUAL EVIDENCE.

Also use the original video/reference analysis where available.

The previous agent's reconstruction is a structural reference, not an unquestionable visual authority.

If the existing implementation differs from the screenshots:

> The reference screenshot wins.

If the screenshots differ from assumptions made by the previous agent:

> The screenshots win.

Do not redesign based on personal preference.

---

# 2. FIRST ACTION — DO NOT CODE IMMEDIATELY

Before modifying the project:

### STEP 1

Inspect the entire repository.

Determine:

* framework
* React version
* routing
* styling approach
* Tailwind configuration
* shadcn configuration
* existing components
* existing utilities
* animation libraries
* installed icon libraries
* asset directories
* fonts
* build configuration

### STEP 2

Run the existing application.

### STEP 3

Capture screenshots of the current implementation.

### STEP 4

Compare the current implementation against the supplied reference screenshots.

### STEP 5

Create a:

# CURRENT STATE VS REFERENCE GAP ANALYSIS

Classify differences as:

```text
STRUCTURAL
GEOMETRIC
TYPOGRAPHIC
COLOR
SPACING
ICONOGRAPHY
BORDER/RADIUS
SHADOW
IMAGE
ANIMATION
INTERACTION
RESPONSIVENESS
PERFORMANCE
```

Do this BEFORE major implementation changes.

---

# 3. PRESERVE WHAT ALREADY WORKS

The previous reconstruction already captured:

* major page sections
* overall page order
* hero structure
* floating statistics
* practice-area grid
* light/dark section transitions
* history/timeline section
* testimonials
* attorneys
* consultation CTA
* consultation form
* blog section
* footer

Do not casually remove or restructure these.

The previous reconstruction identified the page as having a sticky two-row header, hero with overlapping statistics, approximately 1200px content width, dark/light sections, gold accent and serif/sans typography pairing.

Use this as the existing structural baseline.

---

# 4. TARGET VISUAL DIRECTION

The desired refinement is:

## PREMIUM EDITORIAL LEGAL DESIGN

combined with:

## IOS-LIKE FLUIDITY

The interface should feel:

* elegant
* smooth
* responsive
* restrained
* tactile
* high-end
* cinematic
* lightweight
* modern
* intentional

Think:

```text
Luxury editorial website
+
premium law firm
+
native-quality interaction design
+
subtle Apple-inspired motion
```

Do NOT make it look like an Apple website.

Use the principles of Apple's interaction design:

* continuity
* spatial relationships
* smooth state changes
* restrained motion
* rounded geometry
* material layering
* subtle depth
* immediate response

without copying Apple's branding or visual identity.

---

# 5. UI REFINEMENT PASS

Review every section individually.

For every component ask:

### Geometry

* Is the width correct?
* Is the height correct?
* Are corners refined?
* Are proportions balanced?

### Spacing

* Is padding intentional?
* Is whitespace balanced?
* Are elements optically aligned?

### Typography

* Is hierarchy clear?
* Are headings too large/small?
* Is line-height appropriate?
* Is text wrapping similar to reference?

### Surface

* Is the background correct?
* Is the border too strong?
* Is the shadow too heavy?
* Does the card appear flat?

### Interaction

* What happens on hover?
* What happens on focus?
* What happens when entering/leaving?

### Motion

* Is the animation too slow?
* Too fast?
* Too abrupt?
* Too heavy?

---

# 6. NAVIGATION REFINEMENT

The navigation is a primary visual anchor.

Rework it carefully.

The target behavior is a **dynamic floating/translucent navigation surface**.

Desired qualities:

* translucent
* blurred
* subtle
* responsive
* stable
* elegant

When the page is at the top:

```text
lighter / more transparent
minimal elevation
```

As the user scrolls:

```text
slightly more opaque
backdrop blur increases
subtle shadow appears
border becomes slightly visible
height may compress subtly
```

The transition must be animated.

Do not use a binary:

```text
if scroll > X
background = black
```

with an abrupt switch.

Use smoothly interpolated or transitioned properties.

---

# 7. HEADER MOTION

The header should not feel like it is disappearing and reappearing.

Instead:

```text
scroll
↓
header gently compresses
↓
surface gains materiality
↓
blur increases
↓
shadow subtly appears
```

Use a small amount of movement.

Avoid excessive header movement because navigation is a high-frequency interaction surface.

---

# 8. CARD / TILE REFINEMENT

The existing cards are structurally correct but visually too static.

Improve:

* radius
* border
* shadow
* hover elevation
* icon treatment
* internal spacing
* micro-interactions

Target behavior:

```text
REST
↓
minimal shadow
↓
hover
↓
2–4px upward movement
↓
soft elevation
↓
accent/border refinement
↓
icon subtly moves
```

The transition must feel instantaneous but smooth.

No bouncing.

No dramatic scaling.

No excessive glow.

---

# 9. IOS-STYLE MICROINTERACTIONS

Introduce subtle microinteractions where appropriate.

Examples:

### Buttons

Hover:

```text
small color transition
tiny elevation
slight transform
```

Press:

```text
scale ≈ 0.97–0.99
```

Release:

```text
smooth return
```

### Cards

Hover:

```text
translateY(-2px to -4px)
```

### Icons

Where appropriate:

```text
translateX(2–4px)
```

or a subtle rotation/opacity change.

Keep everything restrained.

---

# 10. BUTTON DESIGN

Review every button.

Buttons should feel tactile.

Improve:

* radius
* border
* typography
* padding
* icon alignment
* hover state
* active state
* focus state

Avoid generic framework button appearance.

If shadcn Button is used, heavily customize it to match the project's visual language.

---

# 11. SHADOW REFINEMENT

Audit every shadow.

Current implementation contains shadows that may feel heavier than necessary.

Reduce unnecessary visual weight.

Aim for:

```text
soft
diffuse
low opacity
large blur
minimal spread
```

Cards should not look like they are physically floating 50px above the page.

Use shadow primarily to establish hierarchy.

---

# 12. ROUNDED CORNERS

Introduce a coherent radius system where supported by the screenshots.

Do not apply identical radius to every element.

Use hierarchy.

Example:

```text
small UI control
→ small radius

standard card
→ medium radius

feature card / floating panel
→ larger radius

navigation surface
→ larger radius / contextual rounding
```

Preserve sharper geometry if the reference screenshot demonstrates it.

The screenshot wins.

---

# 13. GOLD ACCENT REFINEMENT

The existing design uses approximately:

```text
#C8A153
```

as the primary gold accent.

Do not flood the interface with gold.

Use it for:

* CTA emphasis
* separators
* active states
* icons
* small decorative elements
* important highlights

Gold should feel like jewelry.

Not paint.

---

# 14. ORNAMENTAL SEPARATOR

The existing design has a signature:

```text
LINE — DIAMOND — LINE
```

separator.

Preserve this design language.

However, refine its rendering:

* optical centering
* line thickness
* spacing
* diamond size
* opacity
* animation where appropriate

A very subtle reveal can be used when the section enters the viewport.

---

# 15. SECTION TRANSITIONS

Sections should not feel like independent blocks stacked on a page.

Create visual continuity.

Use:

* consistent spacing
* controlled color transitions
* image overlap
* subtle motion
* consistent container geometry

Avoid arbitrary decorative separators between every section.

---

# 16. SCROLL-REVEAL SYSTEM

Implement a lightweight scroll reveal system.

Use IntersectionObserver or a similarly efficient mechanism.

Do NOT attach expensive scroll listeners to every element.

Suggested behavior:

```text
Element outside viewport
opacity: 0
transform: translateY(16px)

Element enters viewport
opacity: 1
transform: translateY(0)
```

Use:

```text
200–500ms
```

depending on component importance.

Cards can use small stagger:

```text
40–80ms
```

Do not delay the entire page.

---

# 17. HERO ANIMATION

The hero should feel alive immediately.

Possible subtle motion:

* background image movement
* content fade/translate
* statistics entrance
* decorative separator reveal
* CTA entrance

Do not create heavy parallax.

If using image movement, keep it extremely subtle.

Example:

```text
scale: 1.02 → 1
```

or small positional movement.

---

# 18. FLOATING STATISTICS

The hero statistics are an important compositional element.

Preserve their overlapping relationship.

Improve:

* depth
* radius
* shadow
* entrance animation
* hover behavior
* icon alignment

They should feel like they belong to the hero rather than being pasted over it.

---

# 19. PRACTICE AREA TILES

This is a key area for refinement.

Each tile should feel tactile.

Possible behavior:

```text
hover
→ card rises 2–4px
→ bottom accent appears
→ icon shifts slightly
→ CTA becomes more prominent
→ shadow softens/strengthens subtly
```

All transitions should occur together.

Avoid independent animations that make the card feel mechanically assembled.

The entire tile should feel like one object.

---

# 20. TIMELINE

Refine the timeline with:

* subtle line
* clean markers
* progressive reveal
* consistent vertical rhythm

When timeline items enter the viewport:

```text
line / marker
+
heading
+
description
```

can reveal sequentially.

Keep stagger extremely short.

---

# 21. SKILL BARS

Skill bars should animate only when entering the viewport.

Example:

```text
0%
↓
target percentage
```

Use a smooth transition.

Do not animate indefinitely.

Do not trigger repeatedly every time the user scrolls slightly.

---

# 22. TESTIMONIALS

Improve testimonial cards through:

* better quotation icon treatment
* refined spacing
* subtle border
* controlled shadow
* smooth hover
* clean reviewer hierarchy

Avoid making them look like generic SaaS testimonial cards.

They should remain editorial.

---

# 23. ATTORNEY CARDS

Improve:

* image cropping
* image radius
* hover behavior
* social icon interaction
* typography
* spacing

Possible hover:

```text
image subtly scales
overlay subtly appears
social icons become slightly more prominent
```

Do not overanimate portraits.

---

# 24. FORMS

Forms should feel premium.

Improve:

* field spacing
* focus state
* border transitions
* typography
* button feedback
* error state
* accessibility

Focus should be visually clear but elegant.

Example:

```text
border opacity increases
accent appears
label/input transitions subtly
```

Avoid aggressive glowing focus effects.

---

# 25. BLOG CARDS

Improve:

* image hover
* card elevation
* title transition
* metadata hierarchy
* read-more interaction

The image and content should feel like a single component.

---

# 26. FOOTER

The footer should be visually substantial but not heavy.

Refine:

* spacing
* typography
* link hover
* social icons
* separator
* responsive layout

Use subtle transitions.

---

# 27. ICON SYSTEM

Audit all icons.

Replace inconsistent FontAwesome usage where appropriate with a consistent icon library.

Prefer:

* Lucide
* existing project icon system
* custom SVG

Use icon size and stroke consistently.

Avoid decorative icons that do not serve a visual or semantic purpose.

---

# 28. TYPOGRAPHY

The current reconstruction uses:

```text
Playfair Display
+
Inter
```

as approximations.

Verify this against the supplied screenshots.

If the screenshots suggest a better font:

* investigate existing project fonts
* use an appropriate replacement
* preserve the editorial serif/sans relationship

Typography should receive particular attention to:

* weight
* tracking
* line height
* wrapping
* optical size
* section hierarchy

Do not simply increase font sizes to make the site feel premium.

---

# 29. RESPONSIVENESS

After desktop refinement, test:

```text
1920
1440
1280
1024
768
480
390
375
```

or the closest useful widths.

At every breakpoint inspect:

* header
* hero
* stats
* cards
* typography
* forms
* images
* footer

Do not let the mobile version become an accidental desktop collapse.

---

# 30. PERFORMANCE PASS

After implementing animations, inspect performance.

Specifically look for:

* excessive React re-renders
* layout thrashing
* expensive blur
* excessive backdrop-filter
* large image payloads
* unnecessary animation loops
* excessive DOM
* animation of layout properties

Prefer:

```text
transform
opacity
CSS transitions
IntersectionObserver
```

over expensive continuous calculations.

The website should remain responsive even on modest hardware.

---

# 31. DO NOT OVERUSE BLUR

Blur is expensive.

Use backdrop blur only where it materially contributes to the design.

Most importantly:

* navigation
* selected floating surfaces
* exceptional overlays

Do not apply large backdrop-filter effects to dozens of cards.

---

# 32. VISUAL QA LOOP

This is mandatory.

After the first refinement pass:

### 1.

Run the website.

### 2.

Capture screenshots at the same viewport dimensions as the supplied references.

### 3.

Compare:

```text
REFERENCE
vs.
IMPLEMENTATION
```

### 4.

Create a discrepancy list.

### 5.

Fix discrepancies.

### 6.

Capture screenshots again.

### 7.

Repeat.

Do at least three deliberate visual QA passes.

---

# 33. QA PRIORITY

Fix discrepancies in this order:

```text
1. Major geometry
2. Container widths
3. Section heights
4. Typography
5. Component dimensions
6. Spacing
7. Colors
8. Image treatment
9. Radius
10. Shadows
11. Icons
12. Animation
13. Micro-interactions
```

Do not spend 20 minutes tuning shadows while the hero layout is still incorrect.

---

# 34. DO NOT CLAIM SUCCESS TOO EARLY

Never say:

> "The UI is polished."

unless you have actually:

* run the site
* inspected it
* captured screenshots
* compared it against references
* corrected visible discrepancies

---

# 35. FINAL DELIVERABLE

When the work is complete, provide:

## A. IMPLEMENTATION SUMMARY

What was changed.

## B. COMPONENT SUMMARY

New/refactored components.

## C. ANIMATION SYSTEM

List:

* transitions
* scroll reveals
* hover interactions
* header behavior
* card motion
* hero animation

## D. PERFORMANCE SUMMARY

Explain how animations were kept lightweight.

## E. RESPONSIVE QA

List viewport sizes tested.

## F. VISUAL QA

List reference screenshots compared.

## G. REMAINING DISCREPANCIES

Be honest.

For every remaining discrepancy:

```text
Element:
Reference:
Current:
Difference:
Reason:
Severity:
```

---

# 36. FINAL DESIGN STANDARD

The final website should not feel like:

> "A website with animations added to it."

It should feel like:

> "A carefully designed interface where motion, geometry, typography, depth and interaction all belong to the same design system."

The animation should support the design.

The shadows should support the hierarchy.

The radius should support the geometry.

The icons should support the visual language.

The typography should support the editorial character.

Nothing should feel randomly added.

The final result should preserve the original reconstructed design while elevating its execution to a professional, premium React interface.
