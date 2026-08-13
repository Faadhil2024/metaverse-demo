import { creditPacks } from "@/lib/data";

export default function CreditsSection() {
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl">Top-up credits</h2>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Running low? Purchase additional credits anytime. Available for
          Creator and Creator Pro plans.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {creditPacks.map((pack) => (
          <button
            key={pack.credits}
            className="flex flex-col items-start rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 text-left transition-colors duration-150 hover:border-[var(--text-muted)] active:scale-95"
          >
            <span className="font-display text-2xl">{pack.credits}</span>
            <span className="text-sm text-[var(--text-muted)]">credits</span>
            <span className="mt-4 text-sm">${pack.price}</span>
          </button>
        ))}
      </div>
    </div>
  );
}