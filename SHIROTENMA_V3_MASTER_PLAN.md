# SHIROTENMA V3 — FINAL MASTER PLAN FOR CODING AGENT

**Status:** FINAL PLANNING BRIEF — **NOT AUTHORIZATION TO MODIFY CODE**  
**Project:** ShiroTenma personal portfolio and creative commissions  
**Repository:** https://github.com/ShiroTenma/shirotenma-porto  
**Working language for this document:** English (for implementation clarity)  
**Website copy:** English-first draft; existing Indonesian commission details must be preserved unless the owner explicitly approves a translation  
**Design direction:** `SIGNAL / A Personal Creative Archive`  
**Positioning:** Multidisciplinary Designer  
**Tech constraint:** Vue 3 + Vite + Vue Router + existing Tailwind CSS 4 / JavaScript  
**Mobile strategy:** Mobile-first, with progressively richer desktop composition  
**Reference aesthetics:** Nous Research / Hermes Agent and Evangelion-inspired interface language; **do not imitate or reuse proprietary visual assets**  
**Decision status:** Design direction, interaction philosophy, information architecture and engineering guardrails approved as a planning baseline. Artwork, exact bio, any retirement of URLs, pricing changes, and launch remain subject to owner confirmation.

> **Read this first.** This file communicates the owner's desired direction. It does not replace examination of the real repo. Never treat suggested file paths, content entries, or design examples as evidence that those files or artworks exist.

---

## 0. OPERATING CONTRACT — STRICT

### 0.1 First response and authorization boundary

**For the first agent run, operate in READ-ONLY PLANNING MODE.**

You may:
- Read repository files and configuration.
- Inspect existing content and static assets.
- Review routes, components, CSS, dependencies, test configuration and deployment settings.
- Propose wireframes, CSS design tokens, refactor maps and migration sequences **in your response**.
- Report issues and ask only genuinely blocking, specific questions.

You must **NOT**:
- Edit, create, move, rename or delete files in the repository.
- Install or upgrade dependencies.
- Run commands that write to project files (including auto-fix lint, format, generators or snapshot updates).
- Make Git commits, push branches, open a PR, deploy, alter production settings, or modify live content.
- Replace original images, prices, testimonials, contact destinations or public URLs.
- Assume an existing screenshot / benchmark / test result if none was observed.

**Explicit, subsequent owner authorization is required before any write operation.** When authorization arrives, clarify the approved phase and follow it, rather than treating this master plan as blanket approval. Do not push, merge or deploy without separate explicit permission, even after code edits are permitted. Respect any more restrictive instructions given by the owner.

### 0.2 Required first deliverable (before coding)

Return a concise but evidence-backed **Phase 0 Audit Report** including:
1. Confirmed stack and exact versions from the current checkout.
2. Current routes, views, reusable components and feature inventory.
3. Inventory of portfolio categories, artworks, videos/embeds, testimonials, services/prices and contact links.
4. Concrete architecture, UX, accessibility, SEO and performance issues, with file paths and evidence. Distinguish confirmed problems from risks/hypotheses.
5. Proposed V2 → V3 route/content mapping and preservation plan.
6. Mobile-first design proposal and representative homepage layout.
7. Phase-by-phase implementation plan with test / review gates.
8. List of decisions that still require owner approval.
9. Statement: **“No repository files were modified.”** Only say this when true.

Do not jump from audit to implementation without explicit permission.

### 0.3 Decision precedence

1. Latest explicit owner instructions.
2. This master plan's **confirmed choices**.
3. Real, current repository state for existing functionality, content and exact code.
4. Recommendations in this document, marked *proposed* or *draft*.
5. Agent's own judgment (must be disclosed when material).

Where information conflicts, **flag the conflict**; do not quietly invent an answer.

---

## 1. PROJECT GOAL AND SCOPE

ShiroTenma V3 is a **personal creative space** that displays work across multiple disciplines and also allows visitors to inquire about commissions.

This is **not** a corporate design agency website, generic startup/SaaS landing page, online CV, full-stack product dashboard, or cosplay replica of a fictional interface.

### 1.1 Outcomes to optimize

- Strong, distinctive personal identity.
- Artwork-first portfolio experience.
- Clear access for both **portfolio viewers** and **potential commission clients**.
- Honest representation of design, photography, motion, UI/UX and web coding work.
- Easy category browsing and readable project detail pages.
- Clean, responsive mobile experience.
- Accessible navigation and interactions.
- Maintainable Vue 3 code with no unnecessary dependencies or abstractions.
- Safe migration and retention of ALL existing content until owner-approved curation decisions.
- Performance and SEO improvements, only claimed after measurement.

### 1.2 Confirmed owner choices

