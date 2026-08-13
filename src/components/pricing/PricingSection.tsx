"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { pricingTiers } from "@/lib/data";
import PricingCard from "@/components/pricing/PricingCard";
import { useToast } from "@/components/ui/ToastProvider";
import { getUser, setTier as saveTier } from "@/lib/auth";

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const router = useRouter();
  const { showToast } = useToast();

  function handleSelect(tierId: string, price: number, period: string) {
    const user = getUser();

    if (!user) {
      router.push("/signup");
      return;
    }

    if (tierId === "free") {
      saveTier("free");
      showToast("success", "You're on the Free plan.");
      router.push("/project");
      return;
    }

    router.push(`/billing?plan=${tierId}&price=${price}&period=${encodeURIComponent(period)}`);
  }

  return (
    <div>
      <div className="mb-10 flex justify-center">
        <div className="flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 text-sm">
          <button
            onClick={() => setAnnual(false)}
            className={`rounded-full px-4 py-1.5 transition-colors duration-150 ${
              !annual ? "bg-[var(--accent)] text-[#14121A]" : "text-[var(--text-muted)]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`rounded-full px-4 py-1.5 transition-colors duration-150 ${
              annual ? "bg-[var(--accent)] text-[#14121A]" : "text-[var(--text-muted)]"
            }`}
          >
            Annually
          </button>
        </div>
        {!annual && (
          <span className="ml-3 self-center text-xs text-[var(--accent)]">
            2 months off with annual
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pricingTiers.map((tier) => {
          const price =
            tier.monthlyPrice === 0 ? 0 : annual ? tier.monthlyPrice * 10 : tier.monthlyPrice;
          const period = annual ? "/year" : "/month";
          return (
            <PricingCard
              key={tier.id}
              tier={tier}
              price={price}
              period={period}
              onSelect={() => handleSelect(tier.id, price, period)}
            />
          );
        })}
      </div>
    </div>
  );
}