---
name: find-a-workaround
description: >-
  Use this whenever you hit a block, obstacle, or dead-end while working — a
  network/egress denial, a 403/blocked domain, a missing tool or MCP, a gated or
  paywalled API, a permission or auth failure, a rate limit, a "can't access"
  situation, a scrape that's bot-blocked, or missing data you need to continue.
  Trigger it the moment something stops working, BEFORE reporting the problem to
  the user. Its job is to make you exhaust real workarounds on your own — try a
  different tool, a different vantage point, a different data source, or hand the
  user a one-click helper — so you come back with a solution in hand instead of
  just "it's blocked." Nicole explicitly wants this: never surface a bare
  dead-end and wait for her to think of the fix.
---

# Find a Workaround

## The core idea

A block is not a stopping point. It's a signal to search the solution space.

When something you try fails — access denied, tool missing, API gated, data
unreachable — the unhelpful move is to report the failure and hand the problem
back to the user. They came to you *because* they didn't want to figure out the
plumbing. Reporting a dead-end just moves the hard part back onto them.

So the rule is simple: **never surface a bare block.** By the time you tell the
user about an obstacle, you should have either already routed around it, or be
holding a concrete workaround ready to go (and only need a decision, credential,
or action that is genuinely theirs). "Here's what stopped me, here's the way
around it, here's what I need from you (if anything)" — never just "this is
blocked."

This isn't about being stubborn or grinding forever. It's about doing the
obvious search for alternatives that a resourceful person would do before
escalating.

## When you're blocked, brainstorm across these angles

Most blocks fall to at least one of these. Generate a few candidates *across
different categories* — don't just retry the same approach harder.

- **Different tool or route.** Another MCP, CLI, library, or endpoint that
  reaches the same goal. (A blocked npm module might be installed globally
  elsewhere on the machine — find it and point at it.)
- **Different vantage point.** The block often depends on *where* you're
  standing, not on the goal itself:
  - server-side is blocked → run it in the **user's own browser** (a console
    snippet or bookmarklet), which is authenticated and past the network policy;
  - remote/sandbox is blocked → do it **locally** or hand the user local steps;
  - unauthenticated 404/403 → the **authenticated** path may just work.
- **Different data source.** Live scraping blocked → an **official API**, an
  **export/download**, a cached copy, an RSS/sitemap, or data the **user already
  has** and can paste. The freshest source isn't the only source.
- **Reframe or transform the goal.** If you can't do X directly, can you get X
  by doing Y? Approximate it, compute it a different way, or deliver the useful
  90% now and flag the rest.
- **Manual-but-guided.** When automation is genuinely walled off, don't dump the
  work on the user — give them a **one-click helper** that does it in their
  environment: a bookmarklet, a copy-paste command, a tiny script, a template.
  Make their part trivial.
- **Decompose the block.** Which *specific* sub-step is actually failing? Often
  only one piece is walled off and you can route around just that piece while
  everything else proceeds.
- **The official, legit path.** Sometimes the right answer is credentials, an
  API key, a permissions request, or an approval — the ToS-compliant door.
  Surface it as a clear next step, not a dead-end. (Never route around a block
  by doing something deceptive, abusive, or against a site's terms — a
  workaround should be clever, not sketchy.)

## The process

1. **Name the block precisely.** What exactly failed, and why? "403 policy
   denial on the egress proxy for `a.co`" is actionable; "Amazon didn't work"
   is not. A precise diagnosis usually points at the category of fix.
2. **Confirm it's real.** A quick, cheap check to distinguish a hard policy
   block from a transient hiccup or a wrong parameter — so you route around the
   right thing.
3. **Generate at least three alternatives** across the angles above.
4. **Rank by feasibility × effort** and **attempt the best one yourself.**
5. **Iterate.** If the first workaround stalls, go to the next. Two or three
   real attempts beats one attempt and a shrug.
6. **Only then involve the user** — and only for something genuinely theirs (a
   decision, a credential, an action in their environment). Lead with the
   workaround you found or built, not with the block.

## What "done well" looks like — from a real session

These are the moves in action, from building Nicole's storefront:

- **Amazon egress blocked.** Her Amazon storefront couldn't be reached from the
  sandbox. Instead of "I can't access Amazon," the fix was a **browser
  bookmarklet** she runs on her own storefront — client-side, authenticated,
  past the block — that extracts every product's title, image, and affiliate
  link and copies them out. The walled-off step got moved to where it isn't
  walled off.
- **`a.co` returned 403.** Rather than assume, a quick `curl` **confirmed it was
  a policy denial** (not a fluke), which justified pivoting straight to the
  user-side capture above instead of wasting rounds retrying.
- **`playwright` npm module "not found."** Instead of giving up on browser
  verification, the **global install** was located (`/opt/node22/lib/...`) and
  the script pointed at it — screenshots done.

The throughline: each block was met with "where else can this come from?" and
turned into a path forward the user didn't have to invent.

## Keep it honest

Be straight about what you tried and what actually worked. If every real avenue
is exhausted, say so plainly and lay out the legit options (credentials,
approvals, a manual step) as clear choices — that itself is the workaround, and
it's very different from dropping a bare "it's blocked" on the user.
