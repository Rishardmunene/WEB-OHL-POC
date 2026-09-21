# OJIJO GROUP BUILD PLAN

Pre-implementation plan for turning the forensic visual reconstruction into the **Ojijo Group umbrella website**.

| | |
|---|---|
| Status | Discovery complete. **No application code changed.** |
| Depends on | `OJIJO_GROUP_CONTENT_MAP.md` · `OJIJO_GROUP_CONTENT_CONFIRMATIONS.md` · `Ojijo Brand Strategy Research.docx` · live fetches of ojijogroup.com, ojijohrlaw.com, ojijosenaji.com, Luma (20 Sep 2026) · `CONSOLIDATED_UI_SPEC.md` |
| Does **not** implement | The research document’s Model B (rebuild ojijohrlaw.com as the specialist hub). That IA is correct **for HR Law**. This property is the Group. |

---

## 1. Final Group positioning

**Ojijo Group is the umbrella.** It is the place a visitor learns who Ojijo is, what the ecosystem covers, and which specialist destination to use next.

Verified public lines (do not “improve” them into generic corporate-speak):

- Ojijo Group public site: employment and labour-law experts serving employers, HR departments, NGOs and institutions in Kenya.
- Luma host signature, repeated: *“Business Law Consultants | Human Resource Consultants | Employment Law Advisory & Capacity Development.”*
- LinkedIn (supporting, not primary): HR, legal and management consulting and training; Nairobi; privately held.

**Working positioning for this site** (connective, not invented capability):

> Ojijo Group brings together specialist employment and HR-law consulting, a full-service legal practice, and professional training for employers, HR leaders and institutions.

It is **not** “a law-firm landing page,” and it is **not** a duplicate of Ojijo HR Law.

Primary job: **Introduction + credibility + discovery + routing.**

---

## 2. Verified entity ecosystem

```text
                         OJIJO GROUP
              Umbrella / shared professional identity
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
 Ojijo & Partners        Ojijo Senaji        Ojijo Group
 Consulting              Advocates           Training
 (Ojijo HR Law)          Full-service        (division /
 Employment, labour,     law firm            Luma destination —
 HR consulting           Kindaruma Rd        not a verified
                         714                 separate company)
         │                    │                    │
 ojijohrlaw.com          ojijosenaji.com     luma.com/ojijogrouptraining
```

Relationship language until the client confirms shareholding: **sister professional brands under the Ojijo Group name, sharing Nairobi infrastructure and leadership**, not “Ojijo Group owns X.”

---

## 3. Role of each entity

| Entity | Role on the Group site | Does not belong on the Group site |
|---|---|---|
| **Ojijo Group** | Identity, ecosystem map, group enquiry, training discovery | Detailed service delivery |
| **Ojijo HR Law / Ojijo & Partners Consulting** | Specialist employment, labour, HR advisory, mediation, employer-side ELRC work, HR audits, in-house training sales | Full service catalogue, articles, workshop CMS |
| **Ojijo Senaji Advocates** | Broader legal practice gateway for visitors who are **not** looking for the HR vertical | Practice-area catalogue, litigation process, “55 specialists” unless confirmed |
| **Ojijo Group Training** | Upcoming programmes, CPD, destination consortia | Ticketing, MPESA, approval workflow |

---

## 4. Existing website for each entity

See the routing table in `OJIJO_GROUP_CONTENT_MAP.md` §1. All four URLs were fetched. Senaji’s practice-area page is live but content-thin; do not backfill it from Sheriaplex/MyJobMag.

---

## 5. Group-level services / capabilities

Consolidate. Do not paste every HR Law bullet and every Senaji claim.

| Group theme | One-line | Routes to |
|---|---|---|
| Employment & labour law | Contracts, termination, redundancy, ELRC, union disputes — for employers | Ojijo HR Law (and Group’s own live copy, which overlaps) |
| HR consulting & compliance | Policies, audits, outsourced HR support, disciplinary process | Ojijo HR Law |
| Workplace investigations & dispute resolution | Investigations, mediation, labour-office conciliation | Ojijo HR Law |
| Professional training & CPD | Workshops, masterclasses, East Africa consortia; IHRM CPD on listed events | Training page → Luma |
| Broader legal practice | Full-service firm for matters outside the HR vertical | Ojijo Senaji Advocates |

