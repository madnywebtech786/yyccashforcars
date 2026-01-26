import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { getOgImageForPath, fallbackImages, staticPages as sitemapPages } from "@/lib/seo";

export const metadata = {
  title: "Search | YYC Cash for Cars",
  description: "Search YYC Cash for Cars pages and blog posts.",
  openGraph: {
    images: [getOgImageForPath("blog")],
  },
  twitter: {
    images: [getOgImageForPath("blog")],
  },
};

const staticPages = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  { title: "Contact", href: "/contact" },
  { title: "Gallery", href: "/gallery" },
  { title: "FAQs", href: "/faqs" },
  { title: "Blog", href: "/blog" },
  { title: "Cash for Junk Cars", href: "/services/cash-for-junk-cars" },
  { title: "Scrap Car Removal", href: "/services/scrap-car-removal" },
  { title: "Calgary", href: "/locations/calgary" },
  { title: "Airdrie", href: "/locations/airdrie" },
  { title: "Okotoks", href: "/locations/okotoks" },
  { title: "Cochrane", href: "/locations/cochrane" },
  { title: "Chestermere", href: "/locations/chestermere" },
  { title: "High River", href: "/locations/high-river" },
  { title: "Strathmore", href: "/locations/strathmore" },
  { title: "Canmore", href: "/locations/canmore" },
].map((page) => {
  const normalized = page.href === "/" ? "" : page.href.slice(1);
  const index = Math.max(sitemapPages.indexOf(normalized), 0);
  return {
    ...page,
    image: fallbackImages[index % fallbackImages.length],
  };
});

const normalize = (value) =>
  (value || "").toString().toLowerCase().trim();

export default function SearchPage({ searchParams }) {
  const query = normalize(searchParams?.s || searchParams?.q);
  const posts = getAllPosts();

  const matchedPages = query
    ? staticPages.filter((page) => normalize(page.title).includes(query))
    : [];

  const matchedPosts = query
    ? posts.filter((post) => {
        const haystack = [
          post.title,
          post.description,
          post.metaTitle,
          post.metaDescription,
          post.content,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query);
      })
    : [];

  return (
    <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-4">Search</h1>
        <p className="text-gray-600 mb-10">
          {query ? `Results for "${query}"` : "Enter a search term."}
        </p>

        {query && matchedPages.length === 0 && matchedPosts.length === 0 ? (
          <p className="text-gray-600">No results found.</p>
        ) : (
          <>
            {matchedPages.length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-black mb-4">Pages</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {matchedPages.map((page) => (
                    <article
                      key={page.href}
                      className="rounded-3xl border border-gray-100 shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-all duration-300"
                    >
                      <Link href={page.href}>
                        <Image
                          src={page.image}
                          alt={page.title}
                          width={1200}
                          height={700}
                          className="h-48 w-full object-cover"
                        />
                      </Link>
                      <div className="p-6">
                        <Link
                          href={page.href}
                          className="text-lg font-semibold text-black hover:text-primary"
                        >
                          {page.title}
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {matchedPosts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Blog Posts</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {matchedPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="rounded-3xl border border-gray-100 shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-all duration-300"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <Image
                          src={post.cover || "/images/gallery/g7.jpeg"}
                          alt={post.title}
                          width={1200}
                          height={700}
                          className="h-48 w-full object-cover"
                        />
                      </Link>
                      <div className="p-6">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-lg font-semibold text-black hover:text-primary"
                        >
                          {post.title}
                        </Link>
                        {post.description && (
                          <p className="text-sm text-gray-600 mt-1">
                            {post.description}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
