"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CreditCard, Lock, Spinner } from "@phosphor-icons/react/dist/ssr";
import { useToast } from "@/components/ui/ToastProvider";
import { setTier, type Tier } from "@/lib/auth";

function BillingForm() {
  const router = useRouter();
  const params = useSearchParams();
  const { showToast } = useToast();

  const plan = (params.get("plan") as Tier) ?? "creator";
  const price = params.get("price") ?? "0";
  const period = params.get("period") ?? "/month";

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim()) {
      showToast("error", "Enter the name on your card.");
      return;
    }
    if (cardNumber.replace(/\s/g, "").length !== 16 || !/^\d+$/.test(cardNumber.replace(/\s/g, ""))) {
      showToast("error", "Card number must be 16 digits.");
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      showToast("error", "Expiry must be in MM/YY format.");
      return;
    }
    if (!/^\d{3,4}$/.test(cvc)) {
      showToast("error", "CVC must be 3 or 4 digits.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setTier(plan);
      setLoading(false);
      showToast("success", "Payment authorized. Plan upgraded.");
      router.push("/project");
    }, 1200);
  }

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <div className="mb-8 flex items-center gap-2 text-sm text-[var(--text-muted)]">
        <Lock size={14} />
        Secure checkout (demo)
      </div>

      <h1 className="font-display text-3xl capitalize">{plan.replace("-", " ")} plan</h1>
      <p className="mt-2 text-[var(--text-muted)]">
        {price === "0" ? "Free" : `$${price}`} {price !== "0" && period}
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
        <input
          placeholder="Name on card"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm placeholder:text-[var(--text-muted)] transition-colors duration-150 focus:border-[var(--accent)] focus:outline-none"
        />

        <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 transition-colors duration-150 focus-within:border-[var(--accent)]">
          <CreditCard size={16} className="text-[var(--text-muted)]" />
          <input
            placeholder="Card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={19}
            className="w-full bg-transparent text-sm placeholder:text-[var(--text-muted)] focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm placeholder:text-[var(--text-muted)] transition-colors duration-150 focus:border-[var(--accent)] focus:outline-none"
          />
          <input
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            maxLength={4}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm placeholder:text-[var(--text-muted)] transition-colors duration-150 focus:border-[var(--accent)] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[#14121A] transition-transform duration-100 active:scale-95 disabled:opacity-60"
        >
          {loading && <Spinner size={16} className="animate-spin" />}
          {loading ? "Authorizing..." : "Confirm and pay"}
        </button>
      </form>
    </div>
  );
}

export default function Billing() {
  return (
    <Suspense>
      <BillingForm />
    </Suspense>
  );
}