# Working in this repository

## This repository is public

`greyquill/greyquill.github.io` is public, because it serves GitHub Pages.
Anything committed here is readable by anyone.

**Check before adding a file whether it belongs in public.** Site source does.
Architecture notes, the generation service and internal planning do not. This
was got wrong once: the chat's system prompt was committed here on 2026-08-07
and needed a history rewrite and a force push to remove.

## Internal material lives outside this repo

`~/code/greyquill-internal/` (local only, deliberately not on GitHub):

| | |
|---|---|
| `docs/chat-assistant.md` | how the hero chat works, and why each threshold is the number it is |
| `docs/knowledge-assistant.md` | the earlier version, kept for the reasoning it records |
| `CONTEXT.md` | working history, including plans not yet built |
| `tools/gq-assistant/` | the generation service, deployed to `/opt/gq-assistant` on ubuntu-01 |
| `tools/knowledge-harness/` | 150-scenario battery and four probes |

Those paths are gitignored here, so they cannot drift back in by accident.

## The chat

Architecture, thresholds and the reasoning behind them live in
`~/code/greyquill-internal/docs/chat-assistant.md`, and are deliberately not
repeated here. Read that before changing anything under `next/lib/knowledge/`:
every threshold in it was measured, and the document records the measurement.

### Two operational traps

**`NEXT_PUBLIC_ASSISTANT_URL` must be set**, both in `.github/workflows/deploy.yml`
and when running `npm run dev`. It is baked in at build time, and without it the
chat answers only from curated entries and never calls the model. This fails
silently: every answer looks plausible and is a stock paragraph.

```
NEXT_PUBLIC_ASSISTANT_URL=https://assistant.nayeli.in npm run dev
```

**`npm run build` does not rebuild the knowledge index**, deliberately. That
step crawls the live site, so during a deploy it would index the version being
replaced. Run `npm run build:knowledge` after content changes and commit the
result.

## Branches

| | |
|---|---|
| `main` | deploys to greyquill.io on push |
| `site-tour` | guided walkthrough, gated behind `NEXT_PUBLIC_ENABLE_TOUR`, not merged |

## House style for site copy

No em dashes. No "X, not Y" constructions. British spelling.