| Decision | Locked direction |
| --- | --- |
| Brand positioning | Multidisciplinary Designer |
| Public identity | Casual/personal; do **not** disclose academic status or degrees |
| Core concept | SIGNAL / A Personal Creative Archive |
| Aesthetic | Dark Experimental Editorial + Technical Minimalism |
| Reference influence | ~50% Evangelion / research UI, ~50% clear modern editorial layout |
| Theme | Dark-first, not mandatory dark/light toggle |
| Main colors | Near-black, warm off-white, Signal Red; amber secondary |
| Hero | **Curated experimental artwork** |
| Navigation | **Simple header with technical labels** |
| Audience | Portfolio viewers **and** potential clients |
| Content model | **Hybrid**: curated featured work plus full archive |
| Legacy content | **Preserve all** and curate what is featured; do not delete silently |
| Motion | **Mixed**: precise UI motion + selective technical animation |
| Responsive strategy | **Mobile-first** |
| Framework | **Vue 3 + Vite**, no migration |
| UI quality | Explicit anti-AI-slop design constraints |
| Code quality | Simple, readable, maintainable; no boilerplate for its own sake |

### 1.3 Public identity and tone

**Never** call the owner an Informatics/Computer Science student, graduate, degree holder, or academic credential holder on the website. Avoid calling them a “junior developer” in public-facing material. Do not imply seniority, corporate employment or client experience not evidenced by real work.

The owner is comfortable with a hobbyist/personal creative identity; avoid forcing “hobbyist” as an official title. `Multidisciplinary Designer` is a thematic description of their work, not a credential claim.

**Draft hero text — approval required before publishing:**

> A SPACE FOR THINGS I CREATE.  
> Design, motion, photography, and experiments for the web.

**Draft casual bio — approval required:**

> Hi, I'm ShiroTenma. I make visual work, explore digital design, and enjoy building things for the web.

No invented accomplishments, awards, certifications, years of experience, conversion rates, case-study research, project outcomes, clients or testimonials. Do not pad writing with generic claims such as “passionate about crafting meaningful experiences” without concrete evidence. Prefer concise, human copy.

---

## 2. CURRENT REPOSITORY — PREVIOUSLY OBSERVED, MUST REVERIFY

High-level inspection in November 2026 observed:

- `package.json`: Vue 3.5.x, Vite 7.x, Vue Router 4.x, Pinia 3.x, Tailwind CSS 4.x, Vitest, ESLint and Prettier.
- `src/App.vue`: shared header, `RouterView`, back-to-top and footer.
- `src/main.js`: registers Vue, Pinia, Router, custom `inview` directive and global CSS.
- `src/router/index.js` routes: `/`, `/portfolio`, `/commission`, `/contact`, `/about`, `/aboutrl`.
- Views observed: `HomeView.vue`, `PortfolioView.vue`, `CommissionView.vue`, `ContactView.vue`, `AboutView.vue`, `AboutRealLife.vue`.
- `src/components/` groups for home, about, portfolio, commission, contact and shared components.
- `PortfolioView.vue` contains sizeable inline categories, works and gallery arrays, plus eager `import.meta.glob` image references.
- `CommissionView.vue` contains inline packages, options, testimonials, modal and contact behavior.
- Images under `src/assets/images/`; CSS includes Tailwind, base, portfolio and commission styles.
- `vercel.json` is present to support SPA deep-link refresh.

All paths and versions above are **historical observations**, not guaranteed to match the agent's checkout.

**Known review candidate:** A displayed price string appeared as `Rp. 60.0000`. Flag for approval; **do not silently correct to an assumed price**. Existing testimonials may require verification of public permission and authenticity; don't fabricate replacements.

### 2.1 Audit before any design implementation

Inspect:
- All entries in `package.json`, scripts, lockfile and config.
- Every router entry, navigation destination, internal and external links.
- All current pages, nested components and shared UI.
- Images, alternate text, dimensions, video embeds, load patterns, animations.
- The commission modal, pricing tables, client contact flow and popup states.
- CSS cascade, responsive breakpoints, Tailwind usage, duplicated styles.
- State management usage (remove or retain Pinia only after assessing real usage).
- Existing tests and runtime errors.
- Current live site if accessible, but do not infer unverified behavior from source alone.
- Publicly linked URLs and Vercel SPA routing.

**Audit protocol:** Give each confirmed issue a file path, severity, user impact and proposed remedy. Distinguish `Confirmed`, `Likely`, `Needs measurement`, and `Needs owner decision`.

---

## 3. BRAND / ART DIRECTION

### 3.1 Creative thesis

**SIGNAL / A Personal Creative Archive**

Imagine a curated digital archive or experimental research interface that happens to be someone's personal portfolio. Editorial hierarchy establishes clarity; technical labels, rules, index numbers, panels and controlled motion give it character.

Use inspiration from research-oriented design and Evangelion's systematic graphic language: strong type, purposeful grid, restrained alerts/markers and information organization.

**Never** replicate official NERV branding, copyrighted screenshots, logos, character graphics, or an identifiable third-party website layout. Build an original visual identity and use the owner's approved artworks.

### 3.2 Art direction principles

