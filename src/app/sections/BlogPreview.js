import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogPreviewSection() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h3 className="text-4xl font-bold text-black mb-4">
              Latest
              <span className="mx-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Blog Posts
              </span>
            </h3>
            <p className="text-black text-lg max-w-2xl">
              Tips, guides, and updates from the YYC Cash for Cars team.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 hover:shadow-lg transition-all duration-300"
          >
            View All Blog Posts
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl border border-gray-100 shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-all duration-300"
            >
              {post.cover && (
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    src={post.cover}
                    alt={post.title}
                    width={1200}
                    height={700}
                    className="h-48 w-full object-cover"
                  />
                </Link>
              )}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {formatDate(post.date)}
                </p>
                <h4 className="text-xl font-bold text-black mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </h4>
                <p className="text-black text-sm mb-4">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
