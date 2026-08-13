import Link from "next/link";
import type { BlogPost } from "@/lib/data";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/resources/blog/${post.slug}`} className="group flex flex-col">
      <div className="aspect-video rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-150 group-hover:border-[var(--text-muted)]" />
      <span className="mt-4 text-xs text-[var(--text-muted)]">{post.date}</span>
      <h3 className="mt-1 font-display text-lg">{post.title}</h3>
      <p className="mt-1 text-sm text-[var(--text-muted)]">{post.excerpt}</p>
      <span className="mt-3 text-sm text-[var(--accent)] underline underline-offset-4">
        Read more
      </span>
    </Link>
  );
}