/*
 * GALLERY.JS
 * - Loads the hero image automatically from PROFILE_IMAGES (js/manifest.js).
 * - Builds the portfolio grid automatically from PORTFOLIO_ITEMS.
 * - Handles category filtering and the lightbox (zoom / next / prev / keyboard).
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    loadHeroImage();
    const items = buildPortfolioGrid();
    initFilters();
    initLightbox(items);
  });

  function isAbsoluteUrl(u) {
    return typeof u === 'string' && /^https?:\/\//i.test(u);
  }

  /* ---------------- Hero image ---------------- */
  function loadHeroImage() {
    const img = document.getElementById("heroImage");
    const fallback = document.getElementById("heroFallback");
    const list = window.PROFILE_IMAGES || [];
    const folder = window.PROFILE_FOLDER || "assets/profile/";

    if (!img) return; // no image element

    if (!list.length) return; // fallback monogram stays visible

    // Use absolute URL if provided, otherwise use folder + filename
    const entry = list[0];
    const src = isAbsoluteUrl(entry) ? entry : folder + entry;

    img.src = src;
    img.onload = function () {
      img.classList.add("loaded");
      if (fallback) fallback.classList.add("hide");
    };
    img.onerror = function () {
      img.classList.remove("loaded");
      if (fallback) fallback.classList.remove("hide");
    };
  }

  /* ---------------- Portfolio grid ---------------- */
  function buildPortfolioGrid() {
    const grid = document.getElementById("portfolioGrid");
    const data = window.PORTFOLIO_ITEMS || [];
    const folders = window.CATEGORY_FOLDERS || {};
    const labels = window.CATEGORY_LABELS || {};
    if (!grid) return [];

    grid.innerHTML = "";

    if (!data.length) {
      grid.innerHTML =
        '<div class="portfolio-empty">' +
        "<h3>শীঘ্রই আসছে নতুন কাজ ✨</h3>" +
        '<p style="color:var(--text-muted)">assets/&lt;category&gt;/ ফোল্ডারে ছবি যোগ করুন এবং js/manifest.js এ এন্ট্রি দিন — গুলো এখানে প্রদর্শিত হবে।</p>' +
        "</div>";
      return [];
    }

    const rendered = [];

    data.forEach(function (item, index) {
      const folder = folders[item.category] || "assets/portfolio/";
      // If item.file is an absolute URL use it directly, otherwise prefix with folder
      const src = item && item.file ? (isAbsoluteUrl(item.file) ? item.file : folder + item.file) : "";
      const label = labels[item.category] || { bn: item.category, en: item.category };

      const card = document.createElement("div");
      card.className = "portfolio-card";
      card.setAttribute("data-category", item.category);
      card.setAttribute("data-index", index);
      card.innerHTML =
        '<img src="' + src + '" alt="' + (item.title || label.en) + '" loading="lazy" />' +
        '<div class="p-overlay"><span>' + label.en + "</span><h4>" + (item.title || label.en) + "</h4></div>";

      card.addEventListener("click", function () {
        window.dispatchEvent(new CustomEvent("open-lightbox", { detail: { index: index } }));
      });

      grid.appendChild(card);
      rendered.push({ src: src, title: item.title || label.en, titleEn: item.titleEn || "" });
    });

    return rendered;
  }

  /* ---------------- Filters ---------------- */
  function initFilters() {
    const bar = document.getElementById("filterBar");
    const grid = document.getElementById("portfolioGrid");
    if (!bar || !grid) return;

    bar.addEventListener("click", function (e) {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      bar.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      grid.querySelectorAll(".portfolio-card").forEach(function (card) {
        const match = filter === "all" || card.getAttribute("data-category") === filter;
        card.style.display = match ? "" : "none";
      });
    });
  }

  /* ---------------- Lightbox ---------------- */
  function initLightbox(items) {
    const lightbox = document.getElementById("lightbox");
    const lbImage = document.getElementById("lbImage");
    const lbCaption = document.getElementById("lbCaption");
    const closeBtn = document.getElementById("lbClose");
    const prevBtn = document.getElementById("lbPrev");
    const nextBtn = document.getElementById("lbNext");
    if (!lightbox || !items) return;

    let current = 0;

    function show(index) {
      if (!items.length) return;
      current = (index + items.length) % items.length;
      const item = items[current];
      lbImage.src = item.src;
      lbImage.alt = item.title;
      lbCaption.textContent = item.title + (item.titleEn ? " · " + item.titleEn : "");
    }

    function open(index) {
      show(index);
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function close() {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    window.addEventListener("open-lightbox", function (e) { open(e.detail.index); });
    closeBtn && closeBtn.addEventListener("click", close);
    prevBtn && prevBtn.addEventListener("click", function () { show(current - 1); });
    nextBtn && nextBtn.addEventListener("click", function () { show(current + 1); });

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) close();
    });

    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
  }
})();