1. **Artwork is the protagonist.** UI frames, never competes with, selected work.
2. **Functional technical language.** Indices, labels, categories and metadata reflect real content.
3. **High contrast, not endless neon.** Text readability overrides theatrics.
4. **Personal, not corporate.** Copy should be direct, creative and human.
5. **Structured asymmetry.** Create deliberate compositions with consistent alignment.
6. **Restraint.** If an effect or component does not improve comprehension, navigation, identity or enjoyment, remove it.
7. **Mobile is a first-class experience**, not a shrunk desktop poster.

### 3.3 Design tokens — proposed v1 values

Use CSS variables as the source of truth. Adjust only if contrast measurements or owner review warrants it.

| Token | Hex | Purpose |
| --- | --- | --- |
| `--color-canvas` | `#0B0D10` | Page background / VOID |
| `--color-panel` | `#181B20` | Panel and surfaces |
| `--color-text` | `#F0F0EB` | Main text / IVORY |
| `--color-muted` | `#A5ABB4` | Secondary text |
| `--color-red` | `#EF4B42` | Signature accent / interactive highlight |
| `--color-amber` | `#E8AD57` | Secondary accent / select metadata |
| `--color-border` | `#353A42` | Thin outlines / rules (proposed extension) |
| `--color-focus` | `#F0F0EB` | Visible keyboard focus (proposed extension) |

Use red as the dominant brand accent and amber sparingly. Do **not** automatically use red for every warning/error; define semantic `error/success/info` colors separately only when the UI actually needs them. Avoid low-contrast red text on similarly dark colored surfaces; verify actual contrast.

Suggested visual distribution (rough, not literal pixel requirements):
- 65% canvas
- 20% panel / layered background
- 10% light text / artwork framing
- 4% red
- 1% amber

Do not let this ratio prevent artwork from displaying its own colors.

### 3.4 Typography

**Proposed**, not mandatory until reviewed:
- Display/headline: Space Grotesk or another strong, clean grotesk.
- Body: Inter, DM Sans or similarly legible sans.
- Metadata: IBM Plex Mono / system monospace.

Rules:
- Ideally two font families total, with monospace only for technical metadata; avoid downloading three large variable fonts if not needed.
- Mobile headings should fit without overflow. Use `clamp()` judiciously.
- Avoid decorative faux-technical fonts for body text.
- Use uppercase selectively for labels, not paragraphs.
- Keep line length readable (~55–75 characters for long copy).

### 3.5 Grid, spacing and components

- Start at **mobile 4-column** content grid with sensible outer padding (e.g. 16–20px).
- Tablet: 8-column conceptual grid; desktop: 12-column.
- Desktop content max width approximately 1200–1280px.
- Spacing scale based on 4px, primarily 8 / 12 / 16 / 24 / 32 / 48 / 64.
- Prefer squared or subtly rounded edges (0–8px where appropriate), not “everything rounded 24px”.
- Thin solid borders for information separation; avoid layers of nested boxed cards.
- Project cards should prioritize actual images and titles. No fake metric dashboards.
- Limit persistent decorative elements; avoid visual noise from multiple stacked toolbars/status strips.

### 3.6 Visual motifs (allowed)

Use a small, consistent vocabulary:
- `01 / SELECTED WORK`, real project sequence numbers.
- Real category labels such as `GRAPHIC DESIGN`, `MOTION`, `WEB`.
- Thin horizontal/vertical divider rules.
- Simple framing corners / crop marks used sparingly.
- A meaningful archive index or filter state.
- One curated hero composition / artwork.
- Mild asymmetrical grid at larger viewport widths.

**Disallowed default motifs:**
- Fake terminal typing logs, fake telemetry, fake CPU percentages, fake loading “system checks”.
- Random floating shapes, animated orb backgrounds, gratuitous glowing outlines, endless neon gradients.
- Decorative hazard signs everywhere; misleading warnings and fake “classified access”.
- Decorative ASCII art and random serial numbers without meaning.
- Unnecessary glassmorphism, gratuitous blur, heavy drop shadows.
- Generic AI-generated hero art used as if it were the owner's portfolio work.
- Generic SaaS layouts with icon cards and invented performance KPIs.

---

## 4. INFORMATION ARCHITECTURE

### 4.1 Primary navigation

**Simple header with technical labeling**. Mobile: compact accessible menu; desktop: visible top-level links.

Recommended V3 navigation:

`SHIROTENMA.  |  WORK  |  ABOUT  |  SERVICES  |  CONTACT ↗`

Navigation is human-readable; the visual styling can use tasteful indices or markers, e.g. `01 / WORK` on desktop, but **do not make ordinary navigation cryptic**.

### 4.2 Pages

| Page | Primary task | Key content |
| --- | --- | --- |
| Home `/` | Establish identity; lead into work | Curated artwork hero, featured projects, disciplines, CTA |
| Work `/work` (proposed) | Explore full portfolio | Filter/category chips, grid, project detail links |
| Detail `/work/:slug` (proposed) | Inspect a specific project | Hero, real metadata, overview, media, process/outcome where applicable |
| About `/about` | Meet creator | Casual bio, disciplines, tools/interests, contact links |
| Services `/services` (proposed) | Evaluate commission offering | Real service packages, options/prices, process, inquiry CTAs |
| Contact | Inquiry action or optional page | Verified communication methods; avoid unnecessary new form/backend |

