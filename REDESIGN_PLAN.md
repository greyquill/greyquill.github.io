# Greyquill Website Redesign — Tracking Plan

**Branch:** `redesign/aligne-style-relaunch` (do NOT merge to main until user-approved)
**Started:** 2026-05-02
**Owner:** Amarnath
**Reference inspirations:** https://www.aligne.ai/ (narrative arc, single-purpose feel), https://www.reltio.com/ ("trusted data before AI" framing)

> **Why this doc exists:** Cross-session tracking. Read this first in any new session before touching the redesign branch. Update task statuses as work progresses; do not let it drift from reality.

---

## 1. Strategic Positioning (locked)

### Headline thesis
**"Compliant AI starts with governance you can prove — and trusted data you can stand behind."**

A fusion of Aligne's governance-first framing with Reltio's "data foundation before AI" thesis, expressed in *our* voice.

### Ideal Client Profile
- **Buyer titles:** Head of AI / CDO / CIO / CTO / Chief Risk or Compliance Officer
- **Company shape:** Regulated mid-market enterprise (BFSI, Healthcare, Public Sector, Telecom)
- **Trigger:** Wants to deploy generative or agentic AI safely, but lacks the data foundation, governance scaffolding, or model lifecycle controls to do it without regulatory or reputational risk.
- **Geography:** US, UK, EU, Middle East, ANZ, India

### What we do NOT say (constraints)
- **No fabricated metrics.** No "10+ years / 50+ clients / £X delivered" style counters. Mirror current site's restraint.
- **Do not name IBM** anywhere on home, products, services, industries, or case studies. IBM appears only on `/partnerships`.
- **Do not copy Aligne's product names** (AXION, ALTRUM). Our products are ours.
- **De-emphasize "Discovery Workshop / Clarity Guarantee"** as the lead. They remain available, but the homepage should feel like a **product/platform company that also consults**, not a consultancy with a workshop offer.

### What we lean on instead
- Specificity in the role we speak to ("If you are a Head of AI…")
- Named, productized offerings with concrete outcomes
- Anonymized case studies tied to industries we've actually served
- A single, sharp narrative diagram (the Dilemma)

---

## 2. The Narrative Arc (homepage section order)

1. **Hero** — Outcome headline + sub + dual CTA (Book a Discovery Call / See How It Works)
2. **The Dilemma** — One diagram: "AI adoption is accelerating. Data trust and governance are not." Names the pain in 3 lines.
3. **Who this is for** — "If you are a Head of AI, CDO, or Chief Risk Officer in a regulated enterprise, you already know…" — short bulleted pain list.
4. **Our approach: a three-tier journey** (replaces "menu of services"):
   - **Diagnose** — See your AI/data risk and readiness clearly.
   - **Govern** — Put trusted data and policy controls in place.
   - **Activate** — Ship governed AI use cases, with oversight that scales.
5. **The platform layer (our products)** — Productized accelerators, not consulting hours:
   - **ClarityAI** — Requirements clarity & risk scoring for AI initiatives. (Live: clarity.greyquill.io)
   - **GQData** — Master data + data-quality engine. The trusted-data foundation under any AI use case.
   - **GQ Agents** *(working name; derived from the Champ swarm framework)* — Multi-agent orchestration with audit trails for regulated workloads.
   - **GQ GST Co-Pilot** *(derived from IBM-GST project)* — Vertical AI accelerator for Indian tax reconciliation; proves we ship governed agentic AI in production.
6. **Proof** — 3 anonymized testimonials/case study cards (telecom, retail, payment gateway).
7. **The Greyquill Method** — Reframed and shortened. Stays in the story but no longer the headline.
8. **Final CTA** — Book a Discovery Call (Calendly).

---

## 3. Product Catalog (source of truth)

| Product | Source repo | Position | Public-facing description (draft) |
|---|---|---|---|
| **ClarityAI** | `~/code/clarity-score-landing` (live at clarity.greyquill.io) | Diagnose tier | "Score the clarity and risk of any AI initiative before you fund it. Built for AI program leaders who need to defend roadmap decisions to the board." |
| **GQData** | New (positioned around watsonx.data / data intelligence / lineage / integration capability) | Govern tier — foundation | "The trusted-data layer beneath your AI. Master data unification, lineage, quality, and sensitive-data protection — so every model, agent, and decision runs on data you can stand behind." |
| **GQ Agents** | `~/code/champ` (Champ swarm) | Activate tier | "Multi-agent orchestration with built-in audit trails, work-packet provenance, and human-in-the-loop checkpoints. Designed for regulated environments where you need to prove what an agent did and why." |
| **GQ GST Co-Pilot** | `~/code/IBM_gst` | Vertical proof point | "An agentic AI co-pilot for Indian GST reconciliation. Demonstrates our governed-agentic-AI stack in production for SMB/mid-market tax teams." |

