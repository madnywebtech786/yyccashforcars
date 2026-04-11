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
  "privacy-policy",
  "terms-of-use",
  "gallery",
  "faqs",
  "services",
  "services/cash-for-junk-cars",
  "services/scrap-car-removal",
  "locations",
  "locations/airdrie",
  "locations/banff",
  "locations/bearspaw",
  "locations/beiseker",
  "locations/bennett",
  "locations/blackie",
  "locations/bragg-creek",
  "locations/brooks",
  "locations/canmore",
  "locations/carstairs",
  "locations/carseland",
  "locations/cheadle",
  "locations/chestermere",
  "locations/cochrane",
  "locations/crossfield",
  "locations/cremona",
  "locations/didsbury",
  "locations/drumheller",
  "locations/high-river",
  "locations/indus",
  "locations/lake-louise",
  "locations/lethbridge",
  "locations/okotoks",
  "locations/red-deer",
  "locations/strathmore",
  "locations/three-hills",
  "blog",
];

export const getOgImageForPath = (path) => {
  const normalized = path.replace(/^\/+/, "");
  const index = Math.max(staticPages.indexOf(normalized), 0);
  const image = fallbackImages[index % fallbackImages.length];
  return new URL(image, baseUrl).toString();
};
