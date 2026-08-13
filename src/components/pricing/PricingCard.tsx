import { Check } from "@phosphor-icons/react/dist/ssr";
import type { PricingTier } from "@/lib/data";

export default function PricingCard({
  tier,
  price,
  period,
  onSelect,
}: {
  tier: PricingTier;
  price: number;
  period: string;
  onSelect: () => void;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 ${
        tier.popular
          ? "border-[var(--accent)] bg-[var(--surface)]"
          : "border-[var(--border)] bg-[var(--surface)]"
      }`}
    >
      {tier.popular && (
        <span className="absolute -top-3 right-6 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium text-[#14121A]">
          Most popular
        </span>
      )}

      <h3 className="font-display text-xl">{tier.name}</h3>
      <p className="mt-1 text-sm text-[var(--text-muted)]">{tier.description}</p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="font-display text-3xl">
          {price === 0 ? "Free" : `$${price}`}
        </span>
        {price > 0 && <span className="text-sm text-[var(--text-muted)]">{period}</span>}
      </div>

      <button
        onClick={onSelect}
        className={`mt-6 w-full rounded-full px-4 py-2.5 text-sm font-medium transition-transform duration-100 active:scale-95 ${
          tier.popular
            ? "bg-[var(--accent)] text-[#14121A]"
            : "border border-[var(--border)] bg-transparent text-[var(--text)]"
        }`}
      >
        Get started
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