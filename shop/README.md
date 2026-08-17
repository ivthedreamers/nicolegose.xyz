# All Things Good — editorial storefront

A self-contained, static affiliate storefront for **allthingsgood.xyz**. Curated goods
organized by room, plus a "For New Moms" edit sorted by baby's age & need.

- Editorial design system: warm neutrals + burgundy/teal, **Bodoni Moda** + **Inter**,
  rounded-rectangle CTAs.
- No build step, no dependencies. Just HTML/CSS/vanilla JS.

## Files
| file | what it is |
|------|------------|
| `index.html` | Home — rows by room, sticky filter/sort, per-room "View All" links |
| `new-moms.html` | New Moms edit — rows by age stage, need filter chips |
| `styles.css` | the design system + components |
| `app.js` | renders cards from `products.js`, filtering/sorting/`#room=` deep links |
| `products.js` | **the only file you edit day-to-day** — your product catalog |
| `CNAME` | `allthingsgood.xyz` (for GitHub Pages) |

## Adding / editing products
Open `products.js` and copy a product block. Only `title`, `url`, and `room` are required.

```js
{
  title: "Hatch Rest Sound Machine",
  url:   "https://amzn.to/xxxx",      // Amazon SiteStripe → Get Link
  image: "",                          // paste an image URL, or leave "" for a placeholder
  price: "$69",
  note:  "the one thing that actually got the baby sleeping.",
  room:  "Nursery & Baby",            // must match a name in ROOMS
  ageStage: "Newborn (0–3 mo)",       // baby items only — must match AGE_STAGES
  needs: ["sleep"],                   // baby items only — from NEEDS
  newMomPick: true,                   // feature it on the New Moms page
  featured: true,                     // bump to front of its row
  addedAt: "2026-08-07",              // powers the "Newest" sort
}
```

**Getting affiliate links:** on your Amazon storefront, the **SiteStripe** bar (top of the
page when logged into Associates) → *Text* → *Get Link* gives you the `amzn.to` short link.
**Images:** the product image URL from Amazon (`m.media-amazon.com/...`) loads fine in
visitors' browsers.

### Rooms, stages, needs
These lists live at the top of `products.js` — edit them there and the filters update
automatically:
- **ROOMS:** Bedroom & Bath · Living Room · Nursery & Baby · Kitchen & Dining · Office & Creative Workspace
- **AGE_STAGES:** Pregnancy / Registry · Newborn (0–3 mo) · Infant (3–12 mo) · Toddler (1–3 yr)
- **NEEDS:** feeding · sleep · bath · on-the-go · mom-care

## Preview locally
```bash
cd shop
python3 -m http.server 8000
# open http://localhost:8000
```

**Cache-busting:** `index.html`/`new-moms.html` load `products.js`, `app.js`, and
`styles.css` with a `?v=<short-git-sha>` query string. Browsers (especially mobile
Safari) cache these aggressively even without any code change on your end — after
pushing an update, bump the `v=` value in both HTML files (find/replace the old
short SHA) so returning visitors actually get the new version instead of a stale
cached copy.

## Deploy to allthingsgood.xyz
This folder ships its own `CNAME`. Two options:
1. **Separate repo (cleanest):** push the contents of `shop/` to a repo, enable GitHub Pages
   on it, and point the `allthingsgood.xyz` DNS (CNAME record) at that Pages site.
2. **Same repo, project path:** serve this folder and set the custom domain in that Pages
   config. Note the parent repo already uses `nicolegose.xyz`, so a second domain needs its
   own Pages target.

The affiliate/FTC disclosure is shown on every page (top + footer) as required for Amazon
Associates.
