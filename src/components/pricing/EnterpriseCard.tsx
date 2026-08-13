import { Check } from "@phosphor-icons/react/dist/ssr";
import type { EnterpriseTier } from "@/lib/data";

export default function EnterpriseCard({ tier }: { tier: EnterpriseTier }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <h3 className="font-display text-xl">{tier.name}</h3>
      <p className="mt-1 text-sm text-[var(--text-muted)]">{tier.description}</p>

      <button className="mt-5 w-full rounded-full border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm transition-colors duration-150 hover:text-[var(--text)] active:scale-95">
        Contact sales
      </button>

      <ul className="mt-6 flex flex-col gap-3 text-sm text-[var(--text-muted)]">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}