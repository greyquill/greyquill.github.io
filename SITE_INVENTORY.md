# Site Inventory

**Living document.** Updated every time a page or component is added, removed, or significantly reshaped on the redesign branch. Pair this with `REDESIGN_PLAN.md` (which holds *strategy*); this file holds *what currently exists*.

Two trees coexist on the `redesign/aligne-style-relaunch` branch until cutover:
- `websire_react/` — the current production CRA app (do not modify; it still serves greyquill.io until cutover)
- `next/` — the new Next.js 15 App Router app (everything new lands here)

---

## `next/` — new Next.js app (under construction)

### Routes
| Route | Status | Source | Notes |
|---|---|---|---|
| `/` | **Phase 1 complete** | `app/page.tsx` | 8 sections, in order: Hero · Dilemma · JourneyTiers · Method · RoleTargeting · Platform · Testimonials · FinalCTA. |
| `/login` | redirect | `next.config.mjs` | 307 → `https://portal.greyquill.io/login` |

| `/products` | **Phase 2** | `app/products/page.tsx` | Index page. Hero ("Four products, one continuous AI pipeline") + 4 product cards. |
| `/products/clarity-ai` | **Phase 2** | `app/products/clarity-ai/page.tsx` | Hero with mocked score-card preview, dilemma stats, 4 capabilities, 3 use cases, dark CTA. External link CTAs to `https://clarity.greyquill.io`. |
| `/products/gqdata` | **Phase 2** | `app/products/gqdata/page.tsx` | Hero with master-data unification visual (3 source records → golden entity), dilemma stats, 4 capabilities, 3 user roles, "where it fits" cross-links, dark CTA. |
| `/products/agents` | **Phase 2** | `app/products/agents/page.tsx` | Hero with work-packet flow visual (Agent A → packet → B → packet → C → result + event log), dilemma stats, 4 protocol capabilities, 3 user roles, cross-links, dark CTA. Drawn from the Champ swarm framework. |
| `/products/gst-copilot` | **Phase 2** | `app/products/gst-copilot/page.tsx` | Hero with reconciliation summary visual (matched/exceptions/missing + ledger rows), dilemma stats, 4 domain agents (Ingestion/Extraction/Reconciliation/Resolution), 3 user roles, cross-links, dark CTA. Drawn from the IBM-GST project (vendor-neutral copy on this page; IBM only on /partnerships). |

> Remaining Phase 2/3 routes (`/partnerships`, `/case-studies`, `/industries`, plus the keep-as-is ports) tracked in `REDESIGN_PLAN.md`.

### Components
| File | Purpose |
|---|---|
| `components/Header.tsx` | Sticky nav, logo. Products dropdown (CSS-only hover + focus-within reveal) lists ClarityAI/GQData/GQ Agents/GST Co-Pilot with tier badges + sub-text. Primary nav links (Industries, Case studies, About). "Book a call" CTA. |
| `components/Footer.tsx` | 4-column footer (Platform, Company, Resources + brand) and copyright bar. |
| `components/Hero.tsx` | Homepage hero. Choreographed staggered entrance: eyebrow → headline → highlight bar draw-in → sub → CTAs → image card → caption. Uses existing `banner-pic.jpeg`. |
| `components/Section.tsx` | Reusable section wrapper. Eyebrow + title + intro + content slots. Three tones: default / mist / ink. Used by every Phase 1 section so spacing and rhythm stay identical. |
| `components/Dilemma.tsx` | "AI is accelerating. Trust isn't." Hand-drawn-feeling SVG line chart with two animated stroke-draw paths (adoption steep, governance shallow), shaded gap between them, and a callout label. Triggers on scroll-into-view. Three pain bullets at right. |
| `components/RoleTargeting.tsx` | "If you are a Head of AI / CDO / CRO / CIO…" — left column: 4 roles with animated arrow microinteraction. Right column: 4 pain bullets in mist cards. |
| `components/JourneyTiers.tsx` | Three-step approach: Diagnose → Govern → Activate. **Scroll-linked progress spine** (`useScroll` + `useTransform`) fills a vertical line as the user scrolls through the section. Each tier card has a spring-bounce number badge that scales in. |
| `components/Platform.tsx` | Four product cards (ClarityAI, GQData, GQ Agents, GST Co-Pilot). Tier badge + Live badge. Lift-on-hover with shadow + ring color shift. Links to `/products/...` (Phase 2). |
| `components/Testimonials.tsx` | Three anonymized quotes (telecom, retail, payment gateway). Decorative quote glyph in brand blue. |
| `components/Method.tsx` | Slimmed Greyquill Method — 7 phases as a horizontal grid (collapses 2-col on mobile). Subtle hover lift. |
| `components/FinalCTA.tsx` | Dark-tone closing section. Two animated background orbs (one drifts in a slow loop — animation only on `transform`, GPU-cheap). Primary "Book a discovery call" + secondary case-studies link. |

