import { getAllPosts } from "@/lib/blog";
import { baseUrl, fallbackImages, staticPages } from "@/lib/seo";

export default function sitemap() {
  const now = new Date().toISOString();

  const postPages = getAllPosts().map((post) => {
    const coverUrl = post.cover
      ? new URL(post.cover, baseUrl).toString()
      : `${baseUrl}/images/gallery/g7.webp`;

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date || undefined,
      images: [coverUrl],
    };
  });

  return [
    ...staticPages
      .filter((path) => path !== "thank-you")
      .map((path, index) => ({
      url: `${baseUrl}/${path}`.replace(/\/$/, ""),
      lastModified: now,
      images: [
        new URL(
          fallbackImages[index % fallbackImages.length],
          baseUrl
        ).toString(),
      ],
    })),
    ...postPages,
  ];
}