A separate `/contact` route is optional if a page is already meaningful. Do not remove an existing route without a tested redirect and owner approval.

### 4.3 Legacy URL compatibility (PROPOSED; verify first)

| Existing URL | Candidate V3 behavior |
| --- | --- |
| `/` | Home remains `/` |
| `/portfolio` | Keep available or redirect to `/work` after approval |
| `/commission` | Keep available or redirect to `/services` after approval |
| `/contact` | Keep functional; either preserve or forward to a meaningful contact destination after approval |
| `/about` | About continues |
| `/aboutrl` | Audit purpose and real links; do not delete without approval |

**Do not break shared URLs.** If using SPA route rewrites, retain correct Vercel config. If changing URL slugs, define and test redirects (including direct navigation and refresh), and preserve history semantics.

### 4.4 Portfolio taxonomy

A hybrid browsing model:

- `All Work`
- `Graphic Design`
- `Motion & Video`
- `Photography`
- `UI/UX`
- `Web & Code`

A single project may have several tags, but must have **one primary display category**. Avoid many near-duplicate category names. Categories with no approved project should not render empty “coming soon” cards.

**Featured Work:** Curate a small cross-disciplinary set for the homepage, initially about 3–5 real projects; this is a recommendation, not an instruction to invent projects.

**Archive:** Preserve all valid existing works in structured data and make them discoverable, potentially grouped or paginated. Curation affects homepage prominence, **not content deletion**.

**Project Detail Levels:**
- **Case study** for genuine design/dev projects with meaningful problem, constraints, decisions, process and outcome.
- **Visual gallery** for photography, poster work, motion/editing or work that does not warrant a fictional case study.
- No fabricated personas, user research, usability results or performance metrics.

---

## 5. WIREFRAME / PAGE SPECIFICATIONS

### 5.1 Mobile-first homepage (~360–430px)

Order and intent:

```text
┌────────────────────────────────┐
│ SHIROTENMA.              [MENU]│  Header
├────────────────────────────────┤
│ 00 / PERSONAL ARCHIVE          │  Meaningful eyebrow
│ A SPACE FOR                    │
│ THINGS I CREATE.               │  Strong editorial title
│ Brief, human intro             │
│ [ EXPLORE WORK ↗ ]             │  Clear CTA
│                                │
│ [CURATED EXPERIMENTAL ARTWORK] │  Large visual, real asset
├────────────────────────────────┤
│ 01 / FEATURED WORK             │
│ [Project image]                │
│ Project title / category       │
│ [Project image]                │
│ Project title / category       │
│ [Project image] ...            │
│ VIEW ALL WORK ↗                │
├────────────────────────────────┤
│ 02 / WHAT I EXPLORE            │
│ Visual / Motion / Photo /      │
│ UI/UX / Web                    │
├────────────────────────────────┤
│ 03 / COMMISSIONS               │
│ Real services summary          │
│ [ VIEW SERVICES ↗ ]            │
├────────────────────────────────┤
│ 04 / CONTACT                   │
│ [ GET IN TOUCH ↗ ]             │
├────────────────────────────────┤
│ Verified links / footer        │
└────────────────────────────────┘
```

**Mobile requirements:**
- Header menu is keyboard- and touch-accessible, with proper expanded state and close behavior.
- CTA taps at least ~44×44 CSS px where practical; ensure sufficient hit area and spacing.
- Hero artwork must scale/crop deliberately and have suitable alt or decorative semantics.
- No horizontal overflow at 320px and commonly used phone widths.
- No hover-only content; filter and project controls must work by tap.
- No perpetual/glitch/flash animation on load.
- Long project names and localization must wrap without clipping.

### 5.2 Desktop homepage (~1280–1440px)

```text
┌──────────────────────────────────────────────────────────────┐
│ SHIROTENMA.       WORK    ABOUT    SERVICES    CONTACT ↗     │
├──────────────────────────────────────────────────────────────┤
│ 00 / PERSONAL ARCHIVE                                        │
│                                                              │
│ A SPACE FOR THINGS             ┌──────────────────────────┐  │
│ I CREATE.                      │ CURATED HERO ARTWORK     │  │
│                                │ Visual focal point       │  │
│ Short personal intro           └──────────────────────────┘  │
│ EXPLORE WORK ↗                                               │
├──────────────────────────────────────────────────────────────┤
│ 01 / FEATURED WORKS                           VIEW ALL ↗     │
│ ┌─────────────────────────┐ ┌────────────────────────────┐   │
│ │ real artwork 01         │ │ real artwork 02            │   │
│ └─────────────────────────┘ └────────────────────────────┘   │
│ title / type                title / type                     │
│ ┌─────────────────────────┐ ┌────────────────────────────┐   │
│ │ real artwork 03         │ │ real artwork 04            │   │
│ └─────────────────────────┘ └────────────────────────────┘   │
├──────────────────────────────────────────────────────────────┤
│ 02 / DISCIPLINES   short authentic intro and links          │
├──────────────────────────────────────────────────────────────┤
│ 03 / COMMISSIONS   actual services       VIEW SERVICES ↗     │
├──────────────────────────────────────────────────────────────┤
│ 04 / CONTACT       human CTA             GET IN TOUCH ↗     │
├──────────────────────────────────────────────────────────────┤
│ Footer / copyright / verified links                          │
└──────────────────────────────────────────────────────────────┘
```

