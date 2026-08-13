import Link from "next/link";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:justify-between">
        <div className="flex items-center gap-2 font-display text-lg">
          <Sparkle size={18} weight="fill" className="text-[var(--accent)]" />
          Metaverse
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm text-[var(--text-muted)] sm:grid-cols-3">
          <div className="flex flex-col gap-3">
            <Link href="/" className="hover:text-[var(--text)]">Home</Link>
            <Link href="/explore" className="hover:text-[var(--text)]">Explore</Link>
            <Link href="/pricing" className="hover:text-[var(--text)]">Pricing</Link>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/project" className="hover:text-[var(--text)]">Projects</Link>
            <Link href="/resources" className="hover:text-[var(--text)]">Resources</Link>
            <Link href="/contact" className="hover:text-[var(--text)]">Contact us</Link>
          </div>

          <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
            <span className="cursor-default hover:text-[var(--text)]">Privacy</span>
            <span className="cursor-default hover:text-[var(--text)]">Terms of Service</span>
            <span className="cursor-default hover:text-[var(--text)]">Refund Policy</span>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)] px-6 py-6 text-center text-xs text-[var(--text-muted)]">
        © 2026 Metaverse. All rights reserved.
      </div>
    </footer>
  );
}