# The homepage assistant

The "Ask us anything" chat in the hero. It answers from a knowledge index built
at deploy time from published Greyquill content, and it runs **entirely in the
visitor's browser**. There is no backend, no API key, no per-question cost, and
nothing the visitor types leaves their device.

This document records why it is built the way it is, because most of that
reasoning is not recoverable from the code.

---

## 1. Architecture

### Build time (`next/scripts/knowledge/`)

```
out/**/*.html  ─┐
                ├─► extract ─► chunk ─┐
greyquill.io/dc ┘                     ├─► embed ─► public/knowledge/{meta.json, vectors.bin}
                                      │
content/knowledge/qa*.json ───────────┘
```

Two content sources, both **published output only**:

- **The main site**, read from `next/out/**/*.html` after `next build`. That is
  literally what ships, so the index can never contain something the public
  cannot already see.
- **The Document Center**, crawled over HTTPS from `https://www.greyquill.io/dc/`.
  It lives in a separate repo (`github.com/greyquill/dc`) and cannot be read
  from this checkout. Responses are cached in `scripts/knowledge/.cache/`;
  pass `--refresh` to re-fetch.

**This is a safety property, not a convenience.** The emitted index is a public
static asset that anyone can download and read in full. Because the pipeline
only ever reads published output, internal files (`businessstrategy.md`,
`REDESIGN_PLAN.md`, `SITE_INVENTORY.md`, `WEBSITE_REVIEW.md`,
`docs/GreyQuill_Deployment_SOP.md`) are unreachable by construction rather than
excluded by a filter that someone might later loosen. **Do not add a source
that reads outside `out/` or the live site.**

### Runtime (`next/lib/knowledge/`)

Two stages, both on the visitor's device:

1. **Bi-encoder retrieval** (`search.ts`). `all-MiniLM-L6-v2` embeds the
   question; a dot product against all 719 vectors returns the top 12. Fast
   over the whole index, but it embeds question and candidate *separately*, so
   it can only measure topical overlap.
2. **Cross-encoder reranking** (`rerank.ts`). `ms-marco-MiniLM-L-6-v2` reads
   the question and each candidate *together* with attention across both, so it
   judges whether a candidate actually answers the question. Too slow for the
   whole index, which is why it only sees the top 12.

Both models are fetched once from the Hugging Face CDN (~46 MB combined) and
cached by the browser. They are preloaded on idle, so they are usually warm
before anyone types.

---

## 2. Why it is built this way

### The index has two kinds of entry

**Curated answers** (`content/knowledge/qa.json`, `qa.draft.json`) are the
primary match target: hand-written replies, each with several question
phrasings, real links, and follow-up chips. Every phrasing becomes its own
vector pointing at the same answer.

**Extracted passages** are raw prose pulled from the site, covering the long
tail.

Curated answers exist because **matching question-to-question scores far higher
than question-to-marketing-copy.** Before the curated layer, "How does the
Greyquill Method work?" scored 0.548 and retrieved the wrong page, because site
headings like "A three-step approach" share almost no vocabulary with the
question a visitor actually types. With it, the same question scores 0.99.

### Why a reranker was necessary

The bi-encoder alone produced confidently wrong answers. Two real examples from
testing:

- *"I need to be greyquill certified"* scored 0.578 against "What does Greyquill
  do?" and returned the company bio, because the word "greyquill" dominated the
  embedding.
- *"can I get certified"* scored 0.650 against "is your team certified?" These
  are topically near-identical and differ only in **direction**, which cosine
  similarity structurally cannot represent.

A cross-encoder resolves direction because it sees both texts at once. It also
separates relevant from irrelevant far more sharply than cosine does.

### Calibration data

Measured on this index with `npm run knowledge:probe`:

| Signal | Relevant answers | Off-topic questions |
| --- | --- | --- |
| Cosine (bi-encoder) | 0.83 to 0.99 | 0.09 to 0.30 |
| Logit (cross-encoder) | +5 to +11 | around -10.6 |