The hero is asymmetrical but **not** a generic split SaaS hero. Curated artwork must be real, approved, appropriately framed and visually dominant. A single striking image is preferable to an uncurated collage.

### 5.3 Work archive

- Compact intro: archive label + short explanation.
- Filter chips/segmented category controls with clear selected state; filters can work without full page reload.
- Image-forward grid, 1 column on small screens; 2 columns where width allows; editorial variation on desktop only when it helps hierarchy.
- Card content: real preview, title, type/tags, optional year (only if verified).
- Empty filter result: clear message, reset action; no phantom placeholder project.
- Project count labels must reflect actual data, never fake telemetry.
- If lots of entries: lazy loading / pagination or progressive rendering where it improves usability, but don't preemptively add a complex virtualized list.
- Videos should have safe thumbnails, explicit play/open actions and accessible descriptions.

### 5.4 Project detail

Project detail is not one overcomplicated universal marketing template. Support two valid formats:

**Visual project:** title, role/type, year if known, lead image, gallery or embed, short meaningful description, next/previous project.

**Case study:** title, role/team/contribution, problem, constraints, approach, relevant artifacts, implementation, verified outcomes, reflection, links to live demo/GitHub where applicable.

Important:
- “Process” section only when documented; don't invent polished process diagrams.
- External media embeds should avoid automatic playback.
- Gallery lightbox must close with Escape, have sensible focus behavior and work on touch.
- Account for image aspect ratios and progressive loading.

### 5.5 About

- Personal introduction; no education, degree or student-status mention.
- Disciplines, interests and tools based on actual experience.
- No fake proficiency meters or “90% JavaScript”.
- Show development/UI/UX as exploration and actual projects, without falsely claiming advanced expertise.
- Optionally show a personal portrait only if the owner supplies/approves it.
- Honest, concise copy; not an unsolicited resume.

### 5.6 Services and inquiries

- Existing commission types, options, ranges, terms, actual prices, details and contact methods retained.
- Clearly group offerings and their inclusions; avoid dense modal-only navigation if a clearer inline layout serves visitors better.
- If using modals, implement accessible focus, scroll-lock cleanup and keyboard interaction.
- Any suspicious price string, missing details or currency formatting is an **owner review item**.
- No invented booking, checkout, invoice, payment gateway or service guarantee.
- Contact CTA links go only to verified destinations.
- Do not expose private phone/email data that is not already intended to be public.

---

## 6. INTERACTION AND MOTION SYSTEM

**Motion decision: MIXED**, within a moderate overall budget.

### 6.1 Allowed motion layers

1. **Base / precise:** hover, focus, expand/collapse, modal opening and simple page transitions where justified.
2. **Signature / technical:** one or two expressive treatments, such as an understated divider trace, title mask reveal or image transition.
3. **Artwork:** only motion native to the media if user-triggered or accessible.

### 6.2 Rules

- Most UI transitions: roughly 150–300ms; larger section reveals may be ~300–500ms, tuned by actual usability.
- Avoid page-wide intro loaders, repeated flicker, cursor trails, endless parallax and intrusive glitch text.
- `prefers-reduced-motion: reduce` must meaningfully reduce or disable nonessential animation.
- Don't animate layout properties (`top`, `left`, `width`) when `transform`/`opacity` can accomplish the same effect.
- Use IntersectionObserver only when genuinely needed, clean up listeners/observers and avoid duplicate directive/composable implementations.
- Avoid route transition bugs with scroll restoration, focus, overlays and hydration-like delays.
- Never use visual “loading” simulations that imply background work which isn't occurring.

### 6.3 Motion budget

Each page may include **at most one clearly expressive signature effect by default**. Other interactions should be quiet and functional. This is a design guardrail, not a reason to suppress useful feedback.

---

## 7. ANTI-AI-SLOP: DESIGN REVIEW GATE

The phrase “anti-AI-slop” is translated into **reviewable constraints**, not just an aesthetic slogan.

### 7.1 Must pass

- Can a visitor understand identity + navigation + how to see work without deciphering decorative labels?
- Does each technical marker correspond to a real category, state, project index or meaningful information?
- Does the hero use approved work rather than generic AI illustration presented as owned?
- Are headline and supporting copy specific, human and free from inflated claims?
- Is the layout visibly art-directed (rhythm, alignment, intentional whitespace), not 12 identical cards?
- Are there meaningful differences among project previews rather than templated identical treatment?
- Is contrast readable on actual devices? Are active, hover and focus states distinguishable?
- Does the site remain attractive with reduced motion and images loading slowly?
- Does mobile feel purpose-designed rather than simply stacked desktop cards?
- Is decorative UI sufficiently restrained that portfolio media remains the focus?

