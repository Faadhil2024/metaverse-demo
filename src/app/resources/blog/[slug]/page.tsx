import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { blogPosts } from "@/lib/data";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/resources/blog"
        className="mb-8 flex w-fit items-center gap-2 text-sm text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text)]"
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Link>

      <span className="text-xs text-[var(--text-muted)]">{post.date}</span>
      <h1 className="mt-2 font-display text-4xl">{post.title}</h1>
      <p className="mt-4 text-[var(--text-muted)]">{post.excerpt}</p>

      <div className="mt-10 aspect-video rounded-xl border border-[var(--border)] bg-[var(--surface)]" />

      <p className="mt-8 text-[var(--text-muted)]">
        Full post content coming soon. This is a placeholder for the
        complete article.
      </p>
    </div>
  );
}