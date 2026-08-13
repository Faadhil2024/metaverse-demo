import Link from "next/link";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import ResourcesDropdown from "@/components/ResourcesDropdown";

export default function Nav({ transparent = false }: { transparent?: boolean }) {
  return (
    <header
      className={
        transparent
          ? "absolute inset-x-0 top-0 z-30 bg-transparent"
          : "sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className={`flex items-center gap-2 font-display text-lg ${
            transparent ? "text-white" : ""
          }`}
        >
          <Sparkle size={18} weight="fill" className="text-[var(--accent)]" />
          Metaverse
        </Link>

        <nav
          className={`hidden items-center gap-8 text-sm md:flex ${
            transparent ? "text-white/80" : "text-[var(--text-muted)]"
          }`}
        >
          <Link
            href="/explore"
            className={`transition-colors duration-150 ${
              transparent ? "hover:text-white" : "hover:text-[var(--text)]"
            }`}
          >
            Explore
          </Link>
          <ResourcesDropdown transparent={transparent} />
          <Link
            href="/pricing"
            className={`transition-colors duration-150 ${
              transparent ? "hover:text-white" : "hover:text-[var(--text)]"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className={`transition-colors duration-150 ${
              transparent ? "hover:text-white" : "hover:text-[var(--text)]"
            }`}
          >
            Contact us
          </Link>
          <Link
            href="/project"
            className={`transition-colors duration-150 ${
              transparent ? "hover:text-white" : "hover:text-[var(--text)]"
            }`}
          >
            Projects
          </Link>
        </nav>

        <div className="flex items-center gap-3">
  <Link
    href="/login"
    className={`text-sm transition-colors duration-150 active:scale-95 ${
      transparent ? "text-white/80 hover:text-white" : "text-[var(--text-muted)] hover:text-[var(--text)]"
    }`}
  >
    Log in
  </Link>
  <Link
    href="/signup"
    className={`rounded-full px-4 py-2 text-sm font-medium transition-transform duration-100 active:scale-95 ${
      transparent ? "bg-white text-black" : "bg-[var(--accent)] text-[#14121A]"
    }`}
  >
    Get started
  </Link>
</div>
      </div>
    </header>
  );
}