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