Thresholds in `search.ts`:

- `RERANK_MIN = -6` rejects below this.
- `RERANK_CONFIDENT = 3` earns `high` confidence.
- `COSINE_CONFIDENT = 0.75` also earns `high`.
- `RERANK_SKIP = 0.95` skips reranking entirely.
- `CURATED_PREFERENCE = 0.5` breaks near-ties toward a curated answer.

### Three non-obvious decisions

**`RERANK_MIN` is -6, well below zero.** The reranker is trained on passage
relevance, so it scores a passage that *withholds* the requested fact as
irrelevant. The pricing answer ("We do not publish rates") scores **-2.65** for
"how much does this cost". Rejecting at 0 would silence every honest
"we don't do X" answer in the bank. Off-topic questions sit eight logits lower,
so there is ample separation.

**The reranker reads question + answer, not the question alone.** Question-only
text was tried and is worse: a bare one-line question scores below a rich site
paragraph, so passages win matches they should lose. It failed 4 of 14 battery
cases.

**Confidence uses whichever model is decisive.** `all-MiniLM-L6-v2` is a
sentence-similarity model, so it judges question against question well, which is
exactly what the reranker is weakest at. Either signal being strong is enough.

### Topic carryover is deliberately narrow

Short follow-ups like "what about healthcare?" only make sense against the
running topic, so the previous topic is prepended and the query retried.

**This mechanism caused three separate wrong answers and is the most dangerous
part of the system.** Rewriting a visitor's question is a licence to answer a
question they did not ask, so the gate must stay tight.

Two rules were tried and rejected:

1. *Retry whenever the plain question scores below the bar.* Broke on "why is
   the universe so big?", which scored near zero alone and then retrieved the
   company bio once the previous topic was glued to the front.
2. *Retry only for questions of four words or fewer.* Word count cannot tell a
   fragment from a short complete question. "where is your office?" is exactly
   four words, so it inherited a GQData topic and was answered with GQData.

The current rule requires an explicit **anaphoric opener**
(`ANAPHORIC_OPENER`: and, but, so, also, ok, then, what about, how about, what
if). A question opening with one of those is continuing the previous turn.
Anything else stands on its own and is never rewritten. The retry must also
clear `RERANK_CONFIDENT` rather than the ordinary bar.

If carryover ever needs loosening, add a battery case first.

### Honest uncertainty

`Confidence` is `high | medium | low | none`. The UI hedges anything below
`high` with visible wording, and `none` declines outright and offers a discovery
call. A confidently wrong answer costs more trust than an admission of
ignorance, which matters more than usual for a company selling governed AI.

---

## 2b. Generation (optional layer)

Retrieval can only return a pre-written answer **whole**. Ask "which city?" and
it returns the entire company profile, because nothing in the system can read
that paragraph and reply "Bengaluru". Composing a reply to the question actually
asked requires a model.

A small model on `ubuntu-01` receives the visitor's question plus the top 3
passages retrieval selected, and is instructed to answer using only those. It is
extraction rather than recall, so hallucination risk stays low.

```
browser ──(retrieval, always)──► curated answer  ─────────────► shown immediately
   │                                   │
   └──(question + 3 passages)──► cloudflared ──► gq-assistant ──► ollama
                                                (127.0.0.1:8081)   qwen2.5:1.5b
                                                       │
                                     streams composed text, replacing the
                                     curated answer only on success
```

**Every failure is silent.** No endpoint configured, a timeout, a 429, a dead
box, or a reply over 700 characters all fall back to the curated answer the
browser already holds. A visitor never sees an error from this layer.

### Enabling it

Generation is off unless `NEXT_PUBLIC_ASSISTANT_URL` is set at build time:

```bash
NEXT_PUBLIC_ASSISTANT_URL=https://<your-tunnel-hostname> npm run build
```

Unset, the site behaves exactly as it did before this layer existed.

### On ubuntu-01

