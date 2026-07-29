/**
 * ANIMATION.JS — scroll reveals, counters, skill bars, cursor glow,
 * magnetic buttons, header state, mobile nav, FAQ accordion, typing effect.
 */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.addEventListener("DOMContentLoaded", function () {
    initHeaderScroll();
    initMobileNav();
    initScrollSpy();
    initRevealOnScroll();
    initCounters();
    initSkillBars();
    initFaq();
    initCursorGlow();
    initMagneticButtons();
    initScrollProgress();
    initBackToTop();
    initTypingEffect();
    initRippleButtons();
  });

  /* ---------------- Header scroll state ---------------- */
  function initHeaderScroll() {
    const header = document.getElementById("siteHeader");
    if (!header) return;
    function onScroll() {
      header.classList.toggle("scrolled", window.scrollY > 30);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------- Mobile nav drawer ---------------- */
  function initMobileNav() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("mainNav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------------- Scroll spy for nav highlighting ---------------- */
  function initScrollSpy() {
    const links = Array.from(document.querySelectorAll(".nav-link"));
    if (!links.length) return;
    const sections = links
      .map(function (l) { return document.querySelector(l.getAttribute("href")); })
      .filter(Boolean);

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const id = "#" + entry.target.id;
          links.forEach(function (l) {
            l.classList.toggle("active", l.getAttribute("href") === id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ---------------- Reveal on scroll ---------------- */
  function initRevealOnScroll() {
    const items = document.querySelectorAll(".reveal-up");
    if (!items.length) return;

    if (prefersReducedMotion) {
      items.forEach(function (el) { el.classList.add("in-view"); });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            const delay = Math.min(i * 40, 240);
            setTimeout(function () { entry.target.classList.add("in-view"); }, delay);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------- Animated counters ---------------- */
  function initCounters() {
    const counters = document.querySelectorAll(".counter");
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (el) { observer.observe(el); });
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-target"), 10) || 0;
    if (prefersReducedMotion) { el.textContent = target; return; }
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }

  /* ---------------- Skill bars ---------------- */
  function initSkillBars() {
    const bars = document.querySelectorAll(".skill-bar");
    if (!bars.length) return;

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const pct = el.getAttribute("data-percent") || "0";
          const fill = el.querySelector(".bar i");
          if (fill) fill.style.width = pct + "%";
          obs.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    bars.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------- FAQ accordion ---------------- */
  function initFaq() {
    const items = document.querySelectorAll(".faq-item");
    items.forEach(function (item) {
      const btn = item.querySelector(".faq-q");
      const answer = item.querySelector(".faq-a");
      if (!btn || !answer) return;

      btn.addEventListener("click", function () {
        const isOpen = item.classList.contains("open");

        items.forEach(function (other) {
          other.classList.remove("open");
          other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-a").style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  }

  /* ---------------- Cursor glow ---------------- */
  function initCursorGlow() {
    const glow = document.getElementById("cursorGlow");
    if (!glow || prefersReducedMotion || window.matchMedia("(hover: none)").matches) return;

    let mouseX = -9999, mouseY = -9999, curX = -9999, curY = -9999;

    window.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      glow.style.opacity = "1";
    });

    document.addEventListener("mouseleave", function () { glow.style.opacity = "0"; });

    function raf() {
      curX += (mouseX - curX) * 0.14;
      curY += (mouseY - curY) * 0.14;
      glow.style.transform = "translate(" + curX + "px, " + curY + "px) translate(-50%, -50%)";
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  /* ---------------- Magnetic buttons ---------------- */
  function initMagneticButtons() {
    if (prefersReducedMotion || window.matchMedia("(hover: none)").matches) return;
    const magnets = document.querySelectorAll(".magnetic");

    magnets.forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = "translate(" + x * 0.25 + "px," + y * 0.4 + "px)";
        el.style.setProperty("--rx", ((e.clientX - rect.left) / rect.width) * 100 + "%");
        el.style.setProperty("--ry", ((e.clientY - rect.top) / rect.height) * 100 + "%");
      });
      el.addEventListener("mouseleave", function () {
        el.style.transform = "translate(0, 0)";
      });
    });

    // Floating icons react gently to the mouse for a premium micro-interaction.
    const icons = document.querySelectorAll(".ficon");
    const heroVisual = document.querySelector(".hero-visual");
    if (heroVisual && icons.length) {
      heroVisual.addEventListener("mousemove", function (e) {
        const rect = heroVisual.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        icons.forEach(function (icon, i) {
          const factor = 6 + (i % 4) * 2;
          icon.style.setProperty("--mx", dx * factor + "px");
          icon.style.setProperty("--my", dy * factor + "px");
        });
      });
    }
  }

  /* ---------------- Ripple on buttons (click position) ---------------- */
  function initRippleButtons() {
    document.querySelectorAll(".btn").forEach(function (btn) {
      btn.addEventListener("pointerdown", function (e) {
        const rect = btn.getBoundingClientRect();
        btn.style.setProperty("--rx", ((e.clientX - rect.left) / rect.width) * 100 + "%");
        btn.style.setProperty("--ry", ((e.clientY - rect.top) / rect.height) * 100 + "%");
      });
    });
  }

  /* ---------------- Scroll progress bar ---------------- */
  function initScrollProgress() {
    const bar = document.getElementById("scrollProgress");
    if (!bar) return;
    function onScroll() {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (scrolled / max) * 100 : 0) + "%";
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------- Back to top ---------------- */
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    window.addEventListener("scroll", function () {
      btn.classList.toggle("show", window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* ---------------- Typing effect on hero name ---------------- */
  function initTypingEffect() {
    const el = document.querySelector(".typing-line");
    if (!el || prefersReducedMotion) return;
    const fullText = el.textContent;
    el.textContent = "";
    let i = 0;
    (function type() {
      if (i <= fullText.length) {
        el.textContent = fullText.slice(0, i);
        i++;
        setTimeout(type, 55);
      } else {
        el.style.borderRight = "none";
      }
    })();
  }
})();
