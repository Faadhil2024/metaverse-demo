import { Envelope, Question, Buildings, Globe, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left: intro */}
        <div>
          <span className="text-xs uppercase tracking-wide text-[var(--accent)]">
            Contact us
          </span>
          <h1 className="mt-3 font-display text-4xl">How can we help?</h1>
          <p className="mt-4 text-[var(--text-muted)]">
            We work closely with artists, creators, and studios turning
            still work into living, interactive pieces.
          </p>
          <p className="mt-4 text-[var(--text-muted)]">
            From custom module access to onboarding support, our team is
            here to help at every stage.
          </p>
        </div>

        {/* Right: dummy form */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="First name *"
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
            />
            <input
              placeholder="Last name *"
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
            <Envelope size={16} className="text-[var(--text-muted)]" />
            <input
              placeholder="Email address *"
              className="w-full bg-transparent text-sm placeholder:text-[var(--text-muted)] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
            <Question size={16} className="text-[var(--text-muted)]" />
            <select className="w-full bg-transparent text-sm text-[var(--text-muted)] focus:outline-none">
              <option>Type of inquiry *</option>
              <option>General question</option>
              <option>Partnership</option>
              <option>Support</option>
            </select>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
            <Buildings size={16} className="text-[var(--text-muted)]" />
            <input
              placeholder="Company name"
              className="w-full bg-transparent text-sm placeholder:text-[var(--text-muted)] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
            <Globe size={16} className="text-[var(--text-muted)]" />
            <select className="w-full bg-transparent text-sm text-[var(--text-muted)] focus:outline-none">
              <option>Country *</option>
              <option>Malaysia</option>
              <option>Singapore</option>
              <option>United States</option>
            </select>
          </div>

          <textarea
            placeholder="Message *"
            rows={4}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
          />

          <button className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[#14121A] transition-transform duration-100 active:scale-95">
            Send message
            <PaperPlaneTilt size={16} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}