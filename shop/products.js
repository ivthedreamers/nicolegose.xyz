/* ============================================================
   ALL THINGS GOOD — product catalog (single source of truth)
   ------------------------------------------------------------
   HOW TO ADD A PRODUCT
   Copy one of the blocks below and fill it in. Only `title`,
   `url`, and `room` are truly required — everything else is
   optional and simply enriches the card.

   FIELDS
     title      : product name (shown in serif)
     url        : your Amazon affiliate link (from SiteStripe → Get Link)
     image      : direct image URL (Amazon m.media-amazon.com works in
                  visitors' browsers). Leave "" to show a styled placeholder.
     price      : optional string e.g. "$48" — purely display
     note       : your one-line editorial recommendation
     room       : one of ROOMS below (exact text)
     ageStage   : for baby items — one of AGE_STAGES below
     needs      : array of NEEDS tags (baby items) e.g. ["sleep"]
     newMomPick : true to feature it on the New Moms page
     featured   : true to bump it to the front of its row / Editor's Picks
     addedAt     : "YYYY-MM-DD" — powers the "Newest" sort
   ============================================================ */

const ROOMS = [
  "Bedroom & Bath",
  "Living Room",
  "Nursery & Baby",
  "Kitchen & Dining",
  "Office & Creative Workspace",
];

const AGE_STAGES = [
  "Pregnancy / Registry",
  "Newborn (0–3 mo)",
  "Infant (3–12 mo)",
  "Toddler (1–3 yr)",
];

const NEEDS = ["feeding", "sleep", "bath", "on-the-go", "mom-care", "health & soothing"];

