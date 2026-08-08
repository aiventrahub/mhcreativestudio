# MH Creative Studio — Premium Portfolio Website

A production-ready, single-page portfolio site built with plain **HTML, CSS,
and JavaScript** — no framework, no build step. Open `index.html` and it
works, on your desktop or after uploading it as-is to GitHub Pages / any
static host.

## Quick start

1. Unzip the project.
2. Double-click `index.html` (or right-click → Open with your browser).
3. That's it — no `npm install`, no server required.

For the smoothest local experience (so relative image paths always behave
identically to production), you can optionally serve it with any static
server, e.g. the VS Code "Live Server" extension — but it is
not required.

## Adding your photo and portfolio images

Browsers cannot read the contents of a folder on their own — a static site
has no server to ask "what files are inside `/assets/logos/`". So instead of
requiring you to touch any code, this project uses **one small file** as the
single source of truth:

**`js/manifest.js`**

- Drop your profile photo in `assets/profile/` and add its filename to
  `PROFILE_IMAGES`. The hero section picks it up automatically (first entry
  wins). Until you add one, an elegant animated "MH" monogram is shown
  instead — the site never looks broken or half-finished.
- Drop portfolio images into the matching folder (`assets/logos/`,
  `assets/branding/`, `assets/medical/`, etc.) and add one entry to
  `PORTFOLIO_ITEMS` per image (filename + category + title). The portfolio
  grid, the category filters, and the lightbox all rebuild themselves from
  this list automatically — you never edit `index.html`, the CSS, or the
  gallery script.

## Folder structure

```
portfolio/
├── index.html
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── profile/        ← your photo
│   ├── logos/           branding/       banners/
│   ├── social/          medical/        landing-page/
│   ├── ui/               portfolio/     thumbnails/
├── css/
│   ├── style.css        ← design system, layout, components
│   └── responsive.css   ← 320px → 1920px breakpoints
├── js/
│   ├── manifest.js      ← EDIT THIS to add your images
│   ├── theme.js         ← dark/light toggle
│   ├── animation.js     ← scroll reveals, counters, cursor glow, etc.
│   ├── gallery.js       ← hero image + portfolio grid + lightbox
│   └── main.js          ← page loader, footer year, contact form
├── favicon/favicon.svg
└── fonts/ (Inter + Hind Siliguri load from Google Fonts by default;
            drop local .woff2 files here and update the @font-face
            in style.css if you need to work fully offline)
```

## Features included

- Aurora gradient background, glassmorphism cards, noise texture, glow effects
- Sticky, blurred, scroll-aware header with mobile drawer navigation
- Hero with auto-loaded profile photo, floating glowing tool icons, typing
  effect, animated counters
- About, Services (12 cards), Skills (animated progress bars), Portfolio
  (auto-generated grid + filtering + lightbox with keyboard support),
  Experience timeline, auto-sliding Testimonials, Blog, FAQ accordion,
  Contact form + social links + map placeholder
- Dark/light theme toggle (persisted), cursor glow, magnetic buttons, back-to-top,
  floating WhatsApp CTA, scroll progress bar
- SEO: meta description, keywords, Open Graph, Twitter Card, JSON-LD Organization
  schema, `sitemap.xml`, `robots.txt`
- Fully responsive from 320px to 1920px+
- Respects `prefers-reduced-motion` and keeps visible keyboard focus states

## Contact
MH Creative Studio — Md. Akash (মোঃ আকাশ)
Website: https://mhcreativestudio.pro.bd/
Email: mhcreativestudiohub@gmail.com
Phone: +8801580804835
Facebook: https://www.facebook.com/mh.creative.studio24
Instagram: https://www.instagram.com/mh.creative.studio24
GitHub: https://github.com/aiventrahub
Telegram: https://t.me/aiventrahub_official
