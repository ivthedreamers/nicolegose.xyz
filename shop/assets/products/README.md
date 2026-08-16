# Product photos

Drop Nicole's own product photos here (screenshots, phone photos, whatever she
sends) instead of using Amazon's stock images. Any common image format works
(`.jpg`, `.jpeg`, `.png`, `.webp`).

## Naming convention

File name = a lowercase, hyphenated slug of the product's `title` in
`shop/products.js`.

**Rule:** lowercase the title, replace anything that isn't a letter or number
with a hyphen, collapse repeated hyphens, trim leading/trailing hyphens.

`"Skip Hop Activity Center"` → `skip-hop-activity-center.jpg`

You don't have to compute this yourself — just tell me (or whoever's adding
the file) which product a screenshot is for, in plain language ("this one's
for the wind chimes"), and the filename/path gets sorted out from there. This
convention just keeps things predictable so nothing gets mismatched.

## Current batch — expected filenames

| Product | Expected filename |
|---|---|
| Skip Hop Activity Center | `skip-hop-activity-center.jpg` |
| gb Pockit Air Stroller | `gb-pockit-air-stroller.jpg` |
| PRObebi Retractable Gate | `probebi-retractable-gate.jpg` |
| GROWNSY Nasal Aspirator | `grownsy-nasal-aspirator.jpg` |
| Briignite Plug-In Night Lights | `briignite-plug-in-night-lights.jpg` |
| oogiebear Nose & Ear Picker | `oogiebear-nose-ear-picker.jpg` |
| "Under the Sea" Touch & Feel Book | `under-the-sea-touch-feel-book.jpg` |
| AMACOOL Stroller Fan | `amacool-stroller-fan.jpg` |
| "Peekaboo: Sun" Board Book | `peekaboo-sun-board-book.jpg` |
| Earthley Magnesium Lotion | `earthley-magnesium-lotion.jpg` |
| Everything Skin Balm | `everything-skin-balm.jpg` |
| Boiron Camilia Teething Drops | `boiron-camilia-teething-drops.jpg` |
| Boudreaux's Butt Paste | `boudreauxs-butt-paste.jpg` |
| "Never Touch a Porcupine!" | `never-touch-a-porcupine.jpg` |
| Mowind Bamboo Wind Chimes | `mowind-bamboo-wind-chimes.jpg` |
| Amazon Basics Diaper Bags | `amazon-basics-diaper-bags.jpg` |

## How this connects to products.js

Once a file lands here, the matching product's `image` field in
`shop/products.js` gets set to a relative path:

```js
image: "assets/products/skip-hop-activity-center.jpg",
```

This replaces whatever was there before (currently Amazon's stock image URL
for these 16 — swapping to Nicole's own photography here is the standing
plan, not a temporary stopgap).