const PRODUCTS = [
  /* ---------- BEDROOM & BATH ---------- */
  {
    title: "Briignite Plug-In Night Lights",
    url: "https://amzn.to/4xFO9ub",
    image: "https://m.media-amazon.com/images/I/71V4AWfdPsL._AC_UF894,1000_QL80_.jpg",
    note: "plug-and-forget — they sense dusk and just handle it, hallway to nursery.",
    room: "Bedroom & Bath",
    addedAt: "2026-08-14",
  },
  {
    title: "Earthley Magnesium Lotion",
    url: "https://amzn.to/4bS6Rq6",
    image: "https://m.media-amazon.com/images/I/61-Z0hz8s1L._AC_UF1000,1000_QL80_.jpg",
    note: "rub it on before bed — the calm-down ritual I actually kept up postpartum.",
    room: "Bedroom & Bath",
    ageStage: "Newborn (0–3 mo)",
    needs: ["mom-care"],
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "Everything Skin Balm",
    url: "https://amzn.to/3SzpgS0",
    image: "https://m.media-amazon.com/images/I/612IUJ4-XjS._AC_UF1000,1000_QL80_.jpg",
    note: "one tin for cracked heels, dry hands, and diaper rash — the multi-tasker that earns its spot on the changing table.",
    room: "Bedroom & Bath",
    ageStage: "Newborn (0–3 mo)",
    needs: ["mom-care"],
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "Mowind Bamboo Wind Chimes",
    url: "https://amzn.to/3RPMYJB",
    image: "https://m.media-amazon.com/images/I/61hErDt3ndL._AC_UF894,1000_QL80_.jpg",
    note: "hang it by a window that catches a breeze — the sound alone slows a room down.",
    room: "Bedroom & Bath",
    addedAt: "2026-08-14",
  },

  /* ---------- NURSERY & BABY (many are newMomPicks) ---------- */
  {
    title: "HelloBaby Video Monitor",
    url: "https://amzn.to/4xitgFz",
    image: "",
    note: "doesn't need wifi to connect, so no worry about the camera being hacked.",
    room: "Nursery & Baby",
    ageStage: "Newborn (0–3 mo)",
    needs: ["sleep"],
    newMomPick: true,
    frequentlyPurchased: true,
    addedAt: "2026-08-26",
  },
  {
    title: "Pigeon Anti-Colic Bottles",
    url: "https://amzn.to/4giWNcm",
    image: "",
    note: "recommended by our OT & lactation consultant to help baby's oral development.",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    needs: ["feeding"],
    newMomPick: true,
    frequentlyPurchased: true,
    addedAt: "2026-08-26",
  },
  {
    title: "Skip Hop Activity Center",
    url: "https://amzn.to/4qdZ0ZK",
    image: "https://m.media-amazon.com/images/I/71r51Ydo5qL._AC_UF894,1000_QL80_AIweblab1381794,T1_.jpg",
    note: "three stages in one, so it actually grows with them instead of being a one-summer toy.",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "gb Pockit Air Stroller",
    url: "https://amzn.to/4bSuqiB",
    image: "https://m.media-amazon.com/images/I/51Sji7ywJAL._AC_UF894,1000_QL80_AIweblab1381794,T1_.jpg",
    note: "folds down to the size of an umbrella — the stroller that finally fits in the overhead bin.",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    needs: ["on-the-go"],
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "PRObebi Retractable Gate",
    url: "https://amzn.to/4x4rmZg",
    image: "https://m.media-amazon.com/images/I/71jgoSnz-pL._AC_UF894,1000_QL80_.jpg",
    note: "no drilling, no bulky bars in every doorway — retracts flat when you don't need it.",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "GROWNSY Nasal Aspirator",
    url: "https://amzn.to/4xM29mq",
    image: "https://m.media-amazon.com/images/I/61AznTxpViL._AC_UF894,1000_QL80_.jpg",
    note: "the 2am congestion fix that doesn't involve your own mouth and a bulb syringe.",
    room: "Nursery & Baby",
    ageStage: "Newborn (0–3 mo)",
    needs: ["health & soothing"],
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "oogiebear Nose & Ear Picker",
    url: "https://amzn.to/4g0bOzI",
    image: "https://m.media-amazon.com/images/I/718OhKlOxUL._AC_UF894,1000_QL80_.jpg",
    note: "easy to use and less abrasive on baby's nostrils.",
    room: "Nursery & Baby",
    ageStage: "Newborn (0–3 mo)",
    needs: ["health & soothing"],
    newMomPick: true,
    frequentlyPurchased: true,
    addedAt: "2026-08-14",
  },
  {
    title: "\"Under the Sea\" Touch & Feel Book",
    url: "https://amzn.to/3Uz64UZ",
    image: "https://m.media-amazon.com/images/I/81QIibGf9pL._AC_UF1000,1000_QL80_.jpg",
    note: "textures on every page — buys you five quiet minutes and builds their little hands at the same time.",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "AMACOOL Stroller Fan",
    url: "https://amzn.to/4wuLlz0",
    image: "https://m.media-amazon.com/images/I/71t5f+JdOpL._AC_UF894,1000_QL80_.jpg",
    note: "clips anywhere, runs for hours — the difference between a good walk and a meltdown in July.",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    needs: ["on-the-go"],
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "\"Peekaboo: Sun\" Board Book",
    url: "https://amzn.to/4gi3pGN",
    image: "https://m.media-amazon.com/images/I/71UWaEDaGHL._AC_UF1000,1000_QL80_.jpg",
    note: "mirrors and sliders to pull and turn — the board book that acts like a toy.",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "Boiron Camilia Teething Drops",
    url: "https://amzn.to/4bMfzGn",
    image: "https://m.media-amazon.com/images/I/81w3s-+h-yL._AC_UF1000,1000_QL80_.jpg",
    note: "a naturopathic tincture that was a godsend through the whole teething phase — immediate relief, and only needs a few drops (less than the instructions call for).",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    needs: ["health & soothing"],
    newMomPick: true,
    frequentlyPurchased: true,
    addedAt: "2026-08-14",
  },
  {
    title: "Boudreaux's Butt Paste",
    url: "https://amzn.to/4cAKBRJ",
    image: "https://m.media-amazon.com/images/I/61IWKfB1laL._AC_UF1000,1000_QL80_.jpg",
    note: "the one diaper cream that actually clears a rash overnight.",
    room: "Nursery & Baby",
    ageStage: "Newborn (0–3 mo)",
    needs: ["health & soothing"],
    newMomPick: true,
    frequentlyPurchased: true,
    addedAt: "2026-08-14",
  },
  {
    title: "\"Never Touch a Porcupine!\"",
    url: "https://amzn.to/4qkMt70",
    image: "https://m.media-amazon.com/images/I/81M-zGFPKEL._AC_UF1000,1000_QL80_.jpg",
    note: "touch-and-feel pages that make story time interactive instead of a fight to sit still.",
    room: "Nursery & Baby",
    ageStage: "Toddler (1–3 yr)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "Amazon Basics Diaper Bags",
    url: "https://amzn.to/45tfIuQ",
    image: "https://m.media-amazon.com/images/I/71RhBxKwOWL._AC_UF894,1000_QL80_.jpg",
    note: "cheaper than any diaper pail refill and somehow better at sealing in odor — my no-fuss diaper disposal hack.",
    room: "Nursery & Baby",
    ageStage: "Newborn (0–3 mo)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
];

/* expose to the page (works over file:// and http://) */
window.ATG = { PRODUCTS, ROOMS, AGE_STAGES, NEEDS };
