"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Envelope, LockKey, User as UserIcon, Spinner } from "@phosphor-icons/react/dist/ssr";
import { useToast } from "@/components/ui/ToastProvider";
import { saveUser } from "@/lib/auth";

export default function Signup() {
  const router = useRouter();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim()) {
      showToast("error", "Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("error", "That email address doesn't look right.");
      return;
    }
    if (password.length < 6) {
      showToast("error", "Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      saveUser({ name, email, tier: "free" });
      setLoading(false);
      showToast("success", "Account created. Choose your plan next.");
      router.push("/pricing?onboarding=1");
    }, 800);
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-140px)] max-w-sm flex-col justify-center px-6 py-20">
      <h1 className="font-display text-3xl">Create your account</h1>
      <p className="mt-2 text-sm text-[var(--text-muted)]">
        Start bringing your art to life, free.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
        <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 transition-colors duration-150 focus-within:border-[var(--accent)]">
          <UserIcon size={16} className="text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent text-sm placeholder:text-[var(--text-muted)] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 transition-colors duration-150 focus-within:border-[var(--accent)]">
          <Envelope size={16} className="text-[var(--text-muted)]" />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent text-sm placeholder:text-[var(--text-muted)] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 transition-colors duration-150 focus-within:border-[var(--accent)]">
          <LockKey size={16} className="text-[var(--text-muted)]" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent text-sm placeholder:text-[var(--text-muted)] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[#14121A] transition-transform duration-100 active:scale-95 disabled:opacity-60"
        >
          {loading && <Spinner size={16} className="animate-spin" />}
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
        Already have an account?{" "}
        <Link href="/login" className="text-[var(--accent)] hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}