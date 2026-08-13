"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Envelope, LockKey, Spinner } from "@phosphor-icons/react/dist/ssr";
import { useToast } from "@/components/ui/ToastProvider";
import { getUser, saveUser } from "@/lib/auth";

export default function Login() {
  const router = useRouter();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

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
      const existing = getUser();
      if (!existing) {
        saveUser({ name: email.split("@")[0], email, tier: "free" });
      }
      setLoading(false);
      showToast("success", "Logged in.");
      router.push("/project");
    }, 800);
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-140px)] max-w-sm flex-col justify-center px-6 py-20">
      <h1 className="font-display text-3xl">Welcome back</h1>
      <p className="mt-2 text-sm text-[var(--text-muted)]">
        Log in to continue to your projects.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
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
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-[var(--accent)] hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}