Industries **named on ojijogroup.com** (use these, not a made-up grid): Manufacturing; Hospitality; NGOs & INGOs; Financial institutions & SACCOs; Education; Healthcare; Logistics & transport; Government & parastatals. Optional, compact. No client logos.

---

## 6. Homepage architecture

Keep the **visual** sequence. Change the **job** of each block.

| # | Visual block | Group job |
|---|---|---|
| 1 | Header | Ojijo Group · group nav · group contact · Talk to Ojijo Group |
| 2 | Hero | Two-line identity. CTAs: Explore Our Group / Explore Our Entities |
| 3 | Intro + collage | What Ojijo Group is. Kepher signature. No fake stats |
| 4 | 3×2 cards | Areas of expertise → entity CTAs |
| 5 | Light band | Who we serve + restrained trust marks |
| 6 | History panel | Differentiators (specialist + general practice + training). No fake years |
| 7 | 4 staggered cards | **Entity / ecosystem gateway** |
| 8 | 3 portraits | Leadership (1 verified + 2 entity pathways) |
| 9 | CTA + phone card | Group enquiry |
| 10 | Form | Group contact (inert submit) |
| 11 | Featured + grid | Latest: upcoming training + outbound insights. No fake posts |
| 12 | Pre-footer image | Keep |
| 13 | Footer | Group · Entities · Training · Contact |

Audience-first helper (can be the expertise intro, not a gimmick widget):

```text
What are you looking for?
  Employment / HR legal advice  →  Ojijo HR Law
  Broader legal matter          →  Ojijo Senaji Advocates
  Training / CPD                →  Training → Luma
  Understand Ojijo              →  stay here
```

---

## 7. Navigation

```text
Home    About    Our Expertise    Our Entities    Training    Contact
```

Header right: **Talk to Ojijo Group** (not Book a Consultation). **No Cart.**

Not:

```text
Employment Law · Labour Law · HR Compliance · Litigation · …
```

Those live on Ojijo HR Law.

---

## 8. Entity gateway

Primary visual: the **four staggered cards** (current testimonials).

Each card:

- Entity name
- Category label
- One sentence
- Specialisation
- CTA with external-link indication (`Explore Ojijo HR Law →` opens the official site in a way that is obvious)

Draft (editable, all sourced):

1. **Ojijo HR Law** — Employment, labour & HR law. *Ojijo & Partners Consulting: advisory, consulting and professional training for modern workplaces.* → https://ojijohrlaw.com/
2. **Ojijo Senaji Advocates** — Full-service legal practice. *A Nairobi law firm for matters beyond the HR vertical.* → https://ojijosenaji.com/
3. **Ojijo Group Training** — Professional development. *Workshops and consortia for HR leaders, managers and employers, with IHRM CPD on listed programmes.* → `/training` then Luma
4. **Ojijo Group** — The umbrella. *Start here if you need to understand the ecosystem or send a group enquiry.* → `/about` `#contact`

Do not colour-code entities into four brands. Same card system, different copy and icons.

---

## 9. Training architecture

```text
Ojijo Group → Training → programme summary → Register on Luma → Luma
```

- Home: next **2–3 upcoming** events only (see content map §5).
- `/training`: intro, upcoming cards (title, date, format, venue, audience if known, CPD if verified, fee if verified, Register CTA), link to full calendar `https://luma.com/ojijogrouptraining`, note that registration leaves Ojijo.
- Past events: optional “request this in-house” later; not required for first ship.
- No custom ticketing. No embedded checkout unless we later confirm the Luma widget is wanted and works.

---

## 10. Insights architecture

**Defer a magazine.** There is no verified Group article feed. First ship uses the blog *layout* for:

- Featured: next flagship programme or a short Group note
- Remaining slots: training cards and “Read on Ojijo HR Law / Visit Ojijo Senaji” tiles

Do not rewrite template posts (“Injured Tugboat Worker”) into fake thought leadership.

---

## 11. CTA strategy