### Shared infrastructure
| File | Purpose |
|---|---|
| `app/layout.tsx` | Root layout. Loads fonts, sets metadata, mounts Header/Footer, skip-link. |
| `app/fonts.ts` | `next/font/google` imports for Tektur (display) and Titillium Web (body). |
| `app/globals.css` | Tailwind base + reduced-motion override + signature `draw-stroke` keyframe. |
| `lib/motion.ts` | Single source of truth for motion language: `easings.outExpo`, `easings.inOutQuint`, `easings.springSoft`, `durations`, `heroStagger`, `riseIn`, `fadeIn`, `pressSpring`. **Every animated component should import from here.** |
| `tailwind.config.ts` | Brand colors (`brand.blue #0B4F88`, `brand-blue-light`, `brand-blue-dark`, `brand-ink`, `brand-mist`), font families bound to CSS variables, custom transition timing functions. |
| `next.config.mjs` | `reactStrictMode`, AVIF/WebP image formats, `/login` redirect, `outputFileTracingRoot` to silence multi-lockfile warning. |

### Public assets
| Path | Source | Use |
|---|---|---|
| `public/images/hero/banner-pic.jpeg` | copied from `websire_react/src/assets/banner-pic.jpeg` | Hero image (kept as locked decision) |
| `public/images/logo/CompanyLogo.png` | copied from `websire_react/src/assets/CompanyLogo.png` | Header logo |
| `public/images/partners/ibm-partner-plus-silver.png` | IBM partner plus silver mark (silver, RGB) | Partnerships page (Phase 2). Do NOT use elsewhere. |
| `public/images/partners/ibm-partner-plus-silver-black.png` | IBM partner plus silver mark (black, RGB) | Partnerships page on light backgrounds |
| `public/images/partners/ibm-partner-plus-silver-white.png` | IBM partner plus silver mark (white, RGB) | Partnerships page on dark backgrounds |

### Build & deploy
- `netlify.toml` at repo root: `base = "next"`, `command = "npm run build"`, `publish = ".next"`, plugin `@netlify/plugin-nextjs`, Node 22.
- Production build verified locally (`npm run build` → all routes `○ Static` prerendered).
- Bot-visibility verified: `curl http://localhost:3456/` returns the hero copy in HTML.

---

## `websire_react/` — current production app (frozen on this branch)

This is the live CRA site. It will be removed in a single cutover commit once the Next.js app reaches feature parity for everything we want to keep. Until then, no changes to this tree.

### Routes (as they exist today)
| Route | Component | Will it survive the redesign? |
|---|---|---|
| `/` | `App.HomePage` | **Replaced** — new homepage in Next.js |
| `/discovery-process` | `pages/DiscoveryProcess` | Folded into Method/Approach |
| `/about-us` | `pages/AboutUs` | **Ported** with light copy refresh |
| `/login` | `pages/Login` | **Replaced** by redirect to portal.greyquill.io |
| `/login-assistance` | `pages/LoginAssistance` | TBD — likely retired |
| `/business-process-optimization` | `pages/BusinessProcessOptimization` | Replaced by product/journey pages |
| `/custom-software-development` | `pages/CustomSoftwareDevelopment` | Replaced by product/journey pages |
| `/legacy-application-modernization` | `pages/LegacyApplicationModernization` | Replaced by product/journey pages |
| `/distributed-systems-cloud-consulting` | `pages/DistributedSystemsCloudConsulting` | Replaced by product/journey pages |
| `/enterprise-ai-enablement` | `pages/EnterpriseAIEnablement` | Replaced by product pages |
| `/overall-process` | `pages/OverallProcess` | Folded into Method/Approach |
| `/policies` | `pages/Policies` | **Ported** as-is |
| `/news` | `pages/News` | **Ported** with refreshed entries |
| `/support` | `pages/Support` | **Ported** as-is |
| `/contact` | `pages/Contact` | **Ported** with refreshed copy |
| `/industries` | `pages/Industries` | **Replaced** (Phase 3) |
| `/case-studies` | `pages/CaseStudies` | **Replaced** (Phase 3) |
| `/blog` + `/blog/:slug` | `pages/Blog`, `pages/BlogPost` | **Ported** to Next.js dynamic routes |
| `/discovery-workshop` | `pages/DiscoveryWorkshop` | TBD — may fold into Contact/CTA |

---

## Conventions for keeping this doc in sync

- When you add a new route, add a row to the routes table.
- When you add a shared component or library file, add a row to the components/infrastructure table.
- When you delete or replace something, strike it out (do not silently remove the row) — this is a migration log as much as an inventory.
