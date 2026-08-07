# Dreamer Lab — thedreamerlab.co

The studio site for **Dreamer Lab**, a creative studio founded by Nicole Gosé. Built with
[Astro](https://astro.build) (static output, deployed on GitHub Pages).

This is the studio/agency brand, separate from `nicolegose.xyz` (Nicole's personal /
photography brand). See the brand-split notes below.

## Develop

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # static build → dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  layouts/Base.astro          # <head>, fonts, grid rails, nav, footer
  components/                 # Nav, Footer, Button, SectionLabel, Carousel
  pages/                      # index, services, about, reviews, contact
  pages/work/                 # index + [slug] case-study template
  content/work/*.md           # case studies (frontmatter + body)
  styles/global.css           # design system (ported from nicolegose.xyz)
public/assets/                # writing SVGs, images, favicon
public/CNAME                  # thedreamerlab.co
```

## Add a case study

Drop a new markdown file in `src/content/work/`:

```md
---
title: Client Name
client: Client
services: ["brand strategy", "design systems"]
year: "2025"
role: "Creative director"
blurb: "One-line summary for the work grid."
order: 4
featured: true          # show on the home page
quote: "optional testimonial"
quoteAuthor: "Name · Title"
---

## the challenge
...
```

## Deploy (production)

Intended to live in its **own** repo (e.g. `ivthedreamers/thedreamerlab`) because GitHub Pages
serves one custom domain per repo. Steps:

1. Create the repo and push this folder's contents to its root.
2. Repo **Settings → Pages → Source: GitHub Actions**. The included
   `.github/workflows/deploy.yml` builds and deploys on push to `main`.
3. `public/CNAME` is already set to `thedreamerlab.co`. Point the domain's DNS at GitHub Pages
   (apex `A`/`ALIAS` records, or a `CNAME` for `www`).

## Before launch — open items

- **Inquiry funnel backend** in `src/pages/contact.astro`: set a real Formspree endpoint, swap in
  a Tally embed, or add a Cal.com scheduler. Later, route leads into the Notion Business
  Development Hub → Pipeline (or Airtable).
- **Wordmark**: currently text "Dreamer Lab." — confirm vs. "The Dreamer Lab" / a logo SVG.
- **About copy**: drafted from Nicole's direction; confirm the Founder/Creative/Collaborator +
  network language.
