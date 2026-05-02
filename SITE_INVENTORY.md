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
| `/` | **scaffolded** | `app/page.tsx` | Hero only. Phase 1 sections still to land. |
| `/login` | redirect | `next.config.mjs` | 307 → `https://portal.greyquill.io/login` |

> Routes below are planned and tracked in `REDESIGN_PLAN.md` Phase 1–3. They will be added to this table as they are built.

### Components
| File | Purpose |
|---|---|
| `components/Header.tsx` | Sticky nav, logo, primary nav links, "Book a discovery call" CTA. Animated underline on hover, lift-on-hover CTA. |
| `components/Footer.tsx` | 4-column footer (Platform, Company, Resources + brand) and copyright bar. |
| `components/Hero.tsx` | Homepage hero. Choreographed staggered entrance: eyebrow → headline → highlight bar draw-in → sub → CTAs → image card → caption. Uses existing `banner-pic.jpeg`. |

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