| Level | Label | Goes to |
|---|---|---|
| Header / hero secondary | Explore Our Entities | `#entities` |
| Hero primary | Explore Our Group | `#about` |
| Expertise cards | Explore [Entity] → | Official URL |
| Training | Register on Luma → | Event Luma URL |
| Group close | Talk to Ojijo Group | `#contact` |
| **Avoid as Group-primary** | Get legal advice / Book a consultation / Free consultation | Sounds like one law firm |

Senaji-style “Make an Appointment” stays on Senaji.

---

## 12. Footer architecture

```text
[ ornament ]  Ojijo Group  [ ornament ]

About / Expertise / Entities / Training / Contact     (split column)

Our Entities
  Ojijo HR Law                 → ojijohrlaw.com
  Ojijo Senaji Advocates       → ojijosenaji.com
  Ojijo Group Training         → luma.com/ojijogrouptraining

Training
  Upcoming programmes          → /training
  Full calendar                → Luma

Contact
  Nairobi (confirmed address only)
  +254 745 518 775 · +254 721 793 974
  info@ojijogroup.com
```

Drop template “Utility Page / Style Guide / Licenses”.

---

## 13. Content migration plan

1. Replace `src/content/home.ts` with Group content modules (brand, nav, entities, expertise, events, contact). **No invented statistics.**
2. Swap Melbourne / `ojijohrlaw.com` header-footer contact for Group Kenya details.
3. Point practice-area component at expertise data; testimonials component at entity data; attorneys at leadership; blog at training/insights tiles; help-stats at audiences + real marks.
4. Add routes: `/about` `/expertise` `/entities` `/training` `/contact` as thin pages reusing home sections — do not design a second visual language.
5. Use `public/Logo/Ojijo.png` in the header/footer.
6. External links: `rel="noopener noreferrer"` + visible “opens official site / Luma”.

---

## 14. New pages required

`/about` · `/expertise` · `/entities` · `/training` · `/contact`

Home remains the evidence-based visual composition.

---

## 15. Pages that should remain external

| Destination | Why |
|---|---|
| https://ojijohrlaw.com/ and its services/training/about/gallery | Specialist HR Law |
| https://ojijosenaji.com/ | Full-service firm |
| https://luma.com/ojijogrouptraining and per-event Luma URLs | Registration |
| IHRM / NITA / Forty Under 40 pages | Third-party credentials |

---

## 16. Client confirmation requirements

Full table: `OJIJO_GROUP_CONTENT_CONFIRMATIONS.md`.

Ship-blockers if unconfirmed: ownership language, primary address, consortium dates, winner-vs-nominee award line, any numeric KPI, any named client, any extra people in the portrait grid, MPESA on-site.

Safe to ship without waiting: Group vs entity distinction, three official URLs, Luma as register-here, Kepher as Group MD, Kenya phones and `info@ojijogroup.com`, sector list from ojijogroup.com, Data Protection training 25 Sep 2026 on Luma.

---

## 17. Visual changes required

| Change | Type | Why |
|---|---|---|
| Brand lockup → Ojijo logo + Ojijo Group | Restoration of real brand | Template Landmark + “Ojijo HR Law” is the wrong layer |
| Nav labels | IA | Group, not practice-area menu |
| Remove Cart | Correction | Not Ojijo |
| Testimonials → entity cards | Restructure | Needed for the ecosystem story; same 4-card geometry |
| Kill fake stats, timeline, skill %, fake bios, fake posts | Claims rule | Evidence forbids them |
| CTA copy | Positioning | Must not read as one employment firm |
| Optional second hero button | Refinement | Brief asks primary + secondary; add only if the hero column still fits the two-line H1 |

Motion: existing tokens. Entity-card hover may use the already-declared small `translateY` (J-3). External CTA arrows: short transform on hover. No new animation library.

---

## 18. Implementation sequence

1. Content module + routing table in code (no visual invention).
2. Header/footer/nav/contact (Group identity).
3. Hero + intro rewrite.
4. Expertise 3×2 cards.
5. Entity 4-card gateway.
6. Training data + home/training cards + Luma CTAs.
7. Leadership, differentiators, who-we-serve — strip remaining fake numbers.
8. Inner pages as compositions of the same sections.
9. Responsive pass at the existing breakpoints.
10. Content QA against this plan + confirmations file.
11. Visual QA against the original screenshots (geometry, not copy).

Then, and only then, application code.
