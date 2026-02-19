"use client";

import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import { useMemo, useState } from "react";

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

const PAGE_SIZE = 6;

export default function BlogList({ posts }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visiblePosts = useMemo(
    () => posts.slice(0, visibleCount),
    [posts, visibleCount]
  );
  const hasMore = visibleCount < posts.length;

  return (
    <div className="dark:bg-white">
      <Breadcrumb
        name="Blog"
        subtitle="Tips, guides, and updates from the YYC Cash for Cars team."
        titleAs="h1"
      />
      <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
        <div className="max-w-7xl mx-auto">
            {posts.length === 0 ? (
              <p className="text-center text-gray-600">
                No posts yet. Add Markdown files to `content/blog`.
              </p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {visiblePosts.map((post) => (
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
                          className="h-56 w-full object-cover"
                        />
                      </Link>
                    )}
                    <div className="p-8">
                      <p className="text-sm text-gray-500 mb-2">
                        {formatDate(post.date)}
                      </p>
                      <h2 className="text-2xl font-bold text-black mb-3">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-primary"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-black mb-6">{post.description}</p>
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
            )}

            {posts.length > 0 && hasMore && (
              <div className="flex items-center justify-center mt-12">
                <button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  Load More
                </button>
              </div>
            )}
        </div>
      </section>
    </div>
  );
}
