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

const NEEDS = ["feeding", "sleep", "bath", "on-the-go", "mom-care"];

/* ------------------------------------------------------------
   SEED PRODUCTS
   These are realistic placeholders so the site is live and
   clickable. Swap the `url` + `image` for your real affiliate
   links, and delete any you don't use.
   ------------------------------------------------------------ */
const PRODUCTS = [
  /* ---------- BEDROOM & BATH ---------- */
  {
    title: "Waffle Weave Linen Duvet",
    url: "#",
    image: "",
    price: "$128",
    note: "the texture that makes a bed look editorial without trying.",
    room: "Bedroom & Bath",
    featured: true,
    addedAt: "2026-08-01",
  },
  {
    title: "Turkish Cotton Bath Towel Set",
    url: "#",
    image: "",
    price: "$46",
    note: "hotel-weight, gets softer every wash. the quiet luxury of a good towel.",
    room: "Bedroom & Bath",
    addedAt: "2026-07-20",
  },
  {
    title: "Ceramic Stoneware Diffuser",
    url: "#",
    image: "",
    price: "$39",
    note: "sets the mood in five minutes — my nightstand non-negotiable.",
    room: "Bedroom & Bath",
    addedAt: "2026-07-05",
  },
  {
    title: "Briignite Plug-In Night Lights",
    url: "https://amzn.to/4xFO9ub",
    image: "",
    note: "plug-and-forget — they sense dusk and just handle it, hallway to nursery.",
    room: "Bedroom & Bath",
    addedAt: "2026-08-14",
  },
  {
    title: "Earthley Magnesium Lotion",
    url: "https://amzn.to/4bS6Rq6",
    image: "",
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
    image: "",
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
    image: "",
    note: "hang it by a window that catches a breeze — the sound alone slows a room down.",
    room: "Bedroom & Bath",
    addedAt: "2026-08-14",
  },

  /* ---------- LIVING ROOM ---------- */
  {
    title: "Boucle Accent Chair",
    url: "#",
    image: "",
    price: "$189",
    note: "the piece guests always ask about. sculptural but actually comfortable.",
    room: "Living Room",
    featured: true,
    addedAt: "2026-08-03",
  },
  {
    title: "Warm-Dim LED Floor Lamp",
    url: "#",
    image: "",
    price: "$72",
    note: "warm, dimmable light is the whole personality of a room after 7pm.",
    room: "Living Room",
    addedAt: "2026-07-15",
  },
  {
    title: "Chunky Knit Throw Blanket",
    url: "#",
    image: "",
    price: "$54",
    note: "drape it, don't fold it. instant cozy for the couch corner.",
    room: "Living Room",
    addedAt: "2026-06-28",
  },

  /* ---------- NURSERY & BABY (many are newMomPicks) ---------- */
  {
    title: "Hatch Rest Sound Machine + Night Light",
    url: "#",
    image: "",
    price: "$69",
    note: "the one thing that actually got the baby sleeping. app-controlled from bed.",
    room: "Nursery & Baby",
    ageStage: "Newborn (0–3 mo)",
    needs: ["sleep"],
    newMomPick: true,
    featured: true,
    addedAt: "2026-08-04",
  },
  {
    title: "Convertible Crib (grows to toddler bed)",
    url: "#",
    image: "",
    price: "$220",
    note: "buy it once — it converts through the toddler years. worth it.",
    room: "Nursery & Baby",
    ageStage: "Pregnancy / Registry",
    needs: ["sleep"],
    newMomPick: true,
    addedAt: "2026-07-30",
  },
  {
    title: "Silicone Bath Kneeler + Elbow Rest",
    url: "#",
    image: "",
    price: "$28",
    note: "your knees and back will thank you. the unsexy gift she'll use daily.",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    needs: ["bath"],
    newMomPick: true,
    addedAt: "2026-07-12",
  },
  {
    title: "Haakaa Silicone Breast Pump",
    url: "#",
    image: "",
    price: "$15",
    note: "the $15 lifesaver no registry lists. catches letdown hands-free.",
    room: "Nursery & Baby",
    ageStage: "Newborn (0–3 mo)",
    needs: ["feeding", "mom-care"],
    newMomPick: true,
    addedAt: "2026-07-08",
  },
  {
    title: "Foldable Travel High Chair",
    url: "#",
    image: "",
    price: "$59",
    note: "clips to any table, packs flat. the on-the-go feeding fix.",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    needs: ["feeding", "on-the-go"],
    newMomPick: true,
    addedAt: "2026-06-30",
  },
  {
    title: "Stackable Silicone Stacking Cups",
    url: "#",
    image: "",
    price: "$12",
    note: "bath toy, stacking toy, snack cup — earns its keep for years.",
    room: "Nursery & Baby",
    ageStage: "Toddler (1–3 yr)",
    needs: ["bath"],
    newMomPick: true,
    addedAt: "2026-06-18",
  },
  {
    title: "Skip Hop Activity Center",
    url: "https://amzn.to/4qdZ0ZK",
    image: "",
    note: "three stages in one, so it actually grows with them instead of being a one-summer toy.",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "gb Pockit Air Stroller",
    url: "https://amzn.to/4bSuqiB",
    image: "",
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
    image: "",
    note: "no drilling, no bulky bars in every doorway — retracts flat when you don't need it.",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "GROWNSY Nasal Aspirator",
    url: "https://amzn.to/4xM29mq",
    image: "",
    note: "the 2am congestion fix that doesn't involve your own mouth and a bulb syringe.",
    room: "Nursery & Baby",
    ageStage: "Newborn (0–3 mo)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "oogiebear Nose & Ear Picker",
    url: "https://amzn.to/4g0bOzI",
    image: "",
    note: "the tiny scoop that makes newborn boogers a non-event. registry-list MVP.",
    room: "Nursery & Baby",
    ageStage: "Newborn (0–3 mo)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "\"Under the Sea\" Touch & Feel Book",
    url: "https://amzn.to/3Uz64UZ",
    image: "",
    note: "textures on every page — buys you five quiet minutes and builds their little hands at the same time.",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "AMACOOL Stroller Fan",
    url: "https://amzn.to/4wuLlz0",
    image: "",
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
    image: "",
    note: "mirrors and sliders to pull and turn — the board book that acts like a toy.",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "Boiron Camilia Teething Drops",
    url: "https://amzn.to/4bMfzGn",
    image: "",
    note: "the teething drops we reached for before anything stronger. gentle enough for 2am.",
    room: "Nursery & Baby",
    ageStage: "Infant (3–12 mo)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "Boudreaux's Butt Paste",
    url: "https://amzn.to/4cAKBRJ",
    image: "",
    note: "the one diaper cream that actually clears a rash overnight.",
    room: "Nursery & Baby",
    ageStage: "Newborn (0–3 mo)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "\"Never Touch a Porcupine!\"",
    url: "https://amzn.to/4qkMt70",
    image: "",
    note: "touch-and-feel pages that make story time interactive instead of a fight to sit still.",
    room: "Nursery & Baby",
    ageStage: "Toddler (1–3 yr)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },
  {
    title: "Amazon Basics Diaper Bags",
    url: "https://amzn.to/45tfIuQ",
    image: "",
    note: "cheaper than any diaper pail refill and somehow better at sealing in odor — my no-fuss diaper disposal hack.",
    room: "Nursery & Baby",
    ageStage: "Newborn (0–3 mo)",
    newMomPick: true,
    addedAt: "2026-08-14",
  },

  /* ---------- KITCHEN & DINING ---------- */
  {
    title: "Enameled Cast Iron Dutch Oven",
    url: "#",
    image: "",
    price: "$89",
    note: "the workhorse that looks good enough to leave on the stove.",
    room: "Kitchen & Dining",
    featured: true,
    addedAt: "2026-08-02",
  },
  {
    title: "Fluted Glass Coffee Mugs (set of 4)",
    url: "#",
    image: "",
    price: "$34",
    note: "morning coffee just hits different in these. the little upgrade.",
    room: "Kitchen & Dining",
    addedAt: "2026-07-18",
  },
  {
    title: "Acacia Wood Serving Board",
    url: "#",
    image: "",
    price: "$41",
    note: "cheese night hero, doubles as counter styling. always earns compliments.",
    room: "Kitchen & Dining",
    addedAt: "2026-07-01",
  },

  /* ---------- OFFICE & CREATIVE WORKSPACE ---------- */
  {
    title: "Linen-Wrapped Desk Organizer",
    url: "#",
    image: "",
    price: "$38",
    note: "a tidy desk you actually want to sit at. neutral, calm, editorial.",
    room: "Office & Creative Workspace",
    featured: true,
    addedAt: "2026-08-05",
  },
  {
    title: "Warm-Light Monitor Bar",
    url: "#",
    image: "",
    price: "$65",
    note: "no glare, no desk clutter — the creator lighting upgrade.",
    room: "Office & Creative Workspace",
    addedAt: "2026-07-22",
  },
  {
    title: "Aesthetic Cable Management Kit",
    url: "#",
    image: "",
    price: "$19",
    note: "the small thing that makes a workspace photograph clean.",
    room: "Office & Creative Workspace",
    addedAt: "2026-07-03",
  },
];

/* expose to the page (works over file:// and http://) */
window.ATG = { PRODUCTS, ROOMS, AGE_STAGES, NEEDS };
