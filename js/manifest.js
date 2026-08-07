/**
 * IMAGE MANIFEST
 * Edit this file whenever you add new portfolio images.
 * Using absolute URLs from Cloudinary so images load directly on GitHub Pages.
 */

const PROFILE_IMAGES = [
  "https://res.cloudinary.com/mhstudio/image/upload/v1785840221/profile_spfmkk.webp"
];

const PORTFOLIO_ITEMS = [
  // Branding project images
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785012766/40054_tzv1uc.png",
    category: "branding",
    title: "MH Creative Studio Brand Identity",
    titleEn: "MH Creative Studio Brand Identity"
  },
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785012766/40057_bpzzao.png",
    category: "branding",
    title: "Brand Guidelines",
    titleEn: "Brand Guidelines"
  },
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013400/40055_bcu3ku.png",
    category: "branding",
    title: "Stationery Design",
    titleEn: "Stationery Design"
  },
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013400/40057_zoz3be.png",
    category: "branding",
    title: "Business Identity",
    titleEn: "Business Identity"
  },

  // Social — Food & Restaurant (6)
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013400/40073_a2femi.png",
    category: "social",
    title: "Food Campaign — 1",
    titleEn: "Food Campaign 1"
  },
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013399/40079_ljlotx.png",
    category: "social",
    title: "Food Campaign — 2",
    titleEn: "Food Campaign 2"
  },
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013399/40076_efbvtw.png",
    category: "social",
    title: "Food Campaign — 3",
    titleEn: "Food Campaign 3"
  },
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013398/40080_xzrwjz.png",
    category: "social",
    title: "Food Campaign — 4",
    titleEn: "Food Campaign 4"
  },
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013400/40077_hfahyr.png",
    category: "social",
    title: "Food Campaign — 5",
    titleEn: "Food Campaign 5"
  },
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013399/40078_wpp8ni.png",
    category: "social",
    title: "Food Campaign — 6",
    titleEn: "Food Campaign 6"
  },

  // Fashion (4)
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013397/40081_bw7x7z.png",
    category: "social",
    title: "Fashion — 1",
    titleEn: "Fashion 1"
  },
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013397/40083_tnqzqx.png",
    category: "social",
    title: "Fashion — 2",
    titleEn: "Fashion 2"
  },
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013397/40082_bpq1am.png",
    category: "social",
    title: "Fashion — 3",
    titleEn: "Fashion 3"
  },
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013397/40084_d0njfp.png",
    category: "social",
    title: "Fashion — 4",
    titleEn: "Fashion 4"
  },

  // Electronics (4)
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013395/41668_drygxs.png",
    category: "social",
    title: "Electronics — 1",
    titleEn: "Electronics 1"
  },
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013395/41685_b0yfyc.png",
    category: "social",
    title: "Electronics — 2",
    titleEn: "Electronics 2"
  },
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013395/41679_b1idho.png",
    category: "social",
    title: "Electronics — 3",
    titleEn: "Electronics 3"
  },
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785013397/40085_vrjnaj.png",
    category: "social",
    title: "Electronics — 4",
    titleEn: "Electronics 4"
  },

  // Festival (1)
  {
    file: "https://res.cloudinary.com/mhstudio/image/upload/v1785840883/WhatsApp_Image_2026-07-30_at_5.06.10_PM_2_rkskl9.jpg",
    category: "social",
    title: "Festival Campaign",
    titleEn: "Festival Campaign"
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
  ui: "assets/ui/"
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
window.PROFILE_FOLDER = "";
