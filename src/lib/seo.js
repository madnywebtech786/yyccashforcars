export const baseUrl = "https://www.yyccash.com";

export const fallbackImages = [
  "/images/gallery/g1.webp",
  "/images/gallery/g2.webp",
  "/images/gallery/g3.webp",
  "/images/gallery/g4.webp",
  "/images/gallery/g5.webp",
  "/images/gallery/g6.webp",
  "/images/gallery/g7.webp",
  "/images/gallery/g8.webp",
  "/images/gallery/g9.webp",
  "/images/gallery/g10.webp",
  "/images/gallery/g11.webp",
  "/images/gallery/g12.webp",
  "/images/gallery/g13.webp",
];

export const staticPages = [
  "",
  "about-us",
  "contact",
  "gallery",
  "faqs",
  "services",
  "services/cash-for-junk-cars",
  "services/scrap-car-removal",
  "locations/calgary",
  "locations/airdrie",
  "locations/okotoks",
  "locations/cochrane",
  "locations/chestermere",
  "locations/high-river",
  "locations/strathmore",
  "locations/canmore",
  "blog",
];

export const getOgImageForPath = (path) => {
  const normalized = path.replace(/^\/+/, "");
  const index = Math.max(staticPages.indexOf(normalized), 0);
  const image = fallbackImages[index % fallbackImages.length];
  return new URL(image, baseUrl).toString();
};
