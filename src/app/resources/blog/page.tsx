import { blogPosts } from "@/lib/data";
import BlogCard from "@/components/blog/BlogCard";

export default function Blog() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <h1 className="font-display text-4xl">Blog</h1>
        <p className="mt-3 text-[var(--text-muted)]">
          News, stories, and updates from the team.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}