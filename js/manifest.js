/**
 * IMAGE MANIFEST
 */

const PROFILE_IMAGES = [
  "profile.webp" // assets/profile/profile.webp
];

const PORTFOLIO_ITEMS = [

  {
    file: "social1.webp",
    category: "social",
    title: "MH Creative Studio Social Design",
    titleEn: "MH Creative Studio Social Design"
  },

  {
    file: "logo1.webp",
    category: "logo",
    title: "MH Creative Studio Logo",
    titleEn: "MH Creative Studio Logo"
  },

  {
    file: "branding1.webp",
    category: "branding",
    title: "Brand Identity",
    titleEn: "Brand Identity"
  },

  {
    file: "medical1.webp",
    category: "medical",
    title: "Medical Banner",
    titleEn: "Medical Banner"
  },

  {
    file: "banner1.webp",
    category: "banner",
    title: "Promotional Banner",
    titleEn: "Promotional Banner"
  },

  {
    file: "website1.webp",
    category: "website",
    title: "Website Design",
    titleEn: "Website Design"
  }

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
