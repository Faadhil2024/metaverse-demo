import CategorizedFAQ from "@/components/resources/CategorizedFAQ";

export default function FAQ() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-14 text-center">
        <h1 className="font-display text-4xl">Frequently asked questions</h1>
        <p className="mt-3 text-[var(--text-muted)]">
          Everything you need to know about the platform.
        </p>
      </div>

      <CategorizedFAQ />
    </div>
  );
}