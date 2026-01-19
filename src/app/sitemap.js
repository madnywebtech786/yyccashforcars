import { getAllPosts } from "@/lib/blog";

export default function sitemap() {
  const baseUrl = "https://www.yyccash.com";

  const staticPages = [
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

  const postPages = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date || undefined,
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}/${path}`.replace(/\/$/, ""),
    })),
    ...postPages,
  ];
}
