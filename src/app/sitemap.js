import { getAllPosts } from "@/lib/blog";
import { baseUrl, fallbackImages, staticPages } from "@/lib/seo";

export default function sitemap() {
  const postPages = getAllPosts().map((post) => {
    const coverUrl = post.cover
      ? new URL(post.cover, baseUrl).toString()
      : `${baseUrl}/images/gallery/g7.jpeg`;

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date || undefined,
      images: [coverUrl],
    };
  });

  return [
    ...staticPages.map((path, index) => ({
      url: `${baseUrl}/${path}`.replace(/\/$/, ""),
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
