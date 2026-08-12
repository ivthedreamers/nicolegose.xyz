---
name: allthingsgood-add
description: >-
  Use this whenever Nicole pastes one or more Amazon products (from her phone's
  Share button — usually a title plus a link, sometimes messy or several at
  once) into a conversation about "All Things Good" / allthingsgood.xyz. Also
  trigger on requests like "add this to the shop," "here's a product for the
  nursery," or any paste that looks like a share-sheet product link. Turns each
  paste into a drafted product entry, gets a quick yep/tweak from Nicole, then
  merges it into shop/products.js, commits, and pushes to the
  claude/allthingsgood-redesign-g8kxpm branch.
---

# Add a product to All Things Good

Nicole's affiliate storefront (`allthingsgood.xyz`) lives entirely in the
`/shop` folder of this repo, on branch `claude/allthingsgood-redesign-g8kxpm`
(never commit to `main`). `shop/products.js` is the single source of truth for
the catalog — it's the only file she edits day-to-day, and the only file this
skill touches.

Read `shop/products.js` first: the `ROOMS`, `AGE_STAGES`, and `NEEDS` constants
at the top define every valid tag, and the existing product objects show the
exact shape and Nicole's note-writing voice to match.

## Per-product workflow

For each product Nicole pastes:

1. **Title.** Take the product name from the pasted share text. If it's only a
   bare short link (`a.co/...`, `amzn.to/...`) with no product name attached,
   ask her for the name rather than guessing — don't try to fetch the Amazon
   page (it's normally network/bot-blocked; the paste is the source of truth,
   not a live fetch). If a fetch attempt is worth trying anyway, treat a block
   there as a signal to fall back to asking her, not a dead end to report.
2. **Shorten the title** to a clean 2–5 word name: brand + product type, with
   size/color/count/spec noise stripped. E.g. "Hatch Rest 2nd Gen Baby Sound
   Machine, Night Light, Time-to-Rise…" → "Hatch Sound Machine."
3. **Draft the metadata** — never finalize silently:
   - `room`: guess from the title/context, must exactly match a `ROOMS` value.
   - If it's a baby item: `ageStage` (must match `AGE_STAGES`), `needs` (array
     from `NEEDS`), and `newMomPick: true`.
   - `note`: a warm, first-person one-liner in Nicole's voice (why she'd
     recommend it — not a spec sheet). Match the tone of existing notes in
     `products.js`, e.g. "the $15 lifesaver no registry lists" or "buy it
     once — it converts through the toddler years."
4. **Show the drafts compactly** — one line or block per product: title · room
   · age stage/needs (if baby) · note. Wait for "yep" or edits before merging.
   If Nicole says "you pick" / "just do it," proceed with your best draft
   without waiting.
5. **Merge into `shop/products.js`**, grouped near that room's existing block
   (keep the `/* ---------- ROOM NAME ---------- */` section comments intact).
   Dedupe by `url` — if a product with the same URL already exists, update it
   in place instead of adding a duplicate. Set `addedAt` to today's date
   (`YYYY-MM-DD`). Leave `image: ""` unless Nicole gave an image URL, and omit
   `price` entirely unless she gave one.
6. **Affiliate tag.** Leave `a.co` / `amzn.to` short links as-is — they're
   already tagged. For a bare `amazon.com/dp/...` link, append Nicole's
   Associates tag if she's given you one this session (ask once, then reuse it
   for the rest of the session and remember it for next time by asking if she
   wants it saved). If no tag is available, add the link untagged and tell her
   plainly which links are missing the tag.
7. **Commit and push** to `claude/allthingsgood-redesign-g8kxpm`
   (`git push -u origin claude/allthingsgood-redesign-g8kxpm`). Retry with
   backoff on transient network errors before reporting a failure — a push
   failure is a block to route around (retry, check auth/remote state), not a
   dead end to hand back immediately. Do not open a pull request unless asked.
   Use a plain, descriptive commit message, e.g. "Add Hatch Sound Machine to
   Nursery & Baby."

## Batches

Nicole often pastes several products at once, possibly messy (mixed titles and
links, extra share-sheet text). Split them out, draft all of them, show the
compact list together, and merge/commit/push as one batch (one commit) once
she's approved — don't push after every single product.

## After merging

Offer to spin up a local preview (`cd shop && python3 -m http.server`) or
mention that changes are pushed to the branch so she can review before
anything goes live. Never merge to `main` and never treat a push to this
branch as "live" — `allthingsgood.xyz` only updates once she decides to
deploy.