### 7.2 Automatic red flags to revise

- Generic “Hi, I'm X and I build amazing experiences” giant gradient hero with arbitrary floating blobs.
- Glassmorphism panels applied everywhere.
- More than one conflicting accent / glow aesthetic per area.
- Excessive red/amber flashing, warning tape, red alert badges or nonsensical faux system statuses.
- Unreadable tiny monospace paragraphs or uppercase body copy.
- Unnecessary icons preceding every line of text.
- Fake availability indicators, “currently loading creativity”, pseudo-random telemetry.
- Framer-style motion libraries imported for ordinary CSS hover effects.
- Placeholder content, fake awards/client quotes or fabricated project metrics.
- An interface that visually overpowers and buries real creative work.

### 7.3 Practical critique method

At each checkpoint, report:
- One thing that works well (with reason).
- Up to three highest-impact issues (with reason).
- Concrete adjustments.
- Screenshot references or viewport descriptions **only if actually produced**.

Do not say “looks professional” as a substitute for critiquing actual layout.

---

## 8. CLEAN CODE / ANTI-AI-SLOP ENGINEERING GATE

### 8.1 Architecture policy

- **Keep Vue 3 + Vite + Vue Router**, Composition API and `<script setup>` where already established.
- Keep JavaScript unless owner explicitly asks for TypeScript.
- Prefer built-in Vue, CSS and browser APIs over adding libraries.
- Keep Tailwind CSS 4 if useful; do not duplicate every declaration in Tailwind and standalone CSS.
- Introduce Pinia state only for real cross-page state; audit current usage before deciding to retain or remove it.
- No backend, CMS, database, authentication, e-commerce or analytics service without a real requirement.
- No “future-proof” layers built for hypothetical scale.

### 8.2 Scope and simplicity rules

- A component should solve a recognizable reuse, complexity or separation problem.
- A composable is justified for reusable stateful logic, not a one-off 5-line wrapper.
- Avoid giant views with inline multi-hundred-line datasets; extract project/service data cleanly.
- Avoid abstract `BaseEverything`, excessive render props, dynamic component factories or deeply generic config schemas.
- Avoid 1-file-per-trivial-element architecture and 10-line utility wrappers.
- Avoid duplicated state and watchers that can be replaced by computed values.
- Handle null/missing media gracefully, without silently hiding significant failures.
- Prefer explicit DOM semantics (`button`, `a`, `nav`, `main`, `figure`) over click handlers on generic `div`.
- Avoid hard-coded magic numbers scattered in CSS; use only as many tokens as actually needed.
- Prefer simple class naming, intentional comments, and readable event handlers.
- No unused packages/imports, debug logs, test artifacts or dead code.
- Favor smaller, reviewable diffs; never rewrite unrelated features during a local refactor.

### 8.3 Proposed code organization (only after audit)

```text
src/
├── assets/
│   ├── images/
│   └── styles/
│       ├── tokens.css
│       ├── global.css
│       └── typography.css
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue
│   │   └── AppFooter.vue
│   ├── ui/
│   │   ├── ProjectCard.vue
│   │   └── FilterTabs.vue
│   ├── portfolio/
│   │   └── ProjectLightbox.vue
│   └── services/
├── data/
│   ├── projects.js
│   ├── services.js
│   └── profile.js
├── views/
│   ├── HomeView.vue
│   ├── WorkView.vue
│   ├── ProjectDetailView.vue
│   ├── AboutView.vue
│   └── ServicesView.vue
├── router/
├── composables/     # Only when justified
├── App.vue
└── main.js
```

This is an **illustrative target**, not a command to create every file/folder.

### 8.4 Suggested normalized project schema (concept, not required library)

```js
{
  id: 'stable-project-id',
  slug: 'descriptive-url-slug',
  title: 'Verified project title',
  primaryCategory: 'graphic',
  tags: ['graphic'],
  featured: true,
  summary: 'Owner-approved factual summary',
  cover: /* existing asset reference */,
  media: [/* existing image/video references */],
  detailType: 'gallery', // or 'case-study'
  links: { /* only verified destinations */ }
}
```

Ensure `featured`, category filters and project routes derive from a **single source of truth**. Do not transform all existing assets into manual imports if the current Vite glob strategy can be safely adapted. If adjusting `import.meta.glob`, compare bundle output and image behavior before/after.

### 8.5 Comment and naming policy

- Names should describe user/domain intent (`ProjectCard`, `commissionOptions`, `activeCategory`), not generated abstractions (`useUniversalDataProviderFactory`).
- Comments explain *why*, not “set state to true”.
- Preserve established conventions unless consistency measurably improves.
- Do not rewrite existing code solely to make it stylistically resemble an agent's preference.
- No speculative compatibility shims or fallback chains without an actual supported use case.

---

## 9. PERFORMANCE, SEO, ACCESSIBILITY AND PRIVACY

### 9.1 Performance

