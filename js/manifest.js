/**
 * IMAGE MANIFEST
 * Edit this file whenever you add new portfolio images.
 */

const PROFILE_IMAGES = [
  "profile.webp"
];

const PORTFOLIO_ITEMS = [

  {
    file: "branding1.webp",
    category: "branding",
    title: "MH Creative Studio Brand Identity",
    titleEn: "MH Creative Studio Brand Identity"
  },

  {
    file: "branding2.webp",
    category: "branding",
    title: "Brand Guidelines",
    titleEn: "Brand Guidelines"
  },

  {
    file: "branding3.webp",
    category: "branding",
    title: "Stationery Design",
    titleEn: "Stationery Design"
  },

  {
    file: "branding4.webp",
    category: "branding",
    title: "Business Identity",
    titleEn: "Business Identity"
  },

  {
    file: "branding5.webp",
    category: "branding",
    title: "Brand Presentation",
    titleEn: "Brand Presentation"
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
  logo: {
    bn: "লোগো",
    en: "Logo"
  },
  banner: {
    bn: "ব্যানার",
    en: "Banner"
  },
  branding: {
    bn: "ব্র্যান্ডিং",
    en: "Branding"
  },
  social: {
    bn: "সোশ্যাল মিডিয়া",
    en: "Social"
  },
  medical: {
    bn: "মেডিকেল",
    en: "Medical"
  },
  website: {
    bn: "ওয়েবসাইট",
    en: "Website"
  },
  "landing-page": {
    bn: "ল্যান্ডিং পেজ",
    en: "Landing Page"
  },
  animation: {
    bn: "অ্যানিমেশন",
    en: "Animation"
  },
  ui: {
    bn: "ইউআই ডিজাইন",
    en: "UI Design"
  }
};

window.PROFILE_IMAGES = PROFILE_IMAGES;
window.PORTFOLIO_ITEMS = PORTFOLIO_ITEMS;
window.CATEGORY_FOLDERS = CATEGORY_FOLDERS;
window.CATEGORY_LABELS = CATEGORY_LABELS;
window.PROFILE_FOLDER = "assets/profile/";