**Capability vocabulary we can use** (from the watsonx skills the team holds, expressed in vendor-neutral language):
- Data integration (ETL/ELT, real-time streaming) → "real-time data pipelines"
- Data intelligence / governance / lineage → "data lineage, cataloging, and policy enforcement"
- Generative AI tools (watsonx.ai) → "enterprise-grade GenAI tooling"
- Model lifecycle governance (watsonx.governance) → "model lifecycle governance and compliance evidence"
- Identity protection (Verify) → "AI access controls and identity protection"

These capabilities back our products without naming the underlying vendor.

---

## 4. Industries (focused list)

Lead with three, in this order:

1. **Banking, Financial Services & Payments** (esp. payment gateways — proven)
2. **Telecom** (proven)
3. **Retail / Commerce** (proven)

Secondary mention: **Healthcare**, **Public Sector** — listed as "we also serve" without claiming deep references.

---

## 5. Case Studies (anonymized templates to write)

| # | Industry | Working title | Source/inspiration |
|---|---|---|---|
| 1 | Payment Gateway | "Reducing reconciliation drift across a multi-rail payment platform" | Real engagement — anonymize |
| 2 | Telecom | "Operationalizing trusted customer data for a Tier-1 telecom group" | Real engagement — anonymize |
| 3 | Retail | "From dashboard sprawl to a single decision surface for a national retailer" | Real engagement — anonymize |
| 4 | (Stretch) BFSI / SMB tax | "An agentic AI co-pilot for GST reconciliation" | IBM-GST project, anonymized at customer level |

Each follows: Situation → Stakes → Approach → What we built → Outcome (qualitative if no metrics permitted).

---

## 6. Partnerships page (the one place IBM is named)

Route: `/partnerships`

Content:
- "We are an **IBM Silver Business Partner**, certified across the watsonx and Cloud Pak stack."
- Display badge: `public/images/partners/ibm-partner-plus-silver.png` (and `-white.png` on dark backgrounds).
- List capability areas (sales/technical certifications held): watsonx.ai, watsonx.data, watsonx.data intelligence, watsonx.data integration, watsonx.governance, Verify Identity Protection.
- A short paragraph on what this means for clients: "It means our products and engagements run on enterprise-grade, regulator-aware foundations — without locking you into one stack."
- Link back to relevant product pages.

Badge source: `~/Downloads/IBM_Partner_Plus_silver_partner_mark` (already staged in `websire_react/public/images/partners/`).

---

## 7. Visual & brand constraints

- **Primary color:** `#0B4F88` (existing). Keep.
- **Type:** Tektur (display) + Titillium Web (body). Keep.
- **Layout:** Widen current `max-w-5xl` selectively for hero and "dilemma" sections so they breathe. Keep card/component patterns.
- **Diagrams:** Inline SVG (no third-party library) for the Dilemma chart and the three-tier journey. Must render in static prerendered HTML.

### Hero image (locked)
- **Keep** the existing hero image (`websire_react/src/assets/banner-pic.jpeg`). Port it into the Next.js project as-is.
- New copy and motion choreograph *around* the existing image — do not replace it.
- Optimize via `next/image` with priority loading; serve modern formats (AVIF/WebP) automatically.

### Motion & feel (non-negotiable)
The site must feel **hand-crafted**, not AI-generated. Animations are part of the brand, not decoration.

- **60fps target everywhere.** Animate only `transform` and `opacity`. Never `width/height/top/left`. Use `will-change` sparingly and only on elements about to animate.
- **Respect physics.** Custom cubic-bezier easings (e.g. `cubic-bezier(0.22, 1, 0.36, 1)` for entrances; spring physics via Framer Motion for interactive elements). No default `ease-in-out` everywhere.
- **Stagger and choreography.** Hero elements arrive in a deliberate sequence (e.g. eyebrow → headline → sub → CTAs → hero visual), each with a slightly different delay/easing — not a single fade-in.
- **Scroll-linked motion** for the Dilemma diagram and journey tiers. Use `useScroll` + `useTransform` (Framer Motion) bound to section progress, not naive on-scroll triggers.
- **Microinteractions on every interactive element.** Buttons: subtle scale + shadow shift. Cards: lift + border glow. Nav links: animated underline. Each interaction has an entrance, hover, active, and exit state.
- **One signature motion per page** — a small "made with care" detail (e.g. cursor-following highlight on the journey diagram, parallax in the hero illustration, animated stroke-draw on the dilemma SVG). Restraint is the point — one per page, not five.
- **Honor `prefers-reduced-motion`.** All non-essential animation collapses to opacity-only or none.
- **No CSS spinners or generic Tailwind transitions for hero/marquee elements.** Those scream template.
- **Test on a mid-tier laptop and a 3-year-old phone.** If it drops below 60fps there, redesign the animation, don't ship it.

Library: Framer Motion (already a dep). Augment with hand-written CSS where Framer Motion is overkill.

---

## 8. Phase plan (tasks tracked via TaskCreate)