- Audit image sizes and formats; prioritize large project media and hero assets.
- Consider responsive images, `srcset`, `sizes`, lazy loading below the fold and explicit dimensions.
- Do **not** lazy-load the main LCP image without measuring the impact.
- Audit eager `import.meta.glob` and whether image transforms/asset references cause needless initial downloads; eager asset URL imports do **not by themselves prove all image bytes are downloaded**.
- Prefer route-level dynamic imports where appropriate.
- Avoid auto-playing heavy video embeds in the archive.
- Audit initial JavaScript, CSS, image payload, LCP, CLS and INP using actual measurements when tooling is available.
- State test environment and note if real-device/network measurement was unavailable.

### 9.2 SEO

- Ensure each meaningful route has a unique title, description and share preview where practical.
- Check canonical URLs, Open Graph image, `robots.txt`, sitemap strategy and semantic headings.
- This is currently a Vue SPA: if SEO discoverability is a priority, evaluate prerendering options **without switching framework**, but do not silently add a major build dependency or service-rendering architecture.
- Confirm route handling on Vercel for direct links, refresh and 404.
- Do not claim a score/SEO improvement without measurement.

### 9.3 Accessibility

- Semantic regions (header/nav/main/footer), logical heading order.
- Keyboard navigation including menu, filters, modals and gallery.
- Visible focus states, accessible name for icon-only controls.
- Color contrast target WCAG AA for normal text; verify real color pairings.
- Suitable alt text for informative images and empty alt for decoratives.
- Real buttons for actions and links for navigation; appropriate labels.
- Escape/focus restore for overlays; no keyboard trap bugs.
- Reduced-motion compliance, no seizure-provoking flashes.
- Never hide essential content behind hover-only interactions.

### 9.4 Privacy and safety of public content

- No credentials, tokens or private contact records in the repo.
- Only use intended public inquiry channels and approved contact URLs.
- Confirm permission before displaying identifiable client quotes/portraits.
- External embeds may create third-party requests; avoid auto-loading every embedded reel if a thumbnail/link works.

---

## 10. PHASED DELIVERY ROADMAP AND REVIEW GATES

**Important:** This roadmap describes future implementation **only after separate approval**. The current agent assignment is planning/audit.

### Phase 0 — READ-ONLY AUDIT & PRESERVATION MAP

Deliver:
- Repo/feature/content inventory with precise paths.
- Design risks, quality opportunities and confirmed bugs.
- URL/asset and contact preservation map.
- List of content questions requiring owner input.
- Phase 1 bounded implementation proposal.

**Gate 0:** Owner approves audit conclusions, selected hero artwork candidates and first implementation scope.

### Phase 1 — DESIGN FOUNDATION (approval required before writes)

Future tasks:
- Tokens, layout rules, typography proof, header and mobile menu design.
- Real asset candidate comparison and initial high-fidelity homepage.
- Demonstrate mobile 375px first, then 768px and 1440px desktop.
- Review visually before spreading design across pages.

**Gate 1:** Owner approves actual homepage screenshots / preview.

### Phase 2 — HOMEPAGE IMPLEMENTATION

Future tasks:
- Implement approved homepage composition in Vue.
- Curated hero artwork, meaningful labels, selected works, services and contact CTAs.
- Functional header, navigation and responsive behavior.
- Validate reduced-motion, focus, imagery and performance.

**Gate 2:** Owner verifies homepage look/feel and interactions.

### Phase 3 — DATA & WORK ARCHIVE

Future tasks:
- Extract genuine projects/media into data modules.
- Build Work archive, filters and project detail templates as appropriate.
- Preserve old gallery assets, embed links, and lightbox behavior.
- Maintain links and review redirects before enabling them.

**Gate 3:** Cross-check every old work against the preservation inventory.

### Phase 4 — ABOUT, SERVICES & CONTACT

Future tasks:
- Personal bio without academic disclosure.
- Honest tools/interests/skills, no fake meters.
- Preserve real commission packages, terms, price options and destinations.
- Simplify modal/inquiry experiences without losing functionality.
- Request owner approval for copy/prices/testimonials before publishing changes.

**Gate 4:** Owner signs off on content accuracy and inquiry flow.

### Phase 5 — HARDENING & LAUNCH PREPARATION

Future tasks:
- Accessibility and keyboard verification.
- Mobile / tablet / desktop QA.
- Performance, SEO and link checks.
- Tests of filters, routing, modal and lightbox.
- Record metrics and before/after findings if tested.
- Prepare rollout and rollback plan.

**Gate 5:** Owner explicitly approves any commits/PR/merge/deployment as relevant. Never assume “implement” means “deploy”.

---

## 11. TEST MATRIX / ACCEPTANCE CRITERIA

### Functional

- [ ] Home, Work, detail, About, Services and contact destinations navigate correctly.
- [ ] Original `/portfolio`, `/commission`, `/contact`, `/about`, `/aboutrl` links retain intentional behavior.
- [ ] Deep links work on refresh (Vercel or local preview configuration as applicable).
- [ ] Work filter produces correct results and a sensible empty state.
- [ ] Selected project opens correct details; no wrong images or missing content.
- [ ] Images, video links/embeds and gallery/lightbox work on touch and keyboard.
- [ ] Commission package information and real contact CTAs are accurate.
- [ ] Overlays close properly; body scrolling and focus are restored.
- [ ] No unapproved content deletion, made-up copy, fake testimonials or private data exposure.

