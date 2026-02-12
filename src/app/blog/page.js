import BlogList from "./BlogList";
import { getAllPosts } from "@/lib/blog";
import { getOgImageForPath } from "@/lib/seo";

const ogImage = getOgImageForPath("blog");

export const metadata = {
  title: "Blog - YYC Cash for Cars",
  description: "Tips, guides, and updates from YYC Cash for Cars.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog - YYC Cash for Cars",
    description: "Tips, guides, and updates from YYC Cash for Cars.",
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
    title: "Blog - YYC Cash for Cars",
    description: "Tips, guides, and updates from YYC Cash for Cars.",
    images: [ogImage],
  },
};

const PAGE_SIZE = 4;

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const totalPages = Math.max(Math.ceil(posts.length / PAGE_SIZE), 1);
  const pagedPosts = posts.slice(0, PAGE_SIZE);

  return (
    <BlogList posts={pagedPosts} currentPage={1} totalPages={totalPages} />
  );
}
