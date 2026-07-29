/**
 * IMAGE MANIFEST
 * ─────────────────────────────────────────────────────────────────────────
 * Static websites opened directly as a file (file:///index.html) or hosted
 * on plain static hosting (GitHub Pages) CANNOT read a folder's contents —
 * there is no server to ask "what files are in /assets/logos/". Browsers
 * block that for security reasons, with or without a framework.
 *
 * So this manifest is the one file you edit when you add images.
 * You never touch index.html, CSS, or the gallery/hero logic — just list
 * the filename here and it is picked up automatically everywhere it's used
 * (hero image, portfolio grid, filters, lightbox).
 *
 * HOW TO ADD YOUR PROFILE PHOTO
 *  1. Put the image inside  /assets/profile/
 *  2. Add its filename to PROFILE_IMAGES below (first one is used).
 *
 * HOW TO ADD A PORTFOLIO PIECE
 *  1. Put the image inside the matching /assets/<category>/ folder.
 *  2. Add one object to PORTFOLIO_ITEMS with its filename + category.
 *
 * Nothing else in the codebase needs to change.
 */

const PROFILE_IMAGES = [
  // "your-photo.jpg"
];

const PORTFOLIO_ITEMS = [
  // Example — uncomment and edit once you add a real file:
  // {
  //   file: "clinic-banner-01.jpg",
  //   category: "medical",
  //   title: "সিটি হাসপাতাল — ওয়েব ব্যানার",
  //   titleEn: "City Hospital — Web Banner",
  // },
];

const CATEGORY_FOLDERS = {
  logo: "assets/logos/",
  banner: "assets/banners/",
  branding: "assets/branding/",
  social: "assets/social/",
  medical: "assets/medical/",
  website: "assets/ui/",
  "landing-page": "assets/landing-page/",
  animation: "assets/thumbnails/",
  ui: "assets/ui/",
};

const CATEGORY_LABELS = {
  logo: { bn: "লোগো", en: "Logo" },
  banner: { bn: "ব্যানার", en: "Banner" },
  branding: { bn: "ব্র্যান্ডিং", en: "Branding" },
  social: { bn: "সোশ্যাল মিডিয়া", en: "Social" },
  medical: { bn: "মেডিকেল", en: "Medical" },
  website: { bn: "ওয়েবসাইট", en: "Website" },
  "landing-page": { bn: "ল্যান্ডিং পেজ", en: "Landing Page" },
  animation: { bn: "অ্যানিমেশন", en: "Animation" },
  ui: { bn: "ইউআই ডিজাইন", en: "UI Design" },
};

window.PROFILE_IMAGES = PROFILE_IMAGES;
window.PORTFOLIO_ITEMS = PORTFOLIO_ITEMS;
window.CATEGORY_FOLDERS = CATEGORY_FOLDERS;
window.CATEGORY_LABELS = CATEGORY_LABELS;
window.PROFILE_FOLDER = "assets/profile/";
