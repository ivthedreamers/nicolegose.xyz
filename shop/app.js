/* ============================================================
   ALL THINGS GOOD — rendering + interactivity
   Reads window.ATG (from products.js) and builds the page.
   ============================================================ */
(function () {
  "use strict";

  var ATG = window.ATG || { PRODUCTS: [], ROOMS: [], AGE_STAGES: [], NEEDS: [] };
  var PAGE = document.body.getAttribute("data-page") === "new-moms" ? "new-moms" : "home";

  /* editorial one-liners per row (optional flavor) */
  var ROOM_NOTES = {
    "Bedroom & Bath": "soft textures, warm light, the quiet luxuries.",
    "Living Room": "the pieces guests notice — comfort that photographs well.",
    "Nursery & Baby": "gentle, practical, and built to grow with them.",
    "Kitchen & Dining": "everyday workhorses that look good on the counter.",
    "Office & Creative Workspace": "a calm, tidy desk you actually want to sit at.",
  };
  var STAGE_NOTES = {
    "Pregnancy / Registry": "the big-ticket things worth deciding on early.",
    "Newborn (0–3 mo)": "survival mode essentials for the fourth trimester.",
    "Infant (3–12 mo)": "as she wakes up to the world — feeding, bath, play.",
    "Toddler (1–3 yr)": "pieces that keep earning their place for years.",
  };

  var state = { filter: "All", sort: "featured" };

  /* ---------- helpers ---------- */
  function pad(n) { return String(n).padStart(2, "0"); }

  function priceNum(p) {
    if (!p) return null;
    var n = parseFloat(String(p).replace(/[^0-9.]/g, ""));
    return isNaN(n) ? null : n;
  }

  function sortItems(items) {
    var arr = items.slice();
    switch (state.sort) {
      case "newest":
        arr.sort(function (a, b) { return (b.addedAt || "").localeCompare(a.addedAt || ""); });
        break;
      case "price-asc":
        arr.sort(function (a, b) {
          var x = priceNum(a.price), y = priceNum(b.price);
          if (x === null) return 1; if (y === null) return -1; return x - y;
        });
        break;
      case "price-desc":
        arr.sort(function (a, b) {
          var x = priceNum(a.price), y = priceNum(b.price);
          if (x === null) return 1; if (y === null) return -1; return y - x;
        });
        break;
      case "az":
        arr.sort(function (a, b) { return a.title.localeCompare(b.title); });
        break;
      default: /* featured */
        arr.sort(function (a, b) {
          if (!!b.featured - !!a.featured) return !!b.featured - !!a.featured;
          return (b.addedAt || "").localeCompare(a.addedAt || "");
        });
    }
    return arr;
  }

  /* rows definition depends on the page */
  function rowDefs() {
    if (PAGE === "new-moms") {
      return ATG.AGE_STAGES.map(function (stage) {
        return {
          key: stage,
          title: stage,
          note: STAGE_NOTES[stage] || "",
          items: ATG.PRODUCTS.filter(function (p) { return p.newMomPick && p.ageStage === stage; }),
        };
      });
    }
    return ATG.ROOMS.map(function (room) {
      return {
        key: room,
        title: room,
        note: ROOM_NOTES[room] || "",
        items: ATG.PRODUCTS.filter(function (p) { return p.room === room; }),
      };
    });
  }

  /* apply the active filter to a row's items */
  function filterRow(row) {
    if (state.filter === "All") return { visible: true, items: row.items };
    if (PAGE === "new-moms") {
      var need = state.filter;
      return {
        visible: true,
        items: row.items.filter(function (p) { return (p.needs || []).indexOf(need) !== -1; }),
      };
    }
    // home: filter is a room -> only that room's row is visible
    return { visible: row.key === state.filter, items: row.items };
  }

  /* ---------- element builders ---------- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function buildCard(product, index) {
    var card = el("article", "card");

    var numLabel = el("span", "card__label",
      pad(index + 1) + " / " + escapeHtml(product.title).toUpperCase());

    // media
    var media = el("div", "card__media");
    if (product.image) {
      var img = el("img");
      img.src = product.image;
      img.alt = product.title;
      img.loading = "lazy";
      media.appendChild(img);
    } else {
      media.appendChild(el("div", "card__ph", escapeHtml(product.title.charAt(0))));
    }
    if (PAGE !== "new-moms" && product.newMomPick) {
      media.appendChild(el("span", "card__badge", "New Mom Pick"));
    }

    // body
    var body = el("div", "card__body");
    body.appendChild(numLabel);
    body.appendChild(el("h3", "card__title", escapeHtml(product.title)));
    if (product.note) body.appendChild(el("p", "card__note", escapeHtml(product.note)));

    var foot = el("div", "card__foot");
    if (product.price) foot.appendChild(el("span", "card__price", escapeHtml(product.price)));
    else foot.appendChild(el("span", ""));
    var btn = el("a", "btn btn--sm", "Shop →");
    btn.href = product.url || "#";
    btn.target = "_blank";
    btn.rel = "sponsored nofollow noopener";
    foot.appendChild(btn);
    body.appendChild(foot);

    card.appendChild(media);
    card.appendChild(body);

    return card;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function buildRow(row, displayIndex) {
    var section = el("section", "row");
    section.setAttribute("data-key", row.key);

    var head = el("div", "row__head");
    var titleWrap = el("div", "row__title-wrap");
    titleWrap.appendChild(el("span", "row__num", pad(displayIndex + 1)));
    var title = el("h2", "row__title",
      escapeHtml(row.title) + " <sup>(" + row.items.length + ")</sup>");
    titleWrap.appendChild(title);
    head.appendChild(titleWrap);
    section.appendChild(head);

    if (row.note) {
      var note = el("p", "row__note", escapeHtml(row.note));
      note.style.marginTop = "-14px";
      note.style.marginBottom = "20px";
      section.appendChild(note);
    }

    var strip = el("div", "strip");
    row.items.forEach(function (p, i) { strip.appendChild(buildCard(p, i)); });
    section.appendChild(strip);

    return section;
  }

  /* ---------- render ---------- */
  function render() {
    var container = document.getElementById("rows");
    container.innerHTML = "";
    var defs = rowDefs();
    var displayIndex = 0;

    defs.forEach(function (def) {
      var res = filterRow(def);
      if (!res.visible) return;
      var items = sortItems(res.items);
      if (items.length === 0) return;
      var row = { key: def.key, title: def.title, note: def.note, items: items };
      container.appendChild(buildRow(row, displayIndex));
      displayIndex++;
    });

    if (displayIndex === 0) {
      container.appendChild(el("p", "row__note", "Nothing here yet — try a different filter."));
    }
  }

  /* ---------- filter chips ---------- */
  function buildChips() {
    var host = document.getElementById("filterChips");
    if (!host) return;
    var values = PAGE === "new-moms" ? ["All"].concat(ATG.NEEDS) : ["All"].concat(ATG.ROOMS);
    values.forEach(function (v) {
      var chip = el("button", "chip", v === "All" ? "All" : escapeHtml(v));
      chip.setAttribute("aria-pressed", v === state.filter ? "true" : "false");
      chip.addEventListener("click", function () {
        state.filter = v;
        Array.prototype.forEach.call(host.children, function (c) {
          c.setAttribute("aria-pressed", c === chip ? "true" : "false");
        });
        render();
      });
      host.appendChild(chip);
    });
  }

  /* ---------- hero count ---------- */
  function setHeroCount() {
    var elc = document.getElementById("heroCount");
    if (!elc) return;
    var n = PAGE === "new-moms"
      ? ATG.PRODUCTS.filter(function (p) { return p.newMomPick; }).length
      : ATG.PRODUCTS.length;
    elc.textContent = "(" + n + ")";
  }

  /* ---------- controls ---------- */
  function wireControls() {
    var sort = document.getElementById("sortSelect");
    if (sort) sort.addEventListener("change", function () { state.sort = sort.value; render(); });

    // mobile menu
    var mNav = document.getElementById("mobileNav");
    ["menuBtn", "menuBtnMobile"].forEach(function (id) {
      var b = document.getElementById(id);
      if (b && mNav) b.addEventListener("click", function () { mNav.classList.add("open"); });
    });
    var close = document.getElementById("mobileClose");
    if (close && mNav) close.addEventListener("click", function () { mNav.classList.remove("open"); });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    setHeroCount();
    buildChips();
    wireControls();
    render();
  });
})();
