export const baseUrl = "https://www.yyccash.com";

export const fallbackImages = [
  "/images/gallery/g1.jpeg",
  "/images/gallery/g2.jpeg",
  "/images/gallery/g3.jpeg",
  "/images/gallery/g4.jpeg",
  "/images/gallery/g5.jpeg",
  "/images/gallery/g6.jpeg",
  "/images/gallery/g7.jpeg",
  "/images/gallery/g8.jpeg",
  "/images/gallery/g9.jpeg",
  "/images/gallery/g10.jpeg",
  "/images/gallery/g11.jpeg",
  "/images/gallery/g12.jpeg",
  "/images/gallery/g13.jpeg",
];

export const staticPages = [
  "",
  "about-us",
  "contact",
  "gallery",
  "faqs",
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