### Phase 0 — Migrate to Next.js App Router (SSG) **[chosen approach]**
**Goal:** Bots (LinkedIn, Twitter, Bing, AI crawlers, LLM scrapers) see fully rendered HTML, and we get a foundation that makes Phase 1–3 dramatically easier (per-route metadata, dynamic OG images, MDX blog/case studies).
**Decisions (locked):**
- **Sequencing:** Option B — redesign during migration. Only port pages we're keeping as-is (policies, support, contact, login redirect, about-us, news, and the people/info-style pages). Homepage, services, products, industries, case studies are all built fresh in Next.js with new copy/structure.
- **Layout:** New Next.js app in `next/` at repo root, alongside `websire_react/`. CRA tree removed in a single cutover commit.
- **Hosting:** Netlify with `@netlify/plugin-nextjs` (full Next.js features on existing host). No Vercel.
- **Language:** TypeScript.

**Approach:**
1. Scaffold Next.js 15 + App Router + TypeScript in `next/`.
2. Port Tailwind config, color tokens (`#0B4F88`), fonts (Tektur, Titillium Web via `next/font`), Framer Motion.
3. Build new homepage, products, industries, case studies, partnerships fresh (Phase 1–3 work flows in here).
4. Port keep-as-is pages with current copy: policies, support, contact, about-us, news, login redirect, login-assistance.
5. Use `export const metadata` per route. Per-route `opengraph-image.tsx` for social cards.
6. Configure Netlify deploy with `@netlify/plugin-nextjs`. Update `CNAME`, `_redirects`, `sitemap.xml`. Keep `/login` → `portal.greyquill.io` redirect.
7. Once verified locally and on a Netlify preview deploy, cut over and remove `websire_react/` in one commit.

**Acceptance:**
- `curl https://greyquill.io/` returns HTML containing the hero copy. Same for every public route.
- Lighthouse score ≥ existing.
- All current routes work, including `/blog/:slug`, `/case-studies`, `/discovery-workshop`, etc.
- Calendly link, contact form, login redirect all functional.

### Phase 1 — Homepage rewrite
**Goal:** New narrative arc per Section 2 above. Keep visual essence.
**Components touched/added:**
- `src/components/Banner.jsx` — new hero
- New `src/components/DilemmaDiagram.jsx`
- New `src/components/RoleTargeting.jsx`
- Refactor `src/components/Services.jsx` → `JourneyTiers.jsx` (Diagnose/Govern/Activate)
- New `src/components/PlatformProducts.jsx`
- New `src/components/Testimonials.jsx` (3 anonymized)
- Trim `src/components/GreyquillMethod.jsx` for secondary placement

### Phase 2 — Product pages + Partnerships
- `/products/clarity-ai`
- `/products/gq-data`
- `/products/gq-agents`
- `/products/gq-gst-copilot`
- `/partnerships` (IBM badge + capabilities)

### Phase 3 — Case Studies + Industries restructure
- Rewrite `/case-studies` index + 3 detail pages
- Rewrite `/industries` to focus list

### Phase 4 — Polish & launch
- Per-route OG images (Next.js `opengraph-image.tsx`).
- JSON-LD structured data per page type (Organization, Service, Article, FAQ).
- Update `sitemap.xml` generator and `robots.txt`.
- Final QA pass + cutover from CRA build to Next.js build on the deploy target.

---

## 9. Open decisions / questions to resolve as we go

- [x] Product naming — claude to propose final names in Phase 1 prep, listed in Section 3.
- [ ] Real customer names usable on case studies, even partially? Default = no, anonymize.
- [ ] Do we want an email-capture lead magnet ("AI Governance Readiness Checklist")? Defer to Phase 2.
- [ ] Newsletter / blog cadence post-relaunch — out of scope for this branch.
- [ ] Where does `/login` (Employee → portal.greyquill.io) live in the new nav? Keep current behavior.

---

## 10. Session log (append-only)

- **2026-05-02** — Branch created. IBM badges staged in `public/images/partners/` (CRA tree). Tracking doc written. Initial Phase 0 plan was react-snap; **revised same day to full Next.js App Router SSG migration** per user decision. CRA tree (`websire_react/`) stays until parity cutover.
- **2026-05-02** — Phase 0 scaffold landed in `next/`: Next.js 15.5 + React 19 + TypeScript + Tailwind 3.4 + Framer Motion 12 + `next/font` (Tektur display, Titillium Web body). Hero image and IBM badges ported into `next/public/`. `netlify.toml` at repo root with `@netlify/plugin-nextjs`. First production build succeeds; homepage prerenders as static (○). `curl` against `next start` returns hero copy in HTML — bot-visibility goal met. Phase 1 sections are stubs in `app/page.tsx`. Hand-crafted motion infrastructure (custom easings, choreographed staggers, scroll-friendly variants) lives in `lib/motion.ts`.
- **2026-05-02** — **Phase 1 complete.** All 8 homepage sections built and composed in `app/page.tsx`: Hero · Dilemma (animated SVG with stroke-draw on scroll) · RoleTargeting · JourneyTiers (scroll-linked progress spine) · Platform (4 product cards) · Testimonials (3 anonymized) · Method (slimmed) · FinalCTA (dark with drifting orb). Production build passes; homepage 52kB First Load JS, fully prerendered. Each section uses the shared `lib/motion.ts` language so the feel stays consistent. Dev server live on :3030 for review. Next: Phase 2 (product pages + partnerships).
