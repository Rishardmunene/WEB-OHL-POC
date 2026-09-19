# PREMIUM FLUID UI RECONSTRUCTION — STEERING RULES

## 1. PROJECT OBJECTIVE

This project is a visual reconstruction of an existing website based on a reference video, reference screenshots, and an existing structural reconstruction.

The existing implementation has already captured the majority of the page structure and content.

Your responsibility is NOT to redesign the information architecture.

Your responsibility is to transform the existing implementation into a:

* premium
* refined
* fluid
* visually sophisticated
* responsive
* performant
* modern React UI

while preserving the reference design language and all established structural requirements.

The reference video and supplied screenshots are the PRIMARY VISUAL SOURCES OF TRUTH.

The existing agent-generated reconstruction is the SECONDARY STRUCTURAL SOURCE OF TRUTH.

Generic UI conventions, shadcn defaults, Tailwind defaults, framework defaults, and your personal design preferences are NOT sources of truth when they conflict with the reference.

---

# 2. DESIGN PHILOSOPHY

The target aesthetic is:

> Editorial luxury + premium legal brand + restrained Apple-like interaction design.

The interface should feel:

* expensive
* calm
* deliberate
* responsive
* tactile
* sophisticated
* lightweight
* cinematic
* modern without becoming trendy
* polished without becoming visually noisy

The goal is NOT:

* excessive glassmorphism
* excessive gradients
* excessive shadows
* excessive animation
* bouncing UI
* exaggerated hover effects
* generic SaaS styling
* dashboard aesthetics
* overuse of rounded cards

Every visual effect must have a purpose.

---

# 3. REFERENCE HIERARCHY

When making a design decision, use this priority:

1. Reference video
2. User-provided reference screenshots
3. Existing forensic reconstruction/specification
4. Existing project assets and implementation
5. Explicit user instructions
6. Established project design tokens
7. General UI/UX principles

Never reverse this order.

If a screenshot contradicts the old implementation, the screenshot wins.

If the video contradicts the old written specification, the video wins.

If the reference does not establish a value, use the smallest reasonable inference and document it.

---

# 4. NEVER DESTROY THE EXISTING STRUCTURE WITHOUT JUSTIFICATION

Before changing the architecture:

* inspect the existing project
* understand the current React structure
* identify reusable components
* identify existing styles
* identify installed dependencies
* identify available assets

Do not rewrite the entire application simply because another implementation would be cleaner.

Prefer incremental refinement.

Refactor only when it materially improves:

* maintainability
* performance
* responsiveness
* animation quality
* visual consistency
* component reuse

---

# 5. COMPONENT ARCHITECTURE

Use React componentization appropriately.

The page should be composed from reusable primitives where repetition exists.

Examples:

```text
App
├── SiteHeader
│   ├── TopBar
│   ├── MainNavigation
│   └── ContactActions
│
├── Hero
│   ├── HeroContent
│   ├── HeroMedia
│   └── FloatingStats
│
├── Section
│   ├── SectionHeading
│   └── OrnamentalDivider
│
├── PracticeAreas
│   └── PracticeCard[]
│
├── Statistics
│   └── StatCard[]
│
├── Timeline
│   └── TimelineItem[]
│
├── Testimonials
│   └── TestimonialCard[]
│
├── Attorneys
│   └── AttorneyCard[]
│
├── ConsultationCTA
├── ConsultationForm
├── BlogSection
│   ├── FeaturedPost
│   └── BlogCard[]
│
└── Footer
```

Do not componentize every `<div>`.

Componentize meaningful visual/behavioral units.

---

# 6. SHADCN UI

shadcn/ui may be used where it improves implementation quality.

However:

> DO NOT make the site look like stock shadcn/ui.

Do not blindly inherit:

* default radius
* default shadows
* default buttons
* default dialogs
* default typography
* default spacing
* default colors

Use shadcn as an implementation primitive, not as the visual identity.

Customize components to the project's design language.

If a custom component produces a more faithful result than a shadcn component, use the custom implementation.

---

# 7. ICONOGRAPHY

Replace crude or generic icon implementations where appropriate.

Prefer a consistent icon family.

Good candidates include:

* Lucide
* custom SVG
* carefully selected icon sets already installed in the project

Icons should have:

* consistent stroke weight
* consistent optical size
* consistent alignment
* appropriate visual density

Avoid mixing visually incompatible icon families.

Do not use random Font Awesome icons merely because they are available.

Icons should feel integrated into the design rather than pasted into it.

---

# 8. BORDER RADIUS SYSTEM

The original reconstruction may contain sharp corners.

Do not automatically preserve 0px corners if the supplied screenshots/video demonstrate a more refined rounded treatment.

Use a deliberate radius system.

Example design tokens:

```css
--radius-xs
--radius-sm
--radius-md
--radius-lg
--radius-xl
--radius-2xl
```

Use radius according to hierarchy.

For example:

* buttons → subtle radius
* cards → medium/large radius where appropriate
* floating UI → larger radius
* image containers → carefully controlled radius
* navigation surfaces → pill/rounded geometry only where justified

Do NOT make everything pill-shaped.

The design should feel rounded because of intentional geometry, not because every element has `border-radius: 9999px`.

---

# 9. SHADOW SYSTEM

Avoid generic heavy shadows.

Do not use:

```css
box-shadow: 0 20px 50px rgba(0,0,0,.4);
```

everywhere.

Use layered, restrained shadows.

Prefer:

* subtle ambient shadow
* soft elevation
* low opacity
* large blur
* minimal spread

Example conceptual hierarchy:

```text
Level 0
No shadow

Level 1
Subtle separation

Level 2
Floating card

Level 3
Modal / floating navigation

Level 4
Exceptional overlay
```

Most components should live at Levels 0–2.

Heavy shadows should be exceptional.

---

# 10. GLASS / BLUR

Use backdrop blur selectively.

The dynamic top navigation may use:

* translucent background
* backdrop blur
* subtle border
* slight saturation
* soft shadow
* animated state transitions

But avoid turning the entire site into glassmorphism.

Glass is a material treatment, not the entire design system.

---

# 11. TOP NAVIGATION

The top navigation is a major interaction surface.

It should feel:

* dynamically responsive
* lightweight
* floating where appropriate
* subtly translucent
* blurred
* spatially stable
* premium

When scrolling:

* avoid abrupt changes
* animate background opacity
* animate blur
* animate shadow/elevation
* optionally change height/padding subtly
* maintain navigation readability

Transitions should feel continuous rather than like switching CSS classes.

Preferred conceptual behavior:

```text
INITIAL
transparent / low-opacity
        ↓
SCROLL
slight compression
        ↓
translucent surface
        ↓
backdrop blur
        ↓
soft border/shadow
```

Avoid aggressive shrinking.

---

# 12. ANIMATION PHILOSOPHY

Animations must feel like the interface has physical continuity.

Preferred qualities:

* fast
* smooth
* subtle
* interruptible
* responsive
* GPU-friendly

Avoid:

* long animations
* large transforms
* excessive bounce
* distracting parallax
* animation on every element
* continuous CPU-heavy effects

---

# 13. ANIMATION PERFORMANCE

Prefer animations of:

```text
transform
opacity
filter
```

where appropriate.

Avoid animating layout-heavy properties continuously:

```text
width
height
top
left
margin
padding
```

unless unavoidable.

Use:

```css
transform: translate3d(...)
```

or equivalent GPU-friendly transformations when justified.

Avoid expensive JavaScript animation loops.

Prefer:

* CSS transitions
* CSS keyframes
* Framer Motion / Motion when already available or justified
* IntersectionObserver for scroll-triggered activation
* requestAnimationFrame only when genuinely necessary

---

# 14. MOTION TIMING

Use a consistent motion language.

Fast interaction:

```text
120–180ms
```

Normal interaction:

```text
180–280ms
```

Large transition:

```text
280–450ms
```

Avoid arbitrary animation durations throughout the codebase.

Create centralized motion tokens.

Example:

```css
--motion-fast
--motion-normal
--motion-slow
```

---

# 15. EASING

Prefer smooth easing curves.

Use easing that feels similar to modern native interfaces.

Examples:

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

or carefully selected spring-like motion.

Avoid:

```css
linear
```

