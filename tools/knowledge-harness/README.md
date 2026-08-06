# Knowledge assistant test harness

**Development only. Nothing here ships.** It lives outside `next/`, which is the
only directory the site build reads, so it cannot reach production by accident.

Everything imports the real modules from `next/lib/knowledge` rather than
copying their rules. An earlier version duplicated the smalltalk regexes and
would have gone on passing while the runtime changed underneath it, which is
exactly the drift a harness exists to catch. Keep it that way.

`node_modules` is a symlink to `next/node_modules`. If that ever breaks, remake
it with `ln -sfn ../../next/node_modules node_modules`.

Run everything with `npx tsx` from this directory. Paths resolve from each
file's own location, so the working directory does not matter.

## The battery

```
npx tsx scenarios.mjs              # 150 scenarios, live generation
npx tsx scenarios.mjs --no-gen     # retrieval only, offline, ~2 minutes
npx tsx scenarios.mjs --only facts # one group
```

Groups: `facts`, `contact`, `refusal`, `nomatch`, `smalltalk`, `broad`,
`followup`, `adversarial`.

It mirrors the runtime path: smalltalk rules, merged-query retrieval,
cross-encoder rerank, the reserved-passage grounding rule, the tier gate, the
verbatim bypass, and the grounding guard. Then it asserts on whichever text a
visitor would actually see.

Each scenario in `scenarios.json` takes:

| field | meaning |
|---|---|
| `q` | the question |
| `tier` | expected retrieval tier: `high`, `medium`, `low`, `none`, `smalltalk`, or `any` |
| `miss` | on a `none` tier, the expected decline kind: `offtopic`, `gibberish`, `unpublished` |
| `must` / `mustNot` | substrings the answer must or must not contain |
| `minSent` / `maxSent` | sentence-count bounds |
| `history` | prior turns, for follow-up scenarios |

**Live runs hit the rate limiter.** A full pass returned `HTTP 429` on roughly
40 scenarios. Throttle between calls or raise the limit on the service before
trusting a full-generation result.

**The `must` assertions need a review pass.** Several are too literal and fail
correct answers: `do u work with banks` was marked failing for not containing
`bfsi`, our internal label, while the answer correctly listed RBI, SEBI, DPDP,
FCA, PRA and FFIEC.

## The probes

| file | what it answers |
|---|---|
| `logits.mjs '["question", ...]'` | top rerank logit and cosine per question, and which entry won. The tool behind every threshold in `search.ts`. |
| `sweep.ts` | do the smalltalk rules swallow any real question, and how is each scenario classified on a miss |
| `guard-test.mts` | the 11 fabrication cases from the live run: four inventions that must be rejected, seven correct answers that must survive |
| `decline-test.mts 'question' ...` | the full miss path with real retrieval, so the nearest-topic lead is the one a visitor would see |

`guard-test.mts` keeps a hand-copy of the guard internals because they are not
all exported. It asserts that `generate.ts` still defines them, so the copy
fails loudly rather than silently rotting.

## Thresholds these measured

All of them are in `next/lib/knowledge/search.ts` with the measurement in the
comment. Re-derive with `logits.mjs` before changing any of them.

| constant | value | why |
|---|---|---|
| `RERANK_MIN` | -6 | honest refusals score around -2.65 and must survive |
| `COSINE_MIN` | 0.35 | lowest real question measured 0.40; nonsense 0.20 to 0.29 |
| `RERANK_SKIP` | 0.95 | above this the question is the curated question |
| `NEAR_FLOOR` | -9 | below this "closest thing we have" becomes a non-sequitur |
