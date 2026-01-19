import { getAllPosts } from "@/lib/blog";

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export function GET() {
  const baseUrl = "https://www.yyccash.com";
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const title = escapeXml(post.metaTitle || post.title);
      const description = escapeXml(
        post.metaDescription || post.description || ""
      );
      const link = `${baseUrl}/blog/${post.slug}`;
      const pubDate = post.date
        ? new Date(post.date).toUTCString()
        : new Date().toUTCString();

      return `
        <item>
          <title>${title}</title>
          <link>${link}</link>
          <guid>${link}</guid>
          <description>${description}</description>
          <pubDate>${pubDate}</pubDate>
        </item>
      `.trim();
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>YYC Cash for Cars Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Tips, guides, and updates from YYC Cash for Cars.</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=UTF-8",
    },
  });
}
