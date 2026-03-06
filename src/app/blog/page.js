import BlogList from "./BlogList";
import { getAllPosts } from "@/lib/blog";
import { getOgImageForPath } from "@/lib/seo";

const ogImage = getOgImageForPath("blog");

export const metadata = {
  title: "YYC Cash for Cars Blog – Guides & Tips in Calgary",
  description: "Explore expert tips on scrap car removal, junk car selling & car value in Calgary. Stay updated with cash‑for‑cars guides from YYC Cash for Cars.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "YYC Cash for Cars Blog – Guides & Tips in Calgary",
    description: "Explore expert tips on scrap car removal, junk car selling & car value in Calgary. Stay updated with cash‑for‑cars guides from YYC Cash for Cars.",
    url: "https://www.yyccash.com/blog",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "YYC Cash for Cars Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YYC Cash for Cars Blog – Guides & Tips in Calgary",
    description: "Explore expert tips on scrap car removal, junk car selling & car value in Calgary. Stay updated with cash‑for‑cars guides from YYC Cash for Cars.",
    images: [ogImage],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return <BlogList posts={posts} />;
}
