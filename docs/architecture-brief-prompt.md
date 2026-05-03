# Prompt for the PDF agent: Greyquill Platform Architecture & Governance Brief

This document is the brief you should hand to whatever tool / agent you use to produce the PDF. It contains:

1. The deliverable spec (filename, length, audience, tone)
2. The brand system (colours, typography, layout rules)
3. The full content, section by section, in the wording it should use

When the PDF is ready, save it as `next/public/greyquill-platform-architecture-brief.pdf`. The site already references this exact filename and serves it from `/greyquill-platform-architecture-brief.pdf` after a buyer fills in the gated download form.

---

## Deliverable

- **Filename**: `greyquill-platform-architecture-brief.pdf`
- **Length**: 2 to 3 pages of body content (plus optional cover page = 3 to 4 pages total)
- **Audience**: CISO, Head of Information Security, Internal Audit, IT Architect, procurement reviewer at a regulated enterprise (BFSI, telecom, insurance, retail). Smart, sceptical, has seen many vendor decks.
- **Tone**: Specific. Direct. Lower-case-y where the website is. No marketing puff. No bullet inflation. Sentences end with periods, not exclamation marks. Avoid em-dashes (—). Use commas, periods, colons, parentheses instead.
- **Format**: A4 portrait. Single column body, comfortable line length.

---

## Brand system

### Colours
- **Brand blue (primary)**: `#0B4F88`
- **Brand blue light**: `#1a6bb5`
- **Brand blue dark**: `#083d6a`
- **Brand ink (body text + dark surfaces)**: `#0a1628`
- **Brand mist (soft background)**: `#eefbff`
- **Body text on white**: `#0a1628` at 75 to 85% opacity for body, full strength for headings
- **Caption / muted text**: `#0a1628` at 55 to 65% opacity
- **Accent rules / dividers**: black at 6 to 8% opacity

### Typography
- **Display / headings**: Sora (Google Font), weights 500 to 700. Tight tracking (`-0.02em` to `-0.025em`) on large sizes. Title case for top-level section headings.
- **Body**: Inter (Google Font), weights 400 (regular) and 500 (semibold for emphasis). Line height ~1.55 for body, ~1.1 for big headings.
- **Eyebrow / metadata labels**: Inter, weight 600, all caps, letter-spacing `0.18em` to `0.22em`, brand blue at 80% opacity, ~10 to 11px.

### Layout rules
- Generous margin (~25mm on left and right, 22mm top and bottom).
- Section headings preceded by a small all-caps eyebrow (e.g. `01 · DEPLOYMENT TOPOLOGY`) in brand blue.
- Use a thin (`1px`, `#0a162810`) horizontal rule between sections.
- Pull quotes in larger body weight (semibold), brand-ink, set wider than body.
- No drop shadows. No gradients in body content. The aesthetic is calm, technical, confident.
- Cover page (optional) uses brand blue heavily, white type, and the Greyquill wordmark top-left. The Sora display font carries the cover.

### Footer (every page)
Small caption row with three columns:
- Left: `Greyquill Platform · Architecture & Governance Brief`
- Centre: `v1.0 · [date you generate it]`
- Right: `[page n of N]`

Use brand-ink at 45% opacity, ~9px Inter.

---

## Content

Copy the body text below into the PDF as-is. Do not paraphrase. Do not add marketing language. The wording matches the site's voice and is what the founder wants stated.

---

### Cover page (optional)

**Title (Sora, 48pt, white):**
> The Greyquill Platform
> Architecture & Governance Brief

**Subtitle (Inter, 16pt, white at 75%):**
> What it is, where it runs, who owns the data, and how the audit answer gets assembled.

**Bottom-left footer (Inter, 11pt, white at 65%):**
> For Heads of AI, CISOs, Internal Audit, and the people who have to defend this to a regulator.

**Wordmark top-left.** Background: solid `#0B4F88` with a single soft circle of `#1a6bb5` at low opacity in the lower-right corner for visual interest.

---

### Page 1

**Eyebrow:** `01 · WHAT THIS DOCUMENT IS`

**Heading:** What this brief is.

**Body:**

This is a short architecture and governance brief for the Greyquill platform. It is written for the people who have to approve AI workloads inside a regulated enterprise: the Chief Information Security Officer, the Head of Internal Audit, the IT Architect who has to fit a new platform into an existing operating model, and the procurement reviewer who needs to know what they are signing.

It is not a sales document. It does not list features. It answers the four questions that gate every regulated AI deployment: where does the platform run, where does the data sit, what is it built on, and what do you take with you when the engagement ends.

If you need more than this brief covers, the Greyquill team will sit with your security and architecture leads in a working session. Most enterprises move from this brief to a 90-minute review and from there to a defensible plan in under two weeks.

---

**Eyebrow:** `02 · DEPLOYMENT TOPOLOGY`

**Heading:** The platform runs where you need it to run.

**Body:**

Greyquill deploys inside your perimeter, on infrastructure you already control. The platform comes to your data, not the other way around. There is no default Greyquill-hosted tenancy that customer data passes through.

In practice this means one of three deployments, in order of how regulated buyers usually pick:

- **Customer-managed cloud**: AWS, Azure, GCP, or any other cloud account your team already owns and operates. Greyquill provisions and operates the platform inside that account. Your network policies, your IAM boundaries, your logging.
- **On-premises**: a customer-owned data centre, on Kubernetes or a comparable orchestrator. Used by buyers with sovereignty constraints, very strict data localisation rules, or existing on-prem investments they want to extend.
- **Air-gapped or restricted-egress**: where the platform must run without outbound internet. Supported with a slightly heavier operations model and a release cadence agreed up front. Used by some defence-adjacent and Tier-1 banking buyers.