| Unit | Role |
| --- | --- |
| `ollama.service` | model runtime, `qwen2.5:1.5b-instruct-q4_K_M` |
| `gq-assistant.service` | `/opt/gq-assistant/gq_assistant.py`, listens on 127.0.0.1:8081 |
| `cloudflared.service` | existing "Ai tunnel ubu" tunnel |

All three are `systemctl enable`d, so they return after a reboot. The service is
stdlib-only Python: nothing to `pip install`, nothing to keep patched.

Guards, because it sits behind a public tunnel: Origin must be an allowed
greyquill.io host, per-IP limits of 12/min and 200/day, a global 3000/day cap,
and hard caps on every input length.

### Two bugs worth remembering

**Ollama's model store depends on which user runs it.** Models pulled as `amar2`
were invisible once ollama ran as a systemd service under the `ollama` user, and
`/api/generate` returned 404 while `/api/tags` returned 200. If generation
suddenly 503s, run `ollama list` and check the model is actually there.

**Rejected POSTs must drain the request body.** Returning 403 without reading
the body leaves it in the socket, and the next keep-alive read parses that JSON
as a request line, producing spurious 400s that look like an attack.

### Measured on this hardware

`ubuntu-01` is a Dell Wyse 7040, i5-6500T, 4 cores, no GPU. Warm, with 3
grounding passages: **2.5 to 5.2 seconds**, about 14 tok/s. A cold model load
adds ~4s, which `keep_alive: 60m` avoids. Streaming matters here: first tokens
appear in about a second.

Refusal behaviour was verified rather than assumed. Asked for a CEO's phone
number and for a 90-day money-back guarantee, both absent from the grounding,
it declined and suggested a discovery call in both cases.

**llama3.2:1b was tested and rejected**: it answered "I do not know" with the
answer present in its context. 1B is too weak for reliable extraction.

---

## 3. What was ruled out, and why

| Option | Verdict |
| --- | --- |
| **Hosted LLM API** (OpenAI, Anthropic) | Per-query billing forever. Fails the "free indefinitely" requirement. |
| **WebLLM in-browser generation** | Genuinely free and needs no vendor, but a quantized model is 350-950 MB (Qwen2-0.5B is ~945 MB). Pushing that to a phone before a visitor asks anything is unacceptable, and iOS Safari cannot reliably cache it: a seven-day cap deletes all script-writable storage for origins with no recent interaction. Viable later as an explicit opt-in demo on desktop. |
| **Free-tier API chain** (Gemini Flash-Lite, Cloudflare Workers AI, Groq) behind a Cloudflare Worker | Workable, and the chain design does survive one provider changing terms. Held back because free tiers demonstrably move: Google cut Gemini free quotas 50-80% in December 2025. Cloudflare's 10k neurons/day works out to only a few hundred chat turns. |
| **Self-hosting generation on the Hetzner box** | **Rejected on inspection.** `89.167.80.254` is `commerce-pro-prod`: 2 shared vCPUs, 3 GB RAM with ~2 GB available, no GPU, already running Postgres, nginx, and three Node processes, with 22 weeks uptime. A 3B model at Q4 needs ~2.5-3 GB resident. Loading one would OOM the box and take Commerce Synapse down. |
| **Self-hosting on LAN boxes** | `gq-optiplex` (192.168.1.13) was offline when tested. `ubuntu-01` (192.168.1.14) is a Dell Wyse 7040, i5-6500T, 4 cores, no GPU: roughly 6-10 tok/s on a 3B model, so a 10-15 second answer, reachable only through a Raspberry Pi jump and a Cloudflare tunnel. |

The reranker was chosen over all of these because it fixes the actual observed
failure (wrong answer selected) at ~23 MB and no ongoing cost, rather than
fixing a different problem (prose fluency) at 20x the payload.

**Known limit:** this selects the best existing answer. It does not *synthesise*
new prose. A question whose answer requires combining three sources will get the
closest single answer, or an honest decline. Generation remains the fix for
that, and becomes reasonable if a GPU box ever exists.