### Responsive

- [ ] No horizontal scrolling at 320px / 360px / 375px / 390px / 430px.
- [ ] Layout remains coherent around 768px and 1024px.
- [ ] Desktop layout tested at approximately 1280px and 1440px.
- [ ] Project thumbnails retain appropriate ratios; key subjects aren't unintentionally cropped.
- [ ] Tap target size, text wrapping and navigation usability verified.

### Accessibility and motion

- [ ] Keyboard-only navigation works for critical tasks.
- [ ] Visible focus states and semantic control labels.
- [ ] Alt text/semantic image treatment.
- [ ] WCAG AA text contrast checked, with real results where possible.
- [ ] Reduced-motion setting eliminates nonessential expressive effects.
- [ ] No flashing, intrusive autoplay, focus-loss or inaccessible modal interactions.

### Code and regressions

- [ ] `npm run build` succeeds after implementation is approved.
- [ ] `npm run test:unit` succeeds or failures are honestly explained.
- [ ] Lint checked in a non-destructive form when the existing lint script uses `--fix`.
- [ ] No unjustified new packages.
- [ ] No dead/duplicate components, unused imports or exaggerated abstraction layers.
- [ ] Each meaningful change is small enough to review and connected to a stated user-facing requirement.

### Content

- [ ] Existing artwork/media inventory reconciled (preserved, reclassified, or explicitly approved removal).
- [ ] Featured art approved and belongs to / may be used by owner.
- [ ] Exact commission prices and testimonials explicitly verified.
- [ ] No education/student/degree disclosure in public copy.
- [ ] No invented project results, skills, clients or case-study research.
- [ ] All outbound links confirmed.

### Performance / discoverability

- [ ] Hero image handling and below-fold loading reviewed.
- [ ] Bundle and media sizes measured where possible.
- [ ] Page titles and metadata reviewed.
- [ ] No untested claim of faster load or improved SEO.
- [ ] No breakage in public route refresh.

---

## 12. REQUIRED REPORT FORMAT FOR EVERY PHASE

For each phase response, structure the report as follows:

1. **Phase and permission scope:** Is this read-only? What precise edits, if any, were authorized?
2. **What was inspected:** Relevant real paths and observed behavior.
3. **Findings:** Confirmed vs hypothetical; severity and impact.
4. **Proposed changes / completed changes:** Keep these distinct.
5. **Content preservation:** Assets, URLs, prices, contact links and features accounted for.
6. **Testing/verification:** Command, environment, actual result; no invented claims.
7. **Outstanding issues and owner decisions:** Only genuine blockers.
8. **Next phase proposal:** A bounded, reviewable scope.
9. **Write status:** Explicitly state whether any files were modified, commits created, or deployments made.

If the agent has no reliable access to an asset or live site, say so and request that exact input; do not assume.

---

## 13. WHAT “DONE” MEANS

**Planning done** means: an accurate repository audit and an approved, actionable redesign strategy with wireframes, a design-system proposal, preservation map, quality gates and bounded next phase.

**Implementation done** (future, only when approved) means:
- Distinctive dark editorial SIGNAL visual system with red + restrained amber.
- Original, approved experimental hero artwork.
- Simple navigation with meaningful technical labels.
- Curated featured work and discoverable complete work archive.
- Honest About and functional commission/contact journeys.
- Mobile-first layout and keyboard-friendly interactions.
- Intentional mixed motion with reduced-motion fallback.
- Existing content/functionality preserved or intentionally, explicitly changed.
- Vue 3/Vite code remains concise and maintainable.
- Documented tests and actual QA evidence.
- Owner-approved release; no surprise deployment.

---

## 14. COPY-PASTE FIRST INSTRUCTION TO THE AGENT

> Read `SHIROTENMA_V3_MASTER_PLAN.md` completely and examine the actual repository `ShiroTenma/shirotenma-porto`. Treat this as a read-only Phase 0 audit. Do not modify files, run auto-fix commands, install packages, commit, push, open PRs, or deploy. Inventory the existing content, routes, gallery/media, commission prices and contact flows; compare them with the proposed SIGNAL V3 direction. Report concrete findings with file paths, a V2-to-V3 preservation map, a mobile-first homepage concept, any decisions requiring approval, and a staged implementation plan. Explicitly confirm whether the repository was modified. Wait for my authorization before implementation.

---

## 15. FINAL REMINDERS

- **Distinctive is good; cryptic is not.**
- **Experimental is good; unreadable is not.**
- **Concise code is good; code golf is not.**
- **Curation is good; deleting legacy artwork without approval is not.**
- **Personal is good; fictional credentials or fabricated project outcomes are not.**
- **Read and plan now. Write later, only when authorized.**