Greyquill engineers participate in the deployment but do not require standing access to your production environment. Operational access is granted on a per-task, time-bounded basis through your existing access workflow.

---

**Eyebrow:** `03 · DATA RESIDENCY`

**Heading:** Your data never leaves your perimeter without your agreement.

**Body:**

This is the governance principle that drives every deployment choice above. It is worth stating plainly:

> Customer data, by default, stays inside the customer perimeter. It is not copied, replicated, mirrored, or shipped to any Greyquill-controlled environment as part of normal operation.

Concretely:

- The data the platform processes (master records, transaction history, documents, lineage, audit trail) lives in storage you provision inside your environment.
- Embeddings and vector indexes derived from your data live there too.
- Model outputs and audit-evidence packs are stored inside your perimeter, in a system your team can query directly.
- The only data that crosses out of your environment is operational telemetry that you have explicitly opted in to share, and only at the granularity you agree to. There is no default outbound data path.

Where Greyquill engineers need access to a sample of your data for an engineering task, that access is requested explicitly, time-bounded, and logged through your existing approval workflow.

---

### Page 2

**Eyebrow:** `04 · WHAT IT IS BUILT ON`

**Heading:** Built on IBM foundations. Replaceable parts by design.

**Body:**

Greyquill is an IBM Business Partner. The platform is built on top of the IBM stack that regulated enterprises already trust for production workloads. This gives the platform two properties that matter to your security and architecture teams:

- **Recognised foundations.** Your security team is not being asked to evaluate a stack of unfamiliar components. The IBM components Greyquill uses have already been reviewed, accepted, and deployed inside enterprises like yours.
- **Customer-subscribable components.** Where it makes sense, you can subscribe to the underlying IBM components directly and have them installed under your own enterprise agreement. The platform is designed to compose with components you already own, not duplicate them.

Equally important: **the IBM components are replaceable.** Where a customer has a strong reason to use a different equivalent (a different vector store, a different model serving runtime, a different identity provider), Greyquill works against open interfaces. There is no architectural lock-in to a specific IBM SKU. The default is IBM because it works for enterprises and is recognised by their security teams. The exception is anything else, supported.

---

**Eyebrow:** `05 · IDENTITY AND ACCESS`

**Heading:** Bring your own identity provider.

**Body:**

Greyquill does not run its own authentication system for your users. The platform integrates with whatever identity provider your organisation already uses. This is not optional. It is the only supported model.

In practice this means:

- **Federation against your IdP** (Microsoft Entra ID, Okta, Ping, Google Workspace, IBM Verify, or any standards-compliant SAML or OIDC provider).
- **Your users, your groups, your conditional access policies.** Greyquill does not maintain a parallel user directory. The platform reads identity and group claims from your IdP at sign-in and applies them.
- **No shared secrets stored long-term.** Service-to-service trust uses short-lived tokens issued by your IdP or by infrastructure you control.

Privileged operations (changing a governance policy, promoting a model into production, modifying an audit trail) require a step-up authentication event that uses your IdP's existing strong-auth mechanism. Greyquill does not invent its own MFA.

---

**Eyebrow:** `06 · AUDIT EVIDENCE FLOW`

**Heading:** The audit answer is built as the system runs.

**Body:**

The single design choice that separates Greyquill from a model-serving platform with governance bolted on: every action the platform takes is logged into an evidence record at the moment it happens, not stitched together at month-end.

For every piece of work the platform does, you can recover, in one query:

- Which inputs were processed.
- Which version of which model produced the output.
- Which governance policies were evaluated, and what each one returned.
- Which human approvals, if any, were attached.
- The full data lineage from source system to output.

That evidence record lives in storage you control. It is queryable by your audit team without involving Greyquill. It is exportable to whatever audit tooling your organisation already uses. When a regulator asks a question, the answer is not a project; it is a query.

---

### Page 3

**Eyebrow:** `07 · WHAT YOU TAKE WITH YOU`

**Heading:** Your configuration is yours.

**Body:**

If the engagement with Greyquill ends, your organisation does not lose what was built. The artefacts that matter (your master data model, your governance configuration, your agent definitions, your audit evidence history, your trained model artefacts) are yours, in your environment, in formats you can use without Greyquill.

This is not a contractual promise grafted onto a proprietary platform. It is the architecture: the platform stores customer-specific configuration in open formats, in customer-owned storage, behind customer-owned access control. There is no Greyquill-side database that your configuration depends on.

The practical test: if your team imagines, for a moment, that Greyquill the company ceased to exist tomorrow, would your AI workloads keep running? The answer the platform is designed to give is "yes, until you choose to change them."

---

**Eyebrow:** `08 · WHAT HAPPENS NEXT`

**Heading:** From this brief to a defensible plan.

**Body:**

The fastest way through is a 90-minute working session with your security, data, and AI leads. Greyquill brings a senior architect and a senior governance lead. We work through the four questions this brief opens (deployment, data, identity, audit) against the specifics of your environment, and produce a written deployment posture document the next day.

From that posture document, an engagement plan typically takes another week to agree. Two weeks from first conversation to a defensible plan is a realistic expectation, not a slogan.

To start, send this brief sideways inside your organisation to whoever has to approve it. When the questions come back, mail them to amarnath@greyquill.io and we will answer them in writing before any meeting.

---

**End of brief.**