**Language:** both models are English-only. Multilingual equivalents exist
(`multilingual-e5-small`, `jina-reranker-v2-base-multilingual`) but would push
the download from ~46 MB to roughly 250-400 MB.

---

## 4. Files

| Path | Role |
| --- | --- |
| `next/scripts/knowledge/sources.mjs` | Source allowlist, model ids, thresholds for the build. **Read the safety note before editing.** |
| `next/scripts/knowledge/extract.mjs` | HTML to prose sections |
| `next/scripts/knowledge/crawl.mjs` | Document Center crawler with disk cache |
| `next/scripts/knowledge/chunk.mjs` | Sections to retrieval chunks |
| `next/scripts/knowledge/qa.mjs` | Loads and validates the curated answer bank |
| `next/scripts/knowledge/embed.mjs` | Embedding and int8 quantization |
| `next/scripts/knowledge/build.mjs` | Orchestrator |
| `next/scripts/knowledge/probe.mjs` | CLI diagnostic and regression battery |
| `next/content/knowledge/qa.json` | Hand-written seed answers |
| `next/content/knowledge/qa.draft.json` | Agent-drafted answers (**review before trusting**) |
| `next/lib/knowledge/search.ts` | Runtime retrieval, selection, confidence |
| `next/lib/knowledge/rerank.ts` | Cross-encoder loading and scoring |
| `next/components/HeroChatbot.tsx` | UI |
| `next/public/knowledge/` | Generated index. Regenerated by the build; safe to delete. |

### One critical invariant

The embedding model and quantization in `sources.mjs` (`EMBED_MODEL`,
`EMBED_DTYPE`) **must** match what `search.ts` loads at runtime. Vectors from
different models occupy unrelated spaces, and cosine similarity between them is
noise. If dimensions happen to match it fails silently, which is worse than
failing loudly.

`probe.mjs` mirrors the selection logic in `search.ts` by hand. If one changes,
change the other, or the probe reports decisions the UI does not make.

---

## 5. Maintenance

```bash
cd next

npm run build:knowledge              # rebuild index (~1 min)
npm run build:knowledge -- --refresh # also re-crawl /dc
npm run knowledge:probe              # 14-case regression battery
npm run knowledge:probe -- "question about pricing"
npm run knowledge:probe -- --topic "Do you work in regulated industries?" "what about healthcare"
```

`npm run build` runs `next build` then `build:knowledge`, so the index cannot go
stale. The index is written to both `public/knowledge/` (served by `next dev`)
and `out/knowledge/` (the deployed build, which `next build` has already
emitted by that point).

### How updates reach visitors

`meta.json` is fetched with `cache: 'no-cache'`, so the browser revalidates it
on every load and a 304 costs almost nothing. `vectors.bin` is requested at
`?v=<vectorsVersion>`, a content hash written by the build, so it can be cached
hard and still change the moment the index does.

Without this a rebuilt index sits behind a stale browser cache for returning
visitors, which silently breaks the whole update workflow. If you are testing
locally and see old answers, restart `next dev` and hard-reload: a production
`npm run build` rewrites `.next` underneath a running dev server.

**To improve an answer:** edit the entry in `content/knowledge/qa*.json` and
rebuild. **To widen coverage:** add phrasings to an entry's `questions` array,
which is the cheapest possible fix. **To diagnose a bad answer:** run the probe
with the exact question; it prints the logit, the cosine, the confidence tier,
and which entry won.

**When adding an entry, add a battery case** to `BATTERY` in `probe.mjs` so the
behaviour is locked in.

### Content accuracy

Answers are shown to prospects as authoritative Greyquill statements. 36 of the
current entries were drafted by an agent from published content and **need human
review**. Two deserve particular scrutiny:

- `certifications` states only IBM Partner Plus Silver tier and engineer-level
  certifications, because the site never claims Greyquill itself holds SOC 2 or
  ISO 27001. Keep it that narrow unless that changes.
- `pricing` describes the quoting process only, since no figures are public.

Never let an answer claim something the public site does not support.
