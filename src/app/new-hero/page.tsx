

import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { modules } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Home() {
  const featured = modules.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="grid grid-cols-1 items-center gap-10 py-24 md:grid-cols-2 md:py-32">
        <div>
          <Reveal>
            <h1 className="font-display text-5xl leading-[1.05] md:text-6xl">
              Bring your art
              <br />
              <span className="italic text-[var(--accent)]">
                to life.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-[var(--text-muted)]">
              Upload a piece, choose a module, and watch it transform. One
              platform, an ecosystem of tools.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex gap-3">
              <button className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[#14121A] transition-transform duration-100 active:scale-95">
                Get started
                <ArrowRight size={16} />
              </button>

              <button className="rounded-full border border-[var(--border)] bg-transparent px-5 py-2.5 text-sm transition-colors duration-150 hover:text-[var(--text)] active:scale-95">
                See how it works
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-[var(--bg)] bg-[var(--surface)]" />
                <div className="h-8 w-8 rounded-full border-2 border-[var(--bg)] bg-[var(--surface)]" />
                <div className="h-8 w-8 rounded-full border-2 border-[var(--bg)] bg-[var(--surface)]" />
              </div>

              <div className="text-sm">
                <span className="font-display">10k+</span>{" "}
                <span className="text-[var(--text-muted)]">
                  pieces transformed
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative aspect-square w-full md:aspect-[15/14]">
            <div className="absolute inset-0 overflow-hidden rounded-3xl bg-[var(--surface)]">
              <video
                src="/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />

              {/* Top-left stepped snips — UNCHANGED */}
              <div className="absolute left-12 top-0 h-16 w-16 rounded-br-3xl bg-[var(--bg)]" />
              <div className="absolute left-0 top-0 h-16 w-16 rounded-br-3xl bg-[var(--bg)]" />

              <div className="absolute left-0 top-15 h-16 w-16 rotate- rounded-br-3xl bg-[var(--bg)]" />

              {/* Bottom-right snip — UNCHANGED */}
              <div className="absolute bottom-0 right-0 h-16 w-16 rounded-tl-3xl bg-[var(--bg)]" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-[var(--border)] py-20">
        <Reveal>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl">
                Explore modules
              </h2>

              <p className="mt-2 text-[var(--text-muted)]">
                A few ways to get started.
              </p>
            </div>

            <a
              href="/explore"
              className="hidden items-center gap-1 text-sm text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text)] md:flex"
            >
              View all
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {featured.map((module, i) => (
            <Reveal key={module.id} delay={i * 0.1}>
              <a
                href={"/explore/" + module.id}
                className="group block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-150 hover:border-[var(--text-muted)]"
              >
                <span className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
                  {module.category}
                </span>

                <h3 className="mt-3 font-display text-xl">
                  {module.name}
                </h3>

                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  {module.description}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}