for UI movement unless it is specifically appropriate.

Avoid exaggerated:

```css
ease-in-out
```

on everything.

Motion should have acceleration and deceleration.

---

# 16. TILE / CARD ANIMATION

Cards and tiles should feel responsive without becoming distracting.

On hover:

* very small translation
* subtle elevation
* subtle shadow
* border/accent refinement
* icon movement where appropriate

Example conceptual behavior:

```text
REST
translateY(0)
shadow: subtle

HOVER
translateY(-2px to -5px)
shadow: slightly stronger
border/accent: subtly emphasized
icon: small transform
```

Never make cards jump.

Never use large rotations unless the reference explicitly demonstrates them.

---

# 17. STAGGERED SECTION REVEALS

Sections may use viewport-triggered entrance animations.

Recommended pattern:

```text
section enters viewport
        ↓
heading fades + moves slightly
        ↓
supporting text follows
        ↓
cards reveal with very small stagger
```

Use small stagger intervals.

Example:

```text
40–80ms
```

Do not make users wait for content.

Animations should enhance perceived responsiveness rather than delay access.

---

# 18. REDUCE MOTION

Respect:

```css
prefers-reduced-motion: reduce
```

When enabled:

* disable decorative movement
* minimize transforms
* remove large transitions
* preserve usability

The interface must remain fully functional.

---

# 19. IMAGES

Images should feel integrated rather than inserted.

Use:

* appropriate object-fit
* controlled cropping
* subtle overlays
* rounded geometry where appropriate
* hover treatment where justified
* lazy loading below the fold

Do not load enormous images when smaller responsive variants are sufficient.

---

# 20. PERFORMANCE

The site must remain fast.

Monitor:

* unnecessary re-renders
* excessive DOM
* large image payloads
* expensive filters
* continuous animations
* unnecessary JavaScript
* excessive component state
* layout thrashing

Do not sacrifice performance for visual effects.

The target is:

> premium visual quality with low rendering overhead.

---

# 21. RESPONSIVE DESIGN

Even though the reference recording may primarily show desktop, the implementation must behave correctly on:

* desktop
* laptop
* tablet
* mobile

Do not merely allow desktop CSS to collapse naturally.

Explicitly review:

* navigation
* hero
* cards
* grids
* typography
* buttons
* forms
* images
* spacing
* footer

However, do not invent a radically different mobile design unless required.

Preserve the design language.

---

# 22. ACCESSIBILITY

Maintain:

* semantic HTML
* keyboard navigation
* focus states
* sufficient contrast
* accessible labels
* alt text
* reduced-motion support

Do not remove focus indicators purely for aesthetics.

---

# 23. DESIGN TOKENS

Centralize:

* colors
* typography
* spacing
* radius
* shadows
* motion
* container widths
* breakpoints

Do not scatter arbitrary values throughout the code.

Use CSS variables/Tailwind tokens/theme variables where appropriate.

---

# 24. VISUAL QUALITY STANDARD

Every section should be reviewed for:

### Alignment

Are elements optically aligned?

### Rhythm

Do spacing relationships feel intentional?

### Hierarchy

Is the visual hierarchy obvious?

### Density

Is the section too empty or too crowded?

### Contrast

Is attention directed correctly?

### Geometry

Are corners, borders and cards visually consistent?

### Motion

Does movement feel natural?

### Responsiveness

Does the interface respond immediately?

---

# 25. DO NOT OVERDESIGN

When uncertain, choose restraint.

Do not add:

* random gradients
* random blobs
* unnecessary particles
* excessive glass
* excessive glow
* excessive animations
* decorative elements unsupported by the reference

The target is sophisticated minimalism.

---

# 26. VISUAL VALIDATION IS MANDATORY

After meaningful UI changes:

1. Run the application.
2. Capture screenshots.
3. Compare against reference screenshots.
4. Compare against the video.
5. Identify discrepancies.
6. Fix them.
7. Repeat.

Never declare visual completion solely from source-code inspection.

---

# 27. FINAL PRINCIPLE

The website should feel:

> "The same design, but professionally refined."

NOT:

> "A completely different modern website."

Preserve the visual DNA.

Improve the execution